import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(3),
  message: z.string().min(10),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = contactSchema.parse(body);

    const resendApiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL || "bhaskarsai.sudheer@gmail.com";

    // Resend Email dispatch if API key is provided
    if (resendApiKey) {
      const { Resend } = await import("resend");
      const resend = new Resend(resendApiKey);

      await resend.emails.send({
        from: "Portfolio <onboarding@resend.dev>",
        to: contactEmail,
        replyTo: data.email,
        subject: `[Portfolio] ${data.subject}`,
        html: `
          <h2>New message from portfolio</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Subject:</strong> ${data.subject}</p>
          <p><strong>Message:</strong></p>
          <p>${data.message.replace(/\n/g, "<br>")}</p>
        `,
      });
    }

    return NextResponse.json({ success: true, message: "Thank you! Your message has been received." });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: "Invalid form data. Please check your inputs." }, { status: 400 });
    }
    return NextResponse.json({ error: "Failed to send message. Please try again later." }, { status: 500 });
  }
}
