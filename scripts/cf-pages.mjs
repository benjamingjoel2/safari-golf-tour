// Builds the Cloudflare Pages output (dist/): the site has no build step, so this copies the
// public files from the repo root, leaving out source and tooling, and adds cloudflare/_headers.
// Pages build command: `node scripts/cf-pages.mjs`, output directory: `dist`.
import fs from "node:fs";

const skip = new Set([
  ".git", ".github", ".gitignore", ".nojekyll", ".vercel", "node_modules", "dist",
  "cloudflare", "scripts", "i18n", "vercel.json", "package.json", "package-lock.json",
]);
fs.rmSync("dist", { recursive: true, force: true });
fs.mkdirSync("dist");
for (const f of fs.readdirSync(".")) {
  if (skip.has(f) || f.endsWith(".md")) continue;
  fs.cpSync(f, `dist/${f}`, { recursive: true });
}
for (const f of fs.readdirSync("cloudflare")) fs.cpSync(`cloudflare/${f}`, `dist/${f}`);
console.log("Cloudflare Pages output ready in dist/");
