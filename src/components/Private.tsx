import { AuthContext } from "@/Context/AuthContext";
import { useContext } from "react";
import { Navigate } from "react-router";
import type { ReactNode } from "react";


const Private = ({ children }: { children: ReactNode }) => {
  const info = useContext(AuthContext);
  const user=info?.user;
  if (user) {
    return children;
  } else {
    return <Navigate to="/auth" />;
  }
};

export default Private;
