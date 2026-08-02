import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import Footer from '@/components/Footer';
import MouseGlow from '@/components/MouseGlow';
import Navbar from '@/components/Navbar';
import { ThemeProvider } from '@/lib/theme-provider';
import './globals.css';

const siteUrl = process.env.SITE_URL || 'https://indra.dev';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Mahadi Indra Manurung | Frontend Engineer',
  description:
    'Frontend Engineer building reliable digital products for complex financial systems.',
  icons: { icon: '/favicon.ico' },
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Mahadi Indra Manurung | Frontend Engineer',
    description:
      'Frontend Engineer building reliable digital products for complex financial systems.',
    type: 'website',
    locale: 'en_US',
    url: '/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mahadi Indra Manurung | Frontend Engineer',
    description:
      'Frontend Engineer building reliable digital products for complex financial systems.',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f4efe5' },
    { media: '(prefers-color-scheme: dark)', color: '#151412' },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script id="theme-init" strategy="beforeInteractive">
          {`(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}document.documentElement.classList.add(t)}catch(e){document.documentElement.classList.add('light')}})()`}
        </Script>
      </head>
      <body>
        <ThemeProvider>
          <MouseGlow />
          <a className="skip-link" href="#main-content">
            Skip to main content
          </a>
          <Navbar />
          <main id="main-content" tabIndex={-1}>
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
