const express = require("express")
const router = express.Router()
const { signup, signin, forgotPassword, resetPassword, addAddress, getAddress, deleteAccount } = require("../Controllers/userAuthController")
const { auth, isUser } = require("../Middlewares/Auth");

//define routes
router.post("/signup", signup)
router.post("/signin", signin)
router.post("/forgotPassword" , forgotPassword)
router.post("/resetPassword/:token", resetPassword)
router.post("/address", addAddress)
router.get("/me", auth, isUser, getAddress )
router.delete("/me", auth, isUser, deleteAccount )

module.exports = router