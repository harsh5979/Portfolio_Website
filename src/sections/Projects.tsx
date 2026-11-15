import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from '../components/BrandIcons';
import { AnimatedSection } from '../components/AnimatedSection';
import { SectionTitle } from '../components/SectionTitle';
import { projects, filterTags } from '../data/projects';

export function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = useMemo(
    () =>
      activeFilter === 'All'
        ? projects
        : projects.filter((p) =>
            p.stack.some((s) => s.toLowerCase().includes(activeFilter.toLowerCase()))
          ),
    [activeFilter]
  );

  return (
    <AnimatedSection id="projects" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <SectionTitle
          label="Projects"
          title="Things I've built"
          subtitle="A mix of products, experiments, and tools. All built from scratch."
        />

        {/* Filter bar */}
        <div
          className="flex flex-wrap gap-2 mb-10"
          role="group"
          aria-label="Filter projects by technology"
        >
          {filterTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              aria-pressed={activeFilter === tag}
              className={`text-xs font-medium px-3 py-1.5 rounded-lg border transition-colors duration-150 ${
                activeFilter === tag
                  ? 'border-accent-primary bg-accent-primary-dim text-accent-primary'
                  : 'border-border text-text-muted hover:border-accent-primary hover:text-text-secondary'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="bg-surface border border-border rounded-xl p-6 flex flex-col gap-4 hover:border-accent-primary hover:shadow-lg hover:shadow-sky-500/5 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="text-base font-semibold text-text-primary group-hover:text-accent-primary transition-colors duration-200">
                      {project.title}
                    </h3>
                    {project.period && (
                      <span className="text-xs text-text-muted">{project.period}</span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-muted hover:text-text-primary transition-colors duration-150"
                      aria-label={`GitHub repository for ${project.title} (opens in new tab)`}
                    >
                      <GithubIcon size={16} />
                    </a>
                    {project.liveUrl !== '#' ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-muted hover:text-accent-primary transition-colors duration-150"
                        aria-label={`Live demo for ${project.title} (opens in new tab)`}
                      >
                        <ExternalLink size={16} />
                      </a>
                    ) : (
                      <span
                        className="text-text-muted opacity-30 cursor-default"
                        title="Live demo coming soon"
                        aria-label="Live demo coming soon"
                      >
                        <ExternalLink size={16} />
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-sm text-text-secondary leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Features */}
                <ul className="space-y-1">
                  {project.features.slice(0, 3).map((f) => (
                    <li key={f} className="text-xs text-text-muted flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-accent-primary shrink-0" aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                  {project.features.length > 3 && (
                    <li className="text-xs text-text-muted pl-3">
                      +{project.features.length - 3} more
                    </li>
                  )}
                </ul>

                {/* Stack badges */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-0.5 rounded bg-surface-2 border border-border text-text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-text-muted py-16">No projects match this filter.</p>
        )}
      </div>
    </AnimatedSection>
  );
}
