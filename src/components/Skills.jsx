import { useEffect, useState } from "react";
import SkillLogo from "./SkillLogo";

const ROW_ONE = [
  { id: "figma", name: "Figma" },
  { id: "react", name: "React.js" },
  { id: "js", name: "JavaScript" },
  { id: "html", name: "HTML5" },
  { id: "css", name: "CSS3" },
  { id: "tailwind", name: "Tailwind CSS" },
  { id: "node", name: "Node.js" },
  { id: "php", name: "PHP" },
  { id: "laravel", name: "Laravel" },
  { id: "jira", name: "Jira" },
];

const ROW_TWO = [
  { id: "supabase", name: "Supabase" },
  { id: "mysql", name: "MySQL" },
  { id: "sqlserver", name: "SQL Server (SSMS)" },
  { id: "java", name: "Java" },
  { id: "c", name: "C" },
  { id: "csharp", name: "C#" },
  { id: "python", name: "Python" },
  { id: "git", name: "Git" },
  { id: "github", name: "GitHub" },
];

function GlassToolCircle({ skill, isDuplicate = false }) {
  return (
    <div
      tabIndex={isDuplicate ? -1 : 0}
      aria-label={isDuplicate ? undefined : skill.name}
      className="group relative flex flex-col items-center justify-center rounded-full outline-none"
    >
      {/* Tooltip label on hover/focus */}
      <span
        role={isDuplicate ? undefined : "tooltip"}
        className="pointer-events-none absolute -top-8 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-full border border-line/15 bg-surface px-2.5 py-0.5 text-[11px] font-medium text-ink opacity-0 shadow-sm transition-all duration-200 group-hover:-translate-y-0.5 group-hover:opacity-100 group-focus-visible:-translate-y-0.5 group-focus-visible:opacity-100"
      >
        {skill.name}
      </span>

      {/* Frosted glass circular badge with centered logo */}
      <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/80 bg-white/55 shadow-[0_6px_22px_rgba(39,36,71,0.07),inset_0_1px_1px_rgba(255,255,255,0.9)] backdrop-blur-md transition-all duration-200 group-hover:-translate-y-1 group-hover:bg-white/80 group-hover:shadow-md dark:border-[#A5B4FF]/20 dark:bg-white/[0.06] dark:shadow-[0_8px_24px_rgba(0,0,0,0.35),inset_0_1px_1px_rgba(255,255,255,0.12)] dark:group-hover:border-[#A5B4FF]/45 dark:group-hover:bg-white/[0.12] sm:h-[4.5rem] sm:w-[4.5rem]">
        <SkillLogo id={skill.id} />
      </div>
    </div>
  );
}

function MarqueeRow({ items, direction = "left", label, reducedMotion }) {
  if (reducedMotion) {
    return (
      <div aria-label={label} className="flex flex-wrap gap-3.5 py-2">
        {items.map((skill) => (
          <GlassToolCircle key={skill.id} skill={skill} />
        ))}
      </div>
    );
  }

  const trackClass = direction === "right" ? "marquee-track-right" : "marquee-track-left";

  return (
    <div className="marquee-group marquee-mask relative overflow-x-auto pb-2 pt-9 sm:overflow-hidden" aria-label={label}>
      <div className={`${trackClass} flex w-max items-center gap-4 px-2 sm:gap-5`}>
        {items.map((skill) => (
          <div key={`a-${skill.id}`} className="shrink-0">
            <GlassToolCircle skill={skill} />
          </div>
        ))}
        {items.map((skill) => (
          <div key={`b-${skill.id}`} className="shrink-0" aria-hidden="true">
            <GlassToolCircle skill={skill} isDuplicate />
          </div>
        ))}
      </div>
    </div>
  );
}

function Skills() {
  const [reducedMotion, setReducedMotion] = useState(() => {
    if (typeof window === "undefined" || !window.matchMedia) return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = (event) => setReducedMotion(event.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <div id="skills" className="mt-16 sm:mt-20">
      <h3 className="font-display text-3xl font-normal tracking-tight text-ink sm:text-4xl">
        A growing toolkit
      </h3>
      <p className="mt-2 text-sm text-ink-muted sm:text-base">
        Design, develop, and keep learning.
      </p>

      <div className="mt-6 space-y-2">
        <MarqueeRow
          items={ROW_ONE}
          direction="left"
          label="Design and frontend tools"
          reducedMotion={reducedMotion}
        />
        <MarqueeRow
          items={ROW_TWO}
          direction="right"
          label="Backend, database, and version control tools"
          reducedMotion={reducedMotion}
        />
      </div>

      <p className="mt-5 text-xs text-ink-muted">Swipe or scroll to explore</p>
    </div>
  );
}

export default Skills;
