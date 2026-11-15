import type { Education, CertificationLeadership } from '../types';

export const educationList: Education[] = [
  {
    degree: 'B.Tech in Computer Engineering',
    institution: 'Government Engineering College, Modasa',
    university: 'Gujarat Technological University (GTU)',
    location: 'Modasa, Gujarat',
    period: 'July 2022 – May 2026',
    cgpa: '7.30 / 10.0',
  },
  {
    degree: 'Higher Secondary Education (Science)',
    institution: 'R.C. Patel Higher Secondary School',
    location: 'Gandhinagar, Gujarat',
    period: 'March 2021 – March 2022',
    cgpa: '6.9 / 10.0',
  },
];

export const certificationsLeadership: CertificationLeadership[] = [
  {
    title: 'Google Developer Student Club (GDSC)',
    role: 'Core Member',
    period: 'May 2024 – Oct 2024',
    description:
      'Developed responsive web interfaces utilizing HTML, CSS, JavaScript, and Bootstrap, and conducted technical workshops for fellow engineering peers.',
  },
  {
    title: 'State-Level Hackathon',
    role: 'Participant & Finalist',
    description:
      'Recognized for exceptional problem-solving speed and creative application delivery under strict technical constraints.',
  },
  {
    title: 'Lakshya Techfest',
    role: 'Certified Competitor',
    description:
      'Awarded formal certification for successfully clearing the competitive IT Quiz event demonstrating comprehensive computer science fundamentals.',
  },
];
