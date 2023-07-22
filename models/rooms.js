import mongoose, { Schema } from "mongoose";

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  cleaned: {
    type: Boolean,
    default: false,
  },
  assignedRoomie: Schema.Types.ObjectId,
  lastCleaningLog: Schema.Types.ObjectId
})

const roomModel = mongoose.model('rooms', schema)
export default roomModel;