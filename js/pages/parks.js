(function () {
  "use strict";
  var S = window.SGT;

  var grid = document.getElementById("park-grid");
  var filters = document.getElementById("filters");
  var count = document.getElementById("results-count");
  var empty = document.getElementById("empty-state");
  var countrySel = document.getElementById("country-filter");
  var typeSel = document.getElementById("type-filter");
  var wildSel = document.getElementById("wildlife-filter");

  S.COUNTRIES.forEach(function (c) {
    if (S.parksIn(c.id).length) { var o = document.createElement("option"); o.value = c.id; o.textContent = c.name; countrySel.appendChild(o); }
  });
  var types = [], wild = {};
  S.PARKS.forEach(function (p) {
    if (types.indexOf(p.type) === -1) types.push(p.type);
    p.wildlife.forEach(function (w) { wild[w] = (wild[w] || 0) + 1; });
  });
  types.sort().forEach(function (t) { var o = document.createElement("option"); o.value = t; o.textContent = t; typeSel.appendChild(o); });
  Object.keys(wild).filter(function (w) { return wild[w] >= 2; }).sort().forEach(function (w) { var o = document.createElement("option"); o.value = w; o.textContent = w; wildSel.appendChild(o); });

  function render() {
    var f = new FormData(filters);
    var c = f.get("country") || "", t = f.get("type") || "", w = f.get("wildlife") || "";
    var list = S.PARKS.filter(function (p) {
      return (!c || p.countryId === c) && (!t || p.type === t) && (!w || p.wildlife.indexOf(w) !== -1);
    });
    grid.innerHTML = list.map(S.parkCard).join("");
    empty.hidden = list.length > 0;
    count.textContent = list.length === S.PARKS.length ? "Showing all " + list.length + " parks and reserves" : "Showing " + list.length + " of " + S.PARKS.length + " parks and reserves";
    S.refreshTripButtons();
    S.observeReveals();
  }
  filters.addEventListener("change", render);
  filters.addEventListener("reset", function () { setTimeout(render, 0); });
  filters.addEventListener("submit", function (e) { e.preventDefault(); render(); });
  render();

  if (location.hash) {
    var target = document.querySelector(location.hash);
    if (target) setTimeout(function () { target.scrollIntoView({ block: "center" }); }, 50);
  }
})();
