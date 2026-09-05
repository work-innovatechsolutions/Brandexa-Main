import net from "node:net";
import tls from "node:tls";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

type AdsBookingPayload = {
  fullName?: string;
  name?: string;
  phone?: string;
  whatsapp?: string;
  email?: string;
  valuation?: string;
  date?: string;
  time?: string;
};

type AdsBookingData = {
  fullName: string;
  phone: string;
  email: string;
  valuation: string;
  date: string;
  time: string;
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
    throw new Error(
      "SMTP is not configured. Add SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, and SMTP_FROM to the environment."
    );
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

function createClientConfirmationMessage(payload: AdsBookingData, config: SmtpConfig, isForward = false) {
  const brandName = "Brandexa Growth";
  const safeName = sanitizeHeader(payload.fullName);
  const safeEmail = sanitizeHeader(payload.email);
  const subject = isForward
    ? `Fwd: Your Free Ads Strategy Kickoff Call is Confirmed — ${safeName}`
    : "Your Free Ads Strategy Kickoff Call is Confirmed — Brandexa Growth";
  const toHeader = isForward
    ? `Brandexa Growth Team <${sanitizeHeader(INTERNAL_NOTIFY_TO)}>`
    : `${safeName} <${safeEmail}>`;
  const replyTo = isForward
    ? `${safeName} <${safeEmail}>`
    : `${brandName} <${sanitizeHeader(config.from)}>`;

  const forwardBannerText = isForward
    ? [
        "---------- Forwarded message ---------",
        `From: ${brandName} <${sanitizeHeader(config.from)}>`,
        "Subject: Your Free Ads Strategy Kickoff Call is Confirmed — Brandexa Growth",
        `To: ${safeName} <${safeEmail}>`,
        `WhatsApp: ${payload.phone}`,
        `Valuation Fit: ${payload.valuation}/month tier`,
        "--------------------------------------",
        "",
      ].join(CRLF)
    : "";

  const forwardBannerHtml = isForward
    ? `
      <tr>
        <td style="background:#064e3b; border-bottom:2px solid #34d399; padding:14px 36px; font-size:13px; color:#d1fae5; font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
          <strong>📨 FORWARDED CLIENT COPY</strong><br />
          <strong>Client:</strong> ${escapeHtml(payload.fullName)} &lt;<a href="mailto:${safeEmail}" style="color:#a7f3d0; text-decoration:underline;">${escapeHtml(payload.email)}</a>&gt; &bull; 
          <strong>WhatsApp:</strong> ${escapeHtml(payload.phone)} &bull; 
          <strong>Tier Fit:</strong> ${escapeHtml(payload.valuation)}/mo
        </td>
      </tr>
    `
    : "";

  const text = [
    forwardBannerText,
    `Hi ${payload.fullName},`,
    "",
    "Congratulations! Your strategy kickoff call has been confirmed with Brandexa Growth.",
    "",
    "Kickoff Session Details:",
    `Date & Time: ${payload.date} @ ${payload.time}`,
    `Google Meet: ${MEETING_LINK}`,
    `Name: ${payload.fullName}`,
    `Email: ${payload.email}`,
    `WhatsApp: ${payload.phone}`,
    `Target Valuation Fit: ${payload.valuation}/month retainer`,
    "",
    "How to prepare for our call:",
    "1. Ensure you have access to your Meta / Google Ad account if available.",
    "2. Prepare your target monthly acquisition goals and current cost per lead/purchase.",
    "3. Join the Google Meet link 2 minutes before our scheduled time.",
    "",
    "Please join using the Google Meet link above at the scheduled time.",
    "",
    "Brandexa Growth",
    "https://www.brandexagrowth.com/ads",
  ].filter(Boolean).join(CRLF);

  const html = `
    <div style="margin:0; padding:0; background:#040711; font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color:#f1f5f9;">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse; background:#040711; padding:0; margin:0;">
        <tr>
          <td align="center" style="padding:40px 16px;">
            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse; max-width:640px; background:#0b1120; border:1px solid #1e293b; border-radius:24px; overflow:hidden; box-shadow:0 25px 60px rgba(0,0,0,0.5);">
              
              ${forwardBannerHtml}

              <!-- Header -->
              <tr>
                <td style="background:linear-gradient(135deg, #090d16 0%, #0e172a 100%); padding:36px 36px 30px; border-bottom:1px solid #1e293b;">
                  <div style="display:inline-block; background:rgba(52,211,153,0.12); border:1px solid rgba(52,211,153,0.3); border-radius:100px; padding:4px 14px; margin-bottom:14px;">
                    <span style="color:#34d399; font-size:11px; font-weight:800; letter-spacing:0.18em; text-transform:uppercase;">STRATEGY SESSION CONFIRMED</span>
                  </div>
                  <h1 style="margin:0 0 10px; color:#ffffff; font-size:28px; line-height:1.25; font-weight:900; letter-spacing:-0.02em;">
                    You&apos;re On The Calendar!
                  </h1>
                  <p style="margin:0; color:#94a3b8; font-size:15px; line-height:1.6;">
                    Your free 1-on-1 ad management &amp; revenue scaling kickoff call is booked.
                  </p>
                </td>
              </tr>

              <!-- Body -->
              <tr>
                <td style="padding:32px 36px 20px;">
                  <p style="margin:0 0 16px; color:#e2e8f0; font-size:16px; line-height:1.7;">
                    Hi <strong>${escapeHtml(payload.fullName)}</strong>,
                  </p>
                  <p style="margin:0 0 24px; color:#94a3b8; font-size:15px; line-height:1.7;">
                    We are thrilled to work with you. Before the call, our strategy team will review your ad ecosystem and prepare your tailored scaling blueprint.
                  </p>

                  <!-- Google Meet Callout Box -->
                  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse; margin:0 0 26px;">
                    <tr>
                      <td style="background:linear-gradient(135deg, rgba(16,185,129,0.12) 0%, rgba(132,204,22,0.08) 100%); border:1px solid rgba(52,211,153,0.35); border-radius:16px; padding:24px; text-align:center;">
                        <p style="margin:0 0 6px; color:#a3e635; font-size:12px; font-weight:800; letter-spacing:0.15em; text-transform:uppercase;">Scheduled Meeting Slot</p>
                        <p style="margin:0 0 18px; color:#ffffff; font-size:20px; font-weight:900;">
                          ${escapeHtml(payload.date)} @ ${escapeHtml(payload.time)}
                        </p>
                        <a href="${MEETING_LINK}" style="display:inline-block; background:linear-gradient(90deg, #a3e635 0%, #34d399 100%); color:#02050a; text-decoration:none; font-size:15px; font-weight:900; padding:14px 28px; border-radius:12px; box-shadow:0 0 24px rgba(52,211,153,0.4); text-transform:uppercase; letter-spacing:0.04em;">
                          Join Google Meet
                        </a>
                        <p style="margin:14px 0 0; color:#64748b; font-size:12px;">
                          Link: <a href="${MEETING_LINK}" style="color:#94a3b8; text-decoration:underline;">${MEETING_LINK}</a>
                        </p>
                      </td>
                    </tr>
                  </table>

                  <!-- Details Table -->
                  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:separate; border-spacing:0; border:1px solid #1e293b; border-radius:14px; overflow:hidden; margin-bottom:28px;">
                    <tr>
                      <td style="padding:13px 18px; background:#0e172a; border-bottom:1px solid #1e293b; color:#64748b; font-size:12px; font-weight:800; text-transform:uppercase; width:38%;">Contact</td>
                      <td style="padding:13px 18px; border-bottom:1px solid #1e293b; color:#f8fafc; font-size:14px; font-weight:700;">${escapeHtml(payload.fullName)}</td>
                    </tr>
                    <tr>
                      <td style="padding:13px 18px; background:#0e172a; border-bottom:1px solid #1e293b; color:#64748b; font-size:12px; font-weight:800; text-transform:uppercase;">Business Email</td>
                      <td style="padding:13px 18px; border-bottom:1px solid #1e293b; color:#f8fafc; font-size:14px;">${escapeHtml(payload.email)}</td>
                    </tr>
                    <tr>
                      <td style="padding:13px 18px; background:#0e172a; border-bottom:1px solid #1e293b; color:#64748b; font-size:12px; font-weight:800; text-transform:uppercase;">WhatsApp</td>
                      <td style="padding:13px 18px; border-bottom:1px solid #1e293b; color:#f8fafc; font-size:14px;">${escapeHtml(payload.phone)}</td>
                    </tr>
                    <tr>
                      <td style="padding:13px 18px; background:#0e172a; color:#64748b; font-size:12px; font-weight:800; text-transform:uppercase;">Service Valuation Fit</td>
                      <td style="padding:13px 18px; color:#34d399; font-size:14px; font-weight:800;">${escapeHtml(payload.valuation)}/mo retainer tier</td>
                    </tr>
                  </table>

                  <!-- Instructions -->
                  <div style="background:#0a0f1d; border:1px solid #1e293b; border-radius:14px; padding:20px; margin-bottom:24px;">
                    <p style="margin:0 0 10px; color:#ffffff; font-size:14px; font-weight:800; text-transform:uppercase; letter-spacing:0.05em;">What To Expect on The Call:</p>
                    <ul style="margin:0; padding-left:20px; color:#94a3b8; font-size:14px; line-height:1.7;">
                      <li>Complete audit of your conversion funnel &amp; previous creatives.</li>
                      <li>Our exact creative testing &amp; scaling strategy for your niche.</li>
                      <li>Review account setup access so our media buyers can begin immediately.</li>
                    </ul>
                  </div>

                  <p style="margin:0 0 20px; color:#94a3b8; font-size:14px; line-height:1.6;">
                    If you need to reschedule or have questions before we speak, reply directly to this email or reach us on WhatsApp.
                  </p>
                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td style="padding:24px 36px; background:#070b14; border-top:1px solid #1e293b;">
                  <p style="margin:0 0 4px; color:#ffffff; font-size:15px; font-weight:800;">${brandName}</p>
                  <p style="margin:0; color:#64748b; font-size:13px;">
                    Performance Marketing &amp; Creative Production Moat &bull; <a href="https://www.brandexagrowth.com" style="color:#34d399; text-decoration:underline;">www.brandexagrowth.com</a>
                  </p>
                </td>
              </tr>

            </table>
          </td>
        </tr>
      </table>
    </div>
  `;

  const boundary = `brandexa-ads-${Date.now().toString(36)}`;

  return [
    `From: ${brandName} <${sanitizeHeader(config.from)}>`,
    `To: ${toHeader}`,
    `Reply-To: ${replyTo}`,
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

function createInternalNotificationMessage(payload: AdsBookingData, config: SmtpConfig) {
  const brandName = "Brandexa Growth";
  const safeEmail = sanitizeHeader(payload.email);
  const subject = `🔥 New Ads Strategy Booking: ${sanitizeHeader(payload.fullName)} (${payload.valuation}/mo tier)`;
  const cleanPhone = payload.phone.replace(/\D/g, "");
  const waLink = cleanPhone ? `https://wa.me/${cleanPhone}` : "";

  const text = [
    `🔥 NEW ADS STRATEGY SESSION BOOKED`,
    "",
    `Client: ${payload.fullName}`,
    `Email: ${payload.email}`,
    `WhatsApp: ${payload.phone}${waLink ? ` (${waLink})` : ""}`,
    `Valuation Fit: ${payload.valuation}/mo tier`,
    `Date & Time: ${payload.date} @ ${payload.time}`,
    `Google Meet: ${MEETING_LINK}`,
    "",
    "Action Required:",
    "- Review lead website and ad account history.",
    "- Confirm Google Meet invitation.",
  ].join(CRLF);

  const html = `
    <div style="margin:0; padding:0; background:#040711; font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color:#f1f5f9;">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse; background:#040711; padding:0; margin:0;">
        <tr>
          <td align="center" style="padding:32px 16px;">
            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse; max-width:640px; background:#0b1120; border:1px solid #1e293b; border-radius:20px; overflow:hidden; box-shadow:0 25px 60px rgba(0,0,0,0.5);">
              <tr>
                <td style="background:#090d16; padding:28px 32px; border-bottom:1px solid #1e293b;">
                  <span style="display:inline-block; background:rgba(239,68,68,0.15); border:1px solid rgba(239,68,68,0.35); color:#f87171; font-size:11px; font-weight:800; padding:4px 12px; border-radius:100px; text-transform:uppercase; margin-bottom:8px;">HIGH INTENT LEAD</span>
                  <h1 style="margin:0; color:#ffffff; font-size:24px; font-weight:900;">New Ads Strategy Booking</h1>
                </td>
              </tr>
              <tr>
                <td style="padding:28px 32px;">
                  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:separate; border-spacing:0; border:1px solid #1e293b; border-radius:14px; overflow:hidden;">
                    <tr>
                      <td style="padding:12px 16px; background:#0e172a; border-bottom:1px solid #1e293b; color:#64748b; font-size:12px; font-weight:800; text-transform:uppercase; width:38%;">Full Name</td>
                      <td style="padding:12px 16px; border-bottom:1px solid #1e293b; color:#ffffff; font-size:15px; font-weight:700;">${escapeHtml(payload.fullName)}</td>
                    </tr>
                    <tr>
                      <td style="padding:12px 16px; background:#0e172a; border-bottom:1px solid #1e293b; color:#64748b; font-size:12px; font-weight:800; text-transform:uppercase;">Email</td>
                      <td style="padding:12px 16px; border-bottom:1px solid #1e293b; color:#38bdf8; font-size:14px;"><a href="mailto:${safeEmail}" style="color:#38bdf8; text-decoration:underline;">${escapeHtml(payload.email)}</a></td>
                    </tr>
                    <tr>
                      <td style="padding:12px 16px; background:#0e172a; border-bottom:1px solid #1e293b; color:#64748b; font-size:12px; font-weight:800; text-transform:uppercase;">WhatsApp</td>
                      <td style="padding:12px 16px; border-bottom:1px solid #1e293b; color:#ffffff; font-size:14px;">
                        ${escapeHtml(payload.phone)}
                        ${waLink ? `&nbsp;&nbsp;<a href="${waLink}" target="_blank" rel="noopener noreferrer" style="display:inline-block; background:#25D366; color:#ffffff; font-size:11px; font-weight:800; padding:3px 8px; border-radius:4px; text-decoration:none;">Open WhatsApp</a>` : ""}
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:12px 16px; background:#0e172a; border-bottom:1px solid #1e293b; color:#64748b; font-size:12px; font-weight:800; text-transform:uppercase;">Valuation Fit</td>
                      <td style="padding:12px 16px; border-bottom:1px solid #1e293b; color:#34d399; font-size:15px; font-weight:900;">${escapeHtml(payload.valuation)}/mo tier</td>
                    </tr>
                    <tr>
                      <td style="padding:12px 16px; background:#0e172a; border-bottom:1px solid #1e293b; color:#64748b; font-size:12px; font-weight:800; text-transform:uppercase;">Scheduled Slot</td>
                      <td style="padding:12px 16px; border-bottom:1px solid #1e293b; color:#facc15; font-size:14px; font-weight:800;">${escapeHtml(payload.date)} @ ${escapeHtml(payload.time)}</td>
                    </tr>
                    <tr>
                      <td style="padding:12px 16px; background:#0e172a; color:#64748b; font-size:12px; font-weight:800; text-transform:uppercase;">Google Meet</td>
                      <td style="padding:12px 16px; color:#ffffff; font-size:14px;"><a href="${MEETING_LINK}" style="color:#a3e635; text-decoration:underline;">${MEETING_LINK}</a></td>
                    </tr>
                  </table>
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
    `Reply-To: ${sanitizeHeader(payload.fullName)} <${safeEmail}>`,
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
      reject(new Error(`Could not connect to SMTP server ${config.host}:${config.port}`));
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

async function sendMail(payload: AdsBookingData) {
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

    // 1. Send Confirmation Email to Client
    await sendSmtpMessage(payload.email, createClientConfirmationMessage(payload, config, false));

    // 2. Send Alert Email to Brandexa Internal Team (single email — no duplicate forward)
    await sendSmtpMessage(INTERNAL_NOTIFY_TO, createInternalNotificationMessage(payload, config));

    await connection.write("QUIT").catch(() => "");
  } finally {
    connection.close();
  }
}

async function saveBookingToSheet(payload: AdsBookingData) {
  const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;

  if (!webhookUrl) {
    return;
  }

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "text/plain;charset=utf-8",
    },
    body: JSON.stringify({
      formType: "ads_booking",
      fullName: payload.fullName,
      email: payload.email,
      phone: payload.phone,
      whatsapp: payload.phone,
      valuation: payload.valuation,
      date: payload.date,
      time: payload.time,
      meetingLink: MEETING_LINK,
    }),
  });

  if (!response.ok) {
    const responseText = await response.text().catch(() => "");
    throw new Error(`Google Sheet rejected the booking: ${response.status} ${responseText}`.trim());
  }
}

export async function POST(request: NextRequest) {
  try {
    const payload = (await request.json()) as AdsBookingPayload;
    const fullName = (payload.fullName || payload.name)?.trim();
    const phone = (payload.phone || payload.whatsapp)?.trim();
    const email = payload.email?.trim();
    const valuation = payload.valuation?.trim() || "$1000";
    const date = payload.date?.trim();
    const time = payload.time?.trim();

    if (!fullName || !phone || !email || !date || !time) {
      return NextResponse.json(
        { error: "Please provide your full name, phone number, email, date, and time." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Please enter a valid business email address." }, { status: 400 });
    }

    const bookingData: AdsBookingData = {
      fullName,
      phone,
      email,
      valuation,
      date,
      time,
    };

    // 1. Send automated emails (confirmation to client + alert to team)
    await sendMail(bookingData);

    // 2. Save to Google Sheets "Ads Onboarding" tab
    await saveBookingToSheet(bookingData);

    return NextResponse.json({ ok: true, success: true });
  } catch (error) {
    console.error("Ads booking error:", error);
    const message = error instanceof Error ? error.message : "Unable to process your strategy call booking.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
