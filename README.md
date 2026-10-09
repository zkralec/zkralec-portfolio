# Zachary Kralec — professional portfolio

The existing React portfolio for [zkralec.dev](https://www.zkralec.dev/), focused on systems, infrastructure, Microsoft 365, automation, and security. Built with Create React App, Tailwind, Manrope / Space Grotesk, and Framer Motion.

## Local development

```sh
npm ci
npm start
```

Development opens at `http://localhost:3000`. Existing installed dependencies are sufficient; no new runtime dependency was added for the portfolio update.

## Checks and production preview

```sh
npm run lint
CI=true npm test -- --watchAll=false --runInBand
CI=true npm run build
python3 -m http.server 4174 --bind 127.0.0.1 --directory build
```

Open `http://127.0.0.1:4174`. This serves the local production build and does not publish it. If that preview is already running, use the existing server instead of starting a second one.

The app assumes hosting at the domain root (`/`). `npm run build` writes static assets to `build/`; no custom deployment configuration is checked in. Section navigation uses fragment links, so it needs no server-side routes. The existing analytics integration has been removed. The existing Google Fonts stylesheet remains.

## Content and assets

- `src/data/portfolioData.js`: positioning, navigation, project details, screenshot order and captions, experience, education, certification, skills, contacts, and resume configuration.
- `src/components/`: section presentation, responsive navigation, resume actions, and the accessible screenshot dialog.
- `src/index.css`, `src/App.css`, `tailwind.config.js`: typography, shared theme, layouts, responsive rules, focus states, and reduced-motion behavior.
- `public/index.html`, `public/manifest.json`: title, descriptions, canonical URL, Open Graph / Twitter previews, and app metadata.
- `public/Zachary-Kralec-Resume.pdf`: based on `Zachary_Kralec_Resume_M365_Systems.pdf` (October 6, 2026), with the current RMC role title changed to `Corporate IT Analyst | Automation Systems`. It includes `Information Technology Intern | Automation` and SPFx experience. Other content and all link targets are preserved; the original public URL is unchanged.
- `public/images/social-preview.png`: 1200 × 630 social image. Editable HTML source is in `scripts/social-preview.html`.

The CMMC gallery uses the supplied sanitized files unchanged. Identify any future replacement by its visible screen title, preserve all redactions, and update the intrinsic width and height in the data file if the dimensions change.

| Visible screen title | Public filename | Implementation |
| --- | --- | --- |
| Control review | `cmmc-control-overview.png` | Local Python application |
| Device, Software, & Service Findings | `cmmc-findings-detail.png` | Microsoft 365 pilot |
| Catalog Bulk Review | `cmmc-bulk-review.png` | Microsoft 365 pilot |
| Audit history | `cmmc-audit-history.png` | Local Python application |

Screenshots scale without cropping and load lazily. The native dialog supports previous/next buttons, arrow keys, actual-size scrolling, a contained Tab order, Escape, and focus restoration. Microsoft 365 pilot work is explicitly distinguished from production operational workflows.

Sprint Start Pro links to its [App Store listing](https://apps.apple.com/us/app/sprint-start-pro/id6760863199) and public repository. Mission Control is presented as archived; its former repository returned HTTP 404 during verification, so the page provides an email inquiry action.

See [the local review report](docs/LOCAL_REVIEW.md) for verification details and the change inventory. No deployment or push is part of this update.
