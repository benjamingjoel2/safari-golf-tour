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
        '<img src="' + S.img(e.photo, 800, 1000) + '" alt="' + S.esc(e.name) + '" width="800" height="1000" />' +
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
