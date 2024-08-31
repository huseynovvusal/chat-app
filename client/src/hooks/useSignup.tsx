import { useAuthContext } from "@/context/AuthContext"
import { IAuthContext } from "@/interfaces/context"
import React, { useState } from "react"

const useSignup = () => {
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<string[] | null>(null)

  const { setAuthUser } = useAuthContext() as IAuthContext

  const signup = async (formData: any) => {
    setLoading(true)

    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!data.success) {
        setErrors(data.errors)
      }

      localStorage.setItem("chat-user", JSON.stringify(data.data))
      setAuthUser(data.data)
    } catch (error) {
      setErrors([error as string])
    } finally {
      setLoading(false)
    }
  }

  return { loading, errors, signup }
}

export default useSignup
