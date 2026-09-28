(function () {
  "use strict";
  var S = window.SGT, C = S.CONFIG, esc = S.esc;

  var email = document.getElementById("contact-email");
  var phone = document.getElementById("contact-phone");
  var offices = document.getElementById("contact-offices");

  email.innerHTML = C.email ? '<a href="mailto:' + esc(C.email) + '">' + esc(C.email) + "</a>" : "";
  email.hidden = !C.email;
  phone.innerHTML = C.phone ? '<a href="tel:' + esc(C.phone.replace(/\s+/g, "")) + '">' + esc(C.phone) + "</a>" : "";
  phone.hidden = !C.phone;
  offices.textContent = C.offices.join(" · ");

  S.populateJourneySelect(document.getElementById("enquiry-journey"));
  S.bindEnquiryForm(document.getElementById("enquiry-form"), document.getElementById("enquiry-success"));
  S.observeReveals();
})();
