import { IAuthContext } from "@/interfaces/context"
import React, { createContext, useContext, useState } from "react"

export const AuthContext = createContext<IAuthContext | undefined>(undefined)

export const useAuthContext = () => {
  return useContext(AuthContext)
}

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [authUser, setAuthUser] = useState(
    JSON.parse(localStorage.getItem("chat-user") as string) || null
  )

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  )
}
