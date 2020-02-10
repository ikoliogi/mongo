const express = require("express");
const route = express.Router();
const AdminAuth = require("../../middlewares/adminAuth");
const StatsController = require("../../controllers/StatsController");

route.get("/", AdminAuth, (req, res) => {
    res.json({
        success: true,
        message: "Admin Area"
    }); // http://localhost:3000/admin
});

route.get("/stats", AdminAuth, StatsController.dashboardStats);
route.use("/auth", require("./auth"));
// route.use(AdminAuth); => anti na tsekarei se ka8e route, mporoume na to tsekaroume edw kai na to afairesoume apo ta parakatw
route.use("/users", AdminAuth, require("./users")); //olo to routing ksekinaei meta to /users
route.use("/products", AdminAuth, require("./products"));
route.use("/categories", AdminAuth, require("./categories"));

module.exports = route;
