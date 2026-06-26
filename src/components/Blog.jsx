import { blogs } from '../data';

export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-surface">
      <div className="max-w-5xl mx-auto px-6">
        <div className="reveal mb-10">
          <p className="font-mono text-accent text-xs tracking-widest uppercase mb-2">Things I write about</p>
          <h2 className="font-display font-extrabold text-textmain"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)' }}>
            Blog &amp; Articles
          </h2>
        </div>

        <div className="grid gap-5" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
          {blogs.map((b) => (
            <div key={b.title}
                 className="reveal bg-bg border border-border rounded p-6 hover:border-accent transition-colors duration-200 cursor-pointer">
              <div className="font-mono text-xs text-muted mb-3">{b.date}</div>
              <div className="font-display font-bold text-textmain text-base mb-2 leading-snug">{b.title}</div>
              <p className="text-muted text-sm leading-relaxed">{b.excerpt}</p>
              <span className="inline-block mt-4 font-mono text-xs text-accent">→ Read article</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
