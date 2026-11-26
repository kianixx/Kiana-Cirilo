import { ArrowRight, Download } from "lucide-react";
import Education from "./Education";
import Skills from "./Skills";

const INLINE_CHIPS = ["Figma", "React.js", "C#", "SQL Server"];

function About() {
  return (
    <section id="about" className="px-5 py-20 sm:px-10 sm:py-28 lg:px-14">
      <div className="mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-12 lg:gap-14">
        {/* Left Sticky Profile Column (Lanyard ID Card + Quick Actions) */}
        <aside className="flex flex-col items-start lg:sticky lg:top-28 lg:col-span-4">
          {/* Lanyard Strap + Card */}
          <div className="relative w-full max-w-[250px] pt-5">
            {/* Hanging lanyard strap */}
            <div
              aria-hidden="true"
              className="mx-auto h-7 w-4 -rotate-3 rounded-t-md bg-cloud-periwinkle/80 dark:bg-surface-alt"
            />

            <div className="-mt-1 -rotate-2 rounded-2xl border border-line/12 bg-surface p-4 shadow-md transition-transform duration-300 hover:rotate-0">
              {/* Card slot hole */}
              <div
                aria-hidden="true"
                className="mx-auto mb-3 h-1.5 w-10 rounded-full bg-ink/15 dark:bg-ink/25"
              />

              {/* Portrait inside badge */}
              <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-cloud-lavender">
                <img
                  src="/imgs/me.png"
                  alt="Portrait of Kiana Kae Cirilo"
                  width="1056"
                  height="992"
                  loading="lazy"
                  className="h-full w-full object-cover object-[50%_18%]"
                />
              </div>

              <div className="mt-3.5 text-left">
                <p className="font-display text-base font-medium text-ink">
                  Kiana Kae Cirilo
                </p>
                <p className="mt-0.5 text-xs text-ink-muted">BSIT student</p>
                <p className="text-xs text-ink-muted">Developer × Designer</p>

                <div className="mt-3 text-[11px] leading-snug text-ink-muted/90">
                  <p>Curious by nature.</p>
                  <p>Thoughtful by design.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stacked Action Pills */}
          <div className="mt-7 flex w-full max-w-[210px] flex-col gap-3">
            <a
              href="/Kiana_Kae_Cirilo_Resume.pdf"
              download="Kiana_Kae_Cirilo_Resume.pdf"
              className="inline-flex items-center justify-between rounded-full border border-line/15 bg-surface px-5 py-2.5 text-sm font-medium text-ink shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-surface-alt/40"
            >
              <span>Resume</span>
              <Download className="h-4 w-4" aria-hidden="true" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-between rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-ink shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-hover"
            >
              <span>Get in touch</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <div className="mt-6 text-xs leading-relaxed text-ink-muted">
            <p>Developer × Designer</p>
            <p>BSIT · UCLM</p>
          </div>

          <p className="mt-5 font-display text-lg font-normal leading-snug text-ink">
            A thoughtful corner
            <br />
            of the internet.
          </p>
        </aside>

        {/* Right Editorial Column: Bio, Inline Chips, Education, Toolkit */}
        <div className="min-w-0 lg:col-span-8">
          <h2 className="font-display text-3xl font-normal tracking-tight text-ink sm:text-4xl">
            A person behind the pixels
          </h2>

          <p className="mt-5 max-w-[65ch] text-base leading-[1.8] text-ink/90 sm:text-[17px]">
            Full-Stack Developer and UI/UX Designer in training, pursuing a Bachelor of Science in
            Information Technology, with a passion for turning ideas into polished, working
            products. Comfortable working across design and code: crafting user-centered
            interfaces in Figma, building responsive front ends with React and Tailwind CSS, and
            developing database-driven applications with C# and SQL Server.
          </p>

          <div className="mt-8">
            <p className="text-xs font-medium text-ink-muted">I move between</p>
            <ul className="mt-3 flex flex-wrap gap-2.5" aria-label="Primary tools">
              {INLINE_CHIPS.map((chip) => (
                <li
                  key={chip}
                  className="rounded-full border border-line/15 bg-cloud-lavender/80 px-5 py-1.5 text-xs font-medium text-ink dark:bg-surface-alt"
                >
                  {chip}
                </li>
              ))}
            </ul>
          </div>

          <Education />

          <Skills />
        </div>
      </div>
    </section>
  );
}

export default About;
