function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const alignClass = align === 'center' ? 'mx-auto text-center' : '';

  return (
    <div className={`max-w-3xl ${alignClass}`}>
      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.36em] text-brand-600">{eyebrow}</p>
      <h2 className="mt-5 font-display text-[2.45rem] font-semibold leading-[0.92] tracking-[-0.065em] text-ink sm:text-[3.15rem] lg:text-[3.95rem]">
        {title}
      </h2>
      {description ? <p className="mt-5 max-w-2xl text-[1rem] leading-7 text-slate-600">{description}</p> : null}
    </div>
  );
}

export default SectionHeading;
