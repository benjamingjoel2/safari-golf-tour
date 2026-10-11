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
    count.textContent = list.length === S.COURSES.length ? "Showing all " + list.length + " courses" : "Showing " + list.length + " of " + S.COURSES.length + " courses";
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
      '<section class="course-film-hero">' + S.courseFilm(c, { hero: true, w: 3200, h: 1800 }) + "</section>" +

      '<section class="hero hero-plain course-hero">' +
        '<div class="container hero-inner">' +
          '<a class="back" href="courses.html#all">All courses</a>' +
          '<p class="eyebrow">' + (cn ? '<a href="countries.html#' + esc(cn.id) + '" style="color:inherit;text-decoration:none">' + esc(c.country) + "</a> · " + esc(cn.region) : esc(c.country)) + " · " + esc(c.designer) + "</p>" +
          "<h1>" + esc(c.name) + "</h1>" +
          '<p class="lead">' + esc(c.note) + "</p>" +
          '<div class="hero-actions">' + S.addBtn("course", c.id) + '<a class="btn btn-outline" href="contact.html">Enquire about this course</a></div>' +
        "</div>" +
      "</section>" +

      '<section class="section-tight section-cream"><div class="container">' +
        '<ul class="facts six">' +
          fact(c.par, "Par") + fact(c.holes, "Holes") + fact(lengthText, "Length, approx.") +
          factSmall(c.founded ? String(c.founded) : "—", "Founded") + factSmall(c.altitude || "—", "Altitude") + factSmall(c.greens || "—", "Turf") +
        "</ul>" +
      "</div></section>" +

      '<section class="section"><div class="container split">' +
        '<div class="prose reveal">' +
          '<p class="eyebrow">The course</p>' +
          "<h2>" + esc(c.story ? c.story.split(". ")[0] + "." : c.note) + "</h2>" +
          (c.story ? "<p>" + esc(c.story) + "</p>" : "") +
          "<h3>Signature hole</h3><p>" + esc(c.signature || "Ask your host; every member has a different answer.") + "</p>" +
        "</div>" +
        '<div class="aside-block reveal reveal-delay-1">' +
          "<h4>Good to know</h4>" +
          "<ul>" +
            "<li><strong>Caddies</strong><br/>" + esc(c.caddies || "Ask us") + "</li>" +
            "<li><strong>Carts</strong><br/>" + esc(c.carts || "Ask us") + "</li>" +
            "<li><strong>Handicap limit</strong><br/>" + esc(c.handicap || "None stated") + "</li>" +
            "<li><strong>Dress</strong><br/>" + esc(c.dress || "Collared shirts, soft spikes") + "</li>" +
            "<li><strong>Best months</strong><br/>" + esc(c.best || (cn ? cn.bestMonths : "Year round")) + "</li>" +
            (cn ? "<li><strong>Gateway</strong><br/>" + esc(cn.gateway) + "</li>" : "") +
          "</ul>" +
        "</div>" +
      "</div></section>" +

      (parks.length ? '<section class="section" id="safari"><div class="container">' +
        '<div class="section-head reveal"><p class="eyebrow">Combine with safari</p><h2>The wild within reach of ' + esc(c.name) + ".</h2></div>" +
        '<div class="journey-grid three">' + parks.map(S.parkCard).join("") + "</div>" +
      "</div></section>" : "") +

      (journeys.length ? '<section class="section section-cream"><div class="container">' +
        '<div class="section-head reveal"><p class="eyebrow">Journeys</p><h2>Journeys that play it.</h2></div>' +
        '<div class="journey-grid three">' + journeys.map(function (j) { return S.jcard(j, { short: true }); }).join("") + "</div>" +
      "</div></section>" : "") +

      '<section class="section section-ink"><div class="container split">' +
        "<div>" +
          '<p class="eyebrow">Where you stay</p><h2>Near the first tee.</h2>' +
          (stays.length ? '<ul class="chips">' + stays.map(function (s) { return '<li><a href="stays.html#' + esc(s.id) + '">' + esc(s.name) + "</a></li>"; }).join("") + "</ul>" : '<p class="lead">We choose the stay around your tee time.</p>') +
          (others.length ? '<h4 style="margin-top:28px">Also in ' + esc(c.country) + '</h4><ul class="chips">' + others.map(function (o) { return '<li><a href="courses.html#' + esc(o.id) + '">' + esc(o.name) + "</a></li>"; }).join("") + "</ul>" : "") +
        "</div>" +
        "<div>" +
          '<p class="eyebrow">Put it together</p><h2>Add ' + esc(c.name) + " to your trip.</h2>" +
          '<p class="lead">One click adds the round. The builder orders it with your parks, prices the trip and sends the plan to a planner who confirms the tee time.</p>' +
          '<div class="actions">' + S.addBtn("course", c.id) + '<a class="btn btn-outline" href="build.html">Open the trip builder</a></div>' +
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
      document.title = "Courses — Safari Golf Tour";
      if (location.hash === "#all") window.scrollTo(0, 0);
    }
    S.refreshTripButtons();
    S.observeReveals();
  }
  window.addEventListener("hashchange", route);
  route();
})();
