# Safari Golf Tour

Marketing site for Safari Golf Tour: golf and safari journeys across East and Southern Africa.

Editorial safari look (Cormorant Garamond, forest green, cream and gold, full-bleed photography) on a cinematic single-CTA page structure: fixed minimal header, full-screen overlay menu, 100vh hero, pillar section, glowing guest-quote card, feature blocks with an image mosaic, full-bleed feature sections, a dark enquiry form and a multi-column footer.

## Pages

| File | Purpose |
| --- | --- |
| `index.html` | Home: hero, trust strip, pillars, flagship journey, selected journeys, guest words, what we arrange, hosted departures, destinations, philosophy, field notes, enquiry form |
| `journeys.html` | All journeys with region / length / budget filters and sorting. `journeys.html#<id>` opens the full itinerary for one journey |
| `destinations.html` | Six destinations with courses, reserves and the journeys that visit. `destinations.html#<id>` jumps to one |
| `about.html` | Our story, stats, how it works (`#how`), what we believe |
| `contact.html` | Design-your-safari brief (`?journey=<id>` preselects a journey), contact details, FAQ (`#faq`) |

## Structure

- `js/packages.js` — all content data: journeys (with courses, stays and day-by-day itineraries), destinations, guest quotes, photo ids and site config (`SGT.CONFIG`). Edit this to change content.
- `js/site.js` — shared chrome injected on every page: header, overlay menu, footer, floating chat button, reveal-on-scroll, enquiry-form handling.
- `js/pages/*.js` — per-page rendering.
- `css/styles.css` — the design system.

No build step and no dependencies. Fonts load from Google Fonts and photography from Unsplash (free licence, ids listed in `js/packages.js`).

## Configure

In `js/packages.js`, `SGT.CONFIG` holds:

- `email`, `phone` — shown in the menu, footer and contact page when set.
- `whatsapp` — digits only. When set, the floating "Chat to us" button opens WhatsApp; otherwise it links to the contact page.
- `offices` — listed in the menu and footer.
- `social.instagram / facebook / linkedin` — footer icons appear only for the ones you fill in.

## Run locally

```sh
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy

`.github/workflows/pages.yml` publishes the repository root to GitHub Pages on every push to `main` (and on manual dispatch). The first run enables Pages automatically; the site URL appears in the workflow summary. Any static host (Netlify, Cloudflare Pages, Vercel) also works: point it at the repo root with no build command.

## Enquiry forms

Both forms validate client-side and, with no backend yet, store submissions in the visitor's `localStorage` under `sgt-enquiries`. To go live, replace the body of `S.bindEnquiryForm` in `js/site.js` with a POST to your form endpoint (Formspree, Netlify Forms, a serverless function).

## Adding a journey

Append an object to `JOURNEYS` in `js/packages.js`. It appears automatically in the journeys grid, the footer, the enquiry selects and the "also consider" list. Fields: `id`, `name`, `strap`, `tagline`, `countries`, `region` (must match a value in the journeys filter), `nights`, `rounds`, `gameDrives`, `priceFrom`, `tier` (`signature` or `flagship`), `bestMonths`, `photo` (a key of `PHOTO`), `route`, `intro`, `highlights`, `courses`, `stays`, `itinerary`.

To use your own photography, add a new key to `PHOTO` or change `SGT.img()` to return your own URLs.
