const express = require("express");
const UsersController = require("../../controllers/UsersController");
const route = express.Router(); //.Router() giati apo to express xreiazomaste mono ta routes

// User Routes => grouparame ola ta /users
route.get("/", UsersController.list);
route.get("/:userId", UsersController.getOne);
route.post("/", UsersController.create);
route.delete("/:userId", UsersController.deleteUser);
route.put("/:userId", UsersController.update);

module.exports = route;
