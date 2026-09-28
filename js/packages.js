/* Safari Golf Tour — site data
 * Prices are indicative, in USD per person sharing, ground only (international flights excluded).
 * Photography: Unsplash (free licence). Each `photo` is an Unsplash photo id; see SGT.img().
 */
(function () {
  "use strict";

  var PHOTO = {
    hero: "1516426122078-c23e76319801",        // safari vehicle at sunset among acacias
    kilimanjaro: "1489392191049-fc10c97e64b6", // Kilimanjaro over the plains
    balloon: "1519659528534-7fd733a832a0",     // balloon over zebra on the Mara
    capeTown: "1580060839134-75a5edca2e99",    // Table Mountain and the Cape peninsula
    elephantsSunset: "1564760055775-d63b17a55c44", // two elephants at dusk
    elephantHeadOn: "1557050543-4d5f4e07ef46", // elephant on the savanna
    elephantForest: "1549366021-9f761d450615", // elephant in forest
    highlands: "1470071459604-3b5ec3a7fe05",   // green highland valley
    resortPool: "1520250497591-112f2f40a3f4",  // island resort pool under mountains
    beach: "1535262412227-85541e910204",       // white sand beach
    infinityPool: "1584132967334-10e028bd69f7",// lodge infinity pool at dusk
    golfSwing: "1611374243147-44a702c2d44c",   // golfer mid swing
    golfSwing2: "1535131749006-b7f58c99034b",  // golfer on parkland course
    aerialGreen: "1500932334442-8761ee4810a7", // aerial view of a green
    links: "1592919505780-303950717480",       // links course under moody sky
    golfBall: "1587174486073-ae5e5cff23aa",    // ball on the lip
    clubBall: "1593111774240-d529f12cf4bb",    // club and ball on grass
    leopard: "1456926631375-92c8ce872def",     // leopard on a branch
    lions: "1519066629447-267fffa62d4b",       // two lions on a rock
    lionWalk: "1546182990-dffeafbe841d",       // lion walking
    lionPortrait: "1614027164847-1b28cfe1df60",// lion portrait
    lionPair: "1575550959106-5a7defe28b56",    // lion and lioness
    giraffeSunset: "1523805009345-7448845a9e53", // giraffe at sunset
    giraffeClose: "1547721064-da6cfb341d50",   // giraffe close up
    zebra: "1526095179574-86e545346ae6",       // zebra in long grass
    zebraMono: "1578326457399-3b34dbbf23b8",   // zebra, black and white
    acaciaSunset: "1516026672322-bc52d61a55d5",// lone acacia at sunset
    acaciaDusk: "1547471080-7cc2caa01a7e",     // acacia on the plains at dusk
    safariDrive: "1516426122078-c23e76319801"
  };

  function img(key, w, h) {
    var id = PHOTO[key] || key;
    var q = "?auto=format&fit=crop&q=78&w=" + (w || 1200);
    if (h) q += "&h=" + h;
    return "https://images.unsplash.com/photo-" + id + q;
  }

  var JOURNEYS = [
    {
      id: "grand-crossing",
      name: "The Grand Crossing",
      strap: "If you only do Africa once, this is the journey.",
      tagline: "Cape Town to the Maasai Mara in one seamless crossing",
      countries: ["South Africa", "Zimbabwe", "Kenya"],
      region: "East & Southern Africa",
      nights: 14,
      rounds: 5,
      gameDrives: 9,
      priceFrom: 18500,
      tier: "flagship",
      featured: true,
      bestMonths: "Jul – Oct",
      photo: "capeTown",
      route: ["Cape Town", "The Winelands", "Sabi Sand", "Victoria Falls", "Nairobi", "Maasai Mara"],
      intro: "Four of the continent's defining places, the golf woven through, and not one wasted day. The Links at Fancourt, a leopard in the Sabi Sand, the spray of the Falls on the back nine, and the Mara at migration time.",
      highlights: [
        "Fancourt The Links and Pearl Valley in the Cape",
        "Three nights in the Sabi Sand, the leopard capital of Africa",
        "Elephant Hills with the Falls' spray on the horizon",
        "Karen Country Club, then four nights on the Mara"
      ],
      courses: [
        { name: "Pearl Valley", par: 72, note: "Jack Nicklaus signature course among the Paarl vineyards." },
        { name: "Fancourt — The Links", par: 73, note: "Gary Player's Presidents Cup venue and South Africa's number one." },
        { name: "Leopard Creek", par: 72, note: "On the Crocodile River, bordering Kruger." },
        { name: "Elephant Hills", par: 72, note: "Warthogs on the fairways, Victoria Falls beyond." },
        { name: "Karen Country Club", par: 72, note: "Nairobi's parkland classic beneath the Ngong Hills." }
      ],
      stays: ["La Residence, Franschhoek", "Fancourt Hotel", "Londolozi (or similar)", "Victoria Falls Hotel", "Hemingways Nairobi", "Mara Plains Camp (or similar)"],
      itinerary: [
        { day: 1, title: "Arrive Cape Town", text: "Met on arrival and driven to Franschhoek. A first glass of Cap Classique on the terrace." },
        { day: 2, title: "Pearl Valley", text: "Opening round at Pearl Valley. Afternoon wine tram through the valley." },
        { day: 3, title: "Cape Town", text: "Table Mountain by cableway, Cape Point, dinner on the Waterfront." },
        { day: 4, title: "Fly to George", text: "Transfer to Fancourt. Loosen up on the Bramble Hill course." },
        { day: 5, title: "Fancourt The Links", text: "Your day on the country's finest course, caddies included." },
        { day: 6, title: "Fly to Sabi Sand", text: "George to Skukuza via Johannesburg. First game drive at dusk." },
        { day: 7, title: "Sabi Sand", text: "Dawn and dusk drives with the reserve's famous leopard trackers." },
        { day: 8, title: "Leopard Creek", text: "A round with hippos below the 13th, then a night drive." },
        { day: 9, title: "Fly to Victoria Falls", text: "Sunset cruise on the Zambezi from the Victoria Falls Hotel." },
        { day: 10, title: "Elephant Hills", text: "Morning walk to the Falls, afternoon round at Elephant Hills." },
        { day: 11, title: "Fly to Nairobi", text: "Via Johannesburg to Nairobi. Dinner at Talisman in Karen." },
        { day: 12, title: "Karen Country Club", text: "Round at Karen, then a light aircraft to the Mara." },
        { day: 13, title: "Maasai Mara", text: "Full day on the plains. In season, the river crossings." },
        { day: 14, title: "Maasai Mara", text: "Balloon at dawn, bush breakfast, a final sundowner." },
        { day: 15, title: "Depart", text: "Fly to Nairobi for your onward flight." }
      ]
    },
    {
      id: "kenya-classic",
      name: "Kenya Classic",
      strap: "The original golf safari.",
      tagline: "Nairobi's championship courses and the Maasai Mara",
      countries: ["Kenya"],
      region: "East Africa",
      nights: 7,
      rounds: 3,
      gameDrives: 5,
      priceFrom: 4950,
      tier: "signature",
      featured: true,
      bestMonths: "Jul – Oct (Great Migration), Jan – Feb",
      photo: "balloon",
      route: ["Nairobi", "Maasai Mara"],
      intro: "Three rounds on Nairobi's storied parkland courses, then four nights in a private Mara conservancy where the cats are the point and the crowds are somewhere else.",
      highlights: [
        "Karen Country Club and Muthaiga Golf Club",
        "Great Migration river crossings, in season",
        "Sundowners on the Mara plains",
        "Optional balloon safari at dawn"
      ],
      courses: [
        { name: "Karen Country Club", par: 72, note: "Tree-lined parkland course on the edge of the Ngong Hills." },
        { name: "Muthaiga Golf Club", par: 72, note: "Kenya's home of golf and host of the Kenya Open." },
        { name: "Vipingo Ridge (optional extension)", par: 72, note: "PGA-accredited coastal course north of Mombasa." }
      ],
      stays: ["Hemingways Nairobi", "Mara Plains Camp (or similar)"],
      itinerary: [
        { day: 1, title: "Arrive Nairobi", text: "Meet and greet at Jomo Kenyatta International. Transfer to Hemingways Nairobi and a welcome briefing with your host." },
        { day: 2, title: "Karen Country Club", text: "Morning round at Karen, lunch at the clubhouse, afternoon at the Giraffe Centre." },
        { day: 3, title: "Muthaiga Golf Club", text: "18 holes at Kenya's most storied club. Dinner at Talisman." },
        { day: 4, title: "Fly to the Mara", text: "Light aircraft to the Mara. Afternoon game drive en route to camp." },
        { day: 5, title: "Full day on safari", text: "Dawn and dusk drives in the conservancy with a bush breakfast. Optional balloon flight." },
        { day: 6, title: "Full day on safari", text: "Track the big cats with your private guide. Sundowners, dinner under the stars." },
        { day: 7, title: "Mara to Nairobi", text: "Final morning drive, fly to Nairobi. A farewell round at Windsor for late departures." },
        { day: 8, title: "Depart", text: "Transfer to the airport, or continue to the coast for Vipingo Ridge." }
      ]
    },
    {
      id: "south-africa-signature",
      name: "South Africa Signature",
      strap: "The Garden Route, the Winelands and the Sabi Sand.",
      tagline: "Four of the country's finest courses and a Big Five reserve",
      countries: ["South Africa"],
      region: "Southern Africa",
      nights: 9,
      rounds: 4,
      gameDrives: 6,
      priceFrom: 6850,
      tier: "signature",
      featured: true,
      bestMonths: "Mar – May, Sep – Nov",
      photo: "aerialGreen",
      route: ["Franschhoek", "Cape Town", "Fancourt", "Sabi Sand"],
      intro: "The Links and Montagu at Fancourt, Pearl Valley among the vines, Leopard Creek on the Kruger boundary, and three nights in the Sabi Sand in between.",
      highlights: [
        "Fancourt Montagu and The Links",
        "Pearl Valley in the Cape Winelands",
        "Leopard tracking in the Sabi Sand",
        "Wine tasting in Franschhoek"
      ],
      courses: [
        { name: "Fancourt — The Links", par: 73, note: "Gary Player's Presidents Cup venue, ranked South Africa's number one." },
        { name: "Fancourt — Montagu", par: 72, note: "Parkland masterpiece in the Outeniqua foothills." },
        { name: "Pearl Valley", par: 72, note: "Jack Nicklaus signature course among the Paarl vineyards." },
        { name: "Leopard Creek", par: 72, note: "Bordering Kruger, where hippos and crocodiles line the 13th." }
      ],
      stays: ["Fancourt Hotel", "La Residence, Franschhoek", "Londolozi or Singita Sabi Sand (or similar)"],
      itinerary: [
        { day: 1, title: "Arrive Cape Town", text: "Private transfer to Franschhoek and La Residence." },
        { day: 2, title: "Pearl Valley", text: "Round at Pearl Valley. Afternoon wine tram." },
        { day: 3, title: "Cape Town", text: "Table Mountain, Cape Point or a rest day. Dinner on the Waterfront." },
        { day: 4, title: "Fly to George", text: "Transfer to Fancourt. Afternoon practice on Bramble Hill." },
        { day: 5, title: "Fancourt Montagu", text: "Round at Montagu. Spa afternoon." },
        { day: 6, title: "Fancourt The Links", text: "Your day on South Africa's finest course. Caddies included." },
        { day: 7, title: "Fly to Sabi Sand", text: "George to Skukuza via Johannesburg. Afternoon game drive." },
        { day: 8, title: "Sabi Sand", text: "Dawn and dusk drives with the reserve's leopard trackers." },
        { day: 9, title: "Leopard Creek", text: "Morning round, final evening drive and boma dinner." },
        { day: 10, title: "Depart", text: "Morning drive, brunch, flight from Skukuza to Johannesburg." }
      ]
    },
    {
      id: "tanzania-grand",
      name: "Tanzania Grand",
      strap: "Golf beneath Kilimanjaro, then the Serengeti.",
      tagline: "Kilimanjaro golf, the Serengeti and the Ngorongoro Crater",
      countries: ["Tanzania"],
      region: "East Africa",
      nights: 10,
      rounds: 2,
      gameDrives: 8,
      priceFrom: 7400,
      tier: "signature",
      featured: true,
      bestMonths: "Jun – Oct, Dec – Mar (calving)",
      photo: "kilimanjaro",
      route: ["Kilimanjaro", "Central Serengeti", "Northern Serengeti", "Ngorongoro"],
      intro: "Two rounds with the mountain as your backdrop, then eight game drives across the greatest wildlife stage on earth, finishing on the crater floor.",
      highlights: [
        "Kilimanjaro Golf & Wildlife Estate",
        "Central Serengeti and the northern river crossings",
        "Descent into the Ngorongoro Crater",
        "A morning with a Maasai community"
      ],
      courses: [
        { name: "Kilimanjaro Golf & Wildlife Estate", par: 72, note: "David Jones design where zebra and giraffe graze the fairways." },
        { name: "Sea Cliff Resort, Zanzibar (optional extension)", par: 36, note: "Nine ocean-side holes for the beach extension." }
      ],
      stays: ["Kili Golf Villas", "Namiri Plains", "The Highlands Ngorongoro (or similar)"],
      itinerary: [
        { day: 1, title: "Arrive Kilimanjaro", text: "Transfer to your villa on the golf estate." },
        { day: 2, title: "Kilimanjaro Golf", text: "Round one with Meru and Kilimanjaro behind the green." },
        { day: 3, title: "Kilimanjaro Golf", text: "Round two, farewell dinner at the clubhouse." },
        { day: 4, title: "Fly to the Serengeti", text: "Light aircraft to the central Serengeti. Afternoon drive." },
        { day: 5, title: "Serengeti", text: "Full day in the Seronera valley, lion and leopard country." },
        { day: 6, title: "Serengeti", text: "Follow the migration or cheetah on the eastern plains. Bush dinner." },
        { day: 7, title: "Northern Serengeti", text: "In season, the Mara river crossings. Otherwise the Moru Kopjes and rhino." },
        { day: 8, title: "Ngorongoro", text: "Drive across the crater highlands to a lodge on the rim." },
        { day: 9, title: "Crater floor", text: "Dawn descent, picnic by the hippo pool, black rhino." },
        { day: 10, title: "Maasai village and Arusha", text: "Cultural morning, final night in Arusha." },
        { day: 11, title: "Depart", text: "Transfer to Kilimanjaro International, or fly on to Zanzibar." }
      ]
    },
    {
      id: "victoria-falls-chobe",
      name: "Falls & Fairways",
      strap: "The smoke that thunders, and Africa's elephant capital.",
      tagline: "Victoria Falls, Elephant Hills and Chobe",
      countries: ["Zimbabwe", "Botswana"],
      region: "Southern Africa",
      nights: 6,
      rounds: 2,
      gameDrives: 4,
      priceFrom: 3950,
      tier: "signature",
      featured: false,
      bestMonths: "May – Oct",
      photo: "elephantsSunset",
      route: ["Victoria Falls", "Chobe"],
      intro: "Two rounds at Elephant Hills with warthogs on the fairways, a guided walk along the Falls, and three nights on the Chobe riverfront by boat and by 4x4.",
      highlights: [
        "Elephant Hills Golf Course beside the Zambezi",
        "Guided tour of Victoria Falls",
        "Chobe National Park by boat and 4x4",
        "Sunset cruise on the Zambezi"
      ],
      courses: [
        { name: "Elephant Hills Golf Course", par: 72, note: "Gary Player design with the Falls' spray on the horizon." },
        { name: "Borrowdale Brooke, Harare (optional)", par: 72, note: "For those routing via Harare." }
      ],
      stays: ["Victoria Falls Hotel", "Chobe Game Lodge (or similar)"],
      itinerary: [
        { day: 1, title: "Arrive Victoria Falls", text: "Transfer to the Victoria Falls Hotel. Sunset cruise on the Zambezi." },
        { day: 2, title: "The Falls and Elephant Hills", text: "Morning guided walk of the Falls. Afternoon round." },
        { day: 3, title: "Elephant Hills", text: "Second round. Evening at the Boma dinner and drum show." },
        { day: 4, title: "Cross to Chobe", text: "Road transfer across the Kazungula border. Afternoon river cruise." },
        { day: 5, title: "Chobe National Park", text: "Dawn drive along the riverfront, afternoon by boat." },
        { day: 6, title: "Chobe National Park", text: "Full day in the park. Optional helicopter over the Falls on return." },
        { day: 7, title: "Depart", text: "Transfer to Kasane or Victoria Falls airport." }
      ]
    },
    {
      id: "mauritius-kruger",
      name: "Mauritius & Kruger",
      strap: "Indian Ocean fairways and a private Kruger concession.",
      tagline: "Five rounds across two countries, the bush and the beach",
      countries: ["Mauritius", "South Africa"],
      region: "Indian Ocean & Southern Africa",
      nights: 11,
      rounds: 5,
      gameDrives: 6,
      priceFrom: 8900,
      tier: "signature",
      featured: false,
      bestMonths: "May – Oct",
      photo: "resortPool",
      route: ["Bel Ombre", "East coast Mauritius", "Greater Kruger"],
      intro: "Heritage's two courses and Ile aux Cerfs by boat, then a private concession in greater Kruger with rounds at Skukuza and Leopard Creek between the drives.",
      highlights: [
        "Heritage Le Château and La Réserve",
        "Ile aux Cerfs, reached by boat",
        "Private concession safari in greater Kruger",
        "Skukuza Golf Club, unfenced inside the park"
      ],
      courses: [
        { name: "Heritage Le Château", par: 72, note: "Host of the AfrAsia Bank Mauritius Open." },
        { name: "Heritage La Réserve", par: 72, note: "Peter Matkovich's newest layout, opened 2023." },
        { name: "Ile aux Cerfs", par: 72, note: "Reached by boat, with sea views from every hole." },
        { name: "Leopard Creek", par: 72, note: "Kruger's neighbour and one of Africa's finest." },
        { name: "Skukuza Golf Club", par: 72, note: "Unfenced nine holes inside Kruger National Park." }
      ],
      stays: ["Heritage Le Telfair", "Constance Prince Maurice", "Singita Lebombo or Royal Malewane (or similar)"],
      itinerary: [
        { day: 1, title: "Arrive Mauritius", text: "Transfer to Heritage Le Telfair on the south coast." },
        { day: 2, title: "Heritage Le Château", text: "Round at Le Château. Afternoon on the beach." },
        { day: 3, title: "Heritage La Réserve", text: "The island's newest course. Sunset catamaran." },
        { day: 4, title: "Transfer east", text: "Move to Constance Prince Maurice, dolphins on the way." },
        { day: 5, title: "Ile aux Cerfs", text: "Boat transfer and round. Lunch on the island." },
        { day: 6, title: "Leisure day", text: "Spa, snorkelling, or the Legend course at Prince Maurice." },
        { day: 7, title: "Fly to Kruger", text: "Via Johannesburg to Skukuza. Afternoon drive into the concession." },
        { day: 8, title: "Private concession", text: "Dawn and dusk drives, off-road tracking, night drives." },
        { day: 9, title: "Skukuza Golf Club", text: "Morning round on Kruger's unfenced course, afternoon drive." },
        { day: 10, title: "Leopard Creek", text: "Round at Leopard Creek and a final sunset drive." },
        { day: 11, title: "Last safari morning", text: "Final drive, brunch, a bush walk with your ranger." },
        { day: 12, title: "Depart", text: "Flight from Skukuza to Johannesburg." }
      ]
    },
    {
      id: "uganda-short-break",
      name: "Gorillas & the Lakeshore",
      strap: "The most humbling hour in travel, bookended by golf.",
      tagline: "Entebbe's lakeside course and the gorillas of Bwindi",
      countries: ["Uganda"],
      region: "East Africa",
      nights: 5,
      rounds: 1,
      gameDrives: 2,
      priceFrom: 3600,
      tier: "signature",
      featured: false,
      bestMonths: "Jun – Sep, Dec – Feb",
      photo: "highlands",
      route: ["Entebbe", "Bwindi", "Lake Bunyonyi"],
      intro: "East Africa's oldest course on the shore of Lake Victoria, then an hour with a mountain gorilla family in the Bwindi Impenetrable Forest. Short, intense, unforgettable.",
      highlights: [
        "Entebbe Golf Club, founded 1901",
        "Gorilla trekking in Bwindi, permit included",
        "Canoe safari on Lake Bunyonyi",
        "Ngamba Island chimpanzee sanctuary"
      ],
      courses: [
        { name: "Entebbe Golf Club", par: 71, note: "East Africa's oldest course, beside Lake Victoria." },
        { name: "Uganda Golf Club, Kampala (optional)", par: 72, note: "Host of the Uganda Open." }
      ],
      stays: ["Hotel No. 5 Entebbe", "Bwindi Lodge (or similar)"],
      itinerary: [
        { day: 1, title: "Arrive Entebbe", text: "Transfer to Hotel No. 5, a short walk from the golf club." },
        { day: 2, title: "Entebbe Golf Club", text: "Round at Entebbe, then a boat to Ngamba Island." },
        { day: 3, title: "Fly to Bwindi", text: "Scheduled flight to Kihihi and transfer to the forest edge." },
        { day: 4, title: "Gorilla trekking", text: "Trek with rangers to spend an hour with a habituated family." },
        { day: 5, title: "Lake Bunyonyi", text: "Canoe safari and community visit. Return to Bwindi." },
        { day: 6, title: "Depart", text: "Fly back to Entebbe for your onward flight." }
      ]
    }
  ];

  var DESTINATIONS = [
    {
      id: "kenya",
      name: "Kenya",
      strap: "The original safari country, with golf that goes back a century.",
      photo: "balloon",
      text: "Nairobi has three championship courses inside forty minutes of each other, and the Mara conservancies are an hour's flight away. It is the easiest place in Africa to alternate a round and a game drive without wasting a day.",
      courses: ["Karen Country Club", "Muthaiga Golf Club", "Windsor Golf Hotel", "Vipingo Ridge"],
      parks: ["Maasai Mara", "Amboseli", "Laikipia", "Lewa"],
      journeys: ["kenya-classic", "grand-crossing"]
    },
    {
      id: "tanzania",
      name: "Tanzania",
      strap: "The Serengeti, the Crater, and one course beneath the mountain.",
      photo: "kilimanjaro",
      text: "Tanzania is safari at its most vast. One superb course at the foot of Kilimanjaro opens the trip, and the rest is wildlife on a scale nowhere else can match, finished with a descent into the Ngorongoro Crater.",
      courses: ["Kilimanjaro Golf & Wildlife Estate", "Sea Cliff Resort, Zanzibar"],
      parks: ["Serengeti", "Ngorongoro Crater", "Tarangire", "Lake Manyara"],
      journeys: ["tanzania-grand"]
    },
    {
      id: "south-africa",
      name: "South Africa",
      strap: "The deepest golf on the continent, and the leopards of the Sabi Sand.",
      photo: "capeTown",
      text: "Fancourt, Pearl Valley and Leopard Creek would justify the flight on their own. Add the Winelands, the Garden Route and a private reserve on the Kruger boundary and you have the definitive first golf safari.",
      courses: ["Fancourt The Links", "Fancourt Montagu", "Pearl Valley", "Leopard Creek", "Skukuza Golf Club", "Arabella"],
      parks: ["Sabi Sand", "Kruger National Park", "Timbavati", "Madikwe"],
      journeys: ["south-africa-signature", "grand-crossing", "mauritius-kruger"]
    },
    {
      id: "victoria-falls",
      name: "Victoria Falls & Chobe",
      strap: "Elephants by the thousand, and a round beside the Zambezi.",
      photo: "elephantsSunset",
      text: "Elephant Hills is the only course in the world where you can see the spray of a natural wonder from the tee. Across the border, Chobe holds Africa's largest elephant population, best seen from the river at sunset.",
      courses: ["Elephant Hills", "Borrowdale Brooke"],
      parks: ["Victoria Falls", "Chobe", "Hwange", "Zambezi National Park"],
      journeys: ["victoria-falls-chobe", "grand-crossing"]
    },
    {
      id: "mauritius",
      name: "Mauritius",
      strap: "Tour-standard golf on an island, a short flight from the bush.",
      photo: "beach",
      text: "Mauritius hosts the DP World Tour and has more championship golf per square mile than anywhere in Africa. It pairs naturally with Kruger for a bush-and-beach fortnight.",
      courses: ["Heritage Le Château", "Heritage La Réserve", "Ile aux Cerfs", "Anahita", "Paradis"],
      parks: ["Black River Gorges", "Ile aux Aigrettes"],
      journeys: ["mauritius-kruger"]
    },
    {
      id: "uganda",
      name: "Uganda",
      strap: "Gorillas in the forest, golf on the lakeshore.",
      photo: "highlands",
      text: "A short break with one round at East Africa's oldest club and the single most affecting hour in travel. Uganda works on its own, or as a three-night addition to Kenya.",
      courses: ["Entebbe Golf Club", "Uganda Golf Club"],
      parks: ["Bwindi Impenetrable Forest", "Queen Elizabeth", "Lake Bunyonyi", "Murchison Falls"],
      journeys: ["uganda-short-break"]
    }
  ];

  var GUESTS = [
    {
      quote: "We played The Links on the Tuesday and watched a leopard drag an impala up a tree on the Thursday. Nothing else I have ever booked comes close.",
      name: "Margaret H.",
      meta: "14 handicap · South Africa Signature"
    },
    {
      quote: "The logistics were flawless. Our clubs were waiting at every course, and the Mara camp had our tee times pinned on the notice board.",
      name: "David & Priya",
      meta: "Kenya Classic"
    },
    {
      quote: "Our society of eight had a private guide and a private vehicle for the whole trip. Elephant Hills with warthogs on the fairway is one for the stories.",
      name: "Rob T.",
      meta: "Society captain · Falls & Fairways"
    },
    {
      quote: "They built the itinerary around exactly what my wife and I wanted. Playing with Kilimanjaro behind the green was surreal, and the Crater exceeded everything.",
      name: "Lukas B.",
      meta: "Tanzania Grand"
    }
  ];

  window.SGT = {
    PHOTO: PHOTO,
    img: img,
    JOURNEYS: JOURNEYS,
    DESTINATIONS: DESTINATIONS,
    GUESTS: GUESTS,
    CONFIG: {
      brand: "Safari Golf Tour",
      email: "hello@safarigolftour.com",
      phone: "",          // e.g. "+254 700 000 000"
      whatsapp: "",       // digits only, e.g. "254700000000" — enables the floating chat button
      offices: ["Nairobi", "Cape Town"],
      social: { instagram: "", facebook: "", linkedin: "" }
    }
  };
})();
