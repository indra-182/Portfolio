import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Testimonials from '@/components/sections/Testimonials';
import BlogSection from '@/components/sections/BlogSection';
import Contact from '@/components/sections/Contact';

const siteUrl = process.env.SITE_URL || 'https://indra.dev';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Indra',
  url: siteUrl,
  jobTitle: 'Full-stack Developer',
  sameAs: [
    'https://github.com/anomalyco',
    'https://twitter.com/anomalyco',
    'https://linkedin.com/in/anomalyco',
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
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Testimonials />
      <BlogSection />
      <Contact />
    </>
  );
}
