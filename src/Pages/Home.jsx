import React from "react";
import { Link } from "react-router-dom";
import heroVideo from "../assets/fssa.video.mp4";
import Vision from "./Vision";
import Whysport from "./Whysport";
import Media from "./Media";
import PartnersandRecognistion from "./PartnersandRecognistion";

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative w-full h-[90vh] md:h-[100vh] overflow-hidden">
        
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 flex items-center h-full">
          <div className="px-4 sm:px-8 md:px-16 max-w-2xl lg:max-w-3xl">

            {/* Heading */}
            <h1 className="font-extrabold leading-tight text-3xl sm:text-4xl md:text-6xl lg:text-7xl">
              <span className="text-[#f2a900]">Enabling Access.</span><br />
             <span className="text-[#ba5b03]">Inspiring Excellence.</span>
            </h1>

            {/* Paragraph */}
            <p className="text-white mt-4 sm:mt-6 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
              Future Star Sports Academy (FSSA) builds inclusive community
              sports systems, trains tribal and rural athletes, and creates
              pathways from playgrounds to podiums.
            </p>

            {/* BUTTONS FIXED WITH LINKS */}
            <div className="mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4">

              {/* JOIN A PROGRAM → /programs */}
              <Link
                to="/programs"
                className="bg-[#e0a00cfb] text-black font-semibold 
                           px-4 py-2 sm:px-6 sm:py-3 rounded-md 
                           text-sm sm:text-lg hover:bg-[#d89200] transition"
              >
                Join a Program
              </Link>

              {/* DONATE → /donate */}
              <Link
                to="/donate"
                className="bg-white/90 text-gray-900 font-semibold
                           px-4 py-2 sm:px-6 sm:py-3 rounded-md
                           text-sm sm:text-lg hover:bg-[#d89200] transition"
              >
                Support Grassroots Sport
              </Link>

            </div>

          </div>
        </div>
      </section>

      {/* BOTTOM RED BAR */}
      <div className="w-full bg-[#FF2E2E] py-4">
        <p className="text-center text-white text-xs sm:text-sm md:text-base leading-relaxed px-4">
          Baripada, Mayurbhanj, Odisha | future.fssa19@gmail.com | +91 89176 46880 / 7327930686 <br />
          www.futurestarsportsacademy.org
        </p>
      </div>

      <Vision />
      <Whysport />
      <Media />
      <PartnersandRecognistion />
    </>
  );
}


