export const navItems = [
  { label: 'Introduction', href: '#top' },
  { label: 'Case Study', href: '#cmmc-audit' },
  { label: 'Systems', href: '#professional-systems' },
  { label: 'Personal Work', href: '#selected-work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export const contactLinks = [
  {
    label: 'Email',
    value: 'zkralec@icloud.com',
    href: 'mailto:zkralec@icloud.com',
  },
  {
    label: 'GitHub',
    value: 'github.com/zkralec',
    href: 'https://github.com/zkralec',
  },
  {
    label: 'LinkedIn',
    value: 'Zachary Kralec',
    href: 'https://www.linkedin.com/in/zachary-kralec-8b5a7a263/',
  },
];

// The October 7, 2026 M365 resume is served at the original public resume URL.
export const resume = {
  href: '/Zachary-Kralec-Resume.pdf',
  publicPath: '/Zachary-Kralec-Resume.pdf',
  requestHref: 'mailto:zkralec@icloud.com?subject=Resume%20request',
};

export const heroContent = {
  eyebrow: 'Zachary Kralec / Enterprise IT & internal systems',
  title: 'Systems & Automation Analyst',
  specialization:
    'Infrastructure, Microsoft 365, Security & Workflow Automation',
  description:
    'I build automation and internal systems that make enterprise IT operations faster, more reliable, and easier to audit. My work spans endpoint management, Microsoft 365, infrastructure troubleshooting, security remediation, compliance workflows, and software development.',
  primaryCta: { label: 'View Selected Work', href: '#cmmc-audit' },
};

export const heroNotes = [
  { label: 'Systems', value: 'Windows, endpoints & Microsoft 365' },
  { label: 'Automation', value: 'Python, PowerShell & Power Platform' },
  { label: 'Security', value: 'Remediation, evidence & audit readiness' },
];

export const featuredProject = {
  eyebrow: '01 / Featured case study',
  title: 'CMMC Software, Services & Hardware Audit Program',
  subtitle: 'From endpoint inventory to reviewable audit evidence.',
  description:
    'An enterprise audit and compliance workflow built around PDQ Connect data, approved baselines, documented decisions, and persistent evidence. The project evolved from a local Python application into a Microsoft 365 pilot.',
  metrics: [
    { value: '100+', label: 'endpoints evaluated' },
    { value: '< 30 min', label: 'to evaluate the endpoint set' },
    {
      value: '20+ hours',
      label: 'of manual software & service review replaced',
    },
  ],
  problem:
    'Software and service review meant working through exported inventory, checking approved items, and documenting decisions by hand. Recurring reviews needed a way to reuse those decisions and retain the evidence behind them.',
  constraints:
    'Work from PDQ Connect exports, cover device, software, service, and hardware information, and preserve traceability across imports. Keep unapproved and waiting-for-approval items visible, with a documented business need and approval record.',
  design:
    'I designed an import, classification, and review workflow that compares inventory with approved baselines. Prevalence analysis helps prioritize findings; reusable decisions and bulk review reduce repeated work. Import history and searchable evidence exports keep the review traceable.',
  stack: [
    'Python',
    'PowerShell',
    'Power Apps',
    'Power Automate',
    'Microsoft Lists',
    'SharePoint Online',
    'PDQ Connect',
  ],
  implementations: [
    {
      label: 'Implementation 01',
      title: 'Local Python application',
      description:
        'Import and transform PDQ Connect exports, review classifications against baselines, retain import snapshots and persistent audit records, and produce formatted, searchable evidence exports.',
    },
    {
      label: 'Implementation 02',
      title: 'Microsoft 365 pilot',
      description:
        'Extend the workflow through Power Apps, Power Automate, and Microsoft Lists. Connect individual findings to review history and support documented bulk decisions across related catalog items.',
    },
  ],
  scope:
    'The evaluation results describe the audit workflow. The Microsoft 365 implementation is a pilot; its interface and features do not imply an enterprise-wide rollout.',
  demonstrates:
    'Data transformation, baseline comparison, review workflow design, Microsoft 365 integration, and evidence retention—all tied to an actual IT compliance review process.',
};

export const architectureSteps = [
  {
    step: '01',
    title: 'Import',
    detail:
      'Transform PDQ Connect exports into device, software, service, and hardware records.',
  },
  {
    step: '02',
    title: 'Compare',
    detail:
      'Check approved baselines, flag unapproved items, and identify how widely findings occur.',
  },
  {
    step: '03',
    title: 'Review',
    detail:
      'Record business need, approver, decision date, and evidence; reuse decisions individually or in bulk.',
  },
  {
    step: '04',
    title: 'Retain',
    detail:
      'Keep import history and audit records, then export searchable evidence for recurring reviews.',
  },
];

// Only enable an entry after its sanitized source has been supplied and visually identified.
// Never substitute an unsanitized image or recreate the interface from the brief.
export const cmmcScreenshots = [
  {
    id: 'control-overview',
    title: 'Control review',
    implementation: 'Local Python application',
    src: '/images/cmmc-control-overview.png',
    available: true,
    width: 1711,
    height: 919,
    alt: 'CMMC Control review overview with workload summary cards, device attention priorities, a classification chart, and evidence export controls. Sensitive fields are redacted.',
    caption:
      'Overview dashboard surfacing review workload, device attention priorities, current classifications, and evidence exports.',
  },
  {
    id: 'findings-detail',
    title: 'Device, Software, & Service Findings',
    implementation: 'Microsoft 365 pilot',
    src: '/images/cmmc-findings-detail.png',
    available: true,
    width: 1708,
    height: 920,
    alt: 'Microsoft 365 Device, Software, & Service Findings screen with inventory filters, review status, decision source, and approval details. Sensitive fields are redacted.',
    caption:
      'Microsoft 365 findings view connecting individual device evidence to approval status, business need, and review history.',
  },
  {
    id: 'bulk-review',
    title: 'Catalog Bulk Review',
    implementation: 'Microsoft 365 pilot',
    src: '/images/cmmc-bulk-review.png',
    available: true,
    width: 1706,
    height: 922,
    alt: 'Microsoft 365 Catalog Bulk Review screen with catalog filters, prevalence sorting, multi-item selection, approval fields, and a review-changes step. Sensitive fields are redacted.',
    caption:
      'Bulk-review workflow for applying documented, reusable decisions to related catalog findings.',
  },
  {
    id: 'audit-history',
    title: 'Audit history',
    implementation: 'Local Python application',
    src: '/images/cmmc-audit-history.png',
    available: true,
    width: 1708,
    height: 921,
    alt: 'CMMC Audit history screen with retained import snapshots, report filenames, device and review counts, and a persistent decision log. Sensitive fields are redacted.',
    caption:
      'Persistent import snapshots and decision history preserve traceability across recurring audit cycles.',
  },
];

export const professionalSystems = [
  {
    number: '01',
    title: 'Knowledge Base Review Automation',
    status: 'Production workflow',
    description:
      'A Microsoft 365 review cycle that gives documentation a clear owner, due date, and evidence of review. Built with Microsoft Lists, SharePoint Online, and Power Automate.',
    details: [
      {
        title: 'Remind',
        text: 'Send reminders 30, 14, and 7 days before review is due, then repeat overdue reminders until completion.',
      },
      {
        title: 'Complete',
        text: 'A “Mark Reviewed” action records the review and advances the next review date by one year.',
      },
      {
        title: 'Document',
        text: 'Track ownership, review state, reviewer, timestamp, status, and audit evidence in a persistent record.',
      },
    ],
    outcome:
      'Reduces reliance on manual follow-up and helps prevent stale documentation.',
    tech: ['Microsoft Lists', 'SharePoint Online', 'Power Automate'],
  },
  {
    number: '02',
    title: 'Infrastructure & Endpoint Automation',
    status: 'Operational IT work',
    description:
      'Administrative automation and troubleshooting focused on repeatable endpoint operations: establish the current state, apply a change, and validate the result.',
    details: [
      {
        title: 'Inventory & audit',
        text: 'Process PDQ Connect data, automate endpoint inventory and software audits, and extract device names and users for operational review.',
      },
      {
        title: 'Remediate & validate',
        text: 'Support OpenVPN upgrades and validation, BitLocker remediation, and Dell BIOS and driver updates with PowerShell and Python.',
      },
      {
        title: 'Build & maintain',
        text: 'Carry out device lifecycle operations, Windows 11 imaging, troubleshooting, and post-build validation.',
      },
    ],
    outcome:
      'Emphasizes repeatability, validation, and operational consistency across endpoint workflows.',
    tech: ['PowerShell', 'Python', 'PDQ Connect', 'Windows 11'],
  },
];

export const selectedWork = [
  {
    id: 'sprint-start-pro',
    title: 'Sprint Start Pro',
    eyebrow: 'Released on the Apple App Store',
    description:
      'A Swift iOS application for track athletes, built and released to support focused start practice. Realistic starting cues, reaction training, false-start detection, and structured practice features bring the starting line into individual training sessions.',
    tech: ['Swift', 'iOS', 'Reaction training'],
    links: [
      {
        label: 'View on the App Store',
        href: 'https://apps.apple.com/us/app/sprint-start-pro/id6760863199',
      },
      {
        label: 'View repository',
        href: 'https://github.com/zkralec/sprint-start-pro',
      },
    ],
    gallery: [
      {
        src: '/images/sprint-start-standard.png',
        alt: 'Sprint Start Pro standard practice screen with track starting cues.',
      },
      {
        src: '/images/sprint-start-reaction.png',
        alt: 'Sprint Start Pro reaction training screen.',
      },
      {
        src: '/images/sprint-start-daily.png',
        alt: 'Sprint Start Pro daily practice challenge screen.',
      },
    ],
    logo: '/images/sprint-start-logo.png',
  },
  {
    id: 'mission-control',
    title: 'Mission Control',
    eyebrow: 'Archived personal engineering project',
    description:
      'A completed exploration of workflow orchestration and backend infrastructure. Built with FastAPI, PostgreSQL, Redis, and RQ background jobs, with REST APIs, persistent workflow state, and scheduled automation. Containerized with Docker and self-hosted on Ubuntu during development.',
    tech: ['FastAPI', 'PostgreSQL', 'Redis / RQ', 'Docker', 'Ubuntu'],
    links: [
      {
        label: 'Discuss this project',
        href: 'mailto:zkralec@icloud.com?subject=Mission%20Control%20project',
      },
    ],
    highlights: [
      'Persistent workflow state',
      'Queue-backed background jobs',
      'Scheduled automation',
      'Ubuntu self-hosting',
    ],
  },
];

export const experience = [
  {
    company: 'Resource Management Concepts Inc.',
    role: 'Corporate IT Support/Help Desk Analyst',
    start: '2025-09',
    startLabel: 'September 2025',
    end: null,
    endLabel: 'Present',
    location: 'Lexington Park, Maryland',
    details: [
      'Enterprise IT support across Windows, Microsoft 365, Active Directory, Entra ID, applications, servers, endpoints, and networks.',
      'Develop a modern SharePoint Online intranet to replace a classic/on-prem site, building reusable SharePoint Framework (SPFx) web parts with React, TypeScript, and SCSS for employee resources, company information, and staff directories.',
      'Integrated published SharePoint News through SharePoint REST APIs using SPHttpClient, displaying current announcements and banner images in custom homepage components; tested and refined functionality in SharePoint.',
      'Develop Python, PowerShell, Power Apps, and Power Automate solutions for inventory, audit, remediation, update, and device lifecycle workflows.',
      'Support Tenable Nessus remediation and validation, Exchange Online migration, and Windows 11 imaging and troubleshooting; gain pilot exposure to Entra ID and Intune.',
    ],
  },
  {
    company: 'Resource Management Concepts Inc.',
    role: 'IT Intern',
    start: '2025-06',
    startLabel: 'June 2025',
    end: '2025-08',
    endLabel: 'August 2025',
    details: [
      'Automated endpoint inventory, software auditing, device-name and user extraction, and recurring administrative tasks with PowerShell.',
      'Supported Windows deployment, server hardware, and a three-node Proxmox/Linux virtualization environment.',
    ],
  },
  {
    company: 'LTN Global Communications Inc.',
    role: 'Software Engineering Intern | QA Automation',
    start: '2024-05',
    startLabel: 'May 2024',
    end: '2024-08',
    endLabel: 'August 2024',
    details: [
      'Built Python test automation that reduced video-test execution time by approximately 50%, and maintained GitLab CI/CD pipelines.',
      'Tested and troubleshot across more than 15 systems and documented more than 50 TestRail cases.',
    ],
  },
  {
    company: 'Sinclair Inc.',
    role: 'Business Systems Analyst Intern',
    start: '2023-06',
    startLabel: 'June 2023',
    end: '2023-08',
    endLabel: 'August 2023',
    details: [
      'Participated in stakeholder meetings and requirements gathering, and built a working prototype for centralized employee training.',
      'Proposed more than 20 ServiceNow enhancements.',
    ],
  },
];

export const education = {
  school: "St. Mary's College of Maryland",
  degree: 'B.S. in Computer Science',
  minor: 'Minor in Business',
  gpa: '3.6 / 4.0',
  graduated: '2026-05',
  graduatedLabel: 'May 2026',
};

export const certification = {
  name: 'CompTIA Security+ CE',
  earned: 'Earned August 2026',
  date: '2026-08',
};

export const techStack = [
  {
    category: 'Systems & Infrastructure',
    items: [
      'Windows 10/11',
      'Linux',
      'Active Directory',
      'Entra ID (pilot)',
      'Microsoft 365',
      'SharePoint Online',
      'Proxmox',
      'Docker',
      'Networking',
      'Endpoint imaging',
    ],
  },
  {
    category: 'Automation & Development',
    items: [
      'SharePoint Framework (SPFx)',
      'React',
      'TypeScript',
      'JavaScript',
      'SCSS',
      'SharePoint REST APIs',
      'SPHttpClient',
      'Python',
      'PowerShell',
      'Bash',
      'SQL',
      'REST APIs',
      'Power Apps',
      'Power Automate',
      'Microsoft Lists',
      'Git',
      'GitLab CI/CD',
    ],
  },
  {
    category: 'Security',
    items: [
      'Tenable Nessus',
      'BitLocker',
      'Duo MFA',
      'Vulnerability remediation',
      'CMMC support',
      'Compliance evidence',
      'Audit documentation',
    ],
  },
];
