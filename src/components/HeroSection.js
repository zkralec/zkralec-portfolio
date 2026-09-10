import Reveal from './Reveal';
import ResumeLink from './ResumeLink';

function HeroSection({ hero, notes, links, resume }) {
  return (
    <section
      id="top"
      className="hero-section"
      aria-labelledby="intro-title"
      tabIndex={-1}
    >
      <div className="hero-grid" aria-hidden="true" />
      <div className="container hero-content">
        <Reveal>
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1 id="intro-title" className="hero-title" aria-label={hero.title}>
            Systems &<br />
            <span>Automation</span> Analyst<span className="accent">.</span>
          </h1>
          <p className="hero-specialization">{hero.specialization}</p>
        </Reveal>
        <div className="hero-detail-grid">
          <Reveal delay={0.06}>
            <p className="hero-description">{hero.description}</p>
            <div className="hero-actions">
              <a href={hero.primaryCta.href} className="button button-primary">
                {hero.primaryCta.label} <span aria-hidden="true">↘</span>
              </a>
              <ResumeLink resume={resume} />
            </div>
            <div className="hero-social" aria-label="Connect with Zachary">
              {links
                .filter((link) => link.label !== 'Email')
                .map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.label} <span aria-hidden="true">↗</span>
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                ))}
              <a href="#contact">
                Contact <span aria-hidden="true">↗</span>
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.12} className="hero-notes">
            {notes.map((note) => (
              <div key={note.label}>
                <p className="small-label">{note.label}</p>
                <p>{note.value}</p>
              </div>
            ))}
          </Reveal>
        </div>
        <div className="hero-footnote">
          <span>Built around real operational workflows.</span>
          <a href="#cmmc-audit">
            Explore the work <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
