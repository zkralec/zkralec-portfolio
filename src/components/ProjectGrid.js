import { motion } from 'framer-motion';
import Reveal from './Reveal';

function ProjectFeature({ project }) {
  const Wrapper = project.href ? motion.a : motion.div;
  const sharedProps = project.href ? { href: project.href, target: '_blank', rel: 'noreferrer' } : {};

  return (
    <Wrapper
      {...sharedProps}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className="group block overflow-hidden rounded-[2.2rem] border border-slate-300 bg-white shadow-[0_16px_42px_rgba(15,23,42,0.06)]"
    >
      <div className="grid lg:grid-cols-[0.44fr_0.56fr] lg:items-stretch">
        <div className="flex flex-col justify-between p-7 lg:p-9">
          <div>
            <div className="flex items-center gap-3">
              {project.logo ? <img src={project.logo} alt="" className="h-10 w-10 rounded-2xl border border-brand-100 bg-white p-1.5 shadow-sm" /> : null}
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-brand-600">{project.eyebrow}</p>
            </div>
            <h3 className="mt-5 max-w-[420px] font-display text-[2.45rem] leading-[0.93] tracking-[-0.065em] text-ink lg:text-[2.85rem]">
              {project.title}
            </h3>
            <p className="mt-5 max-w-[420px] text-[1rem] leading-7 text-slate-600">{project.description}</p>
            {project.highlight ? <p className="mt-5 text-sm font-medium text-brand-700">{project.highlight}</p> : null}
            <p className="mt-6 text-sm text-slate-500">{project.tech.join(' / ')}</p>
          </div>
        </div>

        <div className="min-h-[320px] overflow-hidden bg-[#eef4ff] lg:min-h-[430px]">
          {project.gallery ? (
            <div className="flex h-full items-center justify-center gap-3 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.16),_transparent_58%),linear-gradient(180deg,#eef4ff_0%,#f7faff_100%)] px-4 py-8 sm:gap-4 sm:px-6 lg:gap-5 lg:px-8">
              {project.gallery.map((image, index) => (
                <div
                  key={image}
                  className={`aspect-[9/19] overflow-hidden rounded-[1.6rem] border border-white/90 bg-white shadow-[0_22px_46px_rgba(15,23,42,0.12)] ${
                    index === 1 ? 'w-[38%]' : 'w-[34%]'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${project.title} screen ${index + 1}`}
                    className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-[1.02]"
                  />
                </div>
              ))}
          </div>
          ) : (
            <img src={project.image} alt={project.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
          )}
        </div>
      </div>
    </Wrapper>
  );
}

function ProjectCard({ project, dark = false }) {
  const Wrapper = project.href ? motion.a : motion.div;
  const sharedProps = project.href ? { href: project.href, target: '_blank', rel: 'noreferrer' } : {};

  return (
    <Wrapper
      {...sharedProps}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className={dark ? 'group flex h-full flex-col rounded-[1.9rem] bg-[#0f172a] p-6 text-white shadow-[0_22px_56px_rgba(15,23,42,0.14)]' : 'group flex h-full flex-col rounded-[1.9rem] border border-slate-300 bg-white p-6 shadow-[0_12px_30px_rgba(15,23,42,0.05)]'}
    >
      <p className={dark ? 'text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-brand-300' : 'text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-brand-600'}>{project.eyebrow}</p>
      <h3 className={dark ? 'mt-4 font-display text-[1.86rem] leading-[0.95] tracking-[-0.05em] text-white' : 'mt-4 font-display text-[1.72rem] leading-[0.95] tracking-[-0.05em] text-ink'}>
        {project.title}
      </h3>
      <p className={dark ? 'mt-3 text-sm leading-6 text-slate-300' : 'mt-3 text-sm leading-6 text-slate-600'}>{project.description}</p>
      {project.highlight ? (
        <p className={dark ? 'mt-4 text-sm font-medium text-brand-300' : 'mt-4 text-sm font-medium text-brand-700'}>{project.highlight}</p>
      ) : null}
      <p className={dark ? 'mt-6 text-sm text-slate-400' : 'mt-6 text-sm text-slate-500'}>{project.tech.join(' / ')}</p>
      <p className={dark ? 'mt-auto pt-8 text-sm font-medium text-brand-300' : 'mt-auto pt-8 text-sm font-medium text-slate-500'}>
        {project.href ? 'View repository' : project.note}
      </p>
    </Wrapper>
  );
}

function MediaProject({ project }) {
  const Wrapper = project.href ? motion.a : motion.div;
  const sharedProps = project.href ? { href: project.href, target: '_blank', rel: 'noreferrer' } : {};

  return (
    <Wrapper
      {...sharedProps}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className="group block overflow-hidden rounded-[1.9rem] border border-slate-300 bg-[#eef4ff] shadow-[0_12px_30px_rgba(15,23,42,0.06)]"
    >
      <div className="overflow-hidden border-b border-slate-300">
        {project.gallery ? (
          <div className="grid h-[320px] grid-cols-2 gap-4 bg-[linear-gradient(180deg,#e9f1ff_0%,#f7faff_100%)] p-5">
            {project.gallery.map((image, index) => (
              <div
                key={image}
                className={`overflow-hidden rounded-[1.5rem] border border-white/80 bg-white shadow-[0_18px_36px_rgba(15,23,42,0.08)] ${
                  index === 1 ? 'translate-y-5' : ''
                }`}
              >
                <img src={image} alt={`${project.title} screen ${index + 1}`} className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.02]" />
              </div>
            ))}
          </div>
        ) : (
          <img src={project.image} alt={project.title} className="h-[280px] w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
        )}
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3">
          {project.logo ? <img src={project.logo} alt="" className="h-9 w-9 rounded-xl border border-brand-100 bg-white p-1.5 shadow-sm" /> : null}
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-brand-600">{project.eyebrow}</p>
        </div>
        <h3 className="mt-3 font-display text-[1.72rem] leading-[0.96] tracking-[-0.05em] text-ink">{project.title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-600">{project.description}</p>
        {project.highlight ? <p className="mt-4 text-sm font-medium text-brand-700">{project.highlight}</p> : null}
        <p className="mt-6 text-sm text-slate-500">{project.tech.join(' / ')}</p>
      </div>
    </Wrapper>
  );
}

function ProjectGrid({ projects }) {
  const [sprintStart, interviewPlatform, security, openVpn, strideLab, fakeNews] = projects;

  return (
    <section id="selected-work" className="scroll-mt-32 px-6 py-24 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-[1320px]">
        <div className="grid gap-14 xl:grid-cols-[0.26fr_0.74fr] xl:items-start">
          <Reveal>
            <div className="pt-2">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-brand-600">Selected Work</p>
              <h2 className="mt-5 max-w-[300px] font-display text-[3rem] leading-[0.9] tracking-[-0.075em] text-ink sm:text-[3.7rem]">
                Projects I’m most proud of.
              </h2>
              <p className="mt-5 max-w-[320px] text-[0.98rem] leading-7 text-slate-600">
                A mix of AI products, internal tooling, and systems work that reflects the kind of software I like building.
              </p>
            </div>
          </Reveal>

          <div className="space-y-7 lg:space-y-9">
            <Reveal>
              <ProjectFeature project={sprintStart} />
            </Reveal>

            <div className="grid gap-7 xl:grid-cols-[0.52fr_0.48fr]">
              <Reveal delay={0.04}>
                <ProjectCard project={interviewPlatform} dark />
              </Reveal>
              <Reveal delay={0.08}>
                <div className="grid h-full gap-6">
                  <div>
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-brand-600">Professional work</p>
                    <p className="mt-4 max-w-[420px] text-[1rem] leading-7 text-slate-600">
                      Some of the work I care most about lives in internal systems, rollout tooling, and operational automation, even when it can’t be shown as a public product demo.
                    </p>
                  </div>
                  <ProjectCard project={security} />
                </div>
              </Reveal>
            </div>

            <div className="grid gap-7 xl:grid-cols-[0.34fr_0.32fr_0.34fr] xl:items-start">
              <Reveal delay={0.08}>
                <ProjectCard project={openVpn} />
              </Reveal>
              <Reveal delay={0.1} className="xl:translate-y-8">
                <MediaProject project={strideLab} />
              </Reveal>
              <Reveal delay={0.12}>
                <ProjectCard project={fakeNews} />
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectGrid;
