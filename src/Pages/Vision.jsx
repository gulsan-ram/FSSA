import React from "react";
import { motion } from "framer-motion";
import backgroundImage from "./../assets/sandhya.jpeg";

export default function Vision() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat flex flex-col"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* MAIN CONTENT */}
      <div className="relative flex-1 flex items-center justify-center w-full px-4 sm:px-6 pt-32 pb-12 sm:pt-40 sm:pb-20">
        <div className="w-full max-w-6xl space-y-10 sm:space-y-14">

          {/* VISION */}
          <motion.section
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg 
                     p-5 sm:p-8 md:p-10 flex flex-col sm:flex-row items-start gap-6 
                     border-l-4 border-red-500 hover:shadow-2xl transition-all duration-500"
          >
            <div className="sm:w-48 flex-shrink-0">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-sky-700">
                VISION
              </h2>
            </div>

            <div className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
              <p>
                To build a trusted and inclusive sports ecosystem that gives every child and young
                athlete a fair chance to play, learn, and reach their
                <strong className="text-gray-900"> full potential through sport</strong>.
              </p>
            </div>
          </motion.section>

          {/* MISSION */}
          <motion.section
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg 
                     p-5 sm:p-8 md:p-10 flex flex-col sm:flex-row items-start gap-6 
                     border-l-4 border-red-500 hover:shadow-2xl transition-all duration-500"
          >
            <div className="sm:w-48 flex-shrink-0">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-sky-700">
                MISSION
              </h2>
            </div>

            <div className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
              <p>
                To make <strong className="text-gray-900">quality sports training, education, and life skills accessible</strong> 
                to all children and youth by building strong systems in communities, schools, 
                and academies that nurture talent and inspire excellence.
              </p>
            </div>
          </motion.section>

        </div>
      </div>

      {/* Bottom Slogan */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative w-full mt-auto"
      >
        <div className="bg-red-500 text-white text-center py-4 sm:py-6 shadow-xl">
          <p className="italic text-base sm:text-xl md:text-2xl font-medium tracking-wide">
            every child can begin, every athlete can grow.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

