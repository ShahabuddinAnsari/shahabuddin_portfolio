import { useState } from "react";
import { useTheme } from "../hooks/useTheme";

const links = [
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#youtube", label: "YouTube" },
  { href: "#blog", label: "Blog" },
  { href: "#learning", label: "Learning" },
  { href: "#contact", label: "Contact" },
];

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
        {/* Logo */}
        <a href="#hero" className="no-underline flex items-center">
          <img
            src="/logo.jpg"
            alt="Shahabuddin Ansari"
            className="h-9 w-auto object-contain"
          />
        </a>

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
          <button
            onClick={toggleTheme}
            className="w-9 h-9 flex items-center justify-center rounded border border-border text-muted hover:border-accent hover:text-accent transition-colors bg-transparent cursor-pointer"
            title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            )}
          </button>
          <a
            href="#contact"
            className="border border-accent text-accent font-semibold text-sm px-4 py-2 rounded hover:bg-accent hover:text-bg transition-all no-underline"
          >
            Hire Me
          </a>
        </div>

        {/* Hamburger + mobile theme toggle */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="w-8 h-8 flex items-center justify-center rounded border border-border text-muted hover:border-accent hover:text-accent transition-colors bg-transparent cursor-pointer"
          >
            {theme === "dark" ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            )}
          </button>
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
            className="border border-accent text-accent text-sm font-semibold px-4 py-2 rounded text-center no-underline hover:bg-accent hover:text-bg transition-all"
          >
            Hire Me
          </a>
          <a
            id="myResumeLink"
            href="/Shahabuddin_Ansari_CV.pdf"
            download
            onClick={() => setOpen(false)}
            className="border border-accent text-accent text-sm font-semibold px-4 py-2 rounded text-center no-underline hover:bg-accent hover:text-bg transition-all"
          >
            My Resume
          </a>
        </div>
      )}
    </nav>
  );
}
