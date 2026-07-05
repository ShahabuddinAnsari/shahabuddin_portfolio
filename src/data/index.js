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
    { num: "16", label: "Years of overall experience in IT" },
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
    period: "Apr 2025 — Present",
    location: "Mumbai",
    role: "SAP Fiori/UI5 Lead Consultant",
    company: "Tata Consultancy Services",
    client: "Siemens",
    logo: "/companyLogo/tcs_logo.jpeg",
    current: true,
    bullets: [
      "Delivered a custom access-governance Fiori application end to end: form-based requests for system access, role assignment/extension, and user unlock, routed through profile-based approval workflows — replacing a manual access-management process. (SAPUI5, OData, ABAP)",
      "Enhanced 2 standard Fiori applications with custom business logic and extended OData services for MM/WM workflows. ",
      "Own production support and root-cause resolution for 3 business-critical Fiori applications used by Siemens business teams.",
    ],
  },
  {
    period: "Jan 2024 — Apr 2025",
    location: "Kuala Lumpur",
    role: "SAP UI5/Fiori Consultant",
    company: "EPS Ventures",
    logo: "/companyLogo/eps_venturs_logo.jpeg",
    current: false,
    bullets: [
      "Extended the standard SAP Fiori MM Purchase Order Approval application (Freestyle SAPUI5) to surface additional procurement context for approvers — plant, request date, attachment submitter — accelerating approval decisions. ",
      "Enhanced OData services in SAP Gateway to expose additional fields and custom approval logic while preserving data consistency with the SAP backend.",
      "Independently managed the full development lifecycle — requirement analysis, design, build, testing, and production deployment — in a client-facing onsite role in Kuala Lumpur.",
    ],
  },
  {
    period: "Aug 2022 -  Jan 2024",
    location: "Singapore",
    role: "Senior Frontend Developer",
    company: "Optimum Solutions",
    client: "UOB (United Overseas Bank)",
    logo: "/companyLogo/optimum_solutions_logo.jpeg",
    current: false,
    bullets: [
      "Production ownership of UOB's SME digital banking portal (ReactJS/Redux): incident investigation, root-cause analysis, and resolution reporting to bank stakeholders.",
      "Monitored application health and user behaviour via Splunk; delivered monthly performance reporting to business owners.",
      "Standardised support runbooks and processes, reducing recurring support errors by ~50%. ",
    ],
  },
  {
    period: "Mar 2021 - Aug 2022",
    location: "Pune",
    role: "Senior Frontend Developer",
    company: "TekSystems",
    logo: "/companyLogo/teksystems_logo.jpeg",
    client: "HSBC",
    current: false,
    bullets: [
      "Built a modular single-page application for HSBC's global client-onboarding platform in ReactJS with micro-frontend architecture, integrating multiple upstream systems and approval workflows.",
      "Created a reusable component library adopted across feature teams, accelerating delivery of new features.",
      "Integrated third-party APIs for real-time data exchange; maintained high unit-test coverage with Jest. ",
    ],
  },
  {
    period: "Aug 2018 -  Mar 2021",
    location: "Mumbai",
    role: "Frontend Developer",
    company: "UBS",
    logo: "/companyLogo/ubs_logo.jpeg",
    current: false,
    bullets: [
      "Developed responsive ReactJS/Redux applications for UBS's investment-banking e-trading platform, covering creation, approval, and monitoring workflows across integrated systems.",
      "Wrote unit tests with Jest and React Testing Library; provided development and production support for live trading applications. ",
      "Hardened the Java-based test automation framework, improving regression stability. ",
    ],
  },
  {
    period: "Feb 2016 - Jul 2018",
    location: "Pune",
    role: "Lead QA (Automation)",
    company: "Synechron Technology Solutions",
    logo: "/companyLogo/synechron_logo.jpeg",
    client: "Asurion",
    current: false,
    bullets: [
      "Designed Selenium WebDriver (Java) automation frameworks for a mobile-insurance platform serving carriers across the US, Canada, and LATAM.",
      "Built Jenkins pipelines for sanity testing and environment health; ran automated verification of production builds. ",
    ],
  },
  {
    period: "Jul 2010 - Jan 2016",
    location: "Pune",
    role: "Senior Test Engineer",
    company: "Cognizant Technology Solutions",
    logo: "/companyLogo/cognizant_logo.png",
    client: "Lloyds Banking Group",
    current: false,
    bullets: [
      "Six-year engagement on Lloyds Banking Group programmes, including 12 months onsite at the Lloyds London office (Nov 2012 – Oct 2013): test design, defect management, and mobile app testing across Android/iOS.",
      "Partnered with business analysts on functional coverage; led backward-compatibility testing and defect triage with cross-functional teams.",
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
