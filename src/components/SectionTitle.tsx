interface SectionTitleProps {
  label: string;
  title: string;
  subtitle?: string;
}

export function SectionTitle({ label, title, subtitle }: SectionTitleProps) {
  return (
    <div className="mb-12 md:mb-16">
      <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent-purple mb-3">
        {label}
      </span>
      <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">{title}</h2>
      {subtitle && (
        <p className="text-text-secondary text-base md:text-lg max-w-2xl">{subtitle}</p>
      )}
    </div>
  );
}
