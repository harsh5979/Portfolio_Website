import { AnimatedSection } from '../components/AnimatedSection';
import { SectionTitle } from '../components/SectionTitle';
import { Briefcase, ExternalLink, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { experiences } from '../data/experience';

export function Experience() {
  return (
    <AnimatedSection id="experience" className="py-24 md:py-32 bg-surface/30">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <SectionTitle
          label="Experience"
          title="Professional Experience"
          subtitle="Real software engineering and production systems delivered in professional and live product environments."
        />

        <div className="space-y-10 max-w-4xl">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="relative pl-6 sm:pl-8 border-l-2 border-border hover:border-accent-purple transition-colors duration-300 group"
            >
              {/* Timeline marker */}
              <div
                className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-accent-purple border-2 border-background ring-4 ring-background"
                aria-hidden="true"
              />

              <div className="bg-surface/80 border border-border rounded-xl p-6 sm:p-8 hover:border-accent-purple/60 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Briefcase size={14} className="text-accent-purple" aria-hidden="true" />
                      <span className="text-xs font-semibold text-accent-purple tracking-wider uppercase">
                        {exp.type}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-text-primary group-hover:text-accent-purple transition-colors">
                      {exp.role}
                    </h3>
                    <div className="text-base font-medium text-text-secondary mt-0.5">
                      {exp.companyUrl ? (
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 hover:text-accent-purple transition-colors"
                        >
                          {exp.company}
                          <ExternalLink size={13} className="text-text-muted" />
                        </a>
                      ) : (
                        exp.company
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end text-xs text-text-muted gap-1">
                    <span className="inline-flex items-center gap-1.5 bg-surface-2 px-2.5 py-1 rounded-md border border-border">
                      <Calendar size={12} className="text-accent-purple" />
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1 text-text-muted">
                      <MapPin size={12} />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-text-secondary leading-relaxed mb-4">
                  {exp.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 mb-6">
                  {exp.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-text-muted leading-relaxed">
                      <CheckCircle2 size={13} className="text-accent-purple shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/80">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2.5 py-1 rounded-md bg-surface-2 border border-border text-text-secondary font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
