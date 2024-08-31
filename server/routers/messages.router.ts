import express from "express"
import { sendMessage } from "../controllers/messages.controller"
import { getAccessToRoute } from "../middlewares/auth.middleware"

const router = express.Router()

router.post("/send/:id", getAccessToRoute, sendMessage)

export default router
