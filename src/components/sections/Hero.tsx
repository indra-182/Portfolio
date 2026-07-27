'use client';

import { motion, useReducedMotion } from 'framer-motion';

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative flex min-h-dvh items-center overflow-hidden px-6 pt-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-[32rem] w-[32rem] rounded-full opacity-[0.06]"
        style={{
          background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-32 h-[24rem] w-[24rem] rounded-full opacity-[0.04]"
        style={{
          background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)',
        }}
      />
      <div className="relative mx-auto w-full max-w-(--container)">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="mb-5 text-sm font-medium tracking-wide text-accent">Hi, my name is</p>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
            Building thoughtful <span className="text-accent">digital products.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg font-medium tracking-[-0.02em] text-text sm:text-xl">
            I&apos;m Indra, a software engineer.
          </p>
          <p className="mt-2 max-w-xl text-base leading-relaxed text-text-secondary">
            Building fast, accessible web experiences with modern tools.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#projects" className="btn btn--primary">
              View Work
            </a>
            <a href="#contact" className="btn btn--outline">
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
