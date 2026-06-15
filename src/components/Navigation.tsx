
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Compass, Lightbulb, Users, Home } from "lucide-react";

const navItems = [
  { name: "Inicio", href: "/", icon: Home },
  { name: "Explorar", href: "/explorar", icon: Compass },
  { name: "Perspectivas", href: "/perspectivas", icon: Lightbulb },
  { name: "Comunidad", href: "/comunidad", icon: Users },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center transition-transform group-hover:scale-105">
            <div className="w-4 h-4 rounded-full bg-accent animate-pulse" />
          </div>
          <span className="font-headline text-2xl font-bold tracking-tight text-primary hidden sm:block">
            Radiografía Social
          </span>
        </Link>

        <div className="flex items-center gap-1 md:gap-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium transition-all duration-200",
                  isActive 
                    ? "bg-primary text-primary-foreground shadow-md" 
                    : "text-muted-foreground hover:bg-muted hover:text-primary"
                )}
              >
                <Icon className="w-4 h-4" />
                <span className="hidden md:inline">{item.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
