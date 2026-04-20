export interface MenuItem {
  name: string;
  description: string;
  price: string;
  vegetarian?: boolean;
  spicy?: boolean;
}

export interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}

export const menu: MenuCategory[] = [
  {
    id: "gyros",
    name: "Gyros",
    items: [
      {
        name: "Gyros-Teller (klein)",
        description:
          "Mariniertes Schweinefleisch vom Spieß mit Pommes frites und Tzatziki.",
        price: "10,90 €",
      },
      {
        name: "Gyros-Teller (groß)",
        description:
          "Großzügige Portion Gyros, Pommes frites, Tzatziki und griechischer Salat.",
        price: "14,90 €",
      },
      {
        name: "Gyros mit Reis",
        description:
          "Saftige Gyros-Scheiben auf Kräuterreis, mit Tzatziki und Salatbeilage.",
        price: "13,50 €",
      },
      {
        name: "Gyros-Platte für 2",
        description:
          "Reichhaltige Gyros-Portion für zwei Personen, Pommes, Tzatziki, Bauernsalat.",
        price: "26,90 €",
      },
    ],
  },
  {
    id: "gyros-pita",
    name: "Gyros Pita",
    items: [
      {
        name: "Gyros Pita Classic",
        description:
          "Frisch gedrehtes Pita-Brot gefüllt mit Gyros, Tzatziki, Tomaten und Zwiebeln.",
        price: "6,90 €",
      },
      {
        name: "Gyros Pita Deluxe",
        description:
          "Gyros, Tzatziki, Tomaten, Zwiebeln, Feta-Würfel und frischer Salat im Pita.",
        price: "8,50 €",
      },
      {
        name: "Hähnchen-Pita",
        description:
          "Gegrilltes Hähnchenfilet, Joghurt-Dip, Salat und Tomaten im warmen Pita.",
        price: "7,90 €",
      },
      {
        name: "Veggie-Pita",
        description:
          "Gegrilltes Gemüse, Hummus, Feta, Salat und Tomaten im Pita-Brot.",
        price: "7,50 €",
        vegetarian: true,
      },
    ],
  },
  {
    id: "spezialitaeten",
    name: "Spezialitäten",
    items: [
      {
        name: "Souvlaki (Schwein)",
        description:
          "Zwei saftige Schweinespieße über Holzkohle gegrillt. Mit Pita und Tzatziki.",
        price: "13,90 €",
      },
      {
        name: "Souvlaki (Hähnchen)",
        description:
          "Zwei marinierte Hähnchenspieße, gegrillt. Mit Pita und Joghurt-Dip.",
        price: "14,50 €",
      },
      {
        name: "Bifteki",
        description:
          "Handgeformtes Hacksteak mit Feta-Füllung. Mit Pommes frites und Tzatziki.",
        price: "15,90 €",
      },
      {
        name: "Lammkotelett",
        description:
          "Zarte Lammkoteletts, mit Rosmarin und Knoblauch mariniert, über Holzkohle gegrillt.",
        price: "21,90 €",
      },
      {
        name: "Gemischte Grillplatte",
        description:
          "Gyros, Souvlaki (Schwein + Hähnchen), Bifteki, Lammkotelett, Pommes, Tzatziki und Salat — für 2 Personen.",
        price: "42,90 €",
      },
    ],
  },
  {
    id: "bauern-pita",
    name: "Bauern-Pita",
    items: [
      {
        name: "Bauern-Pita Original",
        description:
          "Hausgemachtes Pita mit Gyros, Bifteki-Streifen, Tzatziki, Tomaten und Zwiebeln.",
        price: "9,90 €",
      },
      {
        name: "Bauern-Pita Deluxe",
        description:
          "Gyros, Bifteki, Feta, Oliven, Peperoni und Tzatziki im dick belegten Pita.",
        price: "11,50 €",
        spicy: true,
      },
      {
        name: "Bauern-Pita Lamm",
        description:
          "Zartes Lammfleisch vom Spieß, Kräuterjoghurt, Tomaten und Rucola im Pita.",
        price: "12,90 €",
      },
    ],
  },
  {
    id: "fuer-kinder",
    name: "Für Kinder",
    items: [
      {
        name: "Kinder-Gyros",
        description:
          "Kleine Gyros-Portion mit Pommes frites und Tzatziki — perfekt für kleine Gäste.",
        price: "7,90 €",
      },
      {
        name: "Kinder-Souvlaki",
        description:
          "Ein Hähnchen-Spieß, gegrillt, mit Pommes frites und Joghurt-Dip.",
        price: "7,90 €",
      },
      {
        name: "Kinder-Pita",
        description: "Kleines Gyros-Pita mit Tzatziki — einfach und lecker.",
        price: "5,50 €",
      },
    ],
  },
  {
    id: "warme-speisen",
    name: "Warme Speisen",
    items: [
      {
        name: "Tzatziki",
        description:
          "Griechischer Joghurt mit Gurken, Knoblauch und Olivenöl. Mit Pita.",
        price: "4,50 €",
        vegetarian: true,
      },
      {
        name: "Saganaki",
        description:
          "Gebratener Kefalograviera-Käse, knusprig außen, cremig innen.",
        price: "8,50 €",
        vegetarian: true,
      },
      {
        name: "Calamari",
        description: "Frisch frittierte Tintenfischringe, mit Zitrone und Aioli.",
        price: "9,90 €",
      },
      {
        name: "Dolmades",
        description:
          "Weinblätter gefüllt mit Reis und Kräutern, warm serviert mit Zitronensauce.",
        price: "7,50 €",
        vegetarian: true,
      },
      {
        name: "Mezé-Teller für 2",
        description:
          "Tzatziki, Taramosalata, Saganaki, Dolmades, Calamari — zum Teilen und Genießen.",
        price: "19,90 €",
      },
      {
        name: "Suppe des Tages",
        description: "Frisch zubereitete Tagessuppe nach Marktangebot. Bitte erfragen.",
        price: "5,50 €",
        vegetarian: true,
      },
    ],
  },
  {
    id: "beilagen-salate",
    name: "Beilagen & Salate",
    items: [
      {
        name: "Bauernsalat",
        description:
          "Tomaten, Gurken, Paprika, Kalamata-Oliven, rote Zwiebeln, Feta. Original griechisch.",
        price: "7,50 €",
        vegetarian: true,
      },
      {
        name: "Griechischer Salat mit Hähnchen",
        description:
          "Frischer Bauernsalat, getoppt mit gegrillten Hähnchenstreifen.",
        price: "13,50 €",
      },
      {
        name: "Pommes frites",
        description: "Knusprig frittierte Kartoffelsticks.",
        price: "3,50 €",
        vegetarian: true,
      },
      {
        name: "Griechischer Reis",
        description: "Mit Kräutern und Zitrone gedünsteter Langkornreis.",
        price: "3,50 €",
        vegetarian: true,
      },
      {
        name: "Pita-Brot",
        description: "Frisch gebackenes griechisches Fladenbrot, warm serviert.",
        price: "1,80 €",
        vegetarian: true,
      },
    ],
  },
  {
    id: "kalte-speisen-desserts",
    name: "Kalte Speisen & Desserts",
    items: [
      {
        name: "Taramosalata",
        description:
          "Cremiger Fischrogen-Dip, mit Zitrone und Olivenöl verfeinert. Mit Pita.",
        price: "4,90 €",
      },
      {
        name: "Melitzanosalata",
        description:
          "Geröstetes Auberginen-Püree mit Tomaten, Knoblauch und frischen Kräutern.",
        price: "4,90 €",
        vegetarian: true,
      },
      {
        name: "Hummus",
        description:
          "Cremiges Kichererbsen-Püree mit Olivenöl und Paprika. Mit Pita.",
        price: "4,50 €",
        vegetarian: true,
      },
      {
        name: "Baklava",
        description:
          "Knuspriges Blätterteig-Gebäck mit Walnüssen und Honigsirup.",
        price: "4,90 €",
        vegetarian: true,
      },
      {
        name: "Loukoumades",
        description:
          "Kleine Honig-Donuts, frisch frittiert, mit Zimt und Sesam.",
        price: "5,90 €",
        vegetarian: true,
      },
      {
        name: "Joghurt mit Honig & Nüssen",
        description:
          "Griechischer Sahne-Joghurt, Thymian-Honig, gehackte Walnüsse.",
        price: "5,50 €",
        vegetarian: true,
      },
      {
        name: "Galaktoboureko",
        description:
          "Cremiger Grieß-Vanille-Pudding in knusprigem Phyllo-Teig.",
        price: "5,50 €",
        vegetarian: true,
      },
    ],
  },
];
