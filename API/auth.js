import express from 'express'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import userModel from '../models/user.js'

dotenv.config()

const router = express.Router();

const login = async (req, res) => {
  try {
    if (!req.body || !req.body.password || !req.body.email) return res.status(403).json({
      statusCode: 403,
      msg: "Credentials are incomplete"
    })
    const {email, password} = req.body;
    const user = await userModel.findOne({ email: email })
    if (!user) return res.status(401).json({
      statusCode: 401,
      msg: 'Invalid credentials'
    })
    if (password === user.password) {
      const token = jwt.sign({_id: user._id, admin: user.admin}, process.env.TOKEN_KEY, {
        expiresIn: "2h"
      })
      return res.status(200).json({
        statusCode: 200,
        msg: "Login successfull",
        sessionInfo: {
          token,
          name: user.name,
          email: user.email,
        }
      });
    }
    return res.status(401).json({
      statusCode: 401,
      msg: "Invalid credentials"
    })
  } catch (error) {
    throw new Error('Ocurrió un error al loguearse', error)
  }
}


router.post('/auth/login', login)

export default router