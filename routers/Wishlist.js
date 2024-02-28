const express = require("express");
const router = express.Router();
const {validateToken} = require("../middlewares/authMiddlewares");
const Wishlist = require("../controllers/Wishlist");

router.get("/", Wishlist.get);
router.post("/", validateToken, Wishlist.post);
router.delete("/:id", validateToken, Wishlist.delete);

module.exports = router;