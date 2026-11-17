import { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { ArrowDown, Terminal, Check, Copy } from 'lucide-react';
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

type TerminalTab = 'whoami' | 'skills' | 'deploy';

export function Hero() {
  const [activeTab, setActiveTab] = useState<TerminalTab>('whoami');
  const [copied, setCopied] = useState(false);

  const getCopyContent = () => {
    switch (activeTab) {
      case 'whoami':
        return 'whoami -> harsh_prajapati\nrole -> Founding Full-Stack Engineer @ haira.ai\nsys -> online | latency <45ms | uptime 99.98%';
      case 'skills':
        return 'export const engineer = {\n  stack: ["React 19", "Next.js", "Node.js", "TypeScript", "Docker", "AWS"],\n  focus: ["Distributed Systems", "AI Pipelines", "Zero-Downtime Deployments"]\n};';
      case 'deploy':
        return 'name: production-deploy\non: [push: main]\njobs:\n  ship:\n    steps:\n      - run: npm run test:all  # vitest + oxlint: 0 errors\n      - run: docker build -t app:latest .\n      - run: ./deploy-zero-downtime.sh';
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(getCopyContent());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard fallback
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16"
      aria-label="Introduction"
    >
      {/* Ambient background glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] max-w-[95vw] h-[450px] hero-glow-backdrop pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 right-1/4 w-[400px] h-[300px] bg-[radial-gradient(circle,rgba(56,189,248,0.05)_0%,transparent_70%)] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-4 md:px-8 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text side */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 text-xs font-mono font-medium text-accent-primary tracking-wide mb-6 px-3.5 py-1.5 rounded-full bg-accent-primary/10 border border-accent-primary/20 backdrop-blur-sm shadow-sm card-highlight">
              <span className="w-2 h-2 rounded-full bg-accent-primary animate-pulse-slow shrink-0" aria-hidden="true" />
              <span>Software Developer @ haira.ai · {personalInfo.location}</span>
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-text-primary leading-[1.08] mb-4 tracking-tight"
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
            className="text-text-muted text-sm sm:text-base mb-8 max-w-md leading-relaxed"
          >
            {personalInfo.summary}
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-3 mb-10">
            <button
              onClick={() => handleScrollTo('projects')}
              className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-lg bg-accent-primary text-black hover:bg-sky-400 active:scale-95 transition-all duration-200 shadow-lg shadow-sky-500/20 card-highlight cursor-pointer"
              aria-label="View my projects"
            >
              View Projects
            </button>
            <button
              onClick={() => handleScrollTo('contact')}
              className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-lg border border-border bg-surface/60 text-text-primary hover:border-accent-primary hover:text-accent-primary active:scale-95 transition-all duration-200 backdrop-blur-sm cursor-pointer"
              aria-label="Contact me"
            >
              Contact Me
            </button>
          </motion.div>

          {/* Social links - robust against isolated divider pipes wrapping alone */}
          <motion.div variants={item} className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-text-muted">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-text-primary transition-colors duration-200"
              aria-label="GitHub profile (opens in new tab)"
            >
              <GithubIcon size={16} />
              GitHub
            </a>
            <span className="hidden sm:inline-block text-border select-none" aria-hidden="true">/</span>
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-text-primary transition-colors duration-200"
              aria-label="LinkedIn profile (opens in new tab)"
            >
              <LinkedinIcon size={16} />
              LinkedIn
            </a>
            <span className="hidden sm:inline-block text-border select-none" aria-hidden="true">/</span>
            <a
              href={personalInfo.socials.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-text-primary transition-colors duration-200"
              aria-label="LeetCode profile (opens in new tab)"
            >
              LeetCode
            </a>
            <span className="hidden sm:inline-block text-border select-none" aria-hidden="true">/</span>
            <a
              href={personalInfo.socials.gfg}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-text-primary transition-colors duration-200"
              aria-label="GeeksforGeeks profile (opens in new tab)"
            >
              GFG
            </a>
          </motion.div>
        </motion.div>

        {/* Developer Terminal & Telemetry HUD Visual Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="hidden md:flex flex-col items-center justify-center w-full"
          aria-hidden="true"
        >
          <div className="w-full max-w-md rounded-2xl bg-surface border border-border terminal-shadow card-highlight overflow-hidden font-mono text-xs backdrop-blur-xl relative">
            {/* Terminal Window Header */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-surface-2 border-b border-border">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" aria-hidden="true" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" aria-hidden="true" />
                <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" aria-hidden="true" />
                <span className="ml-2 text-text-muted text-[11px] font-mono select-none">
                  harsh@systems:~ (zsh)
                </span>
              </div>
              <div className="flex items-center gap-2 text-[11px]">
                <span className="text-emerald-400 flex items-center gap-1 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  ● sys: online
                </span>
                <button
                  onClick={handleCopy}
                  className="p-1 text-text-muted hover:text-text-primary transition-colors rounded hover:bg-surface"
                  aria-label="Copy terminal content"
                  title="Copy terminal content"
                  tabIndex={-1}
                >
                  {copied ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                </button>
              </div>
            </div>

            {/* Interactive Command Tabs */}
            <div
              role="tablist"
              aria-label="Terminal command tabs"
              className="flex items-center bg-background/50 border-b border-border px-2 pt-1.5 gap-1 text-[11px]"
            >
              <button
                onClick={() => setActiveTab('whoami')}
                className={`px-3 py-1.5 rounded-t font-mono flex items-center gap-1.5 transition-colors ${
                  activeTab === 'whoami'
                    ? 'bg-surface text-accent-primary border-t-2 border-accent-primary font-semibold'
                    : 'text-text-muted hover:text-text-secondary hover:bg-surface/50'
                }`}
                role="tab"
                aria-selected={activeTab === 'whoami'}
                aria-controls="terminal-tabpanel"
                tabIndex={-1}
              >
                <Terminal size={12} />
                whoami.sh
              </button>
              <button
                onClick={() => setActiveTab('skills')}
                className={`px-3 py-1.5 rounded-t font-mono flex items-center gap-1.5 transition-colors ${
                  activeTab === 'skills'
                    ? 'bg-surface text-accent-primary border-t-2 border-accent-primary font-semibold'
                    : 'text-text-muted hover:text-text-secondary hover:bg-surface/50'
                }`}
                role="tab"
                aria-selected={activeTab === 'skills'}
                aria-controls="terminal-tabpanel"
                tabIndex={-1}
              >
                <span>ts</span>
                skills.ts
              </button>
              <button
                onClick={() => setActiveTab('deploy')}
                className={`px-3 py-1.5 rounded-t font-mono flex items-center gap-1.5 transition-colors ${
                  activeTab === 'deploy'
                    ? 'bg-surface text-accent-primary border-t-2 border-accent-primary font-semibold'
                    : 'text-text-muted hover:text-text-secondary hover:bg-surface/50'
                }`}
                role="tab"
                aria-selected={activeTab === 'deploy'}
                aria-controls="terminal-tabpanel"
                tabIndex={-1}
              >
                <span>yml</span>
                deploy.yml
              </button>
            </div>

            {/* Terminal Body */}
            <div
              role="tabpanel"
              id="terminal-tabpanel"
              aria-label={`${activeTab} terminal content`}
              className="p-4 sm:p-5 min-h-[220px] bg-background/90 text-text-secondary font-mono leading-relaxed space-y-3"
            >
              <AnimatePresence mode="wait">
                {activeTab === 'whoami' && (
                  <motion.div
                    key="whoami"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-3"
                  >
                    <div>
                      <div className="font-mono text-accent-primary">$ whoami</div>
                      <div className="text-text-primary font-mono font-medium pl-2">harsh_prajapati</div>
                    </div>

                    <div>
                      <div className="font-mono text-accent-primary">$ role --current</div>
                      <div className="text-accent-secondary font-mono pl-2">Full Stack &amp; DevOps</div>
                      <div className="text-text-secondary text-[11px] pl-2">
                        Software Developer @ The Special Character (haira.ai)
                      </div>
                    </div>

                    <div>
                      <div className="font-mono text-accent-primary">$ telemetry --status</div>
                      <div className="text-text-muted text-[11px] pl-2 space-y-0.5">
                        <div>├── latency: &lt;45ms P99 | uptime: 99.98%</div>
                        <div>├── architecture: multi-tenant SaaS + RAG AI</div>
                        <div>└── deployments: docker-containerized on AWS</div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'skills' && (
                  <motion.div
                    key="skills"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-2 text-[11px]"
                  >
                    <div className="font-mono text-accent-primary">$ cat skills.ts</div>
                    <pre className="text-text-secondary overflow-x-auto pl-2 font-mono">
                      <code>
                        <span className="text-accent-primary">export const</span> <span className="text-yellow-400">developer</span> = &#123;{'\n'}
                        {'  '}name: <span className="text-emerald-400">&quot;Harsh Prajapati&quot;</span>,{'\n'}
                        {'  '}stack: [<span className="text-emerald-400">&quot;React.js&quot;</span>, <span className="text-emerald-400">&quot;Node.js&quot;</span>, <span className="text-emerald-400">&quot;TypeScript&quot;</span>],{'\n'}
                        {'  '}cloud: [<span className="text-emerald-400">&quot;Docker&quot;</span>, <span className="text-emerald-400">&quot;AWS &amp; Nginx&quot;</span>],{'\n'}
                        {'  '}role: <span className="text-sky-400">&quot;Full Stack &amp; DevOps&quot;</span>{'\n'}
                        &#125;;
                      </code>
                    </pre>
                  </motion.div>
                )}

                {activeTab === 'deploy' && (
                  <motion.div
                    key="deploy"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-2 text-[11px]"
                  >
                    <div className="font-mono text-accent-primary">$ cat deploy.yml</div>
                    <pre className="text-text-secondary overflow-x-auto pl-2 font-mono">
                      <code>
                        <span className="text-accent-primary">name</span>: <span className="text-emerald-400">production-deploy</span>{'\n'}
                        <span className="text-accent-primary">steps</span>:{'\n'}
                        {'  '}- <span className="text-yellow-400">run</span>: npm run test:all <span className="text-emerald-400"># 100% pass</span>{'\n'}
                        {'  '}- <span className="text-yellow-400">run</span>: docker build -t app:latest .{'\n'}
                        {'  '}- <span className="text-yellow-400">run</span>: ./deploy-zero-downtime.sh{'\n'}
                        {'  '}- <span className="text-text-muted">status</span>: <span className="text-emerald-400">● sys: online</span>
                      </code>
                    </pre>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Terminal Telemetry Footer */}
            <div className="px-4 py-2.5 bg-surface-2/90 border-t border-border flex items-center justify-between text-[10px] text-text-muted font-mono select-none">
              <span className="text-emerald-400 font-medium">● SYS: ONLINE</span>
              <span className="text-accent-secondary">LATENCY: 12ms · UPTIME: 99.98%</span>
            </div>
          </div>

          {/* Developer Proficiency Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-4 max-w-md">
            {['React.js', 'Docker', 'Node.js', 'AWS & Nginx'].map((badge) => (
              <span
                key={badge}
                className="px-3 py-1.5 text-xs font-mono font-medium rounded-lg bg-surface border border-border text-text-secondary shadow-sm hover:border-accent-primary hover:text-accent-primary hover:shadow-glow-subtle transition-all duration-200 cursor-default card-highlight"
              >
                {badge}
              </span>
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
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted text-xs hover:text-text-secondary transition-colors duration-200"
        aria-label="Scroll to about section"
      >
        <span>scroll</span>
        <ArrowDown size={14} className="animate-bounce" />
      </motion.button>
    </section>
  );
}
