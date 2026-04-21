"use client";

import { MenuIcon } from "lucide-react";
import logo from "../../../../Resources/assets/logo.png";

import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { AuthContext } from "@/Context/AuthContext";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Navbar5Props {
  className?: string;
}

const Navbar5 = ({ className }: Navbar5Props) => {
  const navigate = useNavigate();
  const info = useContext(AuthContext);
  const user = info?.user;
  const logout = info?.logOutUser;
  const imgValue=user?.photoURL;
  const img=typeof imgValue === "string" ? imgValue : "";

  return (
    <section className={cn("py-4", className)}>
      <div className="container">
        <nav className="flex items-center justify-between">
          <a href="/" className="flex items-end gap-2">
            <img src={logo} className="max-h-8" alt="UI Navbar" />
            <span className="text-lg -mx-2.5 font-extrabold tracking-tighter">
              ZapShift
            </span>
          </a>
          <NavigationMenu className="hidden lg:block">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#"
                  className={navigationMenuTriggerStyle()}
                >
                  <span className="text-[#606060]">Services</span>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/coverage"
                  className={navigationMenuTriggerStyle()}
                >
                  <span className="text-[#606060]">Coverage</span>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/about-us"
                  className={navigationMenuTriggerStyle()}
                >
                  <span className="text-[#606060]">About Us</span>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#"
                  className={navigationMenuTriggerStyle()}
                >
                  <span className="text-[#606060]">Pricing</span>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/rider"
                  className={navigationMenuTriggerStyle()}
                >
                  <span className="text-[#606060]">Be a Rider</span>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          {user ? (
            <div className="hidden items-center gap-4 lg:flex">
              <Button
                onClick={() => logout?.()}
                className="px-5"
                variant="destructive"
              >
                Sign out
              </Button>
              <Avatar>
                <AvatarImage src={img} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          ) : (
            <div className="hidden items-center gap-4 lg:flex">
              <Button
                onClick={() => navigate("/auth")}
                className="px-5"
                variant="outline"
              >
                Sign in
              </Button>
              <Button
                onClick={() => navigate("/auth/signUp")}
                className="px-5"
                variant="signUp"
              >
                Be a Rider
              </Button>
            </div>
          )}
          <Sheet>
            <SheetTrigger
              className="lg:hidden"
              render={<Button variant="outline" size="icon" />}
            >
              <MenuIcon className="h-4 w-4" />
            </SheetTrigger>
            <SheetContent side="top" className="max-h-screen overflow-auto">
              <SheetHeader>
                <SheetTitle>
                  <a href="/" className="flex items-end gap-2">
                    <img
                      src={logo}
                      className="max-h-8"
                      alt="Shadcn UI Navbar"
                    />
                    <span className="text-lg font-extrabold tracking-tighter">
                      ZapShift
                    </span>
                  </a>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col p-4">
                <Accordion className="mt-4 mb-2"></Accordion>
                <div className="flex flex-col gap-6">
                  <a href="#" className="font-medium">
                    Services
                  </a>
                  <a href="/coverage" className="font-medium">
                    Coverage
                  </a>
                  <a href="/about-us" className="font-medium">
                    About Us
                  </a>
                  <a href="#" className="font-medium">
                    Pricing
                  </a>
                  <a href="/rider" className="font-medium">
                    Be a rider
                  </a>
                </div>
                {user ? (
                  <div className="mt-6 flex flex-col gap-4">
                    <Button
                      onClick={() => logout?.()}
                      className="px-5"
                      variant="destructive"
                    >
                      Sign out
                    </Button>
                  </div>
                ) : (
                  <div className="mt-6 flex flex-col gap-4">
                    <Button
                      onClick={() => navigate("/auth")}
                      className="px-5"
                      variant="outline"
                    >
                      Sign in
                    </Button>
                    <Button
                      onClick={() => navigate("/auth/signUp")}
                      className="px-5"
                      variant="signUp"
                    >
                      Be a Rider
                    </Button>
                  </div>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </section>
  );
};

export { Navbar5 };
