import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="/" className="text-primary text-2xl font-bold">
              Rohand Photography
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <a href="/" className="text-gray-700 hover:text-primary px-3 py-2">
                Home
              </a>
              <a href="/about" className="text-gray-700 hover:text-primary px-3 py-2">
                About
              </a>
              <a href="/services" className="text-gray-700 hover:text-primary px-3 py-2">
                Services
              </a>
              <Button className="bg-primary hover:bg-primary/90">
                +254728251106
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="/"
              className="text-gray-700 hover:text-primary block px-3 py-2"
            >
              Home
            </a>
            <a
              href="/about"
              className="text-gray-700 hover:text-primary block px-3 py-2"
            >
              About
            </a>
            <a
              href="/services"
              className="text-gray-700 hover:text-primary block px-3 py-2"
            >
              Services
            </a>
            <Button className="w-full bg-primary hover:bg-primary/90">
              +254728251106
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;