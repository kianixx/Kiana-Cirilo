import { useEffect, useRef, useState } from "react";
import {
  Atom,
  Brain,
  Database,
  ExternalLink,
  Eye,
  Figma,
  ScanText,
  Terminal,
  Wind,
  Zap,
} from "lucide-react";

const FILTERS = ["All", "Front-end", "UI/UX"];

const PROJECTS = [
  {
    id: "recap",
    title: "RECAP",
    description:
      "A mobile-responsive Quiz Bowl management system with event management, participant registration, quiz administration, real-time score monitoring, and a live leaderboard. Led as Project Manager and built the React UI while teammates built the backend and AI modules.",
    category: "Front-end",
    image: "/imgs/recap.png",
    imageAlt: "RECAP Quiz Bowl Management and Automated Scoring System interface",
    orientation: "landscape",
    link: "https://www.kaja-recap.online/",
    statusLabel: "Deployed · 2026",
    statusDotClass: "bg-emerald-500",
    roleLabel: "PM, UI/UX & Front-End",
    stack: [
      { label: "React", icon: "react" },
      { label: "Tailwind CSS", icon: "tailwind" },
      { label: "Supabase", icon: "supabase" },
      { label: "Computer Vision", icon: "vision" },
      { label: "CNN", icon: "cnn" },
      { label: "OCR", icon: "ocr" },
    ],
  },
  {
    id: "gustomoto",
    title: "GustoMoto",
    description:
      "A desktop motorcycle rental application in C# with SQL Server (SSMS), featuring login and sign-up, renter and admin roles, automatic rental fee computation, and availability tracking. Database and application built solo.",
    category: "Front-end",
    image: "/imgs/GustoMoto.png",
    imageAlt: "GustoMoto Motorcycle Rental System desktop interface",
    orientation: "landscape",
    link: "https://github.com/kianixx/GustoMoto",
    statusLabel: "Academic · 2025",
    statusDotClass: "bg-sky-500 dark:bg-accent",
    roleLabel: "Solo Developer",
    stack: [
      { label: "C#", icon: "csharp" },
      { label: "SQL Server (SSMS)", icon: "database" },
    ],
  },
  {
    id: "chew",
    title: "Chew!",
    description:
      "End-to-end UX case study for an AI-powered smart meal planner that personalizes recipes to dietary needs: personas, information architecture, user flows, wireframes, high-fidelity screens, and an interactive Figma prototype.",
    category: "UI/UX",
    image: "/imgs/chew.png",
    imageAlt: "Chew! AI-Powered Smart Meal Planner mobile UI screen",
    orientation: "portrait",
    link: "https://www.figma.com/proto/GQsry4a2UP5MapALYoFhZU/Chew-App?node-id=314-338&t=pLlWUjMdpooUQjPd-1&starting-point-node-id=312%3A314",
    statusLabel: "UX Case Study · 2026",
    statusDotClass: "bg-accent",
    roleLabel: "UI/UX & Coordinator",
    stack: [{ label: "Figma", icon: "figma" }],
  },
  {
    id: "zura",
    title: "Zura",
    description:
      "UX case study for a gamified sustainable waste management platform that rewards recycling with points, grounded in research on motivations and barriers, user journeys, and interactive Figma prototypes.",
    category: "UI/UX",
    image: "/imgs/zura.png",
    imageAlt: "Zura gamified waste management mobile UI screens",
    orientation: "landscape",
    link: "https://www.figma.com/proto/CA0PTO9pATWMmpGaRjmF9v/Zura?node-id=366-310&t=Nvb4hGSJ5qWwtfAr-1&starting-point-node-id=265%3A443",
    statusLabel: "UX Case Study · 2026",
    statusDotClass: "bg-accent",
    roleLabel: "UI/UX & Coordinator",
    stack: [{ label: "Figma", icon: "figma" }],
  },
  {
    id: "scholaria",
    title: "Scholaria",
    description:
      "A front-end scholarship search and matching web interface.",
    category: "Front-end",
    image: "/imgs/scholaria.png",
    imageAlt: "Scholaria scholarship search web interface",
    orientation: "landscape",
    link: null,
    statusLabel: "Front-End",
    statusDotClass: "bg-sky-500 dark:bg-accent",
    roleLabel: "",
    stack: [],
  },
];

function StackChipIcon({ type }) {
  const cls = "h-3.5 w-3.5 shrink-0 text-accent";
  switch (type) {
    case "react":
      return <Atom className={cls} aria-hidden="true" />;
    case "tailwind":
      return <Wind className={cls} aria-hidden="true" />;
    case "supabase":
      return <Zap className={cls} aria-hidden="true" />;
    case "vision":
      return <Eye className={cls} aria-hidden="true" />;
    case "cnn":
      return <Brain className={cls} aria-hidden="true" />;
    case "ocr":
      return <ScanText className={cls} aria-hidden="true" />;
    case "csharp":
      return <Terminal className={cls} aria-hidden="true" />;
    case "database":
      return <Database className={cls} aria-hidden="true" />;
    case "figma":
      return <Figma className={cls} aria-hidden="true" />;
    default:
      return null;
  }
}

