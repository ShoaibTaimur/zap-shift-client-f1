import { AuthContext } from "@/Context/AuthContext";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useContext } from "react";
import { Outlet } from "react-router";
import AppSideBar from "./AppSideBar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const Dashboard = () => {
  const info = useContext(AuthContext);
  const user = info?.user;
  const logout = info?.logOutUser;
  const photo = typeof user?.photoURL==="string" ? user?.photoURL : "";
  const fallback = user?.displayName?.slice(0, 2).toUpperCase() || "US";

  return (
    <div className="page-shell w-full">
      <SidebarProvider>
        <AppSideBar />
        <SidebarInset className="bg-transparent shadow-none">
          <div
            className="glass-surface mb-3 flex items-center justify-between rounded-2xl border border-[#DCEAE8] bg-white px-4 py-3 text-[#03373D] md:px-6"
            style={{
              backgroundColor: "#FFFFFF",
              borderColor: "#DCEAE8",
            }}
          >
            <SidebarTrigger className="rounded-xl text-[#03373D] hover:bg-[#EAF6D8] hover:text-[#03373D]" />
            <div className="flex items-center gap-3">
              <Button onClick={() => logout?.()} variant="destructive">
                Sign out
              </Button>
              <Avatar className="size-10 border border-[#DCEAE8] shadow-sm">
                <AvatarImage src={photo} alt={user?.displayName || "User"} />
                <AvatarFallback>{fallback}</AvatarFallback>
              </Avatar>
            </div>
          </div>
          <div className="page-shell flex-1 bg-transparent p-0">
            <Outlet />
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
};

export default Dashboard;
