const express = require("express");
const router = express.Router();
const Users = require("../controllers/Users");

router.get("/", Users.get)
router.post("/", Users.signUP);
router.post("/login", Users.signIn);
router.patch("/changepassword", Users.changePass);

module.exports = router;