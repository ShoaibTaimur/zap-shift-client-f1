import { AuthContext } from "@/Context/AuthContext";
import { useContext } from "react";
import { Navigate } from "react-router";
import type { ReactNode } from "react";
import { Skeleton } from "./ui/skeleton";

const Private = ({ children }: { children: ReactNode }) => {
  const info = useContext(AuthContext);
  const user = info?.user;
  const loading = info?.loading;
  if (loading) {
    return (
      <div className="flex justify-center items-center h-70 bg-white my-10 rounded-2xl">
        <div className="flex w-full max-w-xs flex-col gap-7">
          <div className="flex flex-col gap-3">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-8 w-full" />
          </div>
          <div className="flex flex-col gap-3">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-8 w-full" />
          </div>
          <Skeleton className="h-8 w-24" />
        </div>
      </div>
    );
  }
  if (!user) {
    return <Navigate to="/auth" />;
  }
  return children;
};

export default Private;
