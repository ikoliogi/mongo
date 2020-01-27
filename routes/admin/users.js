const express = require("express");
const UsersController = require("../../controllers/UsersController");
const UsersValidator = require("../../validators/UsersValidator");
const route = express.Router(); //.Router() giati apo to express xreiazomaste mono ta routes


// User Routes => grouparame ola ta /users
//validators imported
route.get("/", UsersController.list);
route.get("/:userId", UsersValidator.getOne, UsersController.getOne);
route.post("/", UsersValidator.create, UsersController.create);
route.delete("/:userId", UsersController.deleteUser);
route.put("/:userId", UsersController.update);

module.exports = route;
