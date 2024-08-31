import express from "express"
import { getMessages, sendMessage } from "../controllers/messages.controller"
import { getAccessToRoute } from "../middlewares/auth.middleware"

const router = express.Router()

router.post("/send/:id", getAccessToRoute, sendMessage)
router.get("/:id", getAccessToRoute, getMessages)

export default router
