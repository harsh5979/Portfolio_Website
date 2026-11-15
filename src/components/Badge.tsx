interface BadgeProps {
  label: string;
  variant?: 'default' | 'purple' | 'blue';
}

export function Badge({ label, variant = 'default' }: BadgeProps) {
  const variants = {
    default: 'bg-surface-2 text-text-secondary border border-border hover:border-accent-purple hover:text-accent-purple',
    purple: 'bg-accent-purple-dim text-accent-purple border border-accent-purple border-opacity-30',
    blue: 'bg-accent-blue-dim text-accent-blue border border-accent-blue border-opacity-30',
  };

  return (
    <span
      className={`inline-block text-xs font-medium px-2.5 py-1 rounded-md transition-colors duration-150 ${variants[variant]}`}
    >
      {label}
    </span>
  );
}
