const express = require("express");
const route = express.Router();

route.get("/", (req, res) => {
    res.send("Client Area"); // http://localhost:3000/admin
});

route.use("/auth", require("./auth"));

module.exports = route;
