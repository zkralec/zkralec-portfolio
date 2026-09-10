import { useEffect, useId, useRef, useState } from 'react';

function ScreenshotGallery({ images }) {
  const [active, setActive] = useState(null);
  const [zoomed, setZoomed] = useState(false);
  const dialogRef = useRef(null);
  const triggerRef = useRef(null);
  const closeRef = useRef(null);
  const titleId = useId();
  const captionId = useId();
  const helpId = useId();
  const current = active === null ? null : images[active];
  const isOpen = active !== null;

  useEffect(() => {
    if (!isOpen) return undefined;
    const dialog = dialogRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    if (!dialog.open) dialog.showModal();
    closeRef.current?.focus();
    return () => {
      if (dialog.open) dialog.close();
      document.body.style.overflow = previousOverflow;
    };
    // Keep the same modal open when navigating between images.
  }, [isOpen]);

  const close = () => {
    dialogRef.current?.close();
    setActive(null);
    setZoomed(false);
    triggerRef.current?.focus();
  };
  const move = (direction) => {
    setActive((index) => (index + direction + images.length) % images.length);
    setZoomed(false);
  };

  if (!images.length) return null;

  return (
    <div className="case-gallery">
      <div className="gallery-heading">
        <h3>Inside the workflow</h3>
        <p>Sanitized screens · Select an image to enlarge</p>
      </div>
      <div className="screenshot-grid">
        {images.map((item, index) => (
          <figure
            key={item.id}
            className={
              index === 0 ? 'screenshot screenshot-lead' : 'screenshot'
            }
          >
            <div className="screenshot-label">
              <span>
                {String(index + 1).padStart(2, '0')} / {item.implementation}
              </span>
              <span aria-hidden="true">↗</span>
            </div>
            <button
              className="screenshot-button"
              type="button"
              aria-label={`Enlarge ${item.title}`}
              aria-haspopup="dialog"
              onClick={(event) => {
                triggerRef.current = event.currentTarget;
                setZoomed(false);
                setActive(index);
              }}
            >
              <img
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                loading="lazy"
                decoding="async"
              />
            </button>
            <figcaption>
              <strong>{item.title}</strong>
              <p>{item.caption}</p>
            </figcaption>
          </figure>
        ))}
      </div>
      <dialog
        ref={dialogRef}
        className="image-dialog"
        aria-labelledby={titleId}
        aria-describedby={`${captionId} ${helpId}`}
        onCancel={(event) => {
          event.preventDefault();
          close();
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) close();
        }}
        onKeyDown={(event) => {
          if (event.key === 'Tab') {
            const controls = event.currentTarget.querySelectorAll(
              'button:not([disabled]), [href], [tabindex="0"]',
            );
            const first = controls[0];
            const last = controls[controls.length - 1];
            if (event.shiftKey && document.activeElement === first) {
              event.preventDefault();
              last.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
              event.preventDefault();
              first.focus();
            }
          }
          if (!zoomed && event.key === 'ArrowRight') {
            event.preventDefault();
            move(1);
          }
          if (!zoomed && event.key === 'ArrowLeft') {
            event.preventDefault();
            move(-1);
          }
        }}
      >
        {current && (
          <div className="dialog-content">
            <div className="dialog-header">
              <div>
                <p className="small-label">{current.implementation}</p>
                <h4 id={titleId}>{current.title}</h4>
              </div>
              <button
                type="button"
                className="button button-secondary"
                ref={closeRef}
                onClick={close}
                aria-label="Close enlarged screenshot"
              >
                Close <span aria-hidden="true">×</span>
              </button>
            </div>
            <div
              className={`dialog-image${zoomed ? ' is-zoomed' : ''}`}
              tabIndex={0}
              role="region"
              aria-label="Screenshot view"
            >
              <img
                src={current.src}
                alt={current.alt}
                width={current.width}
                height={current.height}
              />
            </div>
            <p className="dialog-caption" id={captionId}>
              {current.caption}
            </p>
            <div className="dialog-controls">
              <button
                className="button button-secondary"
                type="button"
                onClick={() => move(-1)}
                aria-label="Previous screenshot"
              >
                ← <span>Previous</span>
              </button>
              <button
                className="button button-secondary"
                type="button"
                onClick={() => setZoomed(!zoomed)}
                aria-pressed={zoomed}
              >
                {zoomed ? 'Fit image' : 'Actual size'}
              </button>
              <p aria-live="polite" aria-atomic="true">
                {active + 1} / {images.length}
              </p>
              <button
                className="button button-secondary"
                type="button"
                onClick={() => move(1)}
                aria-label="Next screenshot"
              >
                <span>Next</span> →
              </button>
            </div>
            <p className="dialog-help" id={helpId}>
              {zoomed
                ? 'Scroll the image to explore at actual size.'
                : 'Use left and right arrow keys to browse.'}{' '}
              Press Escape to close.
            </p>
          </div>
        )}
      </dialog>
    </div>
  );
}

export default ScreenshotGallery;
