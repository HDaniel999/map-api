const config = require('./config')
const mongoose = require('mongoose')
const express = require('express')
const app = express()

app.use(express.json())

const apiRouter = require('./api')

mongoose.connect('mongodb://localhost', { useUnifiedTopology: true, useNewUrlParser: true })
  .then(
    () => {
      console.log('Database Ready For Action')
    },
    err => {
      console.error(err)
    }
  )

app.get('/', (req, res) => {
  res.json({ appName: 'Api map', version: 1 })
})

app.use('/api', apiRouter)

app.listen(config.port, () => {
  console.log('Ready For Work')
})