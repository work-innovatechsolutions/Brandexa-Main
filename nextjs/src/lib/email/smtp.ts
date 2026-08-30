import net from "node:net";
import tls from "node:tls";

export type SmtpConfig = {
  host: string;
  port: number;
  user: string;
  pass: string;
  from: string;
  secure: boolean;
};

const CRLF = "\r\n";
const SMTP_TIMEOUT_MS = 10000;

export function getSmtpConfig(): SmtpConfig | null {
  const host = process.env.SMTP_HOST?.replace(/^["']|["']$/g, "").trim();
  const user = process.env.SMTP_USER?.replace(/^["']|["']$/g, "").trim();
  // Strip surrounding quotes AND internal whitespace from password (dotenv quirk with special chars)
  const pass = process.env.SMTP_PASS?.replace(/^["']|["']$/g, "");
  const from = (process.env.SMTP_FROM || process.env.SMTP_USER)?.replace(/^["']|["']$/g, "").trim();
  const port = Number(process.env.SMTP_PORT || 465);

  if (!host || !user || !pass || !from || Number.isNaN(port)) {
    console.warn("[SMTP] Missing required env vars. SMTP_HOST:", !!host, "SMTP_USER:", !!user, "SMTP_PASS:", !!pass);
    return null;
  }

  console.log("[SMTP] Connecting to", host, "port", port, "as", user);

  return {
    host,
    port,
    user,
    pass,
    from,
    secure: process.env.SMTP_SECURE === "true" || port === 465,
  };
}

function sanitizeHeader(value: string) {
  return value.replace(/[\r\n]+/g, " ").trim();
}

function readResponse(socket: net.Socket | tls.TLSSocket, timeoutMs = SMTP_TIMEOUT_MS) {
  return new Promise<string>((resolve, reject) => {
    let buffer = "";

    const timer = setTimeout(() => {
      cleanup();
      reject(new Error(`SMTP response timed out after ${timeoutMs}ms. Buffer so far: "${buffer}"`));
    }, timeoutMs);

    const cleanup = () => {
      clearTimeout(timer);
      socket.off("data", onData);
      socket.off("error", onError);
    };

    const onError = (error: Error) => {
      cleanup();
      reject(error);
    };

    const onData = (chunk: Buffer) => {
      buffer += chunk.toString("utf8");
      const lines = buffer.split(/\r?\n/).filter(Boolean);
      const lastLine = lines[lines.length - 1];

      if (/^\d{3}[ -]/.test(lastLine || "") && !/^\d{3}-/.test(lastLine)) {
        cleanup();
        resolve(buffer);
      }
    };

    socket.on("data", onData);
    socket.on("error", onError);
  });
}

function assertSmtpOk(response: string, acceptedCodes: number[]) {
  const code = Number(response.slice(0, 3));
  if (!acceptedCodes.includes(code)) {
    throw new Error(`SMTP rejected the request: ${response.trim()}`);
  }
}

async function connectSmtp(config: SmtpConfig) {
  let socket: net.Socket | tls.TLSSocket;

  if (config.secure) {
    // Port 465 — implicit TLS
    socket = tls.connect(config.port, config.host, {
      servername: config.host,
      rejectUnauthorized: false,
    });
    await new Promise<void>((resolve, reject) => {
      const timer = setTimeout(() => { socket.destroy(); reject(new Error(`TLS connect timeout to ${config.host}:${config.port}`)); }, SMTP_TIMEOUT_MS);
      socket.once("secureConnect", () => { clearTimeout(timer); resolve(); });
      socket.once("error", (e) => { clearTimeout(timer); reject(e); });
    });
  } else {
    // Port 587 — plain then STARTTLS
    socket = net.connect(config.port, config.host);
    await new Promise<void>((resolve, reject) => {
      const timer = setTimeout(() => { socket.destroy(); reject(new Error(`TCP connect timeout to ${config.host}:${config.port}`)); }, SMTP_TIMEOUT_MS);
      socket.once("connect", () => { clearTimeout(timer); resolve(); });
      socket.once("error", (e) => { clearTimeout(timer); reject(e); });
    });
  }

  // Wait for server banner (220)
  assertSmtpOk(await readResponse(socket), [220]);

  const write = async (command: string) => {
    socket.write(`${command}${CRLF}`);
    return readResponse(socket);
  };

  const upgrade = async () => {
    const startTlsResponse = await write("STARTTLS");
    assertSmtpOk(startTlsResponse, [220]);
    const plain = socket as net.Socket;
    socket = tls.connect({ socket: plain, servername: config.host, rejectUnauthorized: false });

    await new Promise<void>((resolve, reject) => {
      socket.once("secureConnect", resolve);
      socket.once("error", reject);
    });
  };

  return {
    write,
    upgrade,
    close: () => socket.end(),
  };
}

export async function sendEmail({
  to,
  subject,
  html,
  text,
  fromName = "Brandexa Growth",
}: {
  to: string;
  subject: string;
  html: string;
  text?: string;
  fromName?: string;
}) {
  const config = getSmtpConfig();
  if (!config) {
    console.warn("SMTP configuration is not set in .env. Skipping physical email delivery.");
    return false;
  }

  const connection = await connectSmtp(config);

  try {
    assertSmtpOk(await connection.write(`EHLO ${config.host}`), [250]);

    if (!config.secure) {
      await connection.upgrade();
      assertSmtpOk(await connection.write(`EHLO ${config.host}`), [250]);
    }

    assertSmtpOk(await connection.write("AUTH LOGIN"), [334]);
    assertSmtpOk(await connection.write(Buffer.from(config.user).toString("base64")), [334]);
    assertSmtpOk(await connection.write(Buffer.from(config.pass).toString("base64")), [235]);

    const boundary = `brandexa-mail-${Date.now().toString(36)}`;
    const plainText = text || html.replace(/<[^>]*>?/gm, "");

    const mimeMessage = [
      `From: ${fromName} <${sanitizeHeader(config.from)}>`,
      `To: <${sanitizeHeader(to)}>`,
      `Subject: ${sanitizeHeader(subject)}`,
      "MIME-Version: 1.0",
      `Content-Type: multipart/alternative; boundary="${boundary}"`,
      "",
      `--${boundary}`,
      "Content-Type: text/plain; charset=UTF-8",
      "Content-Transfer-Encoding: 7bit",
      "",
      plainText,
      "",
      `--${boundary}`,
      "Content-Type: text/html; charset=UTF-8",
      "Content-Transfer-Encoding: 7bit",
      "",
      html,
      "",
      `--${boundary}--`,
      "",
    ].join(CRLF);

    assertSmtpOk(await connection.write(`MAIL FROM:<${sanitizeHeader(config.from)}>`), [250]);
    assertSmtpOk(await connection.write(`RCPT TO:<${sanitizeHeader(to)}>`), [250, 251]);
    assertSmtpOk(await connection.write("DATA"), [354]);
    assertSmtpOk(await connection.write(`${mimeMessage}${CRLF}.`), [250]);
    await connection.write("QUIT").catch(() => "");
    return true;
  } finally {
    connection.close();
  }
}
