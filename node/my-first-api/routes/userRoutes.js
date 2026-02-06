const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController.js");




router.get("/users", userController.getUsers);
console.log(userController.getUser)
router.get("/user/:id", userController.getUser);

console.log('Routes Configured')




module.exports = router;
