import { Outlet } from "react-router";
import AppSideBar from "./AppSideBar";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

const Dashboard = () => {
  return (
    <SidebarProvider>
      <AppSideBar />
      <SidebarInset>
        <div
          className="border-b px-4 py-3 text-[#03373D] md:px-6"
          style={{
            backgroundColor: "#FFFFFF",
            borderColor: "#E5E7EB",
          }}
        >
          <SidebarTrigger
            className="text-[#03373D] hover:bg-[#EAF6D8] hover:text-[#03373D]"
          />
        </div>
        <div className="flex-1 p-4 md:p-6 bg-gray-100">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default Dashboard;
