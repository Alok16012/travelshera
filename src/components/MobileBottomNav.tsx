"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Map, Compass, HeadphonesIcon, Phone } from "lucide-react";

const navItems = [
  { label: "Home", href: "/", icon: Home },
  { label: "Tours", href: "/trips", icon: Map },
  { label: "Explore", href: "/destinations", icon: Compass },
  { label: "Services", href: "/services", icon: HeadphonesIcon },
  { label: "Contact", href: "/contact", icon: Phone },
];

export default function MobileBottomNav() {
  const pathname = usePathname();

  // Hide site nav on the ad landing page to keep it distraction-free.
  if (pathname.startsWith("/kashmir-tour")) return null;

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-[#0f172a] border-t border-white/10 safe-area-bottom">
      <div className="flex items-center justify-around px-2 py-2">
        {navItems.map(({ label, href, icon: Icon }) => {
          const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);
          return (
            <Link
              key={label}
              href={href}
              className={`flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl transition-all duration-200 min-w-0 ${
                isActive
                  ? "text-orange-500"
                  : "text-gray-400 hover:text-gray-200"
              }`}
            >
              <Icon
                className={`w-5 h-5 transition-all duration-200 ${
                  isActive ? "scale-110" : ""
                }`}
              />
              <span className={`text-[10px] font-semibold truncate ${isActive ? "text-orange-500" : ""}`}>
                {label}
              </span>
              {isActive && (
                <span className="w-1 h-1 bg-orange-500 rounded-full mt-0.5" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
