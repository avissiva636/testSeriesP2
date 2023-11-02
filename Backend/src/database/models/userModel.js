const mongoose = require("mongoose");

const userschema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "please add the user name"],
    },
    email: {
        type: String,
        required: [true, "please add the user email address"],
        unique: [true, "Email already exist"],
    },
    password: {
        type: String,
        required: [true, "please add the password"],
    },
},
    { timestamps: true, });

module.exports = mongoose.model("User", userschema);