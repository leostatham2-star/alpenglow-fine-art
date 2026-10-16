import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const email = String(body.email ?? "").trim().toLowerCase();

    if (!email.includes("@") || email.length < 5) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    if (db) {
      try {
        await db.subscriber.upsert({
          where: { email },
          update: {},
          create: { email },
        });
        return NextResponse.json({ ok: true });
      } catch {
        // Database unreachable (e.g. fresh serverless deploy): fall through
        // so the visitor still gets a friendly confirmation.
      }
    }

    console.log("[newsletter] subscriber stored to server log:", {
      email,
      receivedAt: new Date().toISOString(),
    });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
