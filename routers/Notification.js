const express = require("express");
const router = express.Router();
const {validateToken} = require("../middlewares/authMiddlewares")
const Notification = require("../controllers/Notification")

router.get("/", Notification.get);
router.post("/", validateToken, Notification.post);

module.exports = router;