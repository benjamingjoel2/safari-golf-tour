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
    { id: "karen", name: "Karen Country Club", country: "Kenya", destination: "kenya", designer: "Remington & Bernard (1937)", par: 72, holes: 18, photo: "g_greenTrees", note: "Un parcours de parc bordé d’arbres au pied des collines de Ngong, à vingt minutes des hôtels de Nairobi. Le club le plus complet d’Afrique de l’Est." },
    { id: "muthaiga", name: "Muthaiga Golf Club", country: "Kenya", destination: "kenya", designer: "Fondé en 1913", par: 72, holes: 18, photo: "g_savannaCourse", note: "La maison du golf kényan et l’hôte de l’Open du Kenya. Étroit, mûr et impitoyable au départ." },
    { id: "windsor", name: "Windsor Golf Hotel & Country Club", country: "Kenya", destination: "kenya", designer: "Tom Macaulay", par: 72, holes: 18, photo: "g_aerialRolling", note: "Un tracé de championnat à travers la forêt indigène au nord de Nairobi, idéal pour une dernière partie avant un vol du soir." },
    { id: "vipingo", name: "Vipingo Ridge", country: "Kenya", destination: "kenya", designer: "David Jones", par: 72, holes: 18, photo: "g_seaCourse", note: "Le Baobab Course accrédité PGA, sur une crête au-dessus de l’océan Indien, au nord de Mombasa. L’extension côtière." },
    { id: "rift-valley", name: "Great Rift Valley Lodge", country: "Kenya", destination: "kenya", designer: "Sam Lacey", par: 72, holes: 18, photo: "g_mtnCourse2", note: "Bien au-dessus du lac Naivasha, avec la vallée du Rift sous chaque trou. Zèbres et girafes sur les fairways." },
    { id: "kili", name: "Kilimanjaro Golf & Wildlife Estate", country: "Tanzanie", destination: "tanzania", designer: "David Jones", par: 72, holes: 18, photo: "g_mtnWalk", note: "Entre le Meru et le Kilimandjaro, sur un domaine faunique privé. On joue parmi les zèbres et les gnous, la montagne derrière le green." },
    { id: "sea-cliff", name: "Sea Cliff Resort, Zanzibar", country: "Tanzanie", destination: "tanzania", designer: "Peter Matkovich", par: 36, holes: 9, photo: "g_palmsWater", note: "Neuf trous au bord de l’océan sur la côte nord-ouest de Zanzibar. L’extension balnéaire après le Serengeti." },
    { id: "fancourt-links", name: "Fancourt The Links", country: "Afrique du Sud", destination: "south-africa", designer: "Gary Player", par: 73, holes: 18, photo: "g_linksGold", note: "Numéro un en Afrique du Sud et théâtre de la Presidents Cup. Un links construit sur un terrain plat, avec dunes, vent et surface ferme et rapide. Caddies inclus." },
    { id: "fancourt-montagu", name: "Fancourt Montagu", country: "Afrique du Sud", destination: "south-africa", designer: "Gary Player", par: 72, holes: 18, photo: "g_dawnBunkers", note: "Un chef-d’œuvre de parc au pied des monts Outeniqua, peaufiné par David McLay Kidd. Le plus doux des deux parcours de championnat de Fancourt." },
    { id: "fancourt-outeniqua", name: "Fancourt Outeniqua", country: "Afrique du Sud", destination: "south-africa", designer: "Gary Player", par: 72, holes: 18, photo: "g_aerialPond", note: "Des fairways larges et de l’eau sur dix trous. La partie d’échauffement à l’arrivée à Fancourt." },
    { id: "pearl-valley", name: "Pearl Valley", country: "Afrique du Sud", destination: "south-africa", designer: "Jack Nicklaus", par: 72, holes: 18, photo: "g_mountainsRoses", note: "Un parcours signature Nicklaus au milieu des vignobles de Paarl, le Simonsberg en arrière-plan. Hôte de l’Open d’Afrique du Sud." },
    { id: "leopard-creek", name: "Leopard Creek", country: "Afrique du Sud", destination: "south-africa", designer: "Gary Player", par: 72, holes: 18, photo: "g_bigTree", note: "Au bord de la rivière Crocodile, à la limite du Kruger. Hippopotames et crocodiles le long du 13, éléphants sur la rive opposée. Accès sur invitation, que nous organisons." },
    { id: "skukuza", name: "Skukuza Golf Club", country: "Afrique du Sud", destination: "south-africa", designer: "Parc national Kruger", par: 72, holes: 9, photo: "g_flagMist", note: "Neuf trous sans clôture à l’intérieur du parc national Kruger, joués deux fois. Le rough est vraiment sauvage, et un ranger accompagne la partie." },
    { id: "arabella", name: "Arabella", country: "Afrique du Sud", destination: "south-africa", designer: "Peter Matkovich", par: 72, holes: 18, photo: "g_aerial4", note: "Sur la lagune de la Bot River, à une heure du Cap. La fin de parcours le long de l’eau est l’une des plus belles du pays." },
    { id: "erinvale", name: "Erinvale", country: "Afrique du Sud", destination: "south-africa", designer: "Gary Player", par: 72, holes: 18, photo: "g_alpine", note: "Somerset West, au pied du Helderberg. Hôte de la Coupe du monde de golf et belle alternative dans les Winelands." },
    { id: "elephant-hills", name: "Elephant Hills", country: "Zimbabwe", destination: "victoria-falls", designer: "Gary Player", par: 72, holes: 18, photo: "g_sunrise2", note: "Le seul parcours au monde d’où l’on voit les embruns d’une merveille naturelle depuis le départ. Des phacochères sur les fairways, le Zambèze le long du retour." },
    { id: "borrowdale", name: "Borrowdale Brooke", country: "Zimbabwe", destination: "victoria-falls", designer: "Peter Matkovich", par: 72, holes: 18, photo: "g_greenSunrise", note: "Le parcours de championnat de Harare, pour les voyageurs qui passent par la capitale." },
    { id: "heritage-chateau", name: "Heritage Le Château", country: "Maurice", destination: "mauritius", designer: "Peter Matkovich", par: 72, holes: 18, photo: "g_aerialGreen2", note: "Hôte de l’AfrAsia Bank Mauritius Open sur le DP World Tour. Vue sur la mer depuis chaque trou du domaine de Bel Ombre." },
    { id: "heritage-reserve", name: "Heritage La Réserve", country: "Maurice", destination: "mauritius", designer: "Peter Matkovich & Louis Oosthuizen", par: 72, holes: 18, photo: "g_mtnCourse1", note: "Ouvert en 2023 dans les collines au-dessus du Château. Déjà classé parmi les meilleurs de l’île." },
    { id: "ile-aux-cerfs", name: "Île aux Cerfs", country: "Maurice", destination: "mauritius", designer: "Bernhard Langer", par: 72, holes: 18, photo: "g_aerialBunkers", note: "On y accède en bateau depuis la côte est, avec le lagon en jeu sur neuf trous. Déjeuner sur l’île ensuite." },
    { id: "anahita", name: "Anahita", country: "Maurice", destination: "mauritius", designer: "Ernie Els", par: 72, holes: 18, photo: "g_aerial3", note: "Six trous le long de l’océan sur la côte est. Une alternative plus calme à l’Île aux Cerfs, de l’autre côté de l’eau." },
    { id: "entebbe", name: "Entebbe Golf Club", country: "Ouganda", destination: "uganda", designer: "Fondé en 1901", par: 71, holes: 18, photo: "g_sunrise1", note: "Le plus ancien parcours d’Afrique de l’Est, sur la rive du lac Victoria, à quelques pas de l’hôtel. Des marabouts patrouillent les fairways." },
    { id: "uganda-gc", name: "Uganda Golf Club", country: "Ouganda", destination: "uganda", designer: "Kampala, fondé en 1908", par: 72, holes: 18, photo: "g_aerial2", note: "Hôte de l’Open d’Ouganda, au centre de Kampala. Partie facultative pour ceux qui passent une nuit dans la capitale." }
  ];

  /* ---------- Stays ---------- */
  /* Stays show a photo of their location (park, town or landscape), not a stock room or a different
   * property, until the venue supplies images we may use. See IMAGES-NEEDED.md. */
  S.STAYS = [
    { id: "hemingways", name: "Hemingways Nairobi", destination: "kenya", type: "Hôtel de charme", photo: "crossing", note: "Hôtel de charme de style plantation à Karen, à dix minutes du club. Majordomes, un vrai bar et les collines de Ngong depuis la terrasse." },
    { id: "mara-plains", name: "Mara Plains Camp", destination: "kenya", type: "Camp de toile", photo: "crossing", note: "Sept tentes sur la rivière Ntiakitiak, dans la conservancy d’Olare Motorogi. Pistage hors piste, safaris de nuit et les plus belles observations de léopards du Mara." },
    { id: "kili-villas", name: "Kili Golf Villas", destination: "tanzania", type: "Villas sur un domaine de golf", photo: "kilimanjaro", note: "Des villas privées sur le Kilimanjaro Golf & Wildlife Estate, le parcours à la porte et la montagne au petit-déjeuner." },
    { id: "namiri-plains", name: "Namiri Plains", destination: "tanzania", type: "Camp de toile", photo: "herd", note: "Dix suites dans les plaines de l’est du Serengeti, fermées aux visiteurs pendant vingt ans et aujourd’hui pays du guépard. Nuits à la belle étoile sur demande." },
    { id: "highlands", name: "The Highlands, Ngorongoro", destination: "tanzania", type: "Lodge", photo: "rhinoBlack", note: "Des dômes vitrés sur le bord boisé du cratère du Ngorongoro, avec le premier permis de descente du matin." },
    { id: "serengeti-mobile", name: "Camp mobile du Serengeti", destination: "tanzania", type: "Camp mobile", photo: "crossing2", note: "Un camp qui se déplace avec la migration. Moins de confort, de meilleures observations et des dîners au coin du feu sous tout le ciel." },
    { id: "la-residence", name: "La Residence, Franschhoek", destination: "south-africa", type: "Maison de campagne", photo: "capeTown", note: "Onze suites sur un domaine viticole en activité dans la vallée de Franschhoek. Pearl Valley est à vingt minutes." },
    { id: "fancourt-hotel", name: "Fancourt Hotel", destination: "south-africa", type: "Resort de golf", photo: "g_linksGold", note: "Le manoir et l’hôtel au cœur du domaine, avec trois parcours, un spa et The Links à un trajet de voiturette de la chambre." },
    { id: "londolozi", name: "Londolozi", destination: "south-africa", type: "Lodge de safari", photo: "leopard", note: "Tenu par la même famille depuis 1926 à Sabi Sand, c’est la réserve où l’observation des léopards a été inventée. Cinq camps sur la Sand River." },
    { id: "vic-falls-hotel", name: "Victoria Falls Hotel", destination: "victoria-falls", type: "Grand hôtel", photo: "vicBridge", note: "La grande dame de 1904, avec les embruns des chutes depuis la terrasse et Elephant Hills à cinq minutes." },
    { id: "chobe-game-lodge", name: "Chobe Game Lodge", destination: "victoria-falls", type: "Lodge de safari", photo: "zambeziElephant", note: "Le seul lodge à l’intérieur du parc national de Chobe, au bord du fleuve, avec sa propre flotte de bateaux et véhicules électriques." },
    { id: "le-telfair", name: "Heritage Le Telfair", destination: "mauritius", type: "Resort balnéaire", photo: "beach", note: "Un resort de style colonial sur le domaine de Bel Ombre, avec les deux parcours Heritage et une réserve naturelle derrière." },
    { id: "prince-maurice", name: "Constance Prince Maurice", destination: "mauritius", type: "Resort balnéaire", photo: "beach", note: "Des suites sur pilotis au-dessus du lagon, sur la côte est. L’Île aux Cerfs en bateau, le parcours Legend juste à côté." },
    { id: "bwindi-lodge", name: "Bwindi Lodge", destination: "uganda", type: "Lodge en forêt", photo: "gorillaFamily", note: "À la lisière de la forêt impénétrable de Bwindi, le point de briefing du trek à cinq minutes à pied." },
    { id: "mamounia", name: "La Mamounia", destination: "morocco", type: "Hôtel-palace", photo: "koutoubiaGold", note: "La grande dame de Marrakech depuis 1923, avec huit hectares de jardins dans les remparts, un bar Churchill et le Royal Golf à quinze minutes." },
    { id: "scarabeo", name: "Scarabeo Camp, Agafay", destination: "morocco", type: "Camp dans le désert", photo: "desertCamp", note: "Des tentes de toile sur le plateau d’Agafay, à une demi-heure de la ville, des dîners aux chandelles et l’Atlas à l’aube. La nuit entre deux parties à Marrakech." },
    { id: "dar-ahlam", name: "Dar Ahlam, Skoura", destination: "morocco", type: "Kasbah", photo: "oasis", note: "Une kasbah restaurée dans la palmeraie de Skoura, sur la route des dunes, avec des repas servis là où la lumière est la plus belle." },
    { id: "merzouga-camp", name: "Camp de luxe dans le désert de Merzouga", destination: "morocco", type: "Camp dans le désert", photo: "ergChebbi", note: "Un camp privé au milieu des dunes de l’Erg Chebbi : de vrais lits, des douches chaudes, un feu et la Voie lactée. On y arrive à dos de dromadaire au coucher du soleil." },
    { id: "kasbah-tamadot", name: "Kasbah Tamadot", destination: "morocco", type: "Retraite de montagne", photo: "atlasVillage", note: "La kasbah de Sir Richard Branson au pied du Toubkal, à une heure de Marrakech, pour des journées de marche entre deux parties." },
    { id: "rova-hotel", name: "Golf du Rova Hotel", destination: "madagascar", type: "Hôtel de golf", photo: "lemur", note: "Un petit hôtel au club-house sur les collines d’Andakana, pour les premières et dernières nuits d’un voyage à Madagascar." },
    { id: "mantadia-lodge", name: "Mantadia Lodge, Andasibe", destination: "madagascar", type: "Lodge en forêt", photo: "indri3", note: "Un lodge à flanc de colline au-dessus de la forêt d’Andasibe, où l’on entend l’indri depuis la terrasse à l’aube." },
    { id: "kirindy-camp", name: "Camp de la forêt de Kirindy", destination: "madagascar", type: "Camp en forêt", photo: "baobabAvenue", note: "Des bungalows simples au cœur de la forêt sèche, où le fossa traverse le camp en saison sèche. Rustique, et ça en vaut la peine." },
    { id: "tsarabanjina", name: "Constance Tsarabanjina", destination: "madagascar", type: "Île privée", photo: "nosySand", note: "Une île privée au large de Nosy Be, vingt-cinq villas sur deux plages, des récifs à la porte et rien d’autre." },
    { id: "sofitel-cotonou", name: "Sofitel Cotonou Marina", destination: "benin", type: "Hôtel urbain", photo: "ganvie", note: "La meilleure adresse de la ville, sur la marina entre la lagune et l’océan, à quarante minutes du parcours d’Avlékété." },
    { id: "pendjari-lodge", name: "Pendjari Lodge", destination: "benin", type: "Lodge de safari", photo: "eleRoad", note: "À l’intérieur du parc près de l’escarpement de l’Atacora, la base pour les sorties le long de la rivière Pendjari et de ses points d’eau." }
  ];

  /* ---------- Hosted departures ---------- */
  S.DEPARTURES = [
    { id: "kenya-feb-2027", journey: "kenya-classic", start: "2027-02-06", nights: 7, host: "Votre conseiller et un caddie master de Nairobi", priceFrom: 5600, places: 8, left: 0 },
    { id: "cape-mar-2027", journey: "south-africa-signature", start: "2027-03-12", nights: 9, host: "Votre conseiller et un professionnel PGA", priceFrom: 7450, places: 8, left: 3 },
    { id: "falls-jun-2027", journey: "victoria-falls-chobe", start: "2027-06-09", nights: 6, host: "Votre conseiller", priceFrom: 4350, places: 8, left: 5 },
    { id: "kenya-aug-2027", journey: "kenya-classic", start: "2027-08-14", nights: 7, host: "Votre conseiller et un caddie master de Nairobi", priceFrom: 5600, places: 8, left: 2, note: "Saison de la migration" },
    { id: "mauritius-sep-2027", journey: "mauritius-kruger", start: "2027-09-23", nights: 11, host: "Votre conseiller et un professionnel PGA", priceFrom: 9600, places: 8, left: 6 },
    { id: "ladies-cape-oct-2027", journey: "south-africa-signature", start: "2027-10-06", nights: 9, host: "Une professionnelle du Ladies European Tour", priceFrom: 7450, places: 8, left: 8, note: "Départ féminin" },
    { id: "kenya-jan-2028", journey: "kenya-classic", start: "2028-01-21", nights: 7, host: "Votre conseiller", priceFrom: 5800, places: 8, left: 8 },
    { id: "tanzania-feb-2028", journey: "tanzania-grand", start: "2028-02-18", nights: 10, host: "Votre conseiller et un professionnel PGA", priceFrom: 8100, places: 8, left: 8, note: "Saison des mises bas" },
    { id: "grand-aug-2028", journey: "grand-crossing", start: "2028-08-05", nights: 14, host: "Les deux fondateurs", priceFrom: 19800, places: 8, left: 8, note: "Départ phare" }
  ];

  /* ---------- Encounters ---------- */
  S.ENCOUNTERS = [
    { id: "play-with-a-pro", name: "Jouer avec un professionnel du circuit", where: "Fancourt · Heritage · Karen", photo: "g_drive", text: "Dix-huit trous avec un professionnel PGA ou du Ladies European Tour comme quatrième partenaire, suivis d’un déjeuner et d’une clinique de petit jeu. Possible sur les départs accompagnés et, avec préavis, sur les voyages sur mesure.", journeys: ["south-africa-signature", "mauritius-kruger", "kenya-classic"] },
    { id: "gorillas", name: "Une heure avec les gorilles des montagnes", where: "Forêt impénétrable de Bwindi", photo: "highlands", text: "Un trek matinal avec les rangers jusqu’à une famille habituée à l’homme, puis une heure en sa compagnie. Les permis sont limités et réservés des mois à l’avance ; nous disposons d’un quota pour nos voyageurs.", journeys: ["uganda-short-break"] },
    { id: "balloon", name: "L’aube sur le Mara en montgolfière", where: "Masai Mara", photo: "balloon", text: "Décollage avant le lever du soleil, une heure à dériver au-dessus des troupeaux, et un petit-déjeuner au champagne dans la plaine où vous atterrissez. La matinée la plus photographiée de tous les voyages.", journeys: ["kenya-classic", "grand-crossing"] },
    { id: "leopard-tracking", name: "Pister le léopard avec un spécialiste", where: "Sabi Sand", photo: "leopard", text: "Un véhicule privé avec l’un des pisteurs les plus expérimentés de la réserve pendant une journée entière, à suivre un seul animal de la proie du matin à l’arbre du soir. Sabi Sand est le seul endroit où cela fonctionne de manière fiable.", journeys: ["south-africa-signature", "grand-crossing"] },
    { id: "rhino-rangers", name: "Une matinée avec les rangers des rhinocéros", where: "Laikipia · Ngorongoro", photo: "elephantHeadOn", text: "Marchez avec l’unité anti-braconnage qui protège le rhinocéros noir, découvrez comment les animaux sont suivis et où va le droit de conservancy de chaque voyage.", journeys: ["kenya-classic", "tanzania-grand"] },
    { id: "maasai-morning", name: "Une matinée avec une communauté maasaï", where: "Hauts plateaux du Ngorongoro", photo: "acaciaSunset", text: "Pas une visite de village mise en scène. Une matinée à marcher avec les bergers, un repas avec une famille que nous connaissons depuis des années, et le temps de poser les questions que vous voulez vraiment poser.", journeys: ["tanzania-grand"] },
    { id: "zambezi-sunset", name: "Le Zambèze au coucher du soleil", where: "Chutes Victoria · Chobe", photo: "elephantsSunset", text: "Un bateau privé en amont des chutes quand les éléphants descendent boire, puis un dîner sur la berge. À Chobe, la même heure en bateau électrique le long de la plaine inondable.", journeys: ["victoria-falls-chobe", "grand-crossing"] }
  ];

  /* ---------- Journal ---------- */
  S.JOURNAL = [
    {
      slug: "links-after-the-refurbishment",
      category: "Golf · Afrique du Sud",
      title: "The Links après la rénovation",
      date: "Septembre 2026",
      photo: "g_dawnBunkers",
      standfirst: "Le parcours phare de Fancourt a rouvert avec de nouveaux bunkers et une surface plus ferme et plus rapide. Il joue deux coups plus difficile face au vent, et c’est tant mieux.",
      body: [
        "Nous avons joué The Links trois fois dans les quinze jours suivant sa réouverture, deux fois face à un vent de sud-est et une fois dans le calme plat que George vous accorde peut-être un matin sur dix. Le travail est subtil depuis le départ et évident depuis le fairway : les bunkers ont été reconstruits avec des faces en gazon empilé et des fonds plus profonds, les greens sont plus fermes, et les dégagements qui retenaient la balle l’éloignent désormais.",
        "Concrètement, le parcours récompense à nouveau l’approche roulée, ce que voulait Gary Player et ce qu’une décennie de conditions molles avait discrètement effacé. Face au vent, un fer 7 bien frappé atterrit court et roule ; le même coup porté jusqu’au drapeau finit derrière le green. Nos voyageurs habitués aux links ont adoré. Nos joueurs de parcours de parc ont eu besoin d’une partie pour s’adapter.",
        "Notre conseil pour les voyages : jouez Montagu d’abord, The Links ensuite, et prenez le caddie. Les caddies arpentent les nouveaux dégagements depuis des mois et vous feront gagner trois coups avant le retour. Les certificats de handicap sont vérifiés à l’accueil : apportez le papier ou l’appli."
      ]
    },
    {
      slug: "when-to-see-the-mara-crossings",
      category: "Safari · Kenya",
      title: "Quand voir les traversées du Mara",
      date: "Août 2026",
      photo: "balloon",
      standfirst: "Les troupeaux arrivent chaque année plus tôt. De fin juillet à septembre, c’est désormais la fenêtre la plus sûre, avec des conservancies plus calmes dans la seconde moitié.",
      body: [
        "La Grande Migration ne suit pas de calendrier, mais elle suit l’herbe, et l’herbe verdit plus tôt dans le nord du Serengeti depuis plusieurs saisons. En 2026, les premières grandes traversées de la rivière Mara ont eu lieu la deuxième semaine de juillet, quinze jours avant la moyenne à long terme. À la mi-août, les troupeaux étaient répartis dans le Mara Triangle et les conservancies au nord.",
        "Pour un safari golf, le calendrier compte deux fois. D’abord pour les traversées elles-mêmes, qui sont une probabilité et non une promesse : trois ou quatre journées complètes sur la rivière en août vous donnent de fortes chances, une seule journée c’est pile ou face. Ensuite pour les parcours de Nairobi, au meilleur de leur forme pendant la saison sèche de juillet à septembre, et parfois lourds après les petites pluies de novembre.",
        "Notre départ accompagné Kenya Classic d’août 2027 repose sur ce principe : quatre nuits côté Mara, avec le golf avant plutôt qu’après, pour que personne ne consulte son téléphone au départ du 14 en attendant des nouvelles d’une traversée."
      ]
    },
    {
      slug: "chobe-by-boat",
      category: "Safari · Botswana",
      title: "Chobe en bateau, pas par la route",
      date: "Juillet 2026",
      photo: "elephantsSunset",
      standfirst: "En saison sèche, la berge est tout le spectacle. Nous plaçons désormais chaque après-midi à Chobe sur l’eau et gardons le 4x4 pour l’aube.",
      body: [
        "Chobe abrite la plus grande population d’éléphants d’Afrique, et de juin à octobre presque tous se trouvent à moins d’un kilomètre du fleuve. La route qui longe la berge est une belle sortie, mais c’est aussi la route la plus fréquentée du Botswana l’après-midi, et un troupeau qui traverse vers les îles se voit mieux depuis l’eau, à hauteur de ses yeux.",
        "Chobe Game Lodge dispose d’une flotte de bateaux électriques silencieux, ce qui change complètement l’expérience. Vous êtes assis dans les roseaux pendant que les éléphants nagent devant la proue, et le seul bruit est celui de l’eau. Buffles, hippopotames, crocodiles et pygargues vocifères sont tous plus proches qu’aucun véhicule ne peut l’être.",
        "Le voyage Falls & Fairways prévoit donc les sorties matinales dans l’intérieur pour les lions et les hippotragues noirs, et chaque après-midi sur le fleuve, avec un apéritif au coucher du soleil quand les troupeaux descendent. Les golfeurs qui arrivent d’Elephant Hills la veille y trouvent le contrepoids parfait."
      ]
    },
    {
      slug: "packing-clubs-for-africa",
      category: "Pratique",
      title: "Emporter ses clubs en Afrique : ce qui marche vraiment",
      date: "Juin 2026",
      photo: "irons",
      standfirst: "Apportez vos propres clubs si vous le pouvez. Voici comment faire sans les embarquer dans un avion de douze places.",
      body: [
        "La plupart de nos voyageurs veulent leurs propres clubs pour Fancourt ou Leopard Creek et se moquent bien de ce qu’ils jouent à Skukuza. La réponse : une housse rigide pour le vol international, puis nous laisser transporter les clubs par la route ou par fret régulier entre les étapes golf, pendant que vous volez vers la brousse en petit avion avec un sac souple.",
        "Les petits avions au Kenya, en Tanzanie et au Botswana limitent les sacs souples à 15 kilos et n’ont pas de place pour une housse de golf. Plutôt que de négocier sur la piste, nous envoyons les clubs au parcours suivant et ils vous attendent au pro shop à l’atterrissage. Sur The Grand Crossing, les clubs vont de Fancourt à Leopard Creek, Elephant Hills et Karen sans que vous les touchiez.",
        "Si vous préférez ne pas voyager avec vos clubs, chaque parcours que nous utilisons propose des séries de location de qualité, et nous pouvons vous réserver une même série pour tout le voyage afin que les sensations ne changent pas. Indiquez vos préférences lors de votre demande et nous confirmerons ce que chaque parcours peut fournir."
      ]
    },
    {
      slug: "a-day-in-two-halves",
      category: "Pourquoi un safari golf",
      title: "Une journée en deux moitiés",
      date: "Mai 2026",
      photo: "g_duskPair",
      standfirst: "Comment nous construisons une journée de safari golf pour qu’aucune moitié ne paraisse être le prix de l’autre.",
      body: [
        "La plus vieille objection au safari golf, c’est qu’il serait forcément un compromis : trop peu de golf pour le golfeur, trop peu de brousse pour le non-golfeur. L’objection est juste pour une journée mal construite, et la plupart des forfaits golf et safari que nous voyons sont mal construits, avec la partie greffée sur un jour de repos et le safari coincé dans l’heure avant le dîner.",
        "Notre journée commence dans la nature. Le petit matin est le moment où les animaux bougent et où la température est clémente : la sortie du matin part à six heures et rentre à dix. La partie commence à onze heures, quand la lumière est haute et les fairways vides, et se termine vers seize heures. Le soir appartient de nouveau à la brousse : une courte sortie, un apéritif au coucher du soleil, un dîner dehors.",
        "Là où le parcours et le camp ne sont pas au même endroit, nous ne coupons pas la journée. Nous coupons le voyage : trois jours de golf d’affilée, puis quatre jours de safari, avec les clubs envoyés en avance. Les non-golfeurs profitent du spa, du vignoble ou d’une autre sortie les jours de golf, et le groupe se retrouve pour le déjeuner. Tout le monde rentre comblé."
      ]
    },
    {
      slug: "mauritius-in-october",
      category: "Golf · Maurice",
      title: "Maurice après l’Open : pourquoi octobre est le bon mois",
      date: "Avril 2026",
      photo: "g_seaCourse",
      standfirst: "Le DP World Tour quitte Heritage en décembre. Jouez-le en octobre, quand les parcours sont prêts pour le tournoi et que l’île est sèche.",
      body: [
        "Le Château est préparé pour l’AfrAsia Bank Mauritius Open dès septembre : à partir d’octobre, les greens ont la vitesse d’un tournoi et le rough est haut. C’est le meilleur mois pour voir le parcours comme les professionnels. C’est aussi le dernier mois avant l’arrivée de l’humidité estivale et des averses régulières de l’après-midi.",
        "La Réserve, ouvert au-dessus du Château en 2023, se joue très différemment : plus court, plus vallonné, avec plus de coups à construire et plus de vues. Nous recommandons Le Château le premier jour et La Réserve le deuxième, puis un jour de repos avant le bateau pour l’Île aux Cerfs.",
        "Combiné avec le Kruger, octobre marque aussi la fin de la saison sèche et la meilleure observation de la faune de l’année : c’est pourquoi le voyage Maurice & Kruger et son départ accompagné se situent fin septembre et en octobre. Les vols via Johannesburg se connectent le jour même."
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
