# Local portfolio review — September 10, 2026

## Strategy and content

The existing React application now leads with **Systems & Automation Analyst** and enterprise IT, infrastructure, Microsoft 365, security, and workflow automation. The page follows introduction → CMMC case study → professional systems → personal work → experience → skills/certification → contact.

The CMMC case study distinguishes the local Python application from the Microsoft 365 pilot. Its three result figures come from the supplied brief. Knowledge Base Review Automation is identified as a production workflow, and endpoint automation is presented as operational IT work. Sprint Start Pro follows those systems; Mission Control is explicitly archived. AI Interview Simulator, Fake News Classifier, and Stride Lab no longer occupy homepage space.

Experience and certification follow the supplied facts and Master PDF. The resume is copied unchanged to `/Zachary-Kralec-Resume.pdf`; both resume actions now download it. No resume replacement remains pending.

## Screenshot mapping

All four supplied sanitized images were visually identified by screen title and copied without modification. Their source bytes match both the public assets and the production build. No OCR, sharpening, reconstruction, or redaction changes were performed.

| Order | Screen | Filename in `public/images/` | Dimensions |
| --- | --- | --- | --- |
| 1 | Control review | `cmmc-control-overview.png` | 1711 × 919 |
| 2 | Device, Software, & Service Findings | `cmmc-findings-detail.png` | 1708 × 920 |
| 3 | Catalog Bulk Review | `cmmc-bulk-review.png` | 1706 × 922 |
| 4 | Audit history | `cmmc-audit-history.png` | 1708 × 921 |

Images retain their aspect ratios and complete interface context. Captions and alt text describe the correct screens and implementations. The lead overview spans the gallery; all images support keyboard-accessible enlargement and actual-size scrolling.

## Files changed across the update

| Area | Files |
| --- | --- |
| Application and content | `src/App.js`, `src/data/portfolioData.js` |
| Existing components | `src/components/ArchitectureDiagram.js`, `CapabilitiesSection.js`, `ContactSection.js`, `FeaturedProject.js`, `HeroSection.js`, `Navigation.js`, `ProjectGrid.js`, `Reveal.js`, `SectionHeading.js`, `TechStackSection.js` |
| New components | `src/components/ExperienceSection.js`, `ResumeLink.js`, `ScreenshotGallery.js` |
| Styles | `src/App.css`, `src/index.css`, `tailwind.config.js` |
| Tests and package configuration | `src/App.test.js`, `package.json`, `package-lock.json`, `.gitignore` |
| Metadata | `public/index.html`, `public/manifest.json` |
| Public assets | The four CMMC screenshots above, `public/Zachary-Kralec-Resume.pdf`, `public/images/favicon.svg`, `public/images/social-preview.png` |
| Documentation and preview source | `README.md`, `docs/LOCAL_REVIEW.md`, `scripts/social-preview.html` |

Existing local `config/` files were left untouched and excluded from Git. No configuration keys are included in the public build. The existing Vercel analytics integration was removed. No new runtime or test dependencies were added. Browser verification used already-installed Playwright/Chrome and the existing axe-core package.

## Commands and results

```sh
npm ls --depth=0
npm uninstall @vercel/analytics --ignore-scripts --offline
npm run lint
CI=true npm test -- --watchAll=false --runInBand
CI=true npm run build
git diff --check
```

- ESLint: passed with no errors or warnings.
- Jest: all 7 tests passed, covering section navigation, menu behavior and focus, contact links, resume availability, and gallery navigation, zoom, closure, and scroll restoration.
- Production build: compiled successfully; main JavaScript approximately 106.94 kB gzip and CSS 6.47 kB gzip.
- Diff whitespace check: passed.
- Source-to-public-to-build byte comparisons: passed for all four sanitized screenshots and the Master PDF.

The existing CRA toolchain emits nonblocking Node deprecation and stale Browserslist-data notices. They do not prevent lint, tests, or the production build.

## Browser review

The production build was checked in Chrome at **1440, 1024, 768, and 390 px**. Desktop and mobile screenshots were visually inspected, including the gallery and enlarged viewer.

| Check | Result |
| --- | --- |
| All 4 CMMC images and existing Sprint Start Pro images | Loaded at every width; aspect ratios preserved |
| Captions, screen order, and implementation labels | Correct |
| Horizontal overflow and clipped text | None found |
| Every navigation destination | Resolved and accessible below the sticky header |
| Mobile menu | Keyboard operation, Escape, destination focus, and resize behavior passed |
| Gallery | All images open; previous/next, arrow keys, zoom, close, Tab containment, and focus restoration passed |
| Automated axe WCAG A/AA checks | Zero violations on each page width and open dialog |
| Reduced motion | Smooth scrolling disabled; no active animations in reduced-motion mode |
| Skip link and keyboard focus | Visible and functional |
| Resume | HTTP 200, PDF content type, identical to the supplied Master PDF |
| Social preview | HTTP 200, 1200 × 630 |
| Browser console errors and failed requests | None |
| Tracking requests | None |

Browser evidence and the audit script are saved locally under `/tmp/zkralec-portfolio-review/`. `browser-report.json` contains the measurements; `full-1440.png`, `full-390.png`, `gallery-mobile.png`, and `dialog-mobile-viewport.png` provide visual evidence. These review artifacts are outside the public site.

The browser audit used `node /tmp/zkralec-portfolio-review/verify.cjs`; after correcting an audit locator, `--resume` ran the remaining widths. No additional browser dependency was added to the repository.

Automated accessibility checks supplement the visual and keyboard review; they are not a screen-reader certification.

## External destinations

- GitHub profile and Sprint Start Pro repository returned HTTP 200.
- Sprint Start Pro links to its verified [Apple App Store listing](https://apps.apple.com/us/app/sprint-start-pro/id6760863199).
- The former Mission Control repository returned HTTP 404. Its dead link has been replaced by a project inquiry via the existing email address.
- LinkedIn retains the exact profile URL from the original repository. LinkedIn returns HTTP 999 to automated requests, so page content could not be checked automatically.
- Email remains `zkralec@icloud.com`; email links were checked without sending any messages.

## Preview and remaining work

From the repository root:

```sh
python3 -m http.server 4174 --bind 127.0.0.1 --directory build
```

Open **http://127.0.0.1:4174**. The local production preview is already running; use the command above to restart it if needed. For live development, run `npm start`.

No push, merge, publication, or deployment was performed. The implementation and verified preview are ready for local review. No implementation or resume-replacement items remain pending.
