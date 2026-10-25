# Agent handoff

Read `docs/PROJECT-STATUS.md` and `README.md` before making changes. They describe the accepted design, live deployment, contact form, validation, and remaining limitations.

Preserve the tree-first nature identity, no top navigation, no emoji, and the original `public/favicon.ico`. Do not put the contact recipient email in public source or build files; notifications are configured in Netlify.

`main` is connected to Netlify production. A push can publish the website. Keep changes local unless the user authorizes publishing. Do not change billing plans or enable paid features without explicit authorization.

Update the project status when deployment, architecture, or validation changes. Keep credentials, local Netlify state, and raw agent transcripts out of Git.
