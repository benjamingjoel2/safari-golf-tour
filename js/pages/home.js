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

  /* Hero wipe: the first scroll down sweeps the separator left to right, golf
     gives way to safari, then the page carries on to the next section.
     Back at the top it sweeps back to golf, ready to play again. */
  var hero = document.querySelector(".hero-home"), wipe = hero && hero.querySelector(".hero-wipe");
  if (wipe && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    var GOLF = 0, MOVING = 1, LEAVING = 2, SAFARI = 3;
    var state = window.scrollY > 4 ? SAFARI : GOLF, touchY = null;
    var setP = function (v) { wipe.style.setProperty("--p", (v * 100).toFixed(2) + "%"); };
    var ease = function (k) { return k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2; };
    var sweep = function (from, to, ms, done) {
      var t0 = null;
      state = MOVING; wipe.classList.add("is-moving");
      var step = function (t) {
        if (t0 === null) t0 = t;
        var k = Math.min(1, (t - t0) / ms);
        setP(from + (to - from) * ease(k));
        if (k < 1) return requestAnimationFrame(step);
        wipe.classList.remove("is-moving");
        done();
      };
      requestAnimationFrame(step);
    };
    var nextSection = function () {
      var header = document.querySelector(".site-header");
      return hero.getBoundingClientRect().bottom + window.scrollY - (header ? header.offsetHeight : 0);
    };
    var intercept = function (e) {
      if (state === MOVING) { e.preventDefault(); return; }
      if (state !== GOLF || window.scrollY > 4) return;
      e.preventDefault();
      sweep(0, 1, 750, function () {
        state = LEAVING;
        window.scrollTo({ top: nextSection(), behavior: "smooth" });
      });
    };
    setP(state === SAFARI ? 1 : 0);

    window.addEventListener("wheel", function (e) { if (e.deltaY > 0 || state === MOVING) intercept(e); }, { passive: false });
    window.addEventListener("keydown", function (e) {
      if (/^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName)) return;
      if (["ArrowDown", "PageDown", " ", "Spacebar"].indexOf(e.key) !== -1) intercept(e);
    });
    window.addEventListener("touchstart", function (e) { touchY = e.touches[0].clientY; }, { passive: true });
    window.addEventListener("touchmove", function (e) {
      if (touchY !== null && (touchY - e.touches[0].clientY > 8 || state === MOVING)) intercept(e);
    }, { passive: false });
    window.addEventListener("scroll", function () {
      if (state === LEAVING && window.scrollY > 120) state = SAFARI;
      else if (state === SAFARI && window.scrollY <= 4) sweep(1, 0, 600, function () { state = GOLF; });
    }, { passive: true });
  }
})();
