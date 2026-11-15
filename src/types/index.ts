export interface Project {
  id: string;
  title: string;
  period: string;
  description: string;
  features: string[];
  stack: string[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  icon?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  type: 'Full-time' | 'Product Development' | 'Internship' | 'Contract';
  description: string;
  highlights: string[];
  technologies: string[];
}

export interface Education {
  degree: string;
  institution: string;
  university?: string;
  location?: string;
  period: string;
  cgpa: string;
}

export interface CertificationLeadership {
  title: string;
  role: string;
  period?: string;
  description: string;
}

export interface NavLink {
  label: string;
  href: string;
}
