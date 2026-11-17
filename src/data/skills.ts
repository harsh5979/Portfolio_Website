import type { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    category: 'Languages',
    skills: [
      { name: 'JavaScript', icon: '/tech-icons/javascript.svg' },
      { name: 'TypeScript', icon: '/tech-icons/typescript.svg' },
      { name: 'Python', icon: '/tech-icons/python.svg' },
      { name: 'Java' },
      { name: 'C++', icon: '/tech-icons/cplusplus.svg' },
      { name: 'C / C#' },
      { name: 'SQL' },
    ],
  },
  {
    category: 'Frontend & UI',
    skills: [
      { name: 'React.js', icon: '/tech-icons/react.svg' },
      { name: 'Next.js', icon: '/tech-icons/nextdotjs.svg' },
      { name: 'Tailwind CSS', icon: '/tech-icons/tailwindcss.svg' },
      { name: 'Framer Motion' },
      { name: 'GSAP', icon: '/tech-icons/gsap.svg' },
      { name: 'HTML5 & CSS3' },
      { name: 'Bootstrap', icon: '/tech-icons/bootstrap.svg' },
    ],
  },
  {
    category: 'Backend & APIs',
    skills: [
      { name: 'Node.js', icon: '/tech-icons/nodedotjs.svg' },
      { name: 'Express.js', icon: '/tech-icons/express.svg' },
      { name: 'Fastify', icon: '/tech-icons/fastify.svg' },
      { name: 'Flask', icon: '/tech-icons/flask.svg' },
      { name: 'REST APIs' },
      { name: 'JWT Auth & OAuth' },
      { name: 'Payload CMS', icon: '/tech-icons/payloadcms.svg' },
      { name: 'MedusaJS', icon: '/tech-icons/medusa.svg' },
    ],
  },
  {
    category: 'Databases',
    skills: [
      { name: 'MongoDB', icon: '/tech-icons/mongodb.svg' },
      { name: 'Mongoose', icon: '/tech-icons/mongoose.svg' },
      { name: 'PostgreSQL', icon: '/tech-icons/postgresql.svg' },
      { name: 'MySQL', icon: '/tech-icons/mysql.svg' },
    ],
  },
  {
    category: 'DevOps & Cloud',
    skills: [
      { name: 'Docker & Compose', icon: '/tech-icons/docker.svg' },
      { name: 'Kubernetes', icon: '/tech-icons/kubernetes.svg' },
      { name: 'AWS (EC2, S3)' },
      { name: 'Google Cloud (GCP)', icon: '/tech-icons/googlecloud.svg' },
      { name: 'Linux & Ubuntu Server', icon: '/tech-icons/ubuntu.svg' },
      { name: 'Nginx Reverse Proxy', icon: '/tech-icons/nginx.svg' },
      { name: 'GitHub Actions (CI/CD)', icon: '/tech-icons/githubactions.svg' },
      { name: 'Coolify & PM2', icon: '/tech-icons/coolify.svg' },
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
