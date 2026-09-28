# Safari Golf Tour

Marketing site for Safari Golf Tour: tailor-made golf + safari packages across East and Southern Africa.

## What's here

- `index.html` — single-page site: hero, package catalogue with filters, how it works, destinations, testimonials, FAQ and an enquiry form.
- `js/packages.js` — the package catalogue as plain data (name, country, nights, rounds, price, courses, lodges, day-by-day itinerary). Edit this file to add or change packages; the page renders from it.
- `js/main.js` — renders cards, filtering and sorting, the itinerary modal, mobile nav and enquiry-form validation.
- `css/styles.css` — styles, with light and dark themes driven by `prefers-color-scheme` (or `data-theme="light|dark"` on `<html>`).

No build step and no dependencies. Fonts load from Google Fonts; everything else is static.

## Run locally

Open `index.html` directly, or serve the folder:

```sh
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deploy

The site is static, so it can be hosted on GitHub Pages, Netlify, Cloudflare Pages or any web server. Point the host at the repository root.

## Enquiry form

The form validates client-side and currently stores submissions in the visitor's `localStorage` under `sgt-enquiries`. To go live, replace the submit handler in `js/main.js` with a POST to your form backend (Formspree, Netlify Forms, a serverless function, etc.).

## Adding a package

Append an object to `window.SGT_PACKAGES` in `js/packages.js`. Required fields:

| Field | Purpose |
| --- | --- |
| `id` | URL-safe unique key |
| `name`, `tagline`, `country`, `region` | Card and modal copy; `region` must match a value in the region filter |
| `nights`, `rounds`, `gameDrives`, `priceFrom` | Numbers used for filters, sorting and display |
| `tier` | `premium` or `luxury` badge |
| `bestMonths` | Free text |
| `image` | One of `kenya`, `south-africa`, `tanzania`, `victoria-falls`, `mauritius`, `uganda` (maps to an `.art-*` gradient in the CSS; add a new class for a new destination) |
| `highlights`, `courses`, `lodges`, `itinerary` | Arrays rendered in the modal |
