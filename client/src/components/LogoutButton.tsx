import useLogout from "@/hooks/useLogout"
import { Button } from "./ui/button"
import Spinner from "./ui/spinner"

export default function LogoutButton() {
  const { loading, errors, logout } = useLogout()

  return (
    <Button
      onClick={logout}
      className="border-red-200 hover:bg-red-50"
      variant="outline"
      size="sm"
    >
      {loading ? (
        <Spinner />
      ) : (
        <span className="text-sm font-normal text-red-800 ">Logout</span>
      )}
    </Button>
  )
}
