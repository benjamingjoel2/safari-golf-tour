/* Safari Golf Tour — courses, stays, hosted departures, encounters and journal.
 * Loaded after js/packages.js, before js/site.js.
 */
(function () {
  "use strict";
  var S = window.SGT;

  /* Extra photography (Unsplash ids, verified) */
  Object.assign(S.PHOTO, {
    irons: "1530028828-25e8270793c5",        // irons in a bag
    golfSwing3: "1535132011086-b8818f016104", // golfer at the top of the swing
    fairway: "1591491640784-3232eb748d4b",    // golfer on a parkland fairway
    lodgeThatch: "1566073771259-6a8506099945",// thatched lodge with pool and loungers
    cabanas: "1571003123894-1f0594d2b5d9",    // pool cabanas at dusk
    poolResort: "1571896349842-33c89424de2d", // resort pool and pavilion
    deckSea: "1582719508461-905c673771fd",    // deck by the sea
    poolDusk: "1542314831-068cd1dbfeeb",      // pool at blue hour
    starBed: "1596394516093-501ba68a0ba6",    // bed on a terrace above a lake
    villaOcean: "1602002418082-a4443e081dd1", // villa opening onto the ocean
    suite: "1590490360182-c33d57733427",      // classic hotel suite
    room: "1618773928121-c32242e63f39",       // hotel bedroom
    vineyard: "1560493676-04071c5f467b",      // vineyard rows
    traveller: "1554123168-b400f9c806ca",     // traveller at an airport window
    flyCamp: "1526491109672-74740652b963",    // tent at sunset
    poolNight: "1583037189850-1921ae7c6c22"   // resort pool at night
  });

  /* ---------- Courses ---------- */
  S.COURSES = [
    { id: "karen", name: "Karen Country Club", country: "Kenya", destination: "kenya", designer: "Remington & Bernard (1937)", par: 72, holes: 18, photo: "g_greenTrees", note: "Tree-lined parkland on the edge of the Ngong Hills, twenty minutes from Nairobi's hotels. The most complete club in East Africa." },
    { id: "muthaiga", name: "Muthaiga Golf Club", country: "Kenya", destination: "kenya", designer: "Founded 1913", par: 72, holes: 18, photo: "g_savannaCourse", note: "Kenya's home of golf and host of the Kenya Open. Tight, mature and unforgiving off the tee." },
    { id: "windsor", name: "Windsor Golf Hotel & Country Club", country: "Kenya", destination: "kenya", designer: "Tom Macaulay", par: 72, holes: 18, photo: "g_aerialRolling", note: "Championship layout through indigenous forest on the north side of Nairobi, ideal for a farewell round before an evening flight." },
    { id: "vipingo", name: "Vipingo Ridge", country: "Kenya", destination: "kenya", designer: "David Jones", par: 72, holes: 18, photo: "g_seaCourse", note: "PGA-accredited Baobab Course on a ridge above the Indian Ocean, north of Mombasa. The coast extension." },
    { id: "rift-valley", name: "Great Rift Valley Lodge", country: "Kenya", destination: "kenya", designer: "Sam Lacey", par: 72, holes: 18, photo: "g_mtnCourse2", note: "High above Lake Naivasha with the Rift Valley below every hole. Zebra and giraffe on the fairways." },
    { id: "kili", name: "Kilimanjaro Golf & Wildlife Estate", country: "Tanzania", destination: "tanzania", designer: "David Jones", par: 72, holes: 18, photo: "g_mtnWalk", note: "Between Meru and Kilimanjaro on a private wildlife estate. Play among zebra and wildebeest with the mountain behind the green." },
    { id: "sea-cliff", name: "Sea Cliff Resort, Zanzibar", country: "Tanzania", destination: "tanzania", designer: "Peter Matkovich", par: 36, holes: 9, photo: "g_palmsWater", note: "Nine ocean-side holes on the north-west coast of Zanzibar. The beach extension after the Serengeti." },
    { id: "fancourt-links", name: "Fancourt The Links", country: "South Africa", destination: "south-africa", designer: "Gary Player", par: 73, holes: 18, photo: "g_linksGold", note: "South Africa's number one and the Presidents Cup venue. A links built on a flat field, with dunes, wind and a firm, fast surface. Caddies included." },
    { id: "fancourt-montagu", name: "Fancourt Montagu", country: "South Africa", destination: "south-africa", designer: "Gary Player", par: 72, holes: 18, photo: "g_dawnBunkers", note: "Parkland masterpiece in the Outeniqua foothills, refined by David McLay Kidd. The gentler of Fancourt's championship pair." },
    { id: "fancourt-outeniqua", name: "Fancourt Outeniqua", country: "South Africa", destination: "south-africa", designer: "Gary Player", par: 72, holes: 18, photo: "g_aerialPond", note: "Wide fairways and water on ten holes. The warm-up round on arrival at Fancourt." },
    { id: "pearl-valley", name: "Pearl Valley", country: "South Africa", destination: "south-africa", designer: "Jack Nicklaus", par: 72, holes: 18, photo: "g_mountainsRoses", note: "Nicklaus signature course among the Paarl vineyards with the Simonsberg behind. Host of the South African Open." },
    { id: "leopard-creek", name: "Leopard Creek", country: "South Africa", destination: "south-africa", designer: "Gary Player", par: 72, holes: 18, photo: "g_bigTree", note: "On the Crocodile River bordering Kruger. Hippos and crocodiles line the 13th, elephants cross the far bank. Access by invitation, which we arrange." },
    { id: "skukuza", name: "Skukuza Golf Club", country: "South Africa", destination: "south-africa", designer: "Kruger National Park", par: 72, holes: 9, photo: "g_flagMist", note: "Unfenced nine holes inside Kruger National Park, played twice. The rough really is wild, and a ranger walks the round." },
    { id: "arabella", name: "Arabella", country: "South Africa", destination: "south-africa", designer: "Peter Matkovich", par: 72, holes: 18, photo: "g_aerial4", note: "On the Bot River lagoon an hour from Cape Town. The finish along the water is one of the best in the country." },
    { id: "erinvale", name: "Erinvale", country: "South Africa", destination: "south-africa", designer: "Gary Player", par: 72, holes: 18, photo: "g_alpine", note: "Somerset West, at the foot of the Helderberg. World Cup of Golf venue and a fine Winelands alternative." },
    { id: "elephant-hills", name: "Elephant Hills", country: "Zimbabwe", destination: "victoria-falls", designer: "Gary Player", par: 72, holes: 18, photo: "g_sunrise2", note: "The only course in the world where you can see a natural wonder's spray from the tee. Warthogs on the fairways, the Zambezi beside the back nine." },
    { id: "borrowdale", name: "Borrowdale Brooke", country: "Zimbabwe", destination: "victoria-falls", designer: "Peter Matkovich", par: 72, holes: 18, photo: "g_greenSunrise", note: "Harare's championship course, for guests routing through the capital." },
    { id: "heritage-chateau", name: "Heritage Le Château", country: "Mauritius", destination: "mauritius", designer: "Peter Matkovich", par: 72, holes: 18, photo: "g_aerialGreen2", note: "Host of the AfrAsia Bank Mauritius Open on the DP World Tour. Sea views from every hole on the Bel Ombre estate." },
    { id: "heritage-reserve", name: "Heritage La Réserve", country: "Mauritius", destination: "mauritius", designer: "Peter Matkovich & Louis Oosthuizen", par: 72, holes: 18, photo: "g_mtnCourse1", note: "Opened 2023 in the hills above Le Château. Already ranked among the island's best." },
    { id: "ile-aux-cerfs", name: "Ile aux Cerfs", country: "Mauritius", destination: "mauritius", designer: "Bernhard Langer", par: 72, holes: 18, photo: "g_aerialBunkers", note: "Reached by boat from the east coast, with the lagoon in play on nine holes. Lunch on the island afterwards." },
    { id: "anahita", name: "Anahita", country: "Mauritius", destination: "mauritius", designer: "Ernie Els", par: 72, holes: 18, photo: "g_aerial3", note: "Six holes along the ocean on the east coast. A quieter alternative to Ile aux Cerfs across the water." },
    { id: "entebbe", name: "Entebbe Golf Club", country: "Uganda", destination: "uganda", designer: "Founded 1901", par: 71, holes: 18, photo: "g_sunrise1", note: "East Africa's oldest course, on the shore of Lake Victoria a short walk from the hotel. Marabou storks patrol the fairways." },
    { id: "uganda-gc", name: "Uganda Golf Club", country: "Uganda", destination: "uganda", designer: "Kampala, founded 1908", par: 72, holes: 18, photo: "g_aerial2", note: "Host of the Uganda Open in the centre of Kampala. Optional round for those with a night in the capital." }
  ];

  /* ---------- Stays ---------- */
  S.STAYS = [
    { id: "hemingways", name: "Hemingways Nairobi", destination: "kenya", type: "Boutique hotel", photo: "suite", note: "Plantation-style boutique hotel in Karen, ten minutes from the club. Butlers, a proper bar, and the Ngong Hills from the terrace." },
    { id: "mara-plains", name: "Mara Plains Camp", destination: "kenya", type: "Tented camp", photo: "lodgeThatch", note: "Seven tents on the Ntiakitiak River in the Olare Motorogi Conservancy. Off-road tracking, night drives, and the Mara's best leopard sightings." },
    { id: "kili-villas", name: "Kili Golf Villas", destination: "tanzania", type: "Golf estate villas", photo: "poolNight", note: "Private villas on the Kilimanjaro Golf & Wildlife Estate, with the course at the door and the mountain at breakfast." },
    { id: "namiri-plains", name: "Namiri Plains", destination: "tanzania", type: "Tented camp", photo: "starBed", note: "Ten suites on the eastern Serengeti plains, closed to visitors for twenty years and now cheetah country. Star beds on request." },
    { id: "highlands", name: "The Highlands, Ngorongoro", destination: "tanzania", type: "Lodge", photo: "infinityPool", note: "Glass-fronted domes on the forested rim of the Ngorongoro Crater, with the earliest descent permit in the morning." },
    { id: "serengeti-mobile", name: "Serengeti mobile camp", destination: "tanzania", type: "Mobile camp", photo: "flyCamp", note: "A camp that moves with the migration. Fewer comforts, better sightings, and campfire dinners under the whole sky." },
    { id: "la-residence", name: "La Residence, Franschhoek", destination: "south-africa", type: "Country house", photo: "vineyard", note: "Eleven suites on a working vineyard in the Franschhoek valley. Pearl Valley is twenty minutes away." },
    { id: "fancourt-hotel", name: "Fancourt Hotel", destination: "south-africa", type: "Golf resort", photo: "poolResort", note: "The manor house and hotel at the centre of the estate, with three courses, a spa and the Links a buggy ride from the room." },
    { id: "londolozi", name: "Londolozi", destination: "south-africa", type: "Safari lodge", photo: "cabanas", note: "Family-run since 1926 in the Sabi Sand, and the reserve where leopard viewing was pioneered. Five camps on the Sand River." },
    { id: "vic-falls-hotel", name: "Victoria Falls Hotel", destination: "victoria-falls", type: "Grand hotel", photo: "room", note: "The 1904 grande dame, with the spray of the Falls from the terrace and Elephant Hills five minutes up the road." },
    { id: "chobe-game-lodge", name: "Chobe Game Lodge", destination: "victoria-falls", type: "Safari lodge", photo: "poolDusk", note: "The only lodge inside Chobe National Park, on the riverfront, with its own fleet of electric boats and vehicles." },
    { id: "le-telfair", name: "Heritage Le Telfair", destination: "mauritius", type: "Beach resort", photo: "villaOcean", note: "Colonial-style resort on the Bel Ombre estate with both Heritage courses and a nature reserve behind." },
    { id: "prince-maurice", name: "Constance Prince Maurice", destination: "mauritius", type: "Beach resort", photo: "deckSea", note: "Suites on stilts over the lagoon on the east coast. Ile aux Cerfs by boat, the Legend course next door." },
    { id: "bwindi-lodge", name: "Bwindi Lodge", destination: "uganda", type: "Forest lodge", photo: "highlands", note: "On the edge of the Bwindi Impenetrable Forest, with the trekking briefing point a five-minute walk away." }
  ];

  /* ---------- Hosted departures ---------- */
  S.DEPARTURES = [
    { id: "kenya-feb-2027", journey: "kenya-classic", start: "2027-02-06", nights: 7, host: "Your planner and a Nairobi caddie master", priceFrom: 5600, places: 8, left: 0 },
    { id: "cape-mar-2027", journey: "south-africa-signature", start: "2027-03-12", nights: 9, host: "Your planner and a PGA professional", priceFrom: 7450, places: 8, left: 3 },
    { id: "falls-jun-2027", journey: "victoria-falls-chobe", start: "2027-06-09", nights: 6, host: "Your planner", priceFrom: 4350, places: 8, left: 5 },
    { id: "kenya-aug-2027", journey: "kenya-classic", start: "2027-08-14", nights: 7, host: "Your planner and a Nairobi caddie master", priceFrom: 5600, places: 8, left: 2, note: "Migration season" },
    { id: "mauritius-sep-2027", journey: "mauritius-kruger", start: "2027-09-23", nights: 11, host: "Your planner and a PGA professional", priceFrom: 9600, places: 8, left: 6 },
    { id: "ladies-cape-oct-2027", journey: "south-africa-signature", start: "2027-10-06", nights: 9, host: "A Ladies European Tour professional", priceFrom: 7450, places: 8, left: 8, note: "Ladies' departure" },
    { id: "kenya-jan-2028", journey: "kenya-classic", start: "2028-01-21", nights: 7, host: "Your planner", priceFrom: 5800, places: 8, left: 8 },
    { id: "tanzania-feb-2028", journey: "tanzania-grand", start: "2028-02-18", nights: 10, host: "Your planner and a PGA professional", priceFrom: 8100, places: 8, left: 8, note: "Calving season" },
    { id: "grand-aug-2028", journey: "grand-crossing", start: "2028-08-05", nights: 14, host: "Both founders", priceFrom: 19800, places: 8, left: 8, note: "Flagship departure" }
  ];

  /* ---------- Encounters ---------- */
  S.ENCOUNTERS = [
    { id: "play-with-a-pro", name: "Play with a touring professional", where: "Fancourt · Heritage · Karen", photo: "g_drive", text: "Eighteen holes with a PGA or Ladies European Tour professional as your fourth, followed by lunch and a short-game clinic. Available on hosted departures and, with notice, on tailor-made journeys.", journeys: ["south-africa-signature", "mauritius-kruger", "kenya-classic"] },
    { id: "gorillas", name: "An hour with the mountain gorillas", where: "Bwindi Impenetrable Forest", photo: "highlands", text: "A morning trek with rangers to a habituated family, then one hour in their company. Permits are limited and secured months ahead; we hold an allocation for our guests.", journeys: ["uganda-short-break"] },
    { id: "balloon", name: "Dawn over the Mara by balloon", where: "Maasai Mara", photo: "balloon", text: "Lift-off before sunrise, an hour drifting over the herds, and a champagne breakfast on the plains where you land. The most photographed morning of any journey.", journeys: ["kenya-classic", "grand-crossing"] },
    { id: "leopard-tracking", name: "Tracking leopard with a specialist", where: "Sabi Sand", photo: "leopard", text: "A private vehicle with one of the reserve's senior trackers for a full day, following one animal from morning kill to evening tree. The Sabi Sand is the only place this is reliable.", journeys: ["south-africa-signature", "grand-crossing"] },
    { id: "rhino-rangers", name: "A morning with the rhino rangers", where: "Laikipia · Ngorongoro", photo: "elephantHeadOn", text: "Walk with the anti-poaching unit that protects the black rhino, see how the animals are tracked, and understand where the conservancy fee on every journey goes.", journeys: ["kenya-classic", "tanzania-grand"] },
    { id: "maasai-morning", name: "A morning with a Maasai community", where: "Ngorongoro highlands", photo: "acaciaSunset", text: "Not a staged village visit. A morning walking with the herders, a meal with a family we have known for years, and time to ask what you actually want to ask.", journeys: ["tanzania-grand"] },
    { id: "zambezi-sunset", name: "The Zambezi at sunset", where: "Victoria Falls · Chobe", photo: "elephantsSunset", text: "A private boat above the Falls as the elephants come down to drink, then dinner on the riverbank. On Chobe, the same hour by electric boat along the floodplain.", journeys: ["victoria-falls-chobe", "grand-crossing"] }
  ];

  /* ---------- Journal ---------- */
  S.JOURNAL = [
    {
      slug: "links-after-the-refurbishment",
      category: "Golf · South Africa",
      title: "The Links after the refurbishment",
      date: "September 2026",
      photo: "g_dawnBunkers",
      standfirst: "Fancourt's flagship reopened with new bunkering and a firmer, faster surface. It plays two shots harder into the wind and is better for it.",
      body: [
        "We played the Links three times in the fortnight after it reopened, twice into a south-easter and once in the flat calm that George gives you perhaps one morning in ten. The work is subtle from the tee and obvious from the fairway: the bunkers have been rebuilt with revetted faces and deeper floors, the greens are firmer, and the run-offs that used to hold a ball now feed it away.",
        "The practical effect is that the course rewards a running approach again, which is what Gary Player intended and what a decade of soft conditions had quietly taken away. Into the wind, a well-struck seven iron now lands short and releases; the same shot flown to the flag finishes over the back. Our guests with links experience loved it. Our parkland players needed a round to adjust.",
        "Our advice for the journeys: play Montagu first, the Links second, and take the caddie. The caddies have been walking the new run-offs for months and will save you three shots before the turn. Handicap certificates are checked at the desk, so bring the paper or the app."
      ]
    },
    {
      slug: "when-to-see-the-mara-crossings",
      category: "Safari · Kenya",
      title: "When to see the Mara crossings",
      date: "August 2026",
      photo: "balloon",
      standfirst: "The herds have been arriving earlier each year. Late July into September is now the safest window, with the conservancies quietest in the second half.",
      body: [
        "The Great Migration does not run to a calendar, but it does run to grass, and the grass has been greening earlier in the northern Serengeti for several seasons. In 2026 the first big crossings on the Mara River were in the second week of July, a fortnight ahead of the long-term average. By mid August the herds were spread across the Mara Triangle and the conservancies to the north.",
        "For a golf safari the timing matters twice. First for the crossings themselves, which are a probability rather than a promise: three or four full days on the river in August gives you a strong chance, one day gives you a coin toss. Second for the courses in Nairobi, which are at their best in the dry July to September window and can be heavy after the short rains in November.",
        "Our Kenya Classic hosted departure for August 2027 is built on this: four nights on the Mara side, with the golf before rather than after so nobody is checking a phone on the 14th tee for news of a crossing."
      ]
    },
    {
      slug: "chobe-by-boat",
      category: "Safari · Botswana",
      title: "Chobe by boat, not by road",
      date: "July 2026",
      photo: "elephantsSunset",
      standfirst: "In the dry season the riverfront is the whole show. We now put every Chobe afternoon on the water and keep the 4x4 for dawn.",
      body: [
        "Chobe holds the largest elephant population in Africa, and from June to October almost all of it is within a kilometre of the river. The road along the riverfront is a good drive, but it is also the busiest road in Botswana in the afternoon, and a herd crossing to the islands is best seen from the water at their eye level.",
        "Chobe Game Lodge runs a fleet of quiet electric boats, which changes the experience completely. You sit in the reeds while the elephants swim past the bow, and the only sound is the water. Buffalo, hippo, crocodile and the fish eagles are all closer than any vehicle can get.",
        "So the Falls & Fairways journey now has the morning drives inland for lion and sable, and every afternoon on the river, ending with sundowners as the herds come down. Golfers coming from Elephant Hills the day before find it the perfect counterweight."
      ]
    },
    {
      slug: "packing-clubs-for-africa",
      category: "Practical",
      title: "Packing clubs for Africa: what actually works",
      date: "June 2026",
      photo: "irons",
      standfirst: "Bring your own clubs if you can. Here is how to do it without carrying them onto a twelve-seat aircraft.",
      body: [
        "Most of our guests want their own clubs for Fancourt or Leopard Creek and could not care less what they play at Skukuza. The answer is a hard travel case for the international flight, and then letting us move the clubs by road or scheduled freight between the golf legs while you fly light aircraft into the bush with a soft bag.",
        "Light aircraft in Kenya, Tanzania and Botswana have a 15 kilogram soft-bag limit and no room for a club case. Rather than argue at the airstrip, we send the clubs ahead to the next course and they are waiting in the pro shop when you land. On the Grand Crossing the clubs make the trip from Fancourt to Leopard Creek to Elephant Hills to Karen without you touching them.",
        "If you would rather not travel with clubs at all, every course we use has quality rental sets, and we can hold one set for you across a whole journey so the feel does not change. Tell us your specification when you enquire and we will confirm what each course can provide."
      ]
    },
    {
      slug: "a-day-in-two-halves",
      category: "Why a golf safari",
      title: "A day in two halves",
      date: "May 2026",
      photo: "g_duskPair",
      standfirst: "How we build a golf-safari day so that neither half feels like the price of the other.",
      body: [
        "The oldest objection to a golf safari is that it must be a compromise: too little golf for the golfer, too little bush for the non-golfer. It is a fair objection to a badly built day, and most of the golf-and-safari packages we see are badly built, with the round bolted onto a rest day and the game drive squeezed into the hour before dinner.",
        "Our day starts in the wild. First light is when the animals move and the temperature is kind, so the morning drive leaves at six and is back by ten. The round begins at eleven, when the light is high and the fairways are empty, and finishes by four. The evening belongs to the bush again: a short drive, sundowners, dinner outside.",
        "Where the course and the camp are not in the same place, we do not split the day. We split the journey: three golf days in a row, then four safari days, with the clubs moved ahead. The non-golfers get the spa, the vineyard or another drive on the golf days, and the group meets for lunch. Everyone comes home full."
      ]
    },
    {
      slug: "mauritius-in-october",
      category: "Golf · Mauritius",
      title: "Mauritius after the Open: why October is the month",
      date: "April 2026",
      photo: "g_seaCourse",
      standfirst: "The DP World Tour leaves Heritage in December. Play it in October, when the courses are tournament-ready and the island is dry.",
      body: [
        "Le Château is prepared for the AfrAsia Bank Mauritius Open from September, so from October the greens are at tournament speed and the rough is up. It is the best month to see the course as the professionals do. It is also the last month before the summer humidity arrives and the afternoon showers become reliable.",
        "La Réserve, opened above Le Château in 2023, plays very differently: shorter, hillier, with more shot-making and more views. We recommend Le Château on the first day and La Réserve on the second, then a rest day before the boat to Ile aux Cerfs.",
        "Combined with Kruger, October is also the end of the dry season and the best game viewing of the year, which is why the Mauritius & Kruger journey and its hosted departure sit in late September and October. The flights via Johannesburg connect the same day."
      ]
    }
  ];

  /* ---------- Lookups ---------- */
  function norm(s) { return String(s).toLowerCase().replace(/\(.*?\)/g, "").replace(/[^a-z0-9]/g, ""); }
  S.courseByName = function (name) {
    var n = norm(name);
    return S.COURSES.filter(function (c) { var cn = norm(c.name); return n.indexOf(cn) !== -1 || cn.indexOf(n) !== -1; })[0] || null;
  };
  S.stayByName = function (name) {
    var n = norm(name.split(" or ")[0]);
    return S.STAYS.filter(function (s) { var sn = norm(s.name); return n.indexOf(sn) !== -1 || sn.indexOf(n) !== -1; })[0] || null;
  };
  S.destination = function (id) { return S.DESTINATIONS.filter(function (d) { return d.id === id; })[0] || null; };
  S.departure = function (id) { return S.DEPARTURES.filter(function (d) { return d.id === id; })[0] || null; };
  S.article = function (slug) { return S.JOURNAL.filter(function (a) { return a.slug === slug; })[0] || null; };
  S.formatDate = function (iso) {
    var d = new Date(iso + "T00:00:00");
    return d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
  };
})();
