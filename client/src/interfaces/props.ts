export interface UserProps {
  firstName: string
  lastName: string
  username: string
  profilePicture: string
  disabled?: boolean
  selected?: boolean
  online?: boolean
}

export interface MessageProps {
  text: string
  sender: {
    profilePicture: string
  }
  createdAt: string
  incoming?: boolean
  animate?: boolean
}
