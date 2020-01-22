const express = require("express");
const route = express.Router();

route.get("/", (req, res) => {
    res.send("Admin Area"); // http://localhost:3000/admin
});

route.use("/users", require("./users")); //olo to routing ksekinaei meta to /users
route.use("/products", require("./products"));
route.use("/categories", require("./categories"));

module.exports = route;
