import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Script from 'next/script';
import { ThemeProvider } from '@/lib/theme-provider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const siteUrl = process.env.SITE_URL || 'https://indra.dev';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Indra's Portfolio",
  description: 'Full-stack engineer building things on the web.',
  icons: { icon: '/logo.svg' },
  alternates: { canonical: '/' },
  openGraph: {
    title: "Indra's Portfolio",
    description: 'Full-stack engineer building things on the web.',
    type: 'website',
    locale: 'en_US',
    url: '/',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Indra's Portfolio",
    description: 'Full-stack engineer building things on the web.',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        <Script id="theme-init" strategy="beforeInteractive">
          {`(function(){var t=localStorage.getItem('theme');if(!t){t=window.matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light'}document.documentElement.classList.add(t)})()`}
        </Script>
      </head>
      <body style={{ background: 'var(--neo-bg)', color: 'var(--neo-text)' }}>
        <ThemeProvider>
          <Navbar />
          <main className="pt-18.25">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
