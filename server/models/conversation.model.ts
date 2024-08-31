import mongoose from "mongoose"
import { IConversation } from "../interfaces/conversation.interface"

const ConversationSchema = new mongoose.Schema<IConversation>(
  {
    participiants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
    ],
    messages: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message",
        default: [],
      },
    ],
  },
  {
    timestamps: true,
  }
)

const Conversation = mongoose.model("Conversation", ConversationSchema)

export default Conversation
