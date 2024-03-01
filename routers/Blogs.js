const express = require("express");
const router = express.Router();
const Blogs = require("../controllers/Blog");
const {validateToken} = require("../middlewares/authMiddlewares")
// const uploadCloud = require("../middlewares/uploadCloud")

router.get("/", Blogs.get);
// router.post("/", uploadCloud.array("images"),validateToken , Blogs.post);
router.delete("/:id", validateToken, Blogs.delete);
router.patch("/:id", validateToken, Blogs.patch);
module.exports = router;