(function () {
  "use strict";
  var S = window.SGT, esc = S.esc;

  var grid = document.getElementById("course-grid");
  var filters = document.getElementById("filters");
  var count = document.getElementById("results-count");
  var countrySel = document.getElementById("country-filter");

  var countries = [];
  S.COURSES.forEach(function (c) { if (countries.indexOf(c.country) === -1) countries.push(c.country); });
  countries.forEach(function (c) {
    var o = document.createElement("option"); o.value = c; o.textContent = c; countrySel.appendChild(o);
  });

  function journeysFor(course) {
    return S.JOURNEYS.filter(function (j) {
      return j.courses.some(function (c) { return S.courseByName(c.name) && S.courseByName(c.name).id === course.id; });
    });
  }

  function card(c) {
    var js = journeysFor(c);
    return (
      '<article class="jcard reveal" id="' + esc(c.id) + '">' +
        '<div class="jcard-media"><img src="' + S.img(c.photo, 900, 560) + '" alt="' + esc(c.name) + '" loading="lazy" width="900" height="560" /></div>' +
        '<div class="jcard-body">' +
          '<p class="eyebrow">' + esc(c.country) + " · Par " + c.par + " · " + c.holes + " holes</p>" +
          "<h3>" + esc(c.name) + "</h3>" +
          '<p class="muted" style="font-size:0.85rem">' + esc(c.designer) + "</p>" +
          "<p>" + esc(c.note) + "</p>" +
          (js.length ? '<div class="jcard-foot" style="flex-wrap:wrap;gap:8px"><ul class="chips">' + js.map(function (j) {
            return '<li><a href="journeys.html#' + esc(j.id) + '" style="text-decoration:none;color:inherit">' + esc(j.name) + "</a></li>";
          }).join("") + "</ul></div>" : "") +
        "</div>" +
      "</article>"
    );
  }

  function render() {
    var f = new FormData(filters);
    var country = f.get("country") || "", sort = f.get("sort") || "country";
    var list = S.COURSES.filter(function (c) { return !country || c.country === country; });
    if (sort === "name") list = list.slice().sort(function (a, b) { return a.name.localeCompare(b.name); });
    if (sort === "par") list = list.slice().sort(function (a, b) { return b.par - a.par; });
    grid.innerHTML = list.map(card).join("");
    count.textContent = list.length === S.COURSES.length ? "Showing all " + list.length + " courses" : "Showing " + list.length + " of " + S.COURSES.length + " courses";
    S.observeReveals();
  }
  filters.addEventListener("change", render);
  filters.addEventListener("reset", function () { setTimeout(render, 0); });
  filters.addEventListener("submit", function (e) { e.preventDefault(); render(); });
  render();

  if (location.hash) {
    var t = document.querySelector(location.hash);
    if (t) setTimeout(function () { t.scrollIntoView({ block: "center" }); }, 50);
  }
})();
