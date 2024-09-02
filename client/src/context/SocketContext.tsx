import { createContext, useContext, useEffect, useState } from "react"
import io, { Socket } from "socket.io-client"
import { useAuth } from "./AuthContext"
import { IAuthContext, ISocketContext } from "@/interfaces/context"

export const SocketContext = createContext<ISocketContext | null>(null)

export const useSocket = () => {
  return useContext(SocketContext)
}

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
      const socket = io(
        import.meta.env.PROD
          ? "https://huseynovvusal-chat-app.onrender.com"
          : "http://localhost:5000",
        {
          query: { userId: authUser._id },
        }
      )

      setSocket(socket)

      socket.on("getOnlineUsers", (data) => {
        setOnlineUsers(data)
      })

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
