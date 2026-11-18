# Oltaken website

The website for Oltaken, an app and game developer: https://yogevsaadon.github.io/Oltaken_website/

It shows Oltaken's products and hosts their privacy policies, which Google Play links to.
It's a small React + Vite site with plain CSS, served by GitHub Pages.

## Run and build

```sh
npm ci            # install
npm run dev       # local dev server with hot reload
npm run build     # production build into dist/
npm run preview   # serve dist/ locally to check the build
npm run lint
```

Pushing to `main` deploys the site: `.github/workflows/deploy.yml` builds it and publishes `dist/` to GitHub Pages.

## Where things live

- `src/data/site.js`: company name, contact email, home page tagline.
- `src/data/products.js`: products (text, icon, screenshots, store and tester links).
- `src/data/privacy.js`: privacy policies. Each one is shown at `#/privacy/<id>` and also built
  as a plain HTML page, `privacy-<id>.html`, by `plugins/static-privacy-pages.js`.
- `public/`: files copied as they are: favicons and `og.png`, the link preview image.
- `vite.config.js`: the Content Security Policy. The site loads only its own files. Anything from
  another domain (fonts, embeds) has to be added there, or the browser blocks it.

The site has no analytics, cookies or trackers, which is what its privacy policies promise.
Keep it that way.
