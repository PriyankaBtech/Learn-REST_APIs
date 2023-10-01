const app = require('./app.js')

const PORT = 8001

app.listen(PORT, () => {
    console.log(`server listen at port : ${PORT}`)
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