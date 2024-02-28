const express = require("express");
const router = express.Router();
const {validateToken} = require("../middlewares/authMiddlewares");
const History = require("../controllers/History");

router.get("/", History.get)
router.post("/", validateToken, History.post)
router.delete("/:id", validateToken, History.delete)

module.exports = router;