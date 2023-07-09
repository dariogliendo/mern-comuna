import express from 'express'
import auth from './API/auth.js'
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(auth)
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