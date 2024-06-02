const mongoose = require('mongoose')

const authSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    image: { type: String }, 
    number: { type: Number, required: true },
    isUser: { type: String, enum: ["user", "seller", "admin"], default: "user" },
    isVerfied: { type: Boolean, default: false }
})

module.exports = mongoose.model("auth", authSchema)