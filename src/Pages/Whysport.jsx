import React from "react";
import { motion } from "framer-motion";

export default function Whysport() {
  const stats = [
    {
      text: "Only 1 in 10 rural children ever get access to organized sports activities.",
      source: "ASII, 2021",
    },
    {
      text: "Girls' participation in school sports drops by nearly 50% after age 11.",
      source: "UNESCO, 2021",
    },
    {
      text: "Over 70% of government schools do not have a qualified PE teacher.",
      source: "NCERT, 2021",
    },
    {
      text: "Students engaged in sports are 35% more likely to stay in school and show better health and confidence.",
      source: "NCERT, 2021",
    },
  ];

  const urgencyPoints = [
    "India is celebrating sporting achievements at the top, yet at the bottom millions of children are being left behind.",
    "Girls and first-generation learners are still the most excluded from school and sports programs.",
    "Sports can also be a powerful medium for community development, bringing people together, building confidence, and promoting equality.",
    "Every year of inaction means another generation of talent lost simply because they never got the opportunity.",
  ];

  const images = [
    "/Images/sandhya2.jpeg",
    "/Images/parbati.jpg",
    "/Images/training1.jpeg",
  ];

  return (
    <div className="min-h-screen bg-white" id="why-sports">
      <div className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-16">
        <div className="px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-14 items-start">

            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
            >
              <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                WHY SPORTS MATTER?
              </h1>

              <p className="text-gray-700 text-lg md:text-xl mb-8 leading-relaxed">
                In the villages and small towns where we work, children have the
                same spark, energy, and dreams — but most never get the chance to play.
              </p>

              {/* STATS BOX */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-xl border border-blue-200 p-8 mb-10 hover:shadow-2xl transition-all"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <div className="w-1.5 h-8 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></div>
                  The National Picture
                </h2>

                <div className="grid sm:grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-md">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>

                      <div>
                        <p className="text-gray-700 text-sm md:text-base leading-snug">
                          {stat.text}
                        </p>
                        <p className="text-blue-600 text-xs font-semibold mt-1">
                          ({stat.source})
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200">
                  <p className="text-blue-700 text-sm italic text-center font-medium">
                    "India aims to become a global sporting nation by 2048 — 
                    but without strengthening grassroots sport, this ambition cannot be realized."
                  </p>
                </div>
              </motion.div>

              {/* URGENCY BOX */}
              <motion.div
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200 mb-8 hover:shadow-xl transition-all"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <div className="w-1.5 h-8 bg-gradient-to-b from-red-500 to-orange-500 rounded-full"></div>
                  The Urgency
                </h2>

                <ul className="space-y-3">
                  {urgencyPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700 text-sm md:text-base">
                      <span className="text-blue-600 font-bold text-lg">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* COMMITMENT BOX */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-600 p-5 rounded-xl shadow-md"
              >
                <p className="text-gray-700 text-sm md:text-base">
                  <span className="font-bold text-blue-700">FSSA</span> is committed 
                  to creating opportunities and building pathways for children 
                  through sports.
                </p>
              </motion.div>
            </motion.div>

            {/* RIGHT IMAGES */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-3 gap-4"
            >
              {images.map((src, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.4 }}
                  className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl"
                >
                  <img
                    src={src}
                    alt={`Sports image ${idx + 1}`}
                    className="w-full h-72 md:h-[420px] object-cover"
                  />

                  <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition duration-300"></div>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>

        {/* LOWER LINE */}
        <div className="h-1.5 bg-gradient-to-r from-red-500 via-orange-500 to-red-500 mt-16"></div>
      </div>
    </div>
  );
}



