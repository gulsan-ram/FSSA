import React from "react";
import { FaUserCheck, FaHome, FaTrophy, FaUserGraduate } from "react-icons/fa";

const highlights = [
  "Residential training in Mayurbhanj, Odisha",
  "55 full-time athletes",
  "42 national rep athletes",
  "4 international athletes",
  "Sports: Rugby, Archery, Swimming"
];

const features = [
  {
    title: "Talent ID",
    icon: <FaUserCheck size={22} className="text-[#ff9800]" />,
    desc: "Scouts children from tournaments and schools."
  },
  {
    title: "Holistic Growth",
    icon: <FaUserGraduate size={22} className="text-[#ff9800]" />,
    desc: "Builds leadership, digital skills, mental strength, and values."
  },
  {
    title: "Residential Coaching",
    icon: <FaHome size={22} className="text-[#ff9800]" />,
    desc: "Full-time coaching, academic support & nutrition."
  },
  {
    title: "Competition & Exposure",
    icon: <FaTrophy size={22} className="text-[#ff9800]" />,
    desc: "District, state, national & international competitions."
  }
];

const impact = [
  "46 athletes representing India/states",
  "3 athletes secured govt jobs",
  "48% female athletes"
];

const Lakshya = () => (
  <section className="bg-gradient-to-br from-[#fff4e0] via-white to-[#fffbe9] px-2 py-6 md:px-6 rounded-xl shadow-xl mx-auto max-w-6xl my-8 relative">
    {/* Title and subtitle */}
    <div className="flex flex-col md:flex-row items-center gap-2 justify-center mb-2">
      <span className="font-bold text-[#ff9800] text-base md:text-lg tracking-wide mr-2">
        PROJECT LAKSHYA
      </span>
      <span className="font-medium text-gray-700 text-sm md:text-base">
        Nurturing potential, shaping champions
      </span>
    </div>
    {/* Top badges */}
    <div className="flex flex-wrap gap-2 justify-center items-center mb-3">
      {highlights.map((text, i) => (
        <span key={i} className="bg-[#ff9800]/10 border border-[#ff9800]/20 rounded-md px-2.5 py-1 text-[#e65100] text-[13px] font-medium shadow hover:bg-[#ff9800]/20 hover:text-white transition whitespace-nowrap">
          {text}
        </span>
      ))}
    </div>
    {/* Purpose */}
    <div className="bg-white border border-[#fad9b9] px-3 py-2 rounded-lg mb-4 max-w-2xl mx-auto text-sm">
      <span className="font-semibold text-[#ff9800]">Purpose:</span>{" "}
      <span className="text-gray-800 font-normal">A clear, credible, and community-rooted pathway for rural talent achieving excellence.</span>
    </div>
    {/* Features grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-4">
      {features.map((f, i) => (
        <div
          key={i}
          className="flex flex-col items-center gap-2 px-3 py-4 bg-gradient-to-br from-white via-[#fff4e0]/70 to-[#fffbe9]/50 border border-[#ff9800]/25 shadow rounded-lg hover:scale-105 transition-all duration-300"
        >
          <div className="flex items-center justify-center w-8 h-8 bg-[#ff9800]/15 rounded-full border border-[#ff9800]/25">
            {f.icon}
          </div>
          <div className="text-sm font-bold text-[#ff9800] mb-0.5 text-center">
            {f.title}
          </div>
          <div className="text-[13px] text-gray-700 font-medium text-center">{f.desc}</div>
        </div>
      ))}
    </div>
    {/* Impact row */}
    <div className="bg-[#fffbe9]/80 border border-[#fad9b9] rounded-lg px-3 py-2 max-w-2xl mx-auto mb-2">
      <span className="font-semibold text-[#e65100] text-[13px] mr-2">
        Impact Highlights:
      </span>
      <div className="flex flex-wrap gap-x-3 gap-y-1 text-gray-700 text-[13px] font-medium">
        {impact.map((im, i) => (
          <span key={i}>{im}</span>
        ))}
      </div>
    </div>
    {/* Decorative underline */}
    <div className="w-[50px] h-2 mx-auto mt-2 rounded-full bg-gradient-to-r from-[#ff9800] via-[#ffb74d] to-[#fffbe9] opacity-70" />
  </section>
);

export default Lakshya;

