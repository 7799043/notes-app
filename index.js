const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded())
const port = 3000
// Endopoints to server the
app.get('/', (req, res) => {
    res.sendFile("pages/index.html", {root: __dirname})
})

app.get('/login', (req, res) => {
    res.sendFile("pages/login.html", {root: __dirname})
})

app.get('/singup', (req, res) => {
    res.sendFile("pages/singup.html", {root: __dirname})
})

// Endopoints for APIs
app.get('/getnotes', (req, res) => {
    const {userToken } = req.body
    res.sendFile("pages/singup.html", {root: __dirname})
})

app.get('/login', (req, res) => {
    const {userToken } = req.body
    res.sendFile("pages/singup.html", {root: __dirname})
})

app.get('/singup', (req, res) => {
    const {userToken } = req.body
    res.sendFile("pages/singup.html", {root: __dirname})
})

app.get('/addnote', (req, res) => {
    const {userToken } = req.body
    res.sendFile("pages/singup.html", {root: __dirname})
})

app.get('/deletenote', (req, res) => {
    const {userToken } = req.body
    res.sendFile("pages/singup.html", {root: __dirname})
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})