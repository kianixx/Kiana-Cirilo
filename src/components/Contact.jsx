import { Github, Instagram, Linkedin, Mail } from "lucide-react";

function Contact() {
  return (
    <footer id="contact" className="pt-16 sm:pt-24">
      <div className="mx-auto max-w-4xl px-5 pb-16 text-center sm:px-8 sm:pb-20">
        <h2 className="font-display text-3xl font-normal tracking-tight text-ink sm:text-4xl">
          Let&apos;s Work Together
        </h2>

        <p className="mx-auto mt-3 max-w-md font-sans text-sm leading-relaxed text-ink-muted sm:text-base">
          I&apos;m looking for an opportunity to learn, contribute, and grow with a great team.
        </p>

        <div className="mt-8 flex items-center justify-center gap-3.5">
          <a
            href="https://github.com/kianixx"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Kiana's GitHub profile"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line/15 bg-surface/70 text-ink-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/60 hover:text-ink"
          >
            <Github className="h-4 w-4" aria-hidden="true" />
          </a>

          <a
            href="https://www.linkedin.com/in/kiana-kae-cirilo-a621833b7"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Kiana's LinkedIn profile"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line/15 bg-surface/70 text-ink-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/60 hover:text-ink"
          >
            <Linkedin className="h-4 w-4" aria-hidden="true" />
          </a>

          <a
            href="mailto:kianacirilo23@gmail.com"
            aria-label="Email Kiana at kianacirilo23@gmail.com"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line/15 bg-surface/70 text-ink-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/60 hover:text-ink"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
          </a>

          <a
            href="https://www.instagram.com/kyanaahhh"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Kiana's Instagram profile"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line/15 bg-surface/70 text-ink-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/60 hover:text-ink"
          >
            <Instagram className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>

      {/* Full-width bottom copyright bar */}
      <div className="border-t border-line/12 px-5 py-7 text-center">
        <p className="font-sans text-xs text-ink-muted sm:text-sm">
          © 2026 Kiana Kae Cirilo.
        </p>
      </div>
    </footer>
  );
}

export default Contact;
