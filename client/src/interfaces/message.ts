export interface IMessage {
  _id: string
  sender: {
    profilePicture: string
    _id?: string
  }
  receiver: string //? ID
  text: string
  createdAt: string
  animate?: boolean
}
