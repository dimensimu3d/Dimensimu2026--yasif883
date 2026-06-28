export const categories = [
  "All",
  "Engineering",
  "Miniature",
  "Decoration",
  "Automotive",
  "Custom",
];

export const products = [
  {
    id: 1,
    slug: "custom-keychain",
    name: "Custom Keychain",
    shortDescription: "...",
    description: "...",
    category: "Toys & Games",

    variants: [
      {
        id: "pla-white",
        name: "PLA White",
        material: "PLA",
        color: "White",
        price: 30000,
        stock: 20,
        sku: "KC-PLA-W",
      },

      {
        id: "pla-black",
        name: "PLA Black",
        material: "PLA",
        color: "Black",
        price: 37000,
        stock: 8,
        sku: "KC-PLA-B",
      },

      {
        id: "petg-black",
        name: "PETG Black",
        material: "PETG",
        color: "Black",
        price: 42000,
        stock: 5,
        sku: "KC-PETG-B",
      },
    ],

    leadTime: "2-3 Hari",

    material: ["PLA", "PETG"],

    colorOptions: ["#FFFFFF", "#000000", "#00C8FF"],

    dimensions: "50 x 30 x 5 mm",

    thumbnail: "/images/products/anime.jpg",

    gallery: [
      "/images/products/anime.jpg",
      "/images/products/case.jpg",
      "/images/products/gear.jpg",
    ],

    model3d: "/models/keychain.glb",

    specifications: [
      {
        label: "Weight",
        value: "18 g",
      },
      {
        label: "Printing Time",
        value: "2 Hours",
      },
      {
        label: "Layer Height",
        value: "0.2 mm",
      },
    ],

    applications: ["Souvenir", "Promosi", "Merchandise"],

    featured: true,

    rating: 4.9,

    reviews: 128,

    tags: ["Keychain", "3D Printing", "Custom"],
  },
  {
    id: 2,
    slug: "custom-Gear",
    name: "Custom Gear",
    shortDescription: "...",
    description: "...",
    category: "Souvenir",

    variants: [
      {
        id: "pla-white",
        name: "PLA White",
        material: "PLA",
        color: "White",
        price: 20000,
        stock: 20,
        sku: "KC-PLA-W",
      },

      {
        id: "pla-black",
        name: "PLA Black",
        material: "PLA",
        color: "Black",
        price: 37000,
        stock: 8,
        sku: "KC-PLA-B",
      },

      {
        id: "petg-black",
        name: "PETG Black",
        material: "PETG",
        color: "Black",
        price: 42000,
        stock: 5,
        sku: "KC-PETG-B",
      },
    ],

    leadTime: "2-3 Hari",

    material: ["PLA", "PETG"],

    colorOptions: ["#FFFFFF", "#000000", "#00C8FF"],

    dimensions: "50 x 30 x 5 mm",

    thumbnail: "/images/products/anime.jpg",

    gallery: [
      "/images/products/anime.jpg",
      "/images/products/case.jpg",
      "/images/products/gear.jpg",
    ],

    model3d: "/models/Gear.glb",

    specifications: [
      {
        label: "Weight",
        value: "18 g",
      },
      {
        label: "Printing Time",
        value: "2 Hours",
      },
      {
        label: "Layer Height",
        value: "0.2 mm",
      },
    ],

    applications: ["Souvenir", "Promosi", "Merchandise"],

    featured: true,

    rating: 4.9,

    reviews: 128,

    tags: ["Gear", "3D Printing", "Custom"],
  },
];
