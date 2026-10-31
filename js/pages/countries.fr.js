(function () {
  "use strict";
  var S = window.SGT, esc = S.esc;

  var listView = document.getElementById("list-view");
  var detailView = document.getElementById("detail-view");

  document.getElementById("country-grid").innerHTML = S.COUNTRIES.map(S.countryTile).join("");

  function detailHtml(c) {
    var courses = S.coursesIn(c.id), parks = S.parksIn(c.id);
    var journeys = c.journeys.map(S.journey).filter(Boolean);
    var others = (c.pairs ? c.pairs.map(S.country).filter(Boolean) : S.COUNTRIES.filter(function (x) { return x.id !== c.id && x.region === c.region; })).slice(0, 3);
    return (
      '<section class="course-film-hero">' + S.poster({ kind: "country", title: c.name, sub: c.region, photo: c.photo, hero: true, sky: true, w: 3200, h: 1800, alt: c.name }) + "</section>" +
      '<section class="hero hero-plain course-hero">' +
        '<div class="container hero-inner">' +
          '<a class="back" href="countries.html#all">Tous les pays</a>' +
          '<h1 class="sr-only">' + esc(c.name) + "</h1>" +
          '<p class="lead" style="font-family:var(--serif);font-style:italic;font-size:1.4rem">' + esc(c.strap) + "</p>" +
        "</div>" +
      "</section>" +

      '<section class="section-tight section-cream"><div class="container">' +
        '<ul class="facts">' +
          "<li><strong>" + courses.length + "</strong><span>" + (courses.length === 1 ? "Parcours que nous jouons" : "Parcours que nous jouons") + "</span></li>" +
          "<li><strong>" + parks.length + "</strong><span>Parcs et réserves</span></li>" +
          '<li><strong style="font-size:1.3rem">' + esc(c.gateway) + "</strong><span>Porte d’entrée</span></li>" +
          '<li><strong style="font-size:1.3rem">' + esc(c.bestMonths) + "</strong><span>Meilleurs mois</span></li>" +
        "</ul>" +
        '<p class="lead" style="margin-top:28px;max-width:60rem">' + esc(c.intro) + "</p>" +
      "</div></section>" +

      '<section class="section section-cream" style="padding-top:0" id="golf">' +
        '<div class="container">' +
          '<div class="section-head"><p class="eyebrow">Golf</p><h2>Parcours en ' + esc(c.name) + ".</h2></div>" +
          (courses.length
            ? '<div class="journey-grid three">' + courses.map(S.courseCard).join("") + "</div>"
            : '<p class="muted">Aucun parcours sur notre liste pour l’instant. Dites-nous s’il y en a un que vous voulez jouer et nous vérifierons.</p>') +
        "</div>" +
      "</section>" +

      '<section class="section" id="parks">' +
        '<div class="container">' +
          '<div class="section-head"><p class="eyebrow">Safari</p><h2>Parcs nationaux et réserves en ' + esc(c.name) + ".</h2></div>" +
          '<div class="journey-grid three">' + parks.map(S.parkCard).join("") + "</div>" +
        "</div>" +
      "</section>" +

      '<section class="section section-ink">' +
        '<div class="container">' +
          '<div class="split">' +
            "<div>" +
              '<p class="eyebrow">Tout assembler</p>' +
              "<h2>Construire votre voyage : " + esc(c.name) + " .</h2>" +
              '<p class="lead">Ajoutez ci-dessus les parcours et parcs qui vous plaisent. Le créateur les ordonne, règle les nuits, vous donne un prix indicatif et envoie le projet à un conseiller qui vérifie chaque vol et chaque heure de départ.</p>' +
              '<div class="actions"><a class="btn btn-gold" href="build.html">Ouvrir le créateur de voyage</a>' +
              (journeys.length ? '<a class="btn btn-outline" href="journeys.html#' + esc(journeys[0].id) + '">Ou partir de ' + esc(journeys[0].name) + "</a>" : "") +
              "</div>" +
            "</div>" +
            "<div>" +
              (journeys.length ? '<h4 style="font-family:var(--sans);font-size:0.68rem;letter-spacing:0.24em;text-transform:uppercase;color:var(--gold);margin:0 0 12px">Voyages qui passent par :</h4><ul class="chips">' + journeys.map(function (j) {
                return '<li><a href="journeys.html#' + esc(j.id) + '" style="text-decoration:none;color:var(--cream)">' + esc(j.name) + " · À partir de " + S.money(j.priceFrom) + "</a></li>";
              }).join("") + "</ul>" : "") +
              '<h4 style="font-family:var(--sans);font-size:0.68rem;letter-spacing:0.24em;text-transform:uppercase;color:var(--gold);margin:28px 0 12px">À combiner avec</h4><ul class="chips">' + others.map(function (o) {
                return '<li><a href="countries.html#' + esc(o.id) + '" style="text-decoration:none;color:var(--cream)">' + esc(o.name) + "</a></li>";
              }).join("") + "</ul>" +
            "</div>" +
          "</div>" +
        "</div>" +
      "</section>"
    );
  }

  function route() {
    var c = S.country(location.hash.replace("#", ""));
    if (c) {
      detailView.innerHTML = detailHtml(c);
      detailView.hidden = false;
      listView.hidden = true;
      document.title = c.name + " — Safari Golf Tour";
      window.scrollTo(0, 0);
    } else {
      detailView.hidden = true;
      detailView.innerHTML = "";
      listView.hidden = false;
      document.title = "Pays — Safari Golf Tour";
      if (location.hash === "#all") window.scrollTo(0, 0);
    }
    S.refreshTripButtons();
    S.observeReveals();
  }
  window.addEventListener("hashchange", route);
  route();
})();
