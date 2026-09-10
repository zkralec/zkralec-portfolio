import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

function ExperienceSection({ roles }) {
  return (
    <section
      id="experience"
      className="section"
      aria-labelledby="experience-title"
      tabIndex={-1}
    >
      <div className="container section-split">
        <Reveal>
          <SectionHeading
            id="experience-title"
            eyebrow="04 / Experience"
            title="A foundation in real operations."
            description="Enterprise IT, automation, software testing, and business systems."
          />
        </Reveal>
        <div className="experience-list">
          {roles.map((role) => (
            <Reveal key={role.role}>
              <article className="experience-role">
                <p className="role-date">
                  <time dateTime={role.start}>{role.startLabel}</time> –{' '}
                  {role.end ? (
                    <time dateTime={role.end}>{role.endLabel}</time>
                  ) : (
                    <span className="accent">{role.endLabel}</span>
                  )}
                </p>
                <h3>{role.company}</h3>
                <p className="role-title">{role.role}</p>
                {role.location && (
                  <p className="role-location">{role.location}</p>
                )}
                <ul>
                  {role.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
