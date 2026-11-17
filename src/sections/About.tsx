import { Braces, CloudUpload, Database, Headphones } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';
import { SectionTitle } from '../components/SectionTitle';
import { personalInfo } from '../data/personal';

const focusAreas = [
  { icon: Braces, title: 'Web apps', description: 'React and Next.js interfaces backed by Node.js services.' },
  { icon: Database, title: 'APIs and data', description: 'REST and WebSocket APIs, authentication, and data models in PostgreSQL and MongoDB.' },
  { icon: Headphones, title: 'Voice and search', description: 'Voice interview flows, résumé screening, and retrieval-based search.' },
  { icon: CloudUpload, title: 'Deployment', description: 'Docker, Nginx, and cloud deployments with build and health checks.' },
];

export function About() {
  return (
    <AnimatedSection id="about" className="scroll-mt-24 border-t border-border py-16 md:py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-2 md:gap-16 md:px-8">
        <div>
          <SectionTitle title="About me" />
          <div className="max-w-prose space-y-4 leading-relaxed text-text-secondary">
            {personalInfo.bio.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
        <ul className="divide-y divide-border border-y border-border">
          {focusAreas.map(({ icon: Icon, title, description }) => (
            <li key={title} className="flex gap-4 py-4">
              <Icon size={20} className="mt-0.5 shrink-0 text-accent-primary" aria-hidden="true" />
              <div>
                <h3 className="font-semibold text-text-primary">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-text-secondary">{description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </AnimatedSection>
  );
}
