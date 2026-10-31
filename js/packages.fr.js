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
      strap: "Si vous ne faites l’Afrique qu’une fois, c’est ce voyage-là.",
      tagline: "Du Cap au Masai Mara en une seule traversée fluide",
      countries: ["Afrique du Sud", "Zimbabwe", "Kenya"],
      region: "Afrique de l’Est et australe",
      nights: 14,
      rounds: 5,
      gameDrives: 9,
      priceFrom: 18500,
      tier: "flagship",
      featured: true,
      bestMonths: "Juil. – oct.",
      photo: "g_linksGold",
      route: ["Le Cap", "Les Winelands", "Sabi Sand", "Chutes Victoria", "Nairobi", "Masai Mara"],
      intro: "Quatre lieux emblématiques du continent, le golf tissé entre eux, et pas un jour perdu. The Links à Fancourt, un léopard à Sabi Sand, les embruns des chutes sur le retour, et le Mara au temps de la migration.",
      highlights: [
        "Fancourt The Links et Pearl Valley au Cap",
        "Trois nuits à Sabi Sand, capitale africaine du léopard",
        "Elephant Hills avec les embruns des chutes à l’horizon",
        "Karen Country Club, puis quatre nuits dans le Mara"
      ],
      courses: [
        { name: "Pearl Valley", par: 72, note: "Parcours signature Jack Nicklaus parmi les vignobles de Paarl." },
        { name: "Fancourt — The Links", par: 73, note: "Le théâtre de la Presidents Cup signé Gary Player et le numéro un d’Afrique du Sud." },
        { name: "Leopard Creek", par: 72, note: "Au bord de la rivière Crocodile, à la limite du Kruger." },
        { name: "Elephant Hills", par: 72, note: "Des phacochères sur les fairways, les chutes Victoria au loin." },
        { name: "Karen Country Club", par: 72, note: "Le classique de parc de Nairobi au pied des collines de Ngong." }
      ],
      stays: ["La Residence, Franschhoek", "Fancourt Hotel", "Londolozi (ou similaire)", "Victoria Falls Hotel", "Hemingways Nairobi", "Mara Plains Camp (ou similaire)"],
      itinerary: [
        { day: 1, title: "Arrivée au Cap", text: "Accueil à l’arrivée et route vers Franschhoek. Un premier verre de Cap Classique sur la terrasse." },
        { day: 2, title: "Pearl Valley", text: "Partie d’ouverture à Pearl Valley. L’après-midi, tram du vin à travers la vallée." },
        { day: 3, title: "Le Cap", text: "La montagne de la Table en téléphérique, Cape Point, dîner au Waterfront." },
        { day: 4, title: "Vol pour George", text: "Transfert à Fancourt. Mise en jambes sur le parcours de Bramble Hill." },
        { day: 5, title: "Fancourt The Links", text: "Votre journée sur le plus beau parcours du pays, caddies inclus." },
        { day: 6, title: "Vol pour Sabi Sand", text: "De George à Skukuza via Johannesburg. Premier safari au crépuscule." },
        { day: 7, title: "Sabi Sand", text: "Sorties à l’aube et au crépuscule avec les célèbres pisteurs de léopards de la réserve." },
        { day: 8, title: "Leopard Creek", text: "Une partie avec des hippopotames sous le 13, puis un safari de nuit." },
        { day: 9, title: "Vol pour les chutes Victoria", text: "Croisière au coucher du soleil sur le Zambèze depuis le Victoria Falls Hotel." },
        { day: 10, title: "Elephant Hills", text: "Marche matinale jusqu’aux chutes, partie l’après-midi à Elephant Hills." },
        { day: 11, title: "Vol pour Nairobi", text: "Via Johannesburg jusqu’à Nairobi. Dîner au Talisman à Karen." },
        { day: 12, title: "Karen Country Club", text: "Partie à Karen, puis petit avion vers le Mara." },
        { day: 13, title: "Masai Mara", text: "Journée entière dans les plaines. En saison, les traversées de rivière." },
        { day: 14, title: "Masai Mara", text: "Montgolfière à l’aube, petit-déjeuner en brousse, un dernier apéritif au coucher du soleil." },
        { day: 15, title: "Départ", text: "Vol pour Nairobi et votre correspondance." }
      ]
    },
    {
      id: "kenya-classic",
      name: "Kenya Classic",
      strap: "Le safari golf d’origine.",
      tagline: "Les parcours de championnat de Nairobi et le Masai Mara",
      countries: ["Kenya"],
      region: "Afrique de l’Est",
      nights: 7,
      rounds: 3,
      gameDrives: 5,
      priceFrom: 4950,
      tier: "signature",
      featured: true,
      bestMonths: "Juil. – oct. (Grande Migration), janv. – févr.",
      photo: "g_caddie",
      route: ["Nairobi", "Masai Mara"],
      intro: "Trois parties sur les parcours de parc légendaires de Nairobi, puis quatre nuits dans une conservancy privée du Mara où les félins sont l’essentiel et la foule est ailleurs.",
      highlights: [
        "Karen Country Club et Muthaiga Golf Club",
        "Traversées de rivière de la Grande Migration, en saison",
        "Apéritif au coucher du soleil dans les plaines du Mara",
        "Safari en montgolfière à l’aube en option"
      ],
      courses: [
        { name: "Karen Country Club", par: 72, note: "Parcours de parc bordé d’arbres au pied des collines de Ngong." },
        { name: "Muthaiga Golf Club", par: 72, note: "La maison du golf kényan et l’hôte de l’Open du Kenya." },
        { name: "Vipingo Ridge (extension facultative)", par: 72, note: "Parcours côtier accrédité PGA au nord de Mombasa." }
      ],
      stays: ["Hemingways Nairobi", "Mara Plains Camp (ou similaire)"],
      itinerary: [
        { day: 1, title: "Arrivée à Nairobi", text: "Accueil à l’aéroport international Jomo Kenyatta. Transfert au Hemingways Nairobi et briefing de bienvenue avec votre accompagnateur." },
        { day: 2, title: "Karen Country Club", text: "Partie le matin à Karen, déjeuner au club-house, après-midi au Giraffe Centre." },
        { day: 3, title: "Muthaiga Golf Club", text: "18 trous au club le plus légendaire du Kenya. Dîner au Talisman." },
        { day: 4, title: "Vol pour le Mara", text: "Petit avion vers le Mara. Safari l’après-midi en route vers le camp." },
        { day: 5, title: "Journée entière de safari", text: "Sorties à l’aube et au crépuscule dans la conservancy avec petit-déjeuner en brousse. Vol en montgolfière en option." },
        { day: 6, title: "Journée entière de safari", text: "Sur la piste des grands félins avec votre guide privé. Apéritif au coucher du soleil, dîner sous les étoiles." },
        { day: 7, title: "Du Mara à Nairobi", text: "Dernière sortie matinale, vol pour Nairobi. Une partie d’adieu à Windsor pour les départs tardifs." },
        { day: 8, title: "Départ", text: "Transfert à l’aéroport, ou poursuite vers la côte pour Vipingo Ridge." }
      ]
    },
    {
      id: "south-africa-signature",
      name: "South Africa Signature",
      strap: "La Route des Jardins, les Winelands et Sabi Sand.",
      tagline: "Quatre des plus beaux parcours du pays et une réserve Big Five",
      countries: ["Afrique du Sud"],
      region: "Afrique australe",
      nights: 9,
      rounds: 4,
      gameDrives: 6,
      priceFrom: 6850,
      tier: "signature",
      featured: true,
      bestMonths: "Mars – mai, sept. – nov.",
      photo: "g_savannaCourse",
      route: ["Franschhoek", "Le Cap", "Fancourt", "Sabi Sand"],
      intro: "The Links et Montagu à Fancourt, Pearl Valley au milieu des vignes, Leopard Creek à la limite du Kruger, et trois nuits à Sabi Sand entre les deux.",
      highlights: [
        "Fancourt Montagu et The Links",
        "Pearl Valley dans les Winelands du Cap",
        "Pistage du léopard à Sabi Sand",
        "Dégustation de vins à Franschhoek"
      ],
      courses: [
        { name: "Fancourt — The Links", par: 73, note: "Le théâtre de la Presidents Cup signé Gary Player, classé numéro un en Afrique du Sud." },
        { name: "Fancourt — Montagu", par: 72, note: "Chef-d’œuvre de parc au pied des monts Outeniqua." },
        { name: "Pearl Valley", par: 72, note: "Parcours signature Jack Nicklaus parmi les vignobles de Paarl." },
        { name: "Leopard Creek", par: 72, note: "À la limite du Kruger, où hippopotames et crocodiles bordent le 13." }
      ],
      stays: ["Fancourt Hotel", "La Residence, Franschhoek", "Londolozi ou Singita Sabi Sand (ou similaire)"],
      itinerary: [
        { day: 1, title: "Arrivée au Cap", text: "Transfert privé vers Franschhoek et La Residence." },
        { day: 2, title: "Pearl Valley", text: "Partie à Pearl Valley. L’après-midi, tram du vin." },
        { day: 3, title: "Le Cap", text: "Montagne de la Table, Cape Point ou journée de repos. Dîner au Waterfront." },
        { day: 4, title: "Vol pour George", text: "Transfert à Fancourt. Entraînement l’après-midi sur Bramble Hill." },
        { day: 5, title: "Fancourt Montagu", text: "Partie à Montagu. Après-midi au spa." },
        { day: 6, title: "Fancourt The Links", text: "Votre journée sur le plus beau parcours d’Afrique du Sud. Caddies inclus." },
        { day: 7, title: "Vol pour Sabi Sand", text: "De George à Skukuza via Johannesburg. Safari l’après-midi." },
        { day: 8, title: "Sabi Sand", text: "Sorties à l’aube et au crépuscule avec les pisteurs de léopards de la réserve." },
        { day: 9, title: "Leopard Creek", text: "Partie le matin, dernier safari du soir et dîner au boma." },
        { day: 10, title: "Départ", text: "Sortie matinale, brunch, vol de Skukuza à Johannesburg." }
      ]
    },
    {
      id: "tanzania-grand",
      name: "Tanzania Grand",
      strap: "Le golf au pied du Kilimandjaro, puis le Serengeti.",
      tagline: "Le golf du Kilimandjaro, le Serengeti et le cratère du Ngorongoro",
      countries: ["Tanzanie"],
      region: "Afrique de l’Est",
      nights: 10,
      rounds: 2,
      gameDrives: 8,
      priceFrom: 7400,
      tier: "signature",
      featured: true,
      bestMonths: "Juin – oct., déc. – mars (mises bas)",
      photo: "kilimanjaro",
      route: ["Kilimanjaro", "Centre du Serengeti", "Nord du Serengeti", "Ngorongoro"],
      intro: "Deux parties avec la montagne en toile de fond, puis huit safaris sur la plus grande scène animalière du monde, pour finir au fond du cratère.",
      highlights: [
        "Kilimanjaro Golf & Wildlife Estate",
        "Le centre du Serengeti et les traversées de rivière au nord",
        "Descente dans le cratère du Ngorongoro",
        "Une matinée avec une communauté maasaï"
      ],
      courses: [
        { name: "Kilimanjaro Golf & Wildlife Estate", par: 72, note: "Un tracé de David Jones où zèbres et girafes broutent sur les fairways." },
        { name: "Sea Cliff Resort, Zanzibar (extension facultative)", par: 36, note: "Neuf trous au bord de l’océan pour l’extension balnéaire." }
      ],
      stays: ["Kili Golf Villas", "Namiri Plains", "The Highlands Ngorongoro (ou similaire)"],
      itinerary: [
        { day: 1, title: "Arrivée au Kilimandjaro", text: "Transfert à votre villa sur le domaine de golf." },
        { day: 2, title: "Golf du Kilimandjaro", text: "Première partie, le Meru et le Kilimandjaro derrière le green." },
        { day: 3, title: "Golf du Kilimandjaro", text: "Deuxième partie, dîner d’adieu au club-house." },
        { day: 4, title: "Vol pour le Serengeti", text: "Petit avion vers le centre du Serengeti. Safari l’après-midi." },
        { day: 5, title: "Serengeti", text: "Journée entière dans la vallée de Seronera, pays du lion et du léopard." },
        { day: 6, title: "Serengeti", text: "Suivre la migration ou les guépards dans les plaines de l’est. Dîner en brousse." },
        { day: 7, title: "Nord du Serengeti", text: "En saison, les traversées de la rivière Mara. Sinon, les kopjes de Moru et les rhinocéros." },
        { day: 8, title: "Ngorongoro", text: "Route à travers les hauts plateaux du cratère jusqu’à un lodge sur le bord." },
        { day: 9, title: "Fond du cratère", text: "Descente à l’aube, pique-nique près de la mare aux hippopotames, rhinocéros noir." },
        { day: 10, title: "Village maasaï et Arusha", text: "Matinée culturelle, dernière nuit à Arusha." },
        { day: 11, title: "Départ", text: "Transfert à l’aéroport international du Kilimandjaro, ou vol vers Zanzibar." }
      ]
    },
    {
      id: "victoria-falls-chobe",
      name: "Falls & Fairways",
      strap: "La fumée qui gronde, et la capitale africaine de l’éléphant.",
      tagline: "Chutes Victoria, Elephant Hills et Chobe",
      countries: ["Zimbabwe", "Botswana"],
      region: "Afrique australe",
      nights: 6,
      rounds: 2,
      gameDrives: 4,
      priceFrom: 3950,
      tier: "signature",
      featured: false,
      bestMonths: "Mai – oct.",
      photo: "g_bigTree",
      route: ["Chutes Victoria", "Chobe"],
      intro: "Deux parties à Elephant Hills avec des phacochères sur les fairways, une visite guidée des chutes, et trois nuits au bord du Chobe en bateau et en 4x4.",
      highlights: [
        "Elephant Hills Golf Course au bord du Zambèze",
        "Visite guidée des chutes Victoria",
        "Parc national de Chobe en bateau et en 4x4",
        "Croisière au coucher du soleil sur le Zambèze"
      ],
      courses: [
        { name: "Elephant Hills Golf Course", par: 72, note: "Un tracé Gary Player avec les embruns des chutes à l’horizon." },
        { name: "Borrowdale Brooke, Harare (facultatif)", par: 72, note: "Pour ceux qui passent par Harare." }
      ],
      stays: ["Victoria Falls Hotel", "Chobe Game Lodge (ou similaire)"],
      itinerary: [
        { day: 1, title: "Arrivée aux chutes Victoria", text: "Transfert au Victoria Falls Hotel. Croisière au coucher du soleil sur le Zambèze." },
        { day: 2, title: "Les chutes et Elephant Hills", text: "Visite guidée des chutes le matin. Partie l’après-midi." },
        { day: 3, title: "Elephant Hills", text: "Deuxième partie. Soirée au dîner et spectacle de tambours du Boma." },
        { day: 4, title: "Passage au Chobe", text: "Transfert par la route via la frontière de Kazungula. Croisière sur le fleuve l’après-midi." },
        { day: 5, title: "Parc national de Chobe", text: "Sortie à l’aube le long du fleuve, l’après-midi en bateau." },
        { day: 6, title: "Parc national de Chobe", text: "Journée entière dans le parc. Hélicoptère au-dessus des chutes en option au retour." },
        { day: 7, title: "Départ", text: "Transfert à l’aéroport de Kasane ou des chutes Victoria." }
      ]
    },
    {
      id: "mauritius-kruger",
      name: "Maurice & Kruger",
      strap: "Fairways de l’océan Indien et une concession privée du Kruger.",
      tagline: "Cinq parties dans deux pays, la brousse et la plage",
      countries: ["Maurice", "Afrique du Sud"],
      region: "Océan Indien et Afrique australe",
      nights: 11,
      rounds: 5,
      gameDrives: 6,
      priceFrom: 8900,
      tier: "signature",
      featured: false,
      bestMonths: "Mai – oct.",
      photo: "g_seaCourse",
      route: ["Bel Ombre", "Côte est de Maurice", "Grand Kruger"],
      intro: "Les deux parcours Heritage et l’Île aux Cerfs en bateau, puis une concession privée du grand Kruger avec des parties à Skukuza et Leopard Creek entre les safaris.",
      highlights: [
        "Heritage Le Château et La Réserve",
        "L’Île aux Cerfs, accessible en bateau",
        "Safari en concession privée dans le grand Kruger",
        "Skukuza Golf Club, sans clôture au cœur du parc"
      ],
      courses: [
        { name: "Heritage Le Château", par: 72, note: "Hôte de l’AfrAsia Bank Mauritius Open." },
        { name: "Heritage La Réserve", par: 72, note: "Le plus récent tracé de Peter Matkovich, ouvert en 2023." },
        { name: "Île aux Cerfs", par: 72, note: "Accessible en bateau, avec vue sur la mer depuis chaque trou." },
        { name: "Leopard Creek", par: 72, note: "Le voisin du Kruger et l’un des plus beaux d’Afrique." },
        { name: "Skukuza Golf Club", par: 72, note: "Neuf trous sans clôture à l’intérieur du parc national Kruger." }
      ],
      stays: ["Heritage Le Telfair", "Constance Prince Maurice", "Singita Lebombo ou Royal Malewane (ou similaire)"],
      itinerary: [
        { day: 1, title: "Arrivée à Maurice", text: "Transfert au Heritage Le Telfair sur la côte sud." },
        { day: 2, title: "Heritage Le Château", text: "Partie au Château. Après-midi à la plage." },
        { day: 3, title: "Heritage La Réserve", text: "Le plus récent parcours de l’île. Catamaran au coucher du soleil." },
        { day: 4, title: "Transfert vers l’est", text: "Installation au Constance Prince Maurice, dauphins en chemin." },
        { day: 5, title: "Île aux Cerfs", text: "Transfert en bateau et partie. Déjeuner sur l’île." },
        { day: 6, title: "Journée libre", text: "Spa, snorkeling, ou le parcours Legend au Prince Maurice." },
        { day: 7, title: "Vol pour le Kruger", text: "Via Johannesburg jusqu’à Skukuza. Safari l’après-midi dans la concession." },
        { day: 8, title: "Concession privée", text: "Sorties à l’aube et au crépuscule, pistage hors piste, safaris de nuit." },
        { day: 9, title: "Skukuza Golf Club", text: "Partie le matin sur le parcours sans clôture du Kruger, safari l’après-midi." },
        { day: 10, title: "Leopard Creek", text: "Partie à Leopard Creek et dernier safari au coucher du soleil." },
        { day: 11, title: "Dernière matinée de safari", text: "Dernière sortie, brunch, marche dans la brousse avec votre ranger." },
        { day: 12, title: "Départ", text: "Vol de Skukuza à Johannesburg." }
      ]
    },
    {
      id: "uganda-short-break",
      name: "Gorilles et rives du lac",
      strap: "L’heure la plus bouleversante du voyage, encadrée par le golf.",
      tagline: "Le parcours au bord du lac d’Entebbe et les gorilles de Bwindi",
      countries: ["Ouganda"],
      region: "Afrique de l’Est",
      nights: 5,
      rounds: 1,
      gameDrives: 2,
      priceFrom: 3600,
      tier: "signature",
      featured: false,
      bestMonths: "Juin – sept., déc. – févr.",
      photo: "highlands",
      route: ["Entebbe", "Bwindi", "Lac Bunyonyi"],
      intro: "Le plus ancien parcours d’Afrique de l’Est sur la rive du lac Victoria, puis une heure avec une famille de gorilles des montagnes dans la forêt impénétrable de Bwindi. Court, intense, inoubliable.",
      highlights: [
        "Entebbe Golf Club, fondé en 1901",
        "Trekking des gorilles à Bwindi, permis inclus",
        "Safari en canoë sur le lac Bunyonyi",
        "Sanctuaire de chimpanzés de l’île de Ngamba"
      ],
      courses: [
        { name: "Entebbe Golf Club", par: 71, note: "Le plus ancien parcours d’Afrique de l’Est, au bord du lac Victoria." },
        { name: "Uganda Golf Club, Kampala (facultatif)", par: 72, note: "Hôte de l’Open d’Ouganda." }
      ],
      stays: ["Hotel No. 5 Entebbe", "Bwindi Lodge (ou similaire)"],
      itinerary: [
        { day: 1, title: "Arrivée à Entebbe", text: "Transfert au Hotel No. 5, à quelques pas du club de golf." },
        { day: 2, title: "Entebbe Golf Club", text: "Partie à Entebbe, puis bateau vers l’île de Ngamba." },
        { day: 3, title: "Vol pour Bwindi", text: "Vol régulier jusqu’à Kihihi et transfert jusqu’à la lisière de la forêt." },
        { day: 4, title: "Trekking des gorilles", text: "Trek avec les rangers pour passer une heure avec une famille habituée à l’homme." },
        { day: 5, title: "Lac Bunyonyi", text: "Safari en canoë et visite communautaire. Retour à Bwindi." },
        { day: 6, title: "Départ", text: "Vol retour vers Entebbe et votre correspondance." }
      ]
    },
    {
      id: "morocco-sahara",
      name: "Marrakech et le Sahara",
      strap: "Trois parties au pied de l’Atlas, puis une nuit dans les dunes.",
      tagline: "Les meilleurs parcours de Marrakech, l’Agafay au coucher du soleil et un camp dans l’Erg Chebbi",
      countries: ["Maroc"],
      region: "Afrique du Nord",
      nights: 8,
      rounds: 3,
      gameDrives: 3,
      priceFrom: 4200,
      tier: "signature",
      featured: true,
      bestMonths: "Mars – mai, sept. – nov.",
      photo: "sahara",
      route: ["Marrakech", "Désert d’Agafay", "Gorges du Dadès", "Erg Chebbi", "Marrakech"],
      intro: "Un safari dans le désert encadré de golf. Trois jours à Marrakech sur les parcours qui ont fait de la ville une destination golfique, un dîner dans l’Agafay, puis la route par-dessus l’Atlas, à travers gorges et kasbahs, jusqu’à l’Erg Chebbi, où les dromadaires vous emmènent dans les dunes pour la nuit.",
      highlights: [
        "Assoufid, Royal Golf Marrakech et Al Maaden",
        "Dîner au coucher du soleil dans un camp de luxe du désert de pierres d’Agafay",
        "Le col du Tizi n’Tichka, Aït Benhaddou et les gorges du Dadès",
        "Une nuit dans un camp de tentes privé au milieu des dunes de l’Erg Chebbi"
      ],
      courses: [
        { name: "Assoufid Golf Club", par: 72, note: "Du golf de désert avec vue sur l’Atlas, le meilleur parcours du pays." },
        { name: "Royal Golf Marrakech", par: 72, note: "Le parcours de 1923 entre oliviers et cyprès." },
        { name: "Al Maaden Golf Resort", par: 72, note: "Kyle Phillips, à dix minutes de la médina." }
      ],
      stays: ["La Mamounia", "Scarabeo Camp, Agafay", "Dar Ahlam, Skoura (ou similaire)", "Camp de luxe dans le désert de Merzouga"],
      itinerary: [
        { day: 1, title: "Arrivée à Marrakech", text: "Transfert privé à La Mamounia. Soirée dans la médina avec votre accompagnateur." },
        { day: 2, title: "Assoufid", text: "Partie le matin à Assoufid. L’après-midi, jardin Majorelle ou souks." },
        { day: 3, title: "Royal Golf Marrakech · Agafay", text: "Partie au Royal, puis direction l’Agafay pour les dromadaires au coucher du soleil et un dîner sous les étoiles au Scarabeo Camp." },
        { day: 4, title: "Al Maaden", text: "Retour en ville pour une partie à Al Maaden. Hammam et dîner à l’hôtel." },
        { day: 5, title: "Par-dessus l’Atlas", text: "Route par le col du Tizi n’Tichka jusqu’à la kasbah d’Aït Benhaddou, puis jusqu’à la palmeraie de Skoura pour la nuit." },
        { day: 6, title: "Gorges du Dadès et du Todra", text: "À travers les gorges et les oasis du Tafilalt jusqu’à Merzouga. Méharée dans les dunes au coucher du soleil ; nuit au camp dans l’Erg Chebbi." },
        { day: 7, title: "Erg Chebbi", text: "Lever de soleil depuis le sommet des dunes, 4x4 vers les campements nomades et les gisements de fossiles, sandboard. Deuxième nuit au camp, ou dans une kasbah du désert." },
        { day: 8, title: "Retour à Marrakech", text: "Vol depuis Errachidia, ou la longue route du retour. Dîner d’adieu." },
        { day: 9, title: "Départ", text: "Transfert à l’aéroport de Marrakech." }
      ]
    },
    {
      id: "madagascar-lemurs",
      name: "Lémuriens et hautes terres",
      strap: "L’indri à l’aube, les baobabs au crépuscule, et une partie au-dessus d’Antananarivo.",
      tagline: "Le Golf du Rova, la forêt tropicale d’Andasibe, l’allée des baobabs et les îles de Nosy Be",
      countries: ["Madagascar"],
      region: "Océan Indien",
      nights: 9,
      rounds: 1,
      gameDrives: 7,
      priceFrom: 5200,
      tier: "signature",
      featured: false,
      bestMonths: "Avr. – nov.",
      photo: "indri",
      route: ["Antananarivo", "Andasibe-Mantadia", "Forêt de Kirindy", "Nosy Be"],
      intro: "Madagascar est un safari pas comme les autres : pas de Big Five, mais une distribution d’animaux qu’on ne trouve nulle part ailleurs, rencontrés à pied dans la forêt. Une partie dans les collines autour de la capitale ouvre le voyage ; l’indri, le fossa et les baobabs suivent, et la plage de Nosy Be le conclut.",
      highlights: [
        "L’International Golf du Rova, le seul dix-huit trous du pays",
        "Le chœur de l’indri à l’aube à Andasibe, avec des marches de nuit pour les caméléons",
        "Pistage du fossa à Kirindy et l’allée des baobabs au coucher du soleil",
        "Lémuriens noirs, récifs et lodge sur une île privée au large de Nosy Be"
      ],
      courses: [
        { name: "International Golf du Rova", par: 72, note: "Parcours vallonné à Andakana, avec un hôtel au club-house." }
      ],
      stays: ["Golf du Rova Hotel", "Mantadia Lodge, Andasibe", "Camp de la forêt de Kirindy", "Constance Tsarabanjina"],
      itinerary: [
        { day: 1, title: "Arrivée à Antananarivo", text: "Transfert à l’hôtel du Golf du Rova dans les collines, à vingt kilomètres de la ville." },
        { day: 2, title: "Golf du Rova", text: "Partie le matin, puis route vers l’est à travers les hauts plateaux jusqu’à Andasibe." },
        { day: 3, title: "Andasibe", text: "L’aube à Analamazaotra pour l’indri, l’après-midi à Mantadia, marche de nuit pour les caméléons et les microcèbes." },
        { day: 4, title: "Andasibe", text: "Une journée entière en forêt tropicale avec votre guide : sifakas, hapalémurs et le sentier des orchidées." },
        { day: 5, title: "Vol pour Morondava", text: "Retour à Antananarivo et vol vers l’ouest. Coucher du soleil sur l’allée des baobabs." },
        { day: 6, title: "Kirindy", text: "Marches en forêt sèche pour le propithèque de Verreaux et le fossa ; marche de nuit pour le rat sauteur géant." },
        { day: 7, title: "Vol pour Nosy Be", text: "Via Antananarivo jusqu’à Nosy Be, puis en bateau jusqu’à Tsarabanjina." },
        { day: 8, title: "Lokobe", text: "Pirogue jusqu’à la réserve de Lokobe pour les lémuriens noirs et les boas, après-midi sur le récif." },
        { day: 9, title: "Journée sur l’île", text: "Snorkeling, voile, ou requins-baleines en saison." },
        { day: 10, title: "Départ", text: "Bateau et vol jusqu’à Antananarivo pour votre correspondance." }
      ]
    },
    {
      id: "benin-pendjari",
      name: "Pendjari et la lagune",
      strap: "Le parc le plus sauvage d’Afrique de l’Ouest, et une partie sur son plus récent parcours.",
      tagline: "Cotonou, Ganvié en pirogue, Ouidah, et quatre nuits dans la Pendjari",
      countries: ["Bénin"],
      region: "Afrique de l’Ouest",
      nights: 7,
      rounds: 1,
      gameDrives: 7,
      priceFrom: 4600,
      tier: "signature",
      featured: false,
      bestMonths: "Déc. – avr.",
      photo: "eleRoad",
      route: ["Cotonou", "Lac Nokoué", "Ouidah", "Pendjari"],
      intro: "Le Bénin associe le safari de grande faune le plus abouti d’Afrique de l’Ouest à une côte de lagunes, de villages sur pilotis et d’histoire, et désormais un parcours de championnat entre les deux. En saison sèche, les safaris dans la Pendjari, gérée par African Parks, trouvent éléphants, lions et buffles aux points d’eau.",
      highlights: [
        "L’Ouidah Golf Club à Avlékété, le premier dix-huit trous du Bénin",
        "Ganvié, la cité lacustre sur le lac Nokoué, en pirogue",
        "La route des esclaves de Ouidah et la Porte du non-retour",
        "Quatre nuits dans la Pendjari avec guide et véhicule privés"
      ],
      courses: [
        { name: "Ouidah Golf Club, Avlékété", par: 72, note: "Le parcours de Jeremy Pern entre la lagune et l’Atlantique." }
      ],
      stays: ["Sofitel Cotonou Marina", "Pendjari Lodge"],
      itinerary: [
        { day: 1, title: "Arrivée à Cotonou", text: "Accueil à l’arrivée et transfert au Sofitel sur la marina." },
        { day: 2, title: "Ganvié", text: "Matinée en pirogue à travers la cité lacustre du lac Nokoué. L’après-midi, le marché Dantokpa de Cotonou." },
        { day: 3, title: "Avlékété", text: "Partie à l’Ouidah Golf Club, puis la route des esclaves jusqu’à la Porte du non-retour et le temple des pythons à Ouidah." },
        { day: 4, title: "Vol vers le nord", text: "Vol pour Natitingou et transfert dans la Pendjari. Safari l’après-midi jusqu’à la mare Bali." },
        { day: 5, title: "Pendjari", text: "Safaris à l’aube et au crépuscule le long de la rivière Pendjari : éléphants, buffles, hippopotames et lions." },
        { day: 6, title: "Pendjari", text: "Journée entière avec votre guide dans les contreforts de l’Atacora et aux chutes de Tanougou." },
        { day: 7, title: "Pendjari", text: "Derniers safaris, une marche avec les rangers et un dernier apéritif au point d’eau." },
        { day: 8, title: "Départ", text: "Vol retour vers Cotonou et votre correspondance." }
      ]
    }
  ];

  var DESTINATIONS = [
    {
      id: "kenya",
      name: "Kenya",
      strap: "Le pays d’origine du safari, avec un golf qui remonte à un siècle.",
      photo: "g_greenSunrise",
      text: "Nairobi compte trois parcours de championnat à moins de quarante minutes les uns des autres, et les conservancies du Mara sont à une heure de vol. C’est l’endroit d’Afrique où il est le plus facile d’alterner partie et safari sans perdre une journée.",
      courses: ["Karen Country Club", "Muthaiga Golf Club", "Windsor Golf Hotel", "Vipingo Ridge"],
      parks: ["Masai Mara", "Amboseli", "Laikipia", "Lewa"],
      journeys: ["kenya-classic", "grand-crossing"]
    },
    {
      id: "tanzania",
      name: "Tanzanie",
      strap: "Le Serengeti, le cratère, et un parcours au pied de la montagne.",
      photo: "g_mtnWalk",
      text: "La Tanzanie, c’est le safari à son échelle la plus vaste. Un superbe parcours au pied du Kilimandjaro ouvre le voyage, et le reste est une faune d’une ampleur sans égal, conclue par une descente dans le cratère du Ngorongoro.",
      courses: ["Kilimanjaro Golf & Wildlife Estate", "Sea Cliff Resort, Zanzibar"],
      parks: ["Serengeti", "Cratère du Ngorongoro", "Tarangire", "Lac Manyara"],
      journeys: ["tanzania-grand"]
    },
    {
      id: "south-africa",
      name: "Afrique du Sud",
      strap: "Le golf le plus riche du continent, et les léopards de Sabi Sand.",
      photo: "g_flagMist",
      text: "Fancourt, Pearl Valley et Leopard Creek justifieraient à eux seuls le vol. Ajoutez les Winelands, la Route des Jardins et une réserve privée à la limite du Kruger, et vous avez le premier safari golf par excellence.",
      courses: ["Fancourt The Links", "Fancourt Montagu", "Pearl Valley", "Leopard Creek", "Skukuza Golf Club", "Arabella"],
      parks: ["Sabi Sand", "Parc national Kruger", "Timbavati", "Madikwe"],
      journeys: ["south-africa-signature", "grand-crossing", "mauritius-kruger"]
    },
    {
      id: "victoria-falls",
      name: "Chutes Victoria et Chobe",
      strap: "Des éléphants par milliers, et une partie au bord du Zambèze.",
      photo: "elephantsSunset",
      text: "Elephant Hills est le seul parcours au monde d’où l’on voit depuis le départ les embruns d’une merveille naturelle. De l’autre côté de la frontière, Chobe abrite la plus grande population d’éléphants d’Afrique, à voir de préférence depuis le fleuve au coucher du soleil.",
      courses: ["Elephant Hills", "Borrowdale Brooke"],
      parks: ["Chutes Victoria", "Chobe", "Hwange", "Parc national du Zambèze"],
      journeys: ["victoria-falls-chobe", "grand-crossing"]
    },
    {
      id: "mauritius",
      name: "Maurice",
      strap: "Du golf de niveau tournoi sur une île, à un court vol de la brousse.",
      photo: "g_palmsWater",
      text: "Maurice accueille le DP World Tour et compte plus de golf de championnat au kilomètre carré que n’importe où ailleurs en Afrique. Elle s’associe naturellement au Kruger pour une quinzaine brousse et plage.",
      courses: ["Heritage Le Château", "Heritage La Réserve", "Île aux Cerfs", "Anahita", "Paradis"],
      parks: ["Gorges de Rivière Noire", "Île aux Aigrettes"],
      journeys: ["mauritius-kruger"]
    },
    {
      id: "uganda",
      name: "Ouganda",
      strap: "Les gorilles en forêt, le golf au bord du lac.",
      photo: "highlands",
      text: "Une courte escapade avec une partie au plus ancien club d’Afrique de l’Est et l’heure la plus émouvante qui soit en voyage. L’Ouganda se suffit à lui-même, ou s’ajoute en trois nuits au Kenya.",
      courses: ["Entebbe Golf Club", "Uganda Golf Club"],
      parks: ["Forêt impénétrable de Bwindi", "Queen Elizabeth", "Lac Bunyonyi", "Murchison Falls"],
      journeys: ["uganda-short-break"]
    },
    {
      id: "morocco",
      name: "Maroc",
      strap: "Le plus beau golf au nord du Cap, et un safari dans le désert à dos de dromadaire et en 4x4.",
      photo: "sahara",
      text: "Marrakech compte trois parcours qui valent de traverser un continent, avec l’Atlas derrière chaque green, et le Sahara commence à une journée de route.",
      courses: ["Assoufid", "Royal Golf Marrakech", "Al Maaden", "Royal Golf Dar Es Salam", "Tazegzout"],
      parks: ["Agafay", "Erg Chebbi", "Erg Chigaga", "Toubkal"],
      journeys: ["morocco-sahara"]
    },
    {
      id: "madagascar",
      name: "Madagascar",
      strap: "Lémuriens, baobabs et tsingy de calcaire, avec une partie au-dessus de la capitale.",
      photo: "indri",
      text: "Un safari à pied parmi des animaux qu’on ne voit nulle part ailleurs, un parcours mûr aux portes d’Antananarivo, et les îles de Nosy Be pour finir.",
      courses: ["International Golf du Rova"],
      parks: ["Andasibe-Mantadia", "Kirindy", "Isalo", "Nosy Be"],
      journeys: ["madagascar-lemurs"]
    },
    {
      id: "benin",
      name: "Bénin",
      strap: "Le meilleur safari de savane d’Afrique de l’Ouest et un tout nouveau parcours de championnat.",
      photo: "ganvie",
      text: "Les éléphants et lions de la Pendjari en saison sèche, Ganvié sur la lagune, et le premier dix-huit trous du pays à Avlékété.",
      courses: ["Ouidah Golf Club"],
      parks: ["Pendjari", "Parc national du W", "Lac Nokoué"],
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
      address: "Kofisi Riverside, 104 Riverside Drive, Nairobi, Kenya"
    }
  };
})();
