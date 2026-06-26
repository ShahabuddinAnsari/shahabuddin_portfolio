export const profile = {
  name: "Shahabuddin Ansari",
  title: "SAP Full-Stack Developer",
  tagline:
    "15+ years in IT. From manual QA to React at tier-1 banks — now building enterprise-grade SAP solutions.",
  stack: ["UI5", "Fiori", "ABAP", "CDS", "RAP", "BTP"],
  location: "Mumbai, India",
  openTo: "Singapore & Malaysia",
  email: "your@email.com",
  linkedin: "https://linkedin.com/in/YOUR_LINKEDIN",
  github: "https://github.com/YOUR_GITHUB",
  youtube: "https://youtube.com/@YOUR_CHANNEL",
  stats: [
    { num: "15+", label: "Years in IT" },
    { num: "6", label: "Years ReactJS" },
    { num: "3", label: "Countries worked" },
    { num: "∞", label: "Cups of chai" },
  ],
};

export const skills = [
  {
    icon: "🔷",
    title: "SAP UI5 / Fiori",
    tags: [
      { label: "SAPUI5", hot: true },
      { label: "Fiori Elements", hot: true },
      { label: "OData V2/V4", hot: true },
      { label: "Freestyle Apps", hot: false },
      { label: "Fiori Launchpad", hot: false },
      { label: "BAS", hot: false },
    ],
  },
  {
    icon: "⚙️",
    title: "ABAP & Backend",
    tags: [
      { label: "ABAP OOP", hot: true },
      { label: "CDS Views", hot: true },
      { label: "RAP", hot: true },
      { label: "BOPF", hot: false },
      { label: "S/4HANA", hot: false },
      { label: "Eclipse ADT", hot: false },
    ],
  },
  {
    icon: "☁️",
    title: "SAP BTP",
    tags: [
      { label: "CAP", hot: true },
      { label: "Build Work Zone", hot: false },
      { label: "Build Process Auto", hot: false },
      { label: "CF Runtime", hot: false },
      { label: "SAP Ariba", hot: false },
    ],
  },
  {
    icon: "⚛️",
    title: "ReactJS (6 yrs)",
    tags: [
      { label: "React Hooks", hot: false },
      { label: "Redux", hot: false },
      { label: "TypeScript", hot: false },
      { label: "REST APIs", hot: false },
      { label: "Jest", hot: false },
      { label: "Webpack", hot: false },
    ],
  },
  {
    icon: "🧪",
    title: "QA & Automation",
    tags: [
      { label: "Selenium (Java)", hot: false },
      { label: "Manual QA", hot: false },
      { label: "Test Planning", hot: false },
      { label: "JIRA", hot: false },
    ],
  },
  {
    icon: "🛠️",
    title: "Tools & Practices",
    tags: [
      { label: "Git / GitHub", hot: false },
      { label: "abapGit", hot: false },
      { label: "VS Code", hot: false },
      { label: "Agile / Scrum", hot: false },
      { label: "CI/CD", hot: false },
    ],
  },
];

export const experience = [
  {
    period: "Apr 2024 — Present",
    location: "Mumbai, India",
    role: "SAP Technical Consultant — UI5/Fiori/OData",
    company: "TCS · Siemens Account",
    current: true,
    bullets: [
      "Building production Fiori apps on S/4HANA for Siemens, one of Germany's largest industrial enterprises",
      "Full-stack SAP: UI5 freestyle + Fiori Elements on frontend, ABAP CDS + RAP on backend",
      "Developing PO Approval workflows end-to-end using the RAP framework",
    ],
  },
  {
    period: "2018 — 2024",
    location: "Mumbai · London · Singapore · KL",
    role: "Senior ReactJS Developer",
    company: "UBS · HSBC · Lloyds Banking Group · UOB",
    current: false,
    bullets: [
      "6 years building complex financial dashboards and internal tooling at tier-1 banks",
      "Onsite experience in London (Lloyds), Singapore and Kuala Lumpur (UOB)",
      "React, TypeScript, Redux, REST APIs at enterprise scale",
    ],
  },
  {
    period: "Earlier",
    location: "India",
    role: "QA Engineer → Automation Engineer",
    company: "Cognizant · Synechron",
    current: false,
    bullets: [
      "Manual QA at Cognizant on the Lloyds Banking account",
      "Selenium Java automation at Synechron — foundation in software quality and test planning",
    ],
  },
];

