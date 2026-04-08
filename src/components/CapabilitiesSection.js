import Reveal from './Reveal';

function CapabilitiesSection({ areas }) {
  return (
    <section id="what-i-build" className="scroll-mt-32 px-6 py-20 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-[1320px]">
        <div className="grid gap-12 xl:grid-cols-[0.3fr_0.7fr] xl:items-start">
          <Reveal>
            <div className="pt-2">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-brand-600">What I Build</p>
              <h2 className="mt-5 max-w-[320px] font-display text-[3rem] leading-[0.9] tracking-[-0.075em] text-ink sm:text-[3.7rem]">
                The kind of work I keep coming back to.
              </h2>
            </div>
          </Reveal>

          <div className="space-y-5">
            {areas.map((area, index) => (
              <Reveal key={area.title} delay={index * 0.05}>
                <div className="grid gap-4 border-t border-slate-300 py-5 sm:grid-cols-[90px_1fr] sm:items-start">
                  <span className="text-[0.82rem] font-semibold uppercase tracking-[0.28em] text-brand-600">{area.number}</span>
                  <div className="grid gap-3 lg:grid-cols-[0.42fr_0.58fr] lg:items-start">
                    <h3 className="font-display text-[1.8rem] leading-[0.94] tracking-[-0.05em] text-ink">{area.title}</h3>
                    <p className="max-w-[560px] text-sm leading-6 text-slate-600">{area.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CapabilitiesSection;
