import { motion, type Variants } from 'framer-motion';
import { ArrowDown, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/BrandIcons';
import { personalInfo } from '../data/personal';

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

function handleScrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      aria-label="Introduction"
    >
      {/* Background glows */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-accent-primary opacity-[0.08] blur-3xl" />
        <div className="absolute top-1/2 -right-32 w-80 h-80 rounded-full bg-accent-secondary opacity-[0.06] blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-accent-primary opacity-[0.05] blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 md:px-8 w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Text side */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 text-xs font-medium text-accent-primary tracking-widest uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-accent-primary animate-pulse-slow" aria-hidden="true" />
              Available for opportunities · {personalInfo.location}
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-text-primary leading-tight mb-4 tracking-tight"
          >
            Harsh
            <br />
            <span className="text-gradient">Prajapati</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="text-lg text-text-secondary font-medium mb-3"
          >
            {personalInfo.title}
          </motion.p>

          <motion.p
            variants={item}
            className="text-text-muted text-sm mb-8 max-w-md leading-relaxed"
          >
            {personalInfo.summary}
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-3 mb-10">
            <button
              onClick={() => handleScrollTo('projects')}
              className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-lg bg-accent-primary text-black hover:bg-sky-400 active:scale-95 transition-all duration-200 shadow-lg shadow-sky-500/20"
              aria-label="View my projects"
            >
              View Projects
            </button>
            <button
              onClick={() => handleScrollTo('contact')}
              className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-lg border border-border text-text-primary hover:border-accent-primary hover:text-accent-primary active:scale-95 transition-all duration-200"
              aria-label="Contact me"
            >
              Contact Me
            </button>
          </motion.div>

          <motion.div variants={item} className="flex items-center gap-4 flex-wrap">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-text-muted hover:text-text-primary transition-colors duration-200"
              aria-label="GitHub profile (opens in new tab)"
            >
              <GithubIcon size={16} />
              GitHub
            </a>
            <span className="w-px h-4 bg-border" aria-hidden="true" />
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-text-muted hover:text-text-primary transition-colors duration-200"
              aria-label="LinkedIn profile (opens in new tab)"
            >
              <LinkedinIcon size={16} />
              LinkedIn
            </a>
            <span className="w-px h-4 bg-border" aria-hidden="true" />
            <a
              href={personalInfo.socials.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-text-muted hover:text-text-primary transition-colors duration-200"
              aria-label="LeetCode profile (opens in new tab)"
            >
              LeetCode
            </a>
            <span className="w-px h-4 bg-border" aria-hidden="true" />
            <a
              href={personalInfo.socials.gfg}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-text-muted hover:text-text-primary transition-colors duration-200"
              aria-label="GeeksforGeeks profile (opens in new tab)"
            >
              GFG
            </a>
          </motion.div>
        </motion.div>

        {/* Visual side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="hidden md:flex items-center justify-center"
          aria-hidden="true"
        >
          <div className="relative w-80 h-80">
            {/* Outer ring */}
            <div className="absolute inset-0 rounded-full border border-accent-primary border-opacity-25 animate-spin" style={{ animationDuration: '20s' }} />
            <div className="absolute inset-6 rounded-full border border-accent-secondary border-opacity-20 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />

            {/* Center card */}
            <div className="absolute inset-12 rounded-2xl bg-surface border border-border flex flex-col items-center justify-center gap-3 shadow-2xl shadow-black/80">
              <Terminal size={28} className="text-accent-primary" />
              <div className="space-y-1 text-center">
                <div className="text-xs font-mono text-accent-primary font-semibold">$ whoami</div>
                <div className="text-xs font-mono text-text-muted">harsh_prajapati</div>
                <div className="text-[11px] font-mono text-accent-secondary">Full Stack & DevOps</div>
              </div>
            </div>

            {/* Floating tech badges */}
            {[
              { label: 'React.js', top: '8%', left: '-5%' },
              { label: 'Docker', top: '8%', right: '-5%' },
              { label: 'Node.js', bottom: '20%', left: '-10%' },
              { label: 'AWS & Nginx', bottom: '8%', right: '0%' },
            ].map(({ label, ...pos }) => (
              <div
                key={label}
                className="absolute bg-surface border border-border rounded-lg px-2.5 py-1 text-xs font-medium text-text-secondary shadow-lg"
                style={pos}
              >
                {label}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        onClick={() => handleScrollTo('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted text-xs hover:text-text-secondary transition-colors duration-200"
        aria-label="Scroll to about section"
      >
        <span>scroll</span>
        <ArrowDown size={14} className="animate-bounce" />
      </motion.button>
    </section>
  );
}
