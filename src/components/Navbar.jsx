import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "./../assets/fssa logo.jpeg";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About FSSA", path: "/about-fssa" },
    { label: "Programs", path: "/programs" },
    { label: "Impact", path: "/impact" },
    { label: "Get Involved", path: "/get-involved" },
    { label: "Contact", path: "/contact" },
    { label: "Donate", path: "/donate" } 
  ];

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white/80 backdrop-blur-2xl shadow-lg border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between">

        {/* LOGO SECTION */}
        <Link to="/" className="flex items-center gap-2 sm:gap-3 group" onClick={() => setOpen(false)}>
          <img
            src={logo}
            alt="Future Star Sports Academy"
            className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover shadow-lg ring-2 ring-orange-200 group-hover:ring-orange-500 group-hover:scale-110 transition-all duration-300"
          />
          <span className="font-bold text-base sm:text-lg lg:text-xl text-gray-900 group-hover:text-orange-600 transition-colors duration-300 hidden sm:block">
            Future Star Sports Academy
          </span>
          <span className="font-bold text-sm text-gray-900 group-hover:text-orange-600 transition-colors duration-300 sm:hidden">
            FSSA
          </span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">

          {/* PILL MENU */}
          <nav className="flex items-center gap-1 xl:gap-2 bg-gradient-to-r from-gray-100/80 to-gray-200/80 px-4 py-2.5 rounded-full backdrop-blur-xl shadow-inner border border-gray-300/30">
            {navItems
              .filter((item) => item.label !== "Donate")
              .map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `
                      px-4 xl:px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 whitespace-nowrap
                      ${
                        isActive
                          ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-md scale-105"
                          : "text-gray-700 hover:bg-orange-500 hover:text-white hover:scale-105"
                      }
                    `
                  }
                >
                  {item.label}
                </NavLink>
              ))}
          </nav>

          {/* DONATE BUTTON */}
          <Link
            to="/donate"
            className="px-6 xl:px-8 py-2.5 rounded-full bg-gradient-to-r from-orange-600 to-orange-700 text-white font-bold shadow-lg hover:shadow-xl hover:from-orange-700 hover:to-orange-800 hover:scale-105 transition-all duration-300 whitespace-nowrap"
          >
            Donate Now
          </Link>
        </div>

        {/* MOBILE MENU ICON (Hamburger) */}
        <button 
          className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200" 
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <X size={28} className="text-gray-800" />
          ) : (
            <Menu size={28} className="text-gray-800" />
          )}
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      <div
        className={`lg:hidden bg-white/95 backdrop-blur-2xl shadow-2xl border-t border-gray-200/50 transition-all duration-300 ease-in-out overflow-hidden ${
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-2 px-4 py-4">

          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `
                  w-full px-5 py-3.5 rounded-xl text-base font-semibold transition-all duration-300
                  ${
                    isActive
                      ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg scale-[1.02]"
                      : "text-gray-700 bg-gray-50 hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 hover:text-white hover:shadow-md"
                  }
                `
              }
            >
              {item.label}
            </NavLink>
          ))}

        </div>
      </div>
    </header>
  );
}

