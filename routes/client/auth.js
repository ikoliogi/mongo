const express = require("express");
const route = express.Router();
const AuthController = require("../../controllers/AuthController");

route.get("/test", (req, res) => {
    res.send("test");
});

route.post("/login", AuthController.login);

module.exports = route;
