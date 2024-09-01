export interface IMessage {
  _id: string
  sender: {
    profilePicture: string
  }
  text: string
  id?: string
  createdAt: string
}
