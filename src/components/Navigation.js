import { motion } from 'framer-motion';

function Navigation({ items }) {
  return (
    <motion.header
      className="sticky top-0 z-50"
      initial={{ y: -14, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto max-w-[1320px] px-6 pt-4 lg:px-10">
        <div className="rounded-full border border-slate-300 bg-[rgba(253,253,255,0.92)] px-5 py-3 shadow-[0_14px_34px_rgba(15,23,42,0.05)] backdrop-blur-xl">
          <div className="flex items-center justify-between gap-6">
            <a href="#top" className="flex items-center gap-3 text-slate-950 transition hover:text-brand-700">
              <span className="brand-mark" aria-hidden="true" />
              <span>
                <span className="block text-sm font-semibold tracking-[-0.03em]">Zachary Kralec</span>
                <span className="block text-[0.7rem] uppercase tracking-[0.2em] text-slate-500">Business technology, AI, and automation</span>
              </span>
            </a>

            <div className="hidden items-center gap-8 lg:flex">
              <nav className="flex items-center gap-6">
                {items.map((item) => (
                  <a key={item.href} href={item.href} className="text-sm text-slate-600 transition hover:text-slate-950">
                    {item.label}
                  </a>
                ))}
              </nav>
              <a
                href="/Zachary-Kralec-Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full bg-slate-950 px-4 py-2 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-brand-700"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}

export default Navigation;
