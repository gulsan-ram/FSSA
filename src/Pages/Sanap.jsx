import React from "react";

export default function Sanap() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="relative w-full h-72 md:h-96 rounded-2xl overflow-hidden shadow-lg">
        <img
          src="/Images/sanap.jpg"
          alt="Sanap"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold drop-shadow-lg">
            Sanap's Journey
          </h1>
        </div>
      </div>

      {/* Story Section */}
      <div className="mt-10 bg-white p-6 md:p-10 rounded-2xl shadow-lg border">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-800">
          Selected for Central Bhubaneswar Swimming Center
        </h2>

        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          Sanap has achieved a remarkable milestone by earning selection to train at the
          <span className="font-semibold"> Central Bhubaneswar Swimming Center</span>, one of the most
          respected training hubs for promising young athletes in Odisha.
        </p>

        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          His dedication, discipline, and continuous hard work in swimming have opened the
          doors to professional coaching, advanced facilities, and national-level exposure.
        </p>

        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          This opportunity is expected to significantly boost his performance and guide him
          towards becoming a competitive swimmer at state and national championships.
        </p>

        <p className="text-lg leading-relaxed text-gray-700">
          Sanap continues to inspire many young athletes from his community, proving that
          talent combined with effort can lead to extraordinary achievements.
        </p>
      </div>

      {/* Footer spacing */}
      <div className="h-10"></div>
    </div>
  );
}
