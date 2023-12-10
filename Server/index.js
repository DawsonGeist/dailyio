const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const mongoString = "mongodb+srv://dev:dev@cluster0.3nuwjrs.mongodb.net/"
mongoose.connect(mongoString)
const database = mongoose.connection

database.on('error', (error) => console.log(error))
database.once('connected', () => console.log('Database Connected'))

const app = express()
const port = 9000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})