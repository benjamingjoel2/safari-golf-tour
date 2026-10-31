(function () {
  "use strict";
  var S = window.SGT;

  /* Featured journeys (the flagship has its own section above) */
  var grid = document.getElementById("home-journeys");
  grid.innerHTML = S.JOURNEYS.filter(function (j) { return j.id !== "grand-crossing"; }).slice(0, 4)
    .map(function (j) { return S.jcard(j); }).join("");

  /* Countries */
  document.getElementById("home-countries").innerHTML = S.COUNTRIES.map(S.countryTile).join("");

  /* Encounters */
  document.getElementById("home-encounters").innerHTML = S.ENCOUNTERS.slice(0, 3).map(function (e, i) {
    return (
      '<a class="dest reveal' + (i ? " reveal-delay-" + i : "") + '" href="encounters.html#' + S.esc(e.id) + '">' +
        S.pic(e.photo, { w: 640, h: 800, widths: [400, 640, 900], sizes: S.SIZES.card, alt: e.name }) +
        '<div class="dest-text"><p class="eyebrow">' + S.esc(e.where) + '</p><h3 style="font-size:1.5rem">' + S.esc(e.name) + "</h3></div>" +
      "</a>"
    );
  }).join("");

  /* Notes from the Journal */
  document.getElementById("home-notes").innerHTML = S.JOURNAL.slice(0, 3).map(function (a, i) {
    return (
      '<div class="note reveal' + (i ? " reveal-delay-" + i : "") + '"><p class="eyebrow">' + S.esc(a.category) + '</p>' +
      '<h3><a href="journal.html#' + S.esc(a.slug) + '" style="text-decoration:none;color:inherit">' + S.esc(a.title) + "</a></h3>" +
      "<p>" + S.esc(a.standfirst) + "</p></div>"
    );
  }).join("");

  /* Form */
  S.populateJourneySelect(document.getElementById("enquiry-journey"));
  S.bindEnquiryForm(document.getElementById("enquiry-form"), document.getElementById("enquiry-success"));

  S.observeReveals();
})();
