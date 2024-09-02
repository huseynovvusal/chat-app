import { NextFunction, Request, Response } from "express"

export const csp = (req: Request, res: Response, next: NextFunction) => {
  res.setHeader("Content-Security-Policy", "img-src 'self' data: *;")
  next()
}
