import Reveal from './Reveal';

function HeroSection({ hero, notes }) {
  return (
    <section id="top" className="hero-section relative overflow-hidden px-6 pb-20 pt-12 lg:px-10 lg:pb-24 lg:pt-16">
      <div className="hero-grid absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="hero-aura hero-aura-left" aria-hidden="true" />
      <div className="hero-aura hero-aura-right" aria-hidden="true" />
      <div className="hero-aura hero-aura-bottom" aria-hidden="true" />

      <div className="mx-auto max-w-[1320px]">
        <Reveal className="relative z-10">
          <div className="max-w-[980px]">
            <p className="text-[0.75rem] font-semibold uppercase tracking-[0.28em] text-brand-700">
              {hero.eyebrow}
            </p>

            <h1 className="mt-7 max-w-[940px] font-display text-[4rem] font-semibold leading-[0.88] tracking-[-0.085em] text-ink sm:text-[5.15rem] lg:text-[6.55rem] xl:text-[7rem]">
              I build AI systems,
              <span className="block pl-[0.08em] text-slate-400">automation platforms,</span>
              <span className="block">and internal tools.</span>
            </h1>

            <div className="mt-8 grid gap-8 lg:grid-cols-[0.6fr_0.4fr] lg:items-start">
              <div>
                <p className="max-w-[520px] text-[1.06rem] leading-7 text-slate-700 sm:text-[1.12rem]">
                  {hero.description}
                </p>
                <p className="mt-5 max-w-[520px] text-[1rem] leading-7 text-slate-600">
                  {hero.intro}
                </p>
              </div>

              <div className="grid gap-5 border-l border-slate-300 pl-5 lg:pl-6">
                {notes.map((note) => (
                  <div key={note.label}>
                    <p className="text-[0.66rem] uppercase tracking-[0.18em] text-slate-500">{note.label}</p>
                    <p className="mt-1 text-sm font-medium leading-6 text-ink">{note.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={hero.primaryCta.href}
                className="inline-flex items-center justify-center rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_34px_rgba(37,99,235,0.18)] transition hover:-translate-y-0.5 hover:bg-brand-700"
              >
                {hero.primaryCta.label}
              </a>
              <a
                href={hero.secondaryCta.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 shadow-[0_10px_20px_rgba(15,23,42,0.04)] transition hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-700"
              >
                {hero.secondaryCta.label}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default HeroSection;
