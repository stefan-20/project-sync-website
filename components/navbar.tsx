import React from "react";
import MaxWidthWrapper from "./max-width-wrapper";
import Link from "next/link";
import { FolderSync } from "lucide-react";
import { buttonVariants } from "./ui/button";
import { navbarLinks } from "@/constants/navbar-links";
import { cn } from "@/lib/utils";
import { MobileNav } from "./mobile-navbar/mobile-navbar";
const Navbar = () => {
  return (
    <nav
      className={cn(
        "sticky h-14 inset-x-0 top-0 z-30 border-b border-gray-200  bg-white/40 backdrop-blur-lg transition-all"
      )}
    >
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link
            href="/"
            className="flex z-40 justify-center items-center gap-1"
          >
            <FolderSync width={50} height={50} className="w-7 h-7" />

            <span className="text-2xl font-semibold">ProjectSync</span>
          </Link>
          <div className="flex gap-1 sm:gap-4 items-center">
            <MobileNav></MobileNav>
          </div>
          <div className="hidden sm:flex gap-1 sm:gap-4 items-center">
            {navbarLinks.slice(0, -1).map((link) => (
              <Link
                href={link.href}
                key={link.href}
                className={buttonVariants({
                  variant: "link",
                  size: "sm",
                })}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Link
            className={cn(
              buttonVariants({
                variant: "default",
                size: "sm",
              }),
              "hidden sm:flex"
            )}
            href={navbarLinks.slice(-1)[0].href}
          >
            {navbarLinks.slice(-1)[0].label}
          </Link>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
