const express = require("express");
const router = express.Router();
const authenticate = require("../middlewares/auth");
const { userRegister, getUser } = require("../controllers/users.controller");

router.post("/", userRegister);
router.get("/:id", authenticate, getUser);

module.exports = router;
