import { NextFunction, Request, Response } from "express"
import asyncErrorWrapper from "express-async-handler"
import Conversation from "../models/conversation.model"
import { IConversation } from "../interfaces/conversation.interface"
import { IUser } from "../interfaces/user.interface"

export const getUserConversations = asyncErrorWrapper(
  async (req: Request, res: Response, next: NextFunction) => {
    const userId = (req as any).user.id

    let conversations: any = await Conversation.find({
      participiants: { $in: [userId] },
    }).populate("participiants")

    conversations = conversations.map((conversation: IConversation) => {
      return {
        ...conversation.toObject(),
        receiver: conversation.participiants.find(
          (user: any) => user.id !== userId
        ),
        lastMessage: conversation.messages[conversation.messages.length - 1],
        messages: undefined,
        participiants: undefined,
      }
    })

    res.status(200).json({
      success: true,
      data: conversations,
    })
  }
)
