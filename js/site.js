/* Shared chrome: header, overlay menu, footer, floating chat, reveal-on-scroll.
 * Every page includes js/packages.js then js/site.js. Page-specific code lives in js/pages/*.js.
 */
(function () {
  "use strict";

  var S = window.SGT;
  var C = S.CONFIG;

  var NAV = [
    { href: "index.html", label: "Home", num: "01" },
    { href: "countries.html", label: "Countries", num: "02" },
    { href: "courses.html", label: "Golf courses", num: "03" },
    { href: "parks.html", label: "National parks", num: "04" },
    { href: "build.html", label: "Trip builder", num: "05" },
    { href: "journeys.html", label: "Journeys", num: "06" },
    { href: "departures.html", label: "Hosted departures", num: "07" },
    { href: "stays.html", label: "Stays", num: "08" },
    { href: "encounters.html", label: "Encounters", num: "09" },
    { href: "journal.html", label: "Journal", num: "10" },
    { href: "about.html", label: "Our Story", num: "11" },
    { href: "contact.html", label: "Design your safari", num: "12" }
  ];
  var HEADER_NAV = ["countries.html", "courses.html", "parks.html", "journeys.html", "about.html"];

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  S.esc = esc;

  S.money = function (n) {
    return "US$" + Number(n).toLocaleString("en-US");
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
          '<img src="' + S.img(j.photo, 900, 560) + '" alt="' + esc(j.name) + '" width="900" height="560" />' +
          (j.tier === "flagship" ? '<span class="tag">Flagship</span>' : "") +
        "</div>" +
        '<div class="jcard-body">' +
          '<p class="eyebrow">' + esc(countries) + " · " + j.nights + " nights</p>" +
          "<h3>" + esc(j.name) + "</h3>" +
          "<p>" + esc(opts.short ? j.tagline : j.strap + " " + j.tagline + ".") + "</p>" +
          '<div class="jcard-foot">' +
            '<span class="price">From <strong>' + S.money(j.priceFrom) + "</strong> pp sharing</span>" +
            '<span class="btn-link">See the journey</span>' +
          "</div>" +
        "</div>" +
      "</a>"
    );
  };

  var page = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  if (page === "") page = "index.html";

  /* ---------- Header ---------- */
  var mark = '<img class="brand-mark" src="img/logo-96.png" srcset="img/logo-96.png 2x, img/logo-240.png 5x" alt="" width="42" height="40" />';

  var headerHtml =
    '<header class="site-header" id="site-header">' +
      '<div class="container header-inner">' +
        '<a class="brand" href="index.html" aria-label="' + esc(C.brand) + ' home">' + mark +
          '<span class="brand-name">' + esc(C.brand) + "</span>" +
        "</a>" +
        '<div class="header-actions">' +
          '<nav class="header-nav" aria-label="Primary">' +
            NAV.filter(function (n) { return HEADER_NAV.indexOf(n.href) !== -1; }).map(function (n) {
              return '<a href="' + n.href + '"' + (n.href === page ? ' aria-current="page"' : "") + ">" + esc(n.label) + "</a>";
            }).join("") +
          "</nav>" +
          '<a class="btn btn-gold btn-sm header-cta" href="build.html">Build your trip</a>' +
          '<button class="menu-btn" type="button" aria-expanded="false" aria-controls="site-menu" aria-label="Open menu"><span></span><span></span><span></span></button>' +
        "</div>" +
      "</div>" +
    "</header>" +
    '<div class="menu" id="site-menu" aria-hidden="true">' +
      '<div class="menu-inner">' +
        '<nav aria-label="Menu"><ul class="menu-links">' +
          NAV.map(function (n, i) {
            return '<li><a href="' + n.href + '"' + (n.href === page ? ' aria-current="page"' : "") + ' style="transition-delay:' + (0.08 + i * 0.06) + 's"><small>' + n.num + "</small>" + esc(n.label) + "</a></li>";
          }).join("") +
        "</ul></nav>" +
        '<div class="menu-side">' +
          "<h4>Speak to a planner</h4>" +
          (C.email ? '<p><a href="mailto:' + esc(C.email) + '">' + esc(C.email) + "</a></p>" : "") +
          (C.phone ? '<p><a href="tel:' + esc(C.phone.replace(/\s+/g, "")) + '">' + esc(C.phone) + "</a></p>" : "") +
          "<p>Offices in " + esc(C.offices.join(" and ")) + ". Replies within one working day.</p>" +
          '<a class="btn btn-gold" href="contact.html">Design your safari</a>' +
        "</div>" +
      "</div>" +
    "</div>";

  document.body.insertAdjacentHTML("afterbegin", headerHtml);

  var header = document.getElementById("site-header");
  var menu = document.getElementById("site-menu");
  var menuBtn = header.querySelector(".menu-btn");

  function onScroll() {
    header.classList.toggle("scrolled", window.scrollY > 40);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  function setMenu(open) {
    menu.classList.toggle("open", open);
    menu.setAttribute("aria-hidden", String(!open));
    menuBtn.setAttribute("aria-expanded", String(open));
    menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
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
  var social = C.social || {};
  var icons = {
    instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>',
    facebook: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 8h3V4h-3c-2.8 0-4 1.8-4 4v2H7v4h3v6h4v-6h3l1-4h-4V8.5c0-.3.2-.5.5-.5H14z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.5 8.5h-3V20h3V8.5zM5 4a1.8 1.8 0 1 0 0 3.6A1.8 1.8 0 0 0 5 4zm15 9.2c0-3.2-1.7-4.9-4.2-4.9-1.7 0-2.6.9-3 1.6V8.5h-3V20h3v-6.2c0-1.6.6-2.6 2-2.6s1.9 1 1.9 2.6V20h3v-6.8z"/></svg>'
  };
  var socialHtml = Object.keys(social).filter(function (k) { return social[k]; }).map(function (k) {
    return '<a href="' + esc(social[k]) + '" target="_blank" rel="noopener" aria-label="' + k + '">' + icons[k] + "</a>";
  }).join("");

  var footerHtml =
    '<footer class="site-footer">' +
      '<div class="container">' +
        '<div class="footer-grid five">' +
          '<div class="footer-brand">' +
            '<a class="brand" href="index.html" aria-label="' + esc(C.brand) + ' home">' + mark + '<span class="brand-name">' + esc(C.brand) + "</span></a>" +
            '<p style="margin-top:18px">Safari first, golf woven through. Golf and safari journeys across thirteen African countries, built one guest at a time by people who have played and slept their way across all of it.</p>' +
            (socialHtml ? '<div class="socials">' + socialHtml + "</div>" : "") +
          "</div>" +
          "<div><h4>The experience</h4><ul>" +
            '<li><a href="encounters.html">Encounters</a></li>' +
            '<li><a href="courses.html">The courses</a></li>' +
            '<li><a href="stays.html">Where you stay</a></li>' +
            '<li><a href="departures.html">Hosted departures</a></li>' +
            '<li><a href="build.html">Trip builder</a></li>' +
            '<li><a href="journal.html#a-day-in-two-halves">Why a golf safari</a></li>' +
            '<li><a href="journal.html#packing-clubs-for-africa">Travelling with clubs</a></li>' +
          "</ul></div>" +
          "<div><h4>Journeys</h4><ul>" +
            S.JOURNEYS.map(function (j) { return '<li><a href="journeys.html#' + esc(j.id) + '">' + esc(j.name) + "</a></li>"; }).join("") +
            '<li><a href="journeys.html">All journeys</a></li>' +
          "</ul></div>" +
          "<div><h4>Countries</h4><ul>" +
            S.COUNTRIES.map(function (d) { return '<li><a href="countries.html#' + esc(d.id) + '">' + esc(d.name) + "</a></li>"; }).join("") +
            '<li><a href="parks.html">All parks &amp; reserves</a></li>' +
          "</ul></div>" +
          "<div><h4>" + esc(C.brand) + "</h4><ul>" +
            '<li><a href="about.html">Our story</a></li>' +
            '<li><a href="about.html#how">How it works</a></li>' +
            '<li><a href="journal.html">The Journal</a></li>' +
            '<li><a href="contact.html">Design your safari</a></li>' +
            '<li><a href="contact.html#faq">Good to know</a></li>' +
            '<li><a href="terms.html">Terms &amp; conditions</a></li>' +
            '<li><a href="privacy.html">Privacy policy</a></li>' +
            (C.email ? '<li><a href="mailto:' + esc(C.email) + '">' + esc(C.email) + "</a></li>" : "") +
          "</ul></div>" +
        "</div>" +
        '<div class="footer-bottom">' +
          "<span>© " + new Date().getFullYear() + " " + esc(C.brand) + ". Prices are indicative, per person sharing, ground only, and subject to availability.</span>" +
          "<span>Offices in " + esc(C.offices.join(" · ")) + "</span>" +
        "</div>" +
      "</div>" +
    "</footer>";

  document.body.insertAdjacentHTML("beforeend", footerHtml);

  /* ---------- Floating chat ---------- */
  var chatHref = C.whatsapp ? "https://wa.me/" + C.whatsapp : "contact.html";
  var chatIcon = C.whatsapp
    ? '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.6.8-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.1.6 2.8.5a2.4 2.4 0 0 0 1.6-1.1 2 2 0 0 0 .1-1.1c0-.1-.2-.2-.4-.3z"/></svg>'
    : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M4 5h16v11H8l-4 4z"/></svg>';
  document.body.insertAdjacentHTML("beforeend",
    '<a class="chat-fab" href="' + chatHref + '"' + (C.whatsapp ? ' target="_blank" rel="noopener"' : "") + ">" + chatIcon + "<span>Chat to us</span></a>");

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
    return '<button type="button" class="btn btn-outline btn-sm add-btn" data-trip-type="' + esc(type) + '" data-trip-id="' + esc(id) + '">Add to trip</button>';
  };

  S.refreshTripButtons = function () {
    document.querySelectorAll(".add-btn").forEach(function (b) {
      var on = S.trip.has(b.getAttribute("data-trip-type"), b.getAttribute("data-trip-id"));
      b.classList.toggle("is-added", on);
      b.textContent = on ? "✓ In your trip" : "Add to trip";
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
  S.poster = function (o) {
    var t = o.title, sub = o.sub || "";
    return (
      '<span class="film' + (o.hero ? " film-hero" : "") + (o.sky ? " film-sky" : "") + '" style="--len:' + Math.max(t.length, 6) + (o.focus ? ";--focus:" + o.focus : "") + '">' +
        '<img src="' + S.img(o.photo, o.w || 1800, o.h || 1013) + '" alt="' + esc(o.alt || t) + '"' + (o.hero ? ' fetchpriority="high"' : "") + " />" +
        '<span class="film-title" aria-hidden="true"><span class="film-name">' + esc(t) + "</span>" + (sub ? '<span class="film-sub">' + esc(sub) + "</span>" : "") + "</span>" +
      "</span>"
    );
  };
  S.courseFilm = function (c, opts) {
    opts = opts || {};
    return S.poster({ title: c.short || c.name, sub: c.country, photo: c.cover || c.photo, focus: c.focus, sky: c.sky, hero: opts.hero, w: opts.w, h: opts.h, alt: c.name + ", " + c.country });
  };

  S.courseCard = function (c) {
    var js = (S.JOURNEYS || []).filter(function (j) {
      return j.courses.some(function (x) { var m = S.courseByName(x.name); return m && m.id === c.id; });
    });
    var cn = S.countryByName ? S.countryByName(c.country) : null;
    return (
      '<article class="jcard course-card reveal" id="' + esc(c.id) + '">' +
        '<a class="jcard-media film-link" href="courses.html#' + esc(c.id) + '" aria-label="' + esc(c.name) + '">' + S.courseFilm(c) + "</a>" +
        '<div class="jcard-body">' +
          '<p class="eyebrow">' + (cn ? '<a href="countries.html#' + esc(cn.id) + '" style="color:inherit;text-decoration:none">' + esc(c.country) + "</a>" : esc(c.country)) + " · Par " + c.par + " · " + c.holes + " holes</p>" +
          '<h3><a href="courses.html#' + esc(c.id) + '" style="color:inherit;text-decoration:none">' + esc(c.name) + "</a></h3>" +
          '<p class="muted" style="font-size:0.85rem">' + esc(c.designer) + "</p>" +
          "<p>" + esc(c.note) + "</p>" +
          (js.length ? '<ul class="chips" style="margin-top:6px">' + js.map(function (j) { return '<li><a href="journeys.html#' + esc(j.id) + '" style="text-decoration:none;color:inherit">' + esc(j.name) + "</a></li>"; }).join("") + "</ul>" : "") +
          '<div class="jcard-foot"><a class="btn-link" href="courses.html#' + esc(c.id) + '">The course</a>' + S.addBtn("course", c.id) + "</div>" +
        "</div>" +
      "</article>"
    );
  };

  S.parkCard = function (p) {
    var near = S.course ? S.course(p.nearest.course) : null;
    return (
      '<article class="jcard reveal" id="' + esc(p.id) + '">' +
        '<div class="jcard-media film-link">' + S.poster({ title: p.name.split(/[:&(]/)[0].replace(/ (National park|National Park|Game Reserve|Conservancy|Community Reserve|Forest)$/i, "").trim(), sub: p.country, photo: p.photo, alt: p.name + ", " + p.country }) + '<span class="tag">' + esc(p.type) + "</span></div>" +
        '<div class="jcard-body">' +
          '<p class="eyebrow"><a href="countries.html#' + esc(p.countryId) + '" style="color:inherit;text-decoration:none">' + esc(p.country) + "</a> · " + esc(p.bestMonths) + "</p>" +
          "<h3>" + esc(p.name) + "</h3>" +
          '<p class="muted" style="font-family:var(--serif);font-style:italic;font-size:1.1rem">' + esc(p.signature) + "</p>" +
          "<p>" + esc(p.note) + "</p>" +
          '<ul class="chips" style="margin-top:6px">' + p.wildlife.map(function (w) { return "<li>" + esc(w) + "</li>"; }).join("") + "</ul>" +
          (near ? '<p class="nearest"><span>Nearest golf</span><a href="courses.html#' + esc(near.id) + '">' + esc(near.name) + "</a> · " + esc(p.nearest.how) + "</p>" : "") +
          '<div class="jcard-foot">' + S.addBtn("park", p.id) + "</div>" +
        "</div>" +
      "</article>"
    );
  };

  S.countryTile = function (c, i) {
    var courses = S.coursesIn(c.id).length, parks = S.parksIn(c.id).length;
    return (
      '<a class="dest reveal' + (i % 3 ? " reveal-delay-" + (i % 3) : "") + '" href="countries.html#' + esc(c.id) + '">' +
        S.poster({ title: c.name, sub: c.region, photo: c.photo, alt: c.name }) +
        '<span class="dest-meta">' + courses + (courses === 1 ? " course · " : " courses · ") + parks + " parks</span>" +
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
    var regionOrder = ["North Africa", "West Africa", "Southern Africa", "Indian Ocean", "East Africa"];
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
    '<a class="trip-fab" id="trip-fab" href="build.html" hidden><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12l16-7-7 16-2-7z"/></svg>Your trip · <b>0</b></a>');

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
      o.textContent = j.name + " · " + j.nights + " nights";
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
      o.textContent = S.formatDate(d.start) + " · " + j.name + (d.left === 0 ? " (waitlist)" : "");
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
      if (!name.value.trim()) { problems.push("your name"); name.closest(".field").classList.add("invalid"); }
      if (!email.value.trim() || !email.checkValidity()) { problems.push("a valid email address"); email.closest(".field").classList.add("invalid"); }
      if (problems.length) {
        error.textContent = "Please add " + problems.join(" and ") + ".";
        error.hidden = false;
        (problems[0] === "your name" ? name : email).focus();
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
})();
