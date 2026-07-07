import { learning } from "../data";

const badge = {
  done: { cls: "text-accent", bg: "rgba(0,212,170,0.12)", label: "✓ Complete" },
  active: {
    cls: "text-accent2",
    bg: "rgba(108,99,255,0.15)",
    label: "⚡ Active",
  },
  next: { cls: "text-danger", bg: "rgba(255,107,107,0.12)", label: "↑ Next" },
};

export default function Learning() {
  return (
    <section id="learning" className="py-20 bg-bg">
      <div className="max-w-5xl mx-auto px-6">
        <div className="reveal mb-10">
          <p className="font-mono text-accent text-xs tracking-wide uppercase mb-2">
            My roadmap
          </p>
          <h2
            className="font-display font-extrabold1 text-textmain"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)" }}
          >
            Learning Resources
          </h2>
        </div>

        <div
          className="grid gap-4"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))",
          }}
        >
          {learning.map((item) => {
            const b = badge[item.status];
            return (
              <div
                key={item.title}
                className="reveal bg-surface border border-border rounded p-5 hover:border-accent2 transition-colors duration-200"
              >
                <span
                  className="inline-block font-mono text-xs px-2 py-0.5 rounded mb-3 tracking-wider uppercase"
                  // CORRECT — one 'color' key
                  style={{
                    background: b.bg,
                    color:
                      item.status === "done"
                        ? "#00d4aa"
                        : item.status === "active"
                          ? "#6c63ff"
                          : "#ff6b6b",
                  }}
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
