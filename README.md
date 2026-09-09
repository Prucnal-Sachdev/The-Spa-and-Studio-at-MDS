# The Spa & Studio at MDS — homepage preview

A speculative rebuild of the homepage for The Spa & Studio at MDS (Murrysville, PA),
built by Prucnal & Sachdev. Not commissioned; built to show what the site could be.

- **Preview:** https://prucnal-sachdev.github.io/The-Spa-and-Studio-at-MDS/ (built `noindex`, so
  it never competes with their live site in search)
- **Their current site:** https://thespaandstudioatmds.com
- **Open questions:** [CONTENT-NEEDED.md](CONTENT-NEEDED.md)

## What this fixes

Verified on their live site on 2026-09-05:

1. Their `<title>` is literally `Welcome` — the untouched GoDaddy Website Builder default.
   Every browser tab and every Google result reads "Welcome".
2. No footer copyright anywhere. Here the year is computed at build time.
3. The site is a GoDaddy Website Builder 8.0 page; images are lazy-loaded by script, so
   the markup a crawler sees is nearly empty.

## What it deliberately does not do

Their booking and gift cards run on **Phorest** and work fine. The preview links straight
out to both rather than trying to replace them. The problem is the website, not the stack.

## Brand

There is no logo file on their site, so the name is set in type. The palette is sampled
from photographs of their own building — black walls, tan leather, brass pendants, pale
wood — rather than the usual spa pink.

## Stack

Astro, static output, no client framework, no webfonts, and no JavaScript at all on the
page. One HTML document plus one stylesheet.

## Local development

```bash
npm install
npm run dev
```

Building the way the preview builds — note `MSYS_NO_PATHCONV=1`, without which Git Bash
rewrites `BASE_PATH` into a Windows path and every URL in the output is silently wrong:

```bash
MSYS_NO_PATHCONV=1 SITE_URL=https://prucnal-sachdev.github.io BASE_PATH=/The-Spa-and-Studio-at-MDS \
  PUBLIC_NOINDEX=1 npm run build
```

Production (Netlify) uses the defaults in `astro.config.mjs`: the real domain and a `/` base.
