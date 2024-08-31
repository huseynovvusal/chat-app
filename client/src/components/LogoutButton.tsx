import { Button } from "./ui/button"

export default function LogoutButton() {
  return (
    <Button
      className="border-red-200 hover:bg-red-50"
      variant="outline"
      size="sm"
    >
      <span className="text-sm font-normal text-red-800 ">Logout</span>
    </Button>
  )
}
