const express = require("express")
const router = express.Router()
const { register,login } = require("../Controllers/auth")
const{ updateItem, deleteItem, createItem} = require("../Controllers/items")
router.route("/register").post(register);

router.route("/login").post(login);

router.route("/delete").delete(deleteItem);

router.route("/create").post(createItem);

router.route("/update").put(updateItem);

module.exports = router