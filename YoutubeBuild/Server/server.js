const express = require('express')

const app = express()

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

app.listen(4000, () => {
    console.log("server listen at port 4000")
})









// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Welcome to learn Building of REST APIs !')
// })

// app.get('/youtube', (req, res) => {
//   res.send('Welcome to YouTube !')
// })

// app.get('/twitter', (req, res) => {
//   res.send('Welcome to Twitter !')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })