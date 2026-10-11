(function () {
  "use strict";
  var S = window.SGT, esc = S.esc, R = S.RATES;

  var emptyEl = document.getElementById("builder-empty");
  var builderEl = document.getElementById("builder");
  var stopsEl = document.getElementById("stops");
  var outlineEl = document.getElementById("outline");
  var summaryEl = document.getElementById("summary");

  document.getElementById("builder-journeys").innerHTML = S.JOURNEYS.map(S.loadableJourneyCard).join("");

  function resolve(item) {
    if (item.type === "course") { var c = S.course(item.id); return c && { type: "course", id: c.id, name: c.name, country: c.country, countryId: (S.countryByName(c.country) || {}).id, photo: c.photo, nights: 1, meta: "Par " + c.par + " · " + c.holes + " holes" }; }
    var p = S.park(item.id);
    return p && { type: "park", id: p.id, name: p.name, country: p.country, countryId: p.countryId, photo: p.photo, nights: item.nights || 3, meta: p.type + " · " + p.bestMonths, tier: p.tier };
  }

  function stops() { return S.trip.get().map(resolve).filter(Boolean); }

  /* ---------- Pricing ---------- */
  function price(list) {
    var total = 0, lastCountry = null;
    list.forEach(function (s) {
      if (s.type === "course") total += R.premiumCourses.indexOf(s.id) !== -1 ? R.premiumCourseDay : R.courseDay;
      else {
        total += (R.parkNight[s.tier] || R.parkNight.premium) * s.nights;
        if (R.gorillaParks.indexOf(s.id) !== -1) total += R.gorillaPermit;
      }
      total += R.stopLogistics;
      if (lastCountry && lastCountry !== s.countryId) total += R.countryChange;
      lastCountry = s.countryId;
    });
    return total;
  }

  /* ---------- Outline ---------- */
  function outline(list) {
    var days = [], day = 1, lastCountry = null;
    if (!list.length) return days;
    var first = S.country(list[0].countryId);
    days.push({ day: day++, title: "Arrive " + (first ? first.gateway.split(" ·")[0].replace(/\s*\(.*\)/, "") : list[0].country), text: "Met on arrival and transferred to your first night. Welcome briefing with your host." });
    list.forEach(function (s, i) {
      var border = lastCountry && lastCountry !== s.countryId;
      var cn = S.country(s.countryId);
      if (s.type === "course") {
        days.push({ day: day++, title: (border ? "Fly to " + s.country + " · " : "") + s.name, text: "Round at " + s.name + (i + 1 < list.length && list[i + 1].type === "park" ? ", then onward towards " + list[i + 1].name + "." : ". Evening at leisure.") });
      } else {
        for (var n = 0; n < s.nights; n++) {
          var t = n === 0 ? (border ? "Fly to " + s.country + " · " + s.name : "Into " + s.name) : s.name + " · day " + (n + 1);
          var txt = n === 0 ? "Transfer or light aircraft into the reserve (" + (S.park(s.id).nearest.how) + "). Afternoon game drive." : (n === s.nights - 1 ? "Dawn drive, bush breakfast, and a final sundowner." : "Dawn and dusk game drives with your private guide. Midday at camp.");
          if (R.gorillaParks.indexOf(s.id) !== -1 && n === 1) txt = "Gorilla trekking: a morning walk with the rangers to a habituated family and one hour in their company.";
          days.push({ day: day++, title: t, text: txt });
        }
      }
      lastCountry = s.countryId;
    });
    var lastC = S.country(list[list.length - 1].countryId);
    days.push({ day: day, title: "Depart", text: "Transfer to " + (lastC ? lastC.gateway.split(" ·")[0].replace(/\s*\(.*\)/, "") : "the airport") + " for your onward flight." });
    return days;
  }

  function suggest() { S.trip.set(S.orderStops(S.trip.get())); render(); }

  /* ---------- Render ---------- */
  function render() {
    var list = stops();
    emptyEl.hidden = list.length > 0;
    builderEl.hidden = list.length === 0;
    if (!list.length) { S.observeReveals(); return; }

    stopsEl.innerHTML = list.map(function (s, i) {
      return (
        '<li class="stop" data-i="' + i + '">' +
          (s.type === "course" ? '<a class="stop-film" href="courses.html#' + esc(s.id) + '"><img src="' + S.img(s.photo, 300, 300) + '" alt="" width="300" height="300" /></a>' : '<img src="' + S.img(s.photo, 300, 300) + '" alt="" width="300" height="300" />') +
          '<div class="stop-main">' +
            '<p class="eyebrow">' + (s.type === "course" ? "Golf" : "Safari") + " · " + esc(s.country) + "</p>" +
            "<h3>" + esc(s.name) + "</h3>" +
            '<p class="muted">' + esc(s.meta) + "</p>" +
          "</div>" +
          '<div class="stop-side">' +
            (s.type === "park"
              ? '<div class="stepper" aria-label="Nights"><button type="button" data-nights="-1" aria-label="Fewer nights">−</button><span>' + s.nights + (s.nights === 1 ? " night" : " nights") + '</span><button type="button" data-nights="1" aria-label="More nights">+</button></div>'
              : '<span class="stepper-static">1 round · 1 night</span>') +
            '<div class="stop-actions">' +
              '<button type="button" data-move="-1" aria-label="Move up"' + (i === 0 ? " disabled" : "") + ">↑</button>" +
              '<button type="button" data-move="1" aria-label="Move down"' + (i === list.length - 1 ? " disabled" : "") + ">↓</button>" +
              '<button type="button" data-remove aria-label="Remove">×</button>' +
            "</div>" +
          "</div>" +
        "</li>"
      );
    }).join("");

    var days = outline(list);
    outlineEl.innerHTML = days.map(function (d) {
      return '<li><span class="day">Day ' + d.day + "</span><div><h4>" + esc(d.title) + "</h4><p>" + esc(d.text) + "</p></div></li>";
    }).join("");

    var nights = list.reduce(function (a, s) { return a + s.nights; }, 0);
    var rounds = list.filter(function (s) { return s.type === "course"; }).length;
    var drives = list.filter(function (s) { return s.type === "park"; }).reduce(function (a, s) { return a + s.nights * 2 - 1; }, 0);
    var countries = []; list.forEach(function (s) { if (countries.indexOf(s.country) === -1) countries.push(s.country); });
    var total = price(list);
    var months = []; list.forEach(function (s) { if (s.type === "park") { var m = S.park(s.id).bestMonths; if (months.indexOf(m) === -1) months.push(m); } });

    summaryEl.innerHTML =
      '<p class="eyebrow">Your trip</p>' +
      '<h3 style="font-size:1.9rem;margin-bottom:6px">' + countries.join(" · ") + "</h3>" +
      '<ul class="facts two" style="margin:18px 0">' +
        "<li><strong>" + nights + "</strong><span>Nights</span></li>" +
        "<li><strong>" + rounds + "</strong><span>" + (rounds === 1 ? "Round" : "Rounds") + "</span></li>" +
        "<li><strong>" + drives + "</strong><span>Game drives</span></li>" +
        "<li><strong>" + countries.length + "</strong><span>" + (countries.length === 1 ? "Country" : "Countries") + "</span></li>" +
      "</ul>" +
      '<p class="price-line" style="margin:0 0 6px"><strong>' + S.money(total) + "</strong> pp sharing, indicative</p>" +
      '<p class="muted" style="font-size:0.85rem;margin-bottom:18px">Ground only. Excludes international flights. Your planner confirms real rates for your dates.</p>' +
      (months.length ? '<p class="muted" style="font-size:0.85rem"><strong style="color:var(--gold-2);font-family:var(--sans);font-size:0.68rem;letter-spacing:0.2em;text-transform:uppercase">Best months</strong><br/>' + months.map(esc).join("<br/>") + "</p>" : "") +
      '<div class="actions" style="flex-direction:column;align-items:stretch;margin-top:18px">' +
        '<a class="btn btn-gold" href="contact.html?plan=1">Send this plan to a planner</a>' +
        '<a class="btn btn-outline btn-sm" href="countries.html">Add another country</a>' +
      "</div>";

    /* Persist a text version for the brief */
    try {
      var text = "Trip builder plan (indicative " + S.money(total) + " pp, " + nights + " nights):\n" +
        list.map(function (s, i) { return (i + 1) + ". " + (s.type === "course" ? "Round at " : "") + s.name + ", " + s.country + (s.type === "park" ? " (" + s.nights + " nights)" : ""); }).join("\n");
      localStorage.setItem("sgt-trip-text", text);
    } catch (e) { /* ignore */ }

    S.refreshTripButtons();
    S.observeReveals();
  }

  /* ---------- Events ---------- */
  stopsEl.addEventListener("click", function (e) {
    var li = e.target.closest(".stop"); if (!li) return;
    var i = Number(li.getAttribute("data-i"));
    var items = S.trip.get();
    var b = e.target.closest("button"); if (!b) return;
    if (b.hasAttribute("data-remove")) items.splice(i, 1);
    else if (b.hasAttribute("data-move")) {
      var j = i + Number(b.getAttribute("data-move"));
      if (j < 0 || j >= items.length) return;
      var tmp = items[i]; items[i] = items[j]; items[j] = tmp;
    } else if (b.hasAttribute("data-nights")) {
      items[i].nights = Math.min(7, Math.max(1, (items[i].nights || 3) + Number(b.getAttribute("data-nights"))));
    }
    S.trip.set(items);
    render();
  });
  document.getElementById("clear-trip").addEventListener("click", function () { S.trip.set([]); render(); });
  document.getElementById("auto-order").addEventListener("click", suggest);
  window.addEventListener("sgt-trip-change", render);

  render();
})();
