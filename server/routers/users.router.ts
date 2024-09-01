import express from "express"
import { getAccessToRoute } from "../middlewares/auth.middleware"
import { getUserForSidebar, searchUser } from "../controllers/users.controller"

const router = express.Router()

router.get("/", getAccessToRoute, getUserForSidebar)
router.get("/:username", getAccessToRoute, searchUser)

export default router
