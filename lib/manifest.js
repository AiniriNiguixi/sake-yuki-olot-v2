/* ==========================================================================
   SAKE YUKI · manifest.js
   ------------------------------------------------------------------------
   AQUEST FITXER ÉS EL QUE HAS D'EDITAR TU.
   Obre'l amb el Bloc de notas (o TextEdit al Mac) i canvia el que calgui:
   noms, preus, telèfon, horaris, adreça...

   REGLES PER NO TRENCAR RES:
   1. Cada línia de text va SEMPRE entre cometes " ".
   2. Cada línia (excepte l'última d'un bloc { } o [ ]) acaba amb una coma ,
   3. No esborris claus { } ni claudàtors [ ] ni cometes " ".
   4. Els preus són números SENSE cometes i amb PUNT (no coma): 4.95
      Si encara no saps el preu d'un plat, deixa-hi `null` (sense cometes).
   5. Quan acabis, desa el fitxer (Ctrl+S) mantenint el nom "manifest.js".
   ========================================================================== */
(function () {
  "use strict";

  window.__BRAND__ = {

    // ------------------------------------------------------------------
    // DADES GENERALS DEL RESTAURANT
    // ------------------------------------------------------------------
    name: "Sake Yuki",
    fullName: "Sake Yuki · Restaurant Japonès",
    tagline: "Pur goig japonès.",
    kicker: "Restaurant japonès · Buffet lliure",
    established: "OLOT",

    phoneDisplay: "654 75 18 02",
    phoneWhatsapp: "34654751802",
    whatsappMessage: "Hola! Voldria reservar taula a Sake Yuki 🍣",

    addressLine1: "Carrer de Nonet Escubòs, 14",
    addressLine2: "17800 Olot, Girona",
    addressShort: "C/ Nonet Escubòs, 14 · Olot",
    mapQuery: "Carrer de Nonet Escubos 14, 17800 Olot, Girona",

    instagramUrl: "https://www.instagram.com/sakeyuki.olot/",
    instagramHandle: "@sakeyuki.olot",

    // Horari setmanal — mostrat a la secció "Horaris"
    hours: [
      { day: "Dilluns",   time: "Tancat" },
      { day: "Dimarts",   time: "12:30–16:30 · 19:30–23:30" },
      { day: "Dimecres",  time: "13:00–16:30 · 20:00–23:30" },
      { day: "Dijous",    time: "13:00–16:30 · 20:00–23:30" },
      { day: "Divendres", time: "12:30–16:30 · 19:30–24:00" },
      { day: "Dissabte",  time: "12:30–16:30 · 19:30–24:00" },
      { day: "Diumenge",  time: "12:30–16:30 · 20:00–23:30" }
    ],
    hoursShort: "Dimarts a diumenge",

    // ------------------------------------------------------------------
    // CARTA — agrupada per categories, transcrita de la carta física real.
    // Afegeix, elimina o edita plats lliurement dins de cada "items".
    // Si no saps el preu encara, posa-hi null (sense cometes ni €).
    // ------------------------------------------------------------------
    menu: [
      {
        id: "entrants",
        label: "Entrants",
        icon: "bowl",
        items: [
          { name: "Sopa de miso", desc: "Brou de miso, tofu i alga wakame.", price: 3.50 },
          { name: "Ramen", desc: "Brou calent amb fideus, verdura i ou.", price: 5.25 },
          { name: "Amanida d'algues japonesa", desc: "Alga wakame amanida a l'estil japonès.", price: 4.95 },
          { name: "Amanida de la casa", desc: "Amanida verda de la casa.", price: 3.50 },
          { name: "Amanida de salmó", desc: "Salmó fresc sobre amanida de fulla verda.", price: 4.95 },
          { name: "Mongeta de soja japonesa (edamame)", desc: "Edamame al vapor amb sal marina.", price: 2.95 },
          { name: "Arròs blanc amb sèsam", desc: "Arròs japonès al vapor amb sèsam torrat.", price: 1.50 }
        ]
      },
      {
        id: "yakimeshi",
        label: "Yakimeshi",
        icon: "rice",
        items: [
          { name: "Arròs amb curri", desc: "Arròs saltat amb salsa de curri.", price: 4.50 },
          { name: "Arròs amb verdura i ou", desc: "Arròs saltat amb verdura de temporada i ou.", price: 4.50 },
          { name: "Arròs amb gambes i verdures", desc: "Arròs saltat amb gambes i verdura.", price: 4.95 },
          { name: "Arròs amb vedella i ou", desc: "Arròs saltat amb vedella i ou.", price: 4.50 },
          { name: "Arròs amb pollastre i ou", desc: "Arròs saltat amb pollastre i ou.", price: 4.50 }
        ]
      },
      {
        id: "yakisoba",
        label: "Yakisoba",
        icon: "noodles",
        items: [
          { name: "Yakisoba amb gambes", desc: "Fideus saltats amb gambes.", price: 5.50 },
          { name: "Yakisoba amb pollastre", desc: "Fideus saltats amb pollastre.", price: 5.35 },
          { name: "Fideus udon amb gambes", desc: "Fideus udon gruixuts saltats amb gambes.", price: 6.50 },
          { name: "Fideus d'arròs amb verdures", desc: "Fideus d'arròs saltats amb verdura de temporada.", price: 5.50 },
          { name: "Fideus d'arròs amb pollastre", desc: "Fideus d'arròs saltats amb pollastre.", price: 5.50 },
          { name: "Fideus d'arròs amb vedella", desc: "Fideus d'arròs saltats amb vedella.", price: 5.50 }
        ]
      },
      {
        id: "fritos",
        label: "Fritos",
        icon: "tempura",
        items: [
          { name: "Tempura de verdures", desc: "Verdura de temporada arrebossada i fregida.", price: 5.50 },
          { name: "Tempura de llagostí", desc: "6 unitats de llagostí arrebossat a l'estil tempura.", price: 7.50 },
          { name: "Pa japonès fregit", desc: "3 unitats.", price: 1.95 },
          { name: "Rotllo vegetal fregit", desc: "6 unitats.", price: 2.95 },
          { name: "Curri samosa", desc: "6 unitats.", price: 3.50 },
          { name: "Calamar arrebossat", desc: "8 unitats.", price: 4.50 },
          { name: "Nuggets de pollastre", desc: "8 unitats.", price: 4.50 },
          { name: "Pollastre arrebossat amb ametlla", desc: "6 unitats.", price: 6.50 },
          { name: "Pollastre arrebossat", desc: "Cruixent per fora.", price: 5.50 },
          { name: "Boles de pop", desc: "3 unitats, estil takoyaki.", price: 6.50 }
        ]
      },
      {
        id: "dimsum",
        label: "Dim Sum",
        icon: "dumpling",
        items: [
          { name: "Siu mai al vapor", desc: "6 unitats.", price: 6.50 },
          { name: "Xiaolongbao", desc: "Empanadilla al vapor amb brou a l'interior. 6 unitats.", price: 6.50 },
          { name: "Gyoza vegetal", desc: "6 unitats.", price: 5.50 },
          { name: "Gyoza de pollastre", desc: "6 unitats.", price: 5.50 }
        ]
      },
      {
        id: "teppanyaki",
        label: "Teppanyaki i Wok",
        icon: "grill",
        items: [
          { name: "Pinxo de salmó", desc: "3 unitats a la planxa.", price: 5.25 },
          { name: "Pinxo de gambes", desc: "3 unitats a la planxa.", price: 5.50 },
          { name: "Pinxo de pollastre", desc: "3 unitats a la planxa.", price: 5.25 },
          { name: "Pinxo de vedella amb formatge", desc: "3 unitats a la planxa.", price: 5.50 },
          { name: "Sípia a la planxa", desc: null, price: 6.50 },
          { name: "Cloïsses a la planxa", desc: null, price: 5.50 },
          { name: "Navalles a la planxa", desc: null, price: 5.50 },
          { name: "Pollastre a la llimona", desc: null, price: 4.50 },
          { name: "Gambes a la llimona", desc: null, price: 4.95 },
          { name: "Pollastre amb ametlla", desc: null, price: 4.50 },
          { name: "Pollastre picant", desc: null, price: 4.50 },
          { name: "Vedella picant", desc: null, price: 4.50 },
          { name: "Vedella amb curri", desc: null, price: 4.50 },
          { name: "Vedella amb verdures", desc: null, price: 4.50 },
          { name: "Verdura saltejada", desc: null, price: 4.65 },
          { name: "Porc agredolç", desc: null, price: 4.85 },
          { name: "Gambes agredolç", desc: null, price: 4.95 },
          { name: "Gambes al sal i pebre", desc: null, price: 4.95 }
        ]
      },
      {
        id: "nigiris",
        label: "Nigiris & Gunkan",
        icon: "nigiri",
        items: [
          { name: "Nigiri de salmó", desc: "1 unitat.", price: 1.30 },
          { name: "Nigiri de tonyina", desc: "1 unitat.", price: 1.20 },
          { name: "Nigiri de llagostí cuit", desc: "1 unitat.", price: 1.40 },
          { name: "Nigiri d'alvocat", desc: "1 unitat.", price: 1.40 },
          { name: "Nigiri de llobarro", desc: "1 unitat.", price: 1.50 },
          { name: "Nigiri de salmó flamejat", desc: "1 unitat.", price: 1.70 },
          { name: "Nigiri de tonyina flamejat", desc: "1 unitat.", price: 1.80 },
          { name: "Nigiri de llobarro flamejat", desc: "1 unitat.", price: 1.70 },
          { name: "Gunkan de tobiko", desc: "Ous de peix volador. 2 unitats.", price: 3.25 },
          { name: "Gunkan pastís de salmó", desc: "2 unitats.", price: 3.25 },
          { name: "Gunkan pastís de tonyina", desc: "2 unitats.", price: 3.45 }
        ]
      },
      {
        id: "hosomaki",
        label: "Hosomaki",
        icon: "maki",
        items: [
          { name: "Hosomaki de cranc", desc: "8 peces.", price: 3.95 },
          { name: "Hosomaki de tonyina", desc: "8 peces.", price: 4.10 },
          { name: "Hosomaki d'alvocat", desc: "8 peces.", price: 4.10 },
          { name: "Hosomaki de salmó", desc: "8 peces.", price: 4.10 }
        ]
      },
      {
        id: "uramaki",
        label: "Uramaki",
        icon: "maki",
        items: [
          { name: "Uramaki Fuji", desc: "8 peces · Salmó philadelphia, alvocat, ceba fregida i sèsam.", price: 7.50 },
          { name: "Uramaki Yasai", desc: "8 peces · Verdura mixta, philadelphia, sèsam.", price: 7.25 },
          { name: "Uramaki Spicy Shake", desc: "8 peces · Salmó, cogombre, togarashi, ou de tobiko.", price: 6.95 },
          { name: "Uramaki Spicy Tuna", desc: "8 peces · Tonyina, cogombre, togarashi, ou de tobiko.", price: 7.25 },
          { name: "Uramaki Tuna", desc: "8 peces · Tonyina en oli d'oliva, amanida, sèsam, philadelphia.", price: 7.25 },
          { name: "Uramaki Exotic", desc: "8 peces · Surimi, mango, alvocat, sèsam i salsa de mango.", price: 7.25 },
          { name: "Uramaki Ebiten", desc: "8 peces · Llagostí en tempura, maionesa, salsa teriyaki, sèsam, ceba fregida.", price: 7.50 },
          { name: "Uramaki Philadelphia", desc: "8 peces · Salmó, alvocat, philadelphia, sèsam.", price: 7.25 },
          { name: "Uramaki Spicy Tori", desc: "8 peces · Pollastre arrebossat, amanida, salsa sweet chili, sèsam.", price: 7.50 },
          { name: "Uramaki Shake", desc: "8 peces · Salmó, cogombre.", price: 7.10 },
          { name: "Uramaki Canyon", desc: "8 peces · Llagostí en tempura, alvocat, julienne de patata fregida, salsa teriyaki, sèsam.", price: 7.50 },
          { name: "Uramaki Chibli", desc: "8 peces · Llagostí en tempura, arròs inflat, tàrtar de salmó, salsa teriyaki, alvocat.", price: 12.50 },
          { name: "Uramaki Rainbow", desc: "8 peces · Tonyina, salmó, llobarro, alvocat.", price: 9.50 },
          { name: "Uramaki Dragon", desc: "8 peces · Llagostí en tempura, alvocat, maionesa, tobiko, salsa teriyaki.", price: 10.50 },
          { name: "Uramaki Dragon New", desc: "8 peces · Llagostí en tempura, salmó flamejat, alvocat, maionesa, tobiko, salsa teriyaki.", price: 12.50 },
          { name: "Uramaki Salmon Plus", desc: "8 peces · Salmó, philadelphia, salmó flamejat, pistatxo, formatge, sèsam i salsa teriyaki.", price: 12.50 },
          { name: "Uramaki Unagi", desc: "8 peces · Anguila en tempura, alvocat i salsa d'anguila.", price: 12.50 },
          { name: "Uramaki Futo Ebiten", desc: "8 peces · Llagostí en tempura, maionesa, pasta kataifi i salsa teriyaki.", price: 11.50 }
        ]
      },
      {
        id: "futomaki",
        label: "Futomaki",
        icon: "maki",
        items: [
          { name: "Futomaki Tuna", desc: "8 peces · Tonyina, alvocat.", price: 6.95 },
          { name: "Futomaki Shake", desc: "8 peces · Salmó, alvocat.", price: 6.95 },
          { name: "Futomaki Miura", desc: "8 peces · Salmó, alvocat, salsa en tempura, maionesa, sèsam.", price: 8.50 },
          { name: "Hot Roll", desc: "8 peces · Pastís de salmó, salmó, salsa teriyaki, sèsam, cibulet, philadelphia.", price: 9.50 },
          { name: "Shakefurai", desc: "8 peces · Salmó, philadelphia, salsa teriyaki, sèsam, cibulet.", price: 9.50 },
          { name: "Mangomaki", desc: "8 peces · Salmó, philadelphia, mango, salsa de mango.", price: 9.50 }
        ]
      },
      {
        id: "temaki",
        label: "Temaki",
        icon: "temaki",
        items: [
          { name: "Temaki de salmó", desc: "Con d'alga nori farcit d'arròs i salmó.", price: null },
          { name: "Temaki de tonyina picant", desc: "Con d'alga nori amb tonyina picant.", price: null }
        ]
      },
      {
        id: "festiu",
        label: "Nit i Festiu",
        icon: "moon",
        items: [
          { name: "Carpaccio flamejat mixt", desc: "Mix de salmó, llobarro i llagostí flamejat amb salsa ponzu i sèsam.", price: 7.50 },
          { name: "Carpaccio mixt", desc: "Salmó, llobarro i tonyina amb salsa ponzu i sèsam.", price: 7.50 },
          { name: "Tàrtar de salmó", desc: "Salmó marinat amb alvocat, salsa ponzu, maionesa, sèsam i pasta kataifi.", price: 9.95 },
          { name: "Tàrtar de tonyina", desc: "Tonyina marinada amb alvocat, salsa ponzu, maionesa, sèsam i pasta kataifi.", price: 11.95 },
          { name: "Tàrtar de mango i salmó", desc: "Salmó, mango, alvocat, arròs inflat, pasta kataifi, salsa de mango.", price: 12.50 },
          { name: "Sashimi de salmó", desc: "4 peces.", price: 5.20 },
          { name: "Sashimi de tonyina", desc: "4 peces.", price: 5.50 },
          { name: "Sashimi de llobarro", desc: "4 peces.", price: 5.30 },
          { name: "Sashimi variat", desc: "9 peces variades.", price: 9.90 },
          { name: "Llagostí a la planxa", desc: null, price: 7.50 },
          { name: "Púlpit a la planxa", desc: null, price: 6.50 },
          { name: "Llagostí Isma", desc: "Llagostí cuit a la sal.", price: 6.50 },
          { name: "Samurai Stick", desc: "Rotllo de llagostí arrebossat. 6 unitats.", price: 4.50 },
          { name: "Uramaki Tartufo", desc: "8 peces · Llagostí en tempura, alvocat, salmó flamejat, tòfona negra, salsa teriyaki i maionesa.", price: 13.50 },
          { name: "Uramaki Mango Shake", desc: "8 peces · Mango, alvocat, salsa de mango, pistatxos picats.", price: 13.50 },
          { name: "Ànec amb salsa japonesa", desc: null, price: 6.50 },
          { name: "Gyoza de llagostí", desc: "6 unitats.", price: 6.50 }
        ]
      },
      {
        id: "combinats",
        label: "Plats Combinats",
        icon: "combo",
        items: [
          { name: "Plat Sushi No Moriawase", desc: "6 nigiris, 8 makis.", price: 10.50 },
          { name: "Plat Sashimi Sushi", desc: "Combinat de 6 sashimis, 5 nigiris i 4 makis.", price: 14.50 }
        ]
      },
      {
        id: "begudes",
        label: "Refrescos",
        icon: "drink",
        items: [
          { name: "Refresc de cola", desc: "Llauna 33cl.", price: null },
          { name: "Te japonès fred", desc: "Te verd japonès servit fred.", price: null },
          { name: "Aigua mineral", desc: "Ampolla 50cl.", price: null }
        ]
      }
    ],

    // ------------------------------------------------------------------
    // GALERIA — icones il·lustrades (no calen fotos per funcionar)
    // Quan tinguis fotos reals, substitueix-les a assets/img/ i digues-m'ho.
    // ------------------------------------------------------------------
    gallery: [
      { icon: "nigiri",   label: "Nigiri fresc cada dia" },
      { icon: "ramen",    label: "Ramen calent" },
      { icon: "dumpling", label: "Gyoza saltada" },
      { icon: "maki",     label: "Uramaki de la casa" },
      { icon: "grill",    label: "Teppanyaki en directe" },
      { icon: "temaki",   label: "Sashimi de la casa" },
      { icon: "drink",    label: "Te japonès" },
      { icon: "lantern",  label: "Pur goig japonès" }
    ]
  };
})();
