export const navItems = [
  { label: 'Mission Control', href: '#mission-control' },
  { label: 'Selected Work', href: '#selected-work' },
  { label: 'What I Build', href: '#what-i-build' },
  { label: 'Stack', href: '#stack' },
  { label: 'Contact', href: '#contact' },
];

export const heroContent = {
  eyebrow: 'Zachary Kralec / Business Technology, AI, and Automation',
  title: 'I build AI systems, automation tools, and internal software.',
  description:
    'Most of my work sits between backend systems, operations, and product design. I like building software that makes workflows easier to run, easier to review, and easier to trust.',
  primaryCta: { label: 'View Mission Control', href: '#mission-control' },
  secondaryCta: { label: 'GitHub', href: 'https://github.com/zkralec' },
  intro:
    'I’m especially interested in business technology roles where AI, automation, and real operating workflows come together in useful software.',
};

export const heroNotes = [
  { label: 'AI systems', value: 'Used for ranking, evaluation, and review workflows' },
  { label: 'Automation', value: 'Built to reduce manual work without losing control' },
  { label: 'Internal tools', value: 'Designed for the teams actually operating them' },
];

export const featuredProject = {
  eyebrow: 'Featured Project',
  title: 'Mission Control',
  subtitle: 'An orchestration layer for AI-assisted workflows.',
  href: 'https://github.com/zkralec/ai-automation-platform',
  description:
    'I built Mission Control to replace scattered scripts and admin steps with one interface for intake, enrichment, ranking, and human review. The result was a workflow that was easier to operate, easier to audit, and much clearer for the people using it.',
  screenshot: '/images/MissionControl.jpg',
  stack: ['Python', 'FastAPI', 'React', 'TypeScript', 'Redis', 'OpenAI API'],
  summary: [
    'It gave operators one place to review workflow state instead of piecing things together from scripts and background jobs.',
    'It made complex automation easier to control by keeping queue state, review checkpoints, and downstream actions visible.',
  ],
  capabilities: [
    'Queue-backed orchestration for long-running tasks',
    'Human review before final actions are triggered',
    'Reporting and status views that make system state easier to understand',
  ],
};

export const architectureSteps = [
  {
    step: '01',
    title: 'Capture',
    detail: 'Pull in listings, feeds, documents, and other operational inputs.',
  },
  {
    step: '02',
    title: 'Enrich',
    detail: 'Normalize and rank raw inputs with model-assisted evaluation.',
  },
  {
    step: '03',
    title: 'Review',
    detail: 'Keep a human checkpoint in the loop before actions are taken.',
  },
  {
    step: '04',
    title: 'Act',
    detail: 'Turn workflow output into reports, notifications, and next steps.',
  },
];

export const selectedWork = [
  {
    title: 'Stride Lab',
    eyebrow: 'AI Product',
    description:
      'I built this to generate more useful training plans than generic workout templates. It turns athlete inputs into structured plans that are easier to act on and adjust over time.',
    tech: ['React', 'Firebase', 'OpenAI API'],
    href: 'https://github.com/zkralec/stride-lab-training-platform',
    image: '/images/StrideLab.jpg',
  },
  {
    title: 'AI Interview Simulator',
    eyebrow: 'LLM Interface',
    description:
      'This project focused on making interview practice more structured. It combines generated prompts and guided feedback so the experience feels more useful than a simple chat session.',
    tech: ['React', 'Tailwind', 'Node.js'],
    href: 'https://github.com/zkralec/ai-interview-simulator',
    image: '/images/AIInterviewPlatform.jpg',
  },
  {
    title: 'Security Audit Automation',
    eyebrow: 'Internal Tooling',
    description:
      'I built these workflows to reduce manual endpoint review and make audit state easier to track across managed systems, especially for software and browser extension coverage.',
    tech: ['Python', 'PowerShell', 'PDQ Deploy'],
    href: null,
    note: 'Professional work summary',
  },
  {
    title: 'OpenVPN Validation Tool',
    eyebrow: 'Infrastructure',
    description:
      'This tool came out of rollout work where consistency mattered. It made version checks, updates, and post-install validation more reliable across endpoints.',
    tech: ['Python', 'PowerShell', 'Deployment Ops'],
    href: null,
    note: 'Professional work summary',
  },
  {
    title: 'Review Aggregator',
    eyebrow: 'Data Workflow',
    description:
      'I built this to surface useful trust signals faster. It pulls review data into one pipeline so patterns are easier to scan than they are across scattered sources.',
    tech: ['Python', 'Scraping', 'Data Parsing'],
    href: 'https://github.com/zkralec/review-sentiment-scraper',
    image: '/images/ReviewAggregator.jpg',
  },
  {
    title: 'Fake News Classifier',
    eyebrow: 'ML Project',
    description:
      'This project focused on building a clearer classification workflow for political claims, with experiments aimed at making model output easier to compare and evaluate.',
    tech: ['Python', 'scikit-learn', 'Pandas'],
    href: 'https://github.com/zkralec/fake-news-classifier',
    image: '/images/AIFakeNewsDetector.jpg',
  },
];

export const capabilities = [
  {
    number: '01',
    title: 'AI systems',
    description: 'I use AI inside practical systems for ranking, evaluation, review, and workflow support rather than as a standalone gimmick.',
  },
  {
    number: '02',
    title: 'Automation tools',
    description: 'I keep coming back to work that reduces repetitive manual effort while preserving visibility, reliability, and control.',
  },
  {
    number: '03',
    title: 'Internal platforms',
    description: 'A lot of the work I care most about is software for operators, analysts, and teams running real business processes.',
  },
  {
    number: '04',
    title: 'Business technology',
    description: 'I’m interested in software that connects technical systems to business workflows in a way that people can actually use day to day.',
  },
];

export const techStack = [
  {
    category: 'Backend',
    items: ['Python', 'FastAPI', 'Node.js', 'REST APIs', 'Redis'],
  },
  {
    category: 'Frontend',
    items: ['React', 'Tailwind CSS', 'JavaScript', 'TypeScript', 'Framer Motion'],
  },
  {
    category: 'AI / ML',
    items: ['OpenAI API', 'Prompt orchestration', 'scikit-learn', 'Pandas', 'LLM evaluation'],
  },
  {
    category: 'Infrastructure',
    items: ['PowerShell', 'PDQ Deploy', 'CI/CD', 'System administration', 'Automation pipelines'],
  },
];

export const contactLinks = [
  { label: 'Email', value: 'zkralec@icloud.com', href: 'mailto:zkralec@icloud.com' },
  { label: 'GitHub', value: 'github.com/zkralec', href: 'https://github.com/zkralec' },
  { label: 'LinkedIn', value: 'linkedin.com/in/zachary-kralec-8b5a7a263', href: 'https://www.linkedin.com/in/zachary-kralec-8b5a7a263/' },
];
