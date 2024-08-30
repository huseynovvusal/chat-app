import mongoose from "mongoose"

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

const User = mongoose.model("User", UserSchema)

export default User
