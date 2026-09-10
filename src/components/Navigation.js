import { useEffect, useRef, useState } from 'react';

function Navigation({ items }) {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    const dismiss = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const outside = (event) => {
      if (!headerRef.current?.contains(event.target)) setOpen(false);
    };
    const desktop = window.matchMedia('(min-width: 1100px)');
    const resize = () => {
      if (desktop.matches) setOpen(false);
    };
    document.addEventListener('keydown', dismiss);
    document.addEventListener('pointerdown', outside);
    desktop.addEventListener('change', resize);
    return () => {
      document.removeEventListener('keydown', dismiss);
      document.removeEventListener('pointerdown', outside);
      desktop.removeEventListener('change', resize);
    };
  }, [open]);

  return (
    <header className="site-header" ref={headerRef}>
      <div className="container nav-shell">
        <a
          href="#top"
          className="brand"
          aria-label="Zachary Kralec — introduction"
          onClick={() => setOpen(false)}
        >
          <span className="brand-mark" aria-hidden="true">
            zk<span>.</span>
          </span>
          <span>Zachary Kralec</span>
        </a>
        <button
          type="button"
          className="menu-toggle"
          ref={toggleRef}
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? 'Close' : 'Menu'}{' '}
          <span aria-hidden="true">{open ? '×' : '+'}</span>
        </button>
        <nav
          id="primary-navigation"
          aria-label="Primary"
          className={`primary-nav${open ? ' is-open' : ''}`}
        >
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => {
                setOpen(false);
                // A collapsed navigation should transfer keyboard focus to the destination.
                if (open)
                  document
                    .querySelector(item.href)
                    ?.focus({ preventScroll: true });
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navigation;
