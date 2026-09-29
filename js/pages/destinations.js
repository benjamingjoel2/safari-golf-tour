(function () {
  "use strict";
  var S = window.SGT;
  var esc = S.esc;

  document.getElementById("dest-nav").innerHTML = S.DESTINATIONS.map(function (d) {
    return '<li><a href="#' + esc(d.id) + '" style="text-decoration:none;color:inherit">' + esc(d.name) + "</a></li>";
  }).join("");

  document.getElementById("dest-sections").innerHTML = S.DESTINATIONS.map(function (d, i) {
    var journeys = d.journeys.map(S.journey).filter(Boolean);
    return (
      '<section class="dest-section" id="' + esc(d.id) + '">' +
        '<div class="container split' + (i % 2 ? " reverse" : "") + '">' +
          '<div class="split-media reveal">' +
            '<img src="' + S.img(d.photo, 1100, 1375) + '" alt="' + esc(d.name) + '" width="1100" height="1375" />' +
            '<span class="frame"></span>' +
          "</div>" +
          '<div class="reveal reveal-delay-1">' +
            '<p class="eyebrow">0' + (i + 1) + " · " + esc(d.name) + "</p>" +
            "<h2>" + esc(d.strap) + "</h2>" +
            '<p class="lead">' + esc(d.text) + "</p>" +
            '<div class="dest-lists">' +
              "<div><h4>Courses we play</h4><ul class=\"checklist\">" + d.courses.map(function (c) { return "<li>" + esc(c) + "</li>"; }).join("") + "</ul></div>" +
              "<div><h4>Reserves we use</h4><ul class=\"checklist\">" + d.parks.map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("") + "</ul></div>" +
            "</div>" +
            "<h4 style=\"font-family:var(--sans);font-size:0.68rem;letter-spacing:0.24em;text-transform:uppercase;color:var(--gold);margin:0 0 12px\">Journeys that visit</h4>" +
            '<ul class="chips">' + journeys.map(function (j) {
              return '<li><a href="journeys.html#' + esc(j.id) + '" style="text-decoration:none;color:var(--cream)">' + esc(j.name) + " · from " + S.money(j.priceFrom) + "</a></li>";
            }).join("") + "</ul>" +
          "</div>" +
        "</div>" +
      "</section>"
    );
  }).join("");

  S.observeReveals();

  /* Scroll to the hash after render (the browser tried before the sections existed). */
  if (location.hash) {
    var target = document.querySelector(location.hash);
    if (target) setTimeout(function () { target.scrollIntoView({ block: "start" }); }, 50);
  }
})();
