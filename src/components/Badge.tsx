interface BadgeProps {
  label: string;
  variant?: 'default' | 'primary' | 'secondary' | 'purple' | 'blue';
}

export function Badge({ label, variant = 'default' }: BadgeProps) {
  const variants = {
    default: 'bg-surface-2 text-text-secondary border border-border hover:border-accent-primary hover:text-accent-primary',
    primary: 'bg-accent-primary-dim text-accent-primary border border-accent-primary/30',
    secondary: 'bg-accent-secondary-dim text-accent-secondary border border-accent-secondary/30',
    purple: 'bg-accent-primary-dim text-accent-primary border border-accent-primary/30',
    blue: 'bg-accent-secondary-dim text-accent-secondary border border-accent-secondary/30',
  };

  return (
    <span
      className={`inline-block text-xs font-medium px-2.5 py-1 rounded-md transition-colors duration-150 ${variants[variant]}`}
    >
      {label}
    </span>
  );
}
