import mongoose, { Document } from "mongoose"

export interface IMessage extends Document {
  sender: mongoose.Schema.Types.ObjectId
  receiver: mongoose.Schema.Types.ObjectId
  text: string
}
