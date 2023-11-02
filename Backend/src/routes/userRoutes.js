const express = require("express");
const router = express.Router();
const { registerUser, loginUser, currentUser } = require("../controllers/userController");
const validateToken = require("../util/middleware/validateTokenHandler");

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/Current", validateToken, currentUser);

module.exports = router;