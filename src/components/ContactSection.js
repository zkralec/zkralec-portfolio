import Reveal from './Reveal';

function ContactSection({ links }) {
  return (
    <section id="contact" className="scroll-mt-32 px-6 pb-24 pt-16 lg:px-10 lg:pb-28 lg:pt-20">
      <div className="mx-auto max-w-[1320px]">
        <Reveal>
          <div className="grid gap-10 border-t border-slate-300 pt-10 lg:grid-cols-[0.56fr_0.44fr] lg:items-start">
            <div>
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-brand-600">Contact</p>
              <h2 className="mt-5 max-w-[700px] font-display text-[2.9rem] leading-[0.9] tracking-[-0.075em] text-ink sm:text-[3.6rem] lg:text-[4rem]">
                I’m currently looking for business technology roles with a focus on AI, automation, and internal systems.
              </h2>
              <p className="mt-6 max-w-[560px] text-[1rem] leading-7 text-slate-600">
                I’m especially interested in work that connects AI systems, automation, internal tools, and real operating workflows. If that sounds relevant to your team, feel free to reach out.
              </p>
            </div>

            <div className="space-y-3 lg:pt-3">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="flex items-center justify-between border-b border-slate-300 py-4 text-sm text-slate-700 transition hover:text-brand-700"
                >
                  <span className="font-medium text-slate-500">{link.label}</span>
                  <span className="font-semibold">{link.value}</span>
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default ContactSection;
