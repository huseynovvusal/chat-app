import React from "react"
import SearchBar from "./SearchBar"
import User from "./User"

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
  return (
    <div className="w-full h-full py-6 px-4 flex flex-col gap-6 overflow-y-scroll">
      <User
        firstName="Vusal"
        lastName="Huseynov"
        username="huseynovvusal"
        profilePicture="https://avatar.iran.liara.run/username?username=Vusal+Huseynov"
        disabled
      />

      <SearchBar />

      <div className="flex flex-col gap-4">
        {users.map((user) => (
          <User key={user.username} {...user} />
        ))}
      </div>
    </div>
  )
}
