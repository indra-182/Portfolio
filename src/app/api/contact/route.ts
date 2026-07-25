import { NextResponse } from 'next/server';
import { z } from 'zod';
import { Resend } from 'resend';

function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  return new Resend(key);
}

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email'),
  message: z.string().min(1, 'Message is required'),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, errors: parsed.error.issues },
        { status: 400 }
      );
    }

    const { name, email, message } = parsed.data;

    const resend = getResend();

    if (resend) {
      await resend.emails.send({
        from: 'Portfolio Contact <onboarding@resend.dev>',
        to: 'mahadiindra2@gmail.com',
        subject: `Portfolio Contact from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        replyTo: email,
      });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { success: false, error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
