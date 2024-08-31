import express from "express"
import { getAccessToRoute } from "../middlewares/auth.middleware"
import { getUserForSidebar } from "../controllers/users.controller"

const router = express.Router()

router.get("/", getAccessToRoute, getUserForSidebar)

export default router
