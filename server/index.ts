import express from "express"
import dotenv from "dotenv"
import router from "./routers"
import { errorHandler } from "./middlewares/error.middleware"
import { connectDatabase } from "./helpers/db.helper"

dotenv.config()

// Environment Variables
const PORT = process.env.PORT

const app = express()

// Middlewares
app.use(express.json())

// Router
app.use("/api", router)

// Error Handler
app.use(errorHandler)

// MongoDB
connectDatabase()

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`)
})
