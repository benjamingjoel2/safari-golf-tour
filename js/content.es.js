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
    { id: "karen", name: "Karen Country Club", country: "Kenia", destination: "kenya", designer: "Remington & Bernard (1937)", par: 72, holes: 18, photo: "g_greenTrees", note: "Campo de parque arbolado al pie de las colinas de Ngong, a veinte minutos de los hoteles de Nairobi. El club más completo de África Oriental." },
    { id: "muthaiga", name: "Muthaiga Golf Club", country: "Kenia", destination: "kenya", designer: "Fundado en 1913", par: 72, holes: 18, photo: "g_savannaCourse", note: "La casa del golf keniano y sede del Abierto de Kenia. Estrecho, maduro e implacable desde el tee." },
    { id: "windsor", name: "Windsor Golf Hotel & Country Club", country: "Kenia", destination: "kenya", designer: "Tom Macaulay", par: 72, holes: 18, photo: "g_aerialRolling", note: "Recorrido de campeonato entre bosque autóctono al norte de Nairobi, ideal para una vuelta de despedida antes de un vuelo nocturno." },
    { id: "vipingo", name: "Vipingo Ridge", country: "Kenia", destination: "kenya", designer: "David Jones", par: 72, holes: 18, photo: "g_seaCourse", note: "El Baobab Course, acreditado por la PGA, en una cresta sobre el océano Índico al norte de Mombasa. La extensión costera." },
    { id: "rift-valley", name: "Great Rift Valley Lodge", country: "Kenia", destination: "kenya", designer: "Sam Lacey", par: 72, holes: 18, photo: "g_mtnCourse2", note: "Muy por encima del lago Naivasha, con el valle del Rift bajo cada hoyo. Cebras y jirafas en las calles." },
    { id: "kili", name: "Kilimanjaro Golf & Wildlife Estate", country: "Tanzania", destination: "tanzania", designer: "David Jones", par: 72, holes: 18, photo: "g_mtnWalk", note: "Entre el Meru y el Kilimanjaro, en una finca privada con fauna. Se juega entre cebras y ñus, con la montaña detrás del green." },
    { id: "sea-cliff", name: "Sea Cliff Resort, Zanzíbar", country: "Tanzania", destination: "tanzania", designer: "Peter Matkovich", par: 36, holes: 9, photo: "g_palmsWater", note: "Nueve hoyos junto al océano en la costa noroeste de Zanzíbar. La extensión de playa tras el Serengeti." },
    { id: "fancourt-links", name: "Fancourt The Links", country: "Sudáfrica", destination: "south-africa", designer: "Gary Player", par: 73, holes: 18, photo: "g_linksGold", note: "El número uno de Sudáfrica y sede de la Presidents Cup. Un links construido sobre un terreno llano, con dunas, viento y una superficie firme y rápida. Caddies incluidos." },
    { id: "fancourt-montagu", name: "Fancourt Montagu", country: "Sudáfrica", destination: "south-africa", designer: "Gary Player", par: 72, holes: 18, photo: "g_dawnBunkers", note: "Obra maestra de parque al pie de los montes Outeniqua, pulida por David McLay Kidd. El más amable de los dos campos de campeonato de Fancourt." },
    { id: "fancourt-outeniqua", name: "Fancourt Outeniqua", country: "Sudáfrica", destination: "south-africa", designer: "Gary Player", par: 72, holes: 18, photo: "g_aerialPond", note: "Calles anchas y agua en diez hoyos. La vuelta de calentamiento al llegar a Fancourt." },
    { id: "pearl-valley", name: "Pearl Valley", country: "Sudáfrica", destination: "south-africa", designer: "Jack Nicklaus", par: 72, holes: 18, photo: "g_mountainsRoses", note: "Campo firmado por Nicklaus entre los viñedos de Paarl, con el Simonsberg detrás. Sede del Abierto de Sudáfrica." },
    { id: "leopard-creek", name: "Leopard Creek", country: "Sudáfrica", destination: "south-africa", designer: "Gary Player", par: 72, holes: 18, photo: "g_bigTree", note: "A orillas del río Crocodile, junto al Kruger. Hipopótamos y cocodrilos bordean el 13 y los elefantes cruzan la otra orilla. Acceso por invitación, que gestionamos nosotros." },
    { id: "skukuza", name: "Skukuza Golf Club", country: "Sudáfrica", destination: "south-africa", designer: "Parque Nacional Kruger", par: 72, holes: 9, photo: "g_flagMist", note: "Nueve hoyos sin vallar dentro del Parque Nacional Kruger, jugados dos veces. El rough es salvaje de verdad y un guarda acompaña la vuelta." },
    { id: "arabella", name: "Arabella", country: "Sudáfrica", destination: "south-africa", designer: "Peter Matkovich", par: 72, holes: 18, photo: "g_aerial4", note: "En la laguna del río Bot, a una hora de Ciudad del Cabo. El final junto al agua es de los mejores del país." },
    { id: "erinvale", name: "Erinvale", country: "Sudáfrica", destination: "south-africa", designer: "Gary Player", par: 72, holes: 18, photo: "g_alpine", note: "Somerset West, al pie del Helderberg. Sede de la Copa del Mundo de Golf y una buena alternativa en la región vinícola." },
    { id: "elephant-hills", name: "Elephant Hills", country: "Zimbabue", destination: "victoria-falls", designer: "Gary Player", par: 72, holes: 18, photo: "g_sunrise2", note: "El único campo del mundo donde se ve desde el tee la espuma de una maravilla natural. Facóqueros en las calles y el Zambeze junto a los segundos nueve." },
    { id: "borrowdale", name: "Borrowdale Brooke", country: "Zimbabue", destination: "victoria-falls", designer: "Peter Matkovich", par: 72, holes: 18, photo: "g_greenSunrise", note: "El campo de campeonato de Harare, para quienes pasan por la capital." },
    { id: "heritage-chateau", name: "Heritage Le Château", country: "Mauricio", destination: "mauritius", designer: "Peter Matkovich", par: 72, holes: 18, photo: "g_aerialGreen2", note: "Sede del AfrAsia Bank Mauritius Open del DP World Tour. Vistas al mar desde cada hoyo de la finca de Bel Ombre." },
    { id: "heritage-reserve", name: "Heritage La Réserve", country: "Mauricio", destination: "mauritius", designer: "Peter Matkovich & Louis Oosthuizen", par: 72, holes: 18, photo: "g_mtnCourse1", note: "Abierto en 2023 en las colinas sobre Le Château. Ya figura entre los mejores de la isla." },
    { id: "ile-aux-cerfs", name: "Île aux Cerfs", country: "Mauricio", destination: "mauritius", designer: "Bernhard Langer", par: 72, holes: 18, photo: "g_aerialBunkers", note: "Se llega en barca desde la costa este, con la laguna en juego en nueve hoyos. Después, almuerzo en la isla." },
    { id: "anahita", name: "Anahita", country: "Mauricio", destination: "mauritius", designer: "Ernie Els", par: 72, holes: 18, photo: "g_aerial3", note: "Seis hoyos junto al océano en la costa este. Una alternativa más tranquila a la Île aux Cerfs, al otro lado del agua." },
    { id: "entebbe", name: "Entebbe Golf Club", country: "Uganda", destination: "uganda", designer: "Fundado en 1901", par: 71, holes: 18, photo: "g_sunrise1", note: "El campo más antiguo de África Oriental, a orillas del lago Victoria, a pocos pasos del hotel. Los marabúes patrullan las calles." },
    { id: "uganda-gc", name: "Uganda Golf Club", country: "Uganda", destination: "uganda", designer: "Kampala, fundado en 1908", par: 72, holes: 18, photo: "g_aerial2", note: "Sede del Abierto de Uganda, en el centro de Kampala. Vuelta opcional para quienes pasan una noche en la capital." }
  ];

  /* ---------- Stays ---------- */
  /* Stays show a photo of their location (park, town or landscape), not a stock room or a different
   * property, until the venue supplies images we may use. See IMAGES-NEEDED.md. */
  S.STAYS = [
    { id: "hemingways", name: "Hemingways Nairobi", destination: "kenya", type: "Hotel boutique", photo: "crossing", note: "Hotel boutique de estilo colonial en Karen, a diez minutos del club. Mayordomos, un bar de verdad y las colinas de Ngong desde la terraza." },
    { id: "mara-plains", name: "Mara Plains Camp", destination: "kenya", type: "Campamento de tiendas", photo: "crossing", note: "Siete tiendas junto al río Ntiakitiak, en la reserva de Olare Motorogi. Rastreo fuera de pista, safaris nocturnos y los mejores avistamientos de leopardos del Mara." },
    { id: "kili-villas", name: "Kili Golf Villas", destination: "tanzania", type: "Villas en una finca de golf", photo: "kilimanjaro", note: "Villas privadas en el Kilimanjaro Golf & Wildlife Estate, con el campo a la puerta y la montaña en el desayuno." },
    { id: "namiri-plains", name: "Namiri Plains", destination: "tanzania", type: "Campamento de tiendas", photo: "herd", note: "Diez suites en las llanuras del este del Serengeti, cerradas a los visitantes durante veinte años y hoy tierra de guepardos. Camas bajo las estrellas bajo petición." },
    { id: "highlands", name: "The Highlands, Ngorongoro", destination: "tanzania", type: "Lodge", photo: "rhinoBlack", note: "Cúpulas acristaladas en el borde boscoso del cráter del Ngorongoro, con el primer permiso de descenso de la mañana." },
    { id: "serengeti-mobile", name: "Campamento móvil del Serengeti", destination: "tanzania", type: "Campamento móvil", photo: "crossing2", note: "Un campamento que se mueve con la migración. Menos comodidades, mejores avistamientos y cenas junto al fuego bajo todo el cielo." },
    { id: "la-residence", name: "La Residence, Franschhoek", destination: "south-africa", type: "Casa de campo", photo: "capeTown", note: "Once suites en una finca vinícola en activo en el valle de Franschhoek. Pearl Valley está a veinte minutos." },
    { id: "fancourt-hotel", name: "Fancourt Hotel", destination: "south-africa", type: "Resort de golf", photo: "g_linksGold", note: "La casa señorial y el hotel en el centro de la finca, con tres campos, un spa y The Links a un trayecto en carrito de la habitación." },
    { id: "londolozi", name: "Londolozi", destination: "south-africa", type: "Lodge de safari", photo: "leopard", note: "Gestionado por la misma familia desde 1926 en Sabi Sand, la reserva donde nació la observación de leopardos. Cinco campamentos en el río Sand." },
    { id: "vic-falls-hotel", name: "Victoria Falls Hotel", destination: "victoria-falls", type: "Gran hotel", photo: "vicBridge", note: "La gran dama de 1904, con la espuma de las cataratas desde la terraza y Elephant Hills a cinco minutos." },
    { id: "chobe-game-lodge", name: "Chobe Game Lodge", destination: "victoria-falls", type: "Lodge de safari", photo: "zambeziElephant", note: "El único lodge dentro del Parque Nacional de Chobe, a orillas del río, con su propia flota de barcas y vehículos eléctricos." },
    { id: "le-telfair", name: "Heritage Le Telfair", destination: "mauritius", type: "Resort de playa", photo: "beach", note: "Resort de estilo colonial en la finca de Bel Ombre, con los dos campos Heritage y una reserva natural detrás." },
    { id: "prince-maurice", name: "Constance Prince Maurice", destination: "mauritius", type: "Resort de playa", photo: "beach", note: "Suites sobre pilotes encima de la laguna en la costa este. La Île aux Cerfs en barca y el campo Legend al lado." },
    { id: "bwindi-lodge", name: "Bwindi Lodge", destination: "uganda", type: "Lodge en el bosque", photo: "gorillaFamily", note: "Al borde del bosque impenetrable de Bwindi, con el punto de encuentro del trekking a cinco minutos a pie." },
    { id: "mamounia", name: "La Mamounia", destination: "morocco", type: "Hotel palacio", photo: "koutoubiaGold", note: "La gran dama de Marrakech desde 1923, con ocho hectáreas de jardines dentro de las murallas, un bar Churchill y el Royal Golf a quince minutos." },
    { id: "scarabeo", name: "Scarabeo Camp, Agafay", destination: "morocco", type: "Campamento en el desierto", photo: "desertCamp", note: "Tiendas de lona en la meseta de Agafay, a media hora de la ciudad, cenas a la luz de las velas y el Atlas al amanecer. La noche entre dos vueltas en Marrakech." },
    { id: "dar-ahlam", name: "Dar Ahlam, Skoura", destination: "morocco", type: "Kasbah", photo: "oasis", note: "Una kasbah restaurada en el palmeral de Skoura, de camino a las dunas, con comidas servidas donde la luz es más bonita." },
    { id: "merzouga-camp", name: "Campamento de lujo en el desierto de Merzouga", destination: "morocco", type: "Campamento en el desierto", photo: "ergChebbi", note: "Un campamento privado entre las dunas del Erg Chebbi: camas de verdad, duchas calientes, un fuego y la Vía Láctea. Se llega en camello al atardecer." },
    { id: "kasbah-tamadot", name: "Kasbah Tamadot", destination: "morocco", type: "Refugio de montaña", photo: "atlasVillage", note: "La kasbah de Sir Richard Branson al pie del Toubkal, a una hora de Marrakech, para días de caminata entre vueltas." },
    { id: "rova-hotel", name: "Golf du Rova Hotel", destination: "madagascar", type: "Hotel de golf", photo: "lemur", note: "Un pequeño hotel en la casa club de las colinas de Andakana, para las primeras y últimas noches de un viaje a Madagascar." },
    { id: "mantadia-lodge", name: "Mantadia Lodge, Andasibe", destination: "madagascar", type: "Lodge en el bosque", photo: "indri3", note: "Lodge en la ladera sobre el bosque de Andasibe, con el canto del indri desde la terraza al amanecer." },
    { id: "kirindy-camp", name: "Campamento del bosque de Kirindy", destination: "madagascar", type: "Campamento en el bosque", photo: "baobabAvenue", note: "Bungalós sencillos dentro del bosque seco, por donde el fosa cruza el campamento en la estación seca. Rústico y vale la pena." },
    { id: "tsarabanjina", name: "Constance Tsarabanjina", destination: "madagascar", type: "Isla privada", photo: "nosySand", note: "Una isla privada frente a Nosy Be con veinticinco villas en dos playas, arrecifes a la puerta y nada más." },
    { id: "sofitel-cotonou", name: "Sofitel Cotonou Marina", destination: "benin", type: "Hotel urbano", photo: "ganvie", note: "La mejor dirección de la ciudad, en el puerto deportivo entre la laguna y el océano, a cuarenta minutos del campo de Avlékété." },
    { id: "pendjari-lodge", name: "Pendjari Lodge", destination: "benin", type: "Lodge de safari", photo: "eleRoad", note: "Dentro del parque, cerca del escarpe del Atacora, la base para recorrer el río Pendjari y sus charcas." }
  ];

  /* ---------- Hosted departures ---------- */
  S.DEPARTURES = [
    { id: "kenya-feb-2027", journey: "kenya-classic", start: "2027-02-06", nights: 7, host: "Su planificador y un caddie máster de Nairobi", priceFrom: 5600, places: 8, left: 0 },
    { id: "cape-mar-2027", journey: "south-africa-signature", start: "2027-03-12", nights: 9, host: "Su planificador y un profesional de la PGA", priceFrom: 7450, places: 8, left: 3 },
    { id: "falls-jun-2027", journey: "victoria-falls-chobe", start: "2027-06-09", nights: 6, host: "Su planificador", priceFrom: 4350, places: 8, left: 5 },
    { id: "kenya-aug-2027", journey: "kenya-classic", start: "2027-08-14", nights: 7, host: "Su planificador y un caddie máster de Nairobi", priceFrom: 5600, places: 8, left: 2, note: "Temporada de migración" },
    { id: "mauritius-sep-2027", journey: "mauritius-kruger", start: "2027-09-23", nights: 11, host: "Su planificador y un profesional de la PGA", priceFrom: 9600, places: 8, left: 6 },
    { id: "ladies-cape-oct-2027", journey: "south-africa-signature", start: "2027-10-06", nights: 9, host: "Una profesional del Ladies European Tour", priceFrom: 7450, places: 8, left: 8, note: "Salida femenina" },
    { id: "kenya-jan-2028", journey: "kenya-classic", start: "2028-01-21", nights: 7, host: "Su planificador", priceFrom: 5800, places: 8, left: 8 },
    { id: "tanzania-feb-2028", journey: "tanzania-grand", start: "2028-02-18", nights: 10, host: "Su planificador y un profesional de la PGA", priceFrom: 8100, places: 8, left: 8, note: "Temporada de partos" },
    { id: "grand-aug-2028", journey: "grand-crossing", start: "2028-08-05", nights: 14, host: "Los dos fundadores", priceFrom: 19800, places: 8, left: 8, note: "Salida insignia" }
  ];

  /* ---------- Encounters ---------- */
  S.ENCOUNTERS = [
    { id: "play-with-a-pro", name: "Jugar con un profesional del circuito", where: "Fancourt · Heritage · Karen", photo: "g_drive", text: "Dieciocho hoyos con un profesional de la PGA o del Ladies European Tour como cuarto jugador, seguidos de almuerzo y una clínica de juego corto. Disponible en las salidas acompañadas y, con antelación, en los viajes a medida.", journeys: ["south-africa-signature", "mauritius-kruger", "kenya-classic"] },
    { id: "gorillas", name: "Una hora con los gorilas de montaña", where: "Bosque impenetrable de Bwindi", photo: "highlands", text: "Un trekking matinal con guardas hasta una familia habituada y luego una hora en su compañía. Los permisos son limitados y se aseguran con meses de antelación; tenemos un cupo para nuestros viajeros.", journeys: ["uganda-short-break"] },
    { id: "balloon", name: "El amanecer sobre el Mara en globo", where: "Masái Mara", photo: "balloon", text: "Despegue antes del amanecer, una hora flotando sobre las manadas y un desayuno con champán en la llanura donde aterriza. La mañana más fotografiada de cualquier viaje.", journeys: ["kenya-classic", "grand-crossing"] },
    { id: "leopard-tracking", name: "Rastrear leopardos con un especialista", where: "Sabi Sand", photo: "leopard", text: "Un vehículo privado con uno de los rastreadores más veteranos de la reserva durante un día entero, siguiendo a un solo animal desde la presa de la mañana hasta el árbol de la tarde. Sabi Sand es el único lugar donde esto es fiable.", journeys: ["south-africa-signature", "grand-crossing"] },
    { id: "rhino-rangers", name: "Una mañana con los guardas de los rinocerontes", where: "Laikipia · Ngorongoro", photo: "elephantHeadOn", text: "Camine con la unidad contra la caza furtiva que protege al rinoceronte negro, vea cómo se sigue a los animales y entienda adónde va la tasa de conservación de cada viaje.", journeys: ["kenya-classic", "tanzania-grand"] },
    { id: "maasai-morning", name: "Una mañana con una comunidad masái", where: "Tierras altas del Ngorongoro", photo: "acaciaSunset", text: "No es una visita escenificada a un poblado. Una mañana caminando con los pastores, una comida con una familia que conocemos desde hace años y tiempo para preguntar lo que de verdad quiere preguntar.", journeys: ["tanzania-grand"] },
    { id: "zambezi-sunset", name: "El Zambeze al atardecer", where: "Cataratas Victoria · Chobe", photo: "elephantsSunset", text: "Una barca privada por encima de las cataratas cuando los elefantes bajan a beber y luego una cena en la orilla. En Chobe, la misma hora en barca eléctrica por la llanura aluvial.", journeys: ["victoria-falls-chobe", "grand-crossing"] }
  ];

  /* ---------- Journal ---------- */
  S.JOURNAL = [
    {
      slug: "links-after-the-refurbishment",
      category: "Golf · Sudáfrica",
      title: "The Links tras la renovación",
      date: "Septiembre de 2026",
      photo: "g_dawnBunkers",
      standfirst: "El campo insignia de Fancourt ha reabierto con nuevos búnkeres y una superficie más firme y rápida. Con viento en contra juega dos golpes más difícil, y sale ganando.",
      body: [
        "Jugamos The Links tres veces en las dos semanas siguientes a su reapertura, dos con viento del sureste y una con la calma total que George regala quizá una mañana de cada diez. El trabajo es sutil desde el tee y evidente desde la calle: los búnkeres se han reconstruido con paredes de tepes y fondos más profundos, los greens están más firmes y las zonas de escape que antes retenían la bola ahora la alejan.",
        "En la práctica, el campo vuelve a premiar la aproximación rodada, que es lo que quería Gary Player y lo que una década de condiciones blandas había borrado sin hacer ruido. Con viento en contra, un hierro 7 bien golpeado bota corto y rueda; el mismo golpe volado hasta la bandera acaba detrás del green. A nuestros viajeros con experiencia en links les encantó. Los jugadores de campos de parque necesitaron una vuelta para adaptarse.",
        "Nuestro consejo para los viajes: juegue primero Montagu, después The Links, y coja caddie. Los caddies llevan meses recorriendo las nuevas zonas de escape y le ahorrarán tres golpes antes del hoyo 10. Los certificados de hándicap se comprueban en recepción, así que lleve el papel o la aplicación."
      ]
    },
    {
      slug: "when-to-see-the-mara-crossings",
      category: "Safari · Kenia",
      title: "Cuándo ver los cruces del Mara",
      date: "Agosto de 2026",
      photo: "balloon",
      standfirst: "Las manadas llegan cada año antes. De finales de julio a septiembre es ahora la ventana más segura, con las reservas más tranquilas en la segunda mitad.",
      body: [
        "La Gran Migración no sigue un calendario, pero sí la hierba, y la hierba lleva varias temporadas reverdeciendo antes en el norte del Serengeti. En 2026 los primeros grandes cruces del río Mara fueron en la segunda semana de julio, quince días antes de la media histórica. A mediados de agosto las manadas estaban repartidas por el Triángulo del Mara y las reservas del norte.",
        "En un safari de golf el calendario cuenta dos veces. Primero, para los propios cruces, que son una probabilidad y no una promesa: tres o cuatro días completos en el río en agosto le dan buenas opciones; un solo día es cara o cruz. Segundo, para los campos de Nairobi, que están en su mejor momento en la estación seca de julio a septiembre y pueden estar pesados tras las lluvias cortas de noviembre.",
        "Nuestra salida acompañada Kenya Classic de agosto de 2027 se basa en esto: cuatro noches en el lado del Mara, con el golf antes y no después, para que nadie mire el móvil en el tee del 14 esperando noticias de un cruce."
      ]
    },
    {
      slug: "chobe-by-boat",
      category: "Safari · Botsuana",
      title: "Chobe en barca, no por carretera",
      date: "Julio de 2026",
      photo: "elephantsSunset",
      standfirst: "En la estación seca, la ribera es todo el espectáculo. Ahora pasamos cada tarde en Chobe en el agua y dejamos el 4x4 para el amanecer.",
      body: [
        "Chobe tiene la mayor población de elefantes de África y, de junio a octubre, casi toda está a menos de un kilómetro del río. La carretera de la ribera es un buen recorrido, pero por la tarde también es la más concurrida de Botsuana, y una manada cruzando hacia las islas se ve mejor desde el agua, a la altura de sus ojos.",
        "Chobe Game Lodge tiene una flota de barcas eléctricas silenciosas, y eso cambia por completo la experiencia. Uno se queda entre los juncos mientras los elefantes nadan junto a la proa y el único ruido es el agua. Búfalos, hipopótamos, cocodrilos y pigargos vocingleros están más cerca de lo que ningún vehículo puede llegar.",
        "Así que el viaje Falls & Fairways tiene ahora las salidas matinales tierra adentro en busca de leones y antílopes sables y cada tarde en el río, terminando con un aperitivo al atardecer mientras bajan las manadas. Los golfistas que llegan de Elephant Hills el día anterior encuentran aquí el contrapeso perfecto."
      ]
    },
    {
      slug: "packing-clubs-for-africa",
      category: "Práctico",
      title: "Llevar los palos a África: lo que de verdad funciona",
      date: "Junio de 2026",
      photo: "irons",
      standfirst: "Traiga sus propios palos si puede. Así se hace sin subirlos a un avión de doce plazas.",
      body: [
        "La mayoría de nuestros viajeros quiere sus propios palos para Fancourt o Leopard Creek y le da igual con qué juega en Skukuza. La solución es una funda rígida para el vuelo internacional y dejar que movamos los palos por carretera o carga regular entre las etapas de golf mientras usted vuela a la sabana en avioneta con una bolsa blanda.",
        "Las avionetas en Kenia, Tanzania y Botsuana tienen un límite de 15 kilos en bolsa blanda y no hay sitio para una funda de palos. En lugar de discutir en la pista, enviamos los palos al siguiente campo y le esperan en la tienda del club al aterrizar. En The Grand Crossing los palos van de Fancourt a Leopard Creek, Elephant Hills y Karen sin que usted los toque.",
        "Si prefiere no viajar con palos, todos los campos que usamos tienen buenos juegos de alquiler, y podemos reservarle el mismo juego para todo el viaje para que la sensación no cambie. Indíquenos sus especificaciones al hacer la consulta y le confirmaremos lo que puede ofrecer cada campo."
      ]
    },
    {
      slug: "a-day-in-two-halves",
      category: "Por qué un safari de golf",
      title: "Un día en dos mitades",
      date: "Mayo de 2026",
      photo: "g_duskPair",
      standfirst: "Cómo construimos un día de safari de golf para que ninguna mitad parezca el precio de la otra.",
      body: [
        "La objeción más antigua al safari de golf es que tiene que ser un término medio: muy poco golf para el golfista, muy poca sabana para el no golfista. Es una objeción justa para un día mal planteado, y la mayoría de los paquetes de golf y safari que vemos están mal planteados, con la vuelta pegada a un día de descanso y el safari metido en la hora antes de la cena.",
        "Nuestro día empieza en la naturaleza. A primera hora es cuando se mueven los animales y la temperatura es amable, así que el safari matinal sale a las seis y vuelve a las diez. La vuelta empieza a las once, con la luz alta y las calles vacías, y termina hacia las cuatro. La tarde vuelve a ser de la sabana: un safari corto, un aperitivo al atardecer y la cena al aire libre.",
        "Donde el campo y el campamento no están en el mismo sitio, no partimos el día. Partimos el viaje: tres días seguidos de golf y luego cuatro de safari, con los palos enviados por delante. Los no golfistas tienen spa, viñedo u otro safari los días de golf, y el grupo se reúne para comer. Todos vuelven llenos."
      ]
    },
    {
      slug: "mauritius-in-october",
      category: "Golf · Mauricio",
      title: "Mauricio después del Abierto: por qué octubre es el mes",
      date: "Abril de 2026",
      photo: "g_seaCourse",
      standfirst: "El DP World Tour deja Heritage en diciembre. Juéguelo en octubre, cuando los campos están listos para el torneo y la isla está seca.",
      body: [
        "Le Château se prepara para el AfrAsia Bank Mauritius Open desde septiembre, así que desde octubre los greens tienen velocidad de torneo y el rough está alto. Es el mejor mes para ver el campo como lo ven los profesionales. También es el último mes antes de que lleguen la humedad del verano y los chubascos de cada tarde.",
        "La Réserve, abierto sobre Le Château en 2023, se juega de forma muy distinta: más corto, más ondulado, con más golpes que construir y más vistas. Recomendamos Le Château el primer día y La Réserve el segundo, y después un día de descanso antes de la barca a la Île aux Cerfs.",
        "Combinado con el Kruger, octubre es además el final de la estación seca y la mejor época del año para ver fauna, por eso el viaje Mauricio y Kruger y su salida acompañada están a finales de septiembre y en octubre. Los vuelos vía Johannesburgo enlazan el mismo día."
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
    var L = (document.documentElement.lang || "en").slice(0, 2);
    return d.toLocaleDateString(L === "en" ? "en-GB" : L, { day: "numeric", month: "long", year: "numeric" });
  };
})();
