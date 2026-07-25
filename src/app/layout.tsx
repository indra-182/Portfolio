import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
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
  title: 'Indra — Portfolio',
  description: 'Full-stack developer building things on the web.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Indra — Portfolio',
    description: 'Full-stack developer building things on the web.',
    type: 'website',
    locale: 'en_US',
    url: '/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Indra — Portfolio',
    description: 'Full-stack developer building things on the web.',
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
      <body style={{ background: 'var(--neo-bg)', color: 'var(--neo-text)' }}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="pt-18.25">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
