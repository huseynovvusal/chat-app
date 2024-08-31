import { NextFunction, Request, Response } from "express"
import { MongoServerError } from "mongodb"

import { CustomError } from "../helpers/error.helper"

export const errorHandler = (
  err: CustomError | MongoServerError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // !
  console.log(err)

  let customError = err

  if ("code" in err && err.code === 11000) {
    const mongoServerError = err as MongoServerError

    if (mongoServerError.keyPattern.email)
      customError = new CustomError(
        "This email has been used. Please, provide a different email.",
        409
      )
    else if (mongoServerError.keyPattern.username)
      customError = new CustomError(
        "This username has been used. Please, provide a different username.",
        409
      )
  }

  switch (err.name) {
    case "SyntaxError":
      customError = new CustomError("Unexpected Syntax", 400)
      break
    case "ValidationError":
      let { message, errors } = extractMongoServerError(err.message)
      customError = new CustomError(message, 400, errors)
      break
    case "CastError":
      customError = new CustomError("Please provide a valid ID.", 400)
      break
  }

  res.status(customError.status || 500).json({
    success: false,
    message: customError.message || "Internal server error",
    errors: customError.errors,
  })
}

const extractMongoServerError = (errorMessage: string) => {
  const splitted = errorMessage.split(".,")

  let errors: string[] = []

  for (let error of splitted) {
    const splittedError = error.split(": ")
    errors.push(splittedError[splittedError.length - 1])
  }

  return { message: errors.join(". "), errors }
}

export default extractMongoServerError
