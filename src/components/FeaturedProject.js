import Reveal from './Reveal';
import ArchitectureDiagram from './ArchitectureDiagram';
import ScreenshotGallery from './ScreenshotGallery';

function FeaturedProject({ project, nodes, screenshots }) {
  return (
    <section
      id="cmmc-audit"
      className="section featured-section"
      aria-labelledby="case-study-title"
      tabIndex={-1}
    >
      <div className="container">
        <Reveal>
          <div className="case-intro">
            <div>
              <p className="eyebrow">{project.eyebrow}</p>
              <h2 id="case-study-title">{project.title}</h2>
            </div>
            <div className="case-intro-copy">
              <p className="lead">{project.subtitle}</p>
              <p>{project.description}</p>
              <div className="status-row">
                <span className="status">Local Python application</span>
                <span className="status">Microsoft 365 pilot</span>
              </div>
            </div>
          </div>
          <dl className="results">
            {project.metrics.map((metric) => (
              <div key={metric.label}>
                <dt>{metric.label}</dt>
                <dd>{metric.value}</dd>
              </div>
            ))}
          </dl>
          <p className="scope-note">{project.scope}</p>
        </Reveal>

        <ScreenshotGallery images={screenshots} />

        <div className="case-detail-grid">
          <Reveal>
            <p className="eyebrow">The thinking behind the workflow</p>
            <h3 className="case-detail-title">
              Make the review repeatable.
              <br />
              <span className="muted">Keep the evidence connected.</span>
            </h3>
            <p className="technology-label">Technologies</p>
            <p className="technology-list">{project.stack.join(' / ')}</p>
          </Reveal>
          <div className="case-prose">
            <Reveal>
              <h3>The problem</h3>
              <p>{project.problem}</p>
            </Reveal>
            <Reveal>
              <h3>Constraints</h3>
              <p>{project.constraints}</p>
            </Reveal>
            <Reveal>
              <h3>What I designed</h3>
              <p>{project.design}</p>
            </Reveal>
          </div>
        </div>
        <Reveal className="workflow-section">
          <h3>How the workflow operates</h3>
          <ArchitectureDiagram steps={nodes} />
        </Reveal>
        <Reveal className="evolution-section">
          <div className="subsection-heading">
            <h3>One workflow, two implementations.</h3>
            <p>
              The different interfaces reflect the project’s evolution from a
              local audit application to a Microsoft 365 pilot.
            </p>
          </div>
          <div className="evolution-grid">
            {project.implementations.map((item) => (
              <div key={item.title}>
                <p className="small-label accent">{item.label}</p>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
          <div className="demonstrates">
            <p className="small-label accent">What this demonstrates</p>
            <p>{project.demonstrates}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default FeaturedProject;
