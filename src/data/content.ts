export const profile = {
  name: 'Nebu C Thomas',
  fullName: 'Nebu Chirackal Thomas',
  role: 'Software Developer',
  location: 'Pathanamthitta, Kerala, India',
  email: 'nebucthomas2003@gmail.com',
  whatsapp: '+919207376249',
  whatsappDisplay: '+91 92073 76249',
  github: 'https://github.com/nebucthomas2003',
  linkedin: 'https://www.linkedin.com/in/nebucthomas2003/',
  instagram: 'https://www.instagram.com/nebu.c.thomas?igsi=aXdsMWdpYmhjd3Qw',
  instagramGraphia: 'https://www.instagram.com/nothing.graphia?igsi=NTI2ZHdzZjJ3dHE5', // Graphia — photography & creative
  resumePath: `${import.meta.env.BASE_URL}assets/resume.pdf`,
  photoPath: `${import.meta.env.BASE_URL}assets/photo.jpg`,
};

export const skills = [
  // core languages & web
  'Java', 'Python', 'HTML/CSS', 'React', 'MySQL',
  'AWS', 'Azure', 'Linux', 'JavaScript', 'Node.js',
  // ML / data
  'Machine Learning', 'RAG', 'NLP',
  // tooling
  'Git',
  // infra
  'Cloud', 'Docker', 'Infrastructure',
];

export const identityQuote =
  "I'm a Software Engineer, Web Developer, Cloud practitioner, AI/ML explorer, and Infrastructure builder.";

export const homeHighlights = [
  {
    label: 'currently',
    value: 'Building Folio — an AI document Q&A tool — under my dev brand, Graphia',
  },
  {
    label: 'shipped',
    value: 'sysscope — an open-source Linux system diagnostics CLI, published on GitHub',
  },
  {
    label: 'experience',
    value: 'Freelance developer at Mavano Sports Academy — built and shipped their live website end-to-end',
  },
  {
    label: 'experience',
    value: 'AI Intern at Infosys Springboard — NLP research that led to a co-authored IEEE paper',
  },
  {
    label: 'future',
    value:
      'MSc in Germany (Cloud or AI/ML) · open to Software Engineer, Systems Engineer, and Web Dev roles across India & the EU — remote or onsite',
  },
];

export const education = {
  degree: 'B.E. Computer Science and Engineering',
  institution: 'Mahendra Engineering College, Tamil Nadu',
  detail: 'First Class with Distinction · 8.60 CGPA',
  period: 'Completed March 2025',
  roles: [
    { title: 'Web Development Lead, Coders Club', special: false },
    { title: 'English Club Vice President', special: false },
    { title: 'Red Hat Academy Student Ambassador', special: true },
  ],
};

export const experience = [
  {
    title: 'Founder & Developer',
    org: 'Graphia',
    period: '2026 — present',
    problem:
      "Most personal portfolio projects show a demo, not a real engineering process — so I set out to build something end-to-end, to professional software-company standards, not just a weekend script.",
    solution:
      'Founded Graphia as my personal dev studio and started building Folio: a document summarizer and Q&A tool that answers questions using both an uploaded document and live web search, with a proper SRS, architecture docs, API spec, test plan, and CI/CD from day one.',
    tools: ['Next.js', 'TypeScript', 'Claude API', 'RAG', 'pgvector', 'Supabase', 'Cloudflare R2', 'Tavily', 'Vercel'],
  },
  {
    title: 'Creator & Developer',
    org: 'sysscope',
    period: '2026',
    problem:
      'Wanted a fast way to see what a Linux machine is doing right now — CPU, memory, disk, processes, services — without installing a monitoring agent or daemon.',
    solution:
      'Built sysscope, a zero-dependency Python CLI that reads directly from /proc, /sys, dpkg, and systemctl, and prints either a clean terminal table or JSON for scripting. Designed to never crash on missing data (works on minimal containers and non-systemd hosts) and packaged for Snap with strict confinement.',
    tools: ['Python', 'Rich', 'argparse', 'Snapcraft'],
    link: 'https://github.com/nebucthomas2003/sysscope',
    linkLabel: 'github.com/nebucthomas2003/sysscope',
  },
  {
    title: 'Freelance Developer',
    org: 'Mavano Sports Academy',
    period: 'Jan — Apr 2026',
    duration: '~4 months',
    role:
      'Took full ownership of the academy\'s live sports management website — from architecture and build to deployment and handover, as the sole developer on the project.',
    learned:
      'Owning a real client relationship end-to-end: scoping the build, making architecture calls solo, and shipping something a business actually runs on.',
    problem:
      'The academy needed a live, working website with no existing engineering team or codebase to build from — every decision, from stack to deployment, was mine to make.',
    tools: ['TypeScript', 'Node.js', 'React'],
    link: 'https://mavanosportsacademy.com',
    linkLabel: 'mavanosportsacademy.com',
  },
  {
    title: 'AI Intern',
    org: 'Infosys Springboard',
    period: 'May — Jul 2024',
    duration: '~3 months',
    role:
      'Applied ML/NLP internship focused on text summarization research, using LSTM networks to compare deep-learning approaches against traditional NLP methods.',
    outcome: 'Co-authored an IEEE conference paper based on this work — published at ICSCDS 2025.',
    tools: ['Python', 'NLP', 'Machine Learning', 'LSTM'],
    link: 'https://github.com/nebucthomas2003/Text_Summarization',
    linkLabel: 'github.com/nebucthomas2003/Text_Summarization',
    certificatePath: `${import.meta.env.BASE_URL}assets/infosys-certificate.jpg`,
  },
];

