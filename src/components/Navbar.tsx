"use client";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  {
    label: "Our Tours",
    href: "/trips",
    dropdown: [
      { label: "All Tours", href: "/trips" },
      { label: "Kashmir Tours", href: "/trips?category=Kashmir" },
      { label: "Pilgrimage Tours", href: "/trips?category=Pilgrimage" },
      { label: "Ladakh Tours", href: "/trips?category=Mountains" },
      { label: "Honeymoon Packages", href: "/trips?category=Honeymoon" },
    ],
  },
  {
    label: "Destinations",
    href: "/destinations",
    dropdown: [
      { label: "Kashmir Valley", href: "/destinations/kashmir" },
      { label: "Gulmarg", href: "/destinations/gulmarg" },
      { label: "Pahalgam", href: "/destinations/pahalgam" },
      { label: "Sonmarg", href: "/destinations/sonmarg" },
      { label: "Ladakh", href: "/destinations/ladakh" },
    ],
  },
  {
    label: "Our Services",
    href: "/services",
    dropdown: [
      { label: "All Services", href: "/services" },
      { label: "Air Ticketing", href: "/services/air-ticketing" },
      { label: "Hotel Booking", href: "/services/hotel-booking" },
      { label: "Cab Services", href: "/services/cab-services" },
      { label: "Visa Assistance", href: "/services/visa-assistance" },
    ],
  },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0f172a] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <div className="bg-white rounded-xl px-3 py-1">
              <Image
                src="/sheralogo.png"
                alt="Shera Travels"
                width={150}
                height={55}
                className="h-10 w-auto object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative group"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-1 text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {link.label}
                  {link.dropdown && <ChevronDown className="w-3.5 h-3.5 opacity-60" />}
                </Link>
                {link.dropdown && activeDropdown === link.label && (
                  <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-2xl overflow-hidden z-50">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+917006233802"
              className="text-gray-300 hover:text-white text-sm font-medium px-3 py-2 transition-colors"
            >
              +91 70062 33802
            </a>
            <Link
              href="/trips"
              className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-orange-500/30"
            >
              Explore Tours
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-gray-300 hover:text-white p-2"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#0f172a] border-t border-white/10 shadow-2xl">
          <div className="px-4 py-3 space-y-0.5">
            {navLinks.map((link) => (
              <div key={link.label}>
                <Link
                  href={link.href}
                  className="flex items-center gap-2 text-gray-300 hover:text-white hover:bg-white/5 px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
                {link.dropdown && (
                  <div className="ml-3 pl-3 border-l border-white/10 space-y-0.5 mb-1">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="block text-gray-400 hover:text-orange-400 px-3 py-2 text-xs rounded-lg hover:bg-white/5 transition-colors"
                        onClick={() => setMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-3 pb-1 flex flex-col gap-2.5 border-t border-white/10 mt-2">
              <Link
                href="/trips"
                className="block text-center bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl text-sm font-bold transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                🏔️ Explore Tours
              </Link>
              <a
                href="tel:+917006233802"
                className="flex items-center justify-center gap-2 border border-white/20 text-white py-3 rounded-xl text-sm font-semibold hover:bg-white/5 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                📞 +91 70062 33802
              </a>
              <a
                href="https://wa.me/917006233802"
                className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl text-sm font-semibold transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                💬 WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
