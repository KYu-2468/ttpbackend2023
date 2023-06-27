const express = require("express");
const router = express.Router();
const { Shopper } = require("../db/models");

// Root here is localhost:8080/api/shoppers/

router.get("/", async (req, res, next) => {
  try {
    const allShoppers = await Shopper.findAll();

    allShoppers
      ? res.status(200).json(allShoppers) // if allShoppers is truthy
      : res.status(404).send("Shoppers List Not Found"); // if allShoppers is falsey
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    // 1. Retrieve information sent from api request via req variable - Mahatir

    const { firstName, lastName, size } = req.body;

    const newShopper = await Shopper.create({
      firstName,
      lastName,
      size,
    });

    console.log(req.body);

    // 2. Create a new Shopper using sequelize Shopper variable - Mohammed

    // const addShopper = [
    //   { firstName: "Mohammed", lastName: "Fadel", size: 10 },
    //   { firstName: "Rob", lastName: "Bob", size: 13 },
    // ];
    // const addSeed = async () => {
    //   await Shopper.bulkCreate(seedShopper);
    // };

    // 3. return 201 - Mohammed
    res.status(201).json(newShopper);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
