import {
  BookCheck,
  History,
  HomeIcon,
  PackageIcon,
  ShoppingCart,
  UserCog,
} from "lucide-react";
import { NavLink, useLocation } from "react-router";
import logo from "../../../../Resources/assets/logo.png";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar";
import UseRole from "@/Hooks/UseRole";
import Loading from "@/components/Shared/Loading";

const commonItems = [
  {
    title: "Home",
    url: "/",
    icon: HomeIcon,
  },
  {
    title: "Orders",
    url: "/dashboard",
    icon: ShoppingCart,
  },
  {
    title: "Send Parcel",
    url: "/dashboard/sendParcel",
    icon: PackageIcon,
  },
  {
    title: "Payment History",
    url: "/dashboard/payment-history",
    icon: History,
  },
];
const adminItems = [
  {
    title: "Approve Riders",
    url: "/dashboard/rider-approve",
    icon: BookCheck,
  },
];

const superAdminItems = [
  {
    title: "Approve Riders",
    url: "/dashboard/rider-approve",
    icon: BookCheck,
  },
  {
    title: "User Management",
    url: "/dashboard/user-management",
    icon: UserCog,
  },
];

const AppSideBar = () => {
  const { pathname } = useLocation();
  const { state } = useSidebar();
  const { role, isLoading } = UseRole();

  const items =
    role === "super_admin"
      ? [...commonItems, ...superAdminItems]
      : role === "admin"
        ? [...commonItems, ...adminItems]
        : commonItems;

  if (isLoading) return <Loading />;

  return (
    <Sidebar
      collapsible="icon"
      className="bg-sidebar text-sidebar-foreground"
      style={
        {
          "--sidebar": "#FFFFFF",
          "--sidebar-foreground": "#03373D",
          "--sidebar-accent": "#EAF6D8",
          "--sidebar-accent-foreground": "#03373D",
          "--sidebar-border": "#E5E7EB",
          "--sidebar-ring": "#B5E18B",
        } as React.CSSProperties
      }
    >
      <SidebarHeader className="border-b border-sidebar-border bg-sidebar px-4 py-4">
        {state === "collapsed" ? (
          <div className="flex justify-center">
            <img src={logo} className="max-h-8" alt="ZapShift" />
          </div>
        ) : (
          <a href="/" className="flex items-end gap-2">
            <img src={logo} className="max-h-8" alt="ZapShift" />
            <div className="flex flex-col">
              <span className="text-lg -mx-2.5 font-extrabold tracking-tighter">
                ZapShift
              </span>
              <span className="text-xs text-sidebar-foreground/70">
                Dashboard
              </span>
            </div>
          </a>
        )}
      </SidebarHeader>
      <SidebarContent className="bg-sidebar">
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    isActive={pathname === item.url}
                    tooltip={item.title}
                    render={
                      <NavLink to={item.url} end={item.url === "/dashboard"} />
                    }
                  >
                    <item.icon />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
};

export default AppSideBar;
