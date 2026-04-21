import App from "../App";
import { createBrowserRouter, Navigate } from "react-router";
import Home from "./Pages/Home/Home";
import Coverage from "./Pages/Coverage/Coverage";
import Error from "./Shared/Error";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Login from "./Pages/Auth/Login";
import SignUp from "./Pages/Auth/SignUp";
import AuthLayout from "./Pages/Auth/AuthLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/coverage",
        Component: Coverage,
      },
      {
        path: "/error",
        Component: Error,
      },
      {
        path:"/about-us",
        Component:AboutUs
      },
      {
        path: "/auth",
        Component: AuthLayout,
        children: [
          {
            index: true,
            element: <Navigate to="/auth/login" replace />,
          },
          {
            path: "login",
            Component: Login,
          },
          {
            path: "signUp",
            Component: SignUp,
          },
        ],
      },
    ],
  },
]);
