import App from "../App";
import { createBrowserRouter, Navigate } from "react-router";
import Home from "./Pages/Home/Home";
import Coverage from "./Pages/Coverage/Coverage";
import Error from "./Shared/Error";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Login from "./Pages/Auth/Login";
import SignUp from "./Pages/Auth/SignUp";
import AuthLayout from "./Pages/Auth/AuthLayout";
import Private from "./Private";
import Rider from "./Pages/Rider/Rider";
import SendParcel from "./Pages/SendParcel-order/SendParcel";

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
        Component:Coverage
      },
      {
        path:"/rider",
        element:(
          <Private>
            <Rider />
          </Private>
          )
      },
      {
        path:"/sendParcel",
        element:(
          <Private>
            <SendParcel />
          </Private>
          )
      },
      {
        path:"/order",
        element:(
          <Private>
            <SendParcel />
          </Private>
          )
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
