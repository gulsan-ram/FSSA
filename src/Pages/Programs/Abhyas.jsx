import React from "react";

export default function Abhyas() {
  return (
    <div className="w-full min-h-screen bg-blue-50 font-sans">
      {/* Header Image */}
      <div className="relative w-full h-[420px] overflow-hidden">
        <img
          src="/Images/udaan.jpeg"
          alt="Abhyas Banner"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-800/70 flex items-end justify-center pb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-wide drop-shadow-md">
            ABHYAS
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-blue-800">
          PROJECT ABHYAS: SUSTAINABLE PAY & PLAY MODEL
        </h2>

        <p className="text-gray-700 leading-relaxed mb-10">
          Abhyas is FSSA’s sustainability model that offers accessible sports facilities 
          to urban and semi-urban players through a Pay & Play structure. A portion of 
          the revenue generated is reinvested into grassroots programs, supporting 
          community play centers and athletes from economically weaker sections.
        </p>

        <p className="text-blue-800 font-semibold mb-10">
          Focus Areas: Sustainability • Access • Growth
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Section */}
          <div className="space-y-6">

            <div className="p-6 rounded-xl shadow-md border bg-white hover:shadow-lg transition">
              <h3 className="font-bold text-lg text-blue-800 mb-3">Accessible Sports Facilities</h3>
              <p className="text-gray-700">
                Affordable Pay & Play centers for urban and semi-urban athletes to train regularly.
              </p>
            </div>

            <div className="p-6 rounded-xl shadow-md border bg-white hover:shadow-lg transition">
              <h3 className="font-bold text-lg text-blue-800 mb-3">Revenue Reinvestment</h3>
              <p className="text-gray-700">
                30% of center revenue is reinvested into grassroots sports development programs.
              </p>
            </div>

            <div className="p-6 rounded-xl shadow-md border bg-white hover:shadow-lg transition">
              <h3 className="font-bold text-lg text-blue-800 mb-3">Supporting Young Athletes</h3>
              <p className="text-gray-700">
                Funds help subsidize training for talented players from financially weaker families.
              </p>
            </div>

            <div className="p-6 rounded-xl shadow-md border bg-white hover:shadow-lg transition">
              <h3 className="font-bold text-lg text-blue-800 mb-3">Expanding the Network</h3>
              <p className="text-gray-700">
                Target to establish 20 Pay & Play centers across semi-urban regions by 2028.
              </p>
            </div>
          </div>

          {/* Right - Impact */}
          <div className="p-6 rounded-xl shadow-md border bg-white space-y-4 hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-3 text-blue-800">Impact at a Glance</h3>

            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Target: 20 centers by 2028.</li>
              <li>30% revenue directly supporting grassroots sports programs.</li>
              <li>Pilot planning underway for two semi-urban Pay & Play centers.</li>
              <li>Improved access to quality sports infrastructure for youth.</li>
              <li>Financial support for promising athletes through subsidized training.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}


