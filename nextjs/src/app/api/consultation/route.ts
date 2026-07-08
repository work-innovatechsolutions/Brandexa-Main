import net from "node:net";
import tls from "node:tls";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

type ConsultationPayload = {
  name?: string;
  email?: string;
  query?: string;
  meetingDate?: string;
  meetingTime?: string;
};

type SmtpConfig = {
  host: string;
  port: number;
  user: string;
  pass: string;
  from: string;
  secure: boolean;
};

const CRLF = "\r\n";
const SMTP_TIMEOUT_MS = 8000;
const MEETING_LINK = "https://meet.google.com/ugm-kcyy-wub";
const INTERNAL_NOTIFY_TO = "hello@brandexagrowth.com";

function sanitizeHeader(value: string) {
  return value.replace(/[\r\n]+/g, " ").trim();
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function getConfig(): SmtpConfig {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS?.replace(/\s+/g, "");
  const from = process.env.SMTP_FROM || process.env.SMTP_USER;
  const port = Number(process.env.SMTP_PORT || 587);

  if (!host || !user || !pass || !from || Number.isNaN(port)) {
    throw new Error("SMTP is not configured. Add SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, and SMTP_FROM to the environment.");
  }

  return {
    host,
    port,
    user,
    pass,
    from,
    secure: process.env.SMTP_SECURE === "true" || port === 465,
  };
}

function createMessage(payload: Required<ConsultationPayload>, config: SmtpConfig) {
  const brandName = "Brandexa Growth";
  const safeName = sanitizeHeader(payload.name);
  const safeEmail = sanitizeHeader(payload.email);
  const subject = "Your Brandexa Growth consultation is confirmed";
  const htmlQuery = escapeHtml(payload.query).replace(/\n/g, "<br />");
  const safeMeetingDate = escapeHtml(payload.meetingDate);
  const safeMeetingTime = escapeHtml(payload.meetingTime);

  const text = [
    `Hi ${payload.name},`,
    "",
    "Thank you for booking a free consultation with Brandexa Growth. We have received your request and reserved the details below.",
    "",
    "Consultation details:",
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Query: ${payload.query}`,
    `Meeting date: ${payload.meetingDate}`,
    `Time: ${payload.meetingTime}`,
    `Google Meet: ${MEETING_LINK}`,
    "",
    "Please join the meeting at the scheduled time using the Google Meet link above.",
    "If we need any additional details before the call, our team will contact you by email.",
    "",
    "Brandexa Growth",
    "https://www.brandexagrowth.com",
  ].join(CRLF);

  const html = `
    <div style="margin:0; padding:0; background:#f4f6f1; font-family:Arial, Helvetica, sans-serif; color:#181818;">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse; background:#f4f6f1; padding:0; margin:0;">
        <tr>
          <td align="center" style="padding:32px 16px;">
            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse; max-width:680px; background:#ffffff; border-radius:18px; overflow:hidden; box-shadow:0 18px 50px rgba(0,0,0,0.08);">
              <tr>
                <td style="background:#101010; padding:32px 34px;">
                  <p style="margin:0 0 10px; color:#b8ff2c; font-size:13px; font-weight:700; letter-spacing:0.08em; text-transform:uppercase;">Free Consultation</p>
                  <h1 style="margin:0; color:#ffffff; font-size:30px; line-height:1.18; font-weight:800;">Your consultation is confirmed</h1>
                </td>
              </tr>
              <tr>
                <td style="padding:32px 34px 12px;">
                  <p style="margin:0 0 18px; color:#242424; font-size:16px; line-height:1.7;">Hi ${escapeHtml(payload.name)},</p>
                  <p style="margin:0 0 22px; color:#242424; font-size:16px; line-height:1.7;">Thank you for booking a free consultation with <strong>${brandName}</strong>. We have received your request and reserved the details below.</p>

                  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:separate; border-spacing:0; border:1px solid #e5e7df; border-radius:14px; overflow:hidden;">
                    <tr>
                      <td style="padding:14px 16px; background:#fafbf7; border-bottom:1px solid #e5e7df; color:#5f6658; font-size:13px; font-weight:700; text-transform:uppercase;">Name</td>
                      <td style="padding:14px 16px; border-bottom:1px solid #e5e7df; color:#181818; font-size:15px;">${escapeHtml(payload.name)}</td>
                    </tr>
                    <tr>
                      <td style="padding:14px 16px; background:#fafbf7; border-bottom:1px solid #e5e7df; color:#5f6658; font-size:13px; font-weight:700; text-transform:uppercase;">Email</td>
                      <td style="padding:14px 16px; border-bottom:1px solid #e5e7df; color:#181818; font-size:15px;"><a href="mailto:${safeEmail}" style="color:#181818; text-decoration:underline;">${escapeHtml(payload.email)}</a></td>
                    </tr>
                    <tr>
                      <td style="padding:14px 16px; background:#fafbf7; border-bottom:1px solid #e5e7df; color:#5f6658; font-size:13px; font-weight:700; text-transform:uppercase;">Query</td>
                      <td style="padding:14px 16px; border-bottom:1px solid #e5e7df; color:#181818; font-size:15px; line-height:1.6;">${htmlQuery}</td>
                    </tr>
                    <tr>
                      <td style="padding:14px 16px; background:#fafbf7; border-bottom:1px solid #e5e7df; color:#5f6658; font-size:13px; font-weight:700; text-transform:uppercase;">Meeting Date</td>
                      <td style="padding:14px 16px; border-bottom:1px solid #e5e7df; color:#181818; font-size:15px;">${safeMeetingDate}</td>
                    </tr>
                    <tr>
                      <td style="padding:14px 16px; background:#fafbf7; color:#5f6658; font-size:13px; font-weight:700; text-transform:uppercase;">Time</td>
                      <td style="padding:14px 16px; color:#181818; font-size:15px;">${safeMeetingTime}</td>
                    </tr>
                  </table>

                  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse; margin:26px 0 22px;">
                    <tr>
                      <td style="background:#efffd2; border:1px solid #d5f79b; border-radius:14px; padding:22px;">
                        <p style="margin:0 0 12px; color:#2d390f; font-size:14px; font-weight:800; text-transform:uppercase;">Google Meet Link</p>
                        <a href="${MEETING_LINK}" style="display:inline-block; background:#101010; color:#b8ff2c; text-decoration:none; font-size:16px; font-weight:800; padding:13px 20px; border-radius:10px;">Join the Meeting</a>
                        <p style="margin:14px 0 0; color:#38451b; font-size:14px; line-height:1.6;"><a href="${MEETING_LINK}" style="color:#38451b; text-decoration:underline;">${MEETING_LINK}</a></p>
                      </td>
                    </tr>
                  </table>

                  <p style="margin:0 0 16px; color:#4b4b4b; font-size:15px; line-height:1.7;">Please join the meeting at the scheduled time. If we need any additional details before the call, our team will contact you by email.</p>
                </td>
              </tr>
              <tr>
                <td style="padding:22px 34px 30px; background:#fafbf7; border-top:1px solid #e8eadf;">
                  <p style="margin:0 0 6px; color:#101010; font-size:16px; font-weight:800;">${brandName}</p>
                  <p style="margin:0; color:#616161; font-size:14px; line-height:1.6;"><a href="https://www.brandexagrowth.com" style="color:#101010; text-decoration:underline;">www.brandexagrowth.com</a></p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  `;

  const boundary = `brandexa-${Date.now().toString(36)}`;

  return [
    `From: ${brandName} <${sanitizeHeader(config.from)}>`,
    `To: ${safeName} <${safeEmail}>`,
    `Reply-To: ${safeName} <${safeEmail}>`,
    `Subject: ${subject}`,
    "MIME-Version: 1.0",
    `Content-Type: multipart/alternative; boundary="${boundary}"`,
    "",
    `--${boundary}`,
    "Content-Type: text/plain; charset=UTF-8",
    "Content-Transfer-Encoding: 7bit",
    "",
    text,
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
}

function createInternalMessage(payload: Required<ConsultationPayload>, config: SmtpConfig) {
  const brandName = "Brandexa Growth";
  const safeEmail = sanitizeHeader(payload.email);
  const safeMeetingDate = escapeHtml(payload.meetingDate);
  const safeMeetingTime = escapeHtml(payload.meetingTime);
  const htmlQuery = escapeHtml(payload.query).replace(/\n/g, "<br />");
  const subject = `New consultation booked by ${sanitizeHeader(payload.name)}`;

  const text = [
    "A new free consultation has been booked.",
    "",
    "Consultation details:",
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Query: ${payload.query}`,
    `Meeting date: ${payload.meetingDate}`,
    `Time: ${payload.meetingTime}`,
    `Google Meet: ${MEETING_LINK}`,
  ].join(CRLF);

  const html = `
    <div style="margin:0; padding:0; background:#f4f6f1; font-family:Arial, Helvetica, sans-serif; color:#181818;">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse; background:#f4f6f1;">
        <tr>
          <td align="center" style="padding:28px 16px;">
            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse; max-width:680px; background:#ffffff; border-radius:18px; overflow:hidden; box-shadow:0 18px 50px rgba(0,0,0,0.08);">
              <tr>
                <td style="background:#101010; padding:30px 34px;">
                  <p style="margin:0 0 10px; color:#b8ff2c; font-size:13px; font-weight:700; letter-spacing:0.08em; text-transform:uppercase;">New Consultation</p>
                  <h1 style="margin:0; color:#ffffff; font-size:30px; line-height:1.18; font-weight:800;">A consultation has been booked</h1>
                </td>
              </tr>
              <tr>
                <td style="padding:30px 34px;">
                  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:separate; border-spacing:0; border:1px solid #e5e7df; border-radius:14px; overflow:hidden;">
                    <tr>
                      <td style="padding:14px 16px; background:#fafbf7; border-bottom:1px solid #e5e7df; color:#5f6658; font-size:13px; font-weight:700; text-transform:uppercase;">Name</td>
                      <td style="padding:14px 16px; border-bottom:1px solid #e5e7df; color:#181818; font-size:15px;">${escapeHtml(payload.name)}</td>
                    </tr>
                    <tr>
                      <td style="padding:14px 16px; background:#fafbf7; border-bottom:1px solid #e5e7df; color:#5f6658; font-size:13px; font-weight:700; text-transform:uppercase;">Email</td>
                      <td style="padding:14px 16px; border-bottom:1px solid #e5e7df; color:#181818; font-size:15px;"><a href="mailto:${safeEmail}" style="color:#181818; text-decoration:underline;">${escapeHtml(payload.email)}</a></td>
                    </tr>
                    <tr>
                      <td style="padding:14px 16px; background:#fafbf7; border-bottom:1px solid #e5e7df; color:#5f6658; font-size:13px; font-weight:700; text-transform:uppercase;">Query</td>
                      <td style="padding:14px 16px; border-bottom:1px solid #e5e7df; color:#181818; font-size:15px; line-height:1.6;">${htmlQuery}</td>
                    </tr>
                    <tr>
                      <td style="padding:14px 16px; background:#fafbf7; border-bottom:1px solid #e5e7df; color:#5f6658; font-size:13px; font-weight:700; text-transform:uppercase;">Meeting Date</td>
                      <td style="padding:14px 16px; border-bottom:1px solid #e5e7df; color:#181818; font-size:15px;">${safeMeetingDate}</td>
                    </tr>
                    <tr>
                      <td style="padding:14px 16px; background:#fafbf7; color:#5f6658; font-size:13px; font-weight:700; text-transform:uppercase;">Time</td>
                      <td style="padding:14px 16px; color:#181818; font-size:15px;">${safeMeetingTime}</td>
                    </tr>
                  </table>
                  <p style="margin:24px 0 0; color:#4b4b4b; font-size:15px; line-height:1.7;">Google Meet: <a href="${MEETING_LINK}" style="color:#101010; text-decoration:underline;">${MEETING_LINK}</a></p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  `;

  const boundary = `brandexa-internal-${Date.now().toString(36)}`;

  return [
    `From: ${brandName} <${sanitizeHeader(config.from)}>`,
    `To: ${brandName} <${INTERNAL_NOTIFY_TO}>`,
    `Reply-To: ${sanitizeHeader(payload.name)} <${safeEmail}>`,
    `Subject: ${subject}`,
    "MIME-Version: 1.0",
    `Content-Type: multipart/alternative; boundary="${boundary}"`,
    "",
    `--${boundary}`,
    "Content-Type: text/plain; charset=UTF-8",
    "Content-Transfer-Encoding: 7bit",
    "",
    text,
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
}

function readResponse(socket: net.Socket | tls.TLSSocket) {
  return new Promise<string>((resolve, reject) => {
    let buffer = "";

    const cleanup = () => {
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

      if (/^\d{3}\s/.test(lastLine || "")) {
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

function createSmtpTimeoutError(config: SmtpConfig) {
  return new Error(`Could not connect to SMTP server ${config.host}:${config.port}. Check the SMTP host, port, and whether outbound SMTP is allowed from this server.`);
}

async function connectSmtp(config: SmtpConfig) {
  let socket: net.Socket | tls.TLSSocket = config.secure
    ? tls.connect(config.port, config.host, { servername: config.host })
    : net.connect(config.port, config.host);

  socket.setTimeout(SMTP_TIMEOUT_MS);

  await new Promise<void>((resolve, reject) => {
    const cleanup = () => {
      socket.off(config.secure ? "secureConnect" : "connect", onConnect);
      socket.off("error", onError);
      socket.off("timeout", onTimeout);
    };

    const onConnect = () => {
      cleanup();
      resolve();
    };

    const onError = (error: Error) => {
      cleanup();
      reject(error);
    };

    const onTimeout = () => {
      cleanup();
      socket.destroy();
      reject(createSmtpTimeoutError(config));
    };

    socket.once(config.secure ? "secureConnect" : "connect", onConnect);
    socket.once("error", onError);
    socket.once("timeout", onTimeout);
  });

  assertSmtpOk(await readResponse(socket), [220]);

  const write = async (command: string) => {
    socket.write(`${command}${CRLF}`);
    return readResponse(socket);
  };

  const upgrade = async () => {
    const startTlsResponse = await write("STARTTLS");
    assertSmtpOk(startTlsResponse, [220]);
    socket = tls.connect({ socket, servername: config.host });

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

async function sendMail(payload: Required<ConsultationPayload>) {
  const config = getConfig();
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

    const sendSmtpMessage = async (recipient: string, message: string) => {
      assertSmtpOk(await connection.write(`MAIL FROM:<${sanitizeHeader(config.from)}>`), [250]);
      assertSmtpOk(await connection.write(`RCPT TO:<${sanitizeHeader(recipient)}>`), [250, 251]);
      assertSmtpOk(await connection.write("DATA"), [354]);
      assertSmtpOk(await connection.write(`${message}${CRLF}.`), [250]);
    };

    await sendSmtpMessage(payload.email, createMessage(payload, config));
    await sendSmtpMessage(INTERNAL_NOTIFY_TO, createInternalMessage(payload, config));
    await connection.write("QUIT").catch(() => "");
  } finally {
    connection.close();
  }
}

async function saveConsultationToSheet(payload: Required<ConsultationPayload>) {
  const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;

  if (!webhookUrl) {
    return;
  }

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "text/plain;charset=utf-8",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const responseText = await response.text().catch(() => "");
    throw new Error(`Google Sheet rejected the booking: ${response.status} ${responseText}`.trim());
  }
}

export async function POST(request: NextRequest) {
  try {
    const payload = (await request.json()) as ConsultationPayload;
    const name = payload.name?.trim();
    const email = payload.email?.trim();
    const query = payload.query?.trim();
    const meetingDate = payload.meetingDate?.trim();
    const meetingTime = payload.meetingTime?.trim();

    if (!name || !email || !query || !meetingDate || !meetingTime) {
      return NextResponse.json({ error: "Please fill all consultation fields." }, { status: 400 });
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    const consultation = { name, email, query, meetingDate, meetingTime };

    await sendMail(consultation);
    await saveConsultationToSheet(consultation);

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Consultation email error:", error);
    const message = error instanceof Error ? error.message : "Unable to send the consultation confirmation.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
