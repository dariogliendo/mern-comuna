import express from 'express'
import auth from './API/auth.js'
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import userApi from './API/user.api.js'
import roomApi from './API/room.api.js'
import authorization from './middleware/authorization.js'

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(auth)
app.use(authorization)
app.use(roomApi)
app.use(userApi)
const port = 8000


mongoose.connect('mongodb://127.0.0.1:27017')
  .then(() => {
    console.log('Connection to MongoDB established')
  })
  .catch(err => {
    console.error('Failed to connect to Mongo', err)
  })
app.listen(port, () => {
  console.log(`Express server listening on ${port}`)
})