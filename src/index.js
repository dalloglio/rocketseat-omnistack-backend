const path = require('path')
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const server = require('http').Server(app)
const io = require('socket.io')(server)

const app = express()

mongoose.connect(
  'mongodb+srv://omnistack:omnistack@cluster0-2sryy.mongodb.net/test?retryWrites=true&w=majority',
  {
    useNewUrlParser: true
  }
)

app.use((req, res, next) => {
  req.io = io
  next()
})

app.use(cors())

app.use(
  '/files',
  express.static(path.resolve(__dirname, '..', 'uploads', 'resized'))
)

app.use(require('./routes'))

server.listen(3000)
