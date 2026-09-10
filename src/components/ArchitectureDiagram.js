function ArchitectureDiagram({ steps }) {
  return (
    <ol className="workflow" aria-label="Audit workflow">
      {steps.map((step) => (
        <li key={step.step}>
          <div className="workflow-top">
            <span className="small-label accent">{step.step}</span>
            <span aria-hidden="true">→</span>
          </div>
          <h4>{step.title}</h4>
          <p>{step.detail}</p>
        </li>
      ))}
    </ol>
  );
}

export default ArchitectureDiagram;
