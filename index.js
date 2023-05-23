const express = require('express')
const mongoose = require('mongoose')
const Note = require('./models/Note')
const User = require('./models/User')
const app = express()
app.use(express.json({extended:true }))
app.use(express.urlencoded())
const port = 3000

mongoose.connect('mongodb://leoniakmaciek1:rkqMA30u@ac-ig4sdoa-shard-00-02.yamms2s.mongodb.net:27017/?tlsAllowInvalidHostnames=true&tlsAllowInvalidCertificates=true&tls=true&authMechanism=DEFAULT')
  .then(() => {
    console.log('Successfully Connected');
  })
  .catch(() => {
    console.error('Error');
  }); 

// Endopoints to server the
app.get('/', (req, res) => {
    res.sendFile("pages/index.html", { root: __dirname })
})

app.get('/login', (req, res) => {
    res.sendFile("pages/login.html", { root: __dirname })
})

app.get('/signup', (req, res) => {
    res.sendFile("pages/signup.html", { root: __dirname })
})

// Endopoints for APIs
app.post('/getnotes', (req, res) => {
    const { userToken } = req.body
    res.sendFile("pages/signup.html", { root: __dirname })
})

app.post('/login', (req, res) => {
    let user = User.find(req.body)
    console.log(user)
    if(!user){
        res.status(200).json({success: false, massage: "No user found"})
    }else{
        res.status(200).json({success: true, user: {email: user.email}, massage: "User found"})
    }

    res.sendFile("pages/signup.html", { root: __dirname })
})

app.post('/signup', async (req, res) => {
    const { userToken } = req.body
    console.log(req.body)
    let user= await User.create(req.body)
    res.status(200).json({success:true, user: user})
})

app.post('/addnote', (req, res) => {
    const { userToken } = req.body
    res.sendFile("pages/signup.html", { root: __dirname })
})

app.post('/deletenote', (req, res) => {
    const { userToken } = req.body
    res.sendFile("pages/signup.html", { root: __dirname })
})

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})