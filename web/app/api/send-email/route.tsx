import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import EmailTemplate from "@/components/landing/EmailTemplate";
const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(request: NextRequest) {
  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is missing! Add it to .env.local.");
    return NextResponse.json(
      { message: "Server config error: Missing API key" },
      { status: 500 }
    );
  }

  if (!process.env.RESEND_FROM_EMAIL) {
    console.error(
      "RESEND_FROM_EMAIL is missing! Add it to .env.local (e.g., noreply@buravpn.com)."
    );
    return NextResponse.json(
      { message: "Server config error: Missing from email" },
      { status: 500 }
    );
  }

  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: `Contact Form <${process.env.RESEND_FROM_EMAIL}>`,
      to: ["info@buravpn.com", "marindonadini00@gmail.com"],
      replyTo: email,
      subject: `New Contact Form Submission: ${subject}`,
      react: (
        <EmailTemplate
          name={name}
          email={email}
          subject={subject}
          message={message}
        />
      ),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        {
          message: `Failed to send email: ${error.message || "Unknown error"}`,
        },
        { status: 500 }
      );
    }

    console.log("Email sent successfully:", data?.id);
    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
