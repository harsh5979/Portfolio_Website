import { AnimatedSection } from '../components/AnimatedSection';
import { SectionTitle } from '../components/SectionTitle';
import { Code2, Server, Cloud, Cpu } from 'lucide-react';

const specializations = [
  {
    icon: Code2,
    title: 'Full Stack Development',
    desc: 'React + Node.js end-to-end. I care about the whole picture — not just making things work, but making them work well.',
  },
  {
    icon: Server,
    title: 'Backend Systems',
    desc: 'REST APIs, authentication, database design, and writing server-side code that scales without surprises.',
  },
  {
    icon: Cloud,
    title: 'DevOps & Cloud',
    desc: 'Containers, CI/CD pipelines, AWS, Nginx. I enjoy the infrastructure side as much as the application code.',
  },
  {
    icon: Cpu,
    title: 'Emerging Tech',
    desc: 'Exploring LLM integration, RAG systems, Web3, and IoT — where the interesting problems tend to be.',
  },
];

export function About() {
  return (
    <AnimatedSection id="about" className="py-24 md:py-32 max-w-6xl mx-auto px-4 md:px-8">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* Left: text */}
        <div>
          <SectionTitle
            label="About"
            title="A bit about me"
          />
          <div className="space-y-4 text-text-secondary text-base leading-relaxed">
            <p>
              I'm a final-year Computer Engineering student at GEC Modasa, and I've been building
              things on the web since my first year. What started as curiosity about how websites
              work has turned into a focus on building systems that hold up under real conditions.
            </p>
            <p>
              My work sits at the intersection of product and infrastructure. I'll build the React
              UI, wire up the Node.js API, design the database schema, and then package everything
              in Docker and push it to a cloud server. I find the whole stack interesting.
            </p>
            <p>
              Lately I've been spending time with LLM integration and RAG pipelines — the overlap
              between AI tooling and practical software engineering is an area I want to go deeper in.
            </p>
            <p className="text-text-muted text-sm">
              Based in Ahmedabad, Gujarat, India.
            </p>
          </div>
        </div>

        {/* Right: specializations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {specializations.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-surface border border-border rounded-xl p-5 hover:border-accent-primary transition-colors duration-300 group"
            >
              <Icon
                size={20}
                className="text-accent-primary mb-3 group-hover:scale-110 transition-transform duration-200"
                aria-hidden="true"
              />
              <h3 className="text-sm font-semibold text-text-primary mb-2">{title}</h3>
              <p className="text-xs text-text-secondary leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
