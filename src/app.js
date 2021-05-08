const express = require('express')
const cors = require('cors')
const bodyParse = require('body-parser')
const app = express()
require('./database')



app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())
app.get('/', (req, res) => res.redirect('/api/v1'))
app.use('/api/v1', require('./routes/mascots.routes'))



module.exports = app;