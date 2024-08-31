import { NextFunction, Request, Response } from "express"
import asyncErrorWrapper from "express-async-handler"
import Conversation from "../models/conversation.model"
import Message from "../models/message.model"

export const sendMessage = asyncErrorWrapper(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id: receiverId } = req.params
    const { text } = req.body

    const senderId = (req as any).user.id

    // !!
    console.log("SENDER ID", senderId)

    let conversation = await Conversation.findOne({
      participiants: { $all: [senderId, receiverId] },
    })

    if (!conversation) {
      conversation = await Conversation.create({
        participiants: [senderId, receiverId],
      })
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      text,
    })

    if (newMessage) {
      conversation.messages.push(newMessage.id)
    }

    //TODO: SOCKET.IO CODE

    await Promise.all([conversation.save(), newMessage.save()])

    res.status(201).json({
      success: true,
      message: "Message sent.",
      data: newMessage,
    })
  }
)
