import React from "react";
import { motion } from "framer-motion";
import SEO from "../../components/SEO"; // ✅ ADD THIS

import Team from "./Team";
import Journey from "./Journey";
import Recognistion from "./Recognistion";
import Partners from "./Partners";
import Sports from "./Sports";
import Ourwork from "./Ourwork";

// IMAGE IMPORTS (BEST PRACTICE)
import heroImage from "/src/assets/udaan.jpeg";


export default function AboutFssa() {
  return (
    <>
      {/* ================= SEO ================= */}
      <SEO
        title="About Us | Future Star Sports Academy"
        description="Learn about Future Star Sports Academy, a not-for-profit organisation empowering children and communities through grassroots sports development across Odisha and Jharkhand."
        canonical="https://futurestarsportsacademy.org/about-fssa"
        image="/Images/Lakshya.webp"
      />

      {/* ================= HERO SECTION ================= */}
      <section
        aria-label="About Future Star Sports Academy"
        className="relative w-full h-[65vh] md:h-[80vh] lg:h-[90vh] overflow-hidden"
      >
        {/* Background Image */}
        <img
          src={heroImage}
          alt="Children training at Future Star Sports Academy"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          fetchpriority="high"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl text-center"
          >
            <h1 className="text-white font-extrabold text-3xl sm:text-4xl md:text-6xl leading-tight drop-shadow-xl">
              Building the Future of Indian Sports
            </h1>

            <p className="mt-6 text-gray-200 text-base sm:text-lg md:text-xl leading-relaxed">
              Empowering children and communities through structured play,
              mentorship, and opportunity across Odisha and Jharkhand.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= INTRO SECTION ================= */}
      <section className="bg-[#FFF7ED] py-20 px-4 sm:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0b3b67] mb-8"
          >
            From Grassroots to Greatness
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6 max-w-3xl mx-auto"
          >
            Future Star Sports Academy is a not-for-profit organisation nurturing
            sports talent and strengthening community-based sports systems across
            tribal and rural regions of Odisha and Jharkhand.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6 max-w-3xl mx-auto"
          >
            Through structured programs, trained mentors and safe play spaces, we
            help children experience movement, belonging, and opportunity.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
          >
            Our work turns village playgrounds into places where children feel
            supported, included, and ready to grow.
          </motion.p>
        </div>
      </section>

      {/* ================= OTHER SECTIONS ================= */}
      <Team />
      <Sports/>
      <Journey />
      <Ourwork/>
      <Recognistion />
      <Partners />
    </>
  );
}

