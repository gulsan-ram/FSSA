import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const toggleDropdown = (name) =>
    setOpenDropdown((prev) => (prev === name ? null : name));

  const NAV_ITEMS = [
    {
      name: "Home",
      dropdown: [
        { label: "Impact", href: "#Impact" },
        { label: "Gallery", href: "#Gallery" },
        { label: "Get Involve", href: "#GetInvolve" },
      ],
    },
    { name: "Program", href: "#program" },
    {
      name: "About",
      dropdown: [
        { label: "Journey", href: "#journey" },
        { label: "Vision", href: "#vision" },
        { label: "Compliances", href: "#compliances" },
      ],
    },
    { name: "Partnership", href: "#Partnership" },
    { name: "Contact Us", href: "#contact" },
  ];

  const renderDropdown = (dropdown) => (
    <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-20">
      {dropdown.map((drop) => (
        <a
          key={drop.label}
          href={drop.href}
          className="block px-4 py-2 text-sm font-medium text-gray-800 hover:bg-red-100 hover:text-red-500 transition duration-200"
        >
          {drop.label}
        </a>
      ))}
    </div>
  );

  return (
    <nav className="bg-white text-gray-800 shadow-lg fixed w-full top-0 z-50 font-medium">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo + Title */}
        <div className="flex items-center space-x-3">
          <div className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xl">FS</span>
          </div>
          <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-red-500 cursor-pointer">
            FSSA
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <ul className="flex space-x-6 lg:space-x-8">
            {NAV_ITEMS.map(({ name, href, dropdown }) => (
              <li key={name} className="relative group">
                {!dropdown ? (
                  <a
                    href={href}
                    className="relative text-gray-700 font-semibold hover:text-red-500 transition duration-200 after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {name}
                  </a>
                ) : (
                  <>
                    <button
                      onClick={() => toggleDropdown(name)}
                      className="flex items-center text-gray-700 font-semibold hover:text-red-500 transition duration-200"
                    >
                      {name}
                      <ChevronDown
                        className={`ml-1 w-4 h-4 transition-transform duration-300 ${
                          openDropdown === name ? "rotate-180 text-red-500" : ""
                        }`}
                      />
                    </button>
                    {openDropdown === name && renderDropdown(dropdown)}
                  </>
                )}
              </li>
            ))}
          </ul>

          {/* Donate Button */}
          <a
            href="#donate"
            className="ml-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-5 py-2 rounded-full font-semibold hover:from-orange-600 hover:to-red-600 hover:shadow-lg hover:scale-105 transition-all duration-200"
          >
            Donate
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none hover:text-red-500 transition"
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-inner">
          <ul className="flex flex-col">
            {NAV_ITEMS.map(({ name, href, dropdown }) => (
              <li key={name} className="border-b border-gray-100">
                {!dropdown ? (
                  <a
                    href={href}
                    className="block px-6 py-3 text-gray-700 font-semibold hover:bg-red-50 hover:text-red-500 transition"
                  >
                    {name}
                  </a>
                ) : (
                  <>
                    <button
                      onClick={() => toggleDropdown(name)}
                      className="w-full flex justify-between items-center px-6 py-3 text-gray-700 font-semibold hover:bg-red-50 hover:text-red-500 transition"
                    >
                      {name}
                      <ChevronDown
                        className={`ml-2 w-4 h-4 transition-transform ${
                          openDropdown === name ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {openDropdown === name && (
                      <div className="bg-gray-50">
                        {dropdown.map((drop) => (
                          <a
                            key={drop.label}
                            href={drop.href}
                            className="block px-10 py-2 text-sm font-medium text-gray-700 hover:bg-red-100 hover:text-red-500 transition"
                          >
                            {drop.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </li>
            ))}

            {/* Donate Button in Mobile */}
            <li className="px-6 py-4">
              <a
                href="#donate"
                className="block text-center bg-gradient-to-r from-orange-500 to-red-500 text-white px-5 py-2 rounded-full font-semibold hover:from-orange-600 hover:to-red-600 hover:scale-105 transition-all duration-200 shadow-md"
              >
                Donate
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}