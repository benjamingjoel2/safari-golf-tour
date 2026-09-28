(function () {
  "use strict";
  var S = window.SGT, esc = S.esc;

  document.getElementById("enc-nav").innerHTML = S.ENCOUNTERS.map(function (e) {
    return '<li><a href="#' + esc(e.id) + '" style="text-decoration:none;color:inherit">' + esc(e.name) + "</a></li>";
  }).join("");

  document.getElementById("enc-sections").innerHTML = S.ENCOUNTERS.map(function (e, i) {
    var js = e.journeys.map(S.journey).filter(Boolean);
    return (
      '<section class="dest-section" id="' + esc(e.id) + '">' +
        '<div class="container split' + (i % 2 ? " reverse" : "") + '">' +
          '<div class="split-media reveal"><img src="' + S.img(e.photo, 1100, 1375) + '" alt="' + esc(e.name) + '" loading="lazy" width="1100" height="1375" /><span class="frame"></span></div>' +
          '<div class="reveal reveal-delay-1">' +
            '<p class="eyebrow">0' + (i + 1) + " · " + esc(e.where) + "</p>" +
            "<h2>" + esc(e.name) + "</h2>" +
            '<p class="lead">' + esc(e.text) + "</p>" +
            '<h4 style="font-family:var(--sans);font-size:0.68rem;letter-spacing:0.24em;text-transform:uppercase;color:var(--gold);margin:1.6rem 0 12px">On these journeys</h4>' +
            '<ul class="chips">' + js.map(function (j) {
              return '<li><a href="journeys.html#' + esc(j.id) + '" style="text-decoration:none;color:var(--cream)">' + esc(j.name) + "</a></li>";
            }).join("") + "</ul>" +
            '<div class="actions"><a class="btn btn-outline btn-sm" href="contact.html">Ask about this encounter</a></div>' +
          "</div>" +
        "</div>" +
      "</section>"
    );
  }).join("");

  S.observeReveals();
  if (location.hash) {
    var t = document.querySelector(location.hash);
    if (t) setTimeout(function () { t.scrollIntoView({ block: "start" }); }, 50);
  }
})();
