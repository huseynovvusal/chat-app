import { createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import ProtectRouteForSignup from "./private/ProtectRouteForSignup"
import Chat from "./pages/Chat"
import NoChat from "./pages/NoChat"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "chat/:chatId",
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
    element: <Login />,
  },
  {
    path: "/signup",
    element: (
      <ProtectRouteForSignup>
        <Signup />
      </ProtectRouteForSignup>
    ),
  },
])

export default router
