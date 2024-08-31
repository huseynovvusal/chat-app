import mongoose, { Document } from "mongoose"

export interface IConversation extends Document {
  participiants: mongoose.Schema.Types.ObjectId[]
  messages: mongoose.Schema.Types.ObjectId[]
}