function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line/15 bg-surface p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-lg">
      {/* Framed Top Preview Image with margin so nothing is cut off */}
      <div className="aspect-video w-full overflow-hidden rounded-xl border border-line/10 bg-[#CBE0F5]/55 dark:bg-[#20334B]">
        {project.image ? (
          project.orientation === "portrait" ? (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-cloud-pink via-cloud-soft to-cloud-blue p-2.5 dark:from-[#2B223C] dark:via-[#17182E] dark:to-[#20334B]">
              <img
                src={project.image}
                alt={project.imageAlt}
                width="402"
                height="876"
                loading="lazy"
                className="h-full w-auto rounded-lg border border-line/15 bg-white object-contain shadow-sm transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
          ) : (
            <img
              src={project.image}
              alt={project.imageAlt}
              width="1920"
              height="1080"
              loading="lazy"
              className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            />
          )
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center px-6 text-center text-xs font-medium text-ink-muted">
            <span>Project screenshot</span>
            <span>Placeholder</span>
          </div>
        )}
      </div>

      {/* Card Body */}
      <div className="flex flex-1 flex-col justify-between px-2 pb-2 pt-5">
        <div>
          {/* Title + External Link Icon */}
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-display text-xl font-semibold tracking-tight text-ink transition-colors group-hover:text-accent">
              {project.title}
            </h3>

            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.title}`}
                className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-ink-muted transition-colors hover:bg-surface-alt/50 hover:text-ink"
              >
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            ) : (
              <span
                title="Project link coming soon"
                aria-label={`${project.title} link coming soon`}
                className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-ink-muted/45"
              >
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </span>
            )}
          </div>

          {/* Description */}
          <p
            className={`mt-2.5 text-sm leading-relaxed text-ink-muted ${
              expanded ? "" : "line-clamp-3"
            }`}
          >
            {project.description}
          </p>

          <button
            type="button"
            onClick={() => setExpanded((prev) => !prev)}
            aria-expanded={expanded}
            className="mt-1.5 text-xs font-medium text-ink underline decoration-accent/70 underline-offset-4 transition-colors hover:text-accent"
          >
            {expanded ? "Show less" : "Read more"}
          </button>

          {/* STACK Section */}
          {project.stack.length > 0 && (
            <div className="mt-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-muted/85">
                Stack
              </p>
              <ul className="mt-2.5 flex flex-wrap gap-2" aria-label={`${project.title} stack`}>
                {project.stack.map((item) => (
                  <li
                    key={item.label}
                    className="inline-flex items-center gap-1.5 rounded-full border border-line/15 bg-canvas/80 px-3 py-1 text-xs font-medium text-ink dark:bg-white/[0.04]"
                  >
                    <StackChipIcon type={item.icon} />
                    <span>{item.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Bottom Status Divider Row */}
        <div className="mt-6 flex items-center justify-between gap-3 border-t border-line/12 pt-4 text-xs">
          <span className="inline-flex items-center gap-2 font-medium text-ink">
            <span
              className={`h-2 w-2 rounded-full ${project.statusDotClass}`}
              aria-hidden="true"
            />
            <span>{project.statusLabel}</span>
          </span>
          {project.roleLabel && <span className="text-ink-muted">{project.roleLabel}</span>}
        </div>
      </div>
    </article>
  );
}

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const tabRefs = useRef({});
  const [underline, setUnderline] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const syncUnderline = () => {
      const btn = tabRefs.current[activeFilter];
      if (!btn) return;
      setUnderline({ left: btn.offsetLeft, width: btn.offsetWidth });
    };

    syncUnderline();
    window.addEventListener("resize", syncUnderline);
    return () => window.removeEventListener("resize", syncUnderline);
  }, [activeFilter]);

  const filteredProjects =
    activeFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="px-5 py-20 sm:px-10 sm:py-28 lg:px-14">
      <div className="mx-auto max-w-6xl">
        {/* Centered Header */}
        <div className="text-center">
          <h2 className="font-display text-3xl font-normal tracking-tight text-ink sm:text-4xl">
            My Featured Project
          </h2>
          <p className="mt-2 text-sm text-ink-muted">From first sketch to working product.</p>

          {/* Filter Tabs with Sliding Underline */}
          <div
            role="tablist"
            aria-label="Filter projects by category"
            className="relative mx-auto mt-8 inline-flex items-center gap-7 pb-1.5"
          >
            {FILTERS.map((filter) => {
              const isSelected = activeFilter === filter;
              return (
                <button
                  key={filter}
                  ref={(el) => {
                    tabRefs.current[filter] = el;
                  }}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveFilter(filter)}
                  className={`text-sm transition-colors ${
                    isSelected ? "font-semibold text-ink" : "font-medium text-ink-muted hover:text-ink"
                  }`}
                >
                  {filter}
                </button>
              );
            })}

            <span
              aria-hidden="true"
              className="pointer-events-none absolute bottom-0 left-0 h-0.5 rounded-full bg-ink transition-all duration-300 ease-out dark:bg-accent"
              style={{
                transform: `translate3d(${underline.left}px, 0, 0)`,
                width: `${underline.width}px`,
              }}
            />
          </div>
        </div>

        {/* Project Cards Grid */}
        <div
          key={activeFilter}
          className="panel-fade mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