export const projects = [
  {
    type: "SAP · RAP · Fiori",
    title: "PO Approval App — RAP",
    desc: "End-to-end Purchase Order approval workflow built on the ABAP RESTful Application Programming model. CDS views, business objects, determinations, validations, and Fiori Elements UI — all from scratch.",
    tags: ["RAP", "CDS", "Fiori Elements", "S/4HANA"],
    hot: ["RAP", "CDS"],
    link: null,
  },
  {
    type: "SAP · CAP · BTP",
    title: "PO Approval App — CAP",
    desc: "Same PO Approval logic rebuilt using SAP CAP on BTP. A direct RAP vs CAP comparison — different architecture, same outcome. Coming Q3 2025.",
    tags: ["CAP", "BTP", "Node.js", "OData V4"],
    hot: ["CAP"],
    link: null,
    soon: true,
  },
  {
    type: "ReactJS · Finance",
    title: "Banking Dashboard Components",
    desc: "React component library built across 6 years at tier-1 financial institutions. Reusable, tested, accessible components in production at UBS, HSBC, Lloyds, and UOB.",
    tags: ["React", "TypeScript", "Jest", "Storybook"],
    hot: [],
    link: null,
  },
  {
    type: "SAP · UI5 · Tutorial",
    title: "UI5 byId / createId Debug Fix",
    desc: "Real-world debugging session turned into a YouTube tutorial. Demonstrates UI5 component ID scoping issues inside fragments and the correct createId() pattern.",
    tags: ["UI5", "Debugging", "YouTube"],
    hot: ["UI5"],
    link: null,
  },
];

export const videos = [
  {
    num: "#01",
    title:
      "Why byId() Fails Inside UI5 Fragments — and How createId() Fixes It",
    meta: "SAP UI5 · Debugging · 12 min",
    live: true,
  },
  {
    num: "#02",
    title: "CDS Views Explained for Frontend Developers",
    meta: "ABAP · CDS · Coming soon",
    live: false,
  },
  {
    num: "#03",
    title: "Building Your First RAP App in 30 Minutes",
    meta: "RAP · S/4HANA · Coming soon",
    live: false,
  },
  {
    num: "#04",
    title: "React Developer's Guide to SAP UI5 — Key Differences",
    meta: "UI5 · React · Coming soon",
    live: false,
  },
];

export const blogs = [
  {
    date: "Coming soon",
    title: "RAP vs CAP: Which Should You Learn First?",
    excerpt:
      "A practical comparison from someone who built the same app in both frameworks. Different architecture, same business outcome.",
  },
  {
    date: "Coming soon",
    title: "How My React Experience Made SAP UI5 Easier (and Harder)",
    excerpt:
      "The mental model shifts every React developer needs when moving into SAP UI5 — what maps across and what will trip you up.",
  },
  {
    date: "Coming soon",
    title: "Setting Up Eclipse ADT + abapGit on MacBook M2",
    excerpt:
      "A no-nonsense setup guide for SAP ABAP development on Apple Silicon — every gotcha I hit and how to fix them.",
  },
];

export const learning = [
  {
    status: "done",
    title: "CDS Views — Full Curriculum",
    desc: "Entities, associations, VDM layers, access control, parameterized views, annotations. Via Anubhav Trainings.",
  },
  {
    status: "active",
    title: "ABAP RAP Framework",
    desc: "Building managed and unmanaged BOs, determinations, validations, Fiori Elements integration on S/4HANA.",
  },
  {
    status: "next",
    title: "SAP CAP (Node.js)",
    desc: "Cloud Application Programming model on BTP. Planned from July 2025 — replicating the PO Approval app for comparison.",
  },
  {
    status: "next",
    title: "SAP BTP Architecture",
    desc: "Build Work Zone, Build Process Automation, CF Runtime, toward Solution Architect certification.",
  },
  {
    status: "done",
    title: "SAP UI5 / Fiori (Production)",
    desc: "6+ months of hands-on Fiori development on Siemens' live S/4HANA environment at TCS.",
  },
  {
    status: "active",
    title: "Deutsch (German) — Daily",
    desc: "Building toward B2 for long-term Germany relocation. Daily practice alongside SAP learning.",
  },
];
