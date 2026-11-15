import { motion } from 'framer-motion';
import { AnimatedSection } from '../components/AnimatedSection';
import { SectionTitle } from '../components/SectionTitle';
import {
  Container,
  Cloud,
  Terminal,
  GitBranch,
  Layers,
  Shield,
} from 'lucide-react';

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
  return (
    <AnimatedSection id="devops" className="py-24 md:py-32 bg-surface/30">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <SectionTitle
          label="Infrastructure"
          title="DevOps & Cloud"
          subtitle="I enjoy the ops side of engineering. Shipping code is one thing; running it reliably is another."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {devopsItems.map(({ icon: Icon, title, desc, tags }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-surface border border-border rounded-xl p-5 hover:border-accent-primary transition-colors duration-300 group"
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-8 h-8 rounded-lg bg-accent-primary-dim flex items-center justify-center group-hover:scale-110 transition-transform duration-200"
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
        <div className="mt-10 p-6 rounded-xl border border-accent-primary/30 bg-accent-primary-dim">
          <h3 className="text-sm font-semibold text-text-primary mb-2">
            Automatic Deployment System
          </h3>
          <p className="text-sm text-text-secondary leading-relaxed">
            One of my recent projects is a self-hosted deployment platform that takes a GitHub
            repo URL, clones it, builds it, wraps it in a Docker container, and serves it
            behind Nginx — all automatically. Essentially a lightweight internal Vercel alternative.
            Built with React, Node.js, Docker, and MongoDB.
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}
