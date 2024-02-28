const express = require("express");
const router = express.Router();
const {validateToken} = require("../middlewares/authMiddlewares");
const Likes = require("../controllers/Likes");

router.post("/", validateToken, Likes.post);

module.exports = router;