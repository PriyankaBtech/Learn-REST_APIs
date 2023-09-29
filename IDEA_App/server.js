const express = require('express')
const serverConfig = require('./configs/server.config')
const mongoose = require('mongoose')
const dbConfig = require('./configs/db.config')

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
})


app.listen(serverConfig.PORT, () => {
    console.log(`server started on port number: ${serverConfig.PORT}`)
})