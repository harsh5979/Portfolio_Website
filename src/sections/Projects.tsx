import { AnimatedSection } from '../components/AnimatedSection';

import { useState } from 'react';
import { ArrowRight, Blocks, Code2, ExternalLink, HousePlug, ScanLine, Search, Stethoscope, TicketCheck, Workflow } from 'lucide-react';
import { GithubIcon } from '../components/BrandIcons';
import { projectPath, projectSource, visibleProjects } from '../project-pages';

const projectIcons = {
  'automatic-deployment-platform': Workflow,
  'ai-text-image-detector': ScanLine,
  'blockchain-freelance-platform': Blocks,
  'clinic-appointment-booking': Stethoscope,
  'home-automation': HousePlug,
  'event-ticketing-platform': TicketCheck,
};

function projectIcon(id: string) {
  return projectIcons[id as keyof typeof projectIcons] ?? Code2;
}

export function Projects() {
  const [query, setQuery] = useState('');
  const [featuredOnly, setFeaturedOnly] = useState(false);
  const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  const filtered = [...visibleProjects].sort((a, b) => Number(b.media?.type === 'image') - Number(a.media?.type === 'image') || Number(b.featured) - Number(a.featured)).filter((project) => {
    const searchable = [project.title, project.category, project.description, ...project.stack].join(' ').toLowerCase();
    return (!featuredOnly || project.featured) && terms.every((term) => searchable.includes(term));
  });

  return (
    <AnimatedSection id="projects" className="border-t border-border py-10 md:py-14 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <header className="mb-6">
          <h2 className="portfolio-display text-4xl text-text-primary md:text-5xl">Projects</h2>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-text-secondary">
            Product demos and case studies from my web, voice AI, and deployment work.
          </p>
        </header>

        <div className="mb-6 flex flex-wrap items-end gap-3 border-b border-border pb-4">
          <label className="flex min-w-0 flex-1 basis-60 flex-col gap-2 text-sm text-text-secondary">
            Search projects
            <span className="relative">
              <Search size={16} aria-hidden="true" className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
              <input type="search" value={query} onChange={(event) => setQuery(event.target.value)}
                placeholder="Try voice AI, Next.js, or analytics"
                className="min-h-11 w-full rounded-lg border border-border bg-surface py-2 pl-9 pr-3 text-text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-primary" />
            </span>
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
          {filtered.map((project) => {
            const Icon = projectIcon(project.id);
            const source = projectSource(project);
            return (
              <article key={project.id} className="portfolio-project-card relative isolate min-w-0 border-b border-border pb-6">
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
                  <span className="grid size-9 shrink-0 place-items-center rounded-md border border-border bg-surface text-accent-primary">
                    {project.icon ? <img src={project.icon} alt="" width={24} height={24} loading="lazy" className="size-6 object-contain" /> : <Icon size={18} aria-hidden="true" />}
                  </span>
                  <a href={projectPath(project)}
                    aria-label={`Open case study for ${project.title}`}
                    className="text-left hover:text-accent-primary after:absolute after:inset-0 after:cursor-pointer focus-visible:after:ring-2 focus-visible:after:ring-accent-primary">
                    {project.title}
                  </a>
                </h3>
                <p className="mt-2 max-w-prose text-sm leading-relaxed text-text-secondary">{project.description}</p>
                <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
                  {project.stack.slice(0, 4).map((tech) => (
                    <li key={tech} className="rounded bg-surface-2 px-2 py-1 text-xs text-text-secondary">{tech}</li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
                  <span className="inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-accent-primary">View case study <ArrowRight size={15} aria-hidden="true" /></span>
                  {project.liveUrl && project.liveUrl !== '#' && (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" className="relative z-10 inline-flex min-h-11 items-center gap-1 text-sm font-medium underline-offset-4 hover:underline">
                      Live site <ExternalLink size={13} aria-hidden="true" />
                    </a>
                  )}
                  {source && (
                    <a href={source} target="_blank" rel="noreferrer" className="relative z-10 inline-flex min-h-11 items-center gap-1 text-sm font-medium underline-offset-4 hover:underline">
                      <GithubIcon size={14} /> Source
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-text-muted py-16">
            No projects match. Try a different search or clear Featured only.
          </p>
        )}
      </div>
    </AnimatedSection>
  );
}
