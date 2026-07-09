import { experience } from "../data";

// const MONTHS = {
//   Jan: 0,
//   Feb: 1,
//   Mar: 2,
//   Apr: 3,
//   May: 4,
//   Jun: 5,
//   Jul: 6,
//   Aug: 7,
//   Sep: 8,
//   Oct: 9,
//   Nov: 10,
//   Dec: 11,
// };

// function parseMonthYear(str) {
//   const [mon, year] = str.trim().split(/\s+/);
//   return new Date(parseInt(year, 10), MONTHS[mon] ?? 0, 1);
// }

// function getDuration(period) {
//   const [startStr, endStr] = period.split(/[-–—]+/).map((p) => p.trim());
//   const start = parseMonthYear(startStr);
//   const end = /present/i.test(endStr) ? new Date() : parseMonthYear(endStr);

//   let months =
//     (end.getFullYear() - start.getFullYear()) * 12 +
//     (end.getMonth() - start.getMonth());
//   months = Math.max(months, 0);

//   const years = Math.floor(months / 12);
//   const remMonths = months % 12;

//   const parts = [];
//   if (years > 0) parts.push(`${years} ${years === 1 ? "Yr" : "Yrs"}`);
//   if (remMonths > 0 || parts.length === 0)
//     parts.push(`${remMonths} ${remMonths === 1 ? "Month" : "Months"}`);

//   return parts.join(" ");
// }

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="reveal mb-10">
          <p className="font-mono text-accent text-xs tracking-wide uppercase mb-2">
            Where I've been
          </p>
          <h2
            className="font-display font-extrabold1 text-textmain"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)" }}
          >
            Work Experience
          </h2>
        </div>

        <div className="relative pl-8">
          {/* Vertical line */}
          <div className="hidden sm:block absolute left-0 top-0 bottom-0 w-px bg-border" />

          {experience.map((item, i) => (
            <div
              key={i}
              className={`reveal relative mb-10 pb-10 ${
                i < experience.length - 1 ? "border-b border-border" : ""
              }`}
            >
              {/* Dot */}
              <div
                className={`absolute -left-10 top-1 w-2.5 h-2.5 rounded-full border-2`}
                style={{
                  background: item.current ? "#00d4aa" : "#6b6b80",
                  borderColor: "#0a0a0f",
                }}
              />

              {/* Role */}
              <div className="mb-2">
                <span className="text-accent font-bold text-lg">
                  {item.role}
                </span>
              </div>

              {/* Logo + (Company/Location row, Duration row) */}
              <div className="flex items-center gap-3 mb-3">
                {item.logo && (
                  <img
                    src={item.logo}
                    alt=""
                    className="w-14 h-14 rounded-lg border border-accent object-contain bg-white/5 shrink-0"
                  />
                )}
                <div className="flex flex-col gap-0.5">
                  <span
                    className="text-accent font-medium text-sm"
                    style={{ fontSize: "0.9rem" }}
                  >
                    {item.company}
                  </span>
                  <span
                    className="text-accent font-medium"
                    style={{ fontSize: "0.9rem" }}
                  >
                    {item.location}
                  </span>
                  <span className="font-mono text-xs text-muted">
                    {item.period}
                    {/* ({getDuration(item.period)}) */}
                  </span>
                </div>
              </div>

              <ul className="text-muted text-sm leading-relaxed space-y-1 list-disc pl-4">
                {item.bullets.map((b, bi) => (
                  <li key={bi}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
