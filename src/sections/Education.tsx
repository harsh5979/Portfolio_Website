import { AnimatedSection } from '../components/AnimatedSection';
import { SectionTitle } from '../components/SectionTitle';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';
import { educationList, certificationsLeadership } from '../data/education';

export function Education() {
  return (
    <AnimatedSection id="education" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <SectionTitle
          label="Background"
          title="Education & Leadership"
          subtitle="Academic credentials, hackathons, and developer community contributions."
        />

        <div className="grid md:grid-cols-2 gap-10">
          {/* Education */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-text-primary flex items-center gap-2 mb-4">
              <GraduationCap className="text-accent-purple" size={20} />
              Formal Education
            </h3>

            {educationList.map((edu, idx) => (
              <div
                key={idx}
                className="bg-surface border border-border rounded-xl p-6 hover:border-accent-purple/50 transition-colors"
              >
                <div className="flex items-center justify-between gap-2 flex-wrap mb-1">
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-accent-purple/10 text-accent-purple border border-accent-purple/20">
                    CGPA: {edu.cgpa}
                  </span>
                  <span className="text-xs text-text-muted flex items-center gap-1">
                    <Calendar size={12} />
                    {edu.period}
                  </span>
                </div>

                <h4 className="text-base font-bold text-text-primary mt-2">
                  {edu.degree}
                </h4>
                <p className="text-sm font-medium text-text-secondary mt-1">
                  {edu.institution}
                </p>
                {edu.university && (
                  <p className="text-xs text-text-muted mt-0.5">{edu.university}</p>
                )}
                {edu.location && (
                  <p className="text-xs text-text-muted flex items-center gap-1 mt-2">
                    <MapPin size={12} />
                    {edu.location}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Leadership & Activities */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-text-primary flex items-center gap-2 mb-4">
              <Award className="text-accent-blue" size={20} />
              Leadership & Honors
            </h3>

            {certificationsLeadership.map((item, idx) => (
              <div
                key={idx}
                className="bg-surface border border-border rounded-xl p-6 hover:border-accent-blue/50 transition-colors"
              >
                <div className="flex items-center justify-between gap-2 flex-wrap mb-1">
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-accent-blue/10 text-accent-blue border border-accent-blue/20">
                    {item.role}
                  </span>
                  {item.period && (
                    <span className="text-xs text-text-muted flex items-center gap-1">
                      <Calendar size={12} />
                      {item.period}
                    </span>
                  )}
                </div>

                <h4 className="text-base font-bold text-text-primary mt-2">
                  {item.title}
                </h4>
                <p className="text-xs text-text-secondary leading-relaxed mt-2">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
