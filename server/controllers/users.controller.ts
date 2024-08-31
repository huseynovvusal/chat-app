import { NextFunction, Request, Response } from "express"
import asyncErrorWrapper from "express-async-handler"
import { CustomError } from "../helpers/error.helper"
import User from "../models/user.model"

export const getUserForSidebar = asyncErrorWrapper(
  async (req: Request, res: Response, next: NextFunction) => {
    const userId = (req as any).user.id

    const users = await User.find({ _id: { $ne: userId } })

    res.status(200).json({
      success: true,
      data: users,
    })
  }
)
