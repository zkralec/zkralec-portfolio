import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

function ProjectGrid({ projects }) {
  return (
    <section
      id="selected-work"
      className="section"
      aria-labelledby="personal-work-title"
      tabIndex={-1}
    >
      <div className="container">
        <Reveal>
          <SectionHeading
            id="personal-work-title"
            eyebrow="03 / Selected personal work"
            title="Built, shipped, and learned from."
            description="Independent work in mobile development and backend infrastructure, alongside my professional systems work."
          />
        </Reveal>
        <div className="personal-projects">
          {projects.map((project) => (
            <Reveal key={project.id}>
              <article
                id={project.id}
                className={`personal-project${project.gallery ? ' personal-project-feature' : ''}`}
                tabIndex={-1}
              >
                <div className="personal-copy">
                  <p className="status-text">{project.eyebrow}</p>
                  <div className="personal-title">
                    {project.logo && (
                      <img
                        src={project.logo}
                        alt=""
                        loading="lazy"
                        width="48"
                        height="48"
                      />
                    )}
                    <h3>{project.title}</h3>
                  </div>
                  <p>{project.description}</p>
                  <p className="technology-list">{project.tech.join(' / ')}</p>
                  <div className="project-links">
                    {project.links.map((link) => (
                      <a
                        key={link.href}
                        className="text-link"
                        href={link.href}
                        target={
                          link.href.startsWith('https:') ? '_blank' : undefined
                        }
                        rel={
                          link.href.startsWith('https:')
                            ? 'noreferrer'
                            : undefined
                        }
                      >
                        {link.label} <span aria-hidden="true">↗</span>
                        <span className="sr-only">
                          {' '}
                          for {project.title}
                          {link.href.startsWith('https:') &&
                            ' (opens in a new tab)'}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
                {project.gallery ? (
                  <div
                    className="sprint-gallery"
                    aria-label="Sprint Start Pro app screens"
                  >
                    {project.gallery.map((item) => (
                      <img
                        key={item.src}
                        src={item.src}
                        alt={item.alt}
                        loading="lazy"
                        decoding="async"
                        width="1290"
                        height="2796"
                      />
                    ))}
                  </div>
                ) : (
                  <div className="project-aside">
                    <p className="small-label">Engineering focus</p>
                    <ul>
                      {project.highlights.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectGrid;
