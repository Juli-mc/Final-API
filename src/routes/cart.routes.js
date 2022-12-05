const express = require("express");
const router = express.Router();
const authenticate = require("../middlewares/auth");
const { addProducts, seeCart } = require("../controllers/cart.controller");

router.post("/users/:id/cart", authenticate, addProducts);

router.get("/users/:id/cart", authenticate, seeCart);

module.exports = router;
