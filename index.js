const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.sendFile("pages/index.html", {root: __dirname})
})

app.get('/login', (req, res) => {
    res.sendFile("pages/login.html", {root: __dirname})
})

app.get('/singup', (req, res) => {
    res.sendFile("pages/singup.html", {root: __dirname})
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})