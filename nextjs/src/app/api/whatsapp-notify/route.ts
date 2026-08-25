import { NextRequest, NextResponse } from "next/server";

const AISENSY_API_URL = "https://backend.aisensy.com/campaign/t1/api/v2";
const AISENSY_API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjZhODRiNWY1YzI4ZDM0MGYyYzA3ZDdkNCIsIm5hbWUiOiJCcmFuZGV4YSBHcm93dGgiLCJhcHBOYW1lIjoiQWlTZW5zeSIsImNsaWVudElkIjoiNmE4NGI1ZjVjMjhkMzQwZjJjMDdkN2NmIiwiYWN0aXZlUGxhbiI6IkZSRUVfRk9SRVZFUiIsImlhdCI6MTc4NzA4Mjc0NX0.r3-bj2WgCrwBhz-Hg8QMBAflgENLxe33sc22ohIOKqw";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { fullName, phone, email, valuation, date, time } = body;

    // Sanitize phone — strip non-digits, ensure country code
    const rawPhone = phone.replace(/\D/g, "");
    const formattedPhone = rawPhone.startsWith("91")
      ? rawPhone
      : `91${rawPhone}`;

    // AiSensy campaign message payload
    // Uses a template message — ensure "booking_confirmation" template is approved in AiSensy dashboard
    const payload = {
      apiKey: AISENSY_API_KEY,
      campaignName: "booking_confirmation",
      destination: formattedPhone,
      userName: fullName,
      templateParams: [
        fullName,              // {{1}} — Lead name
        date,                 // {{2}} — Scheduled date
        time,                 // {{3}} — Scheduled time
        valuation,            // {{4}} — Budget/valuation tier
        email,                // {{5}} — Email
      ],
      source: "Brandexa Growth Landing Page",
      media: {},
      buttons: [],
      carouselCards: [],
      location: {},
    };

    const response = await fetch(AISENSY_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    if (!response.ok) {
      console.error("[AiSensy] Error response:", result);
      return NextResponse.json(
        { success: false, error: result },
        { status: response.status }
      );
    }

    console.log("[AiSensy] WhatsApp notification sent:", result);
    return NextResponse.json({ success: true, data: result });
  } catch (err) {
    console.error("[AiSensy] Unexpected error:", err);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
