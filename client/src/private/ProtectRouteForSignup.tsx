import { useAuthContext } from "@/context/AuthContext"
import { IAuthContext } from "@/interfaces/context"
import React from "react"
import { Navigate } from "react-router-dom"

export default function ProtectRouteForSignup({
  children,
}: {
  children: React.ReactNode
}) {
  const { authUser } = useAuthContext() as IAuthContext

  if (authUser) {
    return <Navigate to="/" />
  }

  return <>{children}</>
}
