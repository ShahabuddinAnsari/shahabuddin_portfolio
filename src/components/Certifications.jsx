import { certifications } from "../data";

const badge = {
  done: { label: "✓ Complete", color: "#00d4aa", bg: "rgba(0,212,170,0.12)" },
  planned: { label: "↑ Planned", color: "#ff6b6b", bg: "rgba(255,107,107,0.12)" },
};

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="reveal mb-10">
          <p className="font-mono text-accent text-xs tracking-wide uppercase mb-2">
            Credentials
          </p>
          <h2
            className="font-display font-extrabold1 text-textmain"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)" }}
          >
            Certifications
          </h2>
        </div>

        <div
          className="grid gap-4"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))",
          }}
        >
          {certifications.map((item) => {
            const b = badge[item.status];
            return (
              <div
                key={item.title}
                className="reveal bg-surface border border-border rounded p-5 hover:border-accent transition-colors duration-200"
              >
                <span
                  className="inline-block font-mono text-xs px-2 py-0.5 rounded mb-3 tracking-wider uppercase"
                  style={{ background: b.bg, color: b.color }}
                >
                  {b.label}
                </span>
                <div className="font-semibold text-textmain text-sm mb-1.5">
                  {item.title}
                </div>
                <p className="text-muted text-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
