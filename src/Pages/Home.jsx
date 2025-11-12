import React from "react";
import bgg from "../assets/bgg.JPG";

const Home = () => (
  <header className="relative w-full h-screen flex items-center bg-black">
    {/* Background Image */}
    <img
      src={bgg}
      alt="Girls playing sports, Future Star Sports Academy"
      className="absolute inset-0 w-full h-full object-cover object-center"
      style={{ zIndex: 1 }}
    />

    {/* Softer overlays for subtle punch, not dark */}
    <div className="absolute inset-0 bg-gradient-to-r from-orange-100/30 via-white/10 to-white/0" style={{ zIndex: 2 }} />
    <div className="absolute inset-0 bg-gradient-to-tl from-white/20 via-transparent to-orange-100/10" style={{ zIndex: 3 }} />

    {/* Lighter text panel, mostly translucent with *touch* of orange */}
    <div className="relative z-10 max-w-2xl px-6 py-14 md:ml-24 md:py-20 flex flex-col items-start text-left rounded-2xl"
         style={{ background: "rgba(242, 169, 0, 0.09)", boxShadow: '0 8px 32px 0 rgba(49,47,105,0.10)' }}>
      {/* Title with vibrant color highlights */}
      <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight tracking-tight"
          style={{ textShadow: "0 2px 10px rgba(49,47,105,0.08)" }}>
        <span className="text-[#f2a900]">Enabling Access.</span><br/>
        <span className="text-[#312f69]">Inspiring Excellence.</span>
      </h1>
      {/* Subheading with bold and orange keywords */}
      <p className="text-lg md:text-2xl font-semibold mb-8 leading-normal"
         style={{ color: "#3b3663" }}>
        <span className="font-bold">Future Star Sports Academy (FSSA)</span> builds inclusive community sports systems, trains
        <span className="text-[#f2a900] font-bold"> tribal and rural athletes</span>, and creates pathways from playgrounds to podiums.
      </p>

      {/* CTA Buttons */}
      <div className="flex gap-4">
        <a
          href="#programs"
          className="bg-[#f2a900] hover:bg-white text-indigo-900 font-bold px-8 py-3 rounded-xl shadow transition-all border-2 border-[#f2a900] hover:text-[#f2a900]"
        >
          Join a Program
        </a>
        <a
          href="#support"
          className="bg-white hover:bg-[#312f69] border-2 border-[#312f69] text-[#312f69] hover:text-white font-bold px-8 py-3 rounded-xl transition-all"
        >
          Support Grassroots Sport
        </a>
      </div>

      {/* Keyword badges */}
      <div className="flex flex-wrap gap-2 mt-8">
        <span className="bg-[#f2a900]/15 text-[#f2a900] text-xs font-bold px-4 py-1 rounded-full">grassroots sports academy India</span>
        <span className="bg-[#312f69]/15 text-[#312f69] text-xs font-bold px-4 py-1 rounded-full">tribal athletes Odisha</span>
        <span className="bg-[#f2a900]/10 text-[#312f69] text-xs font-bold px-4 py-1 rounded-full">sports for development NGO</span>
      </div>
    </div>
  </header>
);

export default Home;

