interface SectionTitleProps {
  label: string;
  title: string;
  subtitle?: string;
  number?: string;
  align?: 'left' | 'center';
  className?: string;
}

const DEFAULT_SECTION_NUMBERS: Record<string, string> = {
  about: '01',
  skills: '02',
  'featured work': '03',
  projects: '03',
  experience: '04',
  background: '05',
  education: '05',
  infrastructure: '06',
  devops: '06',
  contact: '07',
};

export function SectionTitle({
  label,
  title,
  subtitle,
  number,
  align = 'left',
  className = '',
}: SectionTitleProps) {
  const rawNumber =
    number ||
    DEFAULT_SECTION_NUMBERS[label.trim().toLowerCase()] ||
    '';

  const formattedNumber = rawNumber
    ? rawNumber.startsWith('//')
      ? rawNumber
      : `// ${rawNumber.replace(/^\./, '').replace(/\.$/, '')}.`
    : '';

  const isCenter = align === 'center';

  return (
    <div
      className={`mb-12 md:mb-16 ${isCenter ? 'text-center mx-auto' : ''} ${className}`}
    >
      <div
        className={`inline-flex items-center gap-2.5 mb-3 px-3 py-1 rounded-full bg-surface-2/80 border border-border/80 backdrop-blur-sm card-highlight shadow-sm ${
          isCenter ? 'justify-center mx-auto' : ''
        }`}
      >
        {formattedNumber && (
          <span className="font-mono text-xs font-semibold tracking-wider text-accent-primary">
            {formattedNumber}
          </span>
        )}
        <span className="text-xs font-semibold tracking-widest uppercase text-text-secondary">
          {label}
        </span>
      </div>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-text-secondary text-base sm:text-lg max-w-2xl leading-relaxed ${
            isCenter ? 'mx-auto' : ''
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
