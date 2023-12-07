const express = require("express")
const router = express.Router()
const { register,login } = require("../Controllers/auth")
const{ updateItem, remove, createItem, read} = require("../Controllers/items")
router.route("/register").post(register);

router.route("/login").post(login);

router.route("/delete/:id").delete(remove);

router.route("/create").post(createItem);

router.route("/update/:id").put(updateItem);

router.route("/read").get(read);

module.exports = router