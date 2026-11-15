import type { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    category: 'Languages',
    skills: [
      { name: 'JavaScript' },
      { name: 'TypeScript' },
      { name: 'Python' },
      { name: 'Java' },
      { name: 'C++' },
      { name: 'C / C#' },
      { name: 'SQL' },
    ],
  },
  {
    category: 'Frontend & UI',
    skills: [
      { name: 'React.js' },
      { name: 'Next.js' },
      { name: 'Tailwind CSS' },
      { name: 'Framer Motion' },
      { name: 'GSAP' },
      { name: 'HTML5 & CSS3' },
      { name: 'Bootstrap' },
    ],
  },
  {
    category: 'Backend & APIs',
    skills: [
      { name: 'Node.js' },
      { name: 'Express.js' },
      { name: 'Fastify' },
      { name: 'Flask' },
      { name: 'REST APIs' },
      { name: 'JWT Auth & OAuth' },
      { name: 'Payload CMS' },
      { name: 'MedusaJS' },
    ],
  },
  {
    category: 'Databases',
    skills: [
      { name: 'MongoDB' },
      { name: 'Mongoose' },
      { name: 'PostgreSQL' },
      { name: 'MySQL' },
    ],
  },
  {
    category: 'DevOps & Cloud',
    skills: [
      { name: 'Docker & Compose' },
      { name: 'Kubernetes' },
      { name: 'AWS (EC2, S3)' },
      { name: 'Google Cloud (GCP)' },
      { name: 'Linux & Ubuntu Server' },
      { name: 'Nginx Reverse Proxy' },
      { name: 'GitHub Actions (CI/CD)' },
      { name: 'Coolify & PM2' },
      { name: 'SSL & Certbot' },
    ],
  },
  {
    category: 'AI, Payments & IoT',
    skills: [
      { name: 'LLM Integration' },
      { name: 'RAG Architectures' },
      { name: 'Razorpay & PhonePe' },
      { name: 'Web3 & Hardhat' },
      { name: 'IoT (ESP8266, Raspberry Pi)' },
      { name: 'OpenCV & YOLO' },
      { name: 'Postman & Git/GitHub' },
    ],
  },
];
