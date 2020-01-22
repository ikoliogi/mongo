const express = require("express");
const ProductsController = require("../../controllers/ProductsController");
const route = express.Router(); //.Router() giati apo to express xreiazomaste mono ta routes

// Product Routes
route.get("/", ProductsController.list);
route.post("/cart", ProductsController.cartList);
route.get("/:productId", ProductsController.getOne);
route.post("/", ProductsController.create);
route.delete("/:productId", ProductsController.deleteProduct);
route.put("/:productId", ProductsController.update);
route.get("/category/:categoryId", ProductsController.listByCategory);

module.exports = route;
