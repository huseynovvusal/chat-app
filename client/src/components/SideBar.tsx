import SearchBar from "./SearchBar"
import User from "./User"
import { useAuth } from "@/context/AuthContext"
import { IAuthContext } from "@/interfaces/context"
import { UserProps } from "@/interfaces/props"
import LogoutButton from "./LogoutButton"

const users = [
  {
    firstName: "Mirze",
    lastName: "Guleliyev",
    username: "mgleliyevv",
    profilePicture:
      "https://avatar.iran.liara.run/username?username=Mirze+Guleliyev",
  },
  {
    firstName: "Hidayat",
    lastName: "Hasanzade",
    username: "hidayet_atu",
    profilePicture:
      "https://avatar.iran.liara.run/username?username=Hidayet+Hasanzade",
  },
  {
    firstName: "Orxan",
    lastName: "Memisov",
    username: "orxan_muellim",
    profilePicture:
      "https://avatar.iran.liara.run/username?username=Orxan+Memisov",
  },
]

export default function SideBar() {
  const { authUser } = useAuth() as IAuthContext

  return (
    <div className="w-full h-full py-6 px-4 flex flex-col gap-6 overflow-y-scroll">
      <div className="flex items-center justify-between">
        <User {...(authUser as UserProps)} disabled />
        <LogoutButton />
      </div>

      <SearchBar />

      <div className="flex flex-col gap-4">
        {users.map((user) => (
          <User key={user.username} {...user} />
        ))}
      </div>
    </div>
  )
}
