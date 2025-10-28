# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

WaiWai DIY is a Vue 3 website with internationalization (i18n) support for Russian and English audiences. The site automatically detects locale based on domain (wai.sale = English, waiwai.diy = Russian) and serves localized content including meta tags, Open Graph tags, and Twitter Card data.

## Commands

### Development
```bash
npm run serve       # Start development server
npm run build       # Build for production
npm run lint        # Lint and fix files
```


## Architecture

### Internationalization (i18n)
- **Locale Detection**: [src/i18n/index.js](src/i18n/index.js) determines locale based on `window.location.hostname`
  - `wai.sale` domain → English (`en`)
  - All other domains → Russian (`ru`, default)
- **Translation Files**: [src/translations/](src/translations/) contains `en.json` and `ru.json`
- The locale is reactive and used throughout the app via `useI18n()` composition API

### Meta Tags & SEO
- **Dynamic Meta Tags**: [src/App.vue](src/App.vue) uses `@vueuse/head` to set meta tags reactively based on current locale
- Meta tags include title, description, keywords, Open Graph, and Twitter Card data
- All meta content is pulled from translation files using `t('meta.*')` pattern
- Canonical URLs change based on locale (wai.sale for English, waiwai.diy for Russian)

### Routing
- **Router**: [src/router/index.js](src/router/index.js) uses Vue Router 4 with `createWebHistory`
- Routes:
  - `/` → [Home.vue](src/views/Home.vue)
  - `/blog` → [Blog.vue](src/views/Blog.vue)

### External Integrations
- **Luxy.js**: Smooth scrolling library initialized in [App.vue](src/App.vue), disabled on mobile devices
- **DropInBlog**: Blog embed script loaded dynamically in [App.vue](src/App.vue) via script tag injection

### Styling
- Uses Webflow-exported CSS located in [src/assets/css/](src/assets/css/)
- Main stylesheets: `normalize.css`, `webflow.css`, `waiwaidiy.webflow.css`
- Custom styles defined in [App.vue](src/App.vue) `<style>` section

### Build Configuration
- **vue.config.js**: Configures webpack to suppress Vue 3 hydration mismatch warnings in production
- PWA icon paths configured for various devices

## Key Files

- [src/main.js](src/main.js) - App entry point, initializes router, i18n, and head management
- [src/App.vue](src/App.vue) - Root component with meta tags, Luxy.js, and DropInBlog initialization
- [src/i18n/index.js](src/i18n/index.js) - i18n configuration with domain-based locale detection
- [src/router/index.js](src/router/index.js) - Vue Router configuration
- [src/translations/](src/translations/) - Translation files (en.json, ru.json)
- [vue.config.js](vue.config.js) - Vue CLI configuration
