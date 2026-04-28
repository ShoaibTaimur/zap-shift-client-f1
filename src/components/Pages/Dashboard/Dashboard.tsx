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
  const photo = user?.photoURL;
  const fallback = user?.displayName?.slice(0, 2).toUpperCase() || "US";
  console.log(photo);

  return (
    <div className="w-full">
      <SidebarProvider>
        <AppSideBar />
        <SidebarInset>
          <div
            className="flex items-center justify-between border-b px-4 py-3 text-[#03373D] md:px-6"
            style={{
              backgroundColor: "#FFFFFF",
              borderColor: "#E5E7EB",
            }}
          >
            <SidebarTrigger className="text-[#03373D] hover:bg-[#EAF6D8] hover:text-[#03373D]" />
            <div className="flex items-center gap-3">
              <Button onClick={() => logout?.()} variant="destructive">
                Sign out
              </Button>
              <Avatar className="size-10 border border-[#E5E7EB]">
                <AvatarImage src={photo} alt={user?.displayName || "User"} />
                <AvatarFallback>{fallback}</AvatarFallback>
              </Avatar>
            </div>
          </div>
          <div className="flex-1 p-4 md:p-6 bg-gray-100">
            <Outlet />
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
};

export default Dashboard;
