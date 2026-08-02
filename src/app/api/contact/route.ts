import { NextResponse } from 'next/server';
import { z } from 'zod';
import { Resend } from 'resend';

const ALLOWED_ORIGINS = [
  'http://localhost:3000',
  'http://localhost:3001',
  'https://indra.dev',
  'https://www.indra.dev',
];

function isAllowedOrigin(request: Request): boolean {
  const origin = request.headers.get('origin');
  const referer = request.headers.get('referer');
  const source = origin || referer;
  if (!source) return false;
  try {
    const url = new URL(source);
    return ALLOWED_ORIGINS.some((o) => {
      const allowed = new URL(o);
      return (
        url.protocol === allowed.protocol &&
        url.hostname === allowed.hostname &&
        url.port === allowed.port
      );
    });
  } catch {
    return false;
  }
}

const rateLimit = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW = 60_000;
const RATE_LIMIT_MAX = 5;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
    return true;
  }
  if (entry.count >= RATE_LIMIT_MAX) return false;
  entry.count++;
  return true;
}

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
    if (!isAllowedOrigin(request)) {
      return NextResponse.json({ success: false, error: 'Forbidden' }, { status: 403 });
    }

    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
    if (!checkRateLimit(ip)) {
      return NextResponse.json({ success: false, error: 'Too many requests' }, { status: 429 });
    }

    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ success: false, error: 'Invalid input' }, { status: 400 });
    }

    const { name, email, message } = parsed.data;

    const resend = getResend();

    if (!resend) {
      return NextResponse.json(
        { success: false, error: 'Email delivery is not configured' },
        { status: 503 },
      );
    }

    const { error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'mahadiindra2@gmail.com',
      subject: `Portfolio Contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      replyTo: email,
    });

    if (error) {
      return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 });
  }
}
