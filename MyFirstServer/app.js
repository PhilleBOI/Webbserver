const express = require('express')
const dBModule = require('./mongoDBTest')
const { storePerson } = require('./Person')
const app = express()
const port = 3000

const clientDir = __dirname + "\\client\\"

app.use(express.json())
app.use(express.urlencoded())
app.use(express.static(clientDir))

app.set('view engene', 'ejs')

app.get('/', (req, res) => { 
res.sendFile(clientDir + "./index.html")
})

app.get('/style', (req, res) => {
    res.sendFile(clientDir + "./index.css")
})

app.get('/bild', (req, res) => {
    res.sendFile(clientDir + "./welcome.jpg")
})

const nameList = ['Niklas', 'Petter', 'Ludde', 'Olle', 'OggeP'];

app.get('/messages', async (req, res) => {
  let messages = await messagesModel.getAllMessages()
  res.render("pages/massages.ejs", {names: nameList})
})

app.post('/', (req, res) => {
  let person = storePerson(req.body.name, req.body.email, req.body.age)
  dBModule.storeElement(person)

  res.redirect('/')
})

app.get('/teknik', (req, res) => res.send('EK sux'))
app.get('/ludvig', (req, res) => res.send('Fin pojke :)'))
app.get('/oskar', (req, res) => res.send('Is sick, very sad momento :('))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))