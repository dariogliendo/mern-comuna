import express from 'express'
import roomModel from '../models/rooms.js'

const roomApi = express.Router()

roomApi.get('/api/room', async (req, res) => {
  try {
    const result = await roomModel.find(req.query).select()
    res.send(result)
  } catch (error) {
    throw new Error(error)
  }
})

roomApi.post('/api/room', async (req, res) => {
  try {
    let result
    if (req.body._id) {
      const modifiedRoom = await roomModel.findOne({ _id: req.body._id })
      if (req.body.hasOwnProperty('cleaned') && req.body.cleaned !== modifiedRoom.cleaned && req.userData._id !== String(modifiedRoom.assignedRoomie)) return res.status(401).json({
        statusCode: 401,
        msg: 'No tiene permiso para modificar ese sector'
      })
      Object.assign(modifiedRoom, req.body)
      result = modifiedRoom.save()
    } else {
      const newRoom = new roomModel(req.body)
      result = await newRoom.save()
    }
    res.send(result)
  } catch (error) {
    throw new Error(error)
  }
})

roomApi.delete('/api/room', async (req, res) => {
  try {
    if (!req.userData.admin) return res.status(401).json({
      statusCode: 401,
      msg: 'Sólo un administrador puede eliminar'
    })
    const result = await roomModel.deleteOne({ _id: req.body._id })
    if (!result || !result.acknowledged || !result.deletedCount) return res.status(400).json({
      statusCode: 400,
      msg: 'No se encontró la habitación para eliminar'
    })
    return res.send(true)
  } catch (error) {
    throw new Error(error)
  }
})

export default roomApi