# Lina Perez-Romero — Data Analytics Portfolio

Live site: [linaperezdata.com](https://linaperezdata.com)

Agent handoff and operational history: [docs/PROJECT-STATUS.md](docs/PROJECT-STATUS.md).

A nature-inspired portfolio built with React 19, TypeScript, CSS, and an SVG tree. Seven interactive leaves open skill details and project links. Supporting sections introduce Lina, showcase selected work, and provide a contact form and LinkedIn link.

## Local development

```sh
npm ci
npm start
```

Open http://localhost:3000. Contact submissions are disabled on localhost and display a preview notice.

## Validation

```sh
CI=true npm test -- --watchAll=false
npm run build
```

Tests cover skill dialogs, keyboard focus, project links, and contact-form submission states. Layouts were checked in Chromium at mobile and desktop widths; this is not a full accessibility certification.

## Deployment

Netlify builds the `main` branch using `npm run build` and publishes `build/`. Keep the deployed source committed to this repository before future Git-based deployments.

The original `public/favicon.ico` is retained. Build output, dependencies, environment files, and local Netlify account state are excluded from Git.

## Contact form

The React form and the hidden form in `public/index.html` must share the `contact` name and field names so Netlify can detect submissions. A honeypot supplements Netlify spam filtering. Recipient notifications are configured in Netlify, not in the public application code. The owner confirmed email delivery after launch.

The existing Free Legacy plan includes 100 verified submissions per site per month. Monitor usage in Netlify; reaching the free limit can pause sites. No paid upgrade was enabled.

## Main files

- `src/components/SkillsFlow.tsx`: interactive tree
- `src/components/SkillDetailsModal.tsx`: skill dialog
- `src/data/skillsData.ts`: skills and shared project records
- `src/components/ContactForm.tsx`: Netlify form and submission feedback
- `src/components/ContactLinks.tsx`: contact form and LinkedIn
- `src/App.tsx`: page sections

## Links

- [LinkedIn](https://www.linkedin.com/in/lina-perez-romero/)
- [GitHub](https://github.com/Maryem11)
