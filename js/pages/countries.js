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
      '<section class="course-film-hero">' + S.poster({ title: c.name, sub: c.region, photo: c.photo, hero: true, sky: true, w: 3200, h: 1800, alt: c.name }) + "</section>" +
      '<section class="hero hero-plain course-hero">' +
        '<div class="container hero-inner">' +
          '<a class="back" href="countries.html#all">All countries</a>' +
          '<p class="eyebrow">' + esc(c.region) + "</p>" +
          "<h1>" + esc(c.name) + "</h1>" +
          '<p class="lead" style="font-family:var(--serif);font-style:italic;font-size:1.4rem">' + esc(c.strap) + "</p>" +
        "</div>" +
      "</section>" +

      '<section class="section-tight section-cream"><div class="container">' +
        '<ul class="facts">' +
          "<li><strong>" + courses.length + "</strong><span>" + (courses.length === 1 ? "Course we play" : "Courses we play") + "</span></li>" +
          "<li><strong>" + parks.length + "</strong><span>Parks &amp; reserves</span></li>" +
          '<li><strong style="font-size:1.3rem">' + esc(c.gateway) + "</strong><span>Gateway</span></li>" +
          '<li><strong style="font-size:1.3rem">' + esc(c.bestMonths) + "</strong><span>Best months</span></li>" +
        "</ul>" +
        '<p class="lead" style="margin-top:28px;max-width:60rem">' + esc(c.intro) + "</p>" +
      "</div></section>" +

      '<section class="section section-cream" style="padding-top:0" id="golf">' +
        '<div class="container">' +
          '<div class="section-head"><p class="eyebrow">Golf</p><h2>Courses in ' + esc(c.name) + ".</h2></div>" +
          (courses.length
            ? '<div class="journey-grid three">' + courses.map(S.courseCard).join("") + "</div>"
            : '<p class="muted">No courses on our list yet. Tell us if there is one you want to play and we will check it.</p>') +
        "</div>" +
      "</section>" +

      '<section class="section" id="parks">' +
        '<div class="container">' +
          '<div class="section-head"><p class="eyebrow">Safari</p><h2>National parks and reserves in ' + esc(c.name) + ".</h2></div>" +
          '<div class="journey-grid three">' + parks.map(S.parkCard).join("") + "</div>" +
        "</div>" +
      "</section>" +

      '<section class="section section-ink">' +
        '<div class="container">' +
          '<div class="split">' +
            "<div>" +
              '<p class="eyebrow">Put it together</p>' +
              "<h2>Build your " + esc(c.name) + " trip.</h2>" +
              '<p class="lead">Add the courses and parks you want above. The builder orders them, sets the nights, gives you an indicative price, and sends the plan to a planner who checks every flight and tee time.</p>' +
              '<div class="actions"><a class="btn btn-gold" href="build.html">Open the trip builder</a>' +
              (journeys.length ? '<a class="btn btn-outline" href="journeys.html#' + esc(journeys[0].id) + '">Or start from ' + esc(journeys[0].name) + "</a>" : "") +
              "</div>" +
            "</div>" +
            "<div>" +
              (journeys.length ? '<h4 style="font-family:var(--sans);font-size:0.68rem;letter-spacing:0.24em;text-transform:uppercase;color:var(--gold);margin:0 0 12px">Journeys that visit</h4><ul class="chips">' + journeys.map(function (j) {
                return '<li><a href="journeys.html#' + esc(j.id) + '" style="text-decoration:none;color:var(--cream)">' + esc(j.name) + " · from " + S.money(j.priceFrom) + "</a></li>";
              }).join("") + "</ul>" : "") +
              '<h4 style="font-family:var(--sans);font-size:0.68rem;letter-spacing:0.24em;text-transform:uppercase;color:var(--gold);margin:28px 0 12px">Combine with</h4><ul class="chips">' + others.map(function (o) {
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
      document.title = "Countries — Safari Golf Tour";
      if (location.hash === "#all") window.scrollTo(0, 0);
    }
    S.refreshTripButtons();
    S.observeReveals();
  }
  window.addEventListener("hashchange", route);
  route();
})();
