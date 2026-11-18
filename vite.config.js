import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import staticPrivacyPages from './plugins/static-privacy-pages.js';

// Content Security Policy for the published site. GitHub Pages can't send
// custom headers, so it goes in a <meta> tag. The site only loads its own
// files, so everything else (inline scripts, other domains, plugins, forms)
// is blocked. If you ever add analytics, fonts or embeds from another
// domain, add that domain here or the browser will block it.
const CONTENT_SECURITY_POLICY = [
  "default-src 'self'",
  "script-src 'self'",
  "style-src 'self'",
  "img-src 'self' data:",
  "font-src 'self'",
  "connect-src 'self'",
  "object-src 'none'",
  "frame-src 'none'",
  "base-uri 'self'",
  "form-action 'none'",
  'upgrade-insecure-requests',
].join('; ');

// Build only: the dev server needs inline scripts and styles for hot reload.
function contentSecurityPolicy() {
  return {
    name: 'oltaken-content-security-policy',
    apply: 'build',
    transformIndexHtml: () => [
      {
        tag: 'meta',
        attrs: { 'http-equiv': 'Content-Security-Policy', content: CONTENT_SECURITY_POLICY },
        injectTo: 'head-prepend',
      },
    ],
  };
}

export default defineConfig({
  plugins: [react(), contentSecurityPolicy(), staticPrivacyPages()],
  base: './',
});
