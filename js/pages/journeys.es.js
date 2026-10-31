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
    count.textContent = list.length === S.JOURNEYS.length ? "Mostrando todo: " + list.length + " journeys" : "Mostrando " + list.length + " de " + S.JOURNEYS.length + " journeys";
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
          '<a class="back" href="journeys.html#all">Todos los viajes</a>' +
          '<p class="eyebrow">' + esc(j.countries.join(" · ")) + " · " + j.nights + " noches" + (j.tier === "flagship" ? " · Insignia" : "") + "</p>" +
          "<h1>" + esc(j.name) + "</h1>" +
          '<p class="lead" style="font-family:var(--serif);font-style:italic;font-size:1.4rem">' + esc(j.strap) + "</p>" +
        "</div>" +
      "</section>" +

      '<section class="section-tight section-cream">' +
        '<div class="container"><ul class="facts">' +
          "<li><strong>" + j.nights + "</strong><span>Noches</span></li>" +
          "<li><strong>" + j.rounds + "</strong><span>" + (j.rounds === 1 ? "Vuelta de golf" : "Vueltas de golf") + "</span></li>" +
          "<li><strong>" + j.gameDrives + "</strong><span>Safaris</span></li>" +
          "<li><strong>Desde " + S.money(j.priceFrom) + "</strong><span>Por persona en habitación compartida</span></li>" +
        "</ul></div>" +
      "</section>" +

      '<section class="section section-cream" style="padding-top:0">' +
        '<div class="container detail-grid">' +
          "<div>" +
            '<p class="eyebrow">El viaje</p>' +
            '<h2 style="font-size:clamp(1.8rem,3vw,2.6rem)">' + esc(j.tagline) + ".</h2>" +
            '<p class="lead">' + esc(j.intro) + "</p>" +
            '<ul class="route" style="color:var(--text-dark-muted)">' + j.route.map(function (r) { return "<li>" + esc(r) + "</li>"; }).join("") + "</ul>" +
            '<h3 style="margin-top:2.4rem">Lo más destacado</h3>' +
            '<ul class="checklist">' + j.highlights.map(function (h) { return "<li>" + esc(h) + "</li>"; }).join("") + "</ul>" +
            '<h3 style="margin-top:2.6rem">Día a día</h3>' +
            '<ol class="itinerary">' +
              j.itinerary.map(function (d) {
                return '<li><span class="day">Día ' + d.day + "</span><div><h4>" + esc(d.title) + "</h4><p>" + esc(d.text) + "</p></div></li>";
              }).join("") +
            "</ol>" +
          "</div>" +
          "<aside>" +
            '<div class="sticky">' +
              '<div class="aside-block"><h4>Campos</h4><ul>' +
                j.courses.map(function (c) { var m = S.courseByName(c.name); var label = m ? '<a href="courses.html#' + esc(m.id) + '" style="color:inherit">' + esc(c.name) + "</a>" : esc(c.name); return "<li>" + label + " · Par " + c.par + "<small>" + esc(c.note) + "</small></li>"; }).join("") +
              "</ul></div>" +
              '<div class="aside-block"><h4>Dónde se alojará</h4><ul>' +
                j.stays.map(function (s) { var m = S.stayByName(s); return "<li>" + (m ? '<a href="stays.html#' + esc(m.id) + '" style="color:inherit">' + esc(s) + "</a>" : esc(s)) + "</li>"; }).join("") +
              "</ul></div>" +
              '<div class="aside-block"><h4>Mejores meses</h4><p style="margin:0">' + esc(j.bestMonths) + "</p></div>" +
              '<div class="aside-block"><h4>Incluido</h4><p style="margin:0;font-size:0.95rem;color:var(--text-dark-muted)">Alojamiento, la mayoría de las comidas, green fees y caddies donde es costumbre, tasas de parques y reservas, safaris, vuelos internos y todos los traslados. Quedan excluidos los vuelos internacionales, los visados, el seguro y las propinas.</p></div>' +
              '<div class="actions" style="flex-direction:column;align-items:stretch"><a class="btn btn-gold" href="contact.html?journey=' + esc(j.id) + '">Consultar por este viaje</a><button type="button" class="btn btn-outline btn-sm" data-load-journey="' + esc(j.id) + '">Cargar en el creador de viajes</button></div>' +
              (S.DEPARTURES.some(function (d) { return d.journey === j.id; }) ? '<p style="margin:14px 0 0;font-size:0.9rem;color:var(--text-dark-muted)">También disponible como <a href="departures.html" style="color:var(--gold-2)">salida acompañada</a>.</p>' : "") +
            "</div>" +
          "</aside>" +
        "</div>" +
      "</section>" +

      '<section class="section section-ink">' +
        '<div class="container">' +
          '<div class="section-head"><p class="eyebrow">Considere también</p><h2>Otros viajes.</h2></div>' +
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
      document.title = "Viajes — Safari Golf Tour";
      if (id === "all") window.scrollTo(0, 0);
    }
  }
  window.addEventListener("hashchange", route);

  render();
  route();
})();
