# Project status and handoff

Last updated: October 25, 2026.

## Current state

The botanical portfolio is live at https://linaperezdata.com. The rebuilt application was committed and pushed as `628010925339f3cf1bae4f7ec3f2d079a2ea28d2`; Netlify successfully published that commit and the main URL returned HTTP 200. This document is a later documentation-only handoff. Recheck Git and Netlify for subsequent changes rather than treating this snapshot as current forever.

Repository: https://github.com/Maryem11/Lina_Perez_Portfolio, branch `main`.

The user confirmed that a contact-form email reached the intended inbox. Launch work is complete; no pending implementation task was requested.

## Accepted product decisions

- Nature is the core identity. Seven skill leaves connect to a recognizable tree with branches, trunk, and roots.
- Hero emphasizes the tree and Lina's name; no top navigation. Discover more and Contact me links sit under the tree.
- Supporting sections show Lina's Colombian background, three selected projects, and contact options.
- No emoji. Preserve the original favicon (`public/favicon.ico`) and original application icons.
- Contact uses a Netlify form and the LinkedIn logo/link: https://www.linkedin.com/in/lina-perez-romero/.
- Avoid exposing Lina's recipient email in browser code. It is configured as a Netlify notification recipient.
- No paid services or plan upgrades were authorized.

## Implementation

React 19 / TypeScript / react-scripts. ReactFlow was removed; `SkillsFlow.tsx` now renders the botanical SVG tree and native skill buttons. `SkillDetailsModal.tsx` handles accessible dialogs and keyboard focus. `skillsData.ts` owns shared project records; only three actual repositories are advertised. SQL, Tableau, and Excel use honest empty states where no supporting repository is listed.

The contact form in `ContactForm.tsx` posts URL-encoded data to `/`. Its hidden static counterpart in `public/index.html` allows Netlify detection. Keep form name `contact` and fields `form-name`, `bot-field`, `name`, `email`, and `message` aligned. Honeypot protection is enabled. The UI prevents duplicate pending submissions, preserves values on errors, and disables actual sending on localhost. LinkedIn remains an alternative.

## Netlify operations

- Project: `linaperezdata`
- Site ID: `35375aa4-3238-4e24-ad7d-1c0d47e249f4`
- Production domain: https://linaperezdata.com
- Build command: `npm run build`; publish directory: `build`
- Git integration: repository above, `main`
- CLI authentication and local link were verified on this machine; `.netlify/` is ignored. Revalidate access before future operations. Never copy tokens into documentation.
- Forms detection and email notifications are enabled. Recipient stays in Netlify configuration. Owner confirmed delivery.
- Account was Free Legacy: 100 verified submissions per site/month, no paid upgrade. At the free limit sites can be paused. Recheck current usage/pricing before making capacity promises or changes.
- The temporary review deploy `6ade39d06efd4549ccbf3e6e` was deleted; its URL returned 404. Production deploys have their own Netlify permalinks; deleting that preview does not disable all Netlify hostnames.

Local builds: `npm run build`. Tests: `CI=true npm test -- --watchAll=false`. For deployment, follow current Netlify CLI documentation and explicit user authorization. A push to `main` can trigger production deployment.

## Evidence and limitations

- Production build passed. Last test run: 11 passing tests across 3 suites.
- Chromium checks covered mobile and desktop layouts; previous review checked widths 320, 390, 768, and 1440, keyboard focus, dialogs, and reduced motion.
- Independent Herdr reviewer was verified as Claude Opus 5.5 (`claude-opus-5-5`). Six initial findings were remediated and approved. The later hero/contact changes have their own local checks and tests; do not imply the initial independent review covered all subsequent changes.
- Safari and real screen-reader testing remain unverified. No full accessibility certification is claimed.
- Existing biography/skill claims were inherited; Lina should confirm their accuracy. Do not invent experience, results, or project evidence.
- Build displayed an outdated Browserslist-data notice; it did not prevent compilation. Dependency modernization was not part of this work.

## Cleanup and local records

The `botanical-builder` and `botanical-reviewer` Herdr panes were closed after completion. Other projects' agents were left intact. Local development server on port 3000 was stopped. Working tree was clean after the application commit.

Raw design/review notes and the unused alternative SVG favicon were archived outside Git at `/Users/joesypula/.local/share/lina-portfolio/review-2026-10-25/`. Keep these as historical evidence, not instructions overriding current user decisions. Generated build output and dependencies remain ignored.