export const roadmapProjects = [
  {
    name: 'Folio by Graphia',
    field: 'AI / Web Development',
    date: '2026 — ongoing',
    link: '',
    linkLabel: '',
    tools: ['Next.js', 'TypeScript', 'Claude API', 'RAG', 'pgvector', 'Supabase', 'Cloudflare R2', 'Tavily', 'Vercel'],
    summary:
      'AI-powered document summarizer and Q&A tool that answers questions using both an uploaded document and live web search — built with a full SRS, architecture docs, API spec, test plan, and CI/CD from day one.',
  },
  {
    name: 'sysscope',
    field: 'Systems / DevOps',
    date: 'Aug 2026',
    link: 'https://github.com/nebucthomas2003/sysscope',
    linkLabel: 'github.com/nebucthomas2003/sysscope',
    tools: ['Python', 'Rich', 'argparse', 'pytest', 'GitHub Actions', 'Snapcraft'],
    summary:
      'Zero-dependency Python CLI for Linux system diagnostics — reports CPU, memory, disk, top processes, package count, and running services as a table or JSON, reading directly from /proc, /sys, dpkg, and systemctl. Published live on the Snap Store, plus pip and Debian (.deb) packages, with a pytest suite and GitHub Actions CI running across Python 3.9–3.12 on every push.',
  },
  {
    name: 'Mavano Sports Academy',
    field: 'Web Development',
    date: 'Apr 2026',
    link: 'https://mavanosportsacademy.com',
    linkLabel: 'mavanosportsacademy.com',
    tools: ['TypeScript', 'Node.js', 'React'],
    summary:
      'Live sports management website built and owned end-to-end for a freelance client — from architecture to deployment and handover.',
  },
  {
    name: 'Salon Management System',
    field: 'Software Development',
    date: 'TBD',
    link: 'https://github.com/nebucthomas2003/Salon-Management-System',
    linkLabel: 'github.com/nebucthomas2003/Salon-Management-System',
    tools: ['Java', 'MySQL'],
    summary: 'Web-based salon management system for appointment booking, billing, and customer management.',
  },
  {
    name: 'Text Summarization',
    field: 'AI / Machine Learning',
    date: 'Aug 2024 — Aug 2025',
    link: 'https://github.com/nebucthomas2003/Text_Summarization',
    linkLabel: 'github.com/nebucthomas2003/Text_Summarization',
    tools: ['Python', 'NLP', 'Machine Learning', 'LSTM'],
    summary:
      'Extended internship research into a standalone system combining extractive and transformer-based abstractive summarization, with automated preprocessing and ROUGE-benchmarked evaluation — later co-authored as an IEEE conference paper (ICSCDS 2025).',
  },
  {
    name: 'Nutritional Meal Planner',
    field: 'Machine Learning',
    date: 'Mar 2024',
    link: 'https://github.com/nebucthomas2003/Nutritional_Meal_Planer-ML',
    linkLabel: 'github.com/nebucthomas2003/Nutritional_Meal_Planer-ML',
    tools: ['HTML/CSS', 'JavaScript', 'SQL', 'ML'],
    summary: 'Machine learning-based web app that recommends meal plans.',
  },
  {
    name: 'DevOps Practice',
    field: 'DevOps',
    date: 'Jun 2024',
    link: 'https://github.com/nebucthomas2003/devops_practice',
    linkLabel: 'github.com/nebucthomas2003/devops_practice',
    tools: ['DevOps', 'CI/CD'],
    summary: 'Hands-on practice repo for DevOps tooling and workflows.',
  },
  {
    name: 'Java Cheat Sheet',
    field: 'Reference / Learning',
    date: 'Aug 2024',
    link: 'https://github.com/nebucthomas2003/Java_CheatSheet',
    linkLabel: 'github.com/nebucthomas2003/Java_CheatSheet',
    tools: ['Java'],
    summary: 'Quick-reference notes and code snippets for Java syntax and core concepts.',
  },
];

export const leadership = [
  {
    title: 'Red Hat Academy Student Ambassador',
    detail: 'Top 5 Nationwide · three years',
  },
  {
    title: 'Web Development Lead, Coders Club',
    detail: 'Led the web development domain for the university coding club',
  },
  {
    title: 'University-level Hackathon',
    detail: 'Second place',
  },
];

export const certifications = [
  'AWS Academy Cloud Foundations',
];

export const publications = [
  {
    title: 'Long Short-Term Memory Networks for Text Summarization using NLP and ML',
    venue: 'ICSCDS 2025',
    doi: '10.1109/ICSCDS65426.2025.11166729',
    doiLink: 'https://doi.org/10.1109/ICSCDS65426.2025.11166729',
    detail:
      'Explores LSTM-based deep learning models for automatic text summarization, benchmarking their performance against traditional NLP summarization methods.',
  },
];

export const languages = [
  { name: 'English', level: 'IELTS 7.0' },
  { name: 'German', level: 'A2–B1, studying toward B1' },
];
