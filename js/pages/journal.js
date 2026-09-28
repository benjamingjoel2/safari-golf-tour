(function () {
  "use strict";
  var S = window.SGT, esc = S.esc;

  var listView = document.getElementById("list-view");
  var detailView = document.getElementById("detail-view");

  S.articleCard = function (a) {
    return (
      '<a class="jcard reveal" href="journal.html#' + esc(a.slug) + '">' +
        '<div class="jcard-media"><img src="' + S.img(a.photo, 900, 560) + '" alt="' + esc(a.title) + '" loading="lazy" width="900" height="560" /></div>' +
        '<div class="jcard-body">' +
          '<p class="eyebrow">' + esc(a.category) + " · " + esc(a.date) + "</p>" +
          "<h3>" + esc(a.title) + "</h3>" +
          "<p>" + esc(a.standfirst) + "</p>" +
          '<div class="jcard-foot"><span class="btn-link">Read</span></div>' +
        "</div>" +
      "</a>"
    );
  };

  document.getElementById("journal-grid").innerHTML = S.JOURNAL.map(S.articleCard).join("");

  function detailHtml(a) {
    var more = S.JOURNAL.filter(function (x) { return x.slug !== a.slug; }).slice(0, 3);
    return (
      '<section class="hero hero-short">' +
        '<div class="hero-media"><img src="' + S.img(a.photo, 2000) + '" alt="' + esc(a.title) + '" /></div>' +
        '<div class="container hero-inner">' +
          '<a class="back" href="journal.html#all">The Journal</a>' +
          '<p class="eyebrow">' + esc(a.category) + " · " + esc(a.date) + "</p>" +
          "<h1>" + esc(a.title) + "</h1>" +
        "</div>" +
      "</section>" +
      '<section class="section section-cream"><div class="container narrow">' +
        '<article class="prose">' +
          '<p class="standfirst">' + esc(a.standfirst) + "</p>" +
          a.body.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("") +
        "</article>" +
        '<div class="actions"><a class="btn btn-gold" href="contact.html">Design your safari</a><a class="btn btn-outline" href="journeys.html">Browse the journeys</a></div>' +
      "</div></section>" +
      '<section class="section section-ink"><div class="container">' +
        '<div class="section-head"><p class="eyebrow">More from the field</p><h2>Keep reading.</h2></div>' +
        '<div class="journey-grid three">' + more.map(S.articleCard).join("") + "</div>" +
      "</div></section>"
    );
  }

  function route() {
    var a = S.article(location.hash.replace("#", ""));
    if (a) {
      detailView.innerHTML = detailHtml(a);
      detailView.hidden = false;
      listView.hidden = true;
      document.title = a.title + " — Safari Golf Tour";
      window.scrollTo(0, 0);
    } else {
      detailView.hidden = true;
      detailView.innerHTML = "";
      listView.hidden = false;
      document.title = "Journal — Safari Golf Tour";
      if (location.hash === "#all") window.scrollTo(0, 0);
    }
    S.observeReveals();
  }
  window.addEventListener("hashchange", route);
  route();
})();
