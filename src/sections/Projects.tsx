import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Star } from 'lucide-react';
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
          label="Featured Work"
          title="Key Engineering Projects"
          subtitle="Production platforms, automated deployment engines, and distributed web applications built with modern engineering standards."
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
              className={`text-xs font-medium px-3.5 py-1.5 rounded-lg border transition-all duration-150 cursor-pointer ${
                activeFilter === tag
                  ? 'border-accent-primary bg-accent-primary-dim text-accent-primary font-semibold shadow-sm'
                  : 'border-border text-text-muted hover:border-accent-primary hover:text-text-secondary'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => {
              const isLive = project.liveUrl && project.liveUrl !== '#';

              return (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className={`bg-surface border rounded-xl p-6 flex flex-col justify-between gap-5 transition-all duration-300 hover:border-accent-primary hover:shadow-xl hover:shadow-sky-500/5 group relative ${
                    project.featured ? 'border-border/90' : 'border-border/60'
                  }`}
                >
                  <div className="space-y-4">
                    {/* Header meta badges */}
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <span className="text-[11px] font-medium tracking-wide uppercase px-2 py-0.5 rounded bg-surface-2 border border-border text-text-muted">
                        {project.category || 'Engineering'}
                      </span>

                      {project.status && (
                        <span
                          className={`inline-flex items-center gap-1.5 text-[11px] font-medium px-2 py-0.5 rounded-full ${
                            project.status === 'Live Production'
                              ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                              : 'bg-surface-2 text-text-muted border border-border'
                          }`}
                        >
                          {project.status === 'Live Production' && (
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          )}
                          {project.status}
                        </span>
                      )}
                    </div>

                    {/* Title & Timeline */}
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-bold text-text-primary group-hover:text-accent-primary transition-colors duration-200">
                          {project.title}
                        </h3>
                        {project.featured && (
                          <span title="Featured Project" className="text-amber-400">
                            <Star size={14} className="fill-amber-400" />
                          </span>
                        )}
                      </div>
                      {project.period && (
                        <p className="text-xs text-text-muted mt-0.5 font-mono">
                          {project.period}
                        </p>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                      {project.description}
                    </p>

                    {/* Key features bullets */}
                    <ul className="space-y-1.5 pt-1">
                      {project.features.slice(0, 3).map((f) => (
                        <li key={f} className="text-xs text-text-muted flex items-start gap-2 leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent-primary shrink-0 mt-1.5" aria-hidden="true" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4 pt-3 border-t border-border/80">
                    {/* Tech stack badges */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-mono px-2 py-0.5 rounded bg-surface-2 border border-border text-text-muted"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="flex items-center gap-2.5 pt-1">
                      {isLive && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-accent-primary text-black hover:bg-sky-400 transition-colors shadow-sm"
                          aria-label={`Visit live site for ${project.title} (opens in new tab)`}
                        >
                          <span>Live Site</span>
                          <ExternalLink size={12} />
                        </a>
                      )}

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg border border-border text-text-secondary hover:text-text-primary hover:border-accent-primary transition-colors"
                          aria-label={`GitHub repository for ${project.title} (opens in new tab)`}
                        >
                          <GithubIcon size={13} />
                          <span>Code</span>
                        </a>
                      )}

                      {!isLive && (
                        <span className="text-[11px] text-text-muted ml-auto font-mono">
                          Architecture Project
                        </span>
                      )}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-text-muted py-16">No projects match this technology filter.</p>
        )}
      </div>
    </AnimatedSection>
  );
}
