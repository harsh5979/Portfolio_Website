import { motion } from 'framer-motion';
import { AnimatedSection } from '../components/AnimatedSection';
import { SectionTitle } from '../components/SectionTitle';
import { skillCategories } from '../data/skills';

export function Skills() {
  return (
    <AnimatedSection
      id="skills"
      className="py-24 md:py-32 bg-surface/30"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <SectionTitle
          label="Skills"
          title="Technical toolkit"
          subtitle="Technologies I use day-to-day, and some I'm actively exploring."
        />

        <div className="space-y-10">
          {skillCategories.map((cat, ci) => (
            <div key={cat.category}>
              <h3 className="text-xs font-semibold tracking-widest uppercase text-text-muted mb-4">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, si) => (
                  <motion.span
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: ci * 0.05 + si * 0.03 }}
                    whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
                    className="inline-block text-sm font-medium px-3 py-1.5 rounded-lg bg-surface border border-border text-text-secondary hover:border-accent-purple hover:text-accent-purple cursor-default transition-colors duration-150"
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
