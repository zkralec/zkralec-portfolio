import Reveal from './Reveal';

function ArchitectureDiagram({ steps }) {
  return (
    <div className="grid gap-5 lg:grid-cols-4">
      {steps.map((step, index) => (
        <Reveal key={step.step} delay={index * 0.05}>
          <div className="border-t border-slate-300 pt-4">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-brand-600">{step.step}</p>
            <h3 className="mt-3 font-display text-[1.3rem] tracking-[-0.04em] text-ink">{step.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">{step.detail}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export default ArchitectureDiagram;
