import { projects } from './data/projects.ts';
import type { Project } from './types/index.ts';

const site = 'https://harshprajapati.dev';
export const visibleProjects = projects.filter(({ availability }) => availability !== 'offline');
export const projectPath = (project: Project) => `/projects/${encodeURIComponent(project.id)}/`;

function escape(value: string) {
  return value.replace(/[&<>"']/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[character] ?? character);
}

export function projectPage(project: Project, stylesheet: string) {
  const title = escape(project.title);
  const description = escape(project.description);
  const canonical = escape(site + projectPath(project));
  const details = project.technicalDetails;
  const image = escape(site + (project.media?.src || '/og-image.png'));
  const list = (items: string[]) => items.map((item) => `<li>${escape(item)}</li>`).join('');
  const section = (heading: string, content: string) => `
    <section class="border-t border-border pt-5">
      <h2 class="portfolio-display text-3xl">${heading}</h2>
      <p class="mt-2 leading-relaxed text-text-secondary">${escape(content)}</p>
    </section>`;
  const live = project.liveUrl && project.liveUrl !== '#' ? project.liveUrl : '';
  const source = project.repoStatus === 'public' && project.githubUrl && new URL(project.githubUrl).pathname.split('/').filter(Boolean).length > 1 ? project.githubUrl : '';

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${title} | Harsh Prajapati</title>
  <meta name="description" content="${description}">
  <link rel="canonical" href="${canonical}">
  <link rel="icon" href="/favicon.svg" type="image/svg+xml">
  <meta property="og:type" content="article">
  <meta property="og:title" content="${title} | Harsh Prajapati">
  <meta property="og:description" content="${description}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="${image}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${title} | Harsh Prajapati">
  <meta name="twitter:description" content="${description}">
  <meta name="twitter:image" content="${image}">
  <link rel="stylesheet" href="${escape(stylesheet)}">
</head>
<body>
  <header class="border-b border-border">
    <nav aria-label="Portfolio" class="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-5 py-5 text-sm">
      <a href="/" class="font-bold">Harsh Prajapati</a>
      <a href="/#projects" class="font-semibold text-accent-primary underline underline-offset-4">Back to projects</a>
    </nav>
  </header>
  <main class="mx-auto max-w-6xl px-5 py-8 md:py-12">
    <article class="space-y-8">
      <div class="case-study-intro ${project.media ? 'case-study-intro-with-media' : ''}">
      <header class="max-w-3xl">
        <p class="text-sm text-text-muted">${escape(project.category || 'Engineering project')} · ${escape(project.period)}</p>
        <h1 class="portfolio-display mt-3 text-4xl leading-none lg:text-6xl">${title}</h1>
        <p class="mt-4 text-lg leading-relaxed text-text-secondary">${description}</p>
        ${live || source ? `<div class="mt-5 flex flex-wrap gap-5 text-sm font-semibold text-accent-primary">
          ${live ? `<a class="underline underline-offset-4" href="${escape(live)}">Visit live site</a>` : ''}
          ${source ? `<a class="underline underline-offset-4" href="${escape(source)}">View source code</a>` : ''}
        </div>` : ''}
        <nav aria-label="Case study sections" class="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-sm text-text-secondary">
          ${details ? '<a class="underline underline-offset-4" href="#implementation">Implementation</a>' : ''}
          <a class="underline underline-offset-4" href="#features">Features</a>
          <a class="underline underline-offset-4" href="#stack">Stack</a>
        </nav>
      </header>
      ${project.media ? `<figure>
        <div class="case-study-media overflow-hidden rounded-lg border border-border">
          <img src="${escape(project.media.src)}" alt="${escape(project.media.alt)}" decoding="async">
        </div>
        <figcaption class="mt-2 text-sm text-text-muted">${project.media.type === 'image' ? 'Public website screenshot' : 'Project illustration'}</figcaption>
      </figure>` : ''}
      </div>
      <div id="implementation" class="grid scroll-mt-5 gap-8 md:grid-cols-[2fr_1fr]">
        <div class="space-y-7">
          ${details ? section('The problem', details.problem) + section('What I built', details.solution) + section('How it works', details.architecture) : ''}
          <section id="features" class="scroll-mt-5 border-t border-border pt-5">
            <h2 class="portfolio-display text-3xl">Key features</h2>
            <ul class="mt-3 list-disc space-y-2 pl-5 text-text-secondary">${list(project.features)}</ul>
          </section>
          ${details?.highlights.length ? `<details class="case-study-details border-y border-border py-4">
            <summary class="cursor-pointer font-semibold text-accent-primary">Engineering notes</summary>
            <ul class="mt-3 list-disc space-y-2 pl-5 text-text-secondary">${list(details.highlights)}</ul>
          </details>` : ''}
        </div>
        <aside id="stack" class="border-t border-border pt-5" aria-label="Technology stack">
          <h2 class="portfolio-display text-3xl">Stack</h2>
          <ul class="mt-3 space-y-2 text-text-secondary">${list(project.stack)}</ul>
        </aside>
      </div>
    </article>
  </main>
</body>
</html>`;
}

export function projectSitemap() {
  const urls = ['/', ...visibleProjects.map(projectPath)];
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((path) => `  <url><loc>${site}${path}</loc></url>`).join('\n')}\n</urlset>\n`;
}
