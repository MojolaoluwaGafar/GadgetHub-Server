const express = require("express")
const router = express.Router()

const { addProduct } = require("../Controllers/ProductController")
const { upload } = require("../Config/cloudinaryConfig")

router.post("/addProduct", upload.single("photo"), addProduct)