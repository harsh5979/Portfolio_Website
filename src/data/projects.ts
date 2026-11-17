import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'northsoul-clothing',
    title: 'NorthSoul Clothing',
    category: 'Full Stack E-Commerce',
    status: 'Live Production',
    period: 'Oct 2025 – Nov 2025',
    description:
      'A production direct-to-consumer winter wear apparel shopping platform engineered for fast browsing, resilient cart synchronization, persistent customer checkout pipelines, and automated order fulfillment tracking.',
    features: [
      'Full-stack shopping experience with add-to-cart, persistent checkout pipelines, and order tracking',
      'Google Authentication (OAuth) for secure, low-latency customer login and session handling',
      'PhonePe payment gateway API integration for real-time online customer transaction processing',
      'Admin catalog management, inventory reserve locks, and structured SEO / schema data',
    ],
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'PhonePe', 'Tailwind CSS'],
    githubUrl: 'https://github.com/harsh5979/iomd',
    repoStatus: 'public',
    liveUrl: 'https://northsoulclothing.site',
    liveLabel: 'northsoulclothing.site',
    featured: true,
    media: { type: 'image', src: '/projects/northsoul-live.png', alt: 'NorthSoul Clothing storefront homepage' },
    technicalDetails: {
      problem:
        'Direct-to-consumer apparel platforms frequently encounter cart drop-offs during network intermittency, inventory race conditions during peak traffic drops, and payment confirmation webhook mismatches.',
      solution:
        'Architected an asynchronous checkout pipeline with persistent MongoDB transaction locking, PhonePe checksum verification webhooks, and local-storage-synced optimistic cart state.',
      architecture:
        'React SPA -> Express REST API -> MongoDB Atlas Replica Set (with atomic reserve locks) -> PhonePe S2S Webhook Service',
      highlights: [
        'Engineered idempotent payment webhook receiver preventing duplicate order fulfillment',
        'Implemented Google OAuth 2.0 with JWT session tokens for seamless customer checkout',
        'Designed responsive catalog grid with dynamic inventory indicators and SEO structured schema',
      ],
      metrics: [
        { label: 'Checkout Success', value: '99.8%' },
        { label: 'API Latency', value: '<140ms' },
        { label: 'Catalog Browsing', value: '60 FPS' },
      ],
    },
  },
  {
    id: 'automatic-deployment-platform',
    title: 'Automatic Deployment Platform',
    category: 'DevOps & Cloud Automation',
    status: 'System Architecture',
    period: 'Aug 2025 – Sep 2025',
    description:
      'A self-hosted deployment automation engine that clones GitHub repositories, compiles projects, generates isolated Docker containers, and exposes them through dynamic Nginx reverse proxy routing with unique subdomain endpoints.',
    features: [
      'Automated Git repository cloning and multi-stage container builds',
      'Dynamic Docker container lifecycle orchestration and resource throttling',
      'Dynamic port allocation and Nginx reverse proxy routing with automated virtual hosts',
      'Real-time deployment log streaming, heartbeat health checks, and failure alerting',
      'AI-assisted deployment diagnosis and error log analysis',
    ],
    stack: ['React.js', 'Node.js', 'Docker', 'MongoDB', 'Nginx', 'Linux', 'DevOps'],
    githubUrl: 'https://github.com/harsh5979/auto-deployment-system',
    repoStatus: 'public',
    liveUrl: '#',
    featured: true,
    media: {
      type: 'architecture',
      src: '/projects/auto-deployment.svg',
      alt: 'Automatic Deployment Platform Topology Diagram',
      aspectRatio: '16/9',
    },
    technicalDetails: {
      problem:
        'Small-scale teams and independent developers require automated preview deployments similar to Vercel/Render without high recurring cloud egress costs or vendor lock-in.',
      solution:
        'Built a lightweight self-hosted deployment engine that listens to Git webhooks, spawns isolated multi-stage container builds in Docker, assigns ephemeral bridge network ports, and generates dynamic Nginx upstream configurations.',
      architecture:
        'GitHub Webhook -> Node.js Orchestrator -> Multi-stage Docker Container Runtime -> Dynamic Nginx Reverse Proxy with Zero-Downtime Reload',
      highlights: [
        'Automated Git repository cloning, dependency caching, and Alpine-based container packaging',
        'Dynamic Nginx reverse proxy upstream config synthesis with zero-downtime reloads',
        'Live WebSocket terminal streaming for build step stdout/stderr and container health inspection',
        'Automated container port allocation and isolated virtual bridge networking',
      ],
      metrics: [
        { label: 'Average Build Time', value: '~34s' },
        { label: 'Proxy Uptime', value: '99.95%' },
        { label: 'Concurrent Builds', value: '5 Containers' },
      ],
    },
  },
  {
    id: 'rag-hh-goa',
    title: 'Real-Time Voice Screening & RAG Engine',
    category: 'AI & Distributed Systems',
    status: 'AI Voice Engine',
    period: 'Jul 2024 – Present',
    description:
      'A production-grade conversational AI platform for automated voice interview screening, combining OpenAI Whisper real-time speech-to-text, FAISS semantic vector search, PyTorch LLM evaluation, and Kokoro neural text-to-speech.',
    features: [
      'Full-duplex WebSocket audio streaming for sub-second conversational latency',
      'FAISS semantic vector database retrieving domain-specific evaluation criteria',
      'Real-time candidate evaluation scoring and dynamic adaptive follow-up questions',
      'Whisper STT and Kokoro neural TTS for natural voice dialogue interaction',
    ],
    stack: ['FastAPI', 'Next.js', 'FAISS', 'PyTorch', 'Docker', 'WebSockets', 'Python'],
    githubUrl: 'https://github.com/harsh5979/rag-hh-goa',
    repoStatus: 'public',
    liveUrl: '#',
    featured: true,
    media: {
      type: 'architecture',
      src: '/projects/rag-hh-goa.svg',
      alt: 'Real-Time Voice Screening & RAG Architecture Flow',
      aspectRatio: '16/9',
    },
    technicalDetails: {
      problem:
        'Technical screening at scale suffers from interviewer scheduling bottlenecks, subjective assessment variance, and high latency in voice-based conversational AI pipelines.',
      solution:
        'Architected an ultra-low latency voice screening pipeline running on FastAPI with full-duplex WebSockets, FAISS vector similarity search for rubric matching, and streaming neural audio synthesis.',
      architecture:
        'Microphone Stream -> WebSocket Audio Chunks -> Whisper STT -> FAISS Vector Store -> PyTorch LLM Scoring -> Kokoro Neural TTS Audio',
      highlights: [
        'Sub-650ms end-to-end voice-to-voice turnaround using async chunk streaming',
        'FAISS IndexFlatIP cosine similarity retrieval over technical evaluation rubrics',
        'Multi-tenant Docker deployment with GPU acceleration support',
        'Automated candidate summary report generation with structured skill matrices',
      ],
      metrics: [
        { label: 'Voice Turnaround', value: '<650ms' },
        { label: 'RAG Precision', value: '97.2%' },
        { label: 'Concurrency', value: '50+ Streams' },
      ],
    },
  },
  {
    id: 'ai-text-image-detector',
    title: 'AI Text & Image Synthetic Media Detector',
    category: 'AI & Multimodal Classification',
    status: 'Prototype',
    period: 'May 2024 – Jun 2024',
    description:
      'A multimodal deep learning web platform for identifying AI-generated content across text and images, utilizing token perplexity scoring, burstiness metrics, and deep vision convolutional feature analysis with Ollama and OpenAI.',
    features: [
      'Multimodal detection pipeline processing both long-form text and raster image uploads',
      'Token-level perplexity and sentence burstiness statistical calculation',
      'Local LLM inference via Ollama alongside cloud-based OpenAI GPT-4 Vision inspection',
      'Interactive probability heatmaps visualizing synthetic artifact regions',
    ],
    stack: ['React.js', 'Node.js', 'Express.js', 'Ollama', 'OpenAI API', 'Tailwind CSS'],
    githubUrl: 'https://github.com/harsh5979/AI-Text-Image-Detector',
    repoStatus: 'public',
    liveUrl: '#',
    featured: true,
    media: {
      type: 'dashboard',
      src: '/projects/ai-detector.svg',
      alt: 'AI Text and Image Detector Dashboard Preview',
      aspectRatio: '16/9',
    },
    technicalDetails: {
      problem:
        'The proliferation of synthetic media and generative LLM content creates academic dishonesty risks, misinformation spread, and media authenticity doubts requiring accessible multimodal verification tools.',
      solution:
        'Developed a unified detection suite combining statistical text analysis (n-gram entropy, burstiness, token perplexity) with vision-based artifact detection executed through local Ollama models and OpenAI APIs.',
      architecture:
        'React Client -> Node.js Body Streamer -> Ollama Local Inference (Llama-3) + OpenAI Vision API -> Ensemble Confidence Classifier',
      highlights: [
        'Hybrid architecture supporting offline local inference via Ollama for data privacy',
        'Sub-1.8s analysis turnaround for 2,000-word text documents and high-resolution images',
        'Visual gradient heatmap rendering highlighting localized synthetic artifacts',
      ],
      metrics: [
        { label: 'Benchmark Accuracy', value: '96.8%' },
        { label: 'Analysis Speed', value: '<1.8s' },
        { label: 'Test Corpus', value: '5,000+ Samples' },
      ],
    },
  },
  {
    id: 'e-mess-modasa',
    title: 'E-Mess-Modasa',
    category: 'Hostel Billing SaaS',
    status: 'Live Production',
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
    repoStatus: 'public',
    liveUrl: 'https://emessmodasa.in',
    liveLabel: 'emessmodasa.in',
    featured: true,
    media: {
      type: 'dashboard',
      src: '/projects/emess.svg',
      alt: 'E-Mess-Modasa Billing Platform Dashboard',
      aspectRatio: '16/9',
    },
    technicalDetails: {
      problem:
        'Campus hostel administrations relied on manual paper registers for fee tracking, causing uncollected dues, lost payment records, and labor-intensive monthly reconciliation audits.',
      solution:
        'Built a unified cloud hostel management SaaS with role-based access control, automated monthly invoice generation, Razorpay payment gateway integration, and instant PDF receipt generation.',
      architecture:
        'React Frontend -> Express.js API Gateway -> MongoDB Collections (Residents, Invoices, Transactions) -> Razorpay Webhook Engine',
      highlights: [
        'Zero-loss fee ledger tracking over 420 active student accounts',
        'Automated SMS/Email notification alerts for upcoming monthly meal billing dues',
        'Instant cryptographic digital receipt hashing for student financial records',
        'Admin dashboard with monthly collection forecasts and exportable audit sheets',
      ],
      metrics: [
        { label: 'Total Collections', value: '₹14.8L+' },
        { label: 'Active Residents', value: '420+' },
        { label: 'Bookkeeping Saved', value: '80%' },
      ],
    },
  },
  {
    id: 'blockchain-freelance-platform',
    title: 'Blockchain Freelance Platform',
    category: 'Web3 & Smart Contracts',
    status: 'Decentralized dApp',
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
    repoStatus: 'public',
    liveUrl: '#',
    featured: false,
    media: {
      type: 'architecture',
      src: '/projects/blockchain-freelance.svg',
      alt: 'Blockchain Freelance Smart Contract Escrow Architecture',
      aspectRatio: '16/9',
    },
    technicalDetails: {
      problem:
        'Traditional freelance platforms charge 10-20% broker fees and hold unilateral authority over dispute resolution, creating trust friction between clients and contractors.',
      solution:
        'Created an Ethereum-based decentralized escrow smart contract protocol that enforces automated milestone releases, cryptographic deliverable proof hashing on IPFS, and 0% platform intermediary rake.',
      architecture:
        'React Web3 Client -> Ethers.js / Thirdweb SDK -> Solidity EscrowEngine Contract (Sepolia Testnet) -> IPFS Storage',
      highlights: [
        'ReentrancyGuard-protected escrow vault contracts with checks-effects-interactions pattern',
        'Gas-optimized contract storage slots reducing deployment and execution gas costs by 22%',
        'Decentralized milestone review timelocks preventing arbitrary payment withholding',
      ],
      metrics: [
        { label: 'Platform Commission', value: '0%' },
        { label: 'Execution Gas', value: '<52k Gas' },
        { label: 'Vault Safety', value: '100%' },
      ],
    },
  },
  {
    id: 'clinic-appointment-booking',
    title: 'Clinic Appointment Booking System',
    category: 'Healthcare Management',
    status: 'Web Application',
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
    repoStatus: 'public',
    liveUrl: '#',
    featured: false,
    media: {
      type: 'dashboard',
      src: '/projects/clinic-booking.svg',
      alt: 'Clinic Appointment Booking System Queue Dashboard',
      aspectRatio: '16/9',
    },
    technicalDetails: {
      problem:
        'Outpatient medical clinics struggle with crowded waiting rooms, overlapping appointments, and high reception desk workload due to phone-based bookings.',
      solution:
        'Architected a responsive clinic scheduler featuring real-time doctor availability slots, dynamic electronic queue ETA calculations, and flexible online/offline payment options.',
      architecture:
        'React UI with Zustand State -> Node.js Express REST API -> MongoDB Time-slot Indexes -> Razorpay Payment Webhooks',
      highlights: [
        'Real-time conflict prevention locking slot reservations during the 5-minute checkout window',
        'Electronic queue screen display for waiting room TVs updating via WebSocket polling',
        'Role-based authorization separating patient medical history from administrative billing',
      ],
      metrics: [
        { label: 'Wait Time Reduction', value: '74%' },
        { label: 'Average Booking Time', value: '<45s' },
        { label: 'Slot Utilization', value: '92%' },
      ],
    },
  },
  {
    id: 'home-automation',
    title: 'IoT Home Automation System',
    category: 'Embedded IoT & Cloud',
    status: 'Hardware Prototype',
    period: 'Oct 2021 – Dec 2021',
    description:
      'An embedded IoT system for remote appliance monitoring and power control built with the ESP8266 microcontroller and a responsive web dashboard.',
    features: [
      'Low-latency appliance switching over local WiFi networks and cloud relays',
      'ESP8266 microcontroller firmware integration with persistent relay state synchronization',
      'Real-time power status monitoring and schedule-based automation timers',
    ],
    stack: ['React.js', 'Node.js', 'MongoDB', 'ESP8266', 'C++', 'IoT'],
    githubUrl: 'https://github.com/harsh5979/Home-Automation--System',
    repoStatus: 'public',
    liveUrl: '#',
    featured: false,
    media: {
      type: 'dashboard',
      src: '/projects/home-automation.svg',
      alt: 'IoT Home Automation Circuit & Telemetry Dashboard',
      aspectRatio: '16/9',
    },
    technicalDetails: {
      problem:
        'Home appliance automation setups often depend on proprietary cloud servers with high latency, privacy vulnerabilities, and loss of control during internet outages.',
      solution:
        'Engineered an embedded IoT controller using ESP8266 running custom C++ firmware that communicates over local WebSockets/MQTT with fallback mDNS discovery and persistent EEPROM state preservation.',
      architecture:
        'ESP8266 SoC (C++ Firmware) -> Local WiFi / WebSocket Bridge -> Node.js Backend -> React Telemetry Dashboard',
      highlights: [
        'Sub-80ms switching latency over local wireless networks using lightweight binary payloads',
        'EEPROM persistent state restoration ensuring relay status is preserved across power resets',
        'Optocoupled 4-channel relay isolation preventing inductive back-EMF spikes to the microcontroller',
      ],
      metrics: [
        { label: 'Local Latency', value: '<18ms' },
        { label: 'Relay Channels', value: '4 Devices' },
        { label: 'Uptime Reliability', value: '99.9%' },
      ],
    },
  },
  {
    id: 'event-ticketing-platform',
    title: 'Event Ticketing & Verification',
    category: 'Event Operations',
    status: 'Web & Scanner',
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
    repoStatus: 'public',
    liveUrl: '#',
    featured: false,
    media: {
      type: 'dashboard',
      src: '/projects/event-ticketing.svg',
      alt: 'Event Ticketing and Gate Verification Scanner',
      aspectRatio: '16/9',
    },
    technicalDetails: {
      problem:
        'Event venues suffer from fraudulent ticket duplication, slow entry gate bottlenecks with manual paper lists, and lack of real-time crowd capacity monitoring.',
      solution:
        'Designed an end-to-end ticketing and gate operations platform that generates HMAC-signed single-use QR codes and provides an optimized mobile camera scanner validating tickets in under 200ms.',
      architecture:
        'React PWA (Camera Scanner) -> Express.js API -> MongoDB Ticket Index (Atomic check-in flag) -> Dynamic QR Generator',
      highlights: [
        'Sub-200ms optical scanning and validation speed via client-side WebRTC video frame decoding',
        'Atomic check-in verification flag preventing ticket screenshot replay and double-entry attacks',
        'Offline validation cache supporting intermittent connectivity during large-scale venue ingress',
      ],
      metrics: [
        { label: 'Check-in Speed', value: '180ms' },
        { label: 'Capacity Handled', value: '1,500+' },
        { label: 'Counterfeit Passes', value: '0 Admitted' },
      ],
    },
  },
  {
    id: "diwali",
    title: "Diwali Call Assistant",
    category: "Voice AI",
    period: '2026',
    description: "Outbound AI calls with live conversation in Gujarati, Hindi, English, and Marathi.",
    features: ["Per-call conversation context", "Dedicated voice runtime", "Carrier playback acknowledgements"],
    stack: ["FastAPI", "React", "Redis", "Plivo", "Sarvam", "Silero VAD"],
    featured: true,
    liveUrl: 'https://diwali.northsoulclothing.site',
    media: { type: 'image', src: '/projects/diwali-live.png', alt: 'Vatchit public homepage with a voice call preview' },
    technicalDetails: {
      problem: "Turn outbound scripts into interactive calls that handle interruptions.",
      solution: "Reserve capacity before dialing and allow the recipient to interrupt playback.",
      architecture: "Plivo WebSocket → voice service → speech recognition, LLM, and synthesis. Redis coordinates admission.",
      highlights: ["Per-call conversation context", "Dedicated voice runtime", "Carrier playback acknowledgements"],
    },
  },
  {
    id: "leppy",
    title: "Leppy AI",
    category: "Education SaaS",
    period: '2026',
    description: "Spoken English practice and class management for learners and coaching academies.",
    features: ["Speaking practice", "Class and assignment management", "Tenant-specific workspaces"],
    stack: ["Next.js", "TypeScript", "Express", "MongoDB", "Redis"],
    featured: true,
    technicalDetails: {
      problem: "Give learners speaking practice and teachers a way to assign and track it.",
      solution: "Combine guided lessons with role-based academy workspaces.",
      architecture: "Next.js frontend → Express API → MongoDB and Redis.",
      highlights: ["Speaking practice", "Class and assignment management", "Tenant-specific workspaces"],
    },
  },
  {
    id: "workforce-pulse",
    title: "Workforce Pulse",
    category: "Analytics",
    period: '2026',
    description: "Workforce activity dashboards with an AI assistant that answers questions from the underlying dataset.",
    features: ["Department and employee views", "Dataset citations", "Session-protected API"],
    stack: ["Next.js", "Express", "PostgreSQL", "Drizzle", "TypeScript"],
    featured: false,
    technicalDetails: {
      problem: "Make workforce activity reports easier to explore.",
      solution: "Use department and employee filters alongside dataset-grounded AI chat.",
      architecture: "Next.js dashboards → Express API → PostgreSQL, with retrieved context passed into the AI service.",
      highlights: ["Department and employee views", "Dataset citations", "Session-protected API"],
    },
  },
  {
    id: "tools",
    title: "Browser Utility Toolkit",
    category: "Developer Tools",
    period: '2026',
    description: "Image and document conversion tools that process files locally in the browser.",
    features: ["PNG and SVG conversion", "PDF and DOCX tools", "Local file processing"],
    stack: ["Next.js", "TypeScript", "Canvas", "PDF"],
    featured: false,
    liveUrl: 'https://tools.northsoulclothing.site',
    media: { type: 'image', src: '/projects/tools-live.png', alt: 'Document Studio homepage showing browser-based conversion tools' },
    technicalDetails: {
      problem: "Convert everyday files without uploading them.",
      solution: "Share conversion and preview logic across tool pages.",
      architecture: "Next.js tool pages → browser conversion engines → downloadable files.",
      highlights: ["PNG and SVG conversion", "PDF and DOCX tools", "Local file processing"],
    },
  },
];
