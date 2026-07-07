import { useState, useRef, useEffect } from "react";
import { useTheme } from "../hooks/useTheme";

const links = [
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#youtube", label: "YouTube" },
  { href: "#blog", label: "Blog" },
  { href: "#learning", label: "Learning" },
  // { href: "#contact", label: "Contact" },
];

function ResumeDropdown() {
  const [show, setShow] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setShow(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setShow((s) => !s)}
        className="border border-accent text-accent font-semibold text-xs px-3 py-1.5 rounded-lg hover:bg-accent hover:text-bg transition-all flex items-center gap-1.5 bg-transparent cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
        Resume
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            transform: show ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.2s",
          }}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {show && (
        <div
          className="absolute left-0 top-full mt-2 w-56 rounded border border-border overflow-hidden z-50"
          style={{ background: "var(--color-surface)" }}
        >
          {/* With Photo */}
          <div className="px-3 pt-2.5 pb-1 font-mono text-xs text-muted uppercase tracking-widest">
            With Photo
          </div>
          <a
            href="/SHAHABUDDIN_ANSARI_SAP_Full_Stack_With_Photo.pdf"
            download
            onClick={() => setShow(false)}
            className="flex items-center gap-2.5 px-4 py-2.5 text-xs font-semibold text-textmain hover:bg-accent hover:text-bg transition-colors no-underline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
            </svg>
            PDF
          </a>
          <a
            href="/SHAHABUDDIN_ANSARI_SAP_Full_Stack_With_Photo.docx"
            download
            onClick={() => setShow(false)}
            className="flex items-center gap-2.5 px-4 py-2.5 text-xs font-semibold text-textmain hover:bg-accent hover:text-bg transition-colors no-underline border-b border-border"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
            </svg>
            DOCX
          </a>
          {/* Without Photo */}
          <div className="px-3 pt-2.5 pb-1 font-mono text-xs text-muted uppercase tracking-widest">
            Without Photo
          </div>
          <a
            href="/SHAHABUDDIN_ANSARI_SAP_Full_Stack_Without_Photo.pdf"
            download
            onClick={() => setShow(false)}
            className="flex items-center gap-2.5 px-4 py-2.5 text-xs font-semibold text-textmain hover:bg-accent hover:text-bg transition-colors no-underline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
            </svg>
            PDF
          </a>
          <a
            href="/SHAHABUDDIN_ANSARI_SAP_Full_Stack_Without_Photo.docx"
            download
            onClick={() => setShow(false)}
            className="flex items-center gap-2.5 px-4 py-2.5 text-xs font-semibold text-textmain hover:bg-accent hover:text-bg transition-colors no-underline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
            </svg>
            DOCX
          </a>
        </div>
      )}
    </div>
  );
}

function ThemeToggle({ theme, toggleTheme, size = "md" }) {
  const isDark = theme === "dark";
  const trackW = size === "sm" ? 40 : 46;
  const trackH = size === "sm" ? 22 : 24;
  const knob = size === "sm" ? 16 : 18;
  const travel = trackW - knob - 4;

  return (
    <button
      onClick={toggleTheme}
      className="relative flex-shrink-0 rounded-full border border-border bg-transparent cursor-pointer transition-colors hover:border-accent"
      style={{ width: trackW, height: trackH, padding: 2 }}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <span
        className="flex items-center justify-center rounded-full border border-border bg-accent text-bg transition-transform"
        style={{
          width: knob,
          height: knob,
          transform: isDark ? `translateX(${travel}px)` : "translateX(0)",
          transition: "transform 0.2s ease",
        }}
      >
        {isDark ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={knob - 6}
            height={knob - 6}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={knob - 6}
            height={knob - 6}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        )}
      </span>
    </button>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b border-border"
      style={{
        background: "var(--color-navbar-bg)",
        backdropFilter: "blur(12px)",
      }}
    >
      <div
        className="max-w-5xl mx-auto px-6 h-15 flex items-center justify-between"
        style={{ height: "60px" }}
      >
        {/* Logo + Resume dropdown */}
        <div className="flex items-center gap-3">
          <a href="#hero" className="no-underline flex items-center">
            <img
              src="/logo.jpg"
              alt="Shahabuddin Ansari"
              className="h-9 w-9 rounded-full object-cover"
            />
          </a>
          <ResumeDropdown />
        </div>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8 list-none">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="nav-link font-mono font-bold text-sm text-muted hover:text-accent transition-colors tracking-wide no-underline active:scale-95 inline-block"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA + Theme toggle */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <a
            href="#contact"
            className="border border-accent text-accent font-semibold text-xs px-4 py-2 rounded-lg hover:bg-accent hover:text-bg transition-all no-underline"
          >
            Hire Me
          </a>
        </div>

        {/* Hamburger + mobile theme toggle */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} size="sm" />
          <button
            className="flex flex-col gap-1.5 cursor-pointer bg-transparent border-0 p-0"
            onClick={() => setOpen(!open)}
          >
            <span className="block w-5 h-0.5 bg-textmain" />
            <span className="block w-5 h-0.5 bg-textmain" />
            <span className="block w-5 h-0.5 bg-textmain" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden border-t border-border px-6 py-4 flex flex-col gap-4"
          style={{ background: "var(--color-bg)" }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-mono text-sm text-muted hover:text-textmain no-underline"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="border border-accent text-accent text-xs font-semibold px-4 py-2 rounded-lg text-center no-underline hover:bg-accent hover:text-bg transition-all"
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
}
