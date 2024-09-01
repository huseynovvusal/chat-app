import express from "express"

import auth from "./auth.router"
import conversations from "./conversations.router"
import messages from "./messages.router"
import users from "./users.router"

const router = express.Router()

router.use("/auth", auth)
router.use("/conversations", conversations)
router.use("/messages", messages)
router.use("/users", users)

export default router
