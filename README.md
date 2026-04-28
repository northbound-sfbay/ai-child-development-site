# AI Child Development Static Site

Single-page Astro microsite based on `README_Codex_AI_Child_Development_Static_Site.md` and `ai_child_development_site_data.json`.

## Local development

```bash
npm install
npm run dev
```

Build the production site:

```bash
npm run build
```

Preview the built site:

```bash
npm run preview
```

## Deployment

### Vercel

1. Import this GitHub repository in Vercel.
2. Use the default Astro settings:
   - Build command: `npm run build`
   - Output directory: `dist`
3. Deploy.

### Netlify

1. Create a new Netlify site from this GitHub repository.
2. Set:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. Deploy.

### GitHub Pages

This repo includes `.github/workflows/deploy.yml`, which publishes the site on every push to `main`.

Expected URL:

```text
https://northbound-sfbay.github.io/ai-child-development-site/
```

The workflow sets `GITHUB_PAGES=true` so Astro builds with the correct GitHub Pages base path. Local, Vercel, and Netlify builds continue to use root-relative paths.

## Content sources

- Handoff brief: `README_Codex_AI_Child_Development_Static_Site.md`
- Structured content: `ai_child_development_site_data.json`
- Static visuals: `public/assets/`
