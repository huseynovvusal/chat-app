import React from "react"
import SearchBar from "./SearchBar"
import Profile from "./Profile"

export default function SideBar() {
  return (
    <div className="w-full h-full py-6 px-4 flex flex-col gap-6">
      <Profile />

      <SearchBar />
    </div>
  )
}
