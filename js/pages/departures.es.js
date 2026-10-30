(function () {
  "use strict";
  var S = window.SGT, esc = S.esc;

  var list = document.getElementById("departures");
  var deps = S.DEPARTURES.slice().sort(function (a, b) { return a.start < b.start ? -1 : 1; });
  var year = "";

  list.innerHTML = deps.map(function (d) {
    var j = S.journey(d.journey);
    var y = d.start.slice(0, 4);
    var head = "";
    if (y !== year) { year = y; head = '<h3 class="dep-year">' + y + "</h3>"; }
    var soldOut = d.left === 0;
    var places = soldOut ? "Lista de espera" : d.left <= 2 ? d.left + " de " + d.places + " plazas libres" : d.left + " de " + d.places + " places";
    return head +
      '<article class="dep reveal" id="' + esc(d.id) + '">' +
        '<div class="dep-date"><span class="eyebrow">Salida</span><strong>' + esc(S.formatDate(d.start)) + "</strong><small>" + d.nights + " noches</small></div>" +
        '<div class="dep-main">' +
          '<p class="eyebrow">' + esc(j.countries.join(" · ")) + (d.note ? " · " + esc(d.note) : "") + "</p>" +
          '<h3><a href="journeys.html#' + esc(j.id) + '">' + esc(j.name) + "</a></h3>" +
          "<p>" + esc(j.tagline) + ". Hosted by " + esc(d.host.charAt(0).toLowerCase() + d.host.slice(1)) + ".</p>" +
        "</div>" +
        '<div class="dep-side">' +
          '<span class="price">Desde <strong>' + S.money(d.priceFrom) + "</strong> por persona en habitación compartida</span>" +
          '<span class="places' + (soldOut ? " sold" : "") + '">' + places + "</span>" +
          '<a class="btn ' + (soldOut ? "btn-outline" : "btn-gold") + ' btn-sm" href="contact.html?departure=' + esc(d.id) + '">' + (soldOut ? "Apuntarse a la lista de espera" : "Reservar una plaza") + "</a>" +
        "</div>" +
      "</article>";
  }).join("");

  S.observeReveals();
  if (location.hash) {
    var t = document.querySelector(location.hash);
    if (t) setTimeout(function () { t.scrollIntoView({ block: "center" }); }, 50);
  }
})();
