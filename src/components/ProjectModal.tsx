import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Cpu, CheckCircle2, AlertCircle, BarChart3, Lock, ShieldCheck } from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import type { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Body scroll lock with clean cleanup
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  // Focus close button on open & trap tab navigation
  useEffect(() => {
    if (!isOpen) return;

    const opener = document.activeElement;
    // Small delay to ensure DOM element is mounted and ready for focus
    const timer = setTimeout(() => {
      closeBtnRef.current?.focus();
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key === 'Tab' && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('keydown', handleKeyDown);
      if (opener instanceof HTMLElement && opener.isConnected) opener.focus();
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  const isLive = Boolean(project.liveUrl && project.liveUrl !== '#');
  const isPublicRepo = project.repoStatus === 'public' && Boolean(project.githubUrl);
  const isPrivateRepo = project.repoStatus === 'private';
  const details = project.technicalDetails;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Dialog Container */}
          <motion.div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-surface border border-border/80 rounded-2xl shadow-2xl z-10 flex flex-col my-auto card-highlight"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 z-20 flex items-start justify-between p-5 sm:p-6 bg-surface/95 backdrop-blur border-b border-border/70">
              <div className="space-y-1.5 pr-4">
                <div className="flex items-center gap-2 flex-wrap">
                  {project.category && (
                    <span className="text-[11px] font-mono uppercase px-2 py-0.5 rounded bg-surface-2 border border-border text-text-muted">
                      {project.category}
                    </span>
                  )}
                  {project.status && (
                    <span
                      className={`inline-flex items-center gap-1.5 text-[11px] font-mono px-2 py-0.5 rounded-full ${
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
                  {isPrivateRepo && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      <Lock size={10} />
                      <span>Private Client Code</span>
                    </span>
                  )}
                  {isPublicRepo && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded bg-sky-500/10 text-sky-400 border border-sky-500/20">
                      <ShieldCheck size={10} />
                      <span>Verified Open Source</span>
                    </span>
                  )}
                </div>

                <h2
                  id="project-modal-title"
                  className="text-xl sm:text-2xl font-bold text-text-primary tracking-tight"
                >
                  {project.title}
                </h2>
                {project.period && (
                  <p className="text-xs text-text-muted font-mono">{project.period}</p>
                )}
              </div>

              {/* Close Button */}
              <button
                ref={closeBtnRef}
                onClick={onClose}
                aria-label="Close dialog"
                className="p-2 rounded-lg text-text-muted hover:text-text-primary hover:bg-surface-2 border border-transparent hover:border-border transition-colors cursor-pointer shrink-0"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-5 sm:p-6 space-y-6">
              {/* Media Preview Container (16:9 aspect-video) */}
              {project.media && (
                <div className="relative w-full aspect-video overflow-hidden rounded-xl bg-surface-2 border border-border/80 shadow-inner group">
                  <img
                    src={project.media.src}
                    alt={project.media.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                    onError={(e) => {
                      // Fallback visual container if SVG fails
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent && !parent.querySelector('.fallback-container')) {
                        const fallback = document.createElement('div');
                        fallback.className =
                          'fallback-container w-full h-full flex flex-col items-center justify-center bg-surface-2 text-text-muted p-6 text-center';
                        fallback.innerHTML = `<span class="font-mono text-xs text-accent-primary">[Architecture Diagram: ${project.title}]</span><p class="text-xs text-text-muted mt-2">Visual topology render</p>`;
                        parent.appendChild(fallback);
                      }
                    }}
                  />
                  <div className="absolute bottom-2 right-2 bg-surface/90 backdrop-blur px-2.5 py-1 rounded-md text-[10px] font-mono text-text-muted border border-border/80 shadow-sm">
                    {project.media.type === 'dashboard' ? 'Interactive UI' : 'System Architecture'}
                  </div>
                </div>
              )}

              {/* Overview Description */}
              <div className="text-sm text-text-secondary leading-relaxed bg-surface-2/40 p-4 rounded-xl border border-border/50">
                {project.description}
              </div>

              {/* Problem Statement */}
              {details?.problem && (
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-rose-400">
                    <AlertCircle size={14} />
                    <span>01. The Engineering Problem</span>
                  </div>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed pl-6 border-l-2 border-rose-500/30">
                    {details.problem}
                  </p>
                </div>
              )}

              {/* Engineering Solution */}
              {details?.solution && (
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-emerald-400">
                    <CheckCircle2 size={14} />
                    <span>02. Architecture &amp; Solution</span>
                  </div>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed pl-6 border-l-2 border-emerald-500/30">
                    {details.solution}
                  </p>
                </div>
              )}

              {/* System Architecture Topology Flow */}
              {details?.architecture && (
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-sky-400">
                    <Cpu size={14} />
                    <span>03. Data &amp; Runtime Topology</span>
                  </div>
                  <div className="bg-[#090d16] p-4 rounded-xl border border-sky-500/20 font-mono text-xs text-sky-300/90 overflow-x-auto">
                    <code>{details.architecture}</code>
                  </div>
                </div>
              )}

              {/* Key Highlights List */}
              {details?.highlights && details.highlights.length > 0 && (
                <div className="space-y-2.5">
                  <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-text-muted">
                    Key Engineering Highlights
                  </h4>
                  <ul className="space-y-2">
                    {details.highlights.map((h, i) => (
                      <li
                        key={i}
                        className="text-xs sm:text-sm text-text-secondary flex items-start gap-2.5 leading-relaxed"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-primary shrink-0 mt-1.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Quantitative Metrics Grid */}
              {details?.metrics && details.metrics.length > 0 && (
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-text-muted">
                    <BarChart3 size={14} />
                    <span>Key Quantitative Benchmarks</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {details.metrics.map((m, idx) => (
                      <div
                        key={idx}
                        className="bg-surface-2/60 border border-border/80 p-3.5 rounded-xl flex flex-col justify-between"
                      >
                        <span className="text-[11px] font-mono text-text-muted uppercase tracking-wide">
                          {m.label}
                        </span>
                        <span className="text-lg sm:text-xl font-bold font-mono text-accent-primary mt-1">
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technologies Used */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-mono text-text-muted block">Technology Stack</span>
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-surface-2 border border-border text-text-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer / Actions */}
            <div className="sticky bottom-0 z-20 flex items-center justify-between gap-3 p-5 sm:p-6 bg-surface/95 backdrop-blur border-t border-border/70 flex-wrap">
              <div className="flex items-center gap-2.5 flex-wrap">
                {isLive && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-lg bg-accent-primary text-black hover:bg-sky-400 transition-colors shadow-sm"
                    aria-label={`Visit live demo for ${project.title} (opens in new tab)`}
                  >
                    <span>Live Demo</span>
                    <ExternalLink size={13} />
                  </a>
                )}

                {isPublicRepo && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium px-4 py-2 rounded-lg border border-border text-text-secondary hover:text-text-primary hover:border-accent-primary transition-colors"
                    aria-label={`View GitHub source code for ${project.title} (opens in new tab)`}
                  >
                    <GithubIcon size={14} />
                    <span>View Source</span>
                  </a>
                )}

                {isPrivateRepo && (
                  <span className="text-xs text-text-muted font-mono inline-flex items-center gap-1.5 bg-surface-2 px-3 py-1.5 rounded-lg border border-border">
                    <Lock size={12} className="text-amber-400" />
                    <span>Private Client Repository</span>
                  </span>
                )}
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Dismiss dialog"
                className="text-xs font-medium px-4 py-2 rounded-lg border border-border text-text-muted hover:text-text-primary hover:border-border/80 transition-colors cursor-pointer ml-auto"
              >
                Dismiss
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
