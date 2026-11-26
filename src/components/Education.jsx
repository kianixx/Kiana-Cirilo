function Education() {
  return (
    <div className="mt-8">
      <div className="rounded-2xl border border-line/15 bg-surface/90 p-5 shadow-sm backdrop-blur-sm sm:p-6">
        <div className="flex items-start gap-3">
          <span
            aria-hidden="true"
            className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-cloud-periwinkle dark:bg-accent"
          />
          <div>
            <h3 className="font-display text-base font-medium text-ink sm:text-lg">
              BS Information Technology
            </h3>
            <p className="mt-1 text-sm text-ink-muted">
              University of Cebu - Lapu-Lapu and Mandaue
            </p>
            <p className="mt-0.5 text-sm text-ink-muted">2023 to expected 2027</p>
          </div>
        </div>
      </div>

      <div className="mt-4 space-y-0.5 pl-4 text-xs text-ink-muted sm:text-sm">
        <p>Consistent Dean&apos;s Lister.</p>
        <p>UCLM Academic Scholar.</p>
      </div>
    </div>
  );
}

export default Education;
