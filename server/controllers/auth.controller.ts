import { NextFunction, Request, Response } from "express"
import asyncErrorWrapper from "express-async-handler"
import bcrypt from "bcryptjs"

import User from "../models/user.model"
import generateTokenAndSetCookie from "../utils/token"
import { CustomError } from "../helpers/error.helper"

export const login = asyncErrorWrapper(
  async (req: Request, res: Response, next: NextFunction) => {
    const { username, password } = req.body

    const user = await User.findOne({ username }).select("+password")

    if (!user) {
      return next(
        new CustomError("There is no such user with that username.", 400)
      )
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password)

    if (!isPasswordCorrect) {
      return next(new CustomError("Invalid username or password.", 400))
    }

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
