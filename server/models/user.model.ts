import mongoose from "mongoose"
import bcrypt from "bcryptjs"

import { IUser } from "../interfaces/user.interface"

const UserSchema = new mongoose.Schema<IUser>(
  {
    firstName: {
      type: String,
      required: [true, "Please, provide your first name."],
      maxlength: [50, "Please, provide a first name under 50 characters."],
      minlength: [
        3,
        "Please, provide a first name with at least 3 characters.",
      ],
      match: [/^[a-zA-Z]+$/, "Please, provide a valid first name."],
    },
    lastName: {
      type: String,
      required: [true, "Please, provide your last name."],
      maxlength: [50, "Please, provide a last name under 50 characters."],
      minlength: [3, "Please, provide a last name with at least 3 characters."],
      match: [/^[a-zA-Z]+$/, "Please, provide a valid last name."],
    },
    username: {
      type: String,
      required: [true, "Please, provide a username."],
      unique: true,
      minlength: [3, "Please, provide a username with at least 3 characters."],
      maxlength: [20, "Please, provide a username with at most 20 characters."],
      match: [/^[a-zA-Z0-9]+$/, "Please, provide a valid username."],
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
  },
  {
    timestamps: true,
  }
)

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
