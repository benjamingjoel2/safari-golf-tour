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
    /* Golf photography (Unsplash ids, verified) */
    g_hero: "1592937238247-cd0090e02f65",
    g_bunkerSunset: "1500088683659-35b490a404be",
    g_silhouette: "1505794718076-13e166c01a33",
    g_aerialBig: "1516705416642-fa4f130a0bb3",
    g_flagMist: "1517074009205-d9ca5d8b4a63",
    g_drive: "1591491659771-3f9777200049",
    g_caddie: "1593282153762-a41e3cceb06c",
    g_bunkerShot: "1597369199842-f08ca157e015",
    g_aerial2: "1605144156683-5ebde77feed5",
    g_aerialGreen2: "1605144884288-49eb7f9bb447",
    g_aerialRolling: "1605147861225-7bcd55f8e513",
    g_greenTrees: "1606443192517-919653213206",
    g_greenSunrise: "1609319795593-3339d3583c0c",
    g_alpine: "1623567341691-1f47b5cf949e",
    g_flag18: "1627308162175-04da997d5e47",
    g_aerialBunkers: "1629596545782-775f0792dbc8",
    g_toast: "1629673120178-53a664eec9e8",
    g_duskPair: "1629928515074-0a76b71e9954",
    g_palmsWater: "1692087224072-83f25202ca4a",
    g_sunsetSwing: "1696104470342-b1ed3afe8381",
    g_aerial3: "1700667315305-ef2a027f9078",
    g_womanSunset: "1701428181041-d5b4f1d66a87",
    g_sunrise1: "1709525616630-ba30cb5310e6",
    g_sunrise2: "1709525617237-778500c895a8",
    g_sunrise3: "1709525617656-5498eefc7d03",
    g_bigTree: "1716464968470-c2162dd998e4",
    g_aerialPond: "1720446548662-6845735ba69d",
    g_aerial4: "1742498626135-67a7d3501eff",
    g_swingSunny: "1752661497402-5b3b6743d66a",
    g_womanSwing: "1697448524689-8dfd3d11071e",
    g_crouch: "1661978947164-b894c0b8a95c",
    g_cartSunset: "1595119322637-fc1c32304a51",
    g_mountainsRoses: "1613754627343-622ea791af6e",
    g_savannaCourse: "1634139984130-60da781dbec7",
    g_linksGold: "1634140255781-e900c47ecf1f",
    g_mtnCourse1: "1677137867878-a2b527e4c7fc",
    g_mtnWalk: "1677137998653-67f47edf2135",
    g_mtnCourse2: "1677138055562-483b824b6348",
    g_seaCourse: "1716389089405-9109acb30533",
    g_dawnBunkers: "1742498626081-a64f9677f468",
    g_swingBack: "1763917343252-912c0b66eb9b",
    g_bagCart: "1713728920029-3184af309c47",
    g_swingBlue: "1569615336419-2c33ad07f057",
    g_trio: "1780663685953-1644f4eab558",
    safariDrive: "1516426122078-c23e76319801"
  };

  function img(key, w, h) {
    var id = PHOTO[key] || key;
    if (/^px:/.test(id)) { /* Pexels photo id */
      var pid = id.slice(3);
      return "https://images.pexels.com/photos/" + pid + "/pexels-photo-" + pid + ".jpeg?auto=compress&cs=tinysrgb&w=" + (w || 1200) + (h ? "&h=" + h + "&fit=crop" : "");
    }
    var q = "?auto=format&fit=crop&q=70&w=" + (w || 1200);
    if (h) q += "&h=" + h;
    return "https://images.unsplash.com/photo-" + id + q;
  }

  /* A srcset at several widths, keeping the crop ratio (h / w) when one is given. */
  function srcset(key, widths, ratio) {
    return widths.map(function (w) { return img(key, w, ratio ? Math.round(w * ratio) : 0) + " " + w + "w"; }).join(", ");
  }

  var JOURNEYS = [
    {
      id: "grand-crossing",
      name: "The Grand Crossing",
      strap: "Wenn Sie Afrika nur einmal bereisen, dann mit dieser Reise.",
      tagline: "Von Kapstadt in die Masai Mara in einer nahtlosen Durchquerung",
      countries: ["Südafrika", "Simbabwe", "Kenia"],
      region: "Ost- und Südafrika",
      nights: 14,
      rounds: 5,
      gameDrives: 9,
      priceFrom: 18500,
      tier: "flagship",
      featured: true,
      bestMonths: "Juli – Okt.",
      photo: "g_linksGold",
      route: ["Kapstadt", "Die Winelands", "Sabi Sand", "Victoriafälle", "Nairobi", "Masai Mara"],
      intro: "Vier prägende Orte des Kontinents, das Golf eingewoben und kein verlorener Tag. The Links in Fancourt, ein Leopard im Sabi Sand, die Gischt der Fälle auf den zweiten Neun und die Mara zur Zeit der Migration.",
      highlights: [
        "Fancourt The Links und Pearl Valley am Kap",
        "Drei Nächte im Sabi Sand, Afrikas Leopardenhauptstadt",
        "Elephant Hills mit der Gischt der Fälle am Horizont",
        "Karen Country Club, dann vier Nächte in der Mara"
      ],
      courses: [
        { name: "Pearl Valley", par: 72, note: "Jack-Nicklaus-Signature-Platz zwischen den Weinbergen von Paarl." },
        { name: "Fancourt — The Links", par: 73, note: "Gary Players Presidents-Cup-Platz und Südafrikas Nummer eins." },
        { name: "Leopard Creek", par: 72, note: "Am Crocodile River, an der Grenze zum Kruger." },
        { name: "Elephant Hills", par: 72, note: "Warzenschweine auf den Fairways, dahinter die Victoriafälle." },
        { name: "Karen Country Club", par: 72, note: "Nairobis Parkland-Klassiker unter den Ngong-Bergen." }
      ],
      stays: ["La Residence, Franschhoek", "Fancourt Hotel", "Londolozi (oder ähnlich)", "Victoria Falls Hotel", "Hemingways Nairobi", "Mara Plains Camp (oder ähnlich)"],
      itinerary: [
        { day: 1, title: "Ankunft in Kapstadt", text: "Empfang bei der Ankunft und Fahrt nach Franschhoek. Ein erstes Glas Cap Classique auf der Terrasse." },
        { day: 2, title: "Pearl Valley", text: "Eröffnungsrunde in Pearl Valley. Nachmittags mit der Wine Tram durchs Tal." },
        { day: 3, title: "Kapstadt", text: "Tafelberg mit der Seilbahn, Cape Point, Abendessen an der Waterfront." },
        { day: 4, title: "Flug nach George", text: "Transfer nach Fancourt. Lockerspielen auf dem Bramble-Hill-Platz." },
        { day: 5, title: "Fancourt The Links", text: "Ihr Tag auf dem schönsten Platz des Landes, Caddies inbegriffen." },
        { day: 6, title: "Flug ins Sabi Sand", text: "Von George nach Skukuza über Johannesburg. Erste Pirschfahrt in der Dämmerung." },
        { day: 7, title: "Sabi Sand", text: "Fahrten im Morgen- und Abendlicht mit den berühmten Leoparden-Fährtenlesern des Reservats." },
        { day: 8, title: "Leopard Creek", text: "Eine Runde mit Flusspferden unterhalb der 13, dann eine Nachtfahrt." },
        { day: 9, title: "Flug zu den Victoriafällen", text: "Sonnenuntergangsfahrt auf dem Sambesi vom Victoria Falls Hotel." },
        { day: 10, title: "Elephant Hills", text: "Morgens zu Fuß zu den Fällen, nachmittags eine Runde in Elephant Hills." },
        { day: 11, title: "Flug nach Nairobi", text: "Über Johannesburg nach Nairobi. Abendessen im Talisman in Karen." },
        { day: 12, title: "Karen Country Club", text: "Runde in Karen, dann im Kleinflugzeug in die Mara." },
        { day: 13, title: "Masai Mara", text: "Ein ganzer Tag in den Ebenen. In der Saison die Flussüberquerungen." },
        { day: 14, title: "Masai Mara", text: "Ballon im Morgengrauen, Frühstück im Busch, ein letzter Sundowner." },
        { day: 15, title: "Abreise", text: "Flug nach Nairobi zu Ihrem Anschlussflug." }
      ]
    },
    {
      id: "kenya-classic",
      name: "Kenya Classic",
      strap: "Die ursprüngliche Golfsafari.",
      tagline: "Nairobis Meisterschaftsplätze und die Masai Mara",
      countries: ["Kenia"],
      region: "Ostafrika",
      nights: 7,
      rounds: 3,
      gameDrives: 5,
      priceFrom: 4950,
      tier: "signature",
      featured: true,
      bestMonths: "Juli – Okt. (Große Migration), Jan. – Feb.",
      photo: "g_caddie",
      route: ["Nairobi", "Masai Mara"],
      intro: "Drei Runden auf Nairobis traditionsreichen Parklandplätzen, dann vier Nächte in einem privaten Mara-Schutzgebiet, wo es um die Katzen geht und die Massen woanders sind.",
      highlights: [
        "Karen Country Club und Muthaiga Golf Club",
        "Flussüberquerungen der Großen Migration, in der Saison",
        "Sundowner in den Ebenen der Mara",
        "Optionale Ballonsafari im Morgengrauen"
      ],
      courses: [
        { name: "Karen Country Club", par: 72, note: "Baumgesäumter Parklandplatz am Rand der Ngong-Berge." },
        { name: "Muthaiga Golf Club", par: 72, note: "Kenias Heimat des Golfs und Austragungsort der Kenya Open." },
        { name: "Vipingo Ridge (optionale Verlängerung)", par: 72, note: "PGA-akkreditierter Küstenplatz nördlich von Mombasa." }
      ],
      stays: ["Hemingways Nairobi", "Mara Plains Camp (oder ähnlich)"],
      itinerary: [
        { day: 1, title: "Ankunft in Nairobi", text: "Empfang am Jomo Kenyatta International. Transfer ins Hemingways Nairobi und Begrüßung mit Ihrem Gastgeber." },
        { day: 2, title: "Karen Country Club", text: "Vormittags eine Runde in Karen, Mittagessen im Clubhaus, nachmittags im Giraffe Centre." },
        { day: 3, title: "Muthaiga Golf Club", text: "18 Löcher im traditionsreichsten Club Kenias. Abendessen im Talisman." },
        { day: 4, title: "Flug in die Mara", text: "Im Kleinflugzeug in die Mara. Nachmittags Pirschfahrt auf dem Weg ins Camp." },
        { day: 5, title: "Ein ganzer Safaritag", text: "Fahrten im Morgen- und Abendlicht im Schutzgebiet mit Frühstück im Busch. Optionale Ballonfahrt." },
        { day: 6, title: "Ein ganzer Safaritag", text: "Auf den Spuren der Großkatzen mit Ihrem privaten Guide. Sundowner, Abendessen unter den Sternen." },
        { day: 7, title: "Von der Mara nach Nairobi", text: "Letzte Morgenfahrt, Flug nach Nairobi. Eine Abschiedsrunde in Windsor bei späten Abflügen." },
        { day: 8, title: "Abreise", text: "Transfer zum Flughafen oder weiter an die Küste nach Vipingo Ridge." }
      ]
    },
    {
      id: "south-africa-signature",
      name: "South Africa Signature",
      strap: "Garden Route, Winelands und Sabi Sand.",
      tagline: "Vier der schönsten Plätze des Landes und ein Big-Five-Reservat",
      countries: ["Südafrika"],
      region: "Südliches Afrika",
      nights: 9,
      rounds: 4,
      gameDrives: 6,
      priceFrom: 6850,
      tier: "signature",
      featured: true,
      bestMonths: "März – Mai, Sep. – Nov.",
      photo: "g_savannaCourse",
      route: ["Franschhoek", "Kapstadt", "Fancourt", "Sabi Sand"],
      intro: "The Links und Montagu in Fancourt, Pearl Valley zwischen den Reben, Leopard Creek an der Grenze zum Kruger und dazwischen drei Nächte im Sabi Sand.",
      highlights: [
        "Fancourt Montagu und The Links",
        "Pearl Valley in den Cape Winelands",
        "Leoparden-Tracking im Sabi Sand",
        "Weinprobe in Franschhoek"
      ],
      courses: [
        { name: "Fancourt — The Links", par: 73, note: "Gary Players Presidents-Cup-Platz, Südafrikas Nummer eins." },
        { name: "Fancourt — Montagu", par: 72, note: "Parkland-Meisterwerk am Fuß der Outeniqua-Berge." },
        { name: "Pearl Valley", par: 72, note: "Jack-Nicklaus-Signature-Platz zwischen den Weinbergen von Paarl." },
        { name: "Leopard Creek", par: 72, note: "An der Grenze zum Kruger, wo Flusspferde und Krokodile die 13 säumen." }
      ],
      stays: ["Fancourt Hotel", "La Residence, Franschhoek", "Londolozi oder Singita Sabi Sand (oder ähnlich)"],
      itinerary: [
        { day: 1, title: "Ankunft in Kapstadt", text: "Privater Transfer nach Franschhoek und ins La Residence." },
        { day: 2, title: "Pearl Valley", text: "Runde in Pearl Valley. Nachmittags Wine Tram." },
        { day: 3, title: "Kapstadt", text: "Tafelberg, Cape Point oder Ruhetag. Abendessen an der Waterfront." },
        { day: 4, title: "Flug nach George", text: "Transfer nach Fancourt. Nachmittags Training auf Bramble Hill." },
        { day: 5, title: "Fancourt Montagu", text: "Runde auf Montagu. Nachmittag im Spa." },
        { day: 6, title: "Fancourt The Links", text: "Ihr Tag auf Südafrikas schönstem Platz. Caddies inbegriffen." },
        { day: 7, title: "Flug ins Sabi Sand", text: "Von George nach Skukuza über Johannesburg. Nachmittags Pirschfahrt." },
        { day: 8, title: "Sabi Sand", text: "Fahrten im Morgen- und Abendlicht mit den Leoparden-Fährtenlesern des Reservats." },
        { day: 9, title: "Leopard Creek", text: "Morgens eine Runde, letzte Abendfahrt und Boma-Dinner." },
        { day: 10, title: "Abreise", text: "Morgenfahrt, Brunch, Flug von Skukuza nach Johannesburg." }
      ]
    },
    {
      id: "tanzania-grand",
      name: "Tanzania Grand",
      strap: "Golf unter dem Kilimandscharo, dann die Serengeti.",
      tagline: "Golf am Kilimandscharo, die Serengeti und der Ngorongoro-Krater",
      countries: ["Tansania"],
      region: "Ostafrika",
      nights: 10,
      rounds: 2,
      gameDrives: 8,
      priceFrom: 7400,
      tier: "signature",
      featured: true,
      bestMonths: "Juni – Okt., Dez. – März (Kalbungszeit)",
      photo: "kilimanjaro",
      route: ["Kilimanjaro", "Zentrale Serengeti", "Nördliche Serengeti", "Ngorongoro"],
      intro: "Zwei Runden mit dem Berg als Kulisse, dann acht Pirschfahrten auf der größten Tierbühne der Welt, zum Abschluss auf dem Kraterboden.",
      highlights: [
        "Kilimanjaro Golf & Wildlife Estate",
        "Die zentrale Serengeti und die Flussüberquerungen im Norden",
        "Abstieg in den Ngorongoro-Krater",
        "Ein Morgen mit einer Massai-Gemeinschaft"
      ],
      courses: [
        { name: "Kilimanjaro Golf & Wildlife Estate", par: 72, note: "Ein Entwurf von David Jones, auf dessen Fairways Zebras und Giraffen grasen." },
        { name: "Sea Cliff Resort, Sansibar (optionale Verlängerung)", par: 36, note: "Neun Löcher am Meer für die Strandverlängerung." }
      ],
      stays: ["Kili Golf Villas", "Namiri Plains", "The Highlands Ngorongoro (oder ähnlich)"],
      itinerary: [
        { day: 1, title: "Ankunft am Kilimandscharo", text: "Transfer zu Ihrer Villa auf dem Golfgut." },
        { day: 2, title: "Golf am Kilimandscharo", text: "Erste Runde, Meru und Kilimandscharo hinter dem Grün." },
        { day: 3, title: "Golf am Kilimandscharo", text: "Zweite Runde, Abschiedsessen im Clubhaus." },
        { day: 4, title: "Flug in die Serengeti", text: "Im Kleinflugzeug in die zentrale Serengeti. Nachmittags Pirschfahrt." },
        { day: 5, title: "Serengeti", text: "Ein ganzer Tag im Seronera-Tal, Löwen- und Leopardenland." },
        { day: 6, title: "Serengeti", text: "Der Migration oder den Geparden in den östlichen Ebenen folgen. Abendessen im Busch." },
        { day: 7, title: "Nördliche Serengeti", text: "In der Saison die Überquerungen des Mara-Flusses. Sonst die Moru-Kopjes und Nashörner." },
        { day: 8, title: "Ngorongoro", text: "Fahrt durch das Kraterhochland zu einer Lodge am Rand." },
        { day: 9, title: "Kraterboden", text: "Abstieg im Morgengrauen, Picknick am Flusspferdteich, Spitzmaulnashorn." },
        { day: 10, title: "Massai-Dorf und Arusha", text: "Kultureller Vormittag, letzte Nacht in Arusha." },
        { day: 11, title: "Abreise", text: "Transfer zum Kilimanjaro International Airport oder Weiterflug nach Sansibar." }
      ]
    },
    {
      id: "victoria-falls-chobe",
      name: "Falls & Fairways",
      strap: "Der Rauch, der donnert, und Afrikas Elefantenhauptstadt.",
      tagline: "Victoriafälle, Elephant Hills und Chobe",
      countries: ["Simbabwe", "Botswana"],
      region: "Südliches Afrika",
      nights: 6,
      rounds: 2,
      gameDrives: 4,
      priceFrom: 3950,
      tier: "signature",
      featured: false,
      bestMonths: "Mai – Okt.",
      photo: "g_bigTree",
      route: ["Victoriafälle", "Chobe"],
      intro: "Zwei Runden in Elephant Hills mit Warzenschweinen auf den Fairways, eine Führung an den Fällen und drei Nächte am Chobe-Ufer per Boot und Geländewagen.",
      highlights: [
        "Elephant Hills Golf Course am Sambesi",
        "Führung an den Victoriafällen",
        "Chobe-Nationalpark per Boot und Geländewagen",
        "Sonnenuntergangsfahrt auf dem Sambesi"
      ],
      courses: [
        { name: "Elephant Hills Golf Course", par: 72, note: "Ein Gary-Player-Platz mit der Gischt der Fälle am Horizont." },
        { name: "Borrowdale Brooke, Harare (optional)", par: 72, note: "Für alle mit Route über Harare." }
      ],
      stays: ["Victoria Falls Hotel", "Chobe Game Lodge (oder ähnlich)"],
      itinerary: [
        { day: 1, title: "Ankunft an den Victoriafällen", text: "Transfer ins Victoria Falls Hotel. Sonnenuntergangsfahrt auf dem Sambesi." },
        { day: 2, title: "Die Fälle und Elephant Hills", text: "Morgens Führung an den Fällen. Nachmittags eine Runde." },
        { day: 3, title: "Elephant Hills", text: "Zweite Runde. Abends Dinner und Trommelshow im Boma." },
        { day: 4, title: "Hinüber zum Chobe", text: "Straßentransfer über die Grenze bei Kazungula. Nachmittags Bootsfahrt auf dem Fluss." },
        { day: 5, title: "Chobe-Nationalpark", text: "Morgenfahrt am Ufer entlang, nachmittags per Boot." },
        { day: 6, title: "Chobe-Nationalpark", text: "Ein ganzer Tag im Park. Auf dem Rückweg optional Helikopterflug über die Fälle." },
        { day: 7, title: "Abreise", text: "Transfer zum Flughafen Kasane oder Victoria Falls." }
      ]
    },
    {
      id: "mauritius-kruger",
      name: "Mauritius & Kruger",
      strap: "Fairways am Indischen Ozean und eine private Kruger-Konzession.",
      tagline: "Fünf Runden in zwei Ländern, Busch und Strand",
      countries: ["Mauritius", "Südafrika"],
      region: "Indischer Ozean und südliches Afrika",
      nights: 11,
      rounds: 5,
      gameDrives: 6,
      priceFrom: 8900,
      tier: "signature",
      featured: false,
      bestMonths: "Mai – Okt.",
      photo: "g_seaCourse",
      route: ["Bel Ombre", "Ostküste von Mauritius", "Greater Kruger"],
      intro: "Die beiden Heritage-Plätze und die Île aux Cerfs per Boot, dann eine private Konzession im Greater Kruger mit Runden in Skukuza und Leopard Creek zwischen den Pirschfahrten.",
      highlights: [
        "Heritage Le Château und La Réserve",
        "Die Île aux Cerfs, mit dem Boot erreichbar",
        "Safari in einer privaten Konzession im Greater Kruger",
        "Skukuza Golf Club, ohne Zaun mitten im Park"
      ],
      courses: [
        { name: "Heritage Le Château", par: 72, note: "Austragungsort der AfrAsia Bank Mauritius Open." },
        { name: "Heritage La Réserve", par: 72, note: "Peter Matkovichs neuester Platz, eröffnet 2023." },
        { name: "Île aux Cerfs", par: 72, note: "Mit dem Boot erreichbar, mit Meerblick von jedem Loch." },
        { name: "Leopard Creek", par: 72, note: "Der Nachbar des Kruger und einer der schönsten Afrikas." },
        { name: "Skukuza Golf Club", par: 72, note: "Neun Löcher ohne Zaun im Kruger-Nationalpark." }
      ],
      stays: ["Heritage Le Telfair", "Constance Prince Maurice", "Singita Lebombo oder Royal Malewane (oder ähnlich)"],
      itinerary: [
        { day: 1, title: "Ankunft auf Mauritius", text: "Transfer ins Heritage Le Telfair an der Südküste." },
        { day: 2, title: "Heritage Le Château", text: "Runde auf Le Château. Nachmittag am Strand." },
        { day: 3, title: "Heritage La Réserve", text: "Der neueste Platz der Insel. Katamaran bei Sonnenuntergang." },
        { day: 4, title: "Transfer in den Osten", text: "Umzug ins Constance Prince Maurice, unterwegs Delfine." },
        { day: 5, title: "Île aux Cerfs", text: "Bootstransfer und Runde. Mittagessen auf der Insel." },
        { day: 6, title: "Freier Tag", text: "Spa, Schnorcheln oder der Legend-Platz am Prince Maurice." },
        { day: 7, title: "Flug in den Kruger", text: "Über Johannesburg nach Skukuza. Nachmittags Pirschfahrt in die Konzession." },
        { day: 8, title: "Private Konzession", text: "Fahrten im Morgen- und Abendlicht, Spurensuche abseits der Wege, Nachtfahrten." },
        { day: 9, title: "Skukuza Golf Club", text: "Morgens eine Runde auf dem zaunlosen Platz im Kruger, nachmittags Pirschfahrt." },
        { day: 10, title: "Leopard Creek", text: "Runde in Leopard Creek und eine letzte Fahrt bei Sonnenuntergang." },
        { day: 11, title: "Letzter Safarimorgen", text: "Letzte Fahrt, Brunch, ein Buschspaziergang mit Ihrem Ranger." },
        { day: 12, title: "Abreise", text: "Flug von Skukuza nach Johannesburg." }
      ]
    },
    {
      id: "uganda-short-break",
      name: "Gorillas und Seeufer",
      strap: "Die demütigste Stunde des Reisens, eingerahmt von Golf.",
      tagline: "Entebbes Platz am See und die Gorillas von Bwindi",
      countries: ["Uganda"],
      region: "Ostafrika",
      nights: 5,
      rounds: 1,
      gameDrives: 2,
      priceFrom: 3600,
      tier: "signature",
      featured: false,
      bestMonths: "Juni – Sep., Dez. – Feb.",
      photo: "highlands",
      route: ["Entebbe", "Bwindi", "Bunyonyi-See"],
      intro: "Der älteste Platz Ostafrikas am Ufer des Victoriasees, dann eine Stunde bei einer Berggorillafamilie im Bwindi Impenetrable Forest. Kurz, intensiv, unvergesslich.",
      highlights: [
        "Entebbe Golf Club, gegründet 1901",
        "Gorilla-Trekking in Bwindi, Permit inbegriffen",
        "Kanusafari auf dem Bunyonyi-See",
        "Schimpansenschutzgebiet Ngamba Island"
      ],
      courses: [
        { name: "Entebbe Golf Club", par: 71, note: "Der älteste Platz Ostafrikas, am Victoriasee." },
        { name: "Uganda Golf Club, Kampala (optional)", par: 72, note: "Austragungsort der Uganda Open." }
      ],
      stays: ["Hotel No. 5 Entebbe", "Bwindi Lodge (oder ähnlich)"],
      itinerary: [
        { day: 1, title: "Ankunft in Entebbe", text: "Transfer ins Hotel No. 5, wenige Schritte vom Golfclub." },
        { day: 2, title: "Entebbe Golf Club", text: "Runde in Entebbe, dann mit dem Boot nach Ngamba Island." },
        { day: 3, title: "Flug nach Bwindi", text: "Linienflug nach Kihihi und Transfer an den Waldrand." },
        { day: 4, title: "Gorilla-Trekking", text: "Trekking mit Rangern für eine Stunde bei einer habituierten Familie." },
        { day: 5, title: "Bunyonyi-See", text: "Kanusafari und Gemeindebesuch. Zurück nach Bwindi." },
        { day: 6, title: "Abreise", text: "Rückflug nach Entebbe zu Ihrem Anschlussflug." }
      ]
    },
    {
      id: "morocco-sahara",
      name: "Marrakesch und die Sahara",
      strap: "Drei Runden unter dem Atlas, dann eine Nacht in den Dünen.",
      tagline: "Marrakeschs beste Plätze, das Agafay bei Sonnenuntergang und ein Camp im Erg Chebbi",
      countries: ["Marokko"],
      region: "Nordafrika",
      nights: 8,
      rounds: 3,
      gameDrives: 3,
      priceFrom: 4200,
      tier: "signature",
      featured: true,
      bestMonths: "März – Mai, Sep. – Nov.",
      photo: "sahara",
      route: ["Marrakech", "Agafay-Wüste", "Dadès-Schlucht", "Erg Chebbi", "Marrakech"],
      intro: "Eine Wüstensafari mit Golf auf beiden Seiten. Drei Tage in Marrakesch auf den Plätzen, die die Stadt zum Golfziel gemacht haben, ein Abendessen im Agafay, dann die Straße über den Atlas durch Schluchten und Kasbahs zum Erg Chebbi, wo die Kamele Sie für die Nacht in die Dünen bringen.",
      highlights: [
        "Assoufid, Royal Golf Marrakech und Al Maaden",
        "Abendessen bei Sonnenuntergang in einem Luxuscamp in der Steinwüste Agafay",
        "Der Tizi-n’Tichka-Pass, Aït Benhaddou und die Dadès-Schlucht",
        "Eine Nacht in einem privaten Zeltcamp in den Dünen des Erg Chebbi"
      ],
      courses: [
        { name: "Assoufid Golf Club", par: 72, note: "Wüstengolf mit Atlasblick, der beste Platz des Landes." },
        { name: "Royal Golf Marrakech", par: 72, note: "Der Platz von 1923 zwischen Oliven und Zypressen." },
        { name: "Al Maaden Golf Resort", par: 72, note: "Kyle Phillips, zehn Minuten von der Medina." }
      ],
      stays: ["La Mamounia", "Scarabeo Camp, Agafay", "Dar Ahlam, Skoura (oder ähnlich)", "Luxus-Wüstencamp in Merzouga"],
      itinerary: [
        { day: 1, title: "Ankunft in Marrakesch", text: "Privater Transfer ins La Mamounia. Abends mit Ihrem Gastgeber in die Medina." },
        { day: 2, title: "Assoufid", text: "Morgens eine Runde in Assoufid. Nachmittags Jardin Majorelle oder die Souks." },
        { day: 3, title: "Royal Golf Marrakech · Agafay", text: "Runde im Royal, dann hinaus ins Agafay zu Kamelen bei Sonnenuntergang und Abendessen unter den Sternen im Scarabeo Camp." },
        { day: 4, title: "Al Maaden", text: "Zurück in die Stadt zu einer Runde in Al Maaden. Hammam und Abendessen im Hotel." },
        { day: 5, title: "Über den Atlas", text: "Über den Tizi-n’Tichka-Pass zur Kasbah von Aït Benhaddou und weiter in den Palmenhain von Skoura für die Nacht." },
        { day: 6, title: "Dadès- und Todra-Schlucht", text: "Durch die Schluchten und die Oasen des Tafilalt nach Merzouga. Kamelritt in die Dünen bei Sonnenuntergang; Nacht im Camp im Erg Chebbi." },
        { day: 7, title: "Erg Chebbi", text: "Sonnenaufgang auf den Dünenkämmen, mit dem Geländewagen zu den Nomadenlagern und Fossilienfeldern, Sandboarden. Zweite Nacht im Camp oder in einer Wüstenkasbah." },
        { day: 8, title: "Zurück nach Marrakesch", text: "Flug ab Errachidia oder die lange Straße zurück. Abschiedsessen." },
        { day: 9, title: "Abreise", text: "Transfer zum Flughafen Marrakesch." }
      ]
    },
    {
      id: "madagascar-lemurs",
      name: "Lemuren und Hochland",
      strap: "Indris im Morgengrauen, Baobabs in der Dämmerung und eine Runde über Antananarivo.",
      tagline: "Golf du Rova, der Regenwald von Andasibe, die Baobab-Allee und die Inseln von Nosy Be",
      countries: ["Madagaskar"],
      region: "Indischer Ozean",
      nights: 9,
      rounds: 1,
      gameDrives: 7,
      priceFrom: 5200,
      tier: "signature",
      featured: false,
      bestMonths: "Apr. – Nov.",
      photo: "indri",
      route: ["Antananarivo", "Andasibe-Mantadia", "Kirindy-Wald", "Nosy Be"],
      intro: "Madagaskar ist eine Safari wie keine andere: keine Big Five, sondern Tiere, die es nirgends sonst gibt, zu Fuß im Wald entdeckt. Eine Runde in den Hügeln vor der Hauptstadt eröffnet die Reise; Indri, Fossa und Baobabs folgen, und der Strand von Nosy Be beschließt sie.",
      highlights: [
        "International Golf du Rova, der einzige 18-Loch-Platz des Landes",
        "Der Morgengesang der Indris in Andasibe, dazu Nachtwanderungen zu Chamäleons",
        "Fossa-Tracking in Kirindy und die Baobab-Allee bei Sonnenuntergang",
        "Mohrenmakis, Riffe und eine Lodge auf einer Privatinsel vor Nosy Be"
      ],
      courses: [
        { name: "International Golf du Rova", par: 72, note: "Welliger Hügelplatz in Andakana, mit einem Hotel am Clubhaus." }
      ],
      stays: ["Golf du Rova Hotel", "Mantadia Lodge, Andasibe", "Kirindy-Waldcamp", "Constance Tsarabanjina"],
      itinerary: [
        { day: 1, title: "Ankunft in Antananarivo", text: "Transfer ins Hotel am Golf du Rova in den Hügeln, zwanzig Kilometer von der Stadt." },
        { day: 2, title: "Golf du Rova", text: "Morgens eine Runde, dann die Fahrt nach Osten durch das Hochland nach Andasibe." },
        { day: 3, title: "Andasibe", text: "Morgengrauen in Analamazaotra für die Indris, nachmittags Mantadia, Nachtwanderung zu Chamäleons und Mausmakis." },
        { day: 4, title: "Andasibe", text: "Ein ganzer Tag im Regenwald mit Ihrem Guide: Sifakas, Bambuslemuren und der Orchideenpfad." },
        { day: 5, title: "Flug nach Morondava", text: "Zurück nach Antananarivo und Flug nach Westen. Sonnenuntergang an der Baobab-Allee." },
        { day: 6, title: "Kirindy", text: "Wanderungen im Trockenwald zu Larvensifakas und Fossa; Nachtwanderung zur Riesenspringratte." },
        { day: 7, title: "Flug nach Nosy Be", text: "Über Antananarivo nach Nosy Be und per Boot nach Tsarabanjina." },
        { day: 8, title: "Lokobe", text: "Mit der Piroge ins Lokobe-Reservat zu Mohrenmakis und Boas, nachmittags am Riff." },
        { day: 9, title: "Inseltag", text: "Schnorcheln, Segeln oder in der Saison Walhaie." },
        { day: 10, title: "Abreise", text: "Boot und Flug nach Antananarivo zu Ihrem Anschluss." }
      ]
    },
    {
      id: "benin-pendjari",
      name: "Pendjari und die Lagune",
      strap: "Westafrikas wildester Park und eine Runde auf seinem neuesten Platz.",
      tagline: "Cotonou, Ganvié mit der Piroge, Ouidah und vier Nächte im Pendjari",
      countries: ["Benin"],
      region: "Westafrika",
      nights: 7,
      rounds: 1,
      gameDrives: 7,
      priceFrom: 4600,
      tier: "signature",
      featured: false,
      bestMonths: "Dez. – Apr.",
      photo: "eleRoad",
      route: ["Cotonou", "Nokoué-See", "Ouidah", "Pendjari"],
      intro: "Benin verbindet die stärkste Großwildsafari Westafrikas mit einer Küste aus Lagunen, Pfahldörfern und Geschichte und dazwischen nun einem Meisterschaftsplatz. In der Trockenzeit finden die Pirschfahrten im Pendjari, das African Parks betreibt, Elefanten, Löwen und Büffel an den Wasserlöchern.",
      highlights: [
        "Der Ouidah Golf Club in Avlékété, Benins erster 18-Loch-Platz",
        "Ganvié, die Pfahlstadt auf dem Nokoué-See, mit der Piroge",
        "Die Sklavenroute von Ouidah und das Tor ohne Wiederkehr",
        "Vier Nächte im Pendjari mit privatem Guide und Fahrzeug"
      ],
      courses: [
        { name: "Ouidah Golf Club, Avlékété", par: 72, note: "Jeremy Perns Platz zwischen Lagune und Atlantik." }
      ],
      stays: ["Sofitel Cotonou Marina", "Pendjari Lodge"],
      itinerary: [
        { day: 1, title: "Ankunft in Cotonou", text: "Empfang bei der Ankunft und Transfer ins Sofitel an der Marina." },
        { day: 2, title: "Ganvié", text: "Vormittags mit der Piroge durch die Pfahlstadt auf dem Nokoué-See. Nachmittags der Dantokpa-Markt in Cotonou." },
        { day: 3, title: "Avlékété", text: "Runde im Ouidah Golf Club, dann die Sklavenroute zum Tor ohne Wiederkehr und der Pythontempel in Ouidah." },
        { day: 4, title: "Flug nach Norden", text: "Flug nach Natitingou und Transfer in den Pendjari. Nachmittags Fahrt zum Wasserloch Mare Bali." },
        { day: 5, title: "Pendjari", text: "Pirschfahrten im Morgen- und Abendlicht entlang des Pendjari-Flusses: Elefanten, Büffel, Flusspferde und Löwen." },
        { day: 6, title: "Pendjari", text: "Ein ganzer Tag mit Ihrem Guide in den Ausläufern der Atakora und an den Tanougou-Fällen." },
        { day: 7, title: "Pendjari", text: "Letzte Fahrten, ein Spaziergang mit den Rangern und ein letzter Sundowner am Wasserloch." },
        { day: 8, title: "Abreise", text: "Rückflug nach Cotonou zu Ihrem Anschlussflug." }
      ]
    }
  ];

  var DESTINATIONS = [
    {
      id: "kenya",
      name: "Kenia",
      strap: "Das ursprüngliche Safariland, mit Golf, das ein Jahrhundert zurückreicht.",
      photo: "g_greenSunrise",
      text: "Nairobi hat drei Meisterschaftsplätze innerhalb von vierzig Minuten, und die Mara-Schutzgebiete sind eine Flugstunde entfernt. Nirgends in Afrika lassen sich Runde und Pirschfahrt leichter abwechseln, ohne einen Tag zu verlieren.",
      courses: ["Karen Country Club", "Muthaiga Golf Club", "Windsor Golf Hotel", "Vipingo Ridge"],
      parks: ["Masai Mara", "Amboseli", "Laikipia", "Lewa"],
      journeys: ["kenya-classic", "grand-crossing"]
    },
    {
      id: "tanzania",
      name: "Tansania",
      strap: "Die Serengeti, der Krater und ein Platz unter dem Berg.",
      photo: "g_mtnWalk",
      text: "Tansania ist Safari in ihrer größten Dimension. Ein großartiger Platz am Fuß des Kilimandscharo eröffnet die Reise, der Rest ist Tierwelt in einem Ausmaß, das nirgends sonst erreicht wird, zum Abschluss der Abstieg in den Ngorongoro-Krater.",
      courses: ["Kilimanjaro Golf & Wildlife Estate", "Sea Cliff Resort, Sansibar"],
      parks: ["Serengeti", "Ngorongoro-Krater", "Tarangire", "Manyara-See"],
      journeys: ["tanzania-grand"]
    },
    {
      id: "south-africa",
      name: "Südafrika",
      strap: "Das tiefste Golfangebot des Kontinents und die Leoparden des Sabi Sand.",
      photo: "g_flagMist",
      text: "Fancourt, Pearl Valley und Leopard Creek wären allein schon den Flug wert. Dazu die Winelands, die Garden Route und ein privates Reservat an der Grenze zum Kruger, und Sie haben die maßgebliche erste Golfsafari.",
      courses: ["Fancourt The Links", "Fancourt Montagu", "Pearl Valley", "Leopard Creek", "Skukuza Golf Club", "Arabella"],
      parks: ["Sabi Sand", "Kruger-Nationalpark", "Timbavati", "Madikwe"],
      journeys: ["south-africa-signature", "grand-crossing", "mauritius-kruger"]
    },
    {
      id: "victoria-falls",
      name: "Victoriafälle und Chobe",
      strap: "Elefanten zu Tausenden und eine Runde am Sambesi.",
      photo: "elephantsSunset",
      text: "Elephant Hills ist der einzige Platz der Welt, auf dem man vom Abschlag die Gischt eines Naturwunders sieht. Jenseits der Grenze hat Chobe die größte Elefantenpopulation Afrikas, am schönsten vom Fluss bei Sonnenuntergang.",
      courses: ["Elephant Hills", "Borrowdale Brooke"],
      parks: ["Victoriafälle", "Chobe", "Hwange", "Sambesi-Nationalpark"],
      journeys: ["victoria-falls-chobe", "grand-crossing"]
    },
    {
      id: "mauritius",
      name: "Mauritius",
      strap: "Golf auf Tour-Niveau auf einer Insel, einen kurzen Flug vom Busch.",
      photo: "g_palmsWater",
      text: "Mauritius ist Station der DP World Tour und hat mehr Meisterschaftsgolf pro Quadratkilometer als irgendwo sonst in Afrika. Es passt ganz natürlich zum Kruger für zwei Wochen Busch und Strand.",
      courses: ["Heritage Le Château", "Heritage La Réserve", "Île aux Cerfs", "Anahita", "Paradis"],
      parks: ["Black-River-Schluchten", "Île aux Aigrettes"],
      journeys: ["mauritius-kruger"]
    },
    {
      id: "uganda",
      name: "Uganda",
      strap: "Gorillas im Wald, Golf am Seeufer.",
      photo: "highlands",
      text: "Ein Kurztrip mit einer Runde im ältesten Club Ostafrikas und der bewegendsten Stunde des Reisens. Uganda funktioniert allein oder als dreitägige Ergänzung zu Kenia.",
      courses: ["Entebbe Golf Club", "Uganda Golf Club"],
      parks: ["Bwindi Impenetrable Forest", "Queen Elizabeth", "Bunyonyi-See", "Murchison Falls"],
      journeys: ["uganda-short-break"]
    },
    {
      id: "morocco",
      name: "Marokko",
      strap: "Das schönste Golf nördlich des Kaps und eine Wüstensafari per Kamel und Geländewagen.",
      photo: "sahara",
      text: "Marrakesch hat drei Plätze, für die es sich lohnt, einen Kontinent zu durchqueren, mit dem Atlas hinter jedem Grün, und die Sahara beginnt eine Tagesfahrt entfernt.",
      courses: ["Assoufid", "Royal Golf Marrakech", "Al Maaden", "Royal Golf Dar Es Salam", "Tazegzout"],
      parks: ["Agafay", "Erg Chebbi", "Erg Chigaga", "Toubkal"],
      journeys: ["morocco-sahara"]
    },
    {
      id: "madagascar",
      name: "Madagaskar",
      strap: "Lemuren, Baobabs und Kalkstein-Tsingy, dazu eine Runde über der Hauptstadt.",
      photo: "indri",
      text: "Eine Safari zu Fuß zwischen Tieren, die es nirgends sonst gibt, ein gewachsener Platz vor Antananarivo und zum Schluss die Inseln von Nosy Be.",
      courses: ["International Golf du Rova"],
      parks: ["Andasibe-Mantadia", "Kirindy", "Isalo", "Nosy Be"],
      journeys: ["madagascar-lemurs"]
    },
    {
      id: "benin",
      name: "Benin",
      strap: "Die beste Savannensafari Westafrikas und ein brandneuer Meisterschaftsplatz.",
      photo: "ganvie",
      text: "Elefanten und Löwen im Pendjari in der Trockenzeit, Ganvié auf der Lagune und der erste 18-Loch-Platz des Landes in Avlékété.",
      courses: ["Ouidah Golf Club"],
      parks: ["Pendjari", "W-Nationalpark", "Nokoué-See"],
      journeys: ["benin-pendjari"]
    }
  ];

  window.SGT = {
    PHOTO: PHOTO,
    img: img,
    srcset: srcset,
    JOURNEYS: JOURNEYS,
    DESTINATIONS: DESTINATIONS,
    CONFIG: {
      brand: "Safari Golf Tour",
      email: "safarigolftour@tourground.com",
      // Business address: Kofisi Riverside, Nairobi (premium coworking; owner-approved arrangement).
      // Owner's fix list (October 2026): no phone, WhatsApp, social links or licence numbers on the site.
      address: "Kofisi Riverside, 104 Riverside Drive, Nairobi, Kenia"
    }
  };
})();
