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
import UserManagement from "./Pages/Admin/UserManagement";
import AdminRoute from "./Pages/Admin/AdminRoute";
import SuperAdminRoute from "./Pages/Admin/SuperAdminRoute";
import AssignRiders from "./Pages/Admin/AssignRiders";
import AssignedDeliveries from "./Pages/Rider/AssignedDeliveries";
import RiderRoutes from "./Pages/Rider/RiderRoutes";
import Forbidden from "./Shared/Forbidden";
import Deliveries from "./Pages/Rider/Deliveries";
import Completed from "./Pages/Rider/Completed";

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
        path: "/forbidden",
        Component: Forbidden,
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
        path: "parcelDetail/:id",
        Component: ParcelDetails,
      },
      {
        path: "payment/:id",
        Component: Payment,
      },
      {
        path: "payment-success",
        Component: PaymentSuccess,
      },
      {
        path: "payment-cancelled",
        Component: PaymentCancel,
      },
      {
        path: "payment-history",
        Component: PaymentHistory,
      },
      {
        path: "rider-approve",
        element: (
          <AdminRoute>
            <RiderApprove />
          </AdminRoute>
        ),
      },
      {
        path: "assign-riders",
        element: (
          <AdminRoute>
            <AssignRiders />
          </AdminRoute>
        ),
      },
      {
        path: "user-management",
        element: (
          <SuperAdminRoute>
            <UserManagement />
          </SuperAdminRoute>
        ),
      },
      {
        path: "assigned-deliveries",
        element: (
          <RiderRoutes>
            <AssignedDeliveries />
          </RiderRoutes>
        ),
      },
      {
        path: "deliveries",
        element: (
          <RiderRoutes>
            <Deliveries />
          </RiderRoutes>
        ),
      },
      {
        path: "completed-deliveries",
        element: (
          <RiderRoutes>
            <Completed />
          </RiderRoutes>
        ),
      },
    ],
  },
]);
