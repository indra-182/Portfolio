import type { NextConfig } from "next";

const scriptSrc = [
  "'self'",
  "'unsafe-inline'",
  process.env.NODE_ENV === "development" ? "'unsafe-eval'" : "",
].filter(Boolean).join(" ");

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
].join("; ");

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*?)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          { key: "Content-Security-Policy", value: csp },
        ],
      },
    ];
  },
};

export default nextConfig;
