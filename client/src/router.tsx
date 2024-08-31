import { createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import ProtectRouteForSignup from "./private/ProtectRouteForSignup"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
