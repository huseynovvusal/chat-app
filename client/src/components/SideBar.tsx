import SearchBar from "./SearchBar"
import User from "./User"
import { useAuth } from "@/context/AuthContext"
import { IAuthContext } from "@/interfaces/context"
import { UserProps } from "@/interfaces/props"
import LogoutButton from "./LogoutButton"
import Conversations from "./Conversations"

export default function SideBar() {
  const { authUser } = useAuth() as IAuthContext

  return (
    <div className="w-full h-full py-6 px-4 flex flex-col gap-6 overflow-y-scroll">
      <div className="flex items-center justify-between">
        <User {...(authUser as UserProps)} disabled />
        <LogoutButton />
      </div>

      <SearchBar />

      <Conversations />
    </div>
  )
}
