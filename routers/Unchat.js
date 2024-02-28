const express = require("express");
const router = express.Router();
const {validateToken} = require("../middlewares/authMiddlewares")
const Unchat = require("../controllers/Unchat")

router.get("/:id", Unchat.get);
router.post("/",validateToken, Unchat.post);
router.patch("/:id", validateToken, Unchat.patch);
router.delete("/:id",validateToken, Unchat.delete);

module.exports = router;