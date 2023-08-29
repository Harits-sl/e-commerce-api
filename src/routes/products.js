const router = require("express").Router();
const product = require("../controllers/product_controller");

router.get("/products", product.getAllProducts);

module.exports = router;
