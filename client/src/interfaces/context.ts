import { IUser } from "./user"

export interface IAuthContext {
  authUser: IUser | null
  setAuthUser: React.Dispatch<React.SetStateAction<IUser | null>>
}
