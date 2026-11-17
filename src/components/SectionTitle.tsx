interface SectionTitleProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionTitle({
  title,
  subtitle,
  align = 'left',
  className = '',
}: SectionTitleProps) {
  const centered = align === 'center';

  return (
    <div className={`mb-8 md:mb-10 ${centered ? 'text-center' : ''} ${className}`}>
      <h2 className="portfolio-display text-4xl leading-none text-text-primary md:text-5xl">{title}</h2>
      {subtitle && (
        <p className={`mt-3 max-w-2xl leading-relaxed text-text-secondary ${centered ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
