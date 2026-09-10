import Reveal from './Reveal';
import ResumeLink from './ResumeLink';

function ContactSection({ links, resume }) {
  return (
    <section
      id="contact"
      className="section contact-section"
      aria-labelledby="contact-title"
      tabIndex={-1}
    >
      <div className="container section-split">
        <Reveal>
          <p className="eyebrow">06 / Contact</p>
          <h2 id="contact-title">
            Let’s make IT
            <br />
            <span className="muted">work better.</span>
          </h2>
          <p className="section-description">
            I’m interested in systems automation, infrastructure and cloud
            operations, systems administration, security operations, and
            Microsoft 365 / Power Platform roles.
          </p>
          <p className="contact-invitation">
            If your team needs someone who can troubleshoot the workflow and
            build the tools around it, let’s talk.
          </p>
          <ResumeLink resume={resume} />
          {!resume.href && (
            <p className="resume-note">
              Resume download is being updated. Please email me for a current
              copy.
            </p>
          )}
        </Reveal>
        <Reveal className="contact-links">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
            >
              <span className="small-label">{link.label}</span>
              <span>{link.value}</span>
              <span aria-hidden="true">↗</span>
              {link.href.startsWith('http') && (
                <span className="sr-only"> (opens in a new tab)</span>
              )}
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

export default ContactSection;
