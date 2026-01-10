import React from "react";

export default function Footer() {
  return (
    <footer className="w-full text-white">

      {/* Logo Section */}
      <div className="py-10 flex justify-center bg-white">
        <img
          src="/Images/fssa logo.jpeg"
          alt="FSSA Logo"
          className="w-20 h-20 sm:w-24 sm:h-24 object-contain drop-shadow-lg"
        />
      </div>

      {/* BCCI-style Background */}
      <div className="relative overflow-hidden bg-[#071a2f]">

        {/* Main Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b2f52] via-[#071a2f] to-[#040d1a]" />

        {/* Subtle Line Texture */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: "url(/patterns/footer-lines.svg)",
          }}
        />

        {/* Soft Highlight Glow */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.08),transparent_45%)]" />

        {/* Content */}
        <div
          className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 py-16
          grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-center md:text-left"
        >

          {/* Quote */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 tracking-wide">
              Thank you!
            </h2>
            <p className="text-sm text-white/70 italic leading-relaxed">
              “In India, sports remain a privilege, whereas it should be regarded
              as a fundamental right for every child.”
            </p>
          </div>

          {/* Academy Info */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold tracking-wide">
              Future Star Sports Academy
            </h3>
            <p className="text-sm text-white/70">
              Enabling Access, Inspiring Excellence.
            </p>
            <p className="text-sm text-white/60">
              Baripada, Mayurbhanj, Odisha
            </p>
            <p className="text-sm text-white/60">
              +91 89176 44680 / 73279 30686
            </p>
            <p className="text-sm text-white/60 break-all sm:break-normal">
              future.ssa19@gmail.com
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold tracking-wide">
              Quick Links
            </h3>

            {[
              { name: "Home", link: "/" },
              { name: "About FSSA", link: "/about" },
              { name: "Programs", link: "/programs" },
              { name: "Contact", link: "/contact" },
              { name: "Official Website", link: "https://futurestarsportsacademy.org" },
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="block text-sm text-white/65 hover:text-[#f2a900] transition"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="relative z-10 border-t border-white/10 py-6 text-center">
          <p className="text-xs text-white/50 tracking-wide">
            © {new Date().getFullYear()} Future Star Sports Academy. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

