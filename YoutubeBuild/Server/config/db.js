require('dotenv').config()

const mongoose = require('mongoose')

const connectToDB = async () => {
    mongoose.connect(process.env.MONGO_URI)
    .then((conn) => {
        console.log("DB connected")
    })
    .catch((err) => {
        console.log("Error :", err)
    }) 
}

module.exports = connectToDB
