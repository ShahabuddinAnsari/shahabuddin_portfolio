import { useState } from "react";

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

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b border-border"
      style={{
        background: "rgba(10,10,15,0.85)",
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
                className="font-mono text-xs text-muted hover:text-textmain transition-colors tracking-wide no-underline"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-block bg-accent text-bg font-semibold text-sm px-4 py-2 rounded hover:opacity-85 transition-opacity no-underline"
          style={{ color: "#0a0a0f" }}
        >
          Hire Me
        </a>
        <a
          href="/Shahabuddin_Ansari_CV.pdf"
          download
          className="hidden md:inline-block bg-accent text-bg font-semibold text-sm px-4 py-2 rounded hover:opacity-85 transition-opacity no-underline"
          style={{ color: "#0a0a0f" }}
        >
          Resume
        </a>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 cursor-pointer bg-transparent border-0 p-0"
          onClick={() => setOpen(!open)}
        >
          <span className="block w-5 h-0.5 bg-textmain" />
          <span className="block w-5 h-0.5 bg-textmain" />
          <span className="block w-5 h-0.5 bg-textmain" />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden border-t border-border px-6 py-4 flex flex-col gap-4"
          style={{ background: "#0a0a0f" }}
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
            className="bg-accent text-sm font-semibold px-4 py-2 rounded text-center no-underline"
            style={{ color: "#0a0a0f" }}
          >
            Hire Me
          </a>
          <a
            id="myResumeLink"
            href="/Shahabuddin_Ansari_CV.pdf"
            download
            onClick={() => setOpen(false)}
            className="bg-accent text-sm font-semibold px-4 py-2 rounded text-center no-underline"
            style={{ color: "#0a0a0f" }}
          >
            My Resume
          </a>
        </div>
      )}
    </nav>
  );
}
