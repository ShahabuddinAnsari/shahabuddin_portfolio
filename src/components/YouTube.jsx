import { videos, profile } from "../data";

export default function YouTube() {
  return (
    <section id="youtube" className="py-20 bg-bg">
      <div className="max-w-5xl mx-auto px-6">
        <div className="reveal mb-10">
          <p className="font-mono text-accent text-xs tracking-wide uppercase mb-2">
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
            <div className="flex justify-center mb-4">
              <a
                href={profile.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="64"
                  height="64"
                >
                  <path
                    d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                    fill="#FF0000"
                  />
                </svg>
              </a>
            </div>
            <div className="font-display font-bold text-textmain text-base mb-2 leading-snug">
              HikmahDevStudio
            </div>
            <p className="text-muted text-sm mb-5 leading-relaxed">
              Practical SAP tutorials for developers who already know modern
              JavaScript frameworks.
            </p>
            <a
              href={profile.youtube}
              target="_blank"
              rel="noreferrer"
              className="subscribe-btn block bg-accent font-semibold text-sm px-4 py-2 rounded hover:opacity-85 transition-opacity no-underline"
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
