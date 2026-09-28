/* Safari Golf Tour — package catalogue
 * Prices are indicative, in USD per person sharing, and exclude international flights.
 */
window.SGT_PACKAGES = [
  {
    id: "kenya-classic",
    name: "Kenya Classic",
    tagline: "Nairobi's championship courses and the Maasai Mara",
    country: "Kenya",
    region: "East Africa",
    nights: 7,
    rounds: 3,
    gameDrives: 5,
    priceFrom: 4950,
    tier: "premium",
    bestMonths: "Jul – Oct (Great Migration), Jan – Feb",
    image: "kenya",
    highlights: [
      "Karen Country Club and Muthaiga Golf Club",
      "Great Wildebeest Migration river crossings (in season)",
      "Sundowners over the Mara plains",
      "Optional hot-air balloon safari"
    ],
    courses: [
      { name: "Karen Country Club", par: 72, note: "Tree-lined parkland course on the edge of the Ngong Hills." },
      { name: "Muthaiga Golf Club", par: 72, note: "Kenya's home of golf and host of the Kenya Open." },
      { name: "Vipingo Ridge (optional extension)", par: 72, note: "PGA-accredited coastal course north of Mombasa." }
    ],
    lodges: ["Hemingways Nairobi", "Mara Plains Camp (or similar)"],
    itinerary: [
      { day: 1, title: "Arrive Nairobi", text: "Meet and greet at Jomo Kenyatta International. Transfer to Hemingways Nairobi. Evening welcome briefing with your tour host." },
      { day: 2, title: "Karen Country Club", text: "Morning round at Karen Country Club followed by lunch at the clubhouse. Afternoon visit to the Giraffe Centre." },
      { day: 3, title: "Muthaiga Golf Club", text: "18 holes at Muthaiga, Kenya's most storied club. Farewell dinner in Nairobi at Talisman." },
      { day: 4, title: "Fly to the Maasai Mara", text: "Scheduled light-aircraft flight to the Mara. Afternoon game drive en route to camp." },
      { day: 5, title: "Full day on safari", text: "Dawn and dusk game drives in the Mara conservancies with bush breakfast. Optional balloon flight at sunrise." },
      { day: 6, title: "Full day on safari", text: "Track the big cats with your private guide. Sundowners on the plains, dinner under the stars." },
      { day: 7, title: "Mara to Nairobi", text: "Final morning game drive. Fly back to Nairobi. Farewell round at Windsor Golf Hotel & Country Club for those on late flights." },
      { day: 8, title: "Depart", text: "Transfer to the airport for your onward flight, or continue to the coast for the Vipingo Ridge extension." }
    ]
  },
  {
    id: "south-africa-signature",
    name: "South Africa Signature",
    tagline: "The Garden Route, the Winelands and Sabi Sand",
    country: "South Africa",
    region: "Southern Africa",
    nights: 9,
    rounds: 4,
    gameDrives: 6,
    priceFrom: 6850,
    tier: "luxury",
    bestMonths: "Mar – May, Sep – Nov",
    image: "south-africa",
    highlights: [
      "Fancourt Montagu and The Links",
      "Pearl Valley in the Cape Winelands",
      "Big Five safari in Sabi Sand Game Reserve",
      "Wine tasting in Franschhoek"
    ],
    courses: [
      { name: "Fancourt — The Links", par: 73, note: "Gary Player's Presidents Cup venue, ranked South Africa's number one." },
      { name: "Fancourt — Montagu", par: 72, note: "Parkland masterpiece in the Outeniqua foothills." },
      { name: "Pearl Valley", par: 72, note: "Jack Nicklaus signature course among the Paarl vineyards." },
      { name: "Leopard Creek", par: 72, note: "Bordering Kruger, where hippos and crocodiles line the 13th." }
    ],
    lodges: ["Fancourt Hotel", "La Residence Franschhoek", "Londolozi or Singita Sabi Sand (or similar)"],
    itinerary: [
      { day: 1, title: "Arrive Cape Town", text: "Private transfer to Franschhoek. Settle into La Residence with a sunset glass of Cap Classique." },
      { day: 2, title: "Pearl Valley", text: "Round at Pearl Valley. Afternoon wine tram through the Franschhoek valley." },
      { day: 3, title: "Cape Town free day", text: "Table Mountain cableway, Cape Point or a rest day. Dinner on the V&A Waterfront." },
      { day: 4, title: "Fly to George", text: "Short flight to George and transfer to Fancourt. Afternoon practice on the Bramble Hill course." },
      { day: 5, title: "Fancourt Montagu", text: "Round at Montagu. Spa afternoon at Fancourt." },
      { day: 6, title: "Fancourt The Links", text: "Your day on South Africa's finest course. Caddies included." },
      { day: 7, title: "Fly to Sabi Sand", text: "Flights George – Johannesburg – Skukuza. Afternoon game drive into the reserve." },
      { day: 8, title: "Sabi Sand safari", text: "Dawn and dusk drives with leopard tracking, the reserve's speciality." },
      { day: 9, title: "Leopard Creek", text: "Morning round at Leopard Creek, then a final evening drive and boma dinner." },
      { day: 10, title: "Depart", text: "Morning drive, brunch and flight from Skukuza to Johannesburg for international connections." }
    ]
  },
  {
    id: "tanzania-grand",
    name: "Tanzania Grand",
    tagline: "Kilimanjaro golf, the Serengeti and Ngorongoro Crater",
    country: "Tanzania",
    region: "East Africa",
    nights: 10,
    rounds: 2,
    gameDrives: 8,
    priceFrom: 7400,
    tier: "luxury",
    bestMonths: "Jun – Oct, Dec – Mar (calving season)",
    image: "tanzania",
    highlights: [
      "Kilimanjaro Golf & Wildlife Estate at the foot of the mountain",
      "Central Serengeti and the northern Mara river crossings",
      "Descent into the Ngorongoro Crater",
      "Cultural visit with a Maasai community"
    ],
    courses: [
      { name: "Kilimanjaro Golf & Wildlife Estate", par: 72, note: "David Jones design where zebra and giraffe graze the fairways." },
      { name: "Sea Cliff Resort, Zanzibar (optional extension)", par: 36, note: "Nine ocean-side holes for the beach extension." }
    ],
    lodges: ["Kili Golf Villas", "Namiri Plains", "The Highlands Ngorongoro (or similar)"],
    itinerary: [
      { day: 1, title: "Arrive Kilimanjaro", text: "Transfer from Kilimanjaro International to your villa on the golf estate." },
      { day: 2, title: "Kilimanjaro Golf", text: "Round one with Mount Meru and Kilimanjaro as your backdrop." },
      { day: 3, title: "Kilimanjaro Golf", text: "Round two, then a farewell dinner at the clubhouse." },
      { day: 4, title: "Fly to the Serengeti", text: "Light aircraft to the central Serengeti. Afternoon game drive." },
      { day: 5, title: "Serengeti", text: "Full day exploring the Seronera valley, famous for lion and leopard." },
      { day: 6, title: "Serengeti", text: "Follow the migration or cheetah on the eastern plains. Bush dinner." },
      { day: 7, title: "Northern Serengeti", text: "In season, position for Mara river crossings. Otherwise, the Moru Kopjes and rhino." },
      { day: 8, title: "Ngorongoro", text: "Drive across the crater highlands to your lodge on the rim." },
      { day: 9, title: "Crater floor", text: "Dawn descent into the crater, picnic by the hippo pool, black rhino sightings." },
      { day: 10, title: "Maasai village and Arusha", text: "Cultural morning, then drive to Arusha for a final night." },
      { day: 11, title: "Depart", text: "Transfer to Kilimanjaro International, or fly on to Zanzibar for the beach and golf extension." }
    ]
  },
  {
    id: "victoria-falls-chobe",
    name: "Victoria Falls & Chobe",
    tagline: "The smoke that thunders, elephants and the Zambezi",
    country: "Zimbabwe & Botswana",
    region: "Southern Africa",
    nights: 6,
    rounds: 2,
    gameDrives: 4,
    priceFrom: 3950,
    tier: "premium",
    bestMonths: "May – Oct",
    image: "victoria-falls",
    highlights: [
      "Elephant Hills Golf Course beside the Zambezi",
      "Guided tour of Victoria Falls",
      "Chobe National Park by boat and 4x4",
      "Sunset cruise on the Zambezi"
    ],
    courses: [
      { name: "Elephant Hills Golf Course", par: 72, note: "Gary Player design with warthogs on the fairways and the Falls' spray on the horizon." },
      { name: "Borrowdale Brooke (Harare extension)", par: 72, note: "Optional add-on for those routing via Harare." }
    ],
    lodges: ["Victoria Falls Hotel", "Chobe Game Lodge (or similar)"],
    itinerary: [
      { day: 1, title: "Arrive Victoria Falls", text: "Transfer to the Victoria Falls Hotel. Sunset cruise on the Zambezi." },
      { day: 2, title: "The Falls and Elephant Hills", text: "Morning guided walk of the Falls. Afternoon round at Elephant Hills." },
      { day: 3, title: "Elephant Hills", text: "Second round at Elephant Hills. Evening at the Boma dinner and drum show." },
      { day: 4, title: "Cross to Chobe", text: "Road transfer across the Kazungula border to Chobe Game Lodge. Afternoon river cruise." },
      { day: 5, title: "Chobe National Park", text: "Dawn game drive along the riverfront, home to Africa's largest elephant population. Afternoon by boat." },
      { day: 6, title: "Chobe National Park", text: "Full day in the park with a picnic lunch. Optional helicopter flight over the Falls on return." },
      { day: 7, title: "Depart", text: "Transfer to Kasane or Victoria Falls airport." }
    ]
  },
  {
    id: "mauritius-kruger",
    name: "Mauritius & Kruger",
    tagline: "Indian Ocean links and a private Kruger concession",
    country: "Mauritius & South Africa",
    region: "Indian Ocean & Southern Africa",
    nights: 11,
    rounds: 5,
    gameDrives: 6,
    priceFrom: 8900,
    tier: "luxury",
    bestMonths: "May – Oct",
    image: "mauritius",
    highlights: [
      "Heritage Golf Club's Le Château and La Réserve",
      "Ile aux Cerfs, Bernhard Langer's island course",
      "Private concession safari in greater Kruger",
      "Skukuza Golf Club, where the rough really is wild"
    ],
    courses: [
      { name: "Heritage Le Château", par: 72, note: "Host of the AfrAsia Bank Mauritius Open on the DP World Tour." },
      { name: "Heritage La Réserve", par: 72, note: "Peter Matkovich's newest layout, opened 2023." },
      { name: "Ile aux Cerfs", par: 72, note: "Reached by boat, with sea views from every hole." },
      { name: "Leopard Creek", par: 72, note: "Kruger's neighbour and one of Africa's finest." },
      { name: "Skukuza Golf Club", par: 72, note: "Unfenced nine holes inside Kruger National Park, played twice." }
    ],
    lodges: ["Heritage Le Telfair", "Constance Prince Maurice", "Singita Lebombo or Royal Malewane (or similar)"],
    itinerary: [
      { day: 1, title: "Arrive Mauritius", text: "Transfer to Heritage Le Telfair on the south coast." },
      { day: 2, title: "Heritage Le Château", text: "Round at Le Château. Afternoon at leisure on the beach." },
      { day: 3, title: "Heritage La Réserve", text: "Play the island's newest course. Sunset catamaran cruise." },
      { day: 4, title: "Transfer east", text: "Move to Constance Prince Maurice. Dolphin-watching excursion on the way." },
      { day: 5, title: "Ile aux Cerfs", text: "Boat transfer and round at Ile aux Cerfs. Lunch on the island." },
      { day: 6, title: "Leisure day", text: "Spa, snorkelling or a second round on Prince Maurice's Legend course." },
      { day: 7, title: "Fly to Kruger", text: "Flights Mauritius – Johannesburg – Skukuza. Afternoon drive into the concession." },
      { day: 8, title: "Private concession safari", text: "Dawn and dusk game drives. Off-road tracking and night drives permitted." },
      { day: 9, title: "Skukuza Golf Club", text: "Morning round on Kruger's unfenced course, then an afternoon drive." },
      { day: 10, title: "Leopard Creek", text: "Round at Leopard Creek and a final sunset drive." },
      { day: 11, title: "Last safari morning", text: "Final drive, brunch and a bush walk with your ranger." },
      { day: 12, title: "Depart", text: "Flight from Skukuza to Johannesburg for international connections." }
    ]
  },
  {
    id: "uganda-short-break",
    name: "Uganda Short Break",
    tagline: "Entebbe's lakeside course and gorillas in Bwindi",
    country: "Uganda",
    region: "East Africa",
    nights: 5,
    rounds: 1,
    gameDrives: 2,
    priceFrom: 3600,
    tier: "premium",
    bestMonths: "Jun – Sep, Dec – Feb",
    image: "uganda",
    highlights: [
      "Entebbe Golf Club on the shores of Lake Victoria",
      "Mountain gorilla trekking in Bwindi Impenetrable Forest",
      "Lake Bunyonyi canoe safari",
      "Gorilla permit included"
    ],
    courses: [
      { name: "Entebbe Golf Club", par: 71, note: "East Africa's oldest course, founded 1901, beside Lake Victoria." },
      { name: "Uganda Golf Club, Kampala (optional)", par: 72, note: "Host of the Uganda Open." }
    ],
    lodges: ["Hotel No. 5 Entebbe", "Bwindi Lodge (or similar)"],
    itinerary: [
      { day: 1, title: "Arrive Entebbe", text: "Transfer to Hotel No. 5, a short walk from the golf club." },
      { day: 2, title: "Entebbe Golf Club", text: "Round at Entebbe, then a boat trip to Ngamba Island chimpanzee sanctuary." },
      { day: 3, title: "Fly to Bwindi", text: "Scheduled flight to Kihihi and transfer to Bwindi Lodge on the forest edge." },
      { day: 4, title: "Gorilla trekking", text: "Trek with rangers to spend an hour with a habituated gorilla family." },
      { day: 5, title: "Lake Bunyonyi", text: "Drive to Lake Bunyonyi for a canoe safari and community visit. Return to Bwindi." },
      { day: 6, title: "Depart", text: "Fly back to Entebbe for your onward flight." }
    ]
  }
];
