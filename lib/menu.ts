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
    id: "meze",
    name: "Meze (Vorspeisen)",
    items: [
      {
        name: "Tzatziki",
        description: "Griechischer Joghurt mit Gurken, Knoblauch und Olivenöl. Mit Pita.",
        price: "4,50 €",
        vegetarian: true,
      },
      {
        name: "Taramosalata",
        description: "Cremiger Fischrogen-Dip, mit Zitrone und Olivenöl verfeinert. Mit Pita.",
        price: "4,90 €",
      },
      {
        name: "Melitzanosalata",
        description: "Geröstetes Auberginen-Püree mit Tomaten, Knoblauch und frischen Kräutern.",
        price: "4,90 €",
        vegetarian: true,
      },
      {
        name: "Dolmades",
        description: "Weinblätter gefüllt mit Reis und Kräutern, warm serviert mit Zitronensauce.",
        price: "7,50 €",
        vegetarian: true,
      },
      {
        name: "Saganaki",
        description: "Gebratener Kefalograviera-Käse, knusprig außen, cremig innen.",
        price: "8,50 €",
        vegetarian: true,
      },
      {
        name: "Calamari",
        description: "Frisch frittierte Tintenfischringe, mit Zitrone und Aioli.",
        price: "9,90 €",
      },
      {
        name: "Mezé-Teller für 2",
        description: "Eine Auswahl unserer besten Vorspeisen — zum Teilen und Genießen.",
        price: "18,90 €",
      },
    ],
  },
  {
    id: "vom-grill",
    name: "Vom Grill",
    items: [
      {
        name: "Gyros Pitta",
        description: "Mariniertes Schweinefleisch vom Spieß, Tzatziki, Tomaten, Zwiebeln in Pita.",
        price: "6,90 €",
      },
      {
        name: "Gyros mit Pommes",
        description: "Gyros vom Spieß, Pommes frites, Tzatziki und Salat.",
        price: "11,90 €",
      },
      {
        name: "Souvlaki (Schwein)",
        description: "Saftige Schweinespieße über Holzkohle gegrillt. Mit Pita und Tzatziki.",
        price: "12,90 €",
      },
      {
        name: "Souvlaki (Hähnchen)",
        description: "Marinierte Hähnchenspieße, gegrillt. Mit Pita und Joghurt-Dip.",
        price: "13,50 €",
      },
      {
        name: "Bifteki",
        description: "Handgeformtes Hacksteak mit Feta-Füllung. Mit Pommes frites und Tzatziki.",
        price: "14,90 €",
      },
      {
        name: "Lammkotelett",
        description: "Zarte Lammkoteletts, mit Rosmarin und Knoblauch mariniert, über Holzkohle gegrillt.",
        price: "19,90 €",
      },
      {
        name: "Gemischte Grillplatte",
        description: "Gyros, Souvlaki, Bifteki, Lammkotelett, Pommes, Tzatziki und Salat — für 2 Personen.",
        price: "38,90 €",
      },
    ],
  },
  {
    id: "beilagen-salate",
    name: "Beilagen & Salate",
    items: [
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
      {
        name: "Bauernsalat",
        description:
          "Tomaten, Gurken, Paprika, Kalamata-Oliven, rote Zwiebeln, Feta. Original griechisch.",
        price: "7,50 €",
        vegetarian: true,
      },
      {
        name: "Griechischer Salat mit Hähnchen",
        description: "Frischer Bauernsalat, getoppt mit gegrillten Hähnchenstreifen.",
        price: "13,50 €",
      },
    ],
  },
  {
    id: "desserts",
    name: "Desserts",
    items: [
      {
        name: "Baklava",
        description: "Knuspriges Blätterteig-Gebäck mit Walnüssen und Honigsirup.",
        price: "4,90 €",
        vegetarian: true,
      },
      {
        name: "Galaktoboureko",
        description: "Cremiger Grieß-Vanille-Pudding in knusprigem Phyllo-Teig.",
        price: "5,50 €",
        vegetarian: true,
      },
      {
        name: "Loukoumades",
        description: "Kleine Honig-Donuts, frisch frittiert, mit Zimt und Sesam.",
        price: "5,90 €",
        vegetarian: true,
      },
      {
        name: "Joghurt mit Honig & Nüssen",
        description: "Griechischer Sahne-Joghurt, Thymian-Honig, gehackte Walnüsse.",
        price: "5,50 €",
        vegetarian: true,
      },
    ],
  },
  {
    id: "getraenke",
    name: "Getränke",
    items: [
      {
        name: "Ouzo Metaxa",
        description: "Griechischer Anis-Schnaps, 2 cl.",
        price: "3,50 €",
      },
      {
        name: "Retsina (0,25 l)",
        description: "Traditioneller griechischer Weißwein, leicht harzige Note.",
        price: "4,90 €",
        vegetarian: true,
      },
      {
        name: "Hauswein weiß / rot (0,25 l)",
        description: "Griechischer Tafelwein des Hauses.",
        price: "5,50 €",
        vegetarian: true,
      },
      {
        name: "Mythos Bier (0,33 l)",
        description: "Griechisches Lagerbier, frisch und mild.",
        price: "3,90 €",
        vegetarian: true,
      },
      {
        name: "Softdrinks (0,33 l)",
        description: "Cola, Fanta, Sprite, Mineralwasser.",
        price: "2,80 €",
        vegetarian: true,
      },
      {
        name: "Griechischer Mokka",
        description: "Starker Filterkaffee, traditionell im Kupferkännchen zubereitet.",
        price: "2,90 €",
        vegetarian: true,
      },
      {
        name: "Frappe",
        description: "Geeister Schaumkaffee — der griechische Sommerklassiker.",
        price: "3,50 €",
        vegetarian: true,
      },
    ],
  },
];
