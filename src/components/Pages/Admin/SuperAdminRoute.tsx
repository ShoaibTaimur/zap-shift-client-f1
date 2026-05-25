import { Skeleton } from "@/components/ui/skeleton";
import { AuthContext } from "@/Context/AuthContext";
import UseRole from "@/Hooks/UseRole";
import { useContext, type ReactNode } from "react";
import { Navigate, useLocation } from "react-router";

const SuperAdminRoute = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const info = useContext(AuthContext);
  const user = info?.user;
  const authLoading = info?.loading;
  const { role, isLoading: roleLoading } = UseRole();

  if (authLoading || roleLoading) {
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
    return <Navigate state={location.pathname} to="/auth" />;
  }

  if (role !== "super_admin") {
    return (
      <Navigate
        to="/forbidden"
        replace
        state={{
          from: location.pathname,
          title: "Super admin throne guarded.",
          message: "Only super admin can touch this room. Everyone else gets bonked.",
        }}
      />
    );
  }

  return children;
};

export default SuperAdminRoute;
