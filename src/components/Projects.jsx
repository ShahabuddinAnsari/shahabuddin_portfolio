import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="reveal mb-10">
          <p className="font-mono text-accent text-xs tracking-wide uppercase mb-2">
            Things I've built
          </p>
          <h2
            className="font-display font-extrabold1 text-textmain"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)" }}
          >
            Projects
          </h2>
        </div>

        <div
          className="grid gap-5"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          }}
        >
          {projects.map((p) => (
            <div
              key={p.title}
              className="reveal bg-bg border border-border rounded p-6 flex flex-col hover:border-accent transition-colors duration-200"
            >
              <div className="font-mono text-xs text-accent2 tracking-wider uppercase mb-3">
                {p.type}
              </div>
              <div className="font-display font-bold text-textmain text-lg mb-3 flex items-start gap-2">
                {p.title}
                {p.soon && (
                  <span className="font-mono text-xs px-1.5 py-0.5 rounded text-muted border border-border mt-0.5">
                    soon
                  </span>
                )}
              </div>
              <p className="text-muted text-sm leading-relaxed flex-1">
                {p.desc}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-border">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className={`font-mono text-xs px-2 py-0.5 rounded ${
                      p.hot.includes(t) ? "text-accent" : "text-muted bg-border"
                    }`}
                    style={
                      p.hot.includes(t)
                        ? { background: "rgba(0,212,170,0.12)" }
                        : {}
                    }
                  >
                    {t}
                  </span>
                ))}
              </div>
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 font-mono text-xs text-accent hover:underline"
                >
                  → View project
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
