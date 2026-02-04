"use client";

import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { href: "#home", label: "Startsite" },
    { href: "#about", label: "Über mich" },
    { href: "#projects", label: "Projekte" },
    { href: "#contact", label: "Kontakt" },
  ];

  const handleMenuClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="text-xl font-bold bg-linear-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
          Portfolio
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
          aria-label="Toggle menu">
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor">
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-4 py-2 flex flex-col gap-2">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleMenuClick}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2 px-2 rounded hover:bg-gray-50">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
