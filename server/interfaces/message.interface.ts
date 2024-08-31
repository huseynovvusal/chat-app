import mongoose, { Document } from "mongoose"

export interface IMessage extends Document {
  senderId: mongoose.Schema.Types.ObjectId
  receiverId: mongoose.Schema.Types.ObjectId
  text: string
}
