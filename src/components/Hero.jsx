import { profile } from "../data";
import { skills_Full_Stack } from "../data";

function Tag({ label, hot }) {
  return (
    <li className="flex items-start gap-2 font-mono text-xs">
      <span className={hot ? "text-accent" : "text-muted"}>▸</span>
      <span className={hot ? "text-accent" : "text-muted"}>{label}</span>
    </li>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-20"
      style={{ paddingTop: "80px" }}
    >
      <div className="max-w-5xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            {/* Brand logo */}
            <div className="flex justify-center md:justify-start mb-6">
              <img
                src="/logo.jpg"
                alt="Shahabuddin Ansari logo"
                className="w-44 h-44 md:w-72 md:h-72 rounded-full object-cover border-2 border-accent"
                style={{ boxShadow: "0 0 36px rgba(0,212,170,0.22)" }}
              />
            </div>

            <div className="flex items-center justify-center md:justify-start gap-3 mb-5">
              {/* <span className="block w-8 h-px bg-accent" /> */}
              <span className="font-mono text-accent text-xs tracking-widest uppercase">
                {profile.title}
              </span>
            </div>

            {/* <h1
              className="font-display font-extrabold1 leading-none mb-4"
              style={{
                fontSize: "clamp(1.8rem, 3.5vw, 3.6rem)",
                color: "#e8e8f0",
              }}
            >
              Shahabuddin Ansari
            </h1> */}
            <h2
              className="font-display font-extrabold1 text-textmain text-center md:text-left"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)" }}
            >
              Shahabuddin Ansari
            </h2>

            <p className="text-muted text-base mb-8 max-w-md leading-relaxed text-justify md:text-left">
              <strong className="text-textmain font-medium">16 years</strong>{" "}
              turning complex enterprise systems into clean, usable experiences.
              From QA roots to Frontend Web Developer (ReactJS) at tier-1 banks
              — now deep in SAP full-stack:
              <br />
              <ul className="flex flex-col gap-1.5">
                {skills_Full_Stack.map((tag) => (
                  <Tag key={tag.label} label={tag.label} hot={true} />
                ))}
              </ul>
              <br />
              Based in Mumbai.
              <br />
              <strong className="text-textmain font-medium">
                Open to new opportunities.
              </strong>
            </p>

            <div className="grid grid-cols-2 gap-3" style={{ maxWidth: "360px" }}>
              {/* Row 1: YouTube + GitHub */}
              <a
                href={profile.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-accent text-accent font-semibold text-sm px-4 py-3 rounded hover:bg-accent hover:text-bg transition-all no-underline flex items-center justify-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                YouTube
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-accent text-accent font-semibold text-sm px-4 py-3 rounded hover:bg-accent hover:text-bg transition-all no-underline flex items-center justify-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
                </svg>
                GitHub
              </a>
              {/* Row 2: LinkedIn + Resume */}
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-accent text-accent font-semibold text-sm px-4 py-3 rounded hover:bg-accent hover:text-bg transition-all no-underline flex items-center justify-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
              <a
                href="/Shahabuddin_Ansari_CV.pdf"
                download
                className="border border-accent text-accent font-semibold text-sm px-4 py-3 rounded hover:bg-accent hover:text-bg transition-all no-underline flex items-center justify-center gap-2"
              >
                ↓ Resume
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-10 pt-8 pb-10 border-t border-border flex-wrap">
              {profile.stats.map((s) => (
                <div key={s.label}>
                  <div className="font-display font-extrabold1 text-accent text-3xl leading-none">
                    {s.num}
                  </div>
                  <div className="font-mono text-muted text-xs mt-1">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Right — Photo + Terminal */}
          <div className="hidden md:flex flex-col gap-5">
            {/* Profile Photo */}
            <div className="flex justify-center">
              <img
                src="/shahab.png"
                alt="Shahabuddin Ansari"
                className="w-72 h-72 rounded-full object-cover border-2 border-accent"
                style={{ boxShadow: "0 0 36px rgba(0,212,170,0.22)" }}
              />
            </div>

            {/* Terminal */}
            <div className="bg-surface border border-border rounded-xl overflow-hidden font-mono text-sm">
              {/* Bar */}
              <div
                className="flex items-center gap-2 px-4 py-3 border-b border-border"
                style={{ background: "#1a1a25" }}
              >
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ background: "#ff5f57" }}
                />
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ background: "#ffbd2e" }}
                />
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ background: "#28ca41" }}
                />
                <span className="text-muted text-xs ml-2 tracking-wide">
                  ~/shahabuddin.io
                </span>
              </div>

              {/* Body */}
              <div className="p-6 leading-loose">
                <div>
                  <span className="text-accent">→ </span>
                  <span className="text-textmain">whoami</span>
                </div>
                <div className="text-muted pl-4">
                  SAP UI5/Fiori Developer @ TCS · Siemens
                </div>
                <br />
                <div>
                  <span className="text-accent">→ </span>
                  <span className="text-textmain">cat skills.json</span>
                </div>
                <div className="text-muted pl-4">{"{"}</div>
                <div className="text-muted pl-4">
                  &nbsp;&nbsp;"sap":{" "}
                  <span className="text-accent2">
                    ["UI5","Fiori","ABAP","CDS","RAP","BTP"]
                  </span>
                  ,
                </div>
                <div className="text-muted pl-4">
                  &nbsp;&nbsp;"frontend":{" "}
                  <span className="text-accent2">
                    ["ReactJS","JavaScript","TypeScript", "Redux"]
                  </span>
                  ,
                </div>
                <div className="text-muted pl-4">
                  &nbsp;&nbsp;"Others":{" "}
                  <span className="text-accent2">
                    ["Web Automation", "Selenium WebDriver (Java)", "Splunk",
                    "Jenkins"]
                  </span>
                </div>
                <div className="text-muted pl-4">{"}"}</div>
                <br />
                <div>
                  <span className="text-accent">→ </span>
                  <span className="text-textmain">cat status.txt</span>
                </div>
                <div className="text-muted pl-4">
                  🟢 Open to opportunities in{" "}
                  <span className="text-accent2">SG / MY / Europe / Gulf</span>
                </div>
                <br />
                <div>
                  <span className="text-accent">→ </span>
                  <span className="inline-block w-2 h-4 bg-accent cursor-blink align-middle" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
