import { profile } from "../data";

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

            <div className="flex items-center gap-3 mb-5">
              <span className="block w-8 h-px bg-accent" />
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
              className="font-display font-extrabold1 text-textmain"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)" }}
            >
              Shahabuddin Ansari
            </h2>

            <p className="text-muted text-base mb-8 max-w-md leading-relaxed">
              <strong className="text-textmain font-medium">16 years</strong>{" "}
              turning complex enterprise systems into clean, usable experiences.
              From QA roots to Frontend Web Developer (ReactJS) at tier-1 banks
              — now deep in SAP full-stack:{" "}
              <strong className="text-textmain font-medium">
                UI5 · Fiori · CAP · BTP · RAP
              </strong>
              .<br />
              Based in Mumbai.
              <br />
              <strong className="text-textmain font-medium">
                Open to new opportunities.
              </strong>
            </p>

            <div className="flex gap-3 flex-wrap">
              <a
                href="#projects"
                className="bg-accent font-semibold text-sm px-6 py-3 rounded hover:opacity-85 transition-opacity no-underline"
                style={{ color: "#0a0a0f" }}
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="bg-accent font-semibold text-sm px-6 py-3 rounded hover:opacity-85 transition-opacity no-underline"
                style={{ color: "#0a0a0f" }}
              >
                Get in Touch
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-10 pt-8 border-t border-border flex-wrap">
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
