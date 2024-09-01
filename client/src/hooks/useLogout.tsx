import { useAuth } from "@/context/AuthContext"
import { IAuthContext } from "@/interfaces/context"
import { useState } from "react"

const useLogout = () => {
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<string[] | null>(null)

  const { setAuthUser } = useAuth() as IAuthContext

  const logout = async () => {
    setLoading(true)

    try {
      const response = await fetch("/api/auth/logout")

      const data = await response.json()

      if (!data.success) {
        setErrors(data.errors)
      } else {
        localStorage.removeItem("chat-user")
        setAuthUser(null)
      }
    } catch (error) {
      setErrors([error as string])
    } finally {
      setLoading(false)
    }
  }

  return { loading, errors, logout }
}

export default useLogout
