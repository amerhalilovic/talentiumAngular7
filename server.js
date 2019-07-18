const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const PORT = 3000
const mongoose = require('mongoose');
const db = "mongodb://uservishwas:Amer1206@ds151247.mlab.com:51247/talentium"


// const api = require('./routes/api')
const app = express()
app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// app.use('/api', api)

app.get('/', function (req, res) {
    res.send('Hello from server')
})

app.listen(PORT, function () {
    console.log('Server runnging on localost:' + PORT)
})

mongoose.connect(db, err => {
    if (err) {
      console.error('Error! ' + err)
    } else {
      console.log('Connected to mongoose')
    }
  })