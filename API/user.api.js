import express from 'express'
import userModel from '../models/user.js'

const userApi = express.Router()

userApi.get('/api/users', async (req, res) => {
  try {
    const result = await userModel.find(req.query)
    res.send(result)
  } catch (error) {
    throw new Error(error)
  }
})

export default userApi