import { useEffect, useState } from "react";
import { RouterProvider } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "./components/theme-provider";
import AuthProvider from "./Context/AuthProvider";
import { router } from "./components/routes";
import { Toaster } from "sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import AppBootLoader from "./components/Shared/AppBootLoader";

const queryClient = new QueryClient();

const RootApp = () => {
  const [booting, setBooting] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setBooting(false);
    }, 400);

    return () => window.clearTimeout(timer);
  }, []);

  if (booting) {
    return <AppBootLoader />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <AuthProvider>
          <TooltipProvider>
            <Toaster />
            <RouterProvider router={router} />
          </TooltipProvider>
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default RootApp;
