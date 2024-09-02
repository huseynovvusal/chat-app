import { Socket } from "socket.io-client"
import { IUser } from "./user"

export interface IAuthContext {
  authUser: IUser | null
  setAuthUser: React.Dispatch<React.SetStateAction<IUser | null>>
}

export interface ISocketContext {
  socket: Socket | null
  onlineUsers: string[]
}
