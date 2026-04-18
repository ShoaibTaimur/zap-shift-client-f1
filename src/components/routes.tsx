import App from "../App";
import { createBrowserRouter } from "react-router";
import Home from "./Pages/Home/Home";
import Coverage from "./Pages/Coverage/Coverage";

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
        path:"/coverage",
        Component:Coverage
      }
    ],
  },
]);
