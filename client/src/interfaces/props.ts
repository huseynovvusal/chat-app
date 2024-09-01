import { IUser } from "./user"

export interface UserProps {
  firstName: string
  lastName: string
  username: string
  profilePicture: string
  disabled?: boolean
  selected?: boolean
}

export interface MessageProps {
  text: string
  sender: {
    profilePicture: string
  }
  receiver: {
    profilePicture: string
  }
  createdAt: Date
  incoming?: boolean
}
