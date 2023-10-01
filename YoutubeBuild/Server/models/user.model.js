const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type : String,
        required : [true, "name is required"],
        trim : true
    },
    email: {
        type : String,
        required : [true, "Email is required"],
        unique : true
    }

})

module.exports = mongoose.model("User", userSchema)

// User -> users => auto convert in mongodb