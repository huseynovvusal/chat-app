import { createContext, useEffect, useState } from "react"
import io, { Socket } from "socket.io-client"
import { useAuth } from "./AuthContext"
import { IAuthContext } from "@/interfaces/context"

export const SocketContext = createContext<{
  socket: Socket | null
  onlineUsers: string[]
} | null>(null)

export const SocketContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [socket, setSocket] = useState<Socket | null>(null)
  const [onlineUsers, setOnlineUsers] = useState<string[]>([])
  const { authUser } = useAuth() as IAuthContext

  useEffect(() => {
    if (authUser) {
      const socket = io("http://localhost:5000")

      setSocket(socket)

      return () => {
        socket.close()
      }
    } else {
      setSocket(null)
    }
  }, [authUser])

  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  )
}
