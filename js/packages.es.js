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
      strap: "Si solo va a hacer África una vez, este es el viaje.",
      tagline: "De Ciudad del Cabo al Masái Mara en una sola travesía sin interrupciones",
      countries: ["Sudáfrica", "Zimbabue", "Kenia"],
      region: "África Oriental y austral",
      nights: 14,
      rounds: 5,
      gameDrives: 9,
      priceFrom: 18500,
      tier: "flagship",
      featured: true,
      bestMonths: "Jul – oct",
      photo: "g_linksGold",
      route: ["Ciudad del Cabo", "La región vinícola", "Sabi Sand", "Cataratas Victoria", "Nairobi", "Masái Mara"],
      intro: "Cuatro lugares emblemáticos del continente, el golf entretejido y ni un día perdido. The Links en Fancourt, un leopardo en Sabi Sand, la espuma de las cataratas en los segundos nueve y el Mara en tiempo de migración.",
      highlights: [
        "Fancourt The Links y Pearl Valley en El Cabo",
        "Tres noches en Sabi Sand, la capital africana del leopardo",
        "Elephant Hills con la espuma de las cataratas en el horizonte",
        "Karen Country Club y después cuatro noches en el Mara"
      ],
      courses: [
        { name: "Pearl Valley", par: 72, note: "Campo firmado por Jack Nicklaus entre los viñedos de Paarl." },
        { name: "Fancourt — The Links", par: 73, note: "La sede de la Presidents Cup de Gary Player y el número uno de Sudáfrica." },
        { name: "Leopard Creek", par: 72, note: "A orillas del río Crocodile, junto al Kruger." },
        { name: "Elephant Hills", par: 72, note: "Facóqueros en las calles y las cataratas Victoria al fondo." },
        { name: "Karen Country Club", par: 72, note: "El clásico campo de parque de Nairobi bajo las colinas de Ngong." }
      ],
      stays: ["La Residence, Franschhoek", "Fancourt Hotel", "Londolozi (o similar)", "Victoria Falls Hotel", "Hemingways Nairobi", "Mara Plains Camp (o similar)"],
      itinerary: [
        { day: 1, title: "Llegada a Ciudad del Cabo", text: "Recepción a la llegada y traslado a Franschhoek. Una primera copa de Cap Classique en la terraza." },
        { day: 2, title: "Pearl Valley", text: "Vuelta inaugural en Pearl Valley. Por la tarde, tranvía del vino por el valle." },
        { day: 3, title: "Ciudad del Cabo", text: "La Montaña de la Mesa en teleférico, Cape Point y cena en el Waterfront." },
        { day: 4, title: "Vuelo a George", text: "Traslado a Fancourt. Calentamiento en el campo de Bramble Hill." },
        { day: 5, title: "Fancourt The Links", text: "Su día en el mejor campo del país, caddies incluidos." },
        { day: 6, title: "Vuelo a Sabi Sand", text: "De George a Skukuza vía Johannesburgo. Primer safari al anochecer." },
        { day: 7, title: "Sabi Sand", text: "Safaris al amanecer y al anochecer con los famosos rastreadores de leopardos de la reserva." },
        { day: 8, title: "Leopard Creek", text: "Una vuelta con hipopótamos bajo el 13 y después un safari nocturno." },
        { day: 9, title: "Vuelo a las cataratas Victoria", text: "Crucero al atardecer por el Zambeze desde el Victoria Falls Hotel." },
        { day: 10, title: "Elephant Hills", text: "Paseo matinal hasta las cataratas y vuelta por la tarde en Elephant Hills." },
        { day: 11, title: "Vuelo a Nairobi", text: "Vía Johannesburgo a Nairobi. Cena en el Talisman de Karen." },
        { day: 12, title: "Karen Country Club", text: "Vuelta en Karen y después avioneta al Mara." },
        { day: 13, title: "Masái Mara", text: "Día completo en las llanuras. En temporada, los cruces del río." },
        { day: 14, title: "Masái Mara", text: "Globo al amanecer, desayuno en la sabana y un último aperitivo al atardecer." },
        { day: 15, title: "Salida", text: "Vuelo a Nairobi para su conexión." }
      ]
    },
    {
      id: "kenya-classic",
      name: "Kenya Classic",
      strap: "El safari de golf original.",
      tagline: "Los campos de campeonato de Nairobi y el Masái Mara",
      countries: ["Kenia"],
      region: "África Oriental",
      nights: 7,
      rounds: 3,
      gameDrives: 5,
      priceFrom: 4950,
      tier: "signature",
      featured: true,
      bestMonths: "Jul – oct (Gran Migración), ene – feb",
      photo: "g_caddie",
      route: ["Nairobi", "Masái Mara"],
      intro: "Tres vueltas en los legendarios campos de parque de Nairobi y después cuatro noches en una reserva privada del Mara donde lo importante son los felinos y las multitudes están en otra parte.",
      highlights: [
        "Karen Country Club y Muthaiga Golf Club",
        "Cruces de río de la Gran Migración, en temporada",
        "Aperitivo al atardecer en las llanuras del Mara",
        "Safari en globo al amanecer opcional"
      ],
      courses: [
        { name: "Karen Country Club", par: 72, note: "Campo de parque arbolado al pie de las colinas de Ngong." },
        { name: "Muthaiga Golf Club", par: 72, note: "La casa del golf keniano y sede del Abierto de Kenia." },
        { name: "Vipingo Ridge (extensión opcional)", par: 72, note: "Campo costero acreditado por la PGA al norte de Mombasa." }
      ],
      stays: ["Hemingways Nairobi", "Mara Plains Camp (o similar)"],
      itinerary: [
        { day: 1, title: "Llegada a Nairobi", text: "Recepción en el aeropuerto internacional Jomo Kenyatta. Traslado al Hemingways Nairobi y reunión de bienvenida con su anfitrión." },
        { day: 2, title: "Karen Country Club", text: "Vuelta por la mañana en Karen, almuerzo en la casa club y tarde en el Giraffe Centre." },
        { day: 3, title: "Muthaiga Golf Club", text: "18 hoyos en el club con más historia de Kenia. Cena en el Talisman." },
        { day: 4, title: "Vuelo al Mara", text: "Avioneta al Mara. Safari por la tarde de camino al campamento." },
        { day: 5, title: "Día completo de safari", text: "Safaris al amanecer y al anochecer en la reserva con desayuno en la sabana. Vuelo en globo opcional." },
        { day: 6, title: "Día completo de safari", text: "Tras los grandes felinos con su guía privado. Aperitivo al atardecer y cena bajo las estrellas." },
        { day: 7, title: "Del Mara a Nairobi", text: "Último safari matinal y vuelo a Nairobi. Una vuelta de despedida en Windsor para salidas tardías." },
        { day: 8, title: "Salida", text: "Traslado al aeropuerto o continuación a la costa para Vipingo Ridge." }
      ]
    },
    {
      id: "south-africa-signature",
      name: "South Africa Signature",
      strap: "La Ruta Jardín, la región vinícola y Sabi Sand.",
      tagline: "Cuatro de los mejores campos del país y una reserva de los Cinco Grandes",
      countries: ["Sudáfrica"],
      region: "África austral",
      nights: 9,
      rounds: 4,
      gameDrives: 6,
      priceFrom: 6850,
      tier: "signature",
      featured: true,
      bestMonths: "Mar – may, sep – nov",
      photo: "g_savannaCourse",
      route: ["Franschhoek", "Ciudad del Cabo", "Fancourt", "Sabi Sand"],
      intro: "The Links y Montagu en Fancourt, Pearl Valley entre viñas, Leopard Creek junto al Kruger y tres noches en Sabi Sand entre medias.",
      highlights: [
        "Fancourt Montagu y The Links",
        "Pearl Valley en la región vinícola del Cabo",
        "Rastreo de leopardos en Sabi Sand",
        "Cata de vinos en Franschhoek"
      ],
      courses: [
        { name: "Fancourt — The Links", par: 73, note: "La sede de la Presidents Cup de Gary Player, número uno de Sudáfrica." },
        { name: "Fancourt — Montagu", par: 72, note: "Obra maestra de parque al pie de los montes Outeniqua." },
        { name: "Pearl Valley", par: 72, note: "Campo firmado por Jack Nicklaus entre los viñedos de Paarl." },
        { name: "Leopard Creek", par: 72, note: "Junto al Kruger, donde hipopótamos y cocodrilos bordean el 13." }
      ],
      stays: ["Fancourt Hotel", "La Residence, Franschhoek", "Londolozi o Singita Sabi Sand (o similar)"],
      itinerary: [
        { day: 1, title: "Llegada a Ciudad del Cabo", text: "Traslado privado a Franschhoek y La Residence." },
        { day: 2, title: "Pearl Valley", text: "Vuelta en Pearl Valley. Por la tarde, tranvía del vino." },
        { day: 3, title: "Ciudad del Cabo", text: "Montaña de la Mesa, Cape Point o día de descanso. Cena en el Waterfront." },
        { day: 4, title: "Vuelo a George", text: "Traslado a Fancourt. Práctica por la tarde en Bramble Hill." },
        { day: 5, title: "Fancourt Montagu", text: "Vuelta en Montagu. Tarde de spa." },
        { day: 6, title: "Fancourt The Links", text: "Su día en el mejor campo de Sudáfrica. Caddies incluidos." },
        { day: 7, title: "Vuelo a Sabi Sand", text: "De George a Skukuza vía Johannesburgo. Safari por la tarde." },
        { day: 8, title: "Sabi Sand", text: "Safaris al amanecer y al anochecer con los rastreadores de leopardos de la reserva." },
        { day: 9, title: "Leopard Creek", text: "Vuelta por la mañana, último safari de tarde y cena en el boma." },
        { day: 10, title: "Salida", text: "Safari matinal, brunch y vuelo de Skukuza a Johannesburgo." }
      ]
    },
    {
      id: "tanzania-grand",
      name: "Tanzania Grand",
      strap: "Golf bajo el Kilimanjaro y después el Serengeti.",
      tagline: "Golf en el Kilimanjaro, el Serengeti y el cráter del Ngorongoro",
      countries: ["Tanzania"],
      region: "África Oriental",
      nights: 10,
      rounds: 2,
      gameDrives: 8,
      priceFrom: 7400,
      tier: "signature",
      featured: true,
      bestMonths: "Jun – oct, dic – mar (partos)",
      photo: "kilimanjaro",
      route: ["Kilimanjaro", "Serengeti central", "Serengeti norte", "Ngorongoro"],
      intro: "Dos vueltas con la montaña de fondo y después ocho safaris por el mayor escenario de fauna del planeta, terminando en el fondo del cráter.",
      highlights: [
        "Kilimanjaro Golf & Wildlife Estate",
        "El Serengeti central y los cruces de río del norte",
        "Descenso al cráter del Ngorongoro",
        "Una mañana con una comunidad masái"
      ],
      courses: [
        { name: "Kilimanjaro Golf & Wildlife Estate", par: 72, note: "Un diseño de David Jones donde cebras y jirafas pastan en las calles." },
        { name: "Sea Cliff Resort, Zanzíbar (extensión opcional)", par: 36, note: "Nueve hoyos junto al océano para la extensión de playa." }
      ],
      stays: ["Kili Golf Villas", "Namiri Plains", "The Highlands Ngorongoro (o similar)"],
      itinerary: [
        { day: 1, title: "Llegada al Kilimanjaro", text: "Traslado a su villa en la finca de golf." },
        { day: 2, title: "Golf en el Kilimanjaro", text: "Primera vuelta, con el Meru y el Kilimanjaro detrás del green." },
        { day: 3, title: "Golf en el Kilimanjaro", text: "Segunda vuelta y cena de despedida en la casa club." },
        { day: 4, title: "Vuelo al Serengeti", text: "Avioneta al Serengeti central. Safari por la tarde." },
        { day: 5, title: "Serengeti", text: "Día completo en el valle de Seronera, tierra de leones y leopardos." },
        { day: 6, title: "Serengeti", text: "Seguir la migración o a los guepardos por las llanuras del este. Cena en la sabana." },
        { day: 7, title: "Serengeti norte", text: "En temporada, los cruces del río Mara. Si no, los kopjes de Moru y los rinocerontes." },
        { day: 8, title: "Ngorongoro", text: "Trayecto por las tierras altas del cráter hasta un lodge en el borde." },
        { day: 9, title: "Fondo del cráter", text: "Descenso al amanecer, picnic junto a la charca de los hipopótamos y rinoceronte negro." },
        { day: 10, title: "Poblado masái y Arusha", text: "Mañana cultural y última noche en Arusha." },
        { day: 11, title: "Salida", text: "Traslado al aeropuerto internacional del Kilimanjaro o vuelo a Zanzíbar." }
      ]
    },
    {
      id: "victoria-falls-chobe",
      name: "Falls & Fairways",
      strap: "El humo que truena y la capital africana del elefante.",
      tagline: "Cataratas Victoria, Elephant Hills y Chobe",
      countries: ["Zimbabue", "Botsuana"],
      region: "África austral",
      nights: 6,
      rounds: 2,
      gameDrives: 4,
      priceFrom: 3950,
      tier: "signature",
      featured: false,
      bestMonths: "May – oct",
      photo: "g_bigTree",
      route: ["Cataratas Victoria", "Chobe"],
      intro: "Dos vueltas en Elephant Hills con facóqueros en las calles, una visita guiada a las cataratas y tres noches junto al Chobe en barca y en 4x4.",
      highlights: [
        "Elephant Hills Golf Course junto al Zambeze",
        "Visita guiada a las cataratas Victoria",
        "Parque Nacional de Chobe en barca y en 4x4",
        "Crucero al atardecer por el Zambeze"
      ],
      courses: [
        { name: "Elephant Hills Golf Course", par: 72, note: "Un diseño de Gary Player con la espuma de las cataratas en el horizonte." },
        { name: "Borrowdale Brooke, Harare (opcional)", par: 72, note: "Para quienes pasan por Harare." }
      ],
      stays: ["Victoria Falls Hotel", "Chobe Game Lodge (o similar)"],
      itinerary: [
        { day: 1, title: "Llegada a las cataratas Victoria", text: "Traslado al Victoria Falls Hotel. Crucero al atardecer por el Zambeze." },
        { day: 2, title: "Las cataratas y Elephant Hills", text: "Visita guiada a las cataratas por la mañana. Vuelta por la tarde." },
        { day: 3, title: "Elephant Hills", text: "Segunda vuelta. Noche de cena y espectáculo de tambores en el Boma." },
        { day: 4, title: "Paso a Chobe", text: "Traslado por carretera por la frontera de Kazungula. Crucero por el río por la tarde." },
        { day: 5, title: "Parque Nacional de Chobe", text: "Safari al amanecer junto al río y tarde en barca." },
        { day: 6, title: "Parque Nacional de Chobe", text: "Día completo en el parque. Helicóptero opcional sobre las cataratas a la vuelta." },
        { day: 7, title: "Salida", text: "Traslado al aeropuerto de Kasane o de Victoria Falls." }
      ]
    },
    {
      id: "mauritius-kruger",
      name: "Mauricio y Kruger",
      strap: "Calles del océano Índico y una concesión privada en el Kruger.",
      tagline: "Cinco vueltas en dos países, la sabana y la playa",
      countries: ["Mauricio", "Sudáfrica"],
      region: "Océano Índico y África austral",
      nights: 11,
      rounds: 5,
      gameDrives: 6,
      priceFrom: 8900,
      tier: "signature",
      featured: false,
      bestMonths: "May – oct",
      photo: "g_seaCourse",
      route: ["Bel Ombre", "Costa este de Mauricio", "Gran Kruger"],
      intro: "Los dos campos Heritage y la Île aux Cerfs en barca, y después una concesión privada en el Gran Kruger con vueltas en Skukuza y Leopard Creek entre safaris.",
      highlights: [
        "Heritage Le Château y La Réserve",
        "La Île aux Cerfs, a la que se llega en barca",
        "Safari en una concesión privada del Gran Kruger",
        "Skukuza Golf Club, sin vallar dentro del parque"
      ],
      courses: [
        { name: "Heritage Le Château", par: 72, note: "Sede del AfrAsia Bank Mauritius Open." },
        { name: "Heritage La Réserve", par: 72, note: "El recorrido más reciente de Peter Matkovich, abierto en 2023." },
        { name: "Île aux Cerfs", par: 72, note: "Se llega en barca, con vistas al mar desde cada hoyo." },
        { name: "Leopard Creek", par: 72, note: "El vecino del Kruger y uno de los mejores de África." },
        { name: "Skukuza Golf Club", par: 72, note: "Nueve hoyos sin vallar dentro del Parque Nacional Kruger." }
      ],
      stays: ["Heritage Le Telfair", "Constance Prince Maurice", "Singita Lebombo o Royal Malewane (o similar)"],
      itinerary: [
        { day: 1, title: "Llegada a Mauricio", text: "Traslado al Heritage Le Telfair en la costa sur." },
        { day: 2, title: "Heritage Le Château", text: "Vuelta en Le Château. Tarde de playa." },
        { day: 3, title: "Heritage La Réserve", text: "El campo más nuevo de la isla. Catamarán al atardecer." },
        { day: 4, title: "Traslado al este", text: "Traslado al Constance Prince Maurice, con delfines por el camino." },
        { day: 5, title: "Île aux Cerfs", text: "Traslado en barca y vuelta. Almuerzo en la isla." },
        { day: 6, title: "Día libre", text: "Spa, esnórquel o el campo Legend del Prince Maurice." },
        { day: 7, title: "Vuelo al Kruger", text: "Vía Johannesburgo a Skukuza. Safari por la tarde en la concesión." },
        { day: 8, title: "Concesión privada", text: "Safaris al amanecer y al anochecer, rastreo fuera de pista y safaris nocturnos." },
        { day: 9, title: "Skukuza Golf Club", text: "Vuelta por la mañana en el campo sin vallar del Kruger y safari por la tarde." },
        { day: 10, title: "Leopard Creek", text: "Vuelta en Leopard Creek y último safari al atardecer." },
        { day: 11, title: "Última mañana de safari", text: "Último safari, brunch y paseo por la sabana con su guarda." },
        { day: 12, title: "Salida", text: "Vuelo de Skukuza a Johannesburgo." }
      ]
    },
    {
      id: "uganda-short-break",
      name: "Gorilas y orillas del lago",
      strap: "La hora más conmovedora de cualquier viaje, entre dos vueltas de golf.",
      tagline: "El campo junto al lago de Entebbe y los gorilas de Bwindi",
      countries: ["Uganda"],
      region: "África Oriental",
      nights: 5,
      rounds: 1,
      gameDrives: 2,
      priceFrom: 3600,
      tier: "signature",
      featured: false,
      bestMonths: "Jun – sep, dic – feb",
      photo: "highlands",
      route: ["Entebbe", "Bwindi", "Lago Bunyonyi"],
      intro: "El campo más antiguo de África Oriental a orillas del lago Victoria y después una hora con una familia de gorilas de montaña en el bosque impenetrable de Bwindi. Breve, intenso, inolvidable.",
      highlights: [
        "Entebbe Golf Club, fundado en 1901",
        "Trekking de gorilas en Bwindi, permiso incluido",
        "Safari en canoa por el lago Bunyonyi",
        "Santuario de chimpancés de la isla de Ngamba"
      ],
      courses: [
        { name: "Entebbe Golf Club", par: 71, note: "El campo más antiguo de África Oriental, junto al lago Victoria." },
        { name: "Uganda Golf Club, Kampala (opcional)", par: 72, note: "Sede del Abierto de Uganda." }
      ],
      stays: ["Hotel No. 5 Entebbe", "Bwindi Lodge (o similar)"],
      itinerary: [
        { day: 1, title: "Llegada a Entebbe", text: "Traslado al Hotel No. 5, a pocos pasos del club de golf." },
        { day: 2, title: "Entebbe Golf Club", text: "Vuelta en Entebbe y después barca a la isla de Ngamba." },
        { day: 3, title: "Vuelo a Bwindi", text: "Vuelo regular a Kihihi y traslado al borde del bosque." },
        { day: 4, title: "Trekking de gorilas", text: "Trekking con los guardas para pasar una hora con una familia habituada." },
        { day: 5, title: "Lago Bunyonyi", text: "Safari en canoa y visita a la comunidad. Regreso a Bwindi." },
        { day: 6, title: "Salida", text: "Vuelo de regreso a Entebbe para su conexión." }
      ]
    },
    {
      id: "morocco-sahara",
      name: "Marrakech y el Sáhara",
      strap: "Tres vueltas bajo el Atlas y después una noche en las dunas.",
      tagline: "Los mejores campos de Marrakech, el Agafay al atardecer y un campamento en el Erg Chebbi",
      countries: ["Marruecos"],
      region: "África del Norte",
      nights: 8,
      rounds: 3,
      gameDrives: 3,
      priceFrom: 4200,
      tier: "signature",
      featured: true,
      bestMonths: "Mar – may, sep – nov",
      photo: "sahara",
      route: ["Marrakech", "Desierto de Agafay", "Gargantas del Dadès", "Erg Chebbi", "Marrakech"],
      intro: "Un safari por el desierto con golf a ambos lados. Tres días en Marrakech en los campos que hicieron de la ciudad un destino de golf, una cena en el Agafay y después la carretera por el Atlas, entre gargantas y kasbahs, hasta el Erg Chebbi, donde los camellos le llevan a pasar la noche entre las dunas.",
      highlights: [
        "Assoufid, Royal Golf Marrakech y Al Maaden",
        "Cena al atardecer en un campamento de lujo en el desierto pedregoso de Agafay",
        "El puerto de Tizi n’Tichka, Aït Benhaddou y las gargantas del Dadès",
        "Una noche en un campamento privado de tiendas entre las dunas del Erg Chebbi"
      ],
      courses: [
        { name: "Assoufid Golf Club", par: 72, note: "Golf de desierto con vistas al Atlas, el mejor campo del país." },
        { name: "Royal Golf Marrakech", par: 72, note: "El campo de 1923 entre olivos y cipreses." },
        { name: "Al Maaden Golf Resort", par: 72, note: "Kyle Phillips, a diez minutos de la medina." }
      ],
      stays: ["La Mamounia", "Scarabeo Camp, Agafay", "Dar Ahlam, Skoura (o similar)", "Campamento de lujo en el desierto de Merzouga"],
      itinerary: [
        { day: 1, title: "Llegada a Marrakech", text: "Traslado privado a La Mamounia. Noche en la medina con su anfitrión." },
        { day: 2, title: "Assoufid", text: "Vuelta por la mañana en Assoufid. Por la tarde, el jardín Majorelle o los zocos." },
        { day: 3, title: "Royal Golf Marrakech · Agafay", text: "Vuelta en el Royal y después al Agafay para montar en camello al atardecer y cenar bajo las estrellas en Scarabeo Camp." },
        { day: 4, title: "Al Maaden", text: "Regreso a la ciudad para una vuelta en Al Maaden. Hammam y cena en el hotel." },
        { day: 5, title: "Por el Atlas", text: "Por el puerto de Tizi n’Tichka hasta la kasbah de Aït Benhaddou y después al palmeral de Skoura para pasar la noche." },
        { day: 6, title: "Gargantas del Dadès y del Todra", text: "Por las gargantas y los oasis del Tafilalt hasta Merzouga. Paseo en camello por las dunas al atardecer; noche en el campamento del Erg Chebbi." },
        { day: 7, title: "Erg Chebbi", text: "Amanecer desde lo alto de las dunas, 4x4 hasta los campamentos nómadas y los yacimientos de fósiles, sandboard. Segunda noche en el campamento o en una kasbah del desierto." },
        { day: 8, title: "Regreso a Marrakech", text: "Vuelo desde Errachidia o el largo camino de vuelta por carretera. Cena de despedida." },
        { day: 9, title: "Salida", text: "Traslado al aeropuerto de Marrakech." }
      ]
    },
    {
      id: "madagascar-lemurs",
      name: "Lémures y tierras altas",
      strap: "El indri al amanecer, los baobabs al anochecer y una vuelta sobre Antananarivo.",
      tagline: "El Golf du Rova, la selva de Andasibe, la avenida de los baobabs y las islas de Nosy Be",
      countries: ["Madagascar"],
      region: "Océano Índico",
      nights: 9,
      rounds: 1,
      gameDrives: 7,
      priceFrom: 5200,
      tier: "signature",
      featured: false,
      bestMonths: "Abr – nov",
      photo: "indri",
      route: ["Antananarivo", "Andasibe-Mantadia", "Bosque de Kirindy", "Nosy Be"],
      intro: "Madagascar es un safari como ningún otro: sin Cinco Grandes, pero con animales que no existen en ninguna otra parte, vistos a pie en el bosque. Una vuelta en las colinas a las afueras de la capital abre el viaje; siguen el indri, el fosa y los baobabs, y la playa de Nosy Be lo cierra.",
      highlights: [
        "International Golf du Rova, el único campo de dieciocho hoyos del país",
        "El coro del indri al amanecer en Andasibe, con caminatas nocturnas para ver camaleones",
        "Rastreo del fosa en Kirindy y la avenida de los baobabs al atardecer",
        "Lémures negros, arrecifes y un lodge en una isla privada frente a Nosy Be"
      ],
      courses: [
        { name: "International Golf du Rova", par: 72, note: "Campo ondulado en Andakana, con un hotel en la casa club." }
      ],
      stays: ["Golf du Rova Hotel", "Mantadia Lodge, Andasibe", "Campamento del bosque de Kirindy", "Constance Tsarabanjina"],
      itinerary: [
        { day: 1, title: "Llegada a Antananarivo", text: "Traslado al hotel del Golf du Rova en las colinas, a veinte kilómetros de la ciudad." },
        { day: 2, title: "Golf du Rova", text: "Vuelta por la mañana y después el trayecto al este por las tierras altas hasta Andasibe." },
        { day: 3, title: "Andasibe", text: "Amanecer en Analamazaotra para ver el indri, tarde en Mantadia y caminata nocturna para camaleones y lémures ratón." },
        { day: 4, title: "Andasibe", text: "Un día completo en la selva con su guía: sifakas, lémures del bambú y el sendero de las orquídeas." },
        { day: 5, title: "Vuelo a Morondava", text: "Regreso a Antananarivo y vuelo al oeste. Atardecer en la avenida de los baobabs." },
        { day: 6, title: "Kirindy", text: "Caminatas por el bosque seco para ver el sifaka de Verreaux y el fosa; caminata nocturna para la rata saltadora gigante." },
        { day: 7, title: "Vuelo a Nosy Be", text: "Vía Antananarivo a Nosy Be y en barca a Tsarabanjina." },
        { day: 8, title: "Lokobe", text: "Piragua hasta la reserva de Lokobe para ver lémures negros y boas, y tarde en el arrecife." },
        { day: 9, title: "Día en la isla", text: "Esnórquel, vela o tiburones ballena en temporada." },
        { day: 10, title: "Salida", text: "Barca y vuelo a Antananarivo para su conexión." }
      ]
    },
    {
      id: "benin-pendjari",
      name: "Pendjari y la laguna",
      strap: "El parque más salvaje de África Occidental y una vuelta en su campo más nuevo.",
      tagline: "Cotonú, Ganvié en piragua, Ouidah y cuatro noches en Pendjari",
      countries: ["Benín"],
      region: "África Occidental",
      nights: 7,
      rounds: 1,
      gameDrives: 7,
      priceFrom: 4600,
      tier: "signature",
      featured: false,
      bestMonths: "Dic – abr",
      photo: "eleRoad",
      route: ["Cotonú", "Lago Nokoué", "Ouidah", "Pendjari"],
      intro: "Benín une el mejor safari de grandes animales de África Occidental con una costa de lagunas, pueblos sobre pilotes e historia, y ahora con un campo de campeonato entre ambos. En la estación seca, los safaris en Pendjari, gestionado por African Parks, encuentran elefantes, leones y búfalos en las charcas.",
      highlights: [
        "El Ouidah Golf Club en Avlékété, el primer campo de dieciocho hoyos de Benín",
        "Ganvié, la ciudad sobre pilotes del lago Nokoué, en piragua",
        "La ruta de los esclavos de Ouidah y la Puerta del No Retorno",
        "Cuatro noches en Pendjari con guía y vehículo privados"
      ],
      courses: [
        { name: "Ouidah Golf Club, Avlékété", par: 72, note: "El campo de Jeremy Pern entre la laguna y el Atlántico." }
      ],
      stays: ["Sofitel Cotonou Marina", "Pendjari Lodge"],
      itinerary: [
        { day: 1, title: "Llegada a Cotonú", text: "Recepción a la llegada y traslado al Sofitel en el puerto deportivo." },
        { day: 2, title: "Ganvié", text: "Mañana en piragua por la ciudad sobre pilotes del lago Nokoué. Tarde en el mercado Dantokpa de Cotonú." },
        { day: 3, title: "Avlékété", text: "Vuelta en el Ouidah Golf Club y después la ruta de los esclavos hasta la Puerta del No Retorno y el templo de las pitones en Ouidah." },
        { day: 4, title: "Vuelo al norte", text: "Vuelo a Natitingou y traslado a Pendjari. Safari por la tarde hasta la charca de Mare Bali." },
        { day: 5, title: "Pendjari", text: "Safaris al amanecer y al anochecer junto al río Pendjari: elefantes, búfalos, hipopótamos y leones." },
        { day: 6, title: "Pendjari", text: "Día completo con su guía por las estribaciones del Atacora y las cascadas de Tanougou." },
        { day: 7, title: "Pendjari", text: "Últimos safaris, una caminata con los guardas y un último aperitivo en la charca." },
        { day: 8, title: "Salida", text: "Vuelo de regreso a Cotonú para su conexión." }
      ]
    }
  ];

  var DESTINATIONS = [
    {
      id: "kenya",
      name: "Kenia",
      strap: "El país original del safari, con un golf que se remonta a hace un siglo.",
      photo: "g_greenSunrise",
      text: "Nairobi tiene tres campos de campeonato a menos de cuarenta minutos entre sí y las reservas del Mara a una hora de vuelo. Es el lugar de África donde más fácil resulta alternar una vuelta y un safari sin perder un día.",
      courses: ["Karen Country Club", "Muthaiga Golf Club", "Windsor Golf Hotel", "Vipingo Ridge"],
      parks: ["Masái Mara", "Amboseli", "Laikipia", "Lewa"],
      journeys: ["kenya-classic", "grand-crossing"]
    },
    {
      id: "tanzania",
      name: "Tanzania",
      strap: "El Serengeti, el cráter y un campo bajo la montaña.",
      photo: "g_mtnWalk",
      text: "Tanzania es el safari en su máxima amplitud. Un magnífico campo al pie del Kilimanjaro abre el viaje y el resto es fauna a una escala inigualable, rematada con el descenso al cráter del Ngorongoro.",
      courses: ["Kilimanjaro Golf & Wildlife Estate", "Sea Cliff Resort, Zanzíbar"],
      parks: ["Serengeti", "Cráter del Ngorongoro", "Tarangire", "Lago Manyara"],
      journeys: ["tanzania-grand"]
    },
    {
      id: "south-africa",
      name: "Sudáfrica",
      strap: "El golf más completo del continente y los leopardos de Sabi Sand.",
      photo: "g_flagMist",
      text: "Fancourt, Pearl Valley y Leopard Creek justificarían por sí solos el vuelo. Añada la región vinícola, la Ruta Jardín y una reserva privada junto al Kruger y tendrá el primer safari de golf por excelencia.",
      courses: ["Fancourt The Links", "Fancourt Montagu", "Pearl Valley", "Leopard Creek", "Skukuza Golf Club", "Arabella"],
      parks: ["Sabi Sand", "Parque Nacional Kruger", "Timbavati", "Madikwe"],
      journeys: ["south-africa-signature", "grand-crossing", "mauritius-kruger"]
    },
    {
      id: "victoria-falls",
      name: "Cataratas Victoria y Chobe",
      strap: "Elefantes a millares y una vuelta junto al Zambeze.",
      photo: "elephantsSunset",
      text: "Elephant Hills es el único campo del mundo donde se ve desde el tee la espuma de una maravilla natural. Al otro lado de la frontera, Chobe alberga la mayor población de elefantes de África, que se ve mejor desde el río al atardecer.",
      courses: ["Elephant Hills", "Borrowdale Brooke"],
      parks: ["Cataratas Victoria", "Chobe", "Hwange", "Parque Nacional del Zambeze"],
      journeys: ["victoria-falls-chobe", "grand-crossing"]
    },
    {
      id: "mauritius",
      name: "Mauricio",
      strap: "Golf de nivel de circuito en una isla, a un vuelo corto de la sabana.",
      photo: "g_palmsWater",
      text: "Mauricio acoge el DP World Tour y tiene más golf de campeonato por kilómetro cuadrado que ningún otro lugar de África. Combina de forma natural con el Kruger para una quincena de sabana y playa.",
      courses: ["Heritage Le Château", "Heritage La Réserve", "Île aux Cerfs", "Anahita", "Paradis"],
      parks: ["Gargantas de Black River", "Île aux Aigrettes"],
      journeys: ["mauritius-kruger"]
    },
    {
      id: "uganda",
      name: "Uganda",
      strap: "Gorilas en el bosque, golf a orillas del lago.",
      photo: "highlands",
      text: "Una escapada corta con una vuelta en el club más antiguo de África Oriental y la hora más emotiva que se puede vivir viajando. Uganda funciona por sí sola o como añadido de tres noches a Kenia.",
      courses: ["Entebbe Golf Club", "Uganda Golf Club"],
      parks: ["Bosque impenetrable de Bwindi", "Queen Elizabeth", "Lago Bunyonyi", "Murchison Falls"],
      journeys: ["uganda-short-break"]
    },
    {
      id: "morocco",
      name: "Marruecos",
      strap: "El mejor golf al norte de El Cabo y un safari por el desierto en camello y 4x4.",
      photo: "sahara",
      text: "Marrakech tiene tres campos por los que merece la pena cruzar un continente, con el Atlas detrás de cada green, y el Sáhara empieza a un día de carretera.",
      courses: ["Assoufid", "Royal Golf Marrakech", "Al Maaden", "Royal Golf Dar Es Salam", "Tazegzout"],
      parks: ["Agafay", "Erg Chebbi", "Erg Chigaga", "Toubkal"],
      journeys: ["morocco-sahara"]
    },
    {
      id: "madagascar",
      name: "Madagascar",
      strap: "Lémures, baobabs y tsingy de caliza, con una vuelta sobre la capital.",
      photo: "indri",
      text: "Un safari a pie entre animales que no existen en ninguna otra parte, un campo maduro a las afueras de Antananarivo y las islas de Nosy Be para terminar.",
      courses: ["International Golf du Rova"],
      parks: ["Andasibe-Mantadia", "Kirindy", "Isalo", "Nosy Be"],
      journeys: ["madagascar-lemurs"]
    },
    {
      id: "benin",
      name: "Benín",
      strap: "El mejor safari de sabana de África Occidental y un campo de campeonato recién estrenado.",
      photo: "ganvie",
      text: "Los elefantes y leones de Pendjari en la estación seca, Ganvié en la laguna y el primer campo de dieciocho hoyos del país en Avlékété.",
      courses: ["Ouidah Golf Club"],
      parks: ["Pendjari", "Parque Nacional W", "Lago Nokoué"],
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
