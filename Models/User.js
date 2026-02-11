const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
    firstName : {
        type : String,
        required : true,
        trim : true
    },
    lastName : {
        type : String,
        required : true,
        trim : true,
    },
    email : {
        type : String,
        required : true,
        trim : true,
        unique : true,
        lowercase : true,
    },
    phoneNumber : {
        type : String,
        required : true,
        trim : true,
        unique : true,      
    },
    password : {
        type : String,
        required : true,
    },
    addresses: [{
    label: { type: String, default: "Home" },
    address: String,
    state: String,
    city: String,
    isDefault: { type: Boolean, default: false } }
    ],
    role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
    },
    resetToken : String,
    resetTokenExpiry : Date,
}, { timestamps : true})

const USER = mongoose.model("User", userSchema)
module.exports = USER
