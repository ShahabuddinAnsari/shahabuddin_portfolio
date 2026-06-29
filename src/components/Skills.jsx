import "@ui5/webcomponents/dist/Icon.js";
import "@ui5/webcomponents-icons/dist/sap-ui5.js";
import "@ui5/webcomponents-icons/dist/sap-logo-shape.js";
import { skills } from "../data";


function Tag({ label, hot }) {
  return (
    <span
      className={`font-mono text-xs px-2 py-0.5 rounded ${
        hot ? "text-accent" : "text-muted bg-border"
      }`}
      style={hot ? { background: "rgba(0,212,170,0.12)" } : {}}
    >
      {label}
    </span>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-surface">
      <div className="max-w-5xl mx-auto px-6">
        <div className="reveal mb-10">
          <p className="font-mono text-accent text-xs tracking-widest uppercase mb-2">
            What I work with
          </p>
          <h2
            className="font-display font-extrabold1 text-textmain"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)" }}
          >
            Skills &amp; Tech Stack
          </h2>
        </div>

        <div
          className="grid gap-4"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          }}
        >
          {skills.map((card) => (
            <div
              key={card.title}
              className="reveal bg-bg border border-border rounded p-6 hover:border-accent transition-all duration-200 hover:-translate-y-0.5"
            >
              <div className="text-2xl mb-3">
                {card.ui5Icon ? (
                  <ui5-icon name={card.ui5Icon} style={{ width: "2rem", height: "2rem", color: "#e8e8f0" }} />
                ) : (
                  card.icon
                )}
              </div>
              <div className="font-display font-bold text-textmain text-base mb-3">
                {card.title}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {card.tags.map((t) => (
                  <Tag key={t.label} {...t} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
