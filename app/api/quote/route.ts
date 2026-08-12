import { NextResponse } from "next/server";

export const runtime = "nodejs";

const RECIPIENT_EMAIL = "ashwanikumar.tiku@gmail.com";
const MAX_FILE_SIZE = 25 * 1024 * 1024;
const allowedExtensions = new Set([
  "stl",
  "step",
  "stp",
  "iges",
  "igs",
  "obj",
  "png",
  "jpg",
  "jpeg",
]);

const value = (formData: FormData, key: string) => {
  const entry = formData.get(key);
  return typeof entry === "string" ? entry.trim() : "";
};

const htmlEntities: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  "'": "&#39;",
  '"': "&quot;",
};

const escapeHtml = (input: string) =>
  input.replace(/[&<>'"]/g, (character) => htmlEntities[character] || character);

type ResendError = {
  message?: string;
  name?: string;
};

const deliveryErrorMessage = (status: number, error: ResendError) => {
  const originalMessage = error.message?.trim() || "";
  const providerMessage = originalMessage.toLowerCase();

  if (providerMessage.includes("testing emails") || providerMessage.includes("verify a domain")) {
    return "The email sender is not verified. Please verify your sending domain in Resend and try again.";
  }

  if (providerMessage.includes("api key") || status === 401) {
    return "The email service API key is invalid. Please update RESEND_API_KEY in the deployment settings.";
  }

  if (status === 429) {
    return "The email service is temporarily rate limited. Please wait a moment and try again.";
  }

  if (originalMessage) {
    return `Email service error (${status}): ${originalMessage}`;
  }

  return `Email service error (${status}). Please check the Resend deployment configuration or email ashwanikumar.tiku@gmail.com directly.`;
};

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const fullName = value(formData, "fullName");
    const email = value(formData, "email");
    const phone = value(formData, "phone");
    const service = value(formData, "service");
    const projectMessage = value(formData, "message");
    const website = value(formData, "website");
    const attachment = formData.get("attachment");

    if (website) return NextResponse.json({ message: "Request accepted." });

    if (!fullName || !email || !phone || !service) {
      return NextResponse.json(
        { message: "Please complete all required fields." },
        { status: 400 },
      );
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ message: "Please enter a valid email address." }, { status: 400 });
    }

    const attachments: Array<{ filename: string; content: string }> = [];

    if (attachment instanceof File && attachment.size > 0) {
      const extension = attachment.name.split(".").pop()?.toLowerCase() || "";

      if (!allowedExtensions.has(extension)) {
        return NextResponse.json({ message: "That attachment type is not supported." }, { status: 400 });
      }

      if (attachment.size > MAX_FILE_SIZE) {
        return NextResponse.json({ message: "The attachment must be 25 MB or smaller." }, { status: 400 });
      }

      attachments.push({
        filename: attachment.name,
        content: Buffer.from(await attachment.arrayBuffer()).toString("base64"),
      });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.QUOTE_FROM_EMAIL;

    if (!apiKey || !fromEmail) {
      console.error("Quote email is not configured: RESEND_API_KEY or QUOTE_FROM_EMAIL is missing.");
      return NextResponse.json(
        { message: "Email delivery is not configured yet. Please contact us directly." },
        { status: 503 },
      );
    }

    const safe = {
      fullName: escapeHtml(fullName),
      email: escapeHtml(email),
      phone: escapeHtml(phone),
      service: escapeHtml(service),
      message: escapeHtml(projectMessage || "No message supplied.").replace(/\n/g, "<br />"),
    };

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "User-Agent": "Kinesys-Prototypes-Website/1.0",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [RECIPIENT_EMAIL],
        reply_to: email,
        subject: `New quote request: ${service} — ${fullName}`,
        html: `
          <h2>New Kinesys Prototypes quote request</h2>
          <table cellpadding="8" cellspacing="0" style="border-collapse:collapse">
            <tr><td><strong>Name</strong></td><td>${safe.fullName}</td></tr>
            <tr><td><strong>Email</strong></td><td>${safe.email}</td></tr>
            <tr><td><strong>Phone</strong></td><td>${safe.phone}</td></tr>
            <tr><td><strong>Service</strong></td><td>${safe.service}</td></tr>
          </table>
          <h3>Message</h3>
          <p>${safe.message}</p>
        `,
        attachments,
      }),
    });

    if (!response.ok) {
      const responseBody = await response.text();
      let resendError: ResendError = {};

      try {
        resendError = JSON.parse(responseBody) as ResendError;
      } catch {
        resendError = { message: responseBody };
      }

      console.error("Resend quote email failed:", response.status, resendError);
      return NextResponse.json(
        { message: deliveryErrorMessage(response.status, resendError) },
        { status: 502 },
      );
    }

    return NextResponse.json({ message: "Quote request sent successfully." });
  } catch (error) {
    console.error("Quote request failed:", error);
    return NextResponse.json(
      { message: "We could not process your request right now. Please try again." },
      { status: 500 },
    );
  }
}
