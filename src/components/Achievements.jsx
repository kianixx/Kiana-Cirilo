import { useCallback, useEffect, useRef, useState } from "react";
import {
  Award,
  Camera,
  ChevronLeft,
  ChevronRight,
  Construction,
  FileText,
  Search,
} from "lucide-react";

const MILESTONES = [
  {
    id: "ccs-days-uiux",
    placement: "2nd Place",
    year: "2026",
    title: "UCLM CCS Days: UI/UX Competition",
    organization: "University of Cebu - Lapu-Lapu and Mandaue",
    description:
      "Awarded 2nd Place for designing Chew!, an AI-powered smart meal planner UX case study and prototype.",
    image: "/imgs/milestones/ccs-days-2026.jpg",
    imageAlt: "UCLM CCS Days UI/UX Competition 2026 award photo",
  },
  {
    id: "ict-congress-quiz",
    placement: "2nd Place",
    year: "2024",
    title: "10th ICT Congress: General Information Quiz Bowl",
    organization: "University of Cebu",
    description:
      "Placed 2nd in the General Information Quiz Bowl during the 10th ICT Congress.",
    image: "/imgs/milestones/ict-congress-2024.jpg",
    imageAlt: "10th ICT Congress General Information Quiz Bowl 2024 photo",
  },
];

const CERTIFICATIONS = [
  {
    id: "topcit",
    title: "Test of Practical Competency in IT (TOPCIT) Level 2 Passer",
    issuer: "TOPCIT",
    date: "Level 2 Passer",
    featured: true,
    image: "/imgs/certs/topcit-level-2.png",
    pdf: "/imgs/certs/topcit.pdf",
  },
  {
    id: "copilot-mcp",
    title: "Practical AI Tool Utilization With Copilot CLI and MCP Servers",
    issuer: "Workshop Credential",
    date: "Certificate",
    featured: false,
    image: "/imgs/certs/copilot-cli-mcp.png",
    pdf: null,
  },
  {
    id: "ibm-cloud",
    title: "IBM SkillsBuild: Cloud Computing Fundamentals",
    issuer: "IBM SkillsBuild",
    date: "Certificate",
    featured: false,
    image: "/imgs/certs/ibm-cloud.png",
    pdf: null,
  },
  {
    id: "ibm-data",
    title: "IBM SkillsBuild: Data Fundamentals",
    issuer: "IBM SkillsBuild",
    date: "Certificate",
    featured: false,
    image: "/imgs/certs/ibm-data.png",
    pdf: null,
  },
  {
    id: "paytaca",
    title: "Paytaca Blockchain Technology Workshop",
    issuer: "Paytaca",
    date: "2025",
    featured: false,
    image: "/imgs/certs/paytaca-2025.png",
    pdf: null,
  },
  {
    id: "ccs-csharp-net",
    title: "TECH Talk: C#.NET Programming",
    issuer: "University of Cebu - Lapu-Lapu and Mandaue",
    date: "2025",
    featured: false,
    image: "/imgs/certs/c%23.net.png",
    pdf: null,
  },
  {
    id: "ccs-networking",
    title: "TECH Talk: Networking",
    issuer: "University of Cebu - Lapu-Lapu and Mandaue",
    date: "2025",
    featured: false,
    image: "/imgs/certs/networking.png",
    pdf: null,
  },
];

function MilestoneCard({ milestone }) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line/15 bg-surface shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/55 hover:shadow-md">
      <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-line/10 bg-gradient-to-br from-cloud-pink/70 via-cloud-soft to-cloud-lavender/70 dark:from-[#3C2946]/75 dark:via-[#17182E] dark:to-[#25245A]/75">
        {!imgFailed && milestone.image ? (
          <img
            src={milestone.image}
            alt={milestone.imageAlt}
            width="800"
            height="500"
            loading="lazy"
            onError={() => setImgFailed(true)}
            className="h-full w-full object-cover object-[50%_20%] transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 px-6 text-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-line/15 bg-surface/85 text-ink-muted shadow-sm">
              <Camera className="h-4 w-4" aria-hidden="true" />
            </div>
            <span className="text-xs font-medium text-ink-muted">
              Competition photo placeholder
            </span>
          </div>
        )}

        <span className="absolute left-3.5 top-3.5 inline-flex items-center gap-1.5 rounded-full border border-white/70 bg-white/85 px-3 py-1 text-xs font-semibold text-[#272447] shadow-sm backdrop-blur-md dark:border-[#A5B4FF]/25 dark:bg-[#17182E]/85 dark:text-[#F4F5FF]">
          <Award className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
          <span>{milestone.placement}</span>
        </span>

        <span className="absolute right-3.5 top-3.5 rounded-full border border-line/10 bg-surface/85 px-2.5 py-1 text-[11px] font-medium text-ink-muted backdrop-blur-md">
          {milestone.year}
        </span>
      </div>

      <div className="flex flex-1 flex-col justify-between p-5">
        <div>
          <p className="text-xs font-medium text-ink-muted">{milestone.organization}</p>
          <h3 className="mt-1.5 font-display text-lg font-semibold leading-snug text-ink">
            {milestone.title}
          </h3>
          <p className="mt-2.5 text-sm leading-relaxed text-ink-muted">
            {milestone.description}
          </p>
        </div>
      </div>
    </article>
  );
}

