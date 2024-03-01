const express = require("express");
const router = express.Router();
const Account = require("../controllers/Account");
const {validateToken} = require("../middlewares/authMiddlewares")

router.get("/:user", Account.getUser);
router.post("/", Account.post)
router.delete("/:id", validateToken, Account.delete);

module.exports = router;