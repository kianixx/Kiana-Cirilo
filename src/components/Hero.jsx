import { useEffect, useRef } from "react";
import { ArrowDown, ArrowRight, Github, Instagram, Linkedin, Mail } from "lucide-react";

function Hero() {
  const cloudBackRef = useRef(null);
  const cloudFrontRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia?.("(pointer: fine)").matches;
    if (reduced || !finePointer) return;

    let rafId = 0;
    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };

    const onMove = (event) => {
      target.x = (event.clientX / window.innerWidth - 0.5) * 2;
      target.y = (event.clientY / window.innerHeight - 0.5) * 2;
    };

    const tick = () => {
      current.x += (target.x - current.x) * 0.06;
      current.y += (target.y - current.y) * 0.06;

      if (cloudBackRef.current) {
        cloudBackRef.current.style.transform = `translate3d(${current.x * 12}px, ${current.y * 8}px, 0)`;
      }
      if (cloudFrontRef.current) {
        cloudFrontRef.current.style.transform = `translate3d(${current.x * 22}px, ${current.y * 14}px, 0)`;
      }
      rafId = window.requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    rafId = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col justify-between overflow-hidden bg-canvas px-5 pb-8 pt-28 dark:bg-[#232638] sm:px-10 sm:pb-10 sm:pt-32 lg:px-14"
    >
      {/* Subtle architectural vertical grid lines */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to right, rgb(var(--border-line)) 0 1px, transparent 1px 76px)",
        }}
      />

      {/* Organic Cloud Background Layer 1 (Back) */}
      <div
        ref={cloudBackRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {/* Top-left atmospheric wash */}
        <svg
          viewBox="0 0 800 620"
          className="cloud-drift-slow absolute -left-24 -top-12 w-[78vw] max-w-[680px] text-cloud-blue"
          fill="currentColor"
        >
          <path d="M90 120C180 25 360 10 470 95C570 170 660 220 620 350C585 465 445 535 305 565C165 595 25 530 15 390C5 255 10 205 90 120Z" />
        </svg>

        {/* Top-center lavender cloud wisp */}
        <svg
          viewBox="0 0 360 260"
          className="cloud-drift-reverse absolute -top-8 left-[33%] w-56 text-cloud-lavender/85 sm:w-72"
          fill="currentColor"
        >
          <path d="M62 28C118 0 212 18 265 62C312 100 326 175 268 214C212 252 135 234 95 190C52 142 8 56 62 28Z" />
        </svg>
      </div>

      {/* Organic Cloud Background Layer 2 (Front) */}
      <div
        ref={cloudFrontRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {/* Left soft inner highlight */}
        <svg
          viewBox="0 0 560 520"
          className="cloud-drift-reverse absolute -left-16 top-16 w-[62vw] max-w-[480px] text-cloud-soft/75"
          fill="currentColor"
        >
          <path d="M55 95C130 22 255 18 320 95C375 160 475 195 455 305C435 415 315 480 185 485C65 490 5 395 10 280C15 170 5 145 55 95Z" />
        </svg>

        {/* Right bottom blush & lavender sweeping clouds */}
        <svg
          viewBox="0 0 760 460"
          className="cloud-drift-slow absolute -bottom-12 -right-12 w-[88vw] max-w-[740px] text-cloud-pink/90"
          fill="currentColor"
        >
          <path d="M540 35C635 15 735 72 748 165C760 260 695 360 570 400C430 445 210 435 90 385C10 352 45 280 160 268C295 254 395 220 430 140C455 82 475 48 540 35Z" />
        </svg>

        <svg
          viewBox="0 0 580 300"
          className="cloud-drift-reverse absolute -bottom-16 right-[4%] w-[64vw] max-w-[520px] text-cloud-lavender/75"
          fill="currentColor"
        >
          <path d="M40 210C115 160 220 155 315 125C395 100 470 25 545 55C605 80 575 235 495 275C405 320 115 310 35 270C0 252 10 230 40 210Z" />
        </svg>
      </div>

      {/* Main Hero Grid */}
      <div className="relative z-10 mx-auto my-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-12 lg:gap-8">
        {/* Left Column */}
        <div className="lg:col-span-6">
          <p className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-muted sm:text-base">
            <span>Hi, I&apos;m Kiana.</span>
            <span
              aria-hidden="true"
              className="cursor-blink inline-block h-4 w-[1.5px] bg-ink-muted"
            />
          </p>

          <h1 className="mt-5 font-display text-[2.5rem] font-normal leading-[1.08] tracking-[-0.02em] text-ink sm:text-5xl lg:text-[3.75rem]">
            Thoughtful design.
            <br />
            Purposeful code.
          </h1>

          <p className="mt-7 font-display text-xl font-normal text-ink sm:text-2xl">
            Kiana Kae Cirilo
          </p>

          <p className="mt-3 max-w-md text-base leading-relaxed text-ink-muted sm:text-[17px]">
            Graduating BSIT student seeking
            <br />
            Full-Stack Developer &amp; UI/UX Design internships.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <a
              href="#projects"
              className="inline-flex items-center gap-3 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-ink shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-hover hover:shadow"
            >
              <span>View my work</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-3 rounded-full border border-line/15 bg-surface px-6 py-3 text-sm font-medium text-ink shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-surface-alt/40"
            >
              <span>Get in touch</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Right Column: Layered Blob Portrait + Orbiting Icons */}
        <div className="flex flex-col items-center lg:col-span-6">
          <div className="relative flex w-full max-w-[310px] items-center justify-center sm:max-w-[370px]">
            {/* Faint concentric orbital rings */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute z-0 h-[118%] w-[118%] rounded-full border border-line/[0.07]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute z-0 h-[138%] w-[138%] rounded-full border border-line/[0.05]"
            />

            {/* Diffused colored glow shadows placed behind the portrait container (z-0) */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-8 top-[10%] z-0 h-24 w-24 rounded-full bg-indigo-400/35 blur-2xl dark:bg-indigo-400/25"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-8 bottom-[10%] z-0 h-24 w-24 rounded-full bg-[#F0847B]/40 blur-2xl dark:bg-[#F0847B]/25"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-8 top-[12%] z-0 h-24 w-24 rounded-full bg-pink-400/35 blur-2xl dark:bg-pink-400/25"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-8 bottom-[8%] z-0 h-24 w-24 rounded-full bg-sky-400/40 blur-2xl dark:bg-sky-400/25"
            />

            {/* Tilted backing layers */}
            <div
              aria-hidden="true"
              className="absolute -left-2 top-3 z-10 h-[88%] w-[88%] -rotate-6 rounded-[2.25rem] bg-cloud-pink shadow-sm transition-colors duration-300"
            />
            <div
              aria-hidden="true"
              className="absolute -right-2 bottom-2 z-10 h-[88%] w-[88%] rotate-6 rounded-[2.25rem] bg-cloud-periwinkle/85 shadow-sm transition-colors duration-300"
            />

            {/* Foreground asymmetric squircle-blob portrait frame */}
            <div className="float-gentle relative z-10 aspect-square w-[84%] overflow-hidden rounded-bl-[2.25rem] rounded-br-[42%] rounded-tl-[42%] rounded-tr-[2.25rem] border-[3px] border-white bg-cloud-lavender shadow-md dark:border-[#121426]">
              <img
                src="/imgs/me.png"
                alt="Portrait of Kiana Kae Cirilo"
                width="1056"
                height="992"
                className="h-full w-full object-cover object-[50%_18%]"
              />
            </div>

            {/* 4 Orbiting Social Icon Buttons (z-20) */}
            <a
              href="https://github.com/kianixx"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Kiana's GitHub profile"
              className="absolute -left-2 top-[16%] z-20 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/90 bg-surface text-ink shadow-md transition-transform duration-200 hover:-translate-y-0.5 hover:scale-105 dark:border-[#A5B4FF]/25"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
            </a>

            <a
              href="mailto:kianacirilo23@gmail.com"
              aria-label="Email Kiana at kianacirilo23@gmail.com"
              className="absolute -left-3 bottom-[16%] z-20 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/90 bg-surface text-[#E57266] shadow-md transition-transform duration-200 hover:-translate-y-0.5 hover:scale-105 dark:border-[#A5B4FF]/25 dark:text-[#F0847B]"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
            </a>

            <a
              href="https://www.instagram.com/kyanaahhh"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Kiana's Instagram profile"
              className="absolute -right-2 top-[18%] z-20 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/90 bg-surface text-[#E1306C] shadow-md transition-transform duration-200 hover:-translate-y-0.5 hover:scale-105 dark:border-[#A5B4FF]/25 dark:text-[#F472B6]"
            >
              <Instagram className="h-4 w-4" aria-hidden="true" />
            </a>

            <a
              href="https://www.linkedin.com/in/kiana-kae-cirilo-a621833b7"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Kiana's LinkedIn profile"
              className="absolute -right-2 bottom-[14%] z-20 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/90 bg-surface text-[#0A66C2] shadow-md transition-transform duration-200 hover:-translate-y-0.5 hover:scale-105 dark:border-[#A5B4FF]/25 dark:text-[#60A5FA]"
            >
              <Linkedin className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <p className="mt-7 text-xs font-medium tracking-wide text-ink-muted">
            Design ↔ Development
          </p>
        </div>
      </div>

      {/* Bottom Scroll Hint */}
      <div className="relative z-10 mx-auto mt-10 w-full max-w-6xl">
        <a
          href="#about"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-ink-muted transition-colors hover:text-ink"
        >
          <span>A little about me, and what I&apos;m building</span>
          <ArrowDown className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}

export default Hero;
