import mongoose from "mongoose"
import { IMessage } from "../interfaces/message.interface"

const MessageSchema = new mongoose.Schema<IMessage>(
  {
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    receiver: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const Message = mongoose.model("Message", MessageSchema)

export default Message
