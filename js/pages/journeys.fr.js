(function () {
  "use strict";
  var S = window.SGT;
  var esc = S.esc;

  var listView = document.getElementById("list-view");
  var detailView = document.getElementById("detail-view");
  var grid = document.getElementById("journey-grid");
  var filters = document.getElementById("filters");
  var count = document.getElementById("results-count");
  var empty = document.getElementById("empty-state");

  /* ---------- List ---------- */
  function bucket(n) { return n <= 6 ? "short" : n <= 9 ? "medium" : "long"; }

  function render() {
    var f = new FormData(filters);
    var region = f.get("region") || "", duration = f.get("duration") || "";
    var budget = Number(f.get("budget") || 0), sort = f.get("sort") || "featured";
    var list = S.JOURNEYS.filter(function (j) {
      if (region && j.region !== region) return false;
      if (duration && bucket(j.nights) !== duration) return false;
      if (budget && j.priceFrom >= budget) return false;
      return true;
    });
    var by = {
      "price-asc": function (a, b) { return a.priceFrom - b.priceFrom; },
      "price-desc": function (a, b) { return b.priceFrom - a.priceFrom; },
      nights: function (a, b) { return a.nights - b.nights; },
      rounds: function (a, b) { return b.rounds - a.rounds; }
    };
    if (by[sort]) list = list.slice().sort(by[sort]);
    grid.innerHTML = list.map(function (j) { return S.jcard(j, { short: true }); }).join("");
    empty.hidden = list.length > 0;
    count.textContent = list.length === S.JOURNEYS.length ? "Tout afficher : " + list.length + " journeys" : "Affichage : " + list.length + " sur " + S.JOURNEYS.length + " journeys";
    S.observeReveals();
  }
  filters.addEventListener("change", render);
  filters.addEventListener("reset", function () { setTimeout(render, 0); });
  filters.addEventListener("submit", function (e) { e.preventDefault(); render(); });

  /* ---------- Detail ---------- */
  function detailHtml(j) {
    var others = S.JOURNEYS.filter(function (x) { return x.id !== j.id; }).slice(0, 3);
    return (
      '<section class="hero detail-hero">' +
        '<div class="hero-media">' + S.pic(j.photo, { w: 1600, widths: [800, 1200, 1800, 2400], sizes: S.SIZES.full, alt: j.name, priority: true }) + '</div>' +
        '<div class="container hero-inner">' +
          '<a class="back" href="journeys.html#all">Tous les voyages</a>' +
          '<p class="eyebrow">' + esc(j.countries.join(" · ")) + " · " + j.nights + " nuits" + (j.tier === "flagship" ? " · Phare" : "") + "</p>" +
          "<h1>" + esc(j.name) + "</h1>" +
          '<p class="lead" style="font-family:var(--serif);font-style:italic;font-size:1.4rem">' + esc(j.strap) + "</p>" +
        "</div>" +
      "</section>" +

      '<section class="section-tight section-cream">' +
        '<div class="container"><ul class="facts">' +
          "<li><strong>" + j.nights + "</strong><span>Nuits</span></li>" +
          "<li><strong>" + j.rounds + "</strong><span>" + (j.rounds === 1 ? "Partie de golf" : "Parties de golf") + "</span></li>" +
          "<li><strong>" + j.gameDrives + "</strong><span>Safaris</span></li>" +
          "<li><strong>À partir de " + S.money(j.priceFrom) + "</strong><span>Par personne en chambre double</span></li>" +
        "</ul></div>" +
      "</section>" +

      '<section class="section section-cream" style="padding-top:0">' +
        '<div class="container detail-grid">' +
          "<div>" +
            '<p class="eyebrow">Le voyage</p>' +
            '<h2 style="font-size:clamp(1.8rem,3vw,2.6rem)">' + esc(j.tagline) + ".</h2>" +
            '<p class="lead">' + esc(j.intro) + "</p>" +
            '<ul class="route" style="color:var(--text-dark-muted)">' + j.route.map(function (r) { return "<li>" + esc(r) + "</li>"; }).join("") + "</ul>" +
            '<h3 style="margin-top:2.4rem">Temps forts</h3>' +
            '<ul class="checklist">' + j.highlights.map(function (h) { return "<li>" + esc(h) + "</li>"; }).join("") + "</ul>" +
            '<h3 style="margin-top:2.6rem">Jour par jour</h3>' +
            '<ol class="itinerary">' +
              j.itinerary.map(function (d) {
                return '<li><span class="day">Jour ' + d.day + "</span><div><h4>" + esc(d.title) + "</h4><p>" + esc(d.text) + "</p></div></li>";
              }).join("") +
            "</ol>" +
          "</div>" +
          "<aside>" +
            '<div class="sticky">' +
              '<div class="aside-block"><h4>Parcours</h4><ul>' +
                j.courses.map(function (c) { var m = S.courseByName(c.name); var label = m ? '<a href="courses.html#' + esc(m.id) + '" style="color:inherit">' + esc(c.name) + "</a>" : esc(c.name); return "<li>" + label + " · Par " + c.par + "<small>" + esc(c.note) + "</small></li>"; }).join("") +
              "</ul></div>" +
              '<div class="aside-block"><h4>Où vous logerez</h4><ul>' +
                j.stays.map(function (s) { var m = S.stayByName(s); return "<li>" + (m ? '<a href="stays.html#' + esc(m.id) + '" style="color:inherit">' + esc(s) + "</a>" : esc(s)) + "</li>"; }).join("") +
              "</ul></div>" +
              '<div class="aside-block"><h4>Meilleurs mois</h4><p style="margin:0">' + esc(j.bestMonths) + "</p></div>" +
              '<div class="aside-block"><h4>Inclus</h4><p style="margin:0;font-size:0.95rem;color:var(--text-dark-muted)">Hébergement, la plupart des repas, green fees et caddies là où c’est l’usage, droits de parc et de conservancy, safaris, vols intérieurs et tous les transferts. Les vols internationaux, visas, assurance et pourboires sont exclus.</p></div>' +
              '<div class="actions" style="flex-direction:column;align-items:stretch"><a class="btn btn-gold" href="contact.html?journey=' + esc(j.id) + '">Demander ce voyage</a><button type="button" class="btn btn-outline btn-sm" data-load-journey="' + esc(j.id) + '">Charger dans le créateur de voyage</button></div>' +
              (S.DEPARTURES.some(function (d) { return d.journey === j.id; }) ? '<p style="margin:14px 0 0;font-size:0.9rem;color:var(--text-dark-muted)">Aussi disponible en <a href="departures.html" style="color:var(--gold-2)">départ accompagné</a>.</p>' : "") +
            "</div>" +
          "</aside>" +
        "</div>" +
      "</section>" +

      '<section class="section section-ink">' +
        '<div class="container">' +
          '<div class="section-head"><p class="eyebrow">À considérer aussi</p><h2>Autres voyages.</h2></div>' +
          '<div class="journey-grid three">' + others.map(function (o) { return S.jcard(o, { short: true }); }).join("") + "</div>" +
        "</div>" +
      "</section>"
    );
  }

  function route() {
    var id = location.hash.replace("#", "");
    var j = S.journey(id);
    if (j) {
      detailView.innerHTML = detailHtml(j);
      detailView.hidden = false;
      listView.hidden = true;
      document.title = j.name + " — Safari Golf Tour";
      window.scrollTo(0, 0);
      S.observeReveals();
    } else {
      detailView.hidden = true;
      detailView.innerHTML = "";
      listView.hidden = false;
      document.title = "Voyages — Safari Golf Tour";
      if (id === "all") window.scrollTo(0, 0);
    }
  }
  window.addEventListener("hashchange", route);

  render();
  route();
})();
