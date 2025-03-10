
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Button from "./ui-custom/Button";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Features", href: "#features" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4 px-6 md:px-12",
        isScrolled ? "navbar-glass py-3" : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold tracking-tight text-htech-900">
              <span className="text-htech-800">H</span> Tech
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-htech-700 hover:text-htech-900 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="hidden md:flex space-x-4">
              <Button variant="outline" size="sm">
                Log In
              </Button>
              <Button size="sm" withGlow>
                Get Started
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-htech-700 hover:text-htech-900 hover:bg-htech-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-htech-500 transition-colors"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-white flex flex-col pt-20 pb-6 px-6 md:hidden transition-all duration-300 ease-in-out transform",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col space-y-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-htech-700 hover:text-htech-900 transition-colors"
              onClick={() => {
                setIsMenuOpen(false);
                document.body.style.overflow = "";
              }}
            >
              {link.name}
            </a>
          ))}
        </div>
        <div className="mt-8 space-y-4">
          <Button variant="outline" fullWidth>
            Log In
          </Button>
          <Button fullWidth>Get Started</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
