import React from "react";
import bgg from "../assets/bgg.JPG";

export default function Home() {
  return (
    <header className="relative w-full h-screen flex items-center justify-start bgimg  mt-20">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-96 h-96 bg-orange-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-red-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-600/30 via-transparent to-transparent z-10" />

      {/* Content Section */}
      <div className="relative z-20 max-w-3xl px-6 py-14 md:ml-24 md:py-20 flex flex-col items-start text-left rounded-2xl backdrop-blur-md border border-white/30 bg-white/10 shadow-2xl">
        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight tracking-tight text-white drop-shadow-lg">
          <span className="text-orange-400 block hover:text-orange-300 transition-colors duration-300">
            Enabling Access.
          </span>
          <span className="hover:text-gray-100 transition-colors duration-300">
            Inspiring Excellence.
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl font-medium mb-8 leading-normal text-gray-100">
          <span className="font-bold text-white">Future Star Sports Academy (FSSA)</span> builds inclusive
          community sports systems, trains{" "}
          <span className="text-orange-400 font-bold">tribal and rural athletes</span>, and creates
          pathways from playgrounds to podiums.
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-4 flex-wrap">
          <a
            href="#programs"
            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold px-8 py-3 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Join a Program
          </a>
          <a
            href="#support"
            className="bg-white/90 hover:bg-white border-2 border-white text-gray-900 hover:text-red-600 font-bold px-8 py-3 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Support Grassroots Sport
          </a>
        </div>

        {/* Keyword Badges */}
        <div className="flex flex-wrap gap-2 mt-8">
          {[
            { text: "grassroots sports academy India", color: "orange" },
            { text: "tribal athletes Odisha", color: "red" },
            { text: "sports for development NGO", color: "amber" },
          ].map((badge, idx) => (
            <span
              key={idx}
              className={`text-xs font-bold px-4 py-1.5 rounded-full bg-white/20 backdrop-blur text-white border border-white/30 transition-all duration-300 transform hover:scale-105 hover:bg-white/30`}
            >
              {badge.text}
            </span>
          ))}
        </div>
      </div>
    </header>
  );
}