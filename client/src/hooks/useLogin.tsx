import { useAuth } from "@/context/AuthContext"
import { IAuthContext } from "@/interfaces/context"
import { useState } from "react"

const useLogin = () => {
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<string[] | null>(null)

  const { setAuthUser } = useAuth() as IAuthContext

  const login = async (formData: any) => {
    setLoading(true)

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!data.success) {
        setErrors(data.errors)
      } else {
        localStorage.setItem("chat-user", JSON.stringify(data.data))
        setAuthUser(data.data)
      }
    } catch (error) {
      setErrors([error as string])
    } finally {
      setLoading(false)
    }
  }

  return { loading, errors, login }
}

export default useLogin
