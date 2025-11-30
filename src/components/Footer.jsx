import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-white text-center">
      {/* Top red bar */}
      <div className="w-full h-2 bg-red-600"></div>

      {/* Logo section */}
      <div className="py-8 flex flex-col items-center">
        <img
          src="/Images/fssa logo.jpeg"
          alt="FSSA Logo"
          className="w-24 h-24 object-contain drop-shadow-md"
        />
      </div>

      {/* Blue background section */}
      <div className="bg-blue-700 text-white px-6 py-14">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-left">

          {/* Quote Section */}
          <div>
            <h2 className="text-3xl font-bold mb-3">Thank you!</h2>
            <p className="text-sm opacity-90 italic">
              “In India, sports remain a privilege, whereas it should be regarded 
              as a fundamental right for every child.”
            </p>
          </div>

          {/* Academy Info */}
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold">Future Star Sports Academy</h3>
            <p className="text-sm opacity-90">
              Enabling Access, Inspiring Excellence.
            </p>
            <p className="text-sm opacity-90">
              Baripada, Mayurbhanj, Odisha
            </p>
            <p className="text-sm opacity-90">
              +91 89176 44680 / 73279 30686
            </p>
            <p className="text-sm opacity-90">
              future.ssa19@gmail.com
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <a href="/" className="text-sm opacity-90 hover:opacity-100 hover:underline">
              Home
            </a>
            <a href="/about" className="text-sm opacity-90 hover:opacity-100 hover:underline">
              About FSSA
            </a>
            <a href="/programs" className="text-sm opacity-90 hover:opacity-100 hover:underline">
              Programs
            </a>
            <a href="/contact" className="text-sm opacity-90 hover:opacity-100 hover:underline">
              Contact
            </a>
            <a
              href="https://futurestarsportsacademy.org"
              className="text-sm opacity-90 hover:opacity-100 hover:underline"
            >
              Official Website
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-white/20 pt-6 text-center">
          <p className="text-xs opacity-80">
            © {new Date().getFullYear()} Future Star Sports Academy. All Rights Reserved.
          </p>
        </div>
      </div>

      {/* Bottom red bar */}
      <div className="w-full h-2 bg-red-600"></div>
    </footer>
  );
}