function CertificateGraphic({ cert, missing, onMissing, isModal = false }) {
  if (missing) {
    return (
      <div
        className={`flex w-full flex-col items-center justify-center gap-2.5 bg-gradient-to-br from-cloud-blue/55 via-cloud-soft to-cloud-lavender/55 p-4 text-center dark:from-[#20334B]/70 dark:via-[#17182E] dark:to-[#25245A]/70 ${
          isModal ? "min-h-[300px] rounded-xl" : "aspect-[4/3]"
        }`}
      >
        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-line/15 bg-surface/90 text-ink-muted shadow-sm">
          <Construction className="h-5 w-5" aria-hidden="true" />
        </div>
        <span className="rounded-full border border-line/15 bg-surface/85 px-3 py-1 text-[11px] font-medium text-ink-muted">
          Under construction
        </span>
      </div>
    );
  }

  return (
    <img
      src={cert.image}
      alt={cert.title}
      width="800"
      height="600"
      loading="lazy"
      onError={() => onMissing(cert.id)}
      className={
        isModal
          ? "max-h-[82vh] w-full rounded-xl bg-white object-contain"
          : "aspect-[4/3] w-full bg-white object-contain p-1.5 transition-transform duration-500 group-hover:scale-[1.03]"
      }
    />
  );
}

