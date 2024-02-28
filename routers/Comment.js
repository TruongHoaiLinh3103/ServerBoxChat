const express = require("express");
const router = express.Router();
const {validateToken} = require("../middlewares/authMiddlewares")
const Comment = require("../controllers/Comment")

router.get("/", Comment.get);
router.post("/",validateToken, Comment.post);
router.patch("/:id", validateToken, Comment.patch);
router.delete("/:id",validateToken, Comment.delete);

module.exports = router;