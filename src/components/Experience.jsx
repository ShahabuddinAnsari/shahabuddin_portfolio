import { experience } from '../data';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-bg">
      <div className="max-w-5xl mx-auto px-6">
        <div className="reveal mb-10">
          <p className="font-mono text-accent text-xs tracking-widest uppercase mb-2">Where I've been</p>
          <h2 className="font-display font-extrabold text-textmain"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)' }}>
            Work Experience
          </h2>
        </div>

        <div className="relative pl-8">
          {/* Vertical line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />

          {experience.map((item, i) => (
            <div key={i}
                 className={`reveal relative mb-10 pb-10 ${
                   i < experience.length - 1 ? 'border-b border-border' : ''
                 }`}>
              {/* Dot */}
              <div className={`absolute -left-10 top-1 w-2.5 h-2.5 rounded-full border-2`}
                   style={{
                     background: item.current ? '#00d4aa' : '#6b6b80',
                     borderColor: '#0a0a0f',
                   }} />

              {/* Meta */}
              <div className="flex gap-4 flex-wrap font-mono text-xs text-muted mb-1">
                <span>{item.period}</span>
                <span>{item.location}</span>
              </div>

              {/* Role */}
              <div className="font-display font-bold text-textmain text-lg mb-0.5">{item.role}</div>
              <div className="text-accent font-medium text-sm mb-3">{item.company}</div>

              <ul className="text-muted text-sm leading-relaxed space-y-1 list-disc pl-4">
                {item.bullets.map((b, bi) => <li key={bi}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
