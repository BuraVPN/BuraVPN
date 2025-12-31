"use client";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Navigation from "../ui/Navigation";

export default function DashHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((v) => !v);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="w-full h-auto flex justify-between items-center py-5 bg-gray-900 px-5 border-b border-gray-700">
      <p className="text-white font-bold">Logo</p>

      <button
        onClick={toggleMenu}
        aria-label="Toggle menu"
        className="md:hidden"
      >
        {!isMenuOpen && <Menu color="white" />}
      </button>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-gray-900 flex flex-col items-start justify-center gap-6 z-50 md:hidden">
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="fixed top-5 right-5"
          >
            <X color="white" />
          </button>
          <Navigation onLinkClick={closeMenu} />
        </div>
      )}
    </header>
  );
}
