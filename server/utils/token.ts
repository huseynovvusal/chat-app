import { Response } from "express"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()

const generateTokenAndSetCookie = (userId: string, res: Response) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET as string, {
    expiresIn: process.env.JWT_EXPIRES,
  })

  res.cookie("access_token", token, {
    maxAge: parseInt(process.env.JWT_COOKIE_EXPIRES as string),
    httpOnly: true,
    secure: process.env.NODE_ENV === "development",
    sameSite: "strict",
  })
}

export default generateTokenAndSetCookie
