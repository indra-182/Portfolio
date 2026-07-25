import { NextRequest, NextResponse } from 'next/server';

export function proxy(request: NextRequest) {
  const nonce = crypto.randomUUID();

  const scriptSrc = [
    `'self'`,
    `'nonce-${nonce}'`,
    process.env.NODE_ENV === 'development' ? `'unsafe-eval'` : '',
  ]
    .filter(Boolean)
    .join(' ');

  const csp = [
    `default-src 'self'`,
    `script-src ${scriptSrc}`,
    `style-src 'self' 'unsafe-inline'`,
    `img-src 'self' data:`,
    `font-src 'self' data:`,
    `connect-src 'self' https://blog-mahadi-indra.vercel.app`,
    `form-action 'self'`,
    `frame-ancestors 'none'`,
    `base-uri 'self'`,
  ].join('; ');

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-nonce', nonce);

  const response = NextResponse.next({
    request: { headers: requestHeaders },
  });
  response.headers.set('Content-Security-Policy', csp);
  response.headers.set('x-nonce', nonce);

  return response;
}

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico|logo.svg).*)',
};
