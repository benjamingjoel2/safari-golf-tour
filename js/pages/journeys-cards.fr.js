/* Journey cards with a "Load into the builder" action, used on build.html. */
(function () {
  "use strict";
  var S = window.SGT, esc = S.esc;

  S.loadableJourneyCard = function (j) {
    return (
      '<article class="jcard reveal">' +
        '<div class="jcard-media">' + S.pic(j.photo, { w: 800, h: 498, alt: j.name }) + '</div>' +
        '<div class="jcard-body">' +
          '<p class="eyebrow">' + esc(j.countries.join(" · ")) + " · " + j.nights + " nuits</p>" +
          "<h3>" + esc(j.name) + "</h3>" +
          "<p>" + esc(j.tagline) + ".</p>" +
          '<div class="jcard-foot"><span class="price">À partir de <strong>' + S.money(j.priceFrom) + "</strong></span>" +
          '<button type="button" class="btn btn-gold btn-sm" data-load-journey="' + esc(j.id) + '">Charger dans le créateur</button></div>' +
        "</div>" +
      "</article>"
    );
  };
})();
