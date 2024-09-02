import { Server } from "socket.io"
import http from "http"
import express from "express"

const app = express()

const server = http.createServer(app)
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
  },
})

const userSocketMap = new Map<string, string>()

export const getReceiverSocketId = (receiverId: string) => {
  return userSocketMap.get(receiverId)
}

io.on("connection", (socket) => {
  console.log("connected", socket.id)

  const { userId } = socket.handshake.query

  if (userId) {
    userSocketMap.set(userId as string, socket.id)
  }

  io.emit("getOnlineUsers", Array.from(userSocketMap.keys()))

  socket.on("disconnect", () => {
    console.log("disconnected", socket.id)
    userSocketMap.delete(userId as string)

    io.emit("getOnlineUsers", Array.from(userSocketMap.keys()))
  })
})

export { app, server, io }
