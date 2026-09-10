import Reveal from './Reveal';

function EducationSection({ education }) {
  return (
    <section
      id="education"
      className="section education-section"
      aria-labelledby="education-title"
      tabIndex={-1}
    >
      <div className="container section-split">
        <Reveal>
          <h2 id="education-title">Education</h2>
          <p className="education-date">
            Graduated{' '}
            <time dateTime={education.graduated}>
              {education.graduatedLabel}
            </time>
          </p>
        </Reveal>
        <Reveal>
          <h3>{education.school}</h3>
          <p className="education-degree">{education.degree}</p>
          <ul className="education-details" aria-label="Academic details">
            <li>{education.minor}</li>
            <li>GPA: {education.gpa}</li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

export default EducationSection;