function CertificateSlide({ cert, idx, missing, onMissing, onOpen, isDuplicate = false }) {
  return (
    <div className="w-[260px] shrink-0 sm:w-[272px]">
      <div className="group relative overflow-hidden rounded-xl border border-line/15 bg-surface shadow-sm transition-shadow duration-300 hover:shadow-md">
        <CertificateGraphic cert={cert} missing={missing} onMissing={onMissing} />

        {/* Hover / Focus Action Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-ink/30 opacity-0 backdrop-blur-[2px] transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100 dark:bg-black/50">
          <button
            type="button"
            tabIndex={isDuplicate ? -1 : 0}
            onClick={(e) => onOpen(idx, e.currentTarget)}
            aria-label={`View ${cert.title}`}
            className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-[#272447] shadow-md transition-transform duration-150 hover:scale-105"
          >
            <Search className="h-3.5 w-3.5" aria-hidden="true" />
            <span>View</span>
          </button>

          {cert.pdf && (
            <a
              href={cert.pdf}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={isDuplicate ? -1 : 0}
              aria-label={`View PDF for ${cert.title}`}
              className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-1.5 text-xs font-semibold text-accent-ink shadow-md transition-transform duration-150 hover:scale-105"
            >
              <FileText className="h-3.5 w-3.5" aria-hidden="true" />
              <span>View PDF</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function Achievements() {
  const [reducedMotion, setReducedMotion] = useState(() => {
    if (typeof window === "undefined" || !window.matchMedia) return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });
  const [missingCertImgs, setMissingCertImgs] = useState({});
  const [modalIdx, setModalIdx] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  const scrollerRef = useRef(null);
  const returnFocusRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = (event) => setReducedMotion(event.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Continuous seamless marquee scroll loop (pauses on hover, focus, hidden tab, or reduced motion)
  useEffect(() => {
    if (reducedMotion || isPaused) return;
    const scroller = scrollerRef.current;
    if (!scroller) return;

    let rafId = 0;
    let carry = 0;
    let lastTime = performance.now();

    const step = (now) => {
      const dt = Math.min(48, now - lastTime);
      lastTime = now;

      if (document.visibilityState === "visible") {
        const halfWidth = scroller.scrollWidth / 2;
        if (halfWidth > 0) {
          carry += dt * 0.045;
          if (carry >= 1) {
            const delta = Math.floor(carry);
            carry -= delta;
            scroller.scrollLeft += delta;
            if (scroller.scrollLeft >= halfWidth) {
              scroller.scrollLeft -= halfWidth;
            }
          }
        }
      }
      rafId = window.requestAnimationFrame(step);
    };

    rafId = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(rafId);
  }, [isPaused, reducedMotion]);

  const nudgeCarousel = (direction) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const stepAmount = 290;
    const halfWidth = scroller.scrollWidth / 2;

    if (direction < 0 && scroller.scrollLeft < stepAmount && halfWidth > 0) {
      scroller.scrollLeft += halfWidth;
    } else if (direction > 0 && scroller.scrollLeft >= halfWidth && halfWidth > 0) {
      scroller.scrollLeft -= halfWidth;
    }

    scroller.scrollBy({
      left: direction * stepAmount,
      behavior: reducedMotion ? "auto" : "smooth",
    });
  };

  const markMissing = useCallback((id) => {
    setMissingCertImgs((prev) => (prev[id] ? prev : { ...prev, [id]: true }));
  }, []);

  const openModal = useCallback((idx, triggerEl) => {
    returnFocusRef.current = triggerEl;
    setModalIdx(idx);
  }, []);

  const closeModal = useCallback(() => {
    setModalIdx(null);
    returnFocusRef.current?.focus();
  }, []);

  useEffect(() => {
    if (modalIdx === null) return;
    const onKeyDown = (event) => {
      if (event.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [closeModal, modalIdx]);

  const activeCert = modalIdx !== null ? CERTIFICATIONS[modalIdx] : null;

  return (
    <section id="achievements" className="px-5 py-20 sm:px-10 sm:py-28 lg:px-14">
      <div className="mx-auto max-w-6xl">
        {/* Part 1: Achievements and Milestones (Competition Wins) */}
        <div className="text-center">
          <h2 className="font-display text-3xl font-normal tracking-tight text-ink sm:text-4xl">
            Achievements and Milestones
          </h2>
          <p className="mt-2 text-sm text-ink-muted">
            Competition wins and recognitions along the way.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
          {MILESTONES.map((milestone) => (
            <MilestoneCard key={milestone.id} milestone={milestone} />
          ))}
        </div>

        {/* Part 2: My Certifications Continuous Carousel with Left/Right Controls */}
        <div className="mt-24">
          <div className="text-center">
            <h2 className="font-display text-3xl font-normal tracking-tight text-ink sm:text-4xl">
              My Certifications
            </h2>
            <p className="mt-2 text-sm text-ink-muted">
              Hover to pause and select any certificate to view or open its PDF.
            </p>
          </div>

          <div
            aria-label="Certifications"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocus={() => setIsPaused(true)}
            onBlur={() => setIsPaused(false)}
            className="relative mt-10 px-6 sm:px-8"
          >
            <button
              type="button"
              onClick={() => nudgeCarousel(-1)}
              aria-label="Scroll certifications left"
              className="absolute left-0 top-1/2 z-20 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-line/15 bg-surface/95 text-ink shadow-md backdrop-blur-sm transition-transform hover:scale-105"
            >
              <ChevronLeft className="h-4 w-4" aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={() => nudgeCarousel(1)}
              aria-label="Scroll certifications right"
              className="absolute right-0 top-1/2 z-20 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-line/15 bg-surface/95 text-ink shadow-md backdrop-blur-sm transition-transform hover:scale-105"
            >
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </button>

            {reducedMotion ? (
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {CERTIFICATIONS.map((cert, idx) => (
                  <CertificateSlide
                    key={cert.id}
                    cert={cert}
                    idx={idx}
                    missing={Boolean(missingCertImgs[cert.id])}
                    onMissing={markMissing}
                    onOpen={openModal}
                  />
                ))}
              </div>
            ) : (
              <div
                ref={scrollerRef}
                className="marquee-mask overflow-x-auto py-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              >
                <div className="flex w-max items-stretch gap-5 px-2">
                  {CERTIFICATIONS.map((cert, idx) => (
                    <CertificateSlide
                      key={`a-${cert.id}`}
                      cert={cert}
                      idx={idx}
                      missing={Boolean(missingCertImgs[cert.id])}
                      onMissing={markMissing}
                      onOpen={openModal}
                    />
                  ))}
                  {CERTIFICATIONS.map((cert, idx) => (
                    <div key={`b-${cert.id}`} aria-hidden="true">
                      <CertificateSlide
                        cert={cert}
                        idx={idx}
                        missing={Boolean(missingCertImgs[cert.id])}
                        onMissing={markMissing}
                        onOpen={openModal}
                        isDuplicate
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Picture-Only Lightbox Modal */}
      {activeCert && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeCert.title}
          onClick={closeModal}
          className="panel-fade fixed inset-0 z-50 flex cursor-zoom-out items-center justify-center bg-[#0E0F1E]/70 p-4 backdrop-blur-sm sm:p-8"
        >
          <button
            type="button"
            onClick={closeModal}
            className="sr-only"
            aria-label="Close certificate preview"
          >
            Close
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-3xl overflow-hidden rounded-2xl shadow-2xl"
          >
            <CertificateGraphic
              cert={activeCert}
              missing={Boolean(missingCertImgs[activeCert.id])}
              onMissing={markMissing}
              isModal
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default Achievements;
