import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

function TechStackSection({ categories, certification }) {
  return (
    <section
      id="skills"
      className="section"
      aria-labelledby="skills-title"
      tabIndex={-1}
    >
      <div className="container section-split">
        <Reveal>
          <SectionHeading
            id="skills-title"
            eyebrow="05 / Skills & certification"
            title="A focused technical toolkit."
            description="Tools and practices used across operational IT, administrative automation, and personal infrastructure projects."
          />
          <div className="certification">
            <span className="cert-mark" aria-hidden="true">
              S+
            </span>
            <div>
              <p>{certification.name}</p>
              <time dateTime={certification.date}>{certification.earned}</time>
            </div>
          </div>
        </Reveal>
        <div className="skills-list">
          {categories.map((group) => (
            <Reveal key={group.category}>
              <div className="skill-group">
                <h3>{group.category}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStackSection;
