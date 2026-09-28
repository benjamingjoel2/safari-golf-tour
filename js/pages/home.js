(function () {
  "use strict";
  var S = window.SGT;

  /* Featured journeys (the flagship has its own section above) */
  var grid = document.getElementById("home-journeys");
  grid.innerHTML = S.JOURNEYS.filter(function (j) { return j.id !== "grand-crossing"; }).slice(0, 4)
    .map(function (j) { return S.jcard(j); }).join("");

  /* Destinations */
  var dest = document.getElementById("home-destinations");
  dest.innerHTML = S.DESTINATIONS.map(function (d, i) {
    return (
      '<a class="dest reveal' + (i % 3 ? " reveal-delay-" + (i % 3) : "") + '" href="destinations.html#' + S.esc(d.id) + '">' +
        '<img src="' + S.img(d.photo, 800, 1000) + '" alt="' + S.esc(d.name) + '" loading="lazy" width="800" height="1000" />' +
        '<div class="dest-text"><p class="eyebrow">' + d.courses.length + " courses · " + d.parks.length + ' reserves</p><h3>' + S.esc(d.name) + "</h3><p>" + S.esc(d.strap) + "</p></div>" +
      "</a>"
    );
  }).join("");

  /* Guest quotes */
  var slides = document.getElementById("quote-slides");
  var dots = document.getElementById("quote-dots");
  var current = 0, timer;
  slides.innerHTML = S.GUESTS.map(function (g, i) {
    return (
      '<div class="quote-slide' + (i === 0 ? " active" : "") + '" role="tabpanel" id="quote-' + i + '">' +
        '<blockquote><div class="stars" aria-label="Five stars">★★★★★</div><p>“' + S.esc(g.quote) + "”</p>" +
        "<footer><strong>" + S.esc(g.name) + "</strong> · " + S.esc(g.meta) + "</footer></blockquote>" +
      "</div>"
    );
  }).join("");
  dots.innerHTML = S.GUESTS.map(function (g, i) {
    return '<button type="button" role="tab" aria-selected="' + (i === 0) + '" aria-controls="quote-' + i + '" aria-label="Story ' + (i + 1) + '"></button>';
  }).join("");

  function show(i) {
    current = (i + S.GUESTS.length) % S.GUESTS.length;
    slides.querySelectorAll(".quote-slide").forEach(function (el, k) { el.classList.toggle("active", k === current); });
    dots.querySelectorAll("button").forEach(function (b, k) { b.setAttribute("aria-selected", String(k === current)); });
  }
  function arm() { clearInterval(timer); timer = setInterval(function () { show(current + 1); }, 7000); }
  dots.addEventListener("click", function (e) {
    var b = e.target.closest("button");
    if (!b) return;
    show(Array.prototype.indexOf.call(dots.children, b));
    arm();
  });
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) arm();

  /* Form */
  S.populateJourneySelect(document.getElementById("enquiry-journey"));
  S.bindEnquiryForm(document.getElementById("enquiry-form"), document.getElementById("enquiry-success"));

  S.observeReveals();
})();
