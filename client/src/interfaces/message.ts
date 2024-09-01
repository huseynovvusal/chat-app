export interface IMessage {
  _id: string
  sender: {
    profilePicture: string
    _id?: string
  }
  text: string
  createdAt: string
}
