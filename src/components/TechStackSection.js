import Reveal from './Reveal';

function TechStackSection({ categories }) {
  return (
    <section id="stack" className="scroll-mt-32 px-6 py-20 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-[1320px]">
        <div className="grid gap-12 xl:grid-cols-[0.28fr_0.72fr] xl:items-start">
          <Reveal>
            <div className="pt-2">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-brand-600">Stack</p>
              <h2 className="mt-5 max-w-[300px] font-display text-[3rem] leading-[0.9] tracking-[-0.075em] text-ink sm:text-[3.6rem]">
                The tools I use most often.
              </h2>
              <p className="mt-5 max-w-[320px] text-sm leading-6 text-slate-600">
                A focused stack across backend services, product work, AI workflows, and infrastructure automation.
              </p>
            </div>
          </Reveal>

          <div className="space-y-6">
            {categories.map((group, index) => (
              <Reveal key={group.category} delay={index * 0.04}>
                <div className={`grid gap-4 border-t border-slate-300 pt-5 lg:grid-cols-[180px_1fr] ${index === categories.length - 1 ? 'pb-0' : ''}`}>
                  <div>
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-brand-600">{group.category}</p>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {group.items.map((item) => (
                      <span key={item} className="rounded-full border border-slate-300 bg-white px-3.5 py-1.5 text-sm text-slate-600">
                        {item}
                      </span>
                    ))}
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

export default TechStackSection;
