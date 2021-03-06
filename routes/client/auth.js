const express = require("express");
const route = express.Router();
const AuthController = require("../../controllers/AuthController");
const AuthValidator = require("../../validators/AuthValidator");

route.post("/login", AuthValidator.login, AuthController.login);
route.post("/register", AuthValidator.register, AuthController.register);

module.exports = route;
