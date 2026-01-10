"use client";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const programs = [
  {
    title: "Aarambh",
    subtitle: "Every child deserves to play.",
    description:
      "Aarambh builds community sports culture through open sessions and structured games led by Aarambh Mitras. Children learn movement, confidence and teamwork in safe and familiar spaces.",
    btn: "Explore Aarambh",
    img: "/Images/Aarahambh.jpeg",
    link: "/programs/aarambh",
  },
  {
    title: "Udaan",
    subtitle: "Sports in every classroom.",
    description:
      "Udaan brings physical literacy and life skills into schools through joyful activities that build communication, collaboration, and resilience.",
    btn: "Explore Udaan",
    img: "/Images/uddan.jpg",
    link: "/programs/udaan",
  },
  {
    title: "Lakshya",
    subtitle: "Training champions for tomorrow.",
    description:
      "Lakshya is our residential excellence program offering professional coaching, nutrition, mentorship and academics to prepare athletes for competitions.",
    btn: "Explore Lakshya",
    img: "/Images/Lakshya.jpeg",
    link: "/programs/lakshya",
  },
  {
    title: "Abhyas",
    subtitle: "Play that sustains itself.",
    description:
      "Abhyas provides affordable day-boarding training with elite coaches. Revenue supports community programs and subsidizes children in need.",
    btn: "Explore Abhyas",
    img: "/Images/udaan.jpeg",
    link: "/programs/abhyas",
  },
];

export default function OurModel() {
  return (
    <section className="py-20 px-6 md:px-12 bg-[#FFF7ED]">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-[#0b3b67]"
        >
          Our Model
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto"
        >
          We nurture young athletes through four interconnected programs—from joyful play to professional excellence.
        </motion.p>
      </div>

      {/* Program Grid */}
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        {programs.map((p, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl border border-[#f0e6dc] 
                       transition-all duration-500 hover:-translate-y-2"
          >
            {/* Image with Overlay */}
            <div className="relative h-44 overflow-hidden">
              <motion.img
                src={p.img}
                alt={p.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

              <h3 className="absolute bottom-3 left-4 text-white text-xl font-semibold drop-shadow-md">
                {p.title}
              </h3>
            </div>

            {/* Card Content */}
            <div className="p-6">
              <p className="text-[#d97706] font-medium text-sm">{p.subtitle}</p>

              <p className="text-gray-700 mt-3 text-sm leading-relaxed">
                {p.description}
              </p>

              {/* Explore Button */}
              <Link to={p.link}>
                <button className="mt-5 w-full py-2 rounded-xl bg-[#0b3b67] text-white font-semibold text-sm 
                                 hover:bg-[#093055] transition-all duration-300 shadow-md">
                  {p.btn}
                </button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

