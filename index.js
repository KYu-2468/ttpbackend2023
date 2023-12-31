const express = require("express");
const db = require("./db");
const PORT = "8080";

const app = express();

// Allow express to parse json from API requests
app.use(express.json());

// Mount on API
app.use("/api", require("./api"));

// Syncing DB Function
const syncDB = () => db.sync();

// Run server function
const serverRun = () => {
  app.listen(PORT, () => {
    console.log(`Live on port: ${PORT}`);
  });
};

syncDB();
serverRun();

module.exports = app;
