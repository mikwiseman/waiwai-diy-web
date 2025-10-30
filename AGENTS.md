# Repository Guidelines

## Project Structure & Module Organization
- `src/` hosts the Vue 3 app: `main.js` bootstraps the app, `App.vue` sets the base layout, `router/` defines routes, `views/` holds page components, and `utils/` stores helper modules such as `blogPosts.js`.
- Locale resources live in `src/i18n` and `src/translations`; keep keys aligned across languages before shipping copy changes.
- Place compiled or static assets in `public/`; import processed media from `src/assets/`.
- Production builds emit to `dist/`. Do not check this directory in unless explicitly coordinating a static deploy.

## Build, Test, and Development Commands
- `npm install` — install Vue CLI dependencies (use Node 18 LTS or newer for parity with CI).
- `npm run serve` — launch the dev server on `http://localhost:8080` with hot reloading. Keep this running while executing browser-based checks.
- `npm run build` — produce a minified bundle in `dist/` for staging or production.
- `npm run lint` — run ESLint with `plugin:vue/vue3-recommended` rules to enforce formatting and catch common issues.
- `node test-meta-tags.js` — run the Puppeteer smoke test. Requires a reachable app URL (local dev or deployed preview).


## Coding Style & Naming Conventions
- Follow ESLint defaults: two-space indentation, single quotes, no semicolons, and trailing commas only where mandated.
- Name Vue components in PascalCase (`BlogPosts.vue`), composables/utilities in camelCase, and routes using kebab-case segments.
- Prefer the `@/` alias for imports rather than brittle relative paths; co-locate page-specific assets under their view folder when practical.


## Testing Guidelines
- Automated unit tests are not yet configured; when adding them, mirror component structure (`ComponentName.spec.js`) alongside the source.
- Run `npm run lint` before every commit and include the meta-tag script output when working on SEO or localization changes.
- Document manual QA steps (locale toggles, canonical URLs, Open Graph previews) in PRs for any change affecting content or routing.

## Commit & Pull Request Guidelines
- Use imperative commit titles with an optional scope (`feat: add sitemap locale hints`) and expand on intent in the body if clarification helps reviewers.
- Branch names should describe the work item (`feature/multi-lang-blog`, `fix/blog-meta-tags`).
- Pull requests must outline the change, list verification steps, link related issues or tasks, and attach before/after screenshots when UI or meta data changes.

## SEO & Internationalization Notes
- Update each locale file in `src/translations` when altering copy; missing keys cause runtime fallbacks.
- Double-check canonical links and computed meta tags (notably in `src/views/Blog.vue`) before merges to avoid locale mismatches in production.
