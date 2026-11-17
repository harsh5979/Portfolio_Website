import {
  Braces, Cable, Cloud, CodeXml, Coffee, CreditCard, Database, GitBranch,
  KeyRound, Layers, Monitor, Radio, ScanLine, Server, ShieldCheck, Workflow,
  type LucideIcon,
} from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';
import { skillCategories } from '../data/skills';

const categoryIcons: Record<string, LucideIcon> = {
  Languages: Braces,
  'Frontend & UI': Monitor,
  'Backend & APIs': Server,
  Databases: Database,
  'DevOps & Cloud': Cloud,
  'AI, Payments & IoT': Layers,
};

const toolIcons: Record<string, LucideIcon> = {
  Java: Coffee,
  'C / C#': CodeXml,
  SQL: Database,
  'Framer Motion': Workflow,
  'HTML5 & CSS3': CodeXml,
  'REST APIs': Cable,
  'JWT Auth & OAuth': KeyRound,
  'AWS (EC2, S3)': Cloud,
  'SSL & Certbot': ShieldCheck,
  'LLM Integration': Workflow,
  'RAG Architectures': Layers,
  'Razorpay & PhonePe': CreditCard,
  'Web3 & Hardhat': GitBranch,
  'IoT (ESP8266, Raspberry Pi)': Radio,
  'OpenCV & YOLO': ScanLine,
  'Postman & Git/GitHub': GitBranch,
};

export function Skills() {
  return (
    <AnimatedSection id="skills" aria-labelledby="skills-title" className="scroll-mt-24 border-y border-border py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <header className="mb-8 flex flex-wrap items-end justify-between gap-3">
          <h2 id="skills-title" className="portfolio-display text-4xl leading-none text-text-primary sm:text-5xl">
            Technical toolkit
          </h2>
          <p className="max-w-sm text-sm leading-relaxed text-text-secondary">
            Languages, frameworks, and deployment tools I use across my projects.
          </p>
        </header>

        <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2">
          {skillCategories.map(({ category, skills }) => {
            const CategoryIcon = categoryIcons[category] ?? Layers;
            return (
              <section key={category} className="min-w-0 bg-surface p-4 sm:p-6">
                <h3 className="mb-3 flex items-center gap-2 text-base font-semibold text-text-primary">
                  <CategoryIcon size={17} className="shrink-0 text-accent-primary" aria-hidden="true" />
                  {category}
                </h3>
                <ul className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,9rem),1fr))] gap-x-3 gap-y-1">
                  {skills.map(({ name, icon }) => {
                    const ToolIcon = toolIcons[name] ?? CategoryIcon;
                    return (
                      <li key={name} className="flex min-h-10 items-center gap-2 text-sm leading-snug text-text-secondary">
                        <span className="flex size-7 shrink-0 items-center justify-center rounded-md bg-surface-2" aria-hidden="true">
                          {icon ? (
                            <img src={icon} alt="" width={15} height={15} loading="lazy" className="block" />
                          ) : (
                            <ToolIcon size={15} strokeWidth={1.7} className="text-accent-primary" />
                          )}
                        </span>
                        <span>{name}</span>
                      </li>
                    );
                  })}
                </ul>
              </section>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
