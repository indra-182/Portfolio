import dynamic from 'next/dynamic';
import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import Experience from '@/components/sections/Experience';
import Skills from '@/components/sections/Skills';
import About from '@/components/sections/About';
import Testimonials from '@/components/sections/Testimonials';
import BlogSection from '@/components/sections/BlogSection';

const Contact = dynamic(() => import('@/components/sections/Contact'));

const siteUrl = process.env.SITE_URL || 'https://indra.dev';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Mahadi Indra Manurung',
  url: siteUrl,
  jobTitle: 'Frontend Engineer',
  sameAs: [
    'https://github.com/indra-182',
    'https://twitter.com/vwxmz',
    'https://www.linkedin.com/in/mahadiindra182/',
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <About />
      <Testimonials />
      <BlogSection />
      <Contact />
    </>
  );
}
