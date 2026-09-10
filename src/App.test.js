import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import ResumeLink from './components/ResumeLink';
import ScreenshotGallery from './components/ScreenshotGallery';
import { cmmcScreenshots, resume } from './data/portfolioData';

// Test content and interactions here; real motion, focus containment, and layout
// are verified separately in the browser against the production build.
jest.mock('./components/Reveal', () => ({ children, className }) => (
  <div className={className}>{children}</div>
));

beforeEach(() => {
  window.matchMedia = jest.fn().mockImplementation(() => ({
    matches: false,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
  }));
  HTMLDialogElement.prototype.showModal = function () {
    this.setAttribute('open', '');
  };
  HTMLDialogElement.prototype.close = function () {
    this.removeAttribute('open');
  };
});

test('leads with systems work and provides a destination for every navigation link', () => {
  render(<App />);
  expect(
    screen.getByRole('heading', {
      level: 1,
      name: 'Systems & Automation Analyst',
    }),
  ).toBeInTheDocument();
  const sections = screen.getAllByRole('region');
  expect(sections.map((section) => section.id)).toEqual([
    'top',
    'cmmc-audit',
    'professional-systems',
    'selected-work',
    'experience',
    'skills',
    'contact',
  ]);
  within(screen.getByRole('navigation', { name: 'Primary' }))
    .getAllByRole('link')
    .forEach((link) => {
      expect(
        sections.find(
          (section) => `#${section.id}` === link.getAttribute('href'),
        ),
      ).toHaveAttribute('aria-labelledby');
    });
});

test('mobile navigation opens, supports Escape, and transfers focus to the selected section', () => {
  render(<App />);
  const toggle = screen.getByRole('button', { name: /menu/i });
  userEvent.click(toggle);
  expect(toggle).toHaveAttribute('aria-expanded', 'true');
  userEvent.keyboard('{Escape}');
  expect(toggle).toHaveAttribute('aria-expanded', 'false');
  expect(toggle).toHaveFocus();
  userEvent.click(toggle);
  userEvent.click(
    within(screen.getByRole('navigation', { name: 'Primary' })).getByRole(
      'link',
      { name: 'Experience' },
    ),
  );
  expect(toggle).toHaveAttribute('aria-expanded', 'false');
  expect(
    screen.getByRole('region', { name: 'A foundation in real operations.' }),
  ).toHaveFocus();
});

test('provides contact destinations and protects links that open another tab', () => {
  render(<App />);
  expect(
    screen.getByRole('link', { name: /email zkralec@icloud.com/i }),
  ).toHaveAttribute('href', 'mailto:zkralec@icloud.com');
  screen
    .getAllByRole('link')
    .filter((link) => link.target === '_blank')
    .forEach((link) => {
      expect(link).toHaveAttribute('rel', 'noreferrer');
      expect(link.getAttribute('href')).toMatch(/^https:\/\//);
    });
});

test('offers a resume request without linking to an outdated PDF when the Master PDF is unavailable', () => {
  render(<ResumeLink resume={{ ...resume, href: null }} />);
  expect(screen.getByRole('link', { name: /request resume/i })).toHaveAttribute(
    'href',
    resume.requestHref,
  );
  expect(
    screen.queryByRole('link', { name: /download resume/i }),
  ).not.toBeInTheDocument();
});

test('uses the preserved public URL when a current resume is available', () => {
  render(<ResumeLink resume={{ ...resume, href: resume.publicPath }} />);
  expect(
    screen.getByRole('link', { name: /download resume/i }),
  ).toHaveAttribute('href', '/Zachary-Kralec-Resume.pdf');
  expect(screen.getByRole('link')).toHaveAttribute(
    'download',
    'Zachary-Kralec-Resume.pdf',
  );
});

test('gallery supports keyboard browsing, wraparound, zoom, and closing back to the trigger', () => {
  render(<ScreenshotGallery images={cmmcScreenshots} />);
  const trigger = screen.getByRole('button', {
    name: 'Enlarge Control review',
  });
  userEvent.click(trigger);
  let dialog = screen.getByRole('dialog', { name: 'Control review' });
  expect(
    within(dialog).getByRole('button', { name: 'Close enlarged screenshot' }),
  ).toHaveFocus();
  expect(document.body.style.overflow).toBe('hidden');

  userEvent.keyboard('{ArrowRight}');
  dialog = screen.getByRole('dialog', {
    name: 'Device, Software, & Service Findings',
  });
  expect(within(dialog).getByRole('img')).toHaveAttribute(
    'src',
    '/images/cmmc-findings-detail.png',
  );
  userEvent.click(
    within(dialog).getByRole('button', { name: 'Previous screenshot' }),
  );
  userEvent.keyboard('{ArrowLeft}');
  dialog = screen.getByRole('dialog', { name: 'Audit history' });
  userEvent.click(within(dialog).getByRole('button', { name: 'Actual size' }));
  expect(
    within(dialog).getByRole('button', { name: 'Fit image' }),
  ).toHaveAttribute('aria-pressed', 'true');
  userEvent.keyboard('{ArrowRight}');
  expect(dialog).toHaveAccessibleName('Audit history');
  userEvent.click(
    within(dialog).getByRole('button', { name: 'Close enlarged screenshot' }),
  );
  expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  expect(document.body.style.overflow).toBe('');
  expect(trigger).toHaveFocus();
});

test('unmounting an open gallery restores body scrolling', () => {
  const { unmount } = render(<ScreenshotGallery images={cmmcScreenshots} />);
  userEvent.click(
    screen.getByRole('button', { name: 'Enlarge Control review' }),
  );
  expect(document.body.style.overflow).toBe('hidden');
  unmount();
  expect(document.body.style.overflow).toBe('');
});
