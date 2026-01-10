import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/fssa logo.jpeg";

const NAV_ITEMS = [
  { label: "Home", path: "/" },
  { label: "About us", path: "/about-fssa" },
  { label: "Programs", path: "/programs" },
  { label: "Impact", path: "/impact" },
  { label: "Gallery", path: "/gallery" },
  { label: "Get Involved", path: "/get-involved" },
  { label: "Contact", path: "/contact" },
  { label: "Donate", path: "/donate", isCTA: true },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Lock background scroll when menu is open (mobile UX polish)
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white/80 backdrop-blur-xl border-b border-gray-200 shadow-sm">
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between"
        aria-label="Primary navigation"
      >
        {/* LOGO */}
        <Link
          to="/"
          className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded-md"
          onClick={() => setOpen(false)}
        >
          <img
            src={logo}
            alt="Future Star Sports Academy logo – non profit sports organisation in Odisha"
            className="h-11 w-11 rounded-full object-cover ring-2 ring-orange-200"
            loading="eager"
          />
          <span className="hidden sm:block font-bold text-gray-900 text-lg">
            Future Star Sports Academy
          </span>
          <span className="sm:hidden font-bold text-gray-900 text-sm">
            FSSA
          </span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center gap-6">
          <ul className="flex items-center gap-1 bg-gray-100/80 px-3 py-2 rounded-full border border-gray-300/40">
            {NAV_ITEMS.filter(item => !item.isCTA).map(item => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `
                    px-4 py-2 text-sm font-semibold rounded-full
                    transition-colors transition-transform duration-200
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500
                    ${
                      isActive
                        ? "bg-orange-600 text-white shadow-sm"
                        : "text-gray-700 hover:bg-orange-500 hover:text-white"
                    }
                  `
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* DONATE CTA */}
          <Link
            to="/donate"
            className="px-6 py-2.5 rounded-full bg-orange-600 text-white font-bold shadow-md
                       hover:bg-orange-700 transition-colors
                       focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
          >
            Donate Now
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="lg:hidden p-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(prev => !prev)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      <div
        id="mobile-menu"
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
          open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        } bg-white border-t border-gray-200`}
      >
        <ul className="flex flex-col gap-2 px-4 py-4">
          {NAV_ITEMS.map(item => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `
                  block w-full px-5 py-3 rounded-xl text-base font-semibold
                  transition-colors duration-200
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500
                  ${
                    item.isCTA
                      ? "bg-orange-600 text-white text-center shadow-md"
                      : isActive
                      ? "bg-orange-500 text-white"
                      : "bg-gray-50 text-gray-800 hover:bg-orange-500 hover:text-white"
                  }
                `
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
