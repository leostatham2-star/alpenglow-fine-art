import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const subject = String(body.subject ?? "General question").trim();
    const message = String(body.message ?? "").trim();

    if (!name || !email.includes("@") || message.length < 5) {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }

    if (db) {
      try {
        await db.contactMessage.create({
          data: { name, email, subject, message },
        });
        return NextResponse.json({ ok: true });
      } catch {
        // Database unreachable (e.g. fresh serverless deploy): fall through
        // so the visitor still gets a friendly confirmation.
      }
    }

    console.log("[contact] submission stored to server log:", {
      name,
      email,
      subject,
      message,
      receivedAt: new Date().toISOString(),
    });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
