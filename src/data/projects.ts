import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'automatic-deployment-platform',
    title: 'Automatic Deployment Platform',
    period: 'Aug 2025 – Sep 2025',
    description:
      'A self-hosted deployment automation engine that clones GitHub repositories, compiles projects, generates isolated Docker containers, and exposes them through dynamic Nginx reverse proxy routing with unique subdomain endpoints.',
    features: [
      'Automated Git repository cloning and multi-stage builds',
      'Dynamic Docker container lifecycle orchestration and resource throttling',
      'Dynamic port allocation and Nginx reverse proxy routing with automated virtual hosts',
      'Real-time deployment log streaming, heartbeat health checks, and failure alerting',
      'AI-assisted deployment diagnosis and error log analysis',
    ],
    stack: ['React.js', 'Node.js', 'Docker', 'MongoDB', 'Nginx', 'Linux'],
    githubUrl: 'https://github.com/harsh5979/AutoDeployment_System',
    liveUrl: '#',
    featured: true,
  },
  {
    id: 'northsoul-clothing',
    title: 'NorthSoul Clothing (E-Commerce Platform)',
    period: 'Oct 2025 – Nov 2025',
    description:
      'A full-stack direct-to-consumer winter wear shopping platform featuring high-performance catalog browsing, persistent customer carts, address management, and zero-drop checkout pipelines.',
    features: [
      'Full-stack shopping experience with add-to-cart, persistent checkout pipelines, and order tracking',
      'Google Authentication (OAuth) for secure, low-latency customer login and session handling',
      'PhonePe payment gateway API integration for real-time online customer transaction processing',
      'Admin catalog management, inventory reserve locks, and structured SEO / schema data',
    ],
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'PhonePe', 'Tailwind CSS'],
    githubUrl: 'https://github.com/harsh5979/iomd',
    liveUrl: 'https://northsoulclothing.site',
    featured: true,
  },
  {
    id: 'e-mess-modasa',
    title: 'E-Mess-Modasa (Hostel Management Platform)',
    period: 'Sep 2024 – Present',
    description:
      'A production hostel billing and student fee management platform developed for campus hostels to eliminate paper records, prevent fee defaults, and automate financial reporting.',
    features: [
      'Secure resident management, room allocation, and monthly billing cycles',
      'Razorpay payment gateway facilitating instant online fee collection with automated digital receipts',
      'Comprehensive admin analytics dashboard tracking monthly dues, collection histories, and financial audits',
      'Reduced administrative bookkeeping effort by over 80%',
    ],
    stack: ['React.js', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Razorpay'],
    githubUrl: 'https://github.com/harsh5979',
    liveUrl: 'https://emessmodasa.in',
    featured: true,
  },
  {
    id: 'blockchain-freelance-platform',
    title: 'Blockchain Freelance Platform',
    period: 'Jan 2024 – Mar 2024',
    description:
      'A decentralized freelance marketplace connecting clients and freelancers directly through verifiable Ethereum smart contracts, eliminating intermediary commissions and payment disputes.',
    features: [
      'Role-based client and freelancer profiles with crypto wallet authentication via MetaMask',
      'Trustless escrow smart contracts for milestone deposits and dispute-free payment releases',
      'On-chain freelancer reputation scoring and portfolio verification',
    ],
    stack: ['React.js', 'Node.js', 'MongoDB', 'Thirdweb', 'Hardhat', 'Solidity'],
    githubUrl: 'https://github.com/harsh5979',
    liveUrl: '#',
    featured: false,
  },
  {
    id: 'clinic-appointment-booking',
    title: 'Clinic Appointment Booking System',
    period: 'Jun 2024 – Jul 2024',
    description:
      'A patient appointment management application streamlining clinical workflow from patient onboarding to slot selection, payment collection, and electronic queue management.',
    features: [
      'Multi-step booking wizard with real-time doctor availability calendars',
      'Patient registration, medical history records, and slot rescheduling',
      'Dual payment support: instant online checkout via Razorpay or on-site counter cash payments',
      'Role-based access control isolating patients, receptionists, and doctors',
    ],
    stack: ['React.js', 'Node.js', 'MongoDB', 'Zustand', 'Razorpay', 'Tailwind CSS'],
    githubUrl: 'https://github.com/harsh5979',
    liveUrl: '#',
    featured: false,
  },
  {
    id: 'home-automation',
    title: 'IoT Home Automation System',
    period: 'Oct 2021 – Dec 2021',
    description:
      'An embedded IoT system for remote appliance monitoring and power control built with the ESP8266 microcontroller and a responsive web dashboard.',
    features: [
      'Low-latency appliance switching over local WiFi networks and cloud relays',
      'ESP8266 microcontroller firmware integration with persistent relay state synchronization',
      'Real-time power status monitoring and schedule-based automation timers',
    ],
    stack: ['React.js', 'Node.js', 'MongoDB', 'ESP8266', 'C++', 'IoT'],
    githubUrl: 'https://github.com/harsh5979',
    liveUrl: '#',
    featured: false,
  },
  {
    id: 'event-ticketing-platform',
    title: 'Event Ticketing & Verification Platform',
    period: 'Feb 2024 – Apr 2024',
    description:
      'An event ticketing platform featuring cryptographic QR code generation and an on-site scanner application for instant attendee gate check-in.',
    features: [
      'Dynamic event creation, tier-based seat booking, and digital pass generation',
      'Encrypted single-use QR codes issued per ticket to prevent counterfeit entry',
      'Camera-based QR code verification scanner with instant check-in validation',
    ],
    stack: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Tailwind CSS'],
    githubUrl: 'https://github.com/harsh5979',
    liveUrl: '#',
    featured: false,
  },
];

export const filterTags = ['All', 'React.js', 'Node.js', 'Docker', 'MongoDB', 'Razorpay', 'DevOps'];
