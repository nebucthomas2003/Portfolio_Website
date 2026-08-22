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
    certificatePath: `${import.meta.env.BASE_URL}assets/infosys-certificate.jpg`,
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
