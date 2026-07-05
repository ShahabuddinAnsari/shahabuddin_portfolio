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
            <strong className="text-textmain">
              Singapore, Malaysia, Europe, Gulf
            </strong>
            . If you're building something interesting or want to collaborate on
            SAP content — reach out.
          </p>
        </div>

          <div className="grid grid-cols-2 md:flex gap-3 mx-auto mt-2 max-w-xs md:max-w-none md:justify-center">
            <a
              href={profile.youtube}
              target="_blank"
              rel="noreferrer"
              className="border border-accent text-accent font-semibold text-sm px-4 py-3 rounded-lg hover:bg-accent hover:text-bg transition-all no-underline flex items-center justify-center gap-2 whitespace-nowrap md:flex-1 md:max-w-[160px]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="#FF0000">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              YouTube
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="border border-accent text-accent font-semibold text-sm px-4 py-3 rounded-lg hover:bg-accent hover:text-bg transition-all no-underline flex items-center justify-center gap-2 whitespace-nowrap md:flex-1 md:max-w-[160px]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="var(--color-github)">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
              </svg>
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="border border-accent text-accent font-semibold text-sm px-4 py-3 rounded-lg hover:bg-accent hover:text-bg transition-all no-underline flex items-center justify-center gap-2 whitespace-nowrap md:flex-1 md:max-w-[160px]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="#0A66C2">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="border border-accent text-accent font-semibold text-sm px-4 py-3 rounded-lg hover:bg-accent hover:text-bg transition-all no-underline flex items-center justify-center gap-2 whitespace-nowrap md:flex-1 md:max-w-[160px]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              Email Me
            </a>
          </div>

          {/* Availability indicator */}
          <div className="mt-10 flex items-center justify-center gap-2 font-mono text-xs text-muted">
            <div className="w-2 h-2 rounded-full bg-accent pulse-dot" />
            Currently open to opportunities in Singapore, Malaysia, Europe, Gulf
          </div>
      </div>
    </section>
  );
}
