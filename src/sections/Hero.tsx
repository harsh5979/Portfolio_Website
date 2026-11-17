import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Download, MapPin } from 'lucide-react';
import { personalInfo } from '../data/personal';
import { visibleProjects, projectPath } from '../project-pages';

const selectedIds = ['northsoul-clothing', 'diwali', 'workforce-pulse'];
const selectedProjects = visibleProjects.filter(({ id }) => selectedIds.includes(id));

export function Hero() {
  const reduceMotion = useReducedMotion();
  const driftX = useMotionValue(0);
  const driftY = useMotionValue(0);
  const x = useSpring(driftX, { stiffness: 95, damping: 18 });
  const y = useSpring(driftY, { stiffness: 95, damping: 18 });

  return (
    <div className="hero-field relative isolate overflow-hidden"
      onPointerMove={(event) => {
        if (reduceMotion || event.pointerType !== 'mouse') return;
        const bounds = event.currentTarget.getBoundingClientRect();
        driftX.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 100);
        driftY.set(((event.clientY - bounds.top) / bounds.height - 0.5) * 64);
      }}
      onPointerLeave={() => { driftX.set(0); driftY.set(0); }}>
      <motion.div className="hero-field-contours" aria-hidden="true" style={reduceMotion ? undefined : { x, y }} />
      <section id="hero" aria-label="Introduction" className="mx-auto grid max-w-6xl gap-10 px-5 pb-12 pt-28 md:grid-cols-[1.15fr_1fr] md:items-center md:px-8 md:pb-16 md:pt-32">
        <div>
          <p className="mb-4 flex items-center gap-2 text-sm font-medium text-text-muted"><MapPin size={16} aria-hidden="true" />{personalInfo.location}</p>
          <h1 className="portfolio-display text-5xl leading-[.98] sm:text-7xl">Harsh Prajapati</h1>
          <p className="mt-6 text-xl font-medium text-text-secondary">Full-stack developer</p>

          <p className="mt-4 max-w-md text-base leading-relaxed text-text-secondary">
            I build web apps, voice agents, and the systems that get them into production.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-5">
            <a href="#projects" className="inline-flex min-h-11 items-center gap-2 rounded-md bg-accent-primary px-4 text-sm font-semibold text-white hover:bg-accent-primary-hover">
              Explore my work <ArrowDown size={16} aria-hidden="true" />
            </a>
            <a href="/resume.pdf" className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-text-primary"><Download size={16} aria-hidden="true" /> Résumé</a>
          </div>
        </div>
        <aside aria-label="Selected projects" className="rounded-xl border border-border bg-surface/90 px-5 py-4 shadow-sm">
          <p className="mb-2 text-sm font-semibold text-text-secondary">Selected projects</p>
          <ul className="divide-y divide-border">
            {selectedProjects.map((project) => (
              <li key={project.id}>
                <a href={projectPath(project)} className="group flex min-h-14 items-center gap-3 py-2 hover:text-accent-primary">
                  {project.icon && <img src={project.icon} alt="" width={28} height={28} className="size-7 rounded object-contain" />}
                  <span className="flex-1"><span className="block text-sm font-semibold">{project.title}</span><span className="block text-xs text-text-muted">{project.category}</span></span>
                  <ArrowUpRight size={16} className="text-accent-primary" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </aside>
      </section>
    </div>
  );
}
