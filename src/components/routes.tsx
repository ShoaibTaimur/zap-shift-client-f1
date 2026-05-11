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
import Order from "./Pages/SendParcel-order/Order";
import Dashboard from "./Pages/Dashboard/Dashboard";
import ParcelDetails from "./Pages/SendParcel-order/ParcelDetails";
import Payment from "./Pages/Dashboard/Payment";
import PaymentSuccess from "./Pages/Dashboard/PaymentSuccess";
import PaymentCancel from "./Pages/Dashboard/PaymentCancel";
import PaymentHistory from "./Pages/Dashboard/PaymentHistory";
import RiderApprove from "./Pages/Rider/RiderApprove";

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
        path: "/about-us",
        Component: AboutUs,
      },
      {
        path: "rider",
        Component: Rider,
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
  {
    path: "/dashboard",
    element: (
      <Private>
        <Dashboard />
      </Private>
    ),
    children: [
      {
        index: true,
        Component: Order,
      },
      {
        path: "sendParcel",
        Component: SendParcel,
      },
      {
        path:"parcelDetail/:id",
        Component:ParcelDetails
      },
      {
        path:"payment/:id",
        Component:Payment
      },
      {
        path:"payment-success",
        Component:PaymentSuccess
      },
      {
        path:"payment-cancelled",
        Component:PaymentCancel
      },
      {
        path:"payment-history",
        Component:PaymentHistory
      },
      {
        path:"rider-approve",
        Component:RiderApprove
      }
    ],
  },
]);
