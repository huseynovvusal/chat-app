import express from "express"
import dotenv from "dotenv"
import router from "./routers"
import { errorHandler } from "./middlewares/error.middleware"
import { connectDatabase } from "./helpers/db.helper"
import helmet from "helmet"
import cookieParser from "cookie-parser"
import cors from "cors"
import { app, server } from "./socket"
import path from "path"
import { csp } from "./middlewares/security.middleware"

dotenv.config()

// Environment Variables
const PORT = process.env.PORT
const NODE_ENV = process.env.NODE_ENV

// Middlewares
app.use(express.json())
app.use(helmet())
app.use(cookieParser())
app.use(cors())
app.use(csp)

// Static Files
app.use(express.static(path.join(__dirname, "../../client/dist")))

// Router
app.use("/api", router)

// React
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../client/dist/index.html"))
})

// Error Handler
app.use(errorHandler)

// MongoDB
connectDatabase()

// Start Server
server.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT} (${NODE_ENV})`)
})
