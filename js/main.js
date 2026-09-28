(function () {
  "use strict";

  var PACKAGES = window.SGT_PACKAGES || [];
  var grid = document.getElementById("package-grid");
  var filters = document.getElementById("filters");
  var resultsCount = document.getElementById("results-count");
  var emptyState = document.getElementById("empty-state");
  var modal = document.getElementById("package-modal");
  var modalBody = document.getElementById("modal-body");
  var enquiryPackage = document.getElementById("enquiry-package");
  var lastFocused = null;

  var money = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  /* ---------- Cards ---------- */
  function cardHtml(p) {
    return (
      '<article class="card" data-id="' + esc(p.id) + '">' +
        '<div class="card-art art-' + esc(p.image) + '">' +
          '<span class="badge">' + esc(p.tier) + "</span>" +
          '<span class="country">' + esc(p.country) + "</span>" +
        "</div>" +
        '<div class="card-body">' +
          "<h3>" + esc(p.name) + "</h3>" +
          '<p class="tagline">' + esc(p.tagline) + "</p>" +
          '<ul class="card-meta">' +
            "<li>" + p.nights + " nights</li>" +
            "<li>" + p.rounds + (p.rounds === 1 ? " round" : " rounds") + "</li>" +
            "<li>" + p.gameDrives + " game drives</li>" +
          "</ul>" +
          '<ul class="card-highlights">' +
            p.highlights.slice(0, 3).map(function (h) { return "<li>" + esc(h) + "</li>"; }).join("") +
          "</ul>" +
          '<div class="card-foot">' +
            '<span class="price"><small>from, per person</small><strong>' + money.format(p.priceFrom) + "</strong></span>" +
            '<button type="button" class="btn btn-ghost btn-sm" data-open="' + esc(p.id) + '">View itinerary</button>' +
          "</div>" +
        "</div>" +
      "</article>"
    );
  }

  function durationBucket(nights) {
    if (nights <= 6) return "short";
    if (nights <= 9) return "medium";
    return "long";
  }

  function applyFilters() {
    var f = new FormData(filters);
    var region = f.get("region") || "";
    var duration = f.get("duration") || "";
    var budget = Number(f.get("budget") || 0);
    var sort = f.get("sort") || "featured";

    var list = PACKAGES.filter(function (p) {
      if (region && p.region !== region) return false;
      if (duration && durationBucket(p.nights) !== duration) return false;
      if (budget && p.priceFrom >= budget) return false;
      return true;
    });

    var sorters = {
      "price-asc": function (a, b) { return a.priceFrom - b.priceFrom; },
      "price-desc": function (a, b) { return b.priceFrom - a.priceFrom; },
      nights: function (a, b) { return a.nights - b.nights; },
      rounds: function (a, b) { return b.rounds - a.rounds; }
    };
    if (sorters[sort]) list = list.slice().sort(sorters[sort]);

    grid.innerHTML = list.map(cardHtml).join("");
    emptyState.hidden = list.length > 0;
    resultsCount.textContent = list.length === PACKAGES.length
      ? "Showing all " + list.length + " packages"
      : "Showing " + list.length + " of " + PACKAGES.length + " packages";
  }

  filters.addEventListener("change", applyFilters);
  filters.addEventListener("reset", function () { setTimeout(applyFilters, 0); });
  filters.addEventListener("submit", function (e) { e.preventDefault(); applyFilters(); });

  /* ---------- Modal ---------- */
  function modalHtml(p) {
    return (
      '<div class="modal-hero art-' + esc(p.image) + '">' +
        "<div><h2 id=\"modal-title\">" + esc(p.name) + "</h2><p>" + esc(p.tagline) + "</p></div>" +
      "</div>" +
      '<ul class="modal-facts">' +
        "<li><strong>" + p.nights + "</strong>nights</li>" +
        "<li><strong>" + p.rounds + "</strong>" + (p.rounds === 1 ? "round of golf" : "rounds of golf") + "</li>" +
        "<li><strong>" + p.gameDrives + "</strong>game drives</li>" +
        "<li><strong>" + money.format(p.priceFrom) + "</strong>from, per person sharing</li>" +
      "</ul>" +
      '<div class="modal-section"><h3>Best months</h3><p>' + esc(p.bestMonths) + "</p></div>" +
      '<div class="modal-section"><h3>Highlights</h3><ul class="card-highlights">' +
        p.highlights.map(function (h) { return "<li>" + esc(h) + "</li>"; }).join("") +
      "</ul></div>" +
      '<div class="modal-section"><h3>Courses</h3><ul class="course-list">' +
        p.courses.map(function (c) {
          return "<li><strong>" + esc(c.name) + "</strong> · Par " + c.par + "<br/><span>" + esc(c.note) + "</span></li>";
        }).join("") +
      "</ul></div>" +
      '<div class="modal-section"><h3>Where you stay</h3><p>' + p.lodges.map(esc).join(" · ") + "</p></div>" +
      '<div class="modal-section"><h3>Day by day</h3><ol class="itinerary">' +
        p.itinerary.map(function (d) {
          return '<li><span class="day">Day ' + d.day + "</span><div><strong>" + esc(d.title) + "</strong><p>" + esc(d.text) + "</p></div></li>";
        }).join("") +
      "</ol></div>" +
      '<div class="modal-actions">' +
        '<a class="btn btn-primary" href="#enquire" data-enquire="' + esc(p.id) + '">Enquire about ' + esc(p.name) + "</a>" +
        '<button type="button" class="btn btn-ghost" data-close>Back to packages</button>' +
      "</div>"
    );
  }

  function openModal(id) {
    var p = PACKAGES.find(function (x) { return x.id === id; });
    if (!p) return;
    lastFocused = document.activeElement;
    modalBody.innerHTML = modalHtml(p);
    modal.hidden = false;
    document.body.classList.add("modal-open");
    modal.querySelector(".modal-close").focus();
    modal.querySelector(".modal-panel").scrollTop = 0;
  }

  function closeModal() {
    modal.hidden = true;
    document.body.classList.remove("modal-open");
    if (lastFocused && typeof lastFocused.focus === "function") lastFocused.focus();
  }

  document.addEventListener("click", function (e) {
    var open = e.target.closest("[data-open]");
    if (open) { openModal(open.getAttribute("data-open")); return; }
    var enquire = e.target.closest("[data-enquire]");
    if (enquire) {
      enquiryPackage.value = enquire.getAttribute("data-enquire");
      closeModal();
      return;
    }
    if (e.target.closest("[data-close]")) closeModal();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal.hidden) closeModal();
    if (e.key === "Tab" && !modal.hidden) {
      var focusables = modal.querySelectorAll("button, a[href], select, input, textarea, [tabindex]:not([tabindex='-1'])");
      if (!focusables.length) return;
      var first = focusables[0], last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  /* ---------- Nav ---------- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  toggle.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });
  nav.addEventListener("click", function (e) {
    if (e.target.tagName === "A") {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });

  /* ---------- Enquiry form ---------- */
  var form = document.getElementById("enquiry-form");
  var formError = document.getElementById("form-error");
  var formSuccess = document.getElementById("form-success");

  PACKAGES.forEach(function (p) {
    var opt = document.createElement("option");
    opt.value = p.id;
    opt.textContent = p.name + " · " + p.nights + " nights";
    enquiryPackage.appendChild(opt);
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var problems = [];
    var name = form.elements.name;
    var email = form.elements.email;
    name.classList.remove("invalid");
    email.classList.remove("invalid");
    if (!name.value.trim()) { problems.push("your name"); name.classList.add("invalid"); }
    if (!email.value.trim() || !email.checkValidity()) { problems.push("a valid email address"); email.classList.add("invalid"); }
    if (problems.length) {
      formError.textContent = "Please add " + problems.join(" and ") + ".";
      formError.hidden = false;
      (problems[0] === "your name" ? name : email).focus();
      return;
    }
    formError.hidden = true;

    /* No backend is wired up yet: persist locally so nothing is lost, then show confirmation. */
    var payload = {};
    new FormData(form).forEach(function (v, k) { payload[k] = v; });
    payload.submittedAt = new Date().toISOString();
    try {
      var stored = JSON.parse(localStorage.getItem("sgt-enquiries") || "[]");
      stored.push(payload);
      localStorage.setItem("sgt-enquiries", JSON.stringify(stored));
    } catch (err) { /* storage unavailable; confirmation still shown */ }

    form.hidden = true;
    formSuccess.hidden = false;
    formSuccess.scrollIntoView({ block: "center" });
  });

  /* ---------- Misc ---------- */
  document.getElementById("year").textContent = String(new Date().getFullYear());
  applyFilters();
})();
