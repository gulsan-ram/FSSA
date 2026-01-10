
import { motion } from "framer-motion";

export default function Journey() {
  const journeys = [
    {
      year: "2019 – 2021 | Foundation",
      text: "We began in Mayurbhanj with five children and one rugby ball. Early work focused on building trust, creating safe play spaces and encouraging girls to participate without fear.",
    },
    {
      year: "2022 – 2023 | Growth",
      text: "We launched Project Lakshya to support young athletes who showed discipline and potential. Twenty five athletes reached national competitions and two represented India.",
    },
    {
      year: "2024 – 2025 | Expansion",
      text: "We introduced Aarambh, Udaan and Abhyas. Together these programs now reach more than 1500 children across schools, communities and training centers.",
    },
    {
      year: "2025 – 2030 | The Road Ahead",
      text: "We aim to scale our work across more states and reach more than one lakh children through structured play, training and mentorship. Our goal is to build pathways that help children dream, learn and achieve.",
    },
  ];

  return (
    <section className="bg-[#FFF7ED] py-20 px-6 md:px-12 lg:px-24">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold text-center text-[#0b3b67]"
      >
        Our Journey
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto text-center mt-4"
      >
        Every milestone reflects the courage of children and the commitment of communities who believe in the power of sport.
      </motion.p>

      {/* Timeline Container */}
      <div className="relative max-w-5xl mx-auto mt-16">

        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-[#d97706]/30 h-full hidden md:block"></div>

        {/* Journey Cards */}
        <div className="space-y-16">
          {journeys.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className={`md:w-1/2 p-6 bg-white rounded-2xl shadow-lg border border-[#efdfcc] transition-all
                ${
                  idx % 2 === 0
                    ? "md:ml-auto md:text-left"
                    : "md:mr-auto md:text-right"
                }`}
            >
              {/* Dot on Timeline */}
              <div
                className={`absolute top-6 w-5 h-5 rounded-full bg-[#d97706] border-4 border-white shadow-md hidden md:block
                ${
                  idx % 2 === 0
                    ? "right-[-12px]"
                    : "left-[-12px]"
                }`}
              ></div>

              {/* Year Heading */}
              <h3 className="text-2xl font-bold text-[#0b3b67]">{item.year}</h3>

              {/* Description */}
              <p className="mt-3 text-gray-700 text-base md:text-lg leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
