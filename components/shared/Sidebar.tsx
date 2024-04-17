"use client";

import { navLinks } from "@/constants";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { icons } from "lucide-react";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:flex bg-primary">
      <div className="flex size-full flex-col gap-4">
        <Link href="/" className="sidebar-logo">
          <Image src="/logo.png" alt="logo" width={130} height={28} />
        </Link>

        <nav className="h-full flex-col justify-between md:flex md:gap-4">
          <ul className="w-full flex flex-col items-start gap-2">
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

          <ul className="w-full flex flex-col items-start gap-2">
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
            <SignedIn>
              <li className="flex-center cursor-pointer gap-2 p-4">
                <UserButton afterSignOutUrl="/" showName />
              </li>
            </SignedIn>
            <SignedOut>
              <li
                className="flex-center cursor-pointer gap-2 p-4
               "
              >
                <Button
                  size="lg"
                  variant="ghost"
                  className="w-[200px] border border-gray-800"
                >
                  <Link href="/sign-in" className="p-16-semibold flex">
                    Login
                  </Link>
                </Button>
              </li>
            </SignedOut>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
