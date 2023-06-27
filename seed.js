const db = require("./db/db");
const { Shoes, Shopper } = require("./db/models");

console.log("Seeding...");

const seedShoes = [
  { company: "Nike", type: "Jordan 5's", laces: true, size: 10 },
  { company: "Adidas", type: "Sambas", laces: true, size: 7 },
  { company: "Yeezy's", type: "Yeezy 1's", laces: true, size: 12 },
  { company: "Crocs", type: "Crocodillio's", laces: false, size: 5 },
  { company: "Converse", type: "All Start", laces: true, size: 11 },
  { company: "Grandma", type: "Chancla Poderosa", laces: false, size: 8 },
];

const seedShopper = [
  { firstName: "Depak", lastName: "Borhara", size: 13 },
  { firstName: "Alejandro", lastName: "Hernandez", size: 5 },
  { firstName: "Aurelio", lastName: "Santos", size: 10 },
  { firstName: "John", lastName: "Alcantara", size: 12 },
  { firstName: "Sabina", lastName: "Ismailova", size: 9 },
  { firstName: "Nafisa", lastName: "Anzum", size: 8 },
  { firstName: "Elaine", lastName: "Luzung", size: 12 },
  { firstName: "Nilly", lastName: "Billy", size: 4 },
  { firstName: "Miranda", lastName: "Karecho", size: 13 },
  { firstName: "Bruno", lastName: "Mars", size: 9 },
];

const seed = async () => {
  await Shoes.bulkCreate(seedShoes);
  await Shopper.bulkCreate(seedShopper);
};

seed().then(() => {
  console.log("Seeding Completed!");
  process.exit();
});
