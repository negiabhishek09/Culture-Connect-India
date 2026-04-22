import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { Profile } from "./pages/Profile";
import { Explore } from "./pages/Explore";
import { Events } from "./pages/Events";
import { Marketplace } from "./pages/Marketplace";
import { Community } from "./pages/Community";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/signup",
    Component: Signup,
  },
  {
    path: "/profile",
    Component: Profile,
  },
  {
    path: "/explore",
    Component: Explore,
  },
  {
    path: "/events",
    Component: Events,
  },
  {
    path: "/marketplace",
    Component: Marketplace,
  },
  {
    path: "/community",
    Component: Community,
  },
]);
