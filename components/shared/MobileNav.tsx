"use client";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navLinks } from "@/constants";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";

import { cn } from "@/lib/utils";
import { icons } from "lucide-react";

const MobileNav = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <Link href="/" className="flex items-center gap-2 md:py-2">
        <Image src="/logo.png" alt="logo" width={110} height={20} />
      </Link>

      <nav className="flex gap-2">
        <SignedIn>
          <UserButton afterSignOutUrl="/" />

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger>
              <Menu />
            </SheetTrigger>
            <SheetContent className="sm:w-64 bg-primary p-0 overflow-y-scroll">
              {/* <SheetContext.Provider value={setOpen}> */}
              <Image src="/logo.png" alt="logo" width={110} height={20} />
              <nav className="flex flex-col justify-between">
                {/* <SignedIn> */}
                <ul className="w-full flex-col items-start gap-2">
                  {navLinks.slice(0, 6).map((link) => {
                    const isActive = link.route === pathname;
                    const Icon = ({ name, color, size }: any) => {
                      const LucideIcon = icons[name as keyof typeof icons];
                      return <LucideIcon color={color} size={size} />;
                    };

                    return (
                      <li
                        key={link.route}
                        className={cn(
                          "flex items-center gap-x-2 text-sm text-gray-900 transition-all  hover:bg-slate-100/50 hover-text-muted w-full",
                          isActive && "bg-slate-100/40 hover:bg-slate-100/40"
                        )}
                      >
                        <Link
                          className="p-16-semibold flex size-full gap-4 p-4"
                          href={link.route}
                          onClick={() => setOpen(false)}
                        >
                          <Icon
                            name={link.icon}
                            size={24}
                            color={isActive ? "white" : "black"}
                          />
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>

                <ul className="w-full flex flex-col items-start gap-2 pt-12">
                  {navLinks.slice(6).map((link) => {
                    const isActive = link.route === pathname;
                    const Icon = ({ name, color, size }: any) => {
                      const LucideIcon = icons[name as keyof typeof icons];
                      return <LucideIcon color={color} size={size} />;
                    };

                    return (
                      <li
                        key={link.route}
                        className={cn(
                          "flex items-center gap-x-2 text-sm text-gray-900 transition-all  hover:bg-slate-100/50 hover-text-muted w-full",
                          isActive && "bg-slate-100/40 hover:bg-slate-100/40"
                        )}
                      >
                        <Link
                          className="p-16-semibold flex size-full gap-4 p-4"
                          href={link.route}
                          onClick={() => setOpen(false)}
                        >
                          <Icon
                            name={link.icon}
                            size={24}
                            color={isActive ? "white" : "black"}
                          />
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
        </SignedIn>

        <SignedOut>
          <Button asChild className="button bg-purple-gradient bg-cover">
            <Link href="/sign-in">Login</Link>
          </Button>
        </SignedOut>
      </nav>
    </header>
  );
};

export default MobileNav;
