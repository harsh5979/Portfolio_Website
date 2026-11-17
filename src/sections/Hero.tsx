import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { personalInfo } from '../data/personal';

export function Hero() {
  const reduceMotion = useReducedMotion();
  const driftX = useMotionValue(0);
  const driftY = useMotionValue(0);
  const x = useSpring(driftX, { stiffness: 95, damping: 18 });
  const y = useSpring(driftY, { stiffness: 95, damping: 18 });

  return (
    <div className="hero-field relative isolate overflow-hidden"
      onPointerMove={(event) => {
        if (reduceMotion || event.pointerType !== 'mouse') return;
        const bounds = event.currentTarget.getBoundingClientRect();
        driftX.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 100);
        driftY.set(((event.clientY - bounds.top) / bounds.height - 0.5) * 64);
      }}
      onPointerLeave={() => { driftX.set(0); driftY.set(0); }}>
      <motion.div className="hero-field-contours" aria-hidden="true" style={reduceMotion ? undefined : { x, y }} />
      <section id="hero" aria-label="Introduction" className="mx-auto grid max-w-6xl gap-10 px-5 pb-16 pt-36 md:grid-cols-[1.5fr_1fr] md:items-end md:px-8 md:pb-24 md:pt-44">
        <div>
          <p className="mb-4 text-sm font-medium text-text-muted">{personalInfo.location}</p>
          <h1 className="portfolio-display text-6xl leading-[.95] sm:text-8xl">Harsh<br />Prajapati</h1>
          <p className="mt-6 text-xl font-medium text-text-secondary">Full-stack developer</p>
        </div>
        <div className="border-t border-border pt-6">
          <p className="max-w-md text-lg leading-relaxed text-text-secondary">
            I build web apps, voice agents, and the systems that get them into production.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-5">
            <a href="#projects" className="inline-flex min-h-11 items-center gap-2 rounded-md bg-accent-primary px-4 text-sm font-semibold text-white hover:bg-accent-primary-hover">
              Explore my work <ArrowDown size={16} aria-hidden="true" />
            </a>
            <a href="/resume.pdf" className="text-sm font-semibold text-text-primary underline underline-offset-4">Résumé</a>
          </div>
        </div>
      </section>
    </div>
  );
}
