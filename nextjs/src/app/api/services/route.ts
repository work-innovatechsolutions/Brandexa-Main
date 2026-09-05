import { NextResponse } from "next/server";
import { adminDb } from "@/lib/firebase/admin";

export const runtime = "nodejs";
// No Next.js cache — always serve fresh Firestore data
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    // Fetch ALL services without any orderBy/where (no index required)
    const snap = await adminDb.collection("services").get();

    const services = snap.docs
      .map((d) => {
        const data = d.data();
        return {
          id: d.id,
          title: (data.title ?? "") as string,
          slug: (data.slug ?? "") as string,
          shortDescription: (data.shortDescription ?? data.description ?? "") as string,
          icon: (data.icon ?? "") as string,
          isPublished: (data.isPublished ?? false) as boolean,
          orderIndex: (data.orderIndex ?? 999) as number,
        };
      })
      // Filter unpublished in JS
      .filter((s) => s.isPublished === true)
      // Sort by orderIndex in JS
      .sort((a, b) => a.orderIndex - b.orderIndex)
      // Strip isPublished from the response
      .map(({ id, title, slug, shortDescription, icon, orderIndex }) => ({
        id,
        title,
        slug,
        shortDescription,
        icon,
        orderIndex,
      }));

    return NextResponse.json(services, {
      headers: {
        // Tell browsers/CDN not to cache — always fresh
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    console.error("[API /services] Firestore error:", error);
    return NextResponse.json(
      { error: "Failed to load services." },
      { status: 500 }
    );
  }
}
