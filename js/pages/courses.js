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

  function render() {
    var f = new FormData(filters);
    var country = f.get("country") || "", sort = f.get("sort") || "country";
    var list = S.COURSES.filter(function (c) { return !country || c.country === country; });
    if (sort === "name") list = list.slice().sort(function (a, b) { return a.name.localeCompare(b.name); });
    if (sort === "par") list = list.slice().sort(function (a, b) { return b.par - a.par; });
    grid.innerHTML = list.map(S.courseCard).join("");
    S.refreshTripButtons();
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
