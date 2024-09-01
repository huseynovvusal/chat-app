import { IUser } from "./user"

export interface IConversation {
  participiants: IUser[]
  messages: any[]
}
