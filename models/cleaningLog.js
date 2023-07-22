import mongoose, { Schema } from "mongoose";

const schema = new mongoose.Schema({
  ts: {
    type: Date,
    default: Date.now
  },
  roomie: Schema.Types.ObjectId,
  onSchedule: Boolean,
})

const cleaningLogModel = mongoose.model('users', schema)
export default cleaningLogModel;