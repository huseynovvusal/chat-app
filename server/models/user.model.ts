import mongoose from "mongoose"
import bcrypt from "bcryptjs"

import { IUser } from "../interfaces/user.interface"

const UserSchema = new mongoose.Schema<IUser>({
  firstName: {
    type: String,
    required: [true, "Please, provide your first name."],
  },
  lastName: {
    type: String,
    required: [true, "Please, provide your last name."],
  },
  username: {
    type: String,
    required: [true, "Please, provide a username."],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Please, provide an email."],
    unique: true,
    match: [
      /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
      "Please, provide a valid email.",
    ],
  },
  password: {
    type: String,
    required: [true, "Please, provide a password."],
    minlength: 6,
    select: false,
  },
  profilePicture: {
    type: String,
    default: "",
  },
})

// Hooks
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next()
  }

  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(this.password, salt)

  this.password = hashedPassword

  next()
})

const User = mongoose.model("User", UserSchema)

export default User
