import { NextFunction, Request, Response } from "express"
import asyncErrorWrapper from "express-async-handler"
import Conversation from "../models/conversation.model"
import Message from "../models/message.model"
import { CustomError } from "../helpers/error.helper"

export const sendMessage = asyncErrorWrapper(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id: receiverId } = req.params
    const senderId = (req as any).user.id
    const { text } = req.body

    let conversation = await Conversation.findOne({
      participiants: { $all: [senderId, receiverId] },
    })

    if (!conversation) {
      conversation = await Conversation.create({
        participiants: [senderId, receiverId],
      })
    }

    const newMessage = new Message({
      sender: senderId,
      receiver: receiverId,
      text,
    })

    if (newMessage) {
      conversation.messages.push(newMessage.id)
    }

    await newMessage.save()
    await conversation.save()

    //TODO: SOCKET.IO CODE

    res.status(201).json({
      success: true,
      message: "Message sent.",
      data: newMessage,
    })
  }
)

export const getMessages = asyncErrorWrapper(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id: receiverId } = req.params
    const senderId = (req as any).user.id

    const conversation = await Conversation.findOne({
      participiants: { $all: [senderId, receiverId] },
    }).populate({
      path: "messages",
      populate: { path: "sender", select: "profilePicture" },
    })

    if (!conversation) {
      return next(new CustomError("Conversation not found.", 400))
    }

    res.status(200).json({
      success: true,
      data: conversation.messages,
    })
  }
)
