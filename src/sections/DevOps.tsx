import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedSection } from '../components/AnimatedSection';
import { SectionTitle } from '../components/SectionTitle';
import {
  Container,
  Cloud,
  Terminal,
  GitBranch,
  Layers,
  Shield,
  GitCommit,
  Globe,
  Play,
  RotateCcw,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

interface PipelineStep {
  id: string;
  stepNumber: string;
  shortLabel: string;
  command: string;
  status: string;
  duration: string;
  icon: typeof GitCommit;
  subtext: string;
  tech: string[];
  purpose: string;
  highlights: string[];
  logs: string[];
}

const PIPELINE_STEPS: PipelineStep[] = [
  {
    id: 'commit',
    stepNumber: '01',
    shortLabel: 'Git Commit',
    command: 'git push origin main',
    status: 'Triggered',
    duration: '0.4s',
    icon: GitCommit,
    subtext: 'Code commit verified & webhook payload dispatched',
    tech: ['Git', 'GitHub Webhooks', 'SSH Key Auth'],
    purpose:
      'Developer commits push to main branch with signed cryptographic commits. GitHub webhooks immediately emit real-time push events to our automated CI runner.',
    highlights: [
      'GPG-signed commit verification',
      'Automated webhook payload signature validation',
      'Triggers parallel CI validation matrix',
    ],
    logs: [
      '[git:hook] Commit a7f93b2 validated: "feat(pipeline): zero-downtime containerized deploy"',
      '[git:push] Pushing ref refs/heads/main to origin...',
      '[webhook] Dispatched POST event to CI webhook listener (HTTP 200 OK)',
      '[telemetry] Pipeline job 84920 initialized at 2026-11-15T05:00:00Z',
    ],
  },
  {
    id: 'ci',
    stepNumber: '02',
    shortLabel: 'GitHub Actions',
    command: 'npm run test:all && oxlint && tsc -b',
    status: 'All Checks Passed',
    duration: '12.8s',
    icon: Terminal,
    subtext: 'Vitest test suite, Oxlint static analysis & TypeScript compiler',
    tech: ['GitHub Actions', 'Vitest', 'Oxlint', 'TypeScript 7'],
    purpose:
      'Enforces ironclad code quality before any binary or container build occurs. Runs linting, typechecking, and comprehensive unit/integration test suites in an isolated Ubuntu container.',
    highlights: [
      'Oxlint: 40+ files analyzed in <30ms with 0 errors',
      'Strict TypeScript 7 compiler without any type bypasses',
      'Vitest automated regression suite exit code: 0',
    ],
    logs: [
      '[ci:setup] Runner: ubuntu-24.04 (Node.js v22.14.0, pnpm v9)',
      '[ci:lint]  oxlint: 40 files inspected (0 warnings, 0 errors, 28ms)',
      '[ci:tsc]   tsc -b: Strict type check passed cleanly with 0 diagnostics',
      '[ci:test]  vitest run: 27/27 tests passed across all tiers (100% green)',
      '[ci:exit]  Job status: SUCCESS. Proceeding to container compilation.',
    ],
  },
  {
    id: 'build',
    stepNumber: '03',
    shortLabel: 'Docker Build',
    command: 'docker compose build --push',
    status: 'Image Built & Cached',
    duration: '24.1s',
    icon: Container,
    subtext: 'Multi-stage Alpine containerization with layer caching',
    tech: ['Docker', 'Docker Compose', 'Alpine Linux', 'GHCR'],
    purpose:
      'Packages application into minimal immutable OCI container image using multi-stage builds. Strips development dependencies, caching node_modules layers for sub-30s repeat builds.',
    highlights: [
      'Multi-stage build compresses image from 820MB down to 42MB',
      'Runs as non-privileged unroot user for security hardening',
      'Integrated HEALTHCHECK probe against /api/health endpoint',
    ],
    logs: [
      '[docker] Step 1/7: FROM node:22-alpine AS builder',
      '[docker] Step 3/7: RUN pnpm install --frozen-lockfile (cache hit)',
      '[docker] Step 5/7: RUN pnpm build -> Vite generated production chunks',
      '[docker] Step 7/7: HEALTHCHECK --interval=30s CMD curl -f http://localhost:3000/api/health',
      '[docker] Successfully tagged harsh/portfolio:latest (42.4MB)',
      '[docker] Image pushed to local container daemon registry',
    ],
  },
  {
    id: 'proxy',
    stepNumber: '04',
    shortLabel: 'Nginx Reverse Proxy',
    command: 'nginx -t && nginx -s reload && certbot renew',
    status: 'SSL Active & Routed',
    duration: '1.2s',
    icon: Shield,
    subtext: 'TLS 1.3 termination, Certbot Let\'s Encrypt & dynamic upstream proxy',
    tech: ['Nginx', 'Certbot', 'Let\'s Encrypt', 'TLS 1.3'],
    purpose:
      'Nginx gracefully reloads worker processes without dropping a single active TCP connection. Dynamic upstream routing routes incoming domain traffic to newly spawned container ports.',
    highlights: [
      'Zero-downtime hot reloading with socket preservation',
      'Let\'s Encrypt automated SSL renewal via cron & certbot',
      'HTTP/2, gzip compression, and security header fortification (HSTS)',
    ],
    logs: [
      '[nginx:conf] Syntax in /etc/nginx/sites-available/*.conf is valid',
      '[nginx:ssl]  TLS 1.3 certificate valid (Let\'s Encrypt, 88 days remaining)',
      '[nginx:route] Upstream proxy configured -> 127.0.0.1:3000',
      '[nginx:reload] Reloading master process: 4 worker processes reloaded cleanly',
      '[nginx:status] Active connections: 42, 0 dropped frames',
    ],
  },
  {
    id: 'live',
    stepNumber: '05',
    shortLabel: 'Live Subdomain',
    command: 'curl -I https://haira.ai/health && ping -c 1 live',
    status: 'Live & Healthy (200 OK)',
    duration: '0.1s',
    icon: Globe,
    subtext: 'Zero-downtime subdomain active on AWS EC2 infrastructure',
    tech: ['AWS EC2', 'AWS S3', 'Route 53', 'Linux Ubuntu'],
    purpose:
      'Deployment goes live instantly behind unique subdomain provisioning. Real-time health monitors confirm 200 OK status, routing live traffic with sub-45ms P99 latency.',
    highlights: [
      'Zero-downtime blue/green container rollout verified',
      'Sub-45ms P99 API edge latency',
      'Automated PM2 & container health monitor watchers active',
    ],
    logs: [
      '[dns:route]  A Record mapped: 13.235.xxx.xxx (AWS EC2 Mumbai AP-SOUTH-1)',
      '[http:probe] GET https://*.subdomain/healthz -> HTTP 200 OK (latency: 18ms)',
      '[telemetry]  Zero-downtime deployment verified live.',
      '[pipeline]   Pipeline completed successfully in 38.6s total elapsed time.',
      '[status]     SYS: ONLINE ● Service operational across all nodes.',
    ],
  },
];

const devopsItems = [
  {
    icon: Container,
    title: 'Containerization',
    desc: 'Docker & Docker Compose for consistent environments. All my projects ship as containers.',
    tags: ['Docker', 'Docker Compose', 'Container Management'],
  },
  {
    icon: Cloud,
    title: 'Cloud Infrastructure',
    desc: 'Deployed on AWS EC2 with S3 for object storage. Managed instances, configured networking.',
    tags: ['AWS EC2', 'AWS S3', 'Cloud Deployment'],
  },
  {
    icon: Terminal,
    title: 'Linux & Server Admin',
    desc: 'Ubuntu server management, process control with PM2, Nginx configuration, and SSH.',
    tags: ['Ubuntu', 'Nginx', 'PM2', 'Linux'],
  },
  {
    icon: GitBranch,
    title: 'CI/CD Pipelines',
    desc: 'GitHub Actions workflows for automated testing, building, and deployment to production.',
    tags: ['GitHub Actions', 'CI/CD', 'Automation'],
  },
  {
    icon: Layers,
    title: 'Orchestration',
    desc: 'Learning Kubernetes for container orchestration at scale. Familiar with core concepts.',
    tags: ['Kubernetes', 'Scaling'],
  },
  {
    icon: Shield,
    title: 'SSL & Security',
    desc: "HTTPS everywhere — Certbot, Let's Encrypt, Nginx reverse proxy with SSL termination.",
    tags: ['SSL/TLS', 'Certbot', 'HTTPS'],
  },
];

export function DevOps() {
  const [activeStepId, setActiveStepId] = useState<string>('commit');
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [simulationIndex, setSimulationIndex] = useState<number>(0);

  const activeStep =
    PIPELINE_STEPS.find((s) => s.id === activeStepId) || PIPELINE_STEPS[0];

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (isSimulating) {
      timer = setTimeout(() => {
        if (simulationIndex < PIPELINE_STEPS.length - 1) {
          const nextIndex = simulationIndex + 1;
          setSimulationIndex(nextIndex);
          setActiveStepId(PIPELINE_STEPS[nextIndex].id);
        } else {
          setIsSimulating(false);
        }
      }, 1600);
    }
    return () => clearTimeout(timer);
  }, [isSimulating, simulationIndex]);

  const handleStartSimulation = () => {
    setSimulationIndex(0);
    setActiveStepId(PIPELINE_STEPS[0].id);
    setIsSimulating(true);
  };

  const handleResetSimulation = () => {
    setIsSimulating(false);
    setSimulationIndex(0);
    setActiveStepId(PIPELINE_STEPS[0].id);
  };

  return (
    <AnimatedSection id="devops" className="py-24 md:py-32 scroll-mt-24 bg-surface/30">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionTitle
            label="Infrastructure"
            title="CI/CD & Cloud Pipeline"
            subtitle="I enjoy the ops side of engineering. Shipping code is one thing; running it reliably is another."
            className="mb-0 md:mb-0"
          />

          {/* Simulation Controls */}
          <div className="flex items-center gap-2 self-start md:self-end">
            <button
              onClick={handleStartSimulation}
              disabled={isSimulating}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-semibold transition-all shadow-sm ${
                isSimulating
                  ? 'bg-accent-primary/20 text-accent-primary border border-accent-primary/30 cursor-not-allowed'
                  : 'bg-accent-primary text-black hover:bg-sky-400 active:scale-95 shadow-sky-500/10'
              }`}
              aria-label="Simulate automated deployment pipeline"
            >
              {isSimulating ? (
                <>
                  <span className="w-2 h-2 rounded-full bg-accent-primary animate-ping" />
                  <span>Simulating Pipeline...</span>
                </>
              ) : (
                <>
                  <Play size={14} className="fill-current" />
                  <span>Simulate Deployment</span>
                </>
              )}
            </button>

            <button
              onClick={handleResetSimulation}
              className="p-2 rounded-lg bg-surface border border-border text-text-muted hover:text-text-primary hover:border-accent-primary/50 transition-colors"
              aria-label="Reset pipeline simulation"
              title="Reset pipeline simulation"
            >
              <RotateCcw size={14} />
            </button>
          </div>
        </div>

        {/* Dynamic CI/CD Pipeline Visualizer Ribbon */}
        <div className="mb-12 bg-surface border border-border rounded-2xl p-4 md:p-6 terminal-shadow card-highlight">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-border/60">
            <div className="flex items-center gap-2 text-xs font-mono text-text-secondary">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-semibold text-text-primary">Pipeline Flow:</span>
              <span className="text-text-muted hidden sm:inline">
                [Git Commit] ──▶ [GitHub Actions] ──▶ [Docker Build] ──▶ [Nginx Reverse Proxy] ──▶ [Live Subdomain]
              </span>
            </div>
            <div className="text-[11px] font-mono text-accent-secondary">
              {isSimulating
                ? `STEP ${simulationIndex + 1} OF 5 RUNNING`
                : 'CLICK STEP TO INSPECT'}
            </div>
          </div>

          {/* Interactive Step Nodes in timeline */}
          <div
            role="tablist"
            aria-label="Deployment pipeline stages"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 relative"
          >
            {PIPELINE_STEPS.map((step, idx) => {
              const Icon = step.icon;
              const isActive = activeStepId === step.id;
              const isPast = isSimulating && simulationIndex > idx;
              const isCurrentSimulating = isSimulating && simulationIndex === idx;

              return (
                <div key={step.id} className="relative flex flex-col">
                  <button
                    onClick={() => {
                      if (!isSimulating) setActiveStepId(step.id);
                    }}
                    className={`relative w-full text-left p-4 rounded-xl border transition-all duration-200 flex flex-col justify-between min-h-[135px] ${
                      isActive
                        ? 'bg-accent-primary/10 border-accent-primary shadow-lg shadow-sky-500/10'
                        : isPast
                        ? 'bg-surface-2 border-emerald-500/40'
                        : 'bg-surface-2/60 border-border hover:border-accent-primary/40 hover:bg-surface-2'
                    }`}
                    aria-selected={isActive}
                    aria-controls="pipeline-stage-inspector"
                    role="tab"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2.5">
                        <span className="text-[10px] font-mono font-bold text-accent-primary px-1.5 py-0.5 rounded bg-accent-primary/10 border border-accent-primary/20">
                          {step.stepNumber}
                        </span>
                        <div className="flex items-center gap-1">
                          {isCurrentSimulating ? (
                            <span className="w-2 h-2 rounded-full bg-accent-primary animate-ping" />
                          ) : isPast ? (
                            <CheckCircle2 size={13} className="text-emerald-400" />
                          ) : (
                            <span className="text-[10px] font-mono text-text-muted">
                              {step.duration}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 mb-1">
                        <Icon
                          size={15}
                          className={isActive ? 'text-accent-primary' : 'text-text-secondary'}
                        />
                        <span className="text-xs font-semibold text-text-primary truncate">
                          {step.shortLabel}
                        </span>
                      </div>

                      <p className="text-[11px] text-text-muted line-clamp-2 leading-tight">
                        {step.subtext}
                      </p>
                    </div>

                    <div className="pt-2 mt-2 border-t border-border/40 flex items-center justify-between text-[10px] font-mono">
                      <span className={isActive ? 'text-accent-primary' : 'text-text-muted'}>
                        {step.status}
                      </span>
                      {isActive && (
                        <span className="text-accent-primary flex items-center gap-0.5">
                          ACTIVE
                        </span>
                      )}
                    </div>

                    {/* Active highlight glow border */}
                    {isActive && (
                      <motion.div
                        layoutId="activePipelineStepGlider"
                        className="absolute inset-0 rounded-xl border-2 border-accent-primary pointer-events-none"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                  </button>

                  {/* Connecting Arrow for Desktop Layout */}
                  {idx < PIPELINE_STEPS.length - 1 && (
                    <div
                      className="hidden lg:flex absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-border"
                      aria-hidden="true"
                    >
                      <ArrowRight size={14} className="text-accent-primary/60" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Detailed Step Inspector HUD */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep.id}
            role="tabpanel"
            id="pipeline-stage-inspector"
            aria-label={`${activeStep.shortLabel} details`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16"
          >
            {/* Left: Architecture & Rationale */}
            <div className="lg:col-span-5 bg-surface border border-border rounded-xl p-5 md:p-6 flex flex-col justify-between shadow-lg card-highlight">
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="inline-flex items-center gap-2 text-xs font-mono font-medium text-accent-primary px-2.5 py-1 rounded bg-accent-primary/10 border border-accent-primary/20">
                    <span>STAGE {activeStep.stepNumber}</span>
                    <span className="text-border">|</span>
                    <span>{activeStep.duration}</span>
                  </div>
                  <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 size={13} />
                    {activeStep.status}
                  </span>
                </div>

                <h3 className="text-base font-bold text-text-primary mb-2">
                  {activeStep.shortLabel}
                </h3>

                <p className="text-xs text-text-secondary leading-relaxed mb-5">
                  {activeStep.purpose}
                </p>

                {/* Highlights */}
                <div className="space-y-2 mb-6">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-text-muted">
                    Technical Specifications
                  </div>
                  {activeStep.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-text-secondary">
                      <span className="text-accent-primary mt-0.5">▹</span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="pt-4 border-t border-border flex flex-wrap items-center gap-1.5">
                <span className="text-[10px] font-mono text-text-muted mr-1">Stack:</span>
                {activeStep.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-surface-2 border border-border text-text-primary"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Terminal Console Output Logs */}
            <div className="lg:col-span-7 bg-surface border border-border rounded-xl overflow-hidden shadow-xl flex flex-col card-highlight">
              {/* Terminal Title Bar */}
              <div className="px-4 py-2.5 bg-surface-2 border-b border-border flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
                  <span className="ml-2 text-text-muted text-[11px] font-mono">
                    pipeline-runner:{activeStep.id}.log
                  </span>
                </div>
                <div className="text-[11px] font-mono text-accent-primary">
                  exit code: 0
                </div>
              </div>

              {/* Command Prompt */}
              <div className="px-4 py-2 bg-background/90 border-b border-border/60 text-xs font-mono text-text-muted flex items-center gap-2">
                <span className="text-accent-primary font-bold">$</span>
                <span className="text-text-primary">{activeStep.command}</span>
              </div>

              {/* Log Stream Output */}
              <div className="p-4 bg-background/80 flex-1 font-mono text-[11.5px] leading-relaxed space-y-2 overflow-x-auto min-h-[220px]">
                {activeStep.logs.map((log, index) => {
                  const isSuccess = log.includes('SUCCESS') || log.includes('passed') || log.includes('200 OK') || log.includes('ONLINE');
                  const isCmd = log.startsWith('$');

                  return (
                    <div
                      key={index}
                      className={`flex items-start gap-2 ${
                        isSuccess
                          ? 'text-emerald-400'
                          : isCmd
                          ? 'text-accent-primary font-semibold'
                          : 'text-text-secondary'
                      }`}
                    >
                      <span className="text-text-muted select-none text-[10px] w-5 text-right shrink-0">
                        {index + 1}
                      </span>
                      <span className="break-all">{log}</span>
                    </div>
                  );
                })}
              </div>

              {/* Terminal Footer Telemetry */}
              <div className="px-4 py-2 bg-surface-2/80 border-t border-border flex items-center justify-between text-[10px] font-mono text-text-muted">
                <span>STAGE TIME: {activeStep.duration}</span>
                <span className="text-emerald-400">● EXECUTION COMPLETE</span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Infrastructure Capabilities Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {devopsItems.map(({ icon: Icon, title, desc, tags }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-surface border border-border rounded-xl p-5 hover:border-accent-primary hover:shadow-lg hover:shadow-sky-500/5 transition-all duration-300 group card-highlight"
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-8 h-8 rounded-lg bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-200"
                  aria-hidden="true"
                >
                  <Icon size={16} className="text-accent-primary" />
                </div>
                <h3 className="text-sm font-semibold text-text-primary">{title}</h3>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed mb-3">{desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 rounded bg-surface-2 border border-border text-text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Highlight box */}
        <div className="mt-10 p-6 rounded-xl border border-accent-primary/30 bg-surface card-highlight">
          <h3 className="text-sm font-semibold text-text-primary mb-2">
            Automatic Deployment System
          </h3>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            A custom self-hosted deployment engine that consumes GitHub repository webhooks and functions as a self-hosted deployment platform that takes a GitHub repo URL, builds an isolated Docker container, configures Nginx reverse proxy, and serves it behind live subdomains automatically with zero manual intervention.
          </p>
          <div className="flex flex-wrap gap-2">
            {['Docker', 'Nginx', 'AWS EC2', 'Node.js', 'MongoDB'].map((stack) => (
              <span
                key={stack}
                className="text-xs px-2.5 py-1 rounded bg-surface-2 border border-border text-text-primary font-mono"
              >
                {stack}
              </span>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
