import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedSection } from '../components/AnimatedSection';
import { SectionTitle } from '../components/SectionTitle';
import { skillCategories } from '../data/skills';
import {
  Code,
  Layout,
  Server,
  Database,
  Cloud,
  Cpu,
  Layers,
  Terminal,
  Sparkles,
} from 'lucide-react';

const CATEGORY_META: Record<
  string,
  { icon: typeof Code; description: string; domain: string }
> = {
  Languages: {
    icon: Code,
    description: 'Typed programming and scripting runtimes for application logic, systems, and algorithms.',
    domain: 'Core Programming',
  },
  'Frontend & UI': {
    icon: Layout,
    description: 'Modern component-driven web architectures, state management, and fluid UI interactions.',
    domain: 'Client Architecture',
  },
  'Backend & APIs': {
    icon: Server,
    description: 'Resilient REST & WebSocket servers, authentication systems, and microservices.',
    domain: 'Server & Services',
  },
  Databases: {
    icon: Database,
    description: 'Relational and document data stores with indexing, replication, and data modeling.',
    domain: 'Data Layer',
  },
  'DevOps & Cloud': {
    icon: Cloud,
    description: 'Containerized deployment pipelines, reverse proxying, Linux administration, and cloud hosting.',
    domain: 'Infrastructure & CI/CD',
  },
  'AI, Payments & IoT': {
    icon: Cpu,
    description: 'Production payment gateway integrations, conversational AI / RAG pipelines, and embedded hardware.',
    domain: 'Integrations & Systems',
  },
};

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...skillCategories.map((c) => c.category)];

  const totalSkillCount = skillCategories.reduce(
    (acc, cat) => acc + cat.skills.length,
    0
  );

  const displayedCategories =
    selectedCategory === 'All'
      ? skillCategories
      : skillCategories.filter((c) => c.category === selectedCategory);

  return (
    <AnimatedSection id="skills" className="py-24 md:py-32 scroll-mt-24 bg-surface/30">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionTitle
            label="Skills"
            title="Technical toolkit"
            subtitle="Technologies I use day-to-day, and some I'm actively exploring."
            className="mb-0 md:mb-0"
          />

          {/* Stack summary pill */}
          <div className="inline-flex items-center gap-2 self-start md:self-end px-3.5 py-1.5 rounded-full bg-surface border border-border text-xs font-mono text-text-secondary shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
            <span className="text-text-primary font-semibold">{totalSkillCount} Skills</span>
            <span className="text-text-muted">· Production-Ready</span>
          </div>
        </div>

        {/* HUD Category Navigation Tabs */}
        <div
          role="tablist"
          aria-label="Skill categories"
          className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none"
        >
          {categories.map((category) => {
            const isSelected = selectedCategory === category;
            const meta = category !== 'All' ? CATEGORY_META[category] : null;
            const Icon = meta ? meta.icon : Layers;

            return (
              <button
                key={category}
                role="tab"
                aria-selected={isSelected}
                aria-controls="skills-grid"
                onClick={() => setSelectedCategory(category)}
                className={`relative px-4 py-2 rounded-lg text-xs font-medium font-mono whitespace-nowrap transition-colors duration-200 flex items-center gap-2 border ${
                  isSelected
                    ? 'border-accent-primary text-text-primary bg-accent-primary/10 shadow-sm shadow-sky-500/10'
                    : 'border-border bg-surface text-text-secondary hover:text-text-primary hover:border-accent-primary/40'
                }`}
              >
                <Icon size={14} className={isSelected ? 'text-accent-primary' : 'text-text-muted'} />
                <span>{category}</span>
                {isSelected && (
                  <motion.div
                    layoutId="activeSkillTabGlider"
                    className="absolute inset-0 rounded-lg border-2 border-accent-primary pointer-events-none"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Focused Category Meta Banner (when not 'All') */}
        {selectedCategory !== 'All' && CATEGORY_META[selectedCategory] && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="mb-8 p-4 rounded-xl bg-surface border border-border flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center text-accent-primary shrink-0">
                <Terminal size={16} />
              </div>
              <div>
                <div className="font-semibold text-text-primary">
                  {selectedCategory}
                </div>
                <div className="text-text-secondary">
                  {CATEGORY_META[selectedCategory].description}
                </div>
              </div>
            </div>
            <div className="font-mono text-accent-primary bg-surface-2 px-3 py-1.5 rounded-lg border border-border shrink-0 text-[11px]">
              {CATEGORY_META[selectedCategory].domain}
            </div>
          </motion.div>
        )}

        {/* Skill Clusters Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            role="tabpanel"
            id="skills-grid"
            aria-label={`${selectedCategory} skills`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className={`grid gap-6 ${
              selectedCategory === 'All'
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
            }`}
          >
            {selectedCategory === 'All'
              ? // 'All' View: Rich Category Cards
                displayedCategories.map((cat, ci) => {
                  const meta = CATEGORY_META[cat.category];
                  const Icon = meta ? meta.icon : Code;
                  return (
                    <motion.div
                      key={cat.category}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: ci * 0.05 }}
                      className="bg-surface border border-border rounded-xl p-5 hover:border-accent-primary/60 hover:shadow-lg hover:shadow-sky-500/5 transition-all duration-300 flex flex-col justify-between card-highlight group"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2.5">
                            <div className="w-7 h-7 rounded-lg bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center text-accent-primary">
                              <Icon size={14} />
                            </div>
                            <h3 className="text-xs font-mono font-semibold tracking-wide uppercase text-text-primary">
                              {cat.category}
                            </h3>
                          </div>
                          <span className="text-[11px] font-mono text-text-muted bg-surface-2 px-2 py-0.5 rounded border border-border">
                            {cat.skills.length}
                          </span>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {cat.skills.map((skill) => (
                            <motion.span
                              key={skill.name}
                              whileHover={{ y: -2, scale: 1.04 }}
                              transition={{ duration: 0.15 }}
                              className="inline-block text-xs font-mono font-medium px-2.5 py-1 rounded-md bg-surface border border-border text-text-secondary hover:border-accent-primary hover:text-accent-primary cursor-default transition-colors duration-150 card-highlight shadow-sm"
                            >
                              {skill.name}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      {meta && (
                        <div className="pt-3 border-t border-border/50 text-[11px] text-text-muted flex items-center gap-1.5">
                          <Sparkles size={11} className="text-accent-primary shrink-0" />
                          <span className="truncate">{meta.description}</span>
                        </div>
                      )}
                    </motion.div>
                  );
                })
              : // Single Category Detailed Skill Cards
                displayedCategories[0]?.skills.map((skill, si) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2, delay: si * 0.03 }}
                    whileHover={{ y: -3, scale: 1.02 }}
                    className="bg-surface border border-border rounded-xl p-4 hover:border-accent-primary hover:shadow-md hover:shadow-sky-500/5 transition-all duration-200 group flex items-center justify-between card-highlight"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-surface border border-border group-hover:border-accent-primary/50 flex items-center justify-center text-accent-primary font-mono text-xs font-bold transition-colors">
                        &gt;_
                      </div>
                      <div>
                        <div className="text-xs font-mono font-semibold text-text-primary group-hover:text-accent-primary transition-colors">
                          {skill.name}
                        </div>
                        <div className="text-[10px] font-mono text-text-muted">
                          {selectedCategory}
                        </div>
                      </div>
                    </div>
                    <span className="w-2 h-2 rounded-full bg-emerald-400/80 group-hover:scale-125 transition-transform" />
                  </motion.div>
                ))}
          </motion.div>
        </AnimatePresence>

        {/* Developer Philosophy Footer */}
        <div className="mt-12 p-4 rounded-xl bg-surface/50 border border-border flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-text-muted">
          <div className="flex items-center gap-2">
            <span className="text-emerald-400">●</span>
            <span>Pragmatic technology stack refined across production web applications and distributed systems.</span>
          </div>
          <div className="text-accent-primary">
            Continuous Learning &amp; Clean Architecture
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
