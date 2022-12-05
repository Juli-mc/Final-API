const express = require("express");
const router = express.Router();
const authenticate = require("../middlewares/auth");
const {
  getProductsAll,
  getProducts,
  createProducts,
} = require("../controllers/products.controller");

router.post("/users/:id/products", authenticate, createProducts);

router.get("/users/:id/products", authenticate, getProducts);

router.get("/products", getProductsAll);

module.exports = router;
