# Safari Golf Tour

Marketing site for Safari Golf Tour: golf and safari journeys across East and Southern Africa.

Editorial safari look (Cormorant Garamond, forest green, cream and gold, full-bleed photography) on a cinematic single-CTA page structure: fixed minimal header, full-screen overlay menu, 100vh hero, pillar section, glowing guest-quote card, feature blocks with an image mosaic, full-bleed feature sections, a dark enquiry form and a multi-column footer.

## Pages

| File | Purpose |
| --- | --- |
| `index.html` | Home: split golf/safari hero with stats, how it works, flagship journey, three ways to travel, selected journeys, guest words, what we arrange, hosted departures, destinations, philosophy, encounters, journal notes, enquiry form |
| `journeys.html` | All journeys with region / length / budget filters and sorting. `journeys.html#<id>` opens the full itinerary, with courses and stays linked |
| `countries.html` | Browse thirteen countries. `countries.html#<id>` opens a country with its courses and its parks side by side, each with an Add to trip button |
| `parks.html` | Every national park, reserve and conservancy, filterable by country, type and wildlife, with the nearest course and travel time |
| `build.html` | Trip builder: ordered stops, nights per park, indicative price, day-by-day outline, load a journey, send the plan to the brief |
| `departures.html` | Hosted departures by date for 2027 and 2028, with places left and a reserve link |
| `destinations.html` | Redirects to `countries.html` (old links keep working) |
| `courses.html` | Every course we play, filterable by country, each with a cinematic aerial cover and its short name as a hand-lettered film title. `courses.html#<id>` opens the course page: full-screen film hero, facts, story, signature hole, caddies and dress code, nearby parks, journeys and stays |
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
- `js/course-info.js` — full information for every course (length, founding, turf, signature hole, caddies, dress code, best months), plus `short` (the film-title name, e.g. Muthaiga) and `cover` (the aerial photograph). `SGT.courseFilm(course)` in `js/site.js` renders the cover; titles and the wordmark are set in the site's wide Archivo heading face, mixed case. Course covers are real photographs (Pexels ids prefixed `px:`), cropped to the turf unless `sky` is set because the backdrop depicts the place. Parks and countries carry the same poster treatment.
- `js/site.js` — shared chrome injected on every page: header, overlay menu, footer, floating chat button, reveal-on-scroll, enquiry-form handling, and the trip state (`SGT.trip`, stored in the visitor's `localStorage` under `sgt-trip`) with the course, park and country cards and the floating "Your trip" tray.
- `js/pages/*.js` — per-page rendering.
- `css/styles.css` — the design system.

No build step and no dependencies. Archivo is self-hosted in `fonts/` and photography comes from Unsplash and Pexels (free licence, ids listed in `js/packages.js`).

## Configure

In `js/packages.js`, `SGT.CONFIG` holds:

- `email` — `safarigolftour@tourground.com`, shown in the menu, footer, contact page and legal pages.
- `address` — the business address (Kofisi Riverside, Nairobi), shown in the menu, footer, contact page and legal pages.

By owner decision (October 2026) the site has no phone, WhatsApp, chat button, social links, licence numbers or guest quotes.

## Run locally

```sh
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy

The live site is **https://safarigolftour.tourground.com**, hosted on Vercel as a subdomain of `tourground.com` (registered at GoDaddy). Brand sites follow the pattern `{brand}.tourground.com`.

### 1. Vercel project

1. In Vercel, **Add New → Project**, import `benjamingjoel2/safari-golf-tour`.
2. Framework preset **Other**, no build command, output directory = repo root.
3. Set the production branch to the branch you deploy from.

`vercel.json` sets caching: photos in `img/` are cached for a year (`immutable`), CSS and JS for an hour in the browser and until the next deploy at Vercel's edge, HTML is always revalidated.

### 2. Domain

In the project: **Settings → Domains → Add** `safarigolftour.tourground.com`. Then the DNS record, depending on who runs DNS for `tourground.com` (check the nameservers on the domain in GoDaddy, or `dig NS tourground.com`):

- **Nameservers are Vercel's** (`ns1.vercel-dns.com`, `ns2.vercel-dns.com`): nothing to do in GoDaddy. Vercel creates the record and the certificate itself.
- **Nameservers are GoDaddy's**: in GoDaddy, **My Products → tourground.com → DNS → Add record**:

  | Type | Name | Value | TTL |
  |---|---|---|---|
  | A | `safarigolftour` | the A-record IP Vercel shows for the domain (currently `76.76.21.21`) | 1 hour |

  Use an **A record, not a CNAME**: a name with a CNAME cannot also carry the MX and TXT records the brand email needs (step 3). Vercel accepts either and issues the HTTPS certificate once the record resolves (usually minutes).

### 3. Email: `safarigolftour@tourground.com`

The brand uses the shared `tourground.com` mailbox format, so no per-subdomain mail setup is needed. The notes below are kept for reference only.

Vercel does not host email, so the address needs a mail provider (Google Workspace, Zoho Mail, Microsoft 365, or a forwarder such as ImprovMX). Add `safarigolftour.tourground.com` in the provider, then put the records it gives you on the same name, `safarigolftour`, wherever DNS lives (GoDaddy DNS, or Vercel → Domains → tourground.com → DNS Records):

| Type | Name | Value |
|---|---|---|
| MX | `safarigolftour` | the provider's mail servers and priorities |
| TXT | `safarigolftour` | SPF, e.g. `v=spf1 include:_spf.google.com ~all` for Google |
| TXT | as given | DKIM key from the provider |
| TXT | `_dmarc.safarigolftour` | `v=DMARC1; p=none; rua=mailto:safarigolftour@tourground.com` |

The address shown on the site comes from `CONFIG.email` in `js/packages.js`.

The old `.github/workflows/pages.yml` (GitHub Pages) still works for a preview copy; any static host works with no build step.

## Enquiry forms

Both forms validate client-side and, with no backend yet, store submissions in the visitor's `localStorage` under `sgt-enquiries`. To go live, replace the body of `S.bindEnquiryForm` in `js/site.js` with a POST to your form endpoint (Formspree, Netlify Forms, a serverless function).

## Languages

The site is in English (default, at the current URLs), French (`/fr/`), German (`/de/`) and Spanish (`/es/`). Each language is a pre-rendered copy built by `scripts/i18n.mjs` from the English pages and scripts, using the dictionaries in `i18n/{fr,de,es}.json` (`{ "English text": "translation" }`). No translation library runs in the browser.

After changing any English copy (HTML or the data in `js/`), run:

```
node scripts/i18n.mjs extract   # list every translatable string in i18n/strings.json
node scripts/i18n.mjs check     # rebuild fr/, de/, es/ and the js/*.fr|de|es.js copies; fails if a string has no translation
```

Add the missing strings to the three dictionaries, run `check` again and commit the regenerated folders (Vercel serves the repo as is, with no build step). The EN · FR · DE · ES switch in the header and the menu links to the same page in the other language; every page carries `hreflang` alternates (with `x-default` = English) and a canonical, and `sitemap.xml` lists all four languages.

## Adding a journey

Append an object to `JOURNEYS` in `js/packages.js`. It appears automatically in the journeys grid, the footer, the enquiry selects and the "also consider" list. Fields: `id`, `name`, `strap`, `tagline`, `countries`, `region` (must match a value in the journeys filter), `nights`, `rounds`, `gameDrives`, `priceFrom`, `tier` (`signature` or `flagship`), `bestMonths`, `photo` (a key of `PHOTO`), `route`, `intro`, `highlights`, `courses`, `stays`, `itinerary`. Course and stay names are matched to `COURSES` and `STAYS` in `js/content.js` to link them.

Hosted departures, courses, stays, encounters and journal articles are plain arrays in `js/content.js` and follow the same pattern.

To use your own photography, add a new key to `PHOTO` or change `SGT.img()` to return your own URLs.

## Trip builder

Visitors add courses and parks from the country, courses and parks pages. The selection lives in the visitor's browser (`localStorage`, key `sgt-trip`). `build.html` orders the stops (Southern Africa, then Indian Ocean, then East Africa; golf before safari within each country), lets them set nights per park, prices the trip from `SGT.RATES` in `js/places.js`, drafts a day-by-day outline, and hands a text summary to the enquiry form via `contact.html?plan=1`. "Load into the builder" on any journey converts its courses and route into stops.

Rates are indicative placeholders: per course day, per park night by tier, a gorilla permit, a transfer allowance per stop and per border. Change them in one place.
