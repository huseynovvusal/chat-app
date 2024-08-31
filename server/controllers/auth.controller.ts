import { NextFunction, Request, Response } from "express"
import asyncErrorWrapper from "express-async-handler"
import User from "../models/user.model"
import generateTokenAndSetCookie from "../utils/token"

export const login = asyncErrorWrapper(
  async (req: Request, res: Response, next: NextFunction) => {}
)

export const logout = asyncErrorWrapper(
  async (req: Request, res: Response, next: NextFunction) => {}
)

export const signup = asyncErrorWrapper(
  async (req: Request, res: Response, next: NextFunction) => {
    const { firstName, lastName, username, email, password } = req.body

    const profilePicture = `https://avatar.iran.liara.run/username?username=${firstName}+${lastName}`

    const user = await User.create({
      firstName,
      lastName,
      username,
      email,
      password,
      profilePicture,
    })

    generateTokenAndSetCookie(user.id, res)

    res.status(201).json({
      success: true,
      message: "Signed up successfully.",
      data: {
        ...(user as any)._doc,
        password: undefined,
      },
    })
  }
)
