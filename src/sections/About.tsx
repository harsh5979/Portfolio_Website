import { AnimatedSection } from '../components/AnimatedSection';
import { SectionTitle } from '../components/SectionTitle';
import { Code2, Server, Cloud, Cpu, Briefcase, GraduationCap } from 'lucide-react';
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

export function About() {
  return (
    <AnimatedSection id="about" className="py-24 md:py-32 max-w-6xl mx-auto px-4 md:px-8">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* Left: text */}
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
          <div className="mt-8 pt-6 border-t border-border grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="flex items-center gap-2.5 text-xs text-text-primary bg-surface border border-border p-3 rounded-lg">
              <Briefcase size={16} className="text-accent-primary shrink-0" />
              <div>
                <div className="font-semibold text-text-primary">Current Role</div>
                <div className="text-text-muted">Software Developer @ haira.ai</div>
              </div>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-text-primary bg-surface border border-border p-3 rounded-lg">
              <GraduationCap size={16} className="text-accent-primary shrink-0" />
              <div>
                <div className="font-semibold text-text-primary">Education</div>
                <div className="text-text-muted">B.Tech Computer Eng. (GEC Modasa)</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: specializations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {specializations.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-surface border border-border rounded-xl p-5 hover:border-accent-primary hover:shadow-lg hover:shadow-sky-500/5 transition-all duration-300 group"
            >
              <Icon
                size={22}
                className="text-accent-primary mb-3 group-hover:scale-110 transition-transform duration-200"
                aria-hidden="true"
              />
              <h3 className="text-sm font-semibold text-text-primary mb-2">{title}</h3>
              <p className="text-xs text-text-secondary leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
