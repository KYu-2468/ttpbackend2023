const axios = require("axios");

// dummy axios requests, similar to postman requests
axios
  .post("http://localhost:8080/api/shoppers", {
    firstName: "Bob",
    lastName: "Rob",
    size: 14,
  })
  .then((res) => {
    console.log(res);
  });
