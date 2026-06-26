import { videos, profile } from "../data";

export default function YouTube() {
  return (
    <section id="youtube" className="py-20 bg-bg">
      <div className="max-w-5xl mx-auto px-6">
        <div className="reveal mb-10">
          <p className="font-mono text-accent text-xs tracking-widest uppercase mb-2">
            Content I create
          </p>
          <h2
            className="font-display font-extrabold1 text-textmain"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)" }}
          >
            YouTube Channel
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Channel card */}
          <div className="reveal bg-surface border border-border rounded p-6 text-center">
            <div className="text-5xl mb-4">▶️</div>
            <div className="font-display font-bold text-textmain text-base mb-2 leading-snug">
              SAP UI5 From a React Dev's Lens
            </div>
            <p className="text-muted text-sm mb-5 leading-relaxed">
              Practical SAP tutorials for developers who already know modern
              JavaScript frameworks.
            </p>
            <a
              href={profile.youtube}
              target="_blank"
              rel="noreferrer"
              className="block bg-accent font-semibold text-sm px-4 py-2 rounded hover:opacity-85 transition-opacity no-underline"
              style={{ color: "#0a0a0f" }}
            >
              Subscribe
            </a>
          </div>

          {/* Video list */}
          <div className="reveal md:col-span-2 flex flex-col gap-3">
            {videos.map((v) => (
              <div
                key={v.num}
                className="bg-surface border border-border rounded p-4 flex gap-4 items-start hover:border-accent transition-colors duration-200"
              >
                <div className="font-mono text-xs text-accent pt-0.5 min-w-8">
                  {v.num}
                </div>
                <div>
                  <div
                    className={`text-sm font-medium mb-1 ${v.live ? "text-textmain" : "text-muted"}`}
                  >
                    {v.title}
                  </div>
                  <div className="font-mono text-xs text-muted">{v.meta}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
