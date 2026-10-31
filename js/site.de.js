/* Shared chrome: header, overlay menu, footer, floating chat, reveal-on-scroll.
 * Every page includes js/packages.js then js/site.js. Page-specific code lives in js/pages/*.js.
 */
(function () {
  "use strict";

  var S = window.SGT;
  var C = S.CONFIG;
  // Site root from this script's URL, so shared images load from the language folders (fr/, de/, es/) too.
  var ROOT = (document.currentScript && document.currentScript.src || "").replace(/js\/[^\/]*$/, "");
  var LANG = (document.documentElement.lang || "en").slice(0, 2);

  var NAV = [
    { href: "index.html", label: "Startseite", num: "01" },
    { href: "countries.html", label: "Länder", num: "02" },
    { href: "courses.html", label: "Golfplätze", num: "03" },
    { href: "parks.html", label: "Nationalparks", num: "04" },
    { href: "build.html", label: "Reiseplaner", num: "05" },
    { href: "journeys.html", label: "Reisen", num: "06" },
    { href: "departures.html", label: "Begleitete Reisen", num: "07" },
    { href: "stays.html", label: "Unterkünfte", num: "08" },
    { href: "encounters.html", label: "Begegnungen", num: "09" },
    { href: "journal.html", label: "Journal", num: "10" },
    { href: "about.html", label: "Unsere Geschichte", num: "11" },
    { href: "contact.html", label: "Ihre Safari gestalten", num: "12" }
  ];
  var HEADER_NAV = ["countries.html", "courses.html", "parks.html", "journeys.html", "about.html"];

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  S.esc = esc;

  S.money = function (n) {
    return "US$" + Number(n).toLocaleString(LANG === "en" ? "en-US" : LANG);
  };

  S.journey = function (id) {
    return S.JOURNEYS.filter(function (j) { return j.id === id; })[0] || null;
  };

  S.jcard = function (j, opts) {
    opts = opts || {};
    var countries = j.countries.join(" · ");
    return (
      '<a class="jcard reveal" href="journeys.html#' + esc(j.id) + '">' +
        '<div class="jcard-media">' +
          S.pic(j.photo, { w: 800, h: 498, alt: j.name }) +
          (j.tier === "flagship" ? '<span class="tag">Flaggschiff</span>' : "") +
        "</div>" +
        '<div class="jcard-body">' +
          '<p class="eyebrow">' + esc(countries) + " · " + j.nights + " Nächte</p>" +
          "<h3>" + esc(j.name) + "</h3>" +
          "<p>" + esc(opts.short ? j.tagline : j.strap + " " + j.tagline + ".") + "</p>" +
          '<div class="jcard-foot">' +
            '<span class="price">Ab <strong>' + S.money(j.priceFrom) + "</strong> p. P. im Doppelzimmer</span>" +
            '<span class="btn-link">Zur Reise</span>' +
          "</div>" +
        "</div>" +
      "</a>"
    );
  };

  var page = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  if (page === "") page = "index.html";

  /* ---------- Header ---------- */
  var mark = '<img class="brand-mark" src="' + ROOT + 'img/logo-96.png" srcset="' + ROOT + 'img/logo-96.png 2x, ' + ROOT + 'img/logo-240.png 5x" alt="" width="42" height="40" />';

  /* Language switch: the same page in English, French, German and Spanish (pages built by scripts/i18n.mjs). */
  var LANGS = [["en", "EN", "English"], ["fr", "FR", "Français"], ["de", "DE", "Deutsch"], ["es", "ES", "Español"]];
  function langSwitch(variant) {
    return '<nav class="lang-switch lang-switch--' + variant + '" aria-label="' + "Language" + '">' + LANGS.map(function (l) {
      var href = (LANG === "en" ? "" : "../") + (l[0] === "en" ? "" : l[0] + "/") + page + location.hash;
      return '<a class="lang-switch__link" href="' + href + '" hreflang="' + l[0] + '" lang="' + l[0] + '"' + (l[0] === LANG ? ' aria-current="true"' : "") + '><span aria-hidden="true">' + l[1] + '</span><span class="lang-switch__sr">' + l[2] + "</span></a>";
    }).join('<span class="lang-switch__sep" aria-hidden="true">·</span>') + "</nav>";
  }

  var headerHtml =
    '<header class="site-header" id="site-header">' +
      '<div class="container header-inner">' +
        '<a class="brand" href="index.html" aria-label="' + esc(C.brand) + ", " + "Startseite" + '">' + mark +
          '<span class="brand-name">' + esc(C.brand) + "</span>" +
        "</a>" +
        '<div class="header-actions">' +
          '<nav class="header-nav" aria-label="Hauptnavigation">' +
            NAV.filter(function (n) { return HEADER_NAV.indexOf(n.href) !== -1; }).map(function (n) {
              return '<a href="' + n.href + '"' + (n.href === page ? ' aria-current="page"' : "") + ">" + esc(n.label) + "</a>";
            }).join("") +
          "</nav>" +
          langSwitch("bar") +
          '<a class="btn btn-gold btn-sm header-cta" href="build.html">Reise zusammenstellen</a>' +
          '<button class="menu-btn" type="button" aria-expanded="false" aria-controls="site-menu" aria-label="Menü öffnen"><span></span><span></span><span></span></button>' +
        "</div>" +
      "</div>" +
    "</header>" +
    '<div class="menu" id="site-menu" aria-hidden="true">' +
      '<div class="menu-inner">' +
        '<nav aria-label="Menü"><ul class="menu-links">' +
          NAV.map(function (n, i) {
            return '<li><a href="' + n.href + '"' + (n.href === page ? ' aria-current="page"' : "") + ' style="transition-delay:' + (0.08 + i * 0.06) + 's"><small>' + n.num + "</small>" + esc(n.label) + "</a></li>";
          }).join("") +
        "</ul></nav>" +
        '<div class="menu-side">' +
          "<h4>Mit einem Planer sprechen</h4>" +
          (C.email ? '<p class="menu-contact"><a href="mailto:' + esc(C.email) + '">' + esc(C.email) + "</a></p>" : "") +
          '<p class="menu-note">' + esc(C.address) + ". Antwort innerhalb eines Werktages.</p>" +
          '<a class="btn btn-gold" href="contact.html">Ihre Safari gestalten</a>' +
          langSwitch("menu") +
        "</div>" +
      "</div>" +
    "</div>";

  document.body.insertAdjacentHTML("afterbegin", headerHtml);

  var header = document.getElementById("site-header");
  var menu = document.getElementById("site-menu");
  var menuBtn = header.querySelector(".menu-btn");

  /* Over a dark photo hero the header starts transparent; once scrolled it turns to glass. */
  function startsDark() {
    var y = header.offsetHeight + 8;
    var stack = document.elementsFromPoint ? document.elementsFromPoint(window.innerWidth / 2, y) : [];
    for (var i = 0; i < stack.length; i++) {
      if (header.contains(stack[i]) || stack[i].closest(".menu, .chat-fab")) continue;
      return !!stack[i].closest(".hero:not(.hero-plain), .course-film-hero");
    }
    return false;
  }
  function onScroll() {
    var scrolled = window.scrollY > 40;
    header.classList.toggle("scrolled", scrolled);
    header.classList.toggle("over-hero", !scrolled && startsDark());
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  window.addEventListener("hashchange", function () { setTimeout(onScroll, 0); });
  window.addEventListener("load", onScroll);
  onScroll();

  function setMenu(open) {
    menu.classList.toggle("open", open);
    menu.setAttribute("aria-hidden", String(!open));
    menuBtn.setAttribute("aria-expanded", String(open));
    menuBtn.setAttribute("aria-label", open ? "Menü schließen" : "Menü öffnen");
    document.body.classList.toggle("no-scroll", open);
    if (open) {
      var first = menu.querySelector("a");
      if (first) first.focus();
    } else {
      menuBtn.focus();
    }
  }
  menuBtn.addEventListener("click", function () { setMenu(!menu.classList.contains("open")); });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && menu.classList.contains("open")) setMenu(false);
  });
  menu.addEventListener("click", function (e) {
    if (e.target.closest("a")) setMenu(false);
  });

  /* ---------- Footer ---------- */
  var footerHtml =
    '<footer class="site-footer">' +
      '<div class="container">' +
        '<div class="footer-grid five">' +
          '<div class="footer-brand">' +
            '<a class="brand" href="index.html" aria-label="' + esc(C.brand) + ", " + "Startseite" + '">' + mark + '<span class="brand-name">' + esc(C.brand) + "</span></a>" +
            '<p style="margin-top:18px">Zuerst die Safari, Golf eingewoben. Golf- und Safarireisen in dreizehn afrikanischen Ländern, für jeden Gast einzeln geplant von Menschen, die überall dort selbst gespielt und übernachtet haben.</p>' +
          "</div>" +
          "<div><h4>Das Erlebnis</h4><ul>" +
            '<li><a href="encounters.html">Begegnungen</a></li>' +
            '<li><a href="courses.html">Die Plätze</a></li>' +
            '<li><a href="stays.html">Wo Sie übernachten</a></li>' +
            '<li><a href="departures.html">Begleitete Reisen</a></li>' +
            '<li><a href="build.html">Reiseplaner</a></li>' +
            '<li><a href="journal.html#a-day-in-two-halves">Warum eine Golfsafari</a></li>' +
            '<li><a href="journal.html#packing-clubs-for-africa">Mit Schlägern reisen</a></li>' +
          "</ul></div>" +
          "<div><h4>Reisen</h4><ul>" +
            S.JOURNEYS.map(function (j) { return '<li><a href="journeys.html#' + esc(j.id) + '">' + esc(j.name) + "</a></li>"; }).join("") +
            '<li><a href="journeys.html">Alle Reisen</a></li>' +
          "</ul></div>" +
          "<div><h4>Länder</h4><ul>" +
            S.COUNTRIES.map(function (d) { return '<li><a href="countries.html#' + esc(d.id) + '">' + esc(d.name) + "</a></li>"; }).join("") +
            '<li><a href="parks.html">Alle Parks und Reservate</a></li>' +
          "</ul></div>" +
          "<div><h4>" + esc(C.brand) + "</h4><ul>" +
            '<li><a href="about.html">Unsere Geschichte</a></li>' +
            '<li><a href="about.html#how">So funktioniert es</a></li>' +
            '<li><a href="journal.html">Das Journal</a></li>' +
            '<li><a href="contact.html">Ihre Safari gestalten</a></li>' +
            '<li><a href="contact.html#faq">Gut zu wissen</a></li>' +
            '<li><a href="privacy.html">Datenschutzerklärung</a></li>' +
            '<li><a href="terms.html">Buchungsbedingungen</a></li>' +
            '<li><a href="cookies.html">Cookie-Richtlinie</a></li>' +
            (C.email ? '<li><a href="mailto:' + esc(C.email) + '">' + esc(C.email) + "</a></li>" : "") +
          "</ul></div>" +
        "</div>" +
        '<div class="footer-bottom">' +
          "<span>© " + new Date().getFullYear() + " " + esc(C.brand) + ". Richtpreise pro Person im Doppelzimmer, nur Landleistungen, vorbehaltlich Verfügbarkeit.</span>" +
          "<span>" + esc(C.address) + "</span>" +
        "</div>" +
      "</div>" +
    "</footer>";

  document.body.insertAdjacentHTML("beforeend", footerHtml);

  /* ---------- Trip builder: shared state, cards and tray ---------- */
  S.trip = {
    get: function () {
      try { var v = JSON.parse(localStorage.getItem("sgt-trip") || "[]"); return Array.isArray(v) ? v : []; } catch (e) { return []; }
    },
    set: function (items) {
      try { localStorage.setItem("sgt-trip", JSON.stringify(items)); } catch (e) { /* storage unavailable */ }
      S.updateTray();
      window.dispatchEvent(new CustomEvent("sgt-trip-change"));
    },
    has: function (type, id) { return S.trip.get().some(function (i) { return i.type === type && i.id === id; }); },
    toggle: function (type, id) {
      var items = S.trip.get();
      var idx = -1;
      items.forEach(function (i, k) { if (i.type === type && i.id === id) idx = k; });
      if (idx >= 0) items.splice(idx, 1); else items.push({ type: type, id: id, nights: type === "park" ? 3 : 1 });
      S.trip.set(items);
    }
  };

  S.addBtn = function (type, id) {
    return '<button type="button" class="btn btn-outline btn-sm add-btn" data-trip-type="' + esc(type) + '" data-trip-id="' + esc(id) + '">Zur Reise hinzufügen</button>';
  };

  S.refreshTripButtons = function () {
    document.querySelectorAll(".add-btn").forEach(function (b) {
      var on = S.trip.has(b.getAttribute("data-trip-type"), b.getAttribute("data-trip-id"));
      b.classList.toggle("is-added", on);
      b.textContent = on ? "✓ In Ihrer Reise" : "Zur Reise hinzufügen";
    });
    S.updateTray();
  };

  S.updateTray = function () {
    var fab = document.getElementById("trip-fab");
    if (!fab) return;
    var n = S.trip.get().length;
    fab.querySelector("b").textContent = String(n);
    fab.hidden = n === 0 || page === "build.html";
  };

  /* Poster: a photograph cropped to the ground with a hand-lettered title and a smaller line beneath. */
  /* Poster titles share one size per set: every title in a set is sized to fit the longest
   * name in that set (courses, parks, countries), so a short name never outgrows a long one. */
  var PARK_SHORT = { "ngorongoro": "Ngorongoro", "makgadikgadi": "Makgadikgadi", "kalahari": "Kalahari", "black-river": "Black River", "andasibe": "Andasibe", "tsingy": "Tsingy", "bwindi": "Bwindi", "timbavati": "Timbavati", "sossusvlei-np": "Sossusvlei", "laikipia": "Laikipia", "maasai-mara": "Masai Mara", "kirindy": "Kirindy", "nosy-be": "Nosy Be", "lake-nokoue": "Ganvi\u00e9", "w-benin": "W-Park", "erg-chebbi": "Erg Chebbi", "erg-chigaga": "Erg Chigaga", "souss-massa": "Souss-Massa", "damaraland": "Damaraland", "nyerere": "Nyerere", "nyungwe": "Nyungwe", "phinda": "Phinda", "addo": "Addo" };
  S.parkShort = function (p) {
    if (PARK_SHORT[p.id]) return PARK_SHORT[p.id];
    return p.name.split(/[:&(]/)[0].replace(/ (Private Nature Reserve|National Reserve|National Park|National park|Game Reserve|Private Reserve|Community Reserve|Conservancy|Forest|Desert)$/i, "").trim();
  };
  function longest(list) { return list.reduce(function (m, t) { return Math.max(m, t.length); }, 6); }
  S.posterLen = function (kind) {
    if (!S._posterLen) S._posterLen = {};
    if (!S._posterLen[kind]) {
      var names = kind === "park" ? (S.PARKS || []).map(S.parkShort)
        : kind === "country" ? (S.COUNTRIES || []).map(function (c) { return c.name; })
        : (S.COURSES || []).map(function (c) { return c.short || c.name; });
      S._posterLen[kind] = longest(names);
    }
    return S._posterLen[kind];
  };

  /* Responsive photo: a srcset so phones fetch small files, lazy unless it is a hero. */
  S.SIZES = {
    card: "(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 440px",
    half: "(max-width: 800px) 100vw, 50vw",
    full: "100vw",
    thumb: "96px"
  };
  S.pic = function (key, o) {
    var w = o.w || 800, h = o.h || 0, ratio = h ? h / w : 0;
    return '<img src="' + S.img(key, w, h) + '" srcset="' + S.srcset(key, o.widths || [480, 800, 1200], ratio) + '" sizes="' + (o.sizes || S.SIZES.card) + '"' +
      ' alt="' + esc(o.alt || "") + '" width="' + w + '" height="' + (h || Math.round(w * 0.66)) + '"' +
      (o.priority ? ' fetchpriority="high" decoding="async"' : ' loading="lazy" decoding="async"') + " />";
  };

  /* Poster: a photograph cropped to the ground with an uppercase title and a smaller line beneath. */
  S.poster = function (o) {
    var t = o.title, sub = o.sub || "";
    var len = o.kind ? S.posterLen(o.kind) : Math.max(t.length, 6);
    return (
      '<span class="film' + (o.hero ? " film-hero" : "") + (o.sky ? " film-sky" : "") + '" style="--len:' + len + (o.focus ? ";--focus:" + o.focus : "") + '">' +
        (o.hero
          ? S.pic(o.photo, { w: 1800, h: 1013, widths: [800, 1200, 1800, 2400], sizes: S.SIZES.full, alt: o.alt || t, priority: true })
          : S.pic(o.photo, { w: 960, h: 540, widths: [480, 720, 960, 1280], sizes: S.SIZES.card, alt: o.alt || t })) +
        '<span class="film-title" aria-hidden="true"><span class="film-name">' + esc(t) + "</span>" + (sub ? '<span class="film-sub">' + esc(sub) + "</span>" : "") + "</span>" +
      "</span>"
    );
  };
  S.courseFilm = function (c, opts) {
    opts = opts || {};
    return S.poster({ kind: "course", title: c.short || c.name, sub: c.country, photo: c.cover || c.photo, focus: c.focus, sky: c.sky, hero: opts.hero, w: opts.w, h: opts.h, alt: c.name + ", " + c.country });
  };

  /* One line of provenance under a course: the designer when the name carries weight, otherwise the founding year. */
  var FAMOUS = ["Gary Player", "Jack Nicklaus", "Ernie Els", "Bernhard Langer", "Robert Trent Jones Sr.", "Louis Oosthuizen"];
  var NOTABLE = {
    "muthaiga": "Austragungsort der Kenya Open",
    "entebbe": "Der älteste Platz Ostafrikas",
    "uganda-gc": "Austragungsort der Uganda Open",
    "royal-marrakech": "27 Löcher",
    "skukuza": "Im Kruger-Nationalpark",
    "heritage-chateau": "Austragungsort der DP World Tour"
  };
  S.courseCredit = function (c) {
    var d = c.designer || "";
    var names = FAMOUS.filter(function (n) { return d.indexOf(n) !== -1; });
    if (names.length) return (names.length < d.split("&").length ? "Mitgestaltet von " : "Entworfen von ") + names.join(" & ");
    var year = c.founded ? (c.founded >= 2020 ? "Eröffnet " : "Gegründet ") + c.founded : "";
    return [year, NOTABLE[c.id]].filter(Boolean).join(" · ");
  };

  S.courseCard = function (c) {
    var js = (S.JOURNEYS || []).filter(function (j) {
      return j.courses.some(function (x) { var m = S.courseByName(x.name); return m && m.id === c.id; });
    });
    return (
      '<article class="jcard course-card reveal" id="' + esc(c.id) + '">' +
        '<a class="jcard-media film-link" href="courses.html#' + esc(c.id) + '" aria-label="' + esc(c.name + ", " + c.country) + '">' + S.courseFilm(c) + '<span class="tag">' + esc(S.courseCredit(c)) + "</span></a>" +
        '<div class="jcard-body">' +
          '<p class="eyebrow">Par ' + c.par + " · " + c.holes + " Löcher</p>" +
          "<p>" + esc(c.note) + "</p>" +
          (js.length ? '<ul class="chips" style="margin-top:6px">' + js.map(function (j) { return '<li><a href="journeys.html#' + esc(j.id) + '" style="text-decoration:none;color:inherit">' + esc(j.name) + "</a></li>"; }).join("") + "</ul>" : "") +
          '<div class="jcard-foot"><a class="btn-link" href="courses.html#' + esc(c.id) + '">Der Platz</a>' + S.addBtn("course", c.id) + "</div>" +
        "</div>" +
      "</article>"
    );
  };

  S.parkCard = function (p) {
    var near = S.course ? S.course(p.nearest.course) : null;
    return (
      '<article class="jcard reveal" id="' + esc(p.id) + '">' +
        '<div class="jcard-media film-link">' + S.poster({ kind: "park", title: S.parkShort(p), sub: p.country, photo: p.photo, alt: p.name + ", " + p.country }) + '<span class="tag">' + esc(p.type) + "</span></div>" +
        '<div class="jcard-body">' +
          '<p class="eyebrow">Beste Zeit ' + esc(p.bestMonths) + "</p>" +
          '<h3 class="sr-only">' + esc(p.name) + "</h3>" +
          '<p class="muted" style="font-family:var(--serif);font-style:italic;font-size:1.1rem">' + esc(p.signature) + "</p>" +
          "<p>" + esc(p.note) + "</p>" +
          '<ul class="chips" style="margin-top:6px">' + p.wildlife.map(function (w) { return "<li>" + esc(w) + "</li>"; }).join("") + "</ul>" +
          (near ? '<p class="nearest"><span>Nächster Golfplatz</span><a href="courses.html#' + esc(near.id) + '">' + esc(near.name) + "</a> · " + esc(p.nearest.how) + "</p>" : "") +
          '<div class="jcard-foot">' + S.addBtn("park", p.id) + "</div>" +
        "</div>" +
      "</article>"
    );
  };

  S.countryTile = function (c, i) {
    var courses = S.coursesIn(c.id).length, parks = S.parksIn(c.id).length;
    return (
      '<a class="dest reveal' + (i % 3 ? " reveal-delay-" + (i % 3) : "") + '" href="countries.html#' + esc(c.id) + '">' +
        S.poster({ kind: "country", title: c.name, sub: c.region, photo: c.photo, alt: c.name }) +
        '<span class="dest-meta">' + courses + (courses === 1 ? " Platz · " : " Plätze · ") + parks + " Parks</span>" +
      "</a>"
    );
  };

  /* Map a journey to builder stops: its courses, plus the parks its route names. */
  S.journeyStops = function (j) {
    var stops = [];
    j.courses.forEach(function (c) {
      var m = S.courseByName(c.name);
      if (m && !/optional/i.test(c.name)) stops.push({ type: "course", id: m.id, nights: 1 });
    });
    var routeText = j.route.join(" ").toLowerCase();
    (S.PARKS || []).forEach(function (p) {
      var key = p.name.toLowerCase().split(/[:&(]/)[0].replace(/national park|game reserve|private reserve|impenetrable forest|conservancies/g, "").trim();
      if (key && routeText.indexOf(key) !== -1) stops.push({ type: "park", id: p.id, nights: 3 });
    });
    return stops;
  };

  /* Group stops by country (North and West Africa first, then Southern Africa, Indian Ocean, East Africa), golf before safari within each country. */
  S.orderStops = function (items) {
    var regionOrder = ["Nordafrika", "Westafrika", "Südliches Afrika", "Indischer Ozean", "Ostafrika"];
    function countryOf(i) {
      if (i.type === "park") { var p = S.park(i.id); return p ? p.countryId : ""; }
      var c = S.course(i.id); var cn = c && S.countryByName(c.country); return cn ? cn.id : "";
    }
    var groups = {}, order = [];
    items.forEach(function (i) { var k = countryOf(i); if (!groups[k]) { groups[k] = []; order.push(k); } groups[k].push(i); });
    order.sort(function (a, b) {
      var ra = regionOrder.indexOf((S.country(a) || {}).region), rb = regionOrder.indexOf((S.country(b) || {}).region);
      return ra - rb || a.localeCompare(b);
    });
    var out = [];
    order.forEach(function (k) {
      groups[k].filter(function (i) { return i.type === "course"; }).forEach(function (i) { out.push(i); });
      groups[k].filter(function (i) { return i.type === "park"; }).forEach(function (i) { out.push(i); });
    });
    return out;
  };

  document.body.insertAdjacentHTML("beforeend",
    '<a class="trip-fab" id="trip-fab" href="build.html" hidden><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12l16-7-7 16-2-7z"/></svg>Ihre Reise · <b>0</b></a>');

  document.addEventListener("click", function (e) {
    var add = e.target.closest(".add-btn");
    if (add) { e.preventDefault(); S.trip.toggle(add.getAttribute("data-trip-type"), add.getAttribute("data-trip-id")); S.refreshTripButtons(); return; }
    var load = e.target.closest("[data-load-journey]");
    if (load) {
      var j = S.journey(load.getAttribute("data-load-journey"));
      if (!j) return;
      S.trip.set(S.orderStops(S.journeyStops(j)));
      if (page !== "build.html") location.href = "build.html";
    }
  });
  window.addEventListener("storage", function (ev) { if (ev.key === "sgt-trip") S.refreshTripButtons(); });
  S.updateTray();

  /* ---------- Enquiry forms ---------- */
  S.populateJourneySelect = function (select) {
    if (!select) return;
    S.JOURNEYS.forEach(function (j) {
      var o = document.createElement("option");
      o.value = j.id;
      o.textContent = j.name + " · " + j.nights + " Nächte";
      select.appendChild(o);
    });
    var pre = new URLSearchParams(location.search).get("journey");
    if (pre && S.journey(pre)) select.value = pre;
  };

  S.populateDepartureSelect = function (select) {
    if (!select || !S.DEPARTURES) return;
    S.DEPARTURES.slice().sort(function (a, b) { return a.start < b.start ? -1 : 1; }).forEach(function (d) {
      var j = S.journey(d.journey);
      var o = document.createElement("option");
      o.value = d.id;
      o.textContent = S.formatDate(d.start) + " · " + j.name + (d.left === 0 ? " (Warteliste)" : "");
      select.appendChild(o);
    });
    var pre = new URLSearchParams(location.search).get("departure");
    if (pre && S.departure(pre)) {
      select.value = pre;
      var js = select.form && select.form.elements.journey;
      if (js) js.value = S.departure(pre).journey;
    }
  };

  S.bindEnquiryForm = function (form, success) {
    if (!form) return;
    var error = form.querySelector(".form-error");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var problems = [];
      var name = form.elements.name;
      var email = form.elements.email;
      [name, email].forEach(function (el) { el.closest(".field").classList.remove("invalid"); });
      if (!name.value.trim()) { problems.push("Ihren Namen"); name.closest(".field").classList.add("invalid"); }
      if (!email.value.trim() || !email.checkValidity()) { problems.push("eine gültige E-Mail-Adresse"); email.closest(".field").classList.add("invalid"); }
      if (problems.length) {
        error.textContent = "Bitte ergänzen Sie " + problems.join(" und ") + ".";
        error.hidden = false;
        (problems[0] === "Ihren Namen" ? name : email).focus();
        return;
      }
      error.hidden = true;
      var payload = { submittedAt: new Date().toISOString(), page: page };
      new FormData(form).forEach(function (v, k) { payload[k] = v; });
      try {
        var stored = JSON.parse(localStorage.getItem("sgt-enquiries") || "[]");
        stored.push(payload);
        localStorage.setItem("sgt-enquiries", JSON.stringify(stored));
      } catch (err) { /* storage unavailable */ }
      form.hidden = true;
      success.hidden = false;
      success.scrollIntoView({ block: "center", behavior: "smooth" });
    });
  };

  /* ---------- Reveal ----------
   * Elements with .reveal fade in when they enter the viewport. Three layers keep this
   * from ever leaving content hidden: IntersectionObserver, a scroll-position fallback,
   * and a timer that reveals everything if the observer has not reported at all.
   */
  var ioReported = false;
  function revealAll() {
    document.querySelectorAll(".reveal:not(.in)").forEach(function (el) { el.classList.add("in"); });
  }
  function revealByPosition() {
    var vh = window.innerHeight || document.documentElement.clientHeight || 800;
    document.querySelectorAll(".reveal:not(.in)").forEach(function (el) {
      var r = el.getBoundingClientRect();
      if (r.top < vh * 0.96 && r.bottom > 0) el.classList.add("in");
    });
  }
  S.observeReveals = function () {
    var els = document.querySelectorAll(".reveal:not(.in)");
    if (!("IntersectionObserver" in window)) { revealAll(); return; }
    var io = new IntersectionObserver(function (entries) {
      ioReported = true;
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    els.forEach(function (el) { io.observe(el); });
    revealByPosition();
  };
  var ticking = false;
  function onScrollReveal() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () { revealByPosition(); ticking = false; });
  }
  window.addEventListener("scroll", onScrollReveal, { passive: true });
  window.addEventListener("resize", onScrollReveal);
  window.addEventListener("load", function () { revealByPosition(); });
  setTimeout(function () { if (!ioReported) revealAll(); }, 1500);
  setTimeout(revealByPosition, 300);
  S.observeReveals();

  /* Split heroes: golf on the left, safari on the right. Scrolling slides the
     separator left so the safari takes over; scrolling back slides it home.
     The home hero is pinned inside .hero-track for the length of the move.
     The separator can also be dragged (line or knob) or nudged with the arrow
     keys; a drag shifts it relative to where scrolling has put it. */
  var wipes = [].slice.call(document.querySelectorAll(".hero-wipe"));
  var calm = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var clamp = function (v, lo, hi) { return Math.min(hi, Math.max(lo, v)); };
  var scrollPos = function (w) {
    if (calm) return 50;
    var hero = w.closest(".hero"), track = hero.parentElement.classList.contains("hero-track") ? hero.parentElement : null, p;
    if (track) p = -track.getBoundingClientRect().top / Math.max(1, track.offsetHeight - hero.offsetHeight);
    else p = -hero.getBoundingClientRect().top / Math.max(1, hero.offsetHeight * 0.6);
    return 50 * (1 - clamp(p, 0, 1));
  };
  var renderWipe = function (w) {
    var v = clamp(scrollPos(w) + (w._offset || 0), 0, 100);
    w.style.setProperty("--p", v.toFixed(2) + "%");
    var knob = w.querySelector(".hero-knob");
    if (knob) {
      /* keep the knob on screen when the line reaches an edge */
      var px = v / 100 * w.offsetWidth, half = knob.offsetWidth / 2 + 8;
      var shift = px < half ? half - px : (w.offsetWidth - px < half ? -(half - (w.offsetWidth - px)) : 0);
      knob.style.setProperty("--shift", shift.toFixed(1) + "px");
      knob.setAttribute("aria-valuenow", String(Math.round(100 - v)));
    }
  };
  wipes.forEach(function (w) {
    var hero = w.closest(".hero"), sep = w.querySelector(".hero-sep"), knob = w.querySelector(".hero-knob");
    if (!sep || !knob) return;
    w._offset = 0;
    hero.classList.add("has-wipe");
    sep.removeAttribute("aria-hidden");
    knob.setAttribute("role", "slider");
    knob.setAttribute("tabindex", "0");
    knob.setAttribute("aria-label", "Trenner zwischen Golf und Safari: ziehen oder die Pfeiltasten verwenden");
    knob.setAttribute("aria-valuemin", "0");
    knob.setAttribute("aria-valuemax", "100");
    knob.setAttribute("aria-valuetext", "Anteil des Bildes mit Safari");
    var dragging = null;
    var moveTo = function (clientX) {
      var r = w.getBoundingClientRect();
      var want = clamp((clientX - r.left) / r.width * 100, 0, 100);
      w._offset = want - scrollPos(w);
      renderWipe(w);
    };
    var start = function (e) {
      if (e.button !== undefined && e.button !== 0) return;
      dragging = { id: e.pointerId };
      try { e.target.setPointerCapture(e.pointerId); } catch (err) { /* older browsers */ }
      w.classList.add("is-dragging");
      if (e.target === knob) e.preventDefault();
      moveTo(e.clientX);
    };
    var move = function (e) { if (dragging && e.pointerId === dragging.id) moveTo(e.clientX); };
    var end = function (e) {
      if (!dragging || e.pointerId !== dragging.id) return;
      dragging = null;
      w.classList.remove("is-dragging");
    };
    [sep, knob].forEach(function (el) {
      el.addEventListener("pointerdown", function (e) { e.stopPropagation(); start(e); });
      el.addEventListener("pointermove", move);
      el.addEventListener("pointerup", end);
      el.addEventListener("pointercancel", end);
      el.addEventListener("lostpointercapture", end);
    });
    knob.addEventListener("keydown", function (e) {
      var step = e.shiftKey ? 20 : 5, cur = scrollPos(w) + w._offset, next = null;
      if (e.key === "ArrowLeft" || e.key === "ArrowDown") next = cur - step;
      else if (e.key === "ArrowRight" || e.key === "ArrowUp") next = cur + step;
      else if (/^Home$/.test(e.key)) next = 0;
      else if (/^End$/.test(e.key)) next = 100;
      if (next === null) return;
      e.preventDefault();
      w._offset = clamp(next, 0, 100) - scrollPos(w);
      renderWipe(w);
    });
  });
  if (wipes.length) {
    var wipeTicking = false;
    var updateWipes = function () { wipeTicking = false; wipes.forEach(renderWipe); };
    var onWipeScroll = function () { if (!wipeTicking) { wipeTicking = true; requestAnimationFrame(updateWipes); } };
    if (!calm) window.addEventListener("scroll", onWipeScroll, { passive: true });
    window.addEventListener("resize", onWipeScroll);
    updateWipes();
  }
})();
