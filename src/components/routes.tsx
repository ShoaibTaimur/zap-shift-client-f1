import App from "../App";
import { createBrowserRouter } from "react-router";
import Home from "./Pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
]);
