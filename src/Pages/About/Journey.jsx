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
    <section className="relative py-20 px-6 md:px-12 lg:px-24 
      bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">

      {/* BBCi-style micro dot texture */}
      <div
        className="pointer-events-none absolute inset-0
        bg-[radial-gradient(circle,rgba(15,23,42,0.06)_0.6px,transparent_0.6px)]
        bg-[size:14px_14px]"
      ></div>

      {/* Content */}
      <div className="relative z-10">

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
          className="text-slate-600 text-lg md:text-xl max-w-3xl mx-auto text-center mt-4"
        >
          Every milestone reflects the courage of children and the commitment of communities who believe in the power of sport.
        </motion.p>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto mt-16">

          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 w-[2px]
            bg-gradient-to-b from-blue-500/25 to-indigo-500/25
            h-full hidden md:block">
          </div>

          {/* Cards */}
          <div className="space-y-16">
            {journeys.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className={`relative md:w-1/2 p-6
                  bg-white/85 backdrop-blur-xl rounded-2xl shadow-xl
                  border border-white/50
                  ${idx % 2 === 0 ? "md:ml-auto md:text-left" : "md:mr-auto md:text-right"}`}
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute top-6 w-4 h-4 rounded-full
                    bg-blue-600 border-4 border-white shadow
                    hidden md:block
                    ${idx % 2 === 0 ? "right-[-10px]" : "left-[-10px]"}`}
                ></div>

                <h3 className="text-2xl font-bold text-[#0b3b67]">
                  {item.year}
                </h3>

                <p className="mt-3 text-slate-600 text-base md:text-lg leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

