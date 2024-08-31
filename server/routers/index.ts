import express from "express"

import auth from "./auth.router"
import messages from "./messages.router"

const router = express.Router()

router.use("/auth", auth)
router.use("/messages", messages)

export default router
