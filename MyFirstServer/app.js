const express = require('express')
const app = express()
const port = 3000

const clientDir = __dirname + "\\client\\"

app.use(express.json())
app.use(express.urlencoded())

app.get('/', (req, res) => res.sendFile(clientDir + "index.html"))

app.get('/style', (req, res) =>{
    res.sendFile(clientDir + "index.css")
})

app.get('/inlog', (req, res) =>{
    res.sendFile(clientDir + "welcome.jpg")
})

app.post('/', (req, res) => {
    console.log(req.body.name)
    console.log(req.body.email)
})

app.get('/teknik', (req, res) => res.send('EK sux'))
app.get('/ludvig', (req, res) => res.send('Fin pojke :)'))
app.get('/oskar', (req, res) => res.send('Is sick, very sad momento :('))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))