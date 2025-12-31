"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function MobileNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
    { href: "/docs", label: "Docs" },
    { href: "/how-it-works", label: "How it works" },
    { href: "/contact", label: "Contact" },
  ];

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="lg:hidden relative z-50">
      <button
        onClick={toggleMenu}
        className="p-2 focus:outline-none text-white fixed top-4 right-4 z-[10000]"
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
      </button>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#171717] text-gray-300 flex flex-col items-center justify-center space-y-10 z-[9999]">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={toggleMenu}
              className="text-2xl font-semibold hover:text-gray-300 transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <Link
            href="/dashboard"
            className="bg-gradient-to-r from-orange-400 to-red-500 text-white px-5 py-2 rounded-lg font-semibold transition-all duration-300 hover:from-orange-500 hover:to-red-600"
          >
            Dashboard
          </Link>
        </div>
      )}
    </div>
  );
}
