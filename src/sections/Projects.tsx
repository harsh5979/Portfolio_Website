import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Star, Code2 } from 'lucide-react';
import { GithubIcon } from '../components/BrandIcons';
import { AnimatedSection } from '../components/AnimatedSection';
import { SectionTitle } from '../components/SectionTitle';
import { ProjectModal } from '../components/ProjectModal';
import { projects, filterTags } from '../data/projects';
import type { Project } from '../types';

export function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // DevOps filter bug fix: match both stack array and category string
  const filtered = useMemo(() => {
    if (activeFilter === 'All') return projects;
    const query = activeFilter.toLowerCase();
    return projects.filter(
      (p) =>
        p.stack.some((s) => s.toLowerCase().includes(query)) ||
        (p.category && p.category.toLowerCase().includes(query))
    );
  }, [activeFilter]);

  return (
    <AnimatedSection id="projects" className="py-24 md:py-32 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <SectionTitle
          label="Featured Work"
          title="Key Engineering Projects"
          subtitle="Production platforms, automated deployment engines, and distributed web applications built with modern engineering standards."
        />

        {/* Filter bar with animated sliding indicator */}
        <div
          className="flex flex-wrap gap-2 mb-10"
          role="group"
          aria-label="Filter projects by technology"
        >
          {filterTags.map((tag) => {
            const isActive = activeFilter === tag;
            return (
              <button
                key={tag}
                onClick={() => setActiveFilter(tag)}
                aria-pressed={isActive}
                className={`relative text-xs font-medium px-3.5 py-1.5 rounded-lg border transition-colors duration-150 cursor-pointer ${
                  isActive
                    ? 'border-accent-primary text-accent-primary font-semibold shadow-sm'
                    : 'border-border text-text-muted hover:border-accent-primary hover:text-text-secondary'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeFilterPill"
                    className="absolute inset-0 rounded-lg bg-accent-primary-dim -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tag}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => {
              const isLive = Boolean(project.liveUrl && project.liveUrl !== '#');
              const isPublicRepo = project.repoStatus === 'public' && Boolean(project.githubUrl);

              return (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  className={`bg-surface border rounded-xl overflow-hidden flex flex-col justify-between transition-colors duration-200 hover:border-accent-primary hover:shadow-xl hover:shadow-sky-500/5 group relative h-full card-highlight ${
                    project.featured ? 'border-border/90' : 'border-border/60'
                  }`}
                >
                  {/* Media Preview Header with 16:9 Aspect Ratio */}
                  {project.media && (
                    <div
                      className="relative w-full aspect-video overflow-hidden bg-surface-2 border-b border-border/70 group-hover:border-accent-primary/40 transition-colors cursor-pointer"
                      onClick={() => setSelectedProject(project)}
                    >
                      <img
                        src={project.media.src}
                        alt={project.media.alt}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-surface/50 via-transparent to-transparent pointer-events-none" />

                      {/* Top Overlay Badges */}
                      <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-surface/90 text-text-muted border border-border/80 backdrop-blur-md shadow-sm">
                          {project.liveLabel || `${project.id.replace(/-platform|-system/g, '')}.dev`}
                        </span>

                        {project.status && (
                          <span
                            className={`inline-flex items-center gap-1.5 text-[10px] font-mono px-2.5 py-0.5 rounded-full backdrop-blur-md shadow-sm ${
                              project.status === 'Live Production'
                                ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-500/30'
                                : 'bg-surface/90 text-text-muted border border-border/80'
                            }`}
                          >
                            {project.status === 'Live Production' && (
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
                            )}
                            {project.status}
                          </span>
                        )}
                      </div>
                    </div>
                  )}

                  <div className="p-5 flex flex-col justify-between flex-grow gap-4">
                    <div className="space-y-3">
                      {/* Meta status */}
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[10px] font-mono tracking-wider uppercase px-2 py-0.5 rounded-md bg-accent-primary/10 border border-accent-primary/20 text-accent-primary truncate max-w-[200px]">
                          {project.category || 'Engineering'}
                        </span>
                        {project.period && (
                          <span className="text-[11px] text-text-muted font-mono shrink-0">
                            {project.period}
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <div>
                        <div className="flex items-center gap-2">
                          <h3
                            onClick={() => setSelectedProject(project)}
                            className="text-base sm:text-lg font-bold text-text-primary group-hover:text-accent-primary transition-colors duration-200 cursor-pointer"
                          >
                            {project.title}
                          </h3>
                          {project.featured && (
                            <span title="Featured Project" className="text-amber-400">
                              <Star size={13} className="fill-amber-400" />
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-text-secondary leading-relaxed line-clamp-2">
                        {project.description}
                      </p>

                      {/* Key features highlight */}
                      <ul className="pt-0.5">
                        {project.features.slice(0, 1).map((f) => (
                          <li
                            key={f}
                            className="text-xs text-text-muted flex items-start gap-2 leading-relaxed"
                          >
                            <span
                              className="w-1.5 h-1.5 rounded-full bg-accent-primary shrink-0 mt-1.5"
                              aria-hidden="true"
                            />
                            <span className="line-clamp-2">{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-3 pt-3 border-t border-border/80">
                      {/* Tech stack badges */}
                      <div className="flex flex-wrap items-center gap-1.5 min-h-[30px]">
                        {project.stack.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-surface-2 border border-border text-text-secondary hover:border-accent-primary/40 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.stack.length > 4 && (
                          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-md bg-surface-2/60 border border-border/60 text-text-muted">
                            +{project.stack.length - 4}
                          </span>
                        )}
                      </div>

                      {/* Action buttons */}
                      <div className="flex items-center justify-between gap-1.5 pt-2 border-t border-border/50">
                        {/* Case Study Trigger Button */}
                        <button
                          type="button"
                          onClick={() => setSelectedProject(project)}
                          aria-label={
                            index === 0
                              ? 'Technical Deep-Dive'
                              : `Case study for ${project.title}`
                          }
                          className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1.5 rounded-lg border border-border bg-surface text-text-primary hover:border-accent-primary hover:text-accent-primary hover:shadow-glow-subtle transition-colors cursor-pointer shrink-0 whitespace-nowrap card-highlight shadow-sm"
                        >
                          <Code2 size={13} className="text-accent-primary" />
                          <span>Case Study</span>
                        </button>

                        <div className="flex items-center gap-1.5 shrink-0">
                          {isLive && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1.5 rounded-lg bg-accent-primary text-black hover:bg-sky-400 transition-colors shadow-sm whitespace-nowrap card-highlight"
                              aria-label={`Visit live site for ${project.title} (opens in new tab)`}
                            >
                              <span>Live Site</span>
                              <ExternalLink size={12} />
                            </a>
                          )}

                          {!isLive && (
                            <span className="inline-flex items-center text-[10px] font-mono text-text-muted px-2 py-1 rounded-md border border-border/40 bg-surface-2/40 whitespace-nowrap">
                              Architecture Project
                            </span>
                          )}

                          {isPublicRepo && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-xs font-medium px-2 py-1.5 rounded-lg border border-border bg-surface text-text-secondary hover:text-text-primary hover:border-accent-primary transition-colors whitespace-nowrap card-highlight"
                              aria-label={`GitHub repository for ${project.title} (opens in new tab)`}
                            >
                              <GithubIcon size={13} />
                              <span>Code</span>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-text-muted py-16">
            No projects match this technology filter.
          </p>
        )}
      </div>

      {/* Technical Deep-Dive Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
      />
    </AnimatedSection>
  );
}
