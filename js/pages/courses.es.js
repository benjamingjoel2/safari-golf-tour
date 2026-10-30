(function () {
  "use strict";
  var S = window.SGT, esc = S.esc;

  var listView = document.getElementById("list-view");
  var detailView = document.getElementById("detail-view");
  var grid = document.getElementById("course-grid");
  var filters = document.getElementById("filters");
  var count = document.getElementById("results-count");
  var countrySel = document.getElementById("country-filter");

  /* ---------- List ---------- */
  var countries = [];
  S.COURSES.forEach(function (c) { if (countries.indexOf(c.country) === -1) countries.push(c.country); });
  countries.forEach(function (c) {
    var o = document.createElement("option"); o.value = c; o.textContent = c; countrySel.appendChild(o);
  });

  function renderList() {
    var f = new FormData(filters);
    var country = f.get("country") || "", sort = f.get("sort") || "country";
    var list = S.COURSES.filter(function (c) { return !country || c.country === country; });
    if (sort === "name") list = list.slice().sort(function (a, b) { return a.name.localeCompare(b.name); });
    if (sort === "par") list = list.slice().sort(function (a, b) { return b.par - a.par; });
    grid.innerHTML = list.map(S.courseCard).join("");
    S.refreshTripButtons();
    count.textContent = list.length === S.COURSES.length ? "Mostrando todo: " + list.length + " courses" : "Mostrando " + list.length + " de " + S.COURSES.length + " courses";
    S.observeReveals();
  }
  filters.addEventListener("change", renderList);
  filters.addEventListener("reset", function () { setTimeout(renderList, 0); });
  filters.addEventListener("submit", function (e) { e.preventDefault(); renderList(); });
  renderList();

  /* ---------- Detail ---------- */
  function fact(v, l) { return "<li><strong>" + v + "</strong><span>" + l + "</span></li>"; }
  function factSmall(v, l) { return '<li><strong style="font-size:1.1rem">' + esc(v) + "</strong><span>" + l + "</span></li>"; }

  function detailHtml(c) {
    var cn = S.countryByName(c.country);
    var parks = S.PARKS.filter(function (p) { return p.nearest.course === c.id; });
    if (!parks.length && cn) parks = S.parksIn(cn.id).slice(0, 3);
    var journeys = S.JOURNEYS.filter(function (j) { return j.courses.some(function (x) { var m = S.courseByName(x.name); return m && m.id === c.id; }); });
    var stays = S.STAYS.filter(function (s) { return s.destination === c.destination; }).slice(0, 4);
    var others = S.COURSES.filter(function (x) { return x.id !== c.id && x.country === c.country; }).slice(0, 3);
    var lengthText = c.length ? c.length.toLocaleString("en-US") + " yd" : "—";
    return (
      '<section class="course-film-hero">' + S.courseFilm(c, { hero: true, w: 3200, h: 1800 }) + '<span class="tag film-tag">' + esc(S.courseCredit(c)) + "</span></section>" +

      '<section class="hero hero-plain course-hero">' +
        '<div class="container hero-inner">' +
          '<a class="back" href="courses.html#all">Todos los campos</a>' +
          '<h1 class="sr-only">' + esc(c.name) + ", " + esc(c.country) + "</h1>" +
          '<p class="lead">' + esc(c.note) + "</p>" +
          '<div class="hero-actions">' + S.addBtn("course", c.id) + '<a class="btn btn-outline" href="contact.html">Consultar por este campo</a></div>' +
        "</div>" +
      "</section>" +

      '<section class="section-tight section-cream"><div class="container">' +
        '<ul class="facts six">' +
          fact(c.par, "Par") + fact(c.holes, "Hoyos") + fact(lengthText, "Longitud aprox.") +
          factSmall(c.founded ? String(c.founded) : "—", "Fundado en") + factSmall(c.altitude || "—", "Altitud") + factSmall(c.greens || "—", "Césped") +
        "</ul>" +
      "</div></section>" +

      '<section class="section"><div class="container split">' +
        '<div class="prose reveal">' +
          '<p class="eyebrow">El campo</p>' +
          "<h2>" + esc(c.story ? c.story.split(". ")[0] + "." : c.note) + "</h2>" +
          (c.story ? "<p>" + esc(c.story) + "</p>" : "") +
          "<h3>Hoyo emblemático</h3><p>" + esc(c.signature || "Pregunte a su anfitrión; cada socio tiene una respuesta distinta.") + "</p>" +
        "</div>" +
        '<div class="aside-block reveal reveal-delay-1">' +
          "<h4>Conviene saber</h4>" +
          "<ul>" +
            "<li><strong>Caddies</strong><br/>" + esc(c.caddies || "Pregúntenos") + "</li>" +
            "<li><strong>Carritos</strong><br/>" + esc(c.carts || "Pregúntenos") + "</li>" +
            "<li><strong>Hándicap máximo</strong><br/>" + esc(c.handicap || "No indicado") + "</li>" +
            "<li><strong>Vestimenta</strong><br/>" + esc(c.dress || "Polo con cuello, clavos blandos") + "</li>" +
            "<li><strong>Mejores meses</strong><br/>" + esc(c.best || (cn ? cn.bestMonths : "Todo el año")) + "</li>" +
            (cn ? "<li><strong>Puerta de entrada</strong><br/>" + esc(cn.gateway) + "</li>" : "") +
          "</ul>" +
        "</div>" +
      "</div></section>" +

      (parks.length ? '<section class="section" id="safari"><div class="container">' +
        '<div class="section-head reveal"><p class="eyebrow">Combinar con un safari</p><h2>La naturaleza salvaje al alcance de ' + esc(c.name) + ".</h2></div>" +
        '<div class="journey-grid three">' + parks.map(S.parkCard).join("") + "</div>" +
      "</div></section>" : "") +

      (journeys.length ? '<section class="section section-cream"><div class="container">' +
        '<div class="section-head reveal"><p class="eyebrow">Viajes</p><h2>Viajes que lo juegan.</h2></div>' +
        '<div class="journey-grid three">' + journeys.map(function (j) { return S.jcard(j, { short: true }); }).join("") + "</div>" +
      "</div></section>" : "") +

      '<section class="section section-ink"><div class="container split">' +
        "<div>" +
          '<p class="eyebrow">Dónde se alojará</p><h2>Cerca del primer tee.</h2>' +
          (stays.length ? '<ul class="chips">' + stays.map(function (s) { return '<li><a href="stays.html#' + esc(s.id) + '">' + esc(s.name) + "</a></li>"; }).join("") + "</ul>" : '<p class="lead">Elegimos el alojamiento en función de su hora de salida.</p>') +
          (others.length ? '<h4 style="margin-top:28px">También en ' + esc(c.country) + '</h4><ul class="chips">' + others.map(function (o) { return '<li><a href="courses.html#' + esc(o.id) + '">' + esc(o.name) + "</a></li>"; }).join("") + "</ul>" : "") +
        "</div>" +
        "<div>" +
          '<p class="eyebrow">Unirlo todo</p><h2>Añada ' + esc(c.name) + " a su viaje.</h2>" +
          '<p class="lead">Un clic añade la vuelta. El creador la ordena con sus parques, presupuesta el viaje y envía el plan a un planificador que confirma la hora de salida.</p>' +
          '<div class="actions">' + S.addBtn("course", c.id) + '<a class="btn btn-outline" href="build.html">Abrir el creador de viajes</a></div>' +
        "</div>" +
      "</div></section>"
    );
  }

  function route() {
    var c = S.course(location.hash.replace("#", ""));
    if (c) {
      detailView.innerHTML = detailHtml(c);
      detailView.hidden = false;
      listView.hidden = true;
      document.title = c.name + " — Safari Golf Tour";
      window.scrollTo(0, 0);
    } else {
      detailView.hidden = true;
      detailView.innerHTML = "";
      listView.hidden = false;
      document.title = "Campos — Safari Golf Tour";
      if (location.hash === "#all") window.scrollTo(0, 0);
    }
    S.refreshTripButtons();
    S.observeReveals();
  }
  window.addEventListener("hashchange", route);
  route();
})();
