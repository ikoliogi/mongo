const express = require("express");
const CategoriesController = require("../../controllers/CategoriesController");
const route = express.Router(); //.Router() giati apo to express xreiazomaste mono ta routes

// Category Routes
route.get("/", CategoriesController.list);
route.get("/:categoryId", CategoriesController.getOne);
route.post("/", CategoriesController.create);
route.delete("/:categoryId", CategoriesController.deleteCategory);
route.put("/:categoryId", CategoriesController.update);

module.exports = route;
