import React from "react"
import { Input } from "./ui/input"
import { SearchIcon } from "lucide-react"
import { Button } from "./ui/button"

export default function SearchBar() {
  return (
    <form className="flex gap-2">
      <Input className="w-full" placeholder="Search for username..." />

      <Button className="bg-slate-700" type="submit">
        <SearchIcon />
      </Button>
    </form>
  )
}
