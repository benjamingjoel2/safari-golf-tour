(function () {
  "use strict";
  var S = window.SGT, esc = S.esc;

  var grid = document.getElementById("stay-grid");
  var filters = document.getElementById("filters");
  var count = document.getElementById("results-count");
  var destSel = document.getElementById("dest-filter");
  var typeSel = document.getElementById("type-filter");

  S.DESTINATIONS.forEach(function (d) {
    var o = document.createElement("option"); o.value = d.id; o.textContent = d.name; destSel.appendChild(o);
  });
  var types = [];
  S.STAYS.forEach(function (s) { if (types.indexOf(s.type) === -1) types.push(s.type); });
  types.sort().forEach(function (t) {
    var o = document.createElement("option"); o.value = t; o.textContent = t; typeSel.appendChild(o);
  });

  function journeysFor(stay) {
    return S.JOURNEYS.filter(function (j) {
      return j.stays.some(function (s) { var m = S.stayByName(s); return m && m.id === stay.id; });
    });
  }

  function card(s) {
    var d = S.destination(s.destination);
    var js = journeysFor(s);
    return (
      '<article class="jcard reveal" id="' + esc(s.id) + '">' +
        '<div class="jcard-media"><img src="' + S.img(s.photo, 900, 560) + '" alt="' + esc(s.name) + '" loading="lazy" width="900" height="560" /></div>' +
        '<div class="jcard-body">' +
          '<p class="eyebrow">' + esc(d ? d.name : "") + " · " + esc(s.type) + "</p>" +
          "<h3>" + esc(s.name) + "</h3>" +
          "<p>" + esc(s.note) + "</p>" +
          (js.length ? '<div class="jcard-foot" style="flex-wrap:wrap;gap:8px"><ul class="chips">' + js.map(function (j) {
            return '<li><a href="journeys.html#' + esc(j.id) + '" style="text-decoration:none;color:inherit">' + esc(j.name) + "</a></li>";
          }).join("") + "</ul></div>" : "") +
        "</div>" +
      "</article>"
    );
  }

  function render() {
    var f = new FormData(filters);
    var dest = f.get("destination") || "", type = f.get("type") || "";
    var list = S.STAYS.filter(function (s) { return (!dest || s.destination === dest) && (!type || s.type === type); });
    grid.innerHTML = list.map(card).join("");
    count.textContent = list.length === S.STAYS.length ? "Showing all " + list.length + " stays" : "Showing " + list.length + " of " + S.STAYS.length + " stays";
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
