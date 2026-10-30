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
    { id: "karen", name: "Karen Country Club", country: "Kenia", destination: "kenya", designer: "Remington & Bernard (1937)", par: 72, holes: 18, photo: "g_greenTrees", note: "Baumgesäumter Parklandplatz am Rand der Ngong-Berge, zwanzig Minuten von den Hotels in Nairobi. Der vollständigste Club Ostafrikas." },
    { id: "muthaiga", name: "Muthaiga Golf Club", country: "Kenia", destination: "kenya", designer: "Gegründet 1913", par: 72, holes: 18, photo: "g_savannaCourse", note: "Kenias Heimat des Golfs und Austragungsort der Kenya Open. Eng, gewachsen und gnadenlos vom Abschlag." },
    { id: "windsor", name: "Windsor Golf Hotel & Country Club", country: "Kenia", destination: "kenya", designer: "Tom Macaulay", par: 72, holes: 18, photo: "g_aerialRolling", note: "Meisterschaftsplatz durch heimischen Wald im Norden Nairobis, ideal für eine Abschiedsrunde vor einem Abendflug." },
    { id: "vipingo", name: "Vipingo Ridge", country: "Kenia", destination: "kenya", designer: "David Jones", par: 72, holes: 18, photo: "g_seaCourse", note: "Der PGA-akkreditierte Baobab Course auf einem Höhenzug über dem Indischen Ozean nördlich von Mombasa. Die Verlängerung an der Küste." },
    { id: "rift-valley", name: "Great Rift Valley Lodge", country: "Kenia", destination: "kenya", designer: "Sam Lacey", par: 72, holes: 18, photo: "g_mtnCourse2", note: "Hoch über dem Naivashasee, unter jedem Loch der Grabenbruch. Zebras und Giraffen auf den Fairways." },
    { id: "kili", name: "Kilimanjaro Golf & Wildlife Estate", country: "Tansania", destination: "tanzania", designer: "David Jones", par: 72, holes: 18, photo: "g_mtnWalk", note: "Zwischen Meru und Kilimandscharo auf einem privaten Wildgut. Man spielt zwischen Zebras und Gnus, der Berg hinter dem Grün." },
    { id: "sea-cliff", name: "Sea Cliff Resort, Sansibar", country: "Tansania", destination: "tanzania", designer: "Peter Matkovich", par: 36, holes: 9, photo: "g_palmsWater", note: "Neun Löcher am Meer an der Nordwestküste Sansibars. Die Strandverlängerung nach der Serengeti." },
    { id: "fancourt-links", name: "Fancourt The Links", country: "Südafrika", destination: "south-africa", designer: "Gary Player", par: 73, holes: 18, photo: "g_linksGold", note: "Südafrikas Nummer eins und Austragungsort des Presidents Cup. Ein Links auf flachem Feld gebaut, mit Dünen, Wind und festem, schnellem Boden. Caddies inbegriffen." },
    { id: "fancourt-montagu", name: "Fancourt Montagu", country: "Südafrika", destination: "south-africa", designer: "Gary Player", par: 72, holes: 18, photo: "g_dawnBunkers", note: "Parkland-Meisterwerk am Fuß der Outeniqua-Berge, verfeinert von David McLay Kidd. Der sanftere der beiden Meisterschaftsplätze von Fancourt." },
    { id: "fancourt-outeniqua", name: "Fancourt Outeniqua", country: "Südafrika", destination: "south-africa", designer: "Gary Player", par: 72, holes: 18, photo: "g_aerialPond", note: "Breite Fairways und Wasser an zehn Löchern. Die Aufwärmrunde bei der Ankunft in Fancourt." },
    { id: "pearl-valley", name: "Pearl Valley", country: "Südafrika", destination: "south-africa", designer: "Jack Nicklaus", par: 72, holes: 18, photo: "g_mountainsRoses", note: "Nicklaus-Signature-Platz zwischen den Weinbergen von Paarl, dahinter der Simonsberg. Austragungsort der South African Open." },
    { id: "leopard-creek", name: "Leopard Creek", country: "Südafrika", destination: "south-africa", designer: "Gary Player", par: 72, holes: 18, photo: "g_bigTree", note: "Am Crocodile River an der Grenze zum Kruger. Flusspferde und Krokodile säumen die 13, Elefanten queren das andere Ufer. Zugang nur auf Einladung, die wir arrangieren." },
    { id: "skukuza", name: "Skukuza Golf Club", country: "Südafrika", destination: "south-africa", designer: "Kruger-Nationalpark", par: 72, holes: 9, photo: "g_flagMist", note: "Neun Löcher ohne Zaun mitten im Kruger-Nationalpark, zweimal gespielt. Das Rough ist wirklich wild, und ein Ranger geht die Runde mit." },
    { id: "arabella", name: "Arabella", country: "Südafrika", destination: "south-africa", designer: "Peter Matkovich", par: 72, holes: 18, photo: "g_aerial4", note: "An der Bot-River-Lagune, eine Stunde von Kapstadt. Das Finish am Wasser gehört zu den besten des Landes." },
    { id: "erinvale", name: "Erinvale", country: "Südafrika", destination: "south-africa", designer: "Gary Player", par: 72, holes: 18, photo: "g_alpine", note: "Somerset West, am Fuß des Helderbergs. Austragungsort des World Cup of Golf und eine schöne Alternative in den Winelands." },
    { id: "elephant-hills", name: "Elephant Hills", country: "Simbabwe", destination: "victoria-falls", designer: "Gary Player", par: 72, holes: 18, photo: "g_sunrise2", note: "Der einzige Platz der Welt, auf dem man vom Abschlag die Gischt eines Naturwunders sieht. Warzenschweine auf den Fairways, der Sambesi neben den zweiten Neun." },
    { id: "borrowdale", name: "Borrowdale Brooke", country: "Simbabwe", destination: "victoria-falls", designer: "Peter Matkovich", par: 72, holes: 18, photo: "g_greenSunrise", note: "Der Meisterschaftsplatz von Harare, für Gäste mit Route über die Hauptstadt." },
    { id: "heritage-chateau", name: "Heritage Le Château", country: "Mauritius", destination: "mauritius", designer: "Peter Matkovich", par: 72, holes: 18, photo: "g_aerialGreen2", note: "Austragungsort der AfrAsia Bank Mauritius Open auf der DP World Tour. Meerblick von jedem Loch des Anwesens Bel Ombre." },
    { id: "heritage-reserve", name: "Heritage La Réserve", country: "Mauritius", destination: "mauritius", designer: "Peter Matkovich & Louis Oosthuizen", par: 72, holes: 18, photo: "g_mtnCourse1", note: "2023 in den Hügeln über Le Château eröffnet. Schon jetzt einer der besten der Insel." },
    { id: "ile-aux-cerfs", name: "Île aux Cerfs", country: "Mauritius", destination: "mauritius", designer: "Bernhard Langer", par: 72, holes: 18, photo: "g_aerialBunkers", note: "Mit dem Boot von der Ostküste erreichbar, die Lagune ist an neun Löchern im Spiel. Danach Mittagessen auf der Insel." },
    { id: "anahita", name: "Anahita", country: "Mauritius", destination: "mauritius", designer: "Ernie Els", par: 72, holes: 18, photo: "g_aerial3", note: "Sechs Löcher am Meer an der Ostküste. Eine ruhigere Alternative zur Île aux Cerfs gegenüber." },
    { id: "entebbe", name: "Entebbe Golf Club", country: "Uganda", destination: "uganda", designer: "Gegründet 1901", par: 71, holes: 18, photo: "g_sunrise1", note: "Der älteste Platz Ostafrikas, am Ufer des Victoriasees, wenige Schritte vom Hotel. Marabus patrouillieren auf den Fairways." },
    { id: "uganda-gc", name: "Uganda Golf Club", country: "Uganda", destination: "uganda", designer: "Kampala, gegründet 1908", par: 72, holes: 18, photo: "g_aerial2", note: "Austragungsort der Uganda Open im Zentrum von Kampala. Optionale Runde für alle mit einer Nacht in der Hauptstadt." }
  ];

  /* ---------- Stays ---------- */
  /* Stays show a photo of their location (park, town or landscape), not a stock room or a different
   * property, until the venue supplies images we may use. See IMAGES-NEEDED.md. */
  S.STAYS = [
    { id: "hemingways", name: "Hemingways Nairobi", destination: "kenya", type: "Boutique-Hotel", photo: "crossing", note: "Boutique-Hotel im Plantagenstil in Karen, zehn Minuten vom Club. Butler, eine richtige Bar und die Ngong-Berge von der Terrasse." },
    { id: "mara-plains", name: "Mara Plains Camp", destination: "kenya", type: "Zeltcamp", photo: "crossing", note: "Sieben Zelte am Ntiakitiak-Fluss im Olare-Motorogi-Schutzgebiet. Spurensuche abseits der Wege, Nachtfahrten und die besten Leopardensichtungen der Mara." },
    { id: "kili-villas", name: "Kili Golf Villas", destination: "tanzania", type: "Villen auf einem Golfgut", photo: "kilimanjaro", note: "Private Villen auf dem Kilimanjaro Golf & Wildlife Estate, der Platz vor der Tür und der Berg zum Frühstück." },
    { id: "namiri-plains", name: "Namiri Plains", destination: "tanzania", type: "Zeltcamp", photo: "herd", note: "Zehn Suiten in den Ebenen der östlichen Serengeti, zwanzig Jahre für Besucher gesperrt und heute Gepardenland. Sternenbetten auf Anfrage." },
    { id: "highlands", name: "The Highlands, Ngorongoro", destination: "tanzania", type: "Lodge", photo: "rhinoBlack", note: "Verglaste Kuppeln am bewaldeten Rand des Ngorongoro-Kraters, mit der frühesten Abstiegsgenehmigung am Morgen." },
    { id: "serengeti-mobile", name: "Mobiles Camp in der Serengeti", destination: "tanzania", type: "Mobiles Camp", photo: "crossing2", note: "Ein Camp, das mit der Migration wandert. Weniger Komfort, bessere Sichtungen und Abendessen am Lagerfeuer unter dem ganzen Himmel." },
    { id: "la-residence", name: "La Residence, Franschhoek", destination: "south-africa", type: "Landhaus", photo: "capeTown", note: "Elf Suiten auf einem Weingut im Franschhoek-Tal. Pearl Valley liegt zwanzig Minuten entfernt." },
    { id: "fancourt-hotel", name: "Fancourt Hotel", destination: "south-africa", type: "Golfresort", photo: "g_linksGold", note: "Herrenhaus und Hotel im Herzen des Anwesens, mit drei Plätzen, einem Spa und The Links eine Cart-Fahrt vom Zimmer entfernt." },
    { id: "londolozi", name: "Londolozi", destination: "south-africa", type: "Safari-Lodge", photo: "leopard", note: "Seit 1926 in Familienhand im Sabi Sand, das Reservat, in dem die Leopardenbeobachtung erfunden wurde. Fünf Camps am Sand River." },
    { id: "vic-falls-hotel", name: "Victoria Falls Hotel", destination: "victoria-falls", type: "Grandhotel", photo: "vicBridge", note: "Die Grande Dame von 1904, mit der Gischt der Fälle von der Terrasse und Elephant Hills fünf Minuten die Straße hinauf." },
    { id: "chobe-game-lodge", name: "Chobe Game Lodge", destination: "victoria-falls", type: "Safari-Lodge", photo: "zambeziElephant", note: "Die einzige Lodge im Chobe-Nationalpark, direkt am Fluss, mit eigener Flotte elektrischer Boote und Fahrzeuge." },
    { id: "le-telfair", name: "Heritage Le Telfair", destination: "mauritius", type: "Strandresort", photo: "beach", note: "Resort im Kolonialstil auf dem Anwesen Bel Ombre, mit beiden Heritage-Plätzen und einem Naturreservat dahinter." },
    { id: "prince-maurice", name: "Constance Prince Maurice", destination: "mauritius", type: "Strandresort", photo: "beach", note: "Suiten auf Stelzen über der Lagune an der Ostküste. Die Île aux Cerfs per Boot, der Legend-Platz nebenan." },
    { id: "bwindi-lodge", name: "Bwindi Lodge", destination: "uganda", type: "Waldlodge", photo: "gorillaFamily", note: "Am Rand des Bwindi Impenetrable Forest, der Treffpunkt für das Trekking fünf Gehminuten entfernt." },
    { id: "mamounia", name: "La Mamounia", destination: "morocco", type: "Palasthotel", photo: "koutoubiaGold", note: "Die Grande Dame von Marrakesch seit 1923, mit acht Hektar Gärten innerhalb der Stadtmauern, einer Churchill-Bar und dem Royal Golf fünfzehn Minuten entfernt." },
    { id: "scarabeo", name: "Scarabeo Camp, Agafay", destination: "morocco", type: "Wüstencamp", photo: "desertCamp", note: "Zelte auf dem Agafay-Plateau eine halbe Stunde von der Stadt, Abendessen bei Kerzenlicht und der Atlas im Morgengrauen. Die Nacht zwischen zwei Runden in Marrakesch." },
    { id: "dar-ahlam", name: "Dar Ahlam, Skoura", destination: "morocco", type: "Kasbah", photo: "oasis", note: "Eine restaurierte Kasbah im Palmenhain von Skoura auf dem Weg zu den Dünen, mit Mahlzeiten dort, wo das Licht am schönsten ist." },
    { id: "merzouga-camp", name: "Luxus-Wüstencamp in Merzouga", destination: "morocco", type: "Wüstencamp", photo: "ergChebbi", note: "Ein privates Camp in den Dünen des Erg Chebbi: richtige Betten, heiße Duschen, ein Feuer und die Milchstraße. Anreise per Kamel bei Sonnenuntergang." },
    { id: "kasbah-tamadot", name: "Kasbah Tamadot", destination: "morocco", type: "Bergrefugium", photo: "atlasVillage", note: "Sir Richard Bransons Kasbah am Fuß des Toubkal, eine Stunde von Marrakesch, für Wandertage zwischen den Runden." },
    { id: "rova-hotel", name: "Golf du Rova Hotel", destination: "madagascar", type: "Golfhotel", photo: "lemur", note: "Ein kleines Hotel am Clubhaus in den Andakana-Hügeln, für die ersten und letzten Nächte einer Madagaskar-Reise." },
    { id: "mantadia-lodge", name: "Mantadia Lodge, Andasibe", destination: "madagascar", type: "Waldlodge", photo: "indri3", note: "Hanglodge über dem Wald von Andasibe, im Morgengrauen hört man die Indris von der Terrasse." },
    { id: "kirindy-camp", name: "Kirindy-Waldcamp", destination: "madagascar", type: "Waldcamp", photo: "baobabAvenue", note: "Einfache Bungalows mitten im Trockenwald, durch den in der Trockenzeit die Fossa streift. Rustikal und es wert." },
    { id: "tsarabanjina", name: "Constance Tsarabanjina", destination: "madagascar", type: "Privatinsel", photo: "nosySand", note: "Eine Privatinsel vor Nosy Be mit fünfundzwanzig Villen an zwei Stränden, Riffen vor der Tür und sonst nichts." },
    { id: "sofitel-cotonou", name: "Sofitel Cotonou Marina", destination: "benin", type: "Stadthotel", photo: "ganvie", note: "Die beste Adresse der Stadt, an der Marina zwischen Lagune und Ozean, vierzig Minuten vom Platz in Avlékété." },
    { id: "pendjari-lodge", name: "Pendjari Lodge", destination: "benin", type: "Safari-Lodge", photo: "eleRoad", note: "Im Park nahe der Atakora-Kette, die Basis für Fahrten entlang des Pendjari-Flusses und seiner Wasserlöcher." }
  ];

  /* ---------- Hosted departures ---------- */
  S.DEPARTURES = [
    { id: "kenya-feb-2027", journey: "kenya-classic", start: "2027-02-06", nights: 7, host: "Ihr Planer und ein Caddiemaster aus Nairobi", priceFrom: 5600, places: 8, left: 0 },
    { id: "cape-mar-2027", journey: "south-africa-signature", start: "2027-03-12", nights: 9, host: "Ihr Planer und ein PGA-Professional", priceFrom: 7450, places: 8, left: 3 },
    { id: "falls-jun-2027", journey: "victoria-falls-chobe", start: "2027-06-09", nights: 6, host: "Ihr Planer", priceFrom: 4350, places: 8, left: 5 },
    { id: "kenya-aug-2027", journey: "kenya-classic", start: "2027-08-14", nights: 7, host: "Ihr Planer und ein Caddiemaster aus Nairobi", priceFrom: 5600, places: 8, left: 2, note: "Migrationszeit" },
    { id: "mauritius-sep-2027", journey: "mauritius-kruger", start: "2027-09-23", nights: 11, host: "Ihr Planer und ein PGA-Professional", priceFrom: 9600, places: 8, left: 6 },
    { id: "ladies-cape-oct-2027", journey: "south-africa-signature", start: "2027-10-06", nights: 9, host: "Eine Proette der Ladies European Tour", priceFrom: 7450, places: 8, left: 8, note: "Damenreise" },
    { id: "kenya-jan-2028", journey: "kenya-classic", start: "2028-01-21", nights: 7, host: "Ihr Planer", priceFrom: 5800, places: 8, left: 8 },
    { id: "tanzania-feb-2028", journey: "tanzania-grand", start: "2028-02-18", nights: 10, host: "Ihr Planer und ein PGA-Professional", priceFrom: 8100, places: 8, left: 8, note: "Kalbungszeit" },
    { id: "grand-aug-2028", journey: "grand-crossing", start: "2028-08-05", nights: 14, host: "Beide Gründer", priceFrom: 19800, places: 8, left: 8, note: "Flaggschiff-Termin" }
  ];

  /* ---------- Encounters ---------- */
  S.ENCOUNTERS = [
    { id: "play-with-a-pro", name: "Mit einem Tourprofi spielen", where: "Fancourt · Heritage · Karen", photo: "g_drive", text: "Achtzehn Löcher mit einem Profi der PGA oder der Ladies European Tour als viertem Spieler, danach Mittagessen und eine Kurzspiel-Klinik. Auf begleiteten Reisen und, mit Vorlauf, auf Reisen nach Maß möglich.", journeys: ["south-africa-signature", "mauritius-kruger", "kenya-classic"] },
    { id: "gorillas", name: "Eine Stunde bei den Berggorillas", where: "Bwindi Impenetrable Forest", photo: "highlands", text: "Ein Morgentrekking mit Rangern zu einer habituierten Familie, dann eine Stunde in ihrer Gesellschaft. Permits sind begrenzt und werden Monate im Voraus gesichert; wir halten ein Kontingent für unsere Gäste.", journeys: ["uganda-short-break"] },
    { id: "balloon", name: "Morgendämmerung über der Mara im Ballon", where: "Masai Mara", photo: "balloon", text: "Start vor Sonnenaufgang, eine Stunde Schweben über den Herden und ein Champagnerfrühstück in der Ebene, wo Sie landen. Der meistfotografierte Morgen jeder Reise.", journeys: ["kenya-classic", "grand-crossing"] },
    { id: "leopard-tracking", name: "Leoparden-Tracking mit einem Spezialisten", where: "Sabi Sand", photo: "leopard", text: "Ein privates Fahrzeug mit einem der erfahrensten Fährtenleser des Reservats für einen ganzen Tag, einem einzigen Tier folgend, vom Riss am Morgen bis zum Baum am Abend. Nur im Sabi Sand klappt das verlässlich.", journeys: ["south-africa-signature", "grand-crossing"] },
    { id: "rhino-rangers", name: "Ein Morgen mit den Nashorn-Rangern", where: "Laikipia · Ngorongoro", photo: "elephantHeadOn", text: "Gehen Sie mit der Anti-Wilderei-Einheit, die das Spitzmaulnashorn schützt, sehen Sie, wie die Tiere verfolgt werden, und erfahren Sie, wohin die Schutzgebietsgebühr jeder Reise fließt.", journeys: ["kenya-classic", "tanzania-grand"] },
    { id: "maasai-morning", name: "Ein Morgen mit einer Massai-Gemeinschaft", where: "Hochland von Ngorongoro", photo: "acaciaSunset", text: "Kein inszenierter Dorfbesuch. Ein Morgen mit den Hirten unterwegs, ein Essen mit einer Familie, die wir seit Jahren kennen, und Zeit, die Fragen zu stellen, die Sie wirklich stellen wollen.", journeys: ["tanzania-grand"] },
    { id: "zambezi-sunset", name: "Der Sambesi bei Sonnenuntergang", where: "Victoriafälle · Chobe", photo: "elephantsSunset", text: "Ein privates Boot oberhalb der Fälle, wenn die Elefanten zum Trinken kommen, dann Abendessen am Ufer. Am Chobe dieselbe Stunde im Elektroboot entlang der Überschwemmungsebene.", journeys: ["victoria-falls-chobe", "grand-crossing"] }
  ];

  /* ---------- Journal ---------- */
  S.JOURNAL = [
    {
      slug: "links-after-the-refurbishment",
      category: "Golf · Südafrika",
      title: "The Links nach der Renovierung",
      date: "September 2026",
      photo: "g_dawnBunkers",
      standfirst: "Fancourts Flaggschiff hat mit neuen Bunkern und festerem, schnellerem Boden wiedereröffnet. Gegen den Wind spielt er zwei Schläge schwerer und ist dadurch besser.",
      body: [
        "Wir haben The Links in den zwei Wochen nach der Wiedereröffnung dreimal gespielt, zweimal gegen einen Südost und einmal in der Windstille, die George vielleicht an einem von zehn Morgen schenkt. Vom Abschlag ist die Arbeit subtil, vom Fairway offensichtlich: Die Bunker wurden mit Sodenwänden und tieferen Böden neu gebaut, die Grüns sind fester, und die Auslaufzonen, die früher einen Ball hielten, leiten ihn jetzt weg.",
        "Praktisch belohnt der Platz wieder den flachen, rollenden Annäherungsschlag, so wie Gary Player es wollte und wie es zehn Jahre weicher Bedingungen still verdrängt hatten. Gegen den Wind landet ein gut getroffenes Eisen 7 jetzt kurz und rollt aus; derselbe Schlag bis zur Fahne geflogen endet hinter dem Grün. Unsere Gäste mit Links-Erfahrung waren begeistert. Unsere Parkland-Spieler brauchten eine Runde zum Umstellen.",
        "Unser Rat für die Reisen: zuerst Montagu, dann The Links spielen und den Caddie nehmen. Die Caddies kennen die neuen Auslaufzonen seit Monaten und sparen Ihnen drei Schläge vor dem Turn. Handicap-Nachweise werden am Empfang geprüft, bringen Sie also das Papier oder die App mit."
      ]
    },
    {
      slug: "when-to-see-the-mara-crossings",
      category: "Safari · Kenia",
      title: "Wann man die Mara-Überquerungen sieht",
      date: "August 2026",
      photo: "balloon",
      standfirst: "Die Herden kommen jedes Jahr früher. Ende Juli bis September ist jetzt das sicherste Zeitfenster, in der zweiten Hälfte sind die Schutzgebiete am ruhigsten.",
      body: [
        "Die Große Migration folgt keinem Kalender, aber dem Gras, und das Gras wird in der nördlichen Serengeti seit einigen Saisons früher grün. 2026 gab es die ersten großen Überquerungen des Mara-Flusses in der zweiten Juliwoche, zwei Wochen vor dem langjährigen Mittel. Mitte August waren die Herden über das Mara-Dreieck und die Schutzgebiete im Norden verteilt.",
        "Bei einer Golfsafari zählt das Timing doppelt. Erstens für die Überquerungen selbst, die eine Wahrscheinlichkeit und kein Versprechen sind: Drei oder vier volle Tage am Fluss im August geben gute Chancen, ein Tag ist ein Münzwurf. Zweitens für die Plätze in Nairobi, die in der Trockenzeit von Juli bis September in Bestform sind und nach der kleinen Regenzeit im November schwer sein können.",
        "Unsere begleitete Reise Kenya Classic im August 2027 baut darauf auf: vier Nächte auf der Mara-Seite, das Golf davor statt danach, damit niemand am 14. Abschlag auf dem Handy nach einer Überquerung schaut."
      ]
    },
    {
      slug: "chobe-by-boat",
      category: "Safari · Botswana",
      title: "Chobe per Boot, nicht per Straße",
      date: "Juli 2026",
      photo: "elephantsSunset",
      standfirst: "In der Trockenzeit ist das Flussufer die ganze Vorstellung. Jeden Nachmittag am Chobe verbringen wir jetzt auf dem Wasser, den Geländewagen behalten wir für den Morgen.",
      body: [
        "Chobe hat die größte Elefantenpopulation Afrikas, und von Juni bis Oktober ist fast die ganze innerhalb eines Kilometers vom Fluss. Die Uferstraße ist eine schöne Fahrt, nachmittags aber auch die belebteste Straße Botswanas, und eine Herde, die zu den Inseln schwimmt, sieht man am besten vom Wasser auf Augenhöhe.",
        "Die Chobe Game Lodge hat eine Flotte leiser Elektroboote, was das Erlebnis völlig verändert. Man sitzt im Schilf, während die Elefanten am Bug vorbeischwimmen, und das einzige Geräusch ist das Wasser. Büffel, Flusspferde, Krokodile und Schreiseeadler sind näher, als es ein Fahrzeug je schafft.",
        "Die Reise Falls & Fairways hat deshalb jetzt Morgenfahrten im Hinterland für Löwen und Rappenantilopen und jeden Nachmittag den Fluss, mit Sundowner, wenn die Herden herunterkommen. Golfer, die am Vortag aus Elephant Hills kommen, finden darin das perfekte Gegengewicht."
      ]
    },
    {
      slug: "packing-clubs-for-africa",
      category: "Praktisches",
      title: "Golfschläger nach Afrika: was wirklich funktioniert",
      date: "Juni 2026",
      photo: "irons",
      standfirst: "Bringen Sie Ihre eigenen Schläger mit, wenn Sie können. So geht es, ohne sie in ein Flugzeug mit zwölf Sitzen zu tragen.",
      body: [
        "Die meisten Gäste wollen in Fancourt oder Leopard Creek ihre eigenen Schläger und könnte nicht gleichgültiger sein, womit sie in Skukuza spielen. Die Lösung ist ein Hartschalenkoffer für den internationalen Flug, dann bringen wir die Schläger zwischen den Golfetappen per Straße oder Linienfracht, während Sie mit einer weichen Tasche im Kleinflugzeug in den Busch fliegen.",
        "Kleinflugzeuge in Kenia, Tansania und Botswana erlauben 15 Kilogramm in weichen Taschen und haben keinen Platz für einen Schlägerkoffer. Statt auf der Piste zu diskutieren, schicken wir die Schläger zum nächsten Platz, wo sie im Pro-Shop warten, wenn Sie landen. Auf The Grand Crossing reisen die Schläger von Fancourt über Leopard Creek und Elephant Hills nach Karen, ohne dass Sie sie anfassen.",
        "Wenn Sie lieber ohne Schläger reisen, hat jeder Platz, den wir nutzen, gute Leihsätze, und wir können einen Satz für die ganze Reise für Sie reservieren, damit sich das Gefühl nicht ändert. Nennen Sie uns bei der Anfrage Ihre Spezifikation, und wir bestätigen, was jeder Platz bieten kann."
      ]
    },
    {
      slug: "a-day-in-two-halves",
      category: "Warum eine Golfsafari",
      title: "Ein Tag in zwei Hälften",
      date: "Mai 2026",
      photo: "g_duskPair",
      standfirst: "Wie wir einen Golfsafari-Tag bauen, damit keine Hälfte wie der Preis der anderen wirkt.",
      body: [
        "Der älteste Einwand gegen eine Golfsafari ist, dass sie ein Kompromiss sein müsse: zu wenig Golf für den Golfer, zu wenig Busch für den Nichtgolfer. Für einen schlecht gebauten Tag stimmt das, und die meisten Golf-und-Safari-Pakete, die wir sehen, sind schlecht gebaut: die Runde an einen Ruhetag angehängt, die Pirschfahrt in die Stunde vor dem Abendessen gequetscht.",
        "Unser Tag beginnt in der Wildnis. Im ersten Licht bewegen sich die Tiere und die Temperatur ist freundlich, also startet die Morgenfahrt um sechs und ist um zehn zurück. Die Runde beginnt um elf, wenn das Licht hoch steht und die Fairways leer sind, und endet gegen vier. Der Abend gehört wieder dem Busch: eine kurze Fahrt, Sundowner, Abendessen im Freien.",
        "Wo Platz und Camp nicht am selben Ort liegen, teilen wir nicht den Tag, sondern die Reise: drei Golftage hintereinander, dann vier Safaritage, die Schläger vorausgeschickt. Die Nichtgolfer haben an den Golftagen Spa, Weingut oder eine weitere Pirschfahrt, und mittags trifft sich die Gruppe. Alle kommen erfüllt nach Hause."
      ]
    },
    {
      slug: "mauritius-in-october",
      category: "Golf · Mauritius",
      title: "Mauritius nach den Open: warum Oktober der Monat ist",
      date: "April 2026",
      photo: "g_seaCourse",
      standfirst: "Die DP World Tour verlässt Heritage im Dezember. Spielen Sie im Oktober, wenn die Plätze turnierreif sind und die Insel trocken ist.",
      body: [
        "Le Château wird ab September für die AfrAsia Bank Mauritius Open vorbereitet, ab Oktober haben die Grüns also Turniergeschwindigkeit und das Rough steht hoch. Es ist der beste Monat, den Platz so zu sehen wie die Profis. Es ist auch der letzte Monat, bevor die Sommerschwüle kommt und die Nachmittagsschauer verlässlich werden.",
        "La Réserve, 2023 oberhalb von Le Château eröffnet, spielt sich ganz anders: kürzer, hügeliger, mit mehr Schlaggestaltung und mehr Ausblicken. Wir empfehlen Le Château am ersten und La Réserve am zweiten Tag, dann einen Ruhetag vor dem Boot zur Île aux Cerfs.",
        "In Kombination mit dem Kruger ist Oktober auch das Ende der Trockenzeit und die beste Tierbeobachtung des Jahres, deshalb liegen die Reise Mauritius & Kruger und ihr begleiteter Termin Ende September und im Oktober. Die Flüge über Johannesburg haben am selben Tag Anschluss."
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
