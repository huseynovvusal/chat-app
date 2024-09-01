import express from "express"
import { getAccessToRoute } from "../middlewares/auth.middleware"
import { getUserConversations } from "../controllers/conversations.controller"

const router = express.Router()

router.get("/", getAccessToRoute, getUserConversations)

export default router
