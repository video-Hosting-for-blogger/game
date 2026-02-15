# Paramapadha Sopana Patam — Cloudflare Deploy Notes

This repo builds a static React app (Vite) into the `dist/` folder. You plan to commit and build in Cloudflare — below are the recommended steps and checks to ensure a smooth Pages/Workers deployment.

Quick checklist before pushing:
- `npm install` locally (optional) to validate `package.json` updates.
- Ensure `src/assets/board.png` exists (it does).
- Confirm `package.json` scripts: `build` -> `vite build` (already present).

Cloudflare Pages (recommended for static frontends):
- In Cloudflare Pages, create a new project connected to your Git repo.
- Build command: `npm run build`
- Build output directory: `dist`
- Environment: `node` default is fine — Pages will run the static output.

Cloudflare Workers (Workers Sites) using `wrangler`:
- Fill `wrangler.toml` with your `account_id` and optional `zone_id`.
- Install wrangler locally or use CI: `npm install -D wrangler`
- Build then publish:

```bash
npm run build
npx wrangler pages publish dist --project-name paramapadha-online
```

Or using classic Workers Sites with `wrangler` config:

```bash
npx wrangler publish
```

Notes & possible issues to watch for:
- Ensure `@vitejs/plugin-react` is present in `devDependencies` (added).
- React versions set to `^18.2.0` (fixed from invalid versions).
- If Cloudflare build logs show module resolution errors, check the plugin is used in `vite.config.js` (it is).
- If you need SSR or Workers-Edge rendering, additional changes are required — ask and I can prepare them.

If you push and Cloudflare shows any build errors, paste the error log and I'll fix them.
