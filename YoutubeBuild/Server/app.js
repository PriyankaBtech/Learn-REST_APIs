const express = require('express')
const connectToDB = require('./config/db')

const app = express()

// middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))

connectToDB()

const userRoutes = require('./routes/user.routes')

app.use('/', userRoutes)

app.get('/', (req, res) => {
    res.send("<h1>Welcome to the server</h1>")
})

app.get('/home', (req, res) => {
    res.send("<h1>You are at Home</h1>")
})

app.get('/about', (req, res) => {
    res.json({
        success : true,
        name : "Priyanka",
        message : "Hello Guys"
    })
})

module.exports = app