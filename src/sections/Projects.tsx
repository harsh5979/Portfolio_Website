import { useCallback, useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from '../components/BrandIcons';
import { SectionTitle } from '../components/SectionTitle';
import { ProjectModal } from '../components/ProjectModal';
import { projects } from '../data/projects';
import type { Project } from '../types';

const visibleProjects = projects.filter((project) => project.availability !== 'offline');

export function Projects() {
  const [query, setQuery] = useState('');
  const [featuredOnly, setFeaturedOnly] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const closeCaseStudy = useCallback(() => setSelectedProject(null), []);
  const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  const filtered = [...visibleProjects].sort((a, b) => Number(b.media?.type === 'image') - Number(a.media?.type === 'image') || Number(b.featured) - Number(a.featured)).filter((project) => {
    const searchable = [project.title, project.category, project.description, ...project.stack].join(' ').toLowerCase();
    return (!featuredOnly || project.featured) && terms.every((term) => searchable.includes(term));
  });

  return (
    <section id="projects" className="border-t border-border py-14 md:py-20 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <SectionTitle
          label="Portfolio"
          title="Engineering Projects"
          subtitle="Explore what I built, the problems each project solves, and how the systems fit together."
        />

        <div className="mb-8 flex flex-wrap items-end gap-4 border-b border-border pb-5">
          <label className="flex min-w-0 flex-1 basis-60 flex-col gap-2 text-sm text-text-secondary">
            Search projects
            <input type="search" value={query} onChange={(event) => setQuery(event.target.value)}
              placeholder="Try voice AI, Next.js, or analytics"
              className="min-h-11 rounded-lg border border-border bg-surface px-3 text-text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-primary" />
          </label>
          <label className="flex min-h-11 items-center gap-2 text-sm text-text-secondary">
            <input type="checkbox" checked={featuredOnly} onChange={(event) => setFeaturedOnly(event.target.checked)}
              className="accent-accent-primary" />
            Featured only
          </label>
          <p role="status" className="flex min-h-11 items-center text-sm text-text-muted">
            {filtered.length} of {visibleProjects.length} projects
          </p>
        </div>

        <div className="grid gap-x-8 gap-y-10 md:grid-cols-2">
          {filtered.map((project) => (
            <article key={project.id} className="relative isolate min-w-0 border-b border-border pb-6">
              {project.media && (
                <figure className="mb-4">
                  <div className="project-preview overflow-hidden rounded-md border border-border">
                    <img src={project.media.src} alt={project.media.alt} loading="lazy" decoding="async" />
                  </div>
                  <figcaption className="mt-2 text-xs text-text-muted">
                    {project.media.type === 'image' ? 'Live website screenshot' : 'Project illustration'}
                  </figcaption>
                </figure>
              )}
              <p className="text-sm text-text-muted">{project.category}</p>
              <h3 className="portfolio-display mt-1 flex items-center gap-3 text-3xl text-text-primary">
                {project.icon && <img src={project.icon} alt="" width={32} height={32} loading="lazy" className="size-8 shrink-0 object-contain" />}
                <button type="button" onClick={() => setSelectedProject(project)}
                  aria-label={`Open case study for ${project.title}`}
                  className="text-left hover:text-accent-primary after:absolute after:inset-0 after:cursor-pointer focus-visible:after:ring-2 focus-visible:after:ring-accent-primary">
                  {project.title}
                </button>
              </h3>
              <p className="mt-2 max-w-prose text-sm leading-relaxed text-text-secondary">{project.description}</p>
              <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
                {project.stack.slice(0, 4).map((tech) => (
                  <li key={tech} className="rounded bg-surface-2 px-2 py-1 text-xs text-text-secondary">{tech}</li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
                <span className="inline-flex min-h-11 items-center text-sm font-semibold text-accent-primary">View case study</span>
                {project.liveUrl && project.liveUrl !== '#' && (
                  <a href={project.liveUrl} target="_blank" rel="noreferrer" className="relative z-10 inline-flex min-h-11 items-center gap-1 text-sm font-medium underline-offset-4 hover:underline">
                    Live site <ExternalLink size={13} aria-hidden="true" />
                  </a>
                )}
                {project.repoStatus === 'public' && project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" className="relative z-10 inline-flex min-h-11 items-center gap-1 text-sm font-medium underline-offset-4 hover:underline">
                    <GithubIcon size={14} /> Source
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-text-muted py-16">
            No projects match. Try a different search or clear Featured only.
          </p>
        )}
      </div>

      {/* Technical Deep-Dive Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={selectedProject !== null}
        onClose={closeCaseStudy}
      />
    </section>
  );
}
