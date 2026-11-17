import { motion, useReducedMotion, type HTMLMotionProps } from 'framer-motion';
import { type ReactNode } from 'react';

interface AnimatedSectionProps extends HTMLMotionProps<'section'> {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedSection({ children, className = '', delay = 0, ...rest }: AnimatedSectionProps) {
  const reducedMotion = useReducedMotion();
  return (
    <motion.section
      initial={reducedMotion ? false : { y: 9 }}
      whileInView={reducedMotion ? undefined : { y: 0 }}
      viewport={{ once: true }}
      transition={{ type: 'spring', stiffness: 165, damping: 25, delay }}
      className={className}
      {...rest}
    >
      {children}
    </motion.section>
  );
}
