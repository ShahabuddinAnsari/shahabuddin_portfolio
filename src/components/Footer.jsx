export default function Footer() {
  return (
    <footer className="bg-bg border-t border-border py-6 text-center">
      <p className="font-mono text-xs text-muted">
        Built by <span className="text-accent">Shahabuddin Ansari</span> ·
        shahabuddin.io · {new Date().getFullYear()}
      </p>
    </footer>
  );
}
