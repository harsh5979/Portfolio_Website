import { GithubIcon, LinkedinIcon } from '../components/BrandIcons';
import { personalInfo } from '../data/personal';

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer
      className="border-t border-border py-8"
      role="contentinfo"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="text-sm font-bold text-text-primary">
            harsh<span className="text-accent-primary">.</span>dev
          </span>
          <span className="text-text-muted text-xs">·</span>
          <span className="text-text-muted text-xs">
            © {CURRENT_YEAR} {personalInfo.name}. All rights reserved.
          </span>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-text-muted bg-surface px-3 py-1 rounded-full border border-border card-highlight shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
          <span>All systems operational</span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-text-primary transition-colors duration-200"
            aria-label="GitHub (opens in new tab)"
          >
            <GithubIcon size={16} />
          </a>
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-text-primary transition-colors duration-200"
            aria-label="LinkedIn (opens in new tab)"
          >
            <LinkedinIcon size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
