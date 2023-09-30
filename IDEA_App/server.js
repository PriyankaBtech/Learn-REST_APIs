const express = require('express')
const serverConfig = require('./configs/server.config')
const mongoose = require('mongoose')
const dbConfig = require('./configs/db.config')
const userModel = require('./models/user.model')
const bcrypt = require('bcrypt')

const app = express()

// Logic to connect to mongodb and create an ADMIN user
// need to have mongodb up and running in local machine

mongoose.connect(dbConfig.DB_URL)
const db = mongoose.connection

db.on("error", () => {
    console.log("Error while connecting to database")
})

db.once("open", () => {
    console.log("Database is connected")

    init()
})

async function init() {

    // Initialize the mongodb
    // Need to create the ADMIN user

    // Check if the admin user is already present
    let admin = await userModel.findOne({
        userId : "admin"
    })

    if(admin) {
        console.log("Admin user already present")
        return
    }

    admin = await userModel.create( {
        name : "Priyanka",
        userId : "admin",
        email : "priyanka@gmail.com",
        userType : "ADMIN",
        password : bcrypt.hashSync("Thankyou1", 8)
    })
    console.log(admin)
}


app.listen(serverConfig.PORT, () => {
    console.log(`server started on port number: ${serverConfig.PORT}`)
})