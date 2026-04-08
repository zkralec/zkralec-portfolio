import { motion } from 'framer-motion';
import Reveal from './Reveal';
import ArchitectureDiagram from './ArchitectureDiagram';

function FeaturedProject({ project, nodes }) {
  return (
    <section id="mission-control" className="scroll-mt-32 px-6 pb-12 pt-16 lg:px-10 lg:pb-16 lg:pt-20">
      <div className="mx-auto max-w-[1320px]">
        <div className="grid gap-12 xl:grid-cols-[0.34fr_0.66fr] xl:items-start">
          <Reveal>
            <div className="pt-2">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-brand-600">{project.eyebrow}</p>
              <h2 className="mt-5 max-w-[360px] font-display text-[3rem] leading-[0.92] tracking-[-0.075em] text-ink sm:text-[3.7rem]">
                {project.title}
              </h2>
              <p className="mt-5 max-w-[360px] text-[1rem] leading-7 text-slate-700">{project.subtitle}</p>
              <p className="mt-6 max-w-[430px] text-[0.98rem] leading-7 text-slate-600">{project.description}</p>
              <p className="mt-6 text-sm font-medium text-slate-500">{project.stack.join(' / ')}</p>
            </div>
          </Reveal>

          <div className="space-y-10">
            <Reveal delay={0.06}>
              <motion.a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="block overflow-hidden rounded-[2.3rem] bg-[#0f172a] p-4 text-white shadow-[0_24px_70px_rgba(15,23,42,0.16)] lg:p-5"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.28 }}
              >
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-[0.66rem] uppercase tracking-[0.22em] text-slate-400">Mission Control</p>
                    <p className="mt-1 text-sm font-medium text-slate-100">A closer look at the interface and workflow.</p>
                  </div>
                </div>

                <div className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/5">
                  <img src={project.screenshot} alt="Mission Control case study preview" className="h-[390px] w-full object-cover opacity-92" />
                </div>
              </motion.a>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="grid gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:items-start">
                <div>
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-brand-600">Why it mattered</p>
                  <div className="mt-4 space-y-4">
                    {project.summary.map((item) => (
                      <p key={item} className="border-t border-slate-300 pt-4 text-sm leading-6 text-slate-600 first:border-t-0 first:pt-0">
                        {item}
                      </p>
                    ))}
                  </div>

                  <p className="mt-8 text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-brand-600">Key features</p>
                  <div className="mt-4 space-y-3">
                    {project.capabilities.map((item) => (
                      <p key={item} className="text-sm leading-6 text-slate-600">
                        {item}
                      </p>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="mb-6 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-brand-600">System flow</p>
                      <h3 className="mt-3 font-display text-[2rem] leading-[0.95] tracking-[-0.055em] text-ink">How the workflow moves.</h3>
                    </div>
                    <p className="max-w-md text-sm leading-6 text-slate-600">
                      The workflow moves from capture to action with a review step in the middle so the system stays visible and controllable.
                    </p>
                  </div>

                  <ArchitectureDiagram steps={nodes} />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProject;
