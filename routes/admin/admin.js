const express = require("express");
const route = express.Router();
const AdminAuth = require("../../middlewares/adminAuth");

route.get("/", AdminAuth, (req, res) => {
    res.json({
        success: true,
        message: "Admin Area"
    }); // http://localhost:3000/admin
});

route.get("/stats", AdminAuth, async (req, res) => {
    const categories = await Category.find().exec();
    const labels = categories.map(c => c.title);
    const counts = [];

    for (let cat of categories) {
        const num = await Product.count({category: cat._id});
        counts.push(num);
    }

    res.json({
        success: true,
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'My categories',
                    data: counts
                }
            ]
        }
    });
});

route.use("/auth", require("./auth"));
// route.use(AdminAuth); => anti na tsekarei se ka8e route, mporoume na to tsekaroume edw kai na to afairesoume apo ta parakatw
route.use("/users", AdminAuth, require("./users")); //olo to routing ksekinaei meta to /users
route.use("/products", AdminAuth, require("./products"));
route.use("/categories", AdminAuth, require("./categories"));

module.exports = route;
