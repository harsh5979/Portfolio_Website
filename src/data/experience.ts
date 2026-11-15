import type { ExperienceItem } from '../types';

export const experiences: ExperienceItem[] = [
  {
    id: 'haira-ai',
    role: 'Software Developer',
    company: 'The Special Character (haira.ai)',
    companyUrl: 'https://haira.ai',
    location: 'Ahmedabad, Gujarat',
    period: 'Jun 2025 – Present',
    type: 'Full-time',
    description:
      'Engineered core modules for haira.ai, an AI-powered interview and recruitment platform automating candidate evaluation workflows from job creation to shortlisting.',
    highlights: [
      'Built AI resume ranking and multi-section scoring pipelines evaluating applicants against job requirements with evidence-based reasoning.',
      'Implemented AI phone screening and browser-based AI video interview systems featuring real-time voice interaction, transcript analysis, and assessment reports.',
      'Engineered recruiter dashboards, candidate comparison tools, and embeddable career page widgets with secure multi-tenant data isolation.',
      'Optimized low-latency audio processing pipelines with connection pooling, speech-to-text fallbacks, and VAD cutoff controls.',
    ],
    technologies: ['Node.js', 'Next.js', 'TypeScript', 'Python', 'LLM / RAG', 'WebRTC', 'MongoDB', 'Docker'],
  },
  {
    id: 'e-mess-modasa',
    role: 'Product Developer & Maintainer',
    company: 'E-Mess-Modasa',
    companyUrl: 'https://emessmodasa.in',
    location: 'Modasa, Gujarat',
    period: 'Sep 2024 – Present',
    type: 'Product Development',
    description:
      'Architected and deployed a production hostel mess billing and resident management platform serving campus students and staff.',
    highlights: [
      'Developed a secure full-stack hostel billing platform using React.js, JavaScript, Node.js, Tailwind CSS, and MongoDB.',
      'Integrated Razorpay payment gateway facilitating secure, instant online fee collection transactions for residents.',
      'Built an admin analytics dashboard to generate granular reports for tracking monthly dues, paid histories, and financial metrics, reducing administrative effort by 80%.',
    ],
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Razorpay', 'Nginx'],
  },
];
