export const profile = {
  name: "Shahabuddin Ansari",
  title: "SAP Full-Stack Developer",
  tagline:
    "16 years in IT. From manual QA to React at tier-1 banks — now building enterprise-grade SAP solutions.",
  stack: ["UI5", "Fiori", "ABAP", "CDS", "RAP", "BTP"],
  location: "Mumbai, India",
  openTo: "Available for New Opportunities",
  email: "ansari.extc@gmail.com",
  linkedin: "https://www.linkedin.com/in/shahabuddinansari/",
  github: "https://github.com/ShahabuddinAnsari",
  youtube: "https://www.youtube.com/channel/UCyYEXx3b4LbzXiwLWDuPazQ",
  stats: [
    { num: "16", label: "Total Years of experience in Software Development" },
    { num: "3", label: "Years in SAP (Most recent)" },
    { num: "6", label: "Years in ReactJS" },
    { num: "3", label: "Countries worked (UK, Singapore, Malaysia)" },
    { num: "∞", label: "Cups of chai/coffee/Teh" },
  ],
};

export const skills_Full_Stack = [
  { label: "SAP UI5 / Fiori / Fiori Elements" },
  { label: "SAP BTP" },
  { label: "SAP ABAP" },
  { label: "RAP - RestFull Application Programming Model" },
  { label: "CAP - Cloud Application Programming Model" },
];

export const skills = [
  {
    icon: "🔷",
    ui5Icon: "sap-ui5",
    title: "SAP Frontent (UI5 / Fiori)",
    tags: [
      { label: "SAP UI5", hot: true },
      { label: "Fiori Elements", hot: true },
      { label: "OData V2/V4", hot: true },
      { label: "Freestyle (Custom UI5) Apps", hot: true },
      { label: "Fiori Launchpad", hot: true },
      { label: "BAS", hot: true },
    ],
  },
  {
    icon: "⚙️",
    ui5Icon: "sap-logo-shape",
    title: "SAP Backend (ABAP / RAP)",
    tags: [
      { label: "ABAP on S4/HANA", hot: true },
      { label: "ABAP on Cloud", hot: true },
      { label: "Core Data Services (CDS)", hot: true },
      { label: "RAP - Restful Application Programming Model", hot: true },
      { label: "CAP - Cloud Application Programming Model", hot: true },
      { label: "BTP", hot: true },
      { label: "NodeJS", hot: true },
    ],
  },
  // {
  //   icon: "☁️",
  //   title: "SAP CAPM",
  //   tags: [
  //     { label: "CAP - Cloud Application Programming Model", hot: true },
  //     { label: "BTP", hot: true },
  //     { label: "NodeJS", hot: true },
  //     { label: "JavaScript / ES6", hot: true },
  //   ],
  // },
  {
    icon: (
      <svg
        viewBox="-11.5 -10.23174 23 20.46348"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
      >
        <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
        <g stroke="#61DAFB" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    ),
    title: "Frontend Web Dev (ReactJS)",
    tags: [
      { label: "ReactJS", hot: false },
      { label: "JavaScript", hot: true },
      { label: "TypeScript", hot: false },
      { label: "Redux", hot: false },
      { label: "REST APIs", hot: false },
      { label: "Jest", hot: false },
      { label: "Webpack", hot: false },
    ],
  },
  {
    icon: "🧪",
    title: "QA & Automation",
    tags: [
      { label: "Selenium WebDriver (Java)", hot: false },
      { label: "JMeter - Performance Testing", hot: false },
      { label: "Test Planning & Effort Estimation", hot: false },
      { label: "Defect Management", hot: false },
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
  // {
  //   status: "active",
  //   title: "Deutsch (German) — Daily",
  //   desc: "Building toward B2 for long-term Germany relocation. Daily practice alongside SAP learning.",
  // },
];
