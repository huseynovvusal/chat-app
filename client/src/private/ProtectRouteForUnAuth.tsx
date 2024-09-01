import { useAuth } from "@/context/AuthContext"
import { IAuthContext } from "@/interfaces/context"
import React from "react"
import { Navigate } from "react-router-dom"

export default function ProtectRouteForUnAuth({
  children,
}: {
  children: React.ReactNode
}) {
  const { authUser } = useAuth() as IAuthContext

  if (!authUser) {
    return <Navigate to="/login" />
  }

  return <>{children}</>
}