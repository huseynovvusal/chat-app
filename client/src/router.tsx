import { createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Chat from "./pages/Chat"
import NoChat from "./pages/NoChat"
import ProtectRouteForAuth from "./private/ProtectRouteForAuth"
import ProtectRouteForUnAuth from "./private/ProtectRouteForUnAuth"

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectRouteForUnAuth>
        <Home />
      </ProtectRouteForUnAuth>
    ),
    children: [
      {
        path: "chats/:receiverId",
        element: <Chat />,
      },
      {
        path: "/",
        element: <NoChat />,
      },
    ],
  },
  {
    path: "/login",
    element: (
      <ProtectRouteForAuth>
        <Login />
      </ProtectRouteForAuth>
    ),
  },
  {
    path: "/signup",
    element: (
      <ProtectRouteForAuth>
        <Signup />
      </ProtectRouteForAuth>
    ),
  },
])

export default router
