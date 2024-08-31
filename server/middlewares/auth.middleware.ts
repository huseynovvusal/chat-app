import { NextFunction, Request, Response } from "express"
import asyncErrorWrapper from "express-async-handler"
import jwt from "jsonwebtoken"
import { CustomError } from "../helpers/error.helper"
import User from "../models/user.model"

export const getAccessToRoute = asyncErrorWrapper(
  async (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies.access_token

    if (!token) {
      return next(new CustomError("You are not authorized.", 401))
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as {
      userId: string
    }

    if (!decoded) {
      return next(new CustomError("Token is not valid.", 401))
    }

    const user = await User.findById(decoded.userId as string)

    if (!user) {
      return next(new CustomError("User not found.", 404))
    }

    // !!
    console.log("USER", user)
    ;(req as any).user = user

    next()
  }
)
