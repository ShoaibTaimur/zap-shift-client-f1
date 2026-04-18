"use client";
import logo from "../../../../Resources/assets/logo.png"
import {
  ArrowRight
} from "lucide-react";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface PrivacyDialog {
  trigger: string;
  title: string;
  text: string;
}

const SOCIAL_LINKS = [
  {
    icon: FaGithub,
    href: "#",
  },
  {
    icon: FaLinkedinIn,
    href: "#",
  },
  {
    icon: FaFacebookF,
    href: "#",
  },
  {
    icon: FaXTwitter,
    href: "#",
  },
];


const NAVIGATION = [
  {
    title: "Get Started",
    links: [
      {
        name: "Mobile (iOS & Android)",
        href: "#",
      },
      {
        name: "Desktop (Mac & Windows)",
        href: "#",
      },
      {
        name: "Browser Extension",
        href: "#",
      },
    ],
  }
];

const PRIVACY_DIALOG: PrivacyDialog = {
  trigger: "Do Not Sell or Share My Info",
  title:
    "You've chosen to opt out of sharing your information with our online advertising partners.",
  text: `
    Our app enables partners to use cookies and pixels to
    collect data, helping deliver more relevant ads and
    track ad performance. These practices may be classified
    as "selling" or "sharing/processing" for targeted
    advertising under applicable laws. Even if you opt out,
    you may still see ads about our app, but they won't be
    as personalized.
  `,
};

const PrivacyDialog = ({ trigger, title, text }: PrivacyDialog) => {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-106.25">
        <DialogHeader>
          <DialogTitle className="leading-normal">{title}</DialogTitle>
          <DialogDescription className="leading-normal">
            {text}
          </DialogDescription>
        </DialogHeader>
        <DialogClose render={<Button variant="outline" />}>Okay</DialogClose>
      </DialogContent>
    </Dialog>
  );
};

interface Footer18Props {
  className?: string;
}

const Footer18 = ({ className }: Footer18Props) => {
  return (
    <section className={cn("py-4", className)}>
      <footer className="container">
        <nav className="flex flex-col gap-9 lg:flex-row">
          <div className="flex w-full flex-col gap-9 lg:w-1/4">
            {/* Logo */}
            <a href="/" className="flex items-end lg:justify-center">
              <img
                src={logo}
                alt="Shadcnblocks"
                title="Shadcnblocks"
                className="md:h-13"
              />
              <p className="font-extrabold -ms-2 md:text-[20px]">ZapShift</p>
            </a>
            <div className="flex w-full flex-col gap-6">
              <ul className="flex w-full items-center gap-0.5">
                {SOCIAL_LINKS.map((link, i) => (
                  <li key={`social-link-${i}`}>
                    <Button size="icon" className="size-8" variant="ghost">
                      <link.icon className="size-4.5" />
                    </Button>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-col items-start gap-2">
                <PrivacyDialog {...PRIVACY_DIALOG} />
              </div>
            </div>
          </div>
          <div className="grid w-full grid-cols-2 gap-6 lg:grid-cols-4">
            {NAVIGATION.map((section) => (
              <ul
                key={`${section.title}`}
                className="flex flex-col items-start gap-[.4rem]"
              >
                <li>
                  <p className="text-[0.9375rem] leading-normal font-semibold text-foreground">
                    {section.title}
                  </p>
                </li>
                {section.links.map((link) => (
                  <li key={`${section.title}-${link.name}`}>
                    <a
                      href={link.href}
                      className="text-[0.9375rem] leading-normal text-muted-foreground hover:underline"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </nav>
        <div className="mt-8 flex items-center justify-between gap-4">
          <div className="flex items-center justify-between gap-4">
            <p className="text-sm leading-normal font-medium text-foreground">
              © 2026 ZapShift.taimur.dev
            </p>
          </div>
          <Button variant="link" className="px-0!">
            Explore more
            <ArrowRight />
          </Button>
        </div>
      </footer>
    </section>
  );
};

export { Footer18 };
