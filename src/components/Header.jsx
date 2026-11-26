import { useEffect, useState } from "react";
import { Download, Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const NAV_LINKS = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
];

const TRACKED_SECTIONS = ["hero", "about", "projects", "achievements"];

function Header() {
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeId, setActiveId] = useState("hero");
  const isDark = theme === "dark";

  useEffect(() => {
    const updateActiveSection = () => {
      const scrollMarker = window.scrollY + window.innerHeight * 0.35;
      const sections = TRACKED_SECTIONS
        .map((id) => {
          const el = document.getElementById(id);
          if (!el) return null;
          return { id, top: el.getBoundingClientRect().top + window.scrollY };
        })
        .filter(Boolean)
        .sort((a, b) => a.top - b.top);

      let current = "hero";
      for (const section of sections) {
        if (scrollMarker >= section.top) {
          current = section.id;
        }
      }

      setActiveId(current);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (event) => {
      if (event.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  const handleAnchorClick = (event, id) => {
    const target = document.getElementById(id);
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
      setActiveId(id);
    }
    setMobileOpen(false);
  };

  const getLinkClasses = (id) =>
    activeId === id
      ? "text-sm font-semibold text-ink transition-colors"
      : "text-sm font-medium text-ink-muted transition-colors hover:text-ink";

  return (
    <header className="fixed inset-x-0 top-0 z-40 px-4 pt-5 sm:px-6 sm:pt-7">
      <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-3">
        {/* Main Floating Pill */}
        <div className="flex flex-1 items-center justify-between gap-4 rounded-full border border-line/15 bg-surface/90 py-2 pl-5 pr-2 shadow-sm backdrop-blur-md sm:flex-initial sm:gap-8 sm:pl-6">
          <a
            href="#hero"
            onClick={(e) => handleAnchorClick(e, "hero")}
            aria-current={activeId === "hero" ? "page" : undefined}
            className={getLinkClasses("hero")}
          >
            Home
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-7 sm:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleAnchorClick(e, link.id)}
                aria-current={activeId === link.id ? "page" : undefined}
                className={getLinkClasses(link.id)}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              aria-pressed={isDark}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-surface-alt text-ink transition-transform duration-200 hover:scale-105"
            >
              {isDark ? (
                <Sun className="h-4 w-4" aria-hidden="true" />
              ) : (
                <Moon className="h-4 w-4" aria-hidden="true" />
              )}
            </button>

            <button
              type="button"
              onClick={() => setMobileOpen((open) => !open)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-pill-menu"
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line/15 text-ink transition-colors hover:bg-surface-alt/60 sm:hidden"
            >
              {mobileOpen ? (
                <X className="h-4 w-4" aria-hidden="true" />
              ) : (
                <Menu className="h-4 w-4" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Separate Resume Pill */}
        <a
          href="/Kiana_Kae_Cirilo_Resume.pdf"
          download="Kiana_Kae_Cirilo_Resume.pdf"
          className="inline-flex items-center gap-3 rounded-full border border-line/15 bg-surface/90 px-5 py-2.5 text-sm font-medium text-ink shadow-sm backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-surface"
        >
          <span>Resume</span>
          <Download className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>

      {/* Mobile Dropdown Pill */}
      {mobileOpen && (
        <nav
          id="mobile-pill-menu"
          aria-label="Mobile navigation"
          className="mx-auto mt-2.5 max-w-md rounded-3xl border border-line/15 bg-surface/95 p-3 shadow-md backdrop-blur-md sm:hidden"
        >
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={(e) => handleAnchorClick(e, link.id)}
                  aria-current={activeId === link.id ? "page" : undefined}
                  className={`block rounded-2xl px-4 py-2.5 text-sm transition-colors hover:bg-surface-alt/50 ${
                    activeId === link.id ? "font-semibold text-ink" : "font-medium text-ink-muted"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
