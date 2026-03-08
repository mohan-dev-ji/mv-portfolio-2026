import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, email, message, token } = await request.json();

  // Verify Turnstile token
  const verification = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        secret: process.env.TURNSTILE_SECRET_KEY,
        response: token,
      }),
    }
  );

  const verificationData = await verification.json();

  if (!verificationData.success) {
    return NextResponse.json({ error: "Bot verification failed" }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "info@mohanveraitch.com",
    to: "info@mohanveraitch.com",
    replyTo: [email],
    subject: `Portfolio enquiry from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json({ success: true });
}
