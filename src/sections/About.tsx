import { motion } from 'framer-motion';
import { AnimatedSection } from '../components/AnimatedSection';
import { SectionTitle } from '../components/SectionTitle';
import {
  Code2,
  Server,
  Cloud,
  Cpu,
  Briefcase,
  GraduationCap,
  Activity,
  ShieldCheck,
  Zap,
  Layers,
} from 'lucide-react';
import { personalInfo } from '../data/personal';

const specializations = [
  {
    icon: Code2,
    title: 'Full Stack Development',
    desc: 'React & Next.js frontend architectures paired with Node.js / Express services. Clean state, performance, and responsive UI.',
  },
  {
    icon: Server,
    title: 'Backend Systems & APIs',
    desc: 'Production REST & WebSocket APIs, JWT/OAuth authentication, database modeling (MongoDB, PostgreSQL), and multi-tenant isolation.',
  },
  {
    icon: Cloud,
    title: 'DevOps & Deployment',
    desc: 'Docker containerization, automated Nginx reverse proxy configuration, AWS EC2/S3 cloud infrastructure, and CI/CD automation.',
  },
  {
    icon: Cpu,
    title: 'AI & Emerging Tech',
    desc: 'Production AI resume scoring, real-time voice interview pipelines, RAG systems, and smart payment gateways (Razorpay, PhonePe).',
  },
];

const telemetryMetrics = [
  {
    icon: Activity,
    value: '< 45ms',
    label: 'P99 API Latency',
    detail: 'Fastify & WebSocket real-time pipelines',
  },
  {
    icon: ShieldCheck,
    value: '99.98%',
    label: 'System Uptime',
    detail: 'AWS EC2, Nginx reverse proxy & PM2',
  },
  {
    icon: Zap,
    value: '10,000+',
    label: 'Automated Screenings',
    detail: 'AI resume & voice pipelines at haira.ai',
  },
  {
    icon: Layers,
    value: '100%',
    label: 'Multi-Tenant Isolation',
    detail: 'Strict enterprise tenant isolation & auth',
  },
];

export function About() {
  return (
    <AnimatedSection id="about" className="py-24 md:py-32 scroll-mt-24 max-w-6xl mx-auto px-4 md:px-8">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Left: narrative, status & telemetry */}
        <div>
          <SectionTitle
            label="About"
            title="Software Developer & Systems Builder"
            subtitle="Bridging modern web applications, scalable backend systems, and deployment automation."
          />

          <div className="space-y-4 text-text-secondary text-base leading-relaxed">
            {personalInfo.bio.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Quick status pills */}
          <div className="mt-8 pt-6 border-t border-border grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-3">
            <div className="flex items-center gap-3 text-xs text-text-primary bg-surface border border-border p-3.5 rounded-xl card-highlight hover:border-accent-primary/60 transition-colors">
              <Briefcase size={16} className="text-accent-primary shrink-0" />
              <div>
                <div className="font-semibold text-text-primary">Current Role</div>
                <div className="text-text-muted">Software Developer @ haira.ai</div>
              </div>
            </div>
            <div className="flex items-center gap-3 text-xs text-text-primary bg-surface border border-border p-3.5 rounded-xl card-highlight hover:border-accent-primary/60 transition-colors">
              <GraduationCap size={16} className="text-accent-primary shrink-0" />
              <div>
                <div className="font-semibold text-text-primary">Education</div>
                <div className="text-text-muted">B.Tech Computer Eng. (GEC Modasa)</div>
              </div>
            </div>
          </div>

          {/* Developer Telemetry Scale HUD Cards */}
          <div className="mt-6">
            <div className="text-xs font-mono font-medium text-text-muted tracking-wider uppercase mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-primary" />
              Engineering Telemetry &amp; Scale
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-3">
              {telemetryMetrics.map(({ icon: Icon, value, label, detail }) => (
                <div
                  key={label}
                  className="bg-surface border border-border rounded-xl p-3.5 card-highlight hover:border-accent-primary/60 hover:shadow-glow-subtle transition-all duration-200"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-accent-primary">{value}</span>
                    <Icon size={14} className="text-text-muted shrink-0" aria-hidden="true" />
                  </div>
                  <div className="text-xs font-semibold text-text-primary mb-0.5">{label}</div>
                  <div className="text-[11px] text-text-muted leading-tight">{detail}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: specializations grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4">
          {specializations.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="bg-surface border border-border rounded-xl p-5 hover:border-accent-primary hover:shadow-lg hover:shadow-sky-500/10 transition-all duration-300 group card-highlight flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center text-accent-primary mb-3.5 group-hover:scale-110 group-hover:border-accent-primary/40 transition-all duration-200 shrink-0">
                  <Icon size={20} aria-hidden="true" />
                </div>
                <h3 className="text-sm font-semibold text-text-primary mb-2 group-hover:text-accent-primary transition-colors duration-200">{title}</h3>
                <p className="text-xs text-text-secondary leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
