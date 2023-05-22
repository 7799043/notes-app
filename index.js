const express = require('express')
const app = express()
const port = 3000

app.get('/Homepage', (req, res) => {
  res.send('Homepage!')
})

app.get('/login', (req, res) => {
    res.send('login!')
  })

  app.get('/singup', (req, res) => {
    res.send('singup!')
  })

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})