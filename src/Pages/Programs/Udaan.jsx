import React from "react";

export default function Udaan() {
  return (
    <div className="w-full min-h-screen bg-orange-50 font-sans">
      {/* Header Image */}
      <div className="relative w-full h-[420px] overflow-hidden">
        <img
          src="/Images/uddan.jpg"
          alt="Udaan Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-orange-700/70 flex items-end justify-center pb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-wide drop-shadow-md">
            UDAAN
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-orange-700">
          PROJECT UDAAN: BUILDING ACTIVE, INCLUSIVE, AND JOYFUL SCHOOLS
        </h2>

        <p className="text-gray-700 leading-relaxed mb-10">
          Udaan is FSSA’s school-based program that integrates physical education,
          structured play, and life skills into the daily school timetable. It helps teachers
          and students use sports as a tool to improve attendance, confidence, and
          classroom engagement.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Section */}
          <div className="space-y-6">
            <div className="p-6 rounded-xl shadow-md border bg-white hover:shadow-lg transition">
              <h3 className="font-bold text-lg text-orange-700 mb-3">School Partnerships</h3>
              <p className="text-gray-700">
                Works with government schools to make sports part of everyday learning.
              </p>
            </div>

            <div className="p-6 rounded-xl shadow-md border bg-white hover:shadow-lg transition">
              <h3 className="font-bold text-lg text-orange-700 mb-3">Teacher Enablement</h3>
              <p className="text-gray-700">
                Trains teachers and volunteers in physical literacy, inclusive play, and life-skill facilitation.
              </p>
            </div>

            <div className="p-6 rounded-xl shadow-md border bg-white hover:shadow-lg transition">
              <h3 className="font-bold text-lg text-orange-700 mb-3">Structured Sports Curriculum</h3>
              <p className="text-gray-700">
                Weekly sessions include warm-ups, games, reflection, and teamwork exercises.
              </p>
            </div>

            <div className="p-6 rounded-xl shadow-md border bg-white hover:shadow-lg transition">
              <h3 className="font-bold text-lg text-orange-700 mb-3">School Sports Clubs & Events</h3>
              <p className="text-gray-700">
                Organises inter-school tournaments and Khel Utsav days to celebrate sporting spirit and competitiveness.
              </p>
            </div>
          </div>

          {/* Right - Impact */}
          <div className="p-6 rounded-xl shadow-md border bg-white space-y-4 hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-3 text-orange-700">Impact at a Glance</h3>

            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>700+ students actively participating in regular sports sessions.</li>
              <li>3 schools implementing structured physical education periods.</li>
              <li>20+ teachers trained in physical literacy and inclusive teaching.</li>
              <li>Improved classroom participation and attendance reported by teachers.</li>
              <li>Equal participation of girls and boys across all activities.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

