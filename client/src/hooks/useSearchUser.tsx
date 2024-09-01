import { IUser } from "@/interfaces/user"
import { useState } from "react"

const useSearchUser = () => {
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<string[] | null>(null)
  const [user, setUser] = useState<IUser | null>(null)

  const searchUser = async (username: string) => {
    setLoading(true)

    try {
      const response = await fetch(`/api/users/${username}`)

      const data = await response.json()

      if (!data.success) {
        setErrors(data.errors)
        setUser(null)
      } else {
        setUser(data.data)
      }
    } catch (error) {
      setErrors([error as string])
    } finally {
      setLoading(false)
    }
  }

  return { loading, errors, searchUser, user }
}

export default useSearchUser
