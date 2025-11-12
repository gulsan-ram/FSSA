import React from "react";
import udaanBg from "../assets/bgg.JPG"; 

const Udaan = () => (
  <section className="w-full">
    {/* Hero Image */}
    <div
      className="relative w-full h-[450px] sm:h-[520px] md:h-[600px] flex items-end"
      style={{
        backgroundImage: `url(${})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        filter: "grayscale(100%)"
      }}
    >
      {/* Blue band, sporty effect */}
      <div className="absolute bottom-0 left-0 w-full h-[135px] md:h-[160px] bg-gradient-to-tr from-blue-900 via-blue-700 to-[#0084ff] opacity-98 flex items-center">
        <h1 className="w-full text-center text-white text-6xl md:text-7xl font-extrabold tracking-wide uppercase drop-shadow-lg">
          Udaan
        </h1>
      </div>
    </div>
    {/* Modern description section below (optional) */}
    <div className="bg-white py-8 px-6 md:px-16 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-[#0084ff] mb-3">Empowering Girls Through Sport</h2>
      <p className="text-lg md:text-xl text-gray-700 mb-6 max-w-xl mx-auto">
        Udaan inspires and enables rural and tribal girls to build confidence, teamwork,
        and leadership through active participation in sports and skill programs.
      </p>
      <a
        href="#program-details"
        className="inline-block px-8 py-3 bg-[#0084ff] text-white font-bold rounded-full shadow-lg transition hover:bg-blue-900"
      >
        Learn More About Udaan
      </a>
    </div>
  </section>
);

export default Udaan;
