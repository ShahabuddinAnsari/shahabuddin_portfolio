import { profile } from "../data";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-surface">
      <div className="max-w-5xl mx-auto px-6">
        <div className="max-w-lg mx-auto text-center reveal">
          <p className="font-mono text-accent text-xs tracking-widest uppercase mb-2">
            Let's connect
          </p>
          <h2
            className="font-display font-extrabold1 text-textmain mb-6"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)" }}
          >
            Get in Touch
          </h2>
          <p className="text-muted text-base leading-relaxed mb-8">
            I'm actively exploring SAP full-stack and UI5/Fiori opportunities in{" "}
            <strong className="text-textmain">Singapore and Malaysia</strong>.
            If you're building something interesting or want to collaborate on
            SAP content — reach out.
          </p>

          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-2 bg-bg border border-border px-5 py-3 rounded font-mono text-xs text-textmain hover:border-accent hover:text-accent transition-colors no-underline"
            >
              ✉ Email Me
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-bg border border-border px-5 py-3 rounded font-mono text-xs text-textmain hover:border-accent hover:text-accent transition-colors no-underline"
            >
              in LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-bg border border-border px-5 py-3 rounded font-mono text-xs text-textmain hover:border-accent hover:text-accent transition-colors no-underline"
            >
              ⌥ GitHub
            </a>
            <a
              href={profile.youtube}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-bg border border-border px-5 py-3 rounded font-mono text-xs text-textmain hover:border-accent hover:text-accent transition-colors no-underline"
            >
              ▶ YouTube
            </a>
          </div>

          {/* Availability indicator */}
          <div className="mt-10 flex items-center justify-center gap-2 font-mono text-xs text-muted">
            <div className="w-2 h-2 rounded-full bg-accent pulse-dot" />
            Currently open to opportunities in Singapore &amp; Malaysia
          </div>
        </div>
      </div>
    </section>
  );
}
