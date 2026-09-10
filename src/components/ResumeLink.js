function ResumeLink({ resume, className = 'button button-secondary' }) {
  return resume.href ? (
    <a
      className={className}
      href={resume.href}
      download="Zachary-Kralec-Resume.pdf"
    >
      Download Resume <span aria-hidden="true">↓</span>
    </a>
  ) : (
    <a className={className} href={resume.requestHref}>
      Request Resume <span aria-hidden="true">↗</span>
    </a>
  );
}

export default ResumeLink;
