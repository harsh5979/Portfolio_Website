interface BadgeProps {
  label: string;
  variant?: 'default' | 'primary' | 'secondary' | 'emerald' | 'cyan' | 'blue';
  className?: string;
}

export function Badge({ label, variant = 'default', className = '' }: BadgeProps) {
  const variants = {
    default: 'bg-surface-2 text-text-secondary border border-border hover:border-accent-primary hover:text-accent-primary',
    primary: 'bg-accent-primary-dim text-accent-primary border border-accent-primary/30',
    secondary: 'bg-accent-secondary-dim text-accent-secondary border border-accent-secondary/30',
    emerald: 'bg-accent-emerald-dim text-accent-emerald border border-accent-emerald/30',
    cyan: 'bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/30',
    blue: 'bg-accent-blue/10 text-accent-blue border border-accent-blue/30',
  };

  return (
    <span
      className={`inline-block text-xs font-mono font-medium px-2.5 py-1 rounded-md transition-colors duration-150 ${variants[variant]} ${className}`}
    >
      {label}
    </span>
  );
}
