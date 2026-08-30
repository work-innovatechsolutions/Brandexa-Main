import { NextRequest, NextResponse } from "next/server";
import { sendEmail, getSmtpConfig } from "@/lib/email/smtp";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const { email, name, role } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const cleanEmail = String(email).trim().toLowerCase();
    const cleanName = String(name || cleanEmail.split("@")[0]).trim();
    const cleanRole = role || "editor";

    // Generate direct access login URL
    const origin = req.headers.get("origin") || req.nextUrl.origin || "http://localhost:3000";
    const inviteUrl = `${origin}/admin/login?email=${encodeURIComponent(cleanEmail)}&role=${encodeURIComponent(cleanRole)}`;

    let emailSent = false;
    let emailError = null;

    const smtpConfig = getSmtpConfig();
    if (smtpConfig) {
      try {
        const html = `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Brandexa Admin Invitation</title>
          </head>
          <body style="margin:0; padding:0; background-color:#070709; font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color:#ffffff;">
            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse; background-color:#070709; padding:40px 16px;">
              <tr>
                <td align="center">
                  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse; max-width:580px; background-color:#0d0d12; border:1px solid rgba(255,255,255,0.1); border-radius:24px; overflow:hidden; box-shadow:0 30px 60px rgba(0,0,0,0.6);">
                    <!-- Header -->
                    <tr>
                      <td style="padding:40px 40px 30px; background:linear-gradient(180deg, rgba(184,255,44,0.08) 0%, rgba(13,13,18,0) 100%); border-bottom:1px solid rgba(255,255,255,0.06);">
                        <div style="display:inline-block; width:48px; height:48px; line-height:48px; text-align:center; background:rgba(184,255,44,0.15); border:1px solid rgba(184,255,44,0.3); border-radius:14px; color:#b8ff2c; font-size:22px; font-weight:900; margin-bottom:20px;">
                          B
                        </div>
                        <h1 style="margin:0 0 8px; color:#ffffff; font-size:24px; font-weight:800; letter-spacing:-0.02em;">Administrator Invitation</h1>
                        <p style="margin:0; color:#a1a1aa; font-size:14px;">You have been invited to join the Brandexa Growth CMS.</p>
                      </td>
                    </tr>

                    <!-- Body -->
                    <tr>
                      <td style="padding:32px 40px;">
                        <p style="margin:0 0 20px; color:#e4e4e7; font-size:15px; line-height:1.6;">
                          Hello <strong>${cleanName}</strong>,
                        </p>
                        <p style="margin:0 0 24px; color:#a1a1aa; font-size:14px; line-height:1.6;">
                          An administrator account has been authorized for your email address with the <strong>${cleanRole.replace("_", " ").toUpperCase()}</strong> role. You can manage website pages, case studies, blogs, media, and publishing settings.
                        </p>

                        <!-- CTA Button -->
                        <div style="margin:32px 0 32px; text-align:center;">
                          <a href="${inviteUrl}" style="display:inline-block; background-color:#b8ff2c; color:#050505; font-weight:800; font-size:14px; text-decoration:none; padding:14px 36px; border-radius:999px; box-shadow:0 0 24px rgba(184,255,44,0.3); letter-spacing:0.02em;">
                            Accept Invitation & Sign In &rarr;
                          </a>
                        </div>

                        <div style="padding:16px 20px; background-color:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.06); border-radius:12px; margin-top:28px;">
                          <p style="margin:0 0 6px; color:#71717a; font-size:12px; font-weight:600; text-transform:uppercase; letter-spacing:0.05em;">Direct Link</p>
                          <p style="margin:0; word-break:break-all; font-size:12px; color:#b8ff2c; font-family:monospace;">${inviteUrl}</p>
                        </div>
                      </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                      <td style="padding:24px 40px; background-color:#09090c; border-top:1px solid rgba(255,255,255,0.06); text-align:center;">
                        <p style="margin:0; color:#71717a; font-size:12px;">Brandexa Growth &bull; <a href="https://brandexagrowth.com" style="color:#a1a1aa; text-decoration:underline;">brandexagrowth.com</a></p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </body>
          </html>
        `;

        emailSent = await sendEmail({
          to: cleanEmail,
          subject: "You've been invited to Brandexa Growth CMS Admin",
          html,
          fromName: "Brandexa CMS",
        });
      } catch (err: any) {
        console.error("Failed to send SMTP email:", err);
        emailError = err.message || "Failed to dispatch email over SMTP";
      }
    }

    return NextResponse.json({
      success: true,
      message: emailSent
        ? `Invitation email sent to ${cleanEmail}.`
        : `Administrator authorized. ${emailError ? `(Note: ${emailError})` : ""}`,
      inviteUrl,
      emailSent,
      email: cleanEmail,
      name: cleanName,
      role: cleanRole,
    });
  } catch (err: any) {
    console.error("Invite API error:", err);
    return NextResponse.json(
      { error: err.message || "Failed to process invitation" },
      { status: 500 }
    );
  }
}
