"use client";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { navbarLinks } from "@/constants/navbar-links";

export const SideNav = () => {
  const router = useRouter();

  const onNavigate = (url: string) => {
    return router.push(url);
  };

  return (
    <div className="space-y-4 flex flex-col h-full text-primary bg-secondary">
      <div className="p-3 flex flex-1 justify-center">
        <div className="space-y-2">
          {navbarLinks.map((link) => (
            <div
              onClick={() => onNavigate(link.href)}
              key={link.href}
              className={cn(
                "border border-input text-foreground text-center text-base group flex p-2 w-full justify-start font-normal cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition",
                link.href == "/sign-up" &&
                  "bg-primary/80 text-slate-100 hover:bg-primary hover:text-slate-100"
              )}
            >
              <div className="flex flex-col gap-y-2 items-center flex-1">
                {link.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
