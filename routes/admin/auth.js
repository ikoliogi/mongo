const express = require("express");
const route = express.Router();
const AuthController = require("../../controllers/AuthController");
const AuthValidator = require("../../validators/AuthValidator");

route.get("/test", (req, res) => {
    res.send("test");
});

route.post("/login", AuthValidator.login, AuthController.adminLogin);

module.exports = route;
