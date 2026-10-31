(function () {
  "use strict";
  var S = window.SGT, C = S.CONFIG, esc = S.esc;

  var email = document.getElementById("contact-email");
  var offices = document.getElementById("contact-offices");

  email.innerHTML = C.email ? '<a href="mailto:' + esc(C.email) + '">' + esc(C.email) + "</a>" : "";
  email.hidden = !C.email;
  offices.textContent = C.address;

  if (new URLSearchParams(location.search).get("plan")) {
    try {
      var plan = localStorage.getItem("sgt-trip-text");
      var notes = document.querySelector("#enquiry-form textarea[name=notes]");
      if (plan && notes && notes.value.indexOf("Plan del creador de viajes") === -1) notes.value = plan + "\n\n" + notes.value;
      var banner = document.getElementById("plan-banner");
      if (plan && banner) { banner.hidden = false; }
    } catch (e) { /* ignore */ }
  }
  S.populateJourneySelect(document.getElementById("enquiry-journey"));
  S.populateDepartureSelect(document.getElementById("enquiry-departure"));
  S.bindEnquiryForm(document.getElementById("enquiry-form"), document.getElementById("enquiry-success"));
  S.observeReveals();
})();
