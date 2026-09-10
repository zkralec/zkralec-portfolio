import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

function CapabilitiesSection({ areas }) {
  return (
    <section
      id="professional-systems"
      className="section"
      aria-labelledby="systems-title"
      tabIndex={-1}
    >
      <div className="container">
        <Reveal>
          <SectionHeading
            id="systems-title"
            eyebrow="02 / Professional systems"
            title="Automation in day-to-day IT."
            description="Work built around the details that matter in operations: ownership, repeatability, validation, and a record of what changed."
          />
        </Reveal>
        <div className="professional-list">
          {areas.map((area) => (
            <Reveal key={area.title}>
              <article className="professional-project">
                <div className="project-number" aria-hidden="true">
                  {area.number}
                </div>
                <div className="professional-summary">
                  <p className="status-text">{area.status}</p>
                  <h3>{area.title}</h3>
                  <p>{area.description}</p>
                  <p className="technology-list">{area.tech.join(' / ')}</p>
                </div>
                <div className="professional-details">
                  <dl>
                    {area.details.map((detail) => (
                      <div key={detail.title}>
                        <dt>{detail.title}</dt>
                        <dd>{detail.text}</dd>
                      </div>
                    ))}
                  </dl>
                  <p className="outcome">{area.outcome}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CapabilitiesSection;
