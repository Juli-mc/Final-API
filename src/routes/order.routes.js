const express = require("express");
const router = express.Router();
const authenticate = require("../middlewares/auth");
const { createOrder, getOrder } = require("../controllers/order.controller");

router.post("/users/:id/orders", authenticate, createOrder);

router.get("/users/:id/orders", authenticate, getOrder);

module.exports = router;
