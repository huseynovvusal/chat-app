import { NextFunction, Request, Response } from "express"
import asyncErrorWrapper from "express-async-handler"
import Conversation from "../models/conversation.model"
import Message from "../models/message.model"
import { CustomError } from "../helpers/error.helper"

export const sendMessage = asyncErrorWrapper(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id: receiverId } = req.params
    const senderId = (req as any).user.id
    let { text } = req.body as { text: string }

    if (!text) {
      return next(new CustomError("Text is required.", 400))
    }

    //? "Handling white-spaces"
    text = text.trim()

    if (!text) {
      return next(new CustomError("Text field can't be empty.", 400))
    }

    if (senderId === receiverId) {
      return next(new CustomError("You can't send message to yourself.", 400))
    }

    let conversation = await Conversation.findOne({
      participiants: { $all: [senderId, receiverId] },
    })

    if (!conversation) {
      conversation = await Conversation.create({
        participiants: [senderId, receiverId],
      })
    }

    let newMessage = new Message({
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

    newMessage = await newMessage.populate({
      path: "sender",
      select: "profilePicture",
    })

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
