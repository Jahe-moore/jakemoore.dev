# jakemoore.dev

Static site for Jake Moore. Deployed via GitHub Pages.

## Local development

```bash
npm ci
npm run dev
```

The `dev` script uses [`http-server`](https://www.npmjs.com/package/http-server) to preview the site locally.

## Build

```bash
npm run build
```

Build output is written to the `dist/` directory.

## Deployment

GitHub Actions automatically builds and deploys the site to GitHub Pages on pushes to `main`.

In GitHub repository settings, set **Pages** → **Source** to **GitHub Actions**.

## Custom domain

The site uses the custom domain `jakemoore.dev` (see `CNAME`).
Configure your DNS to point `jakemoore.dev` to your GitHub Pages domain (`USERNAME.github.io`) and enable HTTPS in the repository settings.

## Troubleshooting

- **404 routing:** Any unknown routes redirect to `index.html` via `404.html`.
- **Cache:** If you don't see updates, hard refresh the browser or clear cache.

To test the built site locally:

```bash
npm run build
npx serve dist
```
