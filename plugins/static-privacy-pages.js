// Writes every policy in src/data/privacy.js out as a plain HTML page, privacy-<id>.html,
// next to index.html. These pages have no JavaScript, so anyone (and any crawler) can read
// the policy even if the app doesn't run. The text comes from privacy.js, so there is
// nothing to keep in sync by hand except the Contact line, which mirrors ProductPrivacy.jsx.
import { createHash } from 'node:crypto';
import privacyPolicies from '../src/data/privacy.js';
import { COMPANY_NAME, CONTACT_EMAIL } from '../src/data/site.js';

const STYLE = `
  :root { color-scheme: dark; }
  * { box-sizing: border-box; }
  body {
    margin: 0;
    background: #000;
    color: #aaa;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
  }
  main { max-width: 720px; margin: 0 auto; padding: 40px 24px 64px; }
  .home { color: #d9dadb; font-weight: 600; letter-spacing: 0.04em; text-decoration: none; }
  h1 { color: #e0e0e0; font-size: 1.8rem; margin: 40px 0 8px; }
  h2 { color: #c0c0c0; font-size: 1.2rem; margin: 36px 0 12px; }
  p { font-size: 0.95rem; line-height: 1.7; margin: 0 0 16px; }
  .updated { color: #777; font-size: 0.85rem; margin-bottom: 32px; }
  a { color: #c0c0c0; }
  a:hover { color: #e0e0e0; }
  footer { border-top: 1px solid #1e1e20; margin-top: 48px; padding-top: 20px; color: #666; font-size: 0.85rem; }
  @media (max-width: 768px) { h1 { font-size: 1.4rem; } h2 { font-size: 1.05rem; } }
`;

// The page allows nothing but its own inline style (pinned by hash) and same-site images.
const CONTENT_SECURITY_POLICY = [
  "default-src 'none'",
  `style-src 'sha256-${createHash('sha256').update(STYLE).digest('base64')}'`,
  "img-src 'self'",
  "base-uri 'none'",
  "form-action 'none'",
].join('; ');

const ESCAPES = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
const escapeHtml = (text) => String(text).replace(/[&<>"']/g, (c) => ESCAPES[c]);

function renderPolicyPage(policy) {
  const title = `${policy.appName} Privacy Policy`;
  const sections = policy.sections
    .map((s) => `    <h2>${escapeHtml(s.title)}</h2>\n    <p>${escapeHtml(s.body)}</p>`)
    .join('\n');
  const email = escapeHtml(CONTACT_EMAIL);

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="Content-Security-Policy" content="${CONTENT_SECURITY_POLICY}">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="referrer" content="strict-origin-when-cross-origin">
  <meta name="color-scheme" content="dark">
  <meta name="theme-color" content="#000000">
  <title>${escapeHtml(title)} · ${escapeHtml(COMPANY_NAME)}</title>
  <meta name="description" content="${escapeHtml(`${title}, by ${COMPANY_NAME}.`)}">
  <link rel="icon" href="./favicon.ico" sizes="16x16 32x32 48x48">
  <link rel="icon" href="./favicon.svg" type="image/svg+xml">
  <style>${STYLE}</style>
</head>
<body>
  <main>
    <a class="home" href="./">${escapeHtml(COMPANY_NAME)}</a>
    <h1>${escapeHtml(title)}</h1>
    <p class="updated">Last Updated: ${escapeHtml(policy.lastUpdated)}</p>
${sections}
    <h2>Contact</h2>
    <p>Questions? Reach out at <a href="mailto:${email}">${email}</a></p>
    <footer>&copy; ${new Date().getFullYear()} ${escapeHtml(COMPANY_NAME)}</footer>
  </main>
</body>
</html>
`;
}

export default function staticPrivacyPages() {
  return {
    name: 'oltaken-static-privacy-pages',

    // Build: add the pages to dist/.
    generateBundle() {
      for (const [id, policy] of Object.entries(privacyPolicies)) {
        this.emitFile({ type: 'asset', fileName: `privacy-${id}.html`, source: renderPolicyPage(policy) });
      }
    },

    // Dev server: serve the same pages, so the "Plain version" link works locally too.
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const id = req.url?.match(/^\/privacy-([a-z0-9-]+)\.html(?:\?|$)/)?.[1];
        const policy = id && Object.hasOwn(privacyPolicies, id) ? privacyPolicies[id] : null;
        if (!policy) return next();
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.end(renderPolicyPage(policy));
      });
    },
  };
}
