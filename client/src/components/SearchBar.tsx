import React, { useState } from "react"
import { Input } from "./ui/input"
import { SearchIcon } from "lucide-react"
import { Button } from "./ui/button"
import useSearchUser from "@/hooks/useSearchUser"
import { Link } from "react-router-dom"
import { UserProps } from "@/interfaces/props"
import User from "./User"
import Spinner from "./ui/spinner"
import SideBarSectionTitle from "./SideBarSectionTitle"

export default function SearchBar() {
  const [search, setSearch] = useState("")

  const { loading, errors, searchUser, user } = useSearchUser()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    await searchUser(search)
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className={`flex gap-2 ${
          loading && "pointer-events-none cursor-not-allowed opacity-75"
        }`}
      >
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full"
          placeholder="Search for username..."
        />

        <Button variant="outline" type="submit">
          {loading ? <Spinner /> : <SearchIcon size={20} />}
        </Button>
      </form>

      {!loading && search ? (
        <>
          <SideBarSectionTitle text="🔍 Search result" />
          {user ? (
            <div className="flex flex-col gap-4">
              <Link to={`/chats/${user._id}`}>
                <User {...(user as UserProps)} />
              </Link>
            </div>
          ) : (
            <p className="text-sm text-muted-foreground">User not found.</p>
          )}
        </>
      ) : null}
    </>
  )
}
