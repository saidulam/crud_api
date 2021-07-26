const mongoose = require("mongoose")


var userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        maxlength: 32,
        trim: true,
    },
    lastname: {
        type: String,
        required: true,
        maxlength: 32,
        trim: true,
    },
    phone: {
        type: Number,
        trim: true,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
    },
}, {
    timestamps: true
});


module.exports = mongoose.model("User", userSchema)
