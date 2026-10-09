# Safari Golf Tour

Marketing site for Safari Golf Tour: golf and safari journeys across East and Southern Africa.

Editorial safari look (Cormorant Garamond, forest green, cream and gold, full-bleed photography) on a cinematic single-CTA page structure: fixed minimal header, full-screen overlay menu, 100vh hero, pillar section, glowing guest-quote card, feature blocks with an image mosaic, full-bleed feature sections, a dark enquiry form and a multi-column footer.

## Pages

| File | Purpose |
| --- | --- |
| `index.html` | Home: hero, trust strip, pillars, flagship journey, three ways to travel, selected journeys, guest words, what we arrange, hosted departures, destinations, philosophy, encounters, journal notes, enquiry form |
| `journeys.html` | All journeys with region / length / budget filters and sorting. `journeys.html#<id>` opens the full itinerary, with courses and stays linked |
| `countries.html` | Browse thirteen countries. `countries.html#<id>` opens a country with its courses and its parks side by side, each with an Add to trip button |
| `parks.html` | Every national park, reserve and conservancy, filterable by country, type and wildlife, with the nearest course and travel time |
| `build.html` | Trip builder: ordered stops, nights per park, indicative price, day-by-day outline, load a journey, send the plan to the brief |
| `departures.html` | Hosted departures by date for 2027 and 2028, with places left and a reserve link |
| `destinations.html` | Redirects to `countries.html` (old links keep working) |
| `courses.html` | Every course we play, filterable by country. `#<id>` jumps to one |
| `stays.html` | Camps, lodges, resorts and hotels, filterable by destination and type. `#<id>` jumps to one |
| `encounters.html` | Seven arranged encounters and the journeys they belong to. `#<id>` jumps to one |
| `journal.html` | Field notes. `journal.html#<slug>` opens an article |
| `about.html` | Our story, stats, how it works (`#how`), what we believe |
| `contact.html` | Design-your-safari brief (`?journey=<id>` or `?departure=<id>` preselects), contact details, FAQ (`#faq`) |
| `terms.html`, `privacy.html` | Legal drafts for review |

## Structure

- `js/packages.js` — journeys (with courses, stays and day-by-day itineraries), destinations, guest quotes, photo ids and site config (`SGT.CONFIG`).
- `js/content.js` — courses, stays, hosted departures, encounters and journal articles, plus lookups.
- `js/places.js` — the thirteen countries (East, Southern, North and West Africa and the Indian Ocean), 55 national parks, reserves and deserts (each with its nearest course), extra courses, and the trip builder's indicative rates (`SGT.RATES`). Edit these three files to change content; every page renders from them.
- `js/site.js` — shared chrome injected on every page: header, overlay menu, footer, floating chat button, reveal-on-scroll, enquiry-form handling, and the trip state (`SGT.trip`, stored in the visitor's `localStorage` under `sgt-trip`) with the course, park and country cards and the floating "Your trip" tray.
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

Append an object to `JOURNEYS` in `js/packages.js`. It appears automatically in the journeys grid, the footer, the enquiry selects and the "also consider" list. Fields: `id`, `name`, `strap`, `tagline`, `countries`, `region` (must match a value in the journeys filter), `nights`, `rounds`, `gameDrives`, `priceFrom`, `tier` (`signature` or `flagship`), `bestMonths`, `photo` (a key of `PHOTO`), `route`, `intro`, `highlights`, `courses`, `stays`, `itinerary`. Course and stay names are matched to `COURSES` and `STAYS` in `js/content.js` to link them.

Hosted departures, courses, stays, encounters and journal articles are plain arrays in `js/content.js` and follow the same pattern.

To use your own photography, add a new key to `PHOTO` or change `SGT.img()` to return your own URLs.

## Trip builder

Visitors add courses and parks from the country, courses and parks pages. The selection lives in the visitor's browser (`localStorage`, key `sgt-trip`). `build.html` orders the stops (Southern Africa, then Indian Ocean, then East Africa; golf before safari within each country), lets them set nights per park, prices the trip from `SGT.RATES` in `js/places.js`, drafts a day-by-day outline, and hands a text summary to the enquiry form via `contact.html?plan=1`. "Load into the builder" on any journey converts its courses and route into stops.

Rates are indicative placeholders: per course day, per park night by tier, a gorilla permit, a transfer allowance per stop and per border. Change them in one place.
