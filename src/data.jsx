let level = [
  { id: 1, name: "Beginner", price: 0, code: "B" },
  { id: 2, name: "Advanced", price: 0, code: "A" },
];

let shape = [
  { id: 1, name: "Plastic/Polymer Composite", code: "P", price: 35, cost: 18 },
  { id: 2, name: "Aluminum Alloy", code: "A", price: 50, cost: 42 },
  { id: 3, name: "Bamboo Classic scooter", code: "B", price: 83, cost: 68 },
  { id: 4, name: "Magnesium Alloy", code: "M", price: 103, cost: 88 },
  { id: 5, name: "Carbon Fiber", code: "C", price: 134, cost: 118 },
  { id: 6, name: "Titanium Alloy scooter", code: "T", price: 185, cost: 168 },
];

let size = [
  {
    id: 1,
    name: "Children's Scooters",
    price: 9.75,
    code: "C",
    desc: `
  Overall Length: 30 inches to 40 inches (76.2 cm to 101.6 cm)
  Overall Width: 10 inches to 15 inches (25.4 cm to 38.1 cm)
  Overall Height: 25 inches to 35 inches (63.5 cm to 88.9 cm)
  Deck Length: 15 inches to 20 inches (38.1 cm to 50.8 cm)
  Deck Width: 5 inches to 8 inches (12.7 cm to 20.3 cm)
  Handlebar Height: 20 inches to 30 inches (50.8 cm to 76.2 cm)
  `,
    cost: 7,
  },
  { id: 2, name: "Youth Scooters", price: 15.75, code: "Y", cost: 10 },
  { id: 3, name: "Adult Scooters", price: 20.75, code: "A", cost: 14 },
];

let colourChildren = [
  { id: 1, name: "Vibrant Red", price:8, code: "V", cost: 5 },
  { id: 2, name: "Electric Blue", price: 8, code: "E", cost: 5 },
  { id: 3, name: "Sunshine Yellow", price: 8, code: "S", cost: 5 },
  { id: 4, name: "Lime Green", price: 8, code: "L", cost: 5 },
  { id: 5, name: "Bubblegum Pink", price: 8, code: "B", cost: 5 },
  { id: 6, name: "Royal Purple", price: 8, code: "R", cost: 5 },
];
let colourTeen = [
  { id: 1, name: "Matte Black", price: 9.75, code: "M" },
  { id: 2, name: "Metallic Silver", price: 9.75, code: "M" },
  { id: 3, name: "Gunmetal Gray", price: 9.75, code: "G" },
  { id: 4, name: "Midnight Blue", price: 9.75, code: "M" },
  { id: 5, name: "Urban Camouflage", price: 9.75, code: "U" },
  { id: 6, name: "Cosmic Galaxy Patterns", price: 9.75, code: "C" },
];
let colourAdult = [
  { id: 1, name: "Glossy White", price: 9.75, code: "G" },
  { id: 2, name: "Classic Black", price: 9.75, code: "C" },
  { id: 3, name: "Elegant Charcoal", price: 9.75, code: "E" },
  { id: 4, name: "Deep Navy", price: 9.75, code: "D" },
  { id: 5, name: "Matte Graphite", price: 9.75, code: "M" },
  { id: 6, name: "Chrome  Finishes", price: 9.75, code: "C" },
];
let grip = [
  {
    id: 1,
    name: "Standard Capacity (24V to 36V, 2Ah to 6Ah)",
    price: 22,
    cost: 15,
    code: "S",
  },
  {
    id: 2,
    name: "Extended Range (36V to 48V, 6Ah to 10Ah)",
    price: 42,
    cost: 30,
    code: "E",
  },
  {
    id: 3,
    name: "High Performance (48V to 60V+, 10Ah to 15Ah+)",
    price: 62,
    cost: 50,
    code: "H",
  },
];
// motor power
let activity = [
  {
    id: 1,
    name: "Basic Performance (250W to 500W)",
    cost: 35,
    price: 53,
    code: "B",
  },
  {
    id: 2,
    name: "Enhanced Performance ( 500W to 1000W)",
    cost: 80,
    price: 103,
    code: "E",
  },
  {
    id: 2,
    name: "Advanced Performance: (1000W+)",
    cost: 120,
    price: 153,
    code: "A",
  },
];
// brake
let speed = [
  {
    id: 1,
    name: "Mechanical Brake",
    cost: 6.75,
    price: 10.75,
    code: "M",
  },
  {
    id: 2,
    name: "Electric Brake",
    cost: 10,
    price: 17,
    code: "E",
  },
  {
    id: 3,
    name: "Hydraulic Brake",
    cost: 15,
    price: 21,
    code: "H",
  },
];
//handelbar
let surface = [
  {
    id: 1,
    name: "Standard Handlebar",
    cost: 6.75,
    price: 11.75,
    code: "S",
  },
  {
    id: 2,
    name: "Foldable Handlebar",
    cost: 8.75,
    price: 16.75,
    code: "F",
  },
  {
    id: 3,
    name: "Adjustable Handlebar",
    cost: 11.75,
    price: 19.75,
    code: "A",
  },
  {
    id: 4,
    name: "Riser Handlebar",
    cost: 13.75,
    price: 22,
    code: "R",
  },
  {
    id: 5,
    name: "T-Bar Handlebar",
    cost: 15.75,
    price: 24,
    code: "T",
  },
];

let wheels = [
  {
    id: 1,
    name: "4 to 6 inches (10.16 cm to 15.24 cm)",
    price: 14.75,
    cost: 7,
    perCost: "3.5",
    code: "S",
  },
  {
    id: 2,
    name: " 6 to 8 inches (15.24 cm to 20.32 cm)",
    price: 16.75,
    cost: 10,
    perCost: "5",
    code: "M",
  },
  {
    id: 3,
    name: "8 to 10 inches (20.32 cm to 25.4 cm)",
    price: 20.75,
    cost: 12.5,
    perCost: "6.25",
    code: "L",
  },
];

let wheelsColour = [
  { id: 1, name: "black", price: 9.75, code: "B" },
  { id: 2, name: "gray", price: 9.75, code: "G" },
  { id: 3, name: "green", price: 9.75, code: "G" },
  { id: 4, name: "yellow", price: 9.75, code: "Y" },
  { id: 5, name: "red", price: 9.75, code: "R" },
];
let motorPower = [
  { id: 1, name: "1000W", price: 33.75, cost: 10.75, code: "1K" },
  { id: 2, name: "1500W", price: 43.75, cost: 20.75, code: "1.5K" },
  { id: 3, name: "2000W", price: 53.75, cost: 30.75, code: "2K" },
  { id: 4, name: "2500W", price: 63.75, cost: 40.75, code: "2.5K" },
  { id: 5, name: "3000W", price: 73.75, cost: 50.75, code: "3K" },
];

let method = [
  { id: 1, name: "Home Delivery", price: 15, code: "H" },
  { id: 2, name: "In Store ", price: 0, code: "I" },
];

export {
  shape,
  motorPower,
  level,
  wheelsColour,
  size,
  colourAdult,
  colourChildren,
  colourTeen,
  grip,
  activity,
  speed,
  surface,
  wheels,
  method,
};
