const express = require('express')
const dBModule = require('./mongoDBTest')
const app = express()
const port = 3000

const clientDir = __dirname + "\\client\\"

app.use(express.json())
app.use(express.urlencoded())

app.get('/', (req, res) => res.sendFile(clientDir + "index.html"))

app.get('/style', (req, res) =>{
    res.sendFile(clientDir + "index.css")
})

app.get('/Bild', (req, res) =>{
    res.sendFile(clientDir + "welcome.jpg")
})

app.post('/', (req, res) => {
  dBModule.storePerson(req.body.name, req.body.email, req.body.age)

  res.redirect('/')
})

app.get('/teknik', (req, res) => res.send('EK sux'))
app.get('/ludvig', (req, res) => res.send('Fin pojke :)'))
app.get('/oskar', (req, res) => res.send('Is sick, very sad momento :('))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))