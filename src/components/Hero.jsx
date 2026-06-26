import { profile } from "../data";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-20"
      style={{ paddingTop: "80px" }}
    >
      <div className="max-w-5xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="block w-8 h-px bg-accent" />
              <span className="font-mono text-accent text-xs tracking-widest uppercase">
                {profile.title}
              </span>
            </div>

            <h1
              className="font-display font-extrabold leading-none mb-4"
              style={{
                fontSize: "clamp(2.8rem, 6vw, 4.6rem)",
                color: "#e8e8f0",
              }}
            >
              Shahab<span className="text-accent">uddin</span>
              <br />
              Ansari
            </h1>

            <p className="text-muted text-base mb-8 max-w-md leading-relaxed">
              <strong className="text-textmain font-medium">
                15+ years in IT.
              </strong>{" "}
              From manual QA to React at tier-1 banks — now building
              enterprise-grade SAP solutions with{" "}
              <strong className="text-textmain font-medium">
                UI5 · Fiori · ABAP · BTP
              </strong>
              .<br />
              Based in Mumbai. Open to{" "}
              <strong className="text-textmain font-medium">
                {profile.openTo}
              </strong>
              .
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
                className="border border-border text-textmain text-sm px-6 py-3 rounded hover:border-accent transition-colors no-underline"
              >
                Get in Touch
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-10 pt-8 border-t border-border flex-wrap">
              {profile.stats.map((s) => (
                <div key={s.label}>
                  <div className="font-display font-extrabold text-accent text-3xl leading-none">
                    {s.num}
                  </div>
                  <div className="font-mono text-muted text-xs mt-1">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Terminal */}
          <div className="hidden md:block bg-surface border border-border rounded-xl overflow-hidden font-mono text-sm">
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
            <div className="p-6 leading-loose text-sm">
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
                <span className="text-accent2">["ReactJS","OData","REST"]</span>
                ,
              </div>
              <div className="text-muted pl-4">
                &nbsp;&nbsp;"past":{" "}
                <span className="text-accent2">
                  ["UBS","HSBC","Lloyds","UOB"]
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
                <span className="text-accent2">SG / MY</span>
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
    </section>
  );
}
