/* Journey cards with a "Load into the builder" action, used on build.html. */
(function () {
  "use strict";
  var S = window.SGT, esc = S.esc;

  S.loadableJourneyCard = function (j) {
    return (
      '<article class="jcard reveal">' +
        '<div class="jcard-media"><img src="' + S.img(j.photo, 900, 560) + '" alt="' + esc(j.name) + '" width="900" height="560" /></div>' +
        '<div class="jcard-body">' +
          '<p class="eyebrow">' + esc(j.countries.join(" · ")) + " · " + j.nights + " nights</p>" +
          "<h3>" + esc(j.name) + "</h3>" +
          "<p>" + esc(j.tagline) + ".</p>" +
          '<div class="jcard-foot"><span class="price">From <strong>' + S.money(j.priceFrom) + "</strong></span>" +
          '<button type="button" class="btn btn-gold btn-sm" data-load-journey="' + esc(j.id) + '">Load into builder</button></div>' +
        "</div>" +
      "</article>"
    );
  };
})();
