import React from "react";
import { FaFlagCheckered, FaRocket, FaRegChartBar, FaRunning } from "react-icons/fa";

const timeline = [
  {
    year: "2019–2021",
    title: "Foundation",
    icon: <FaFlagCheckered size={32} className="text-[#f2a900]" />,
    desc: [
      "Started in Mayurbhanj with five children and one rugby ball.",
      "Built trust in the community and created a safe, inclusive space for girls to play."
    ],
  },
  {
    year: "2022–2023",
    title: "Growth",
    icon: <FaRunning size={32} className="text-[#f2a900]" />,
    desc: [
      "Launched Project Lakshya for young athletes.",
      <span key="growth-bold" className="font-bold text-[#ff7300]">25 athletes reached national competitions and 2 represented India.</span>
    ],
  },
  {
    year: "2024–2025",
    title: "Expansion",
    icon: <FaRocket size={32} className="text-[#f2a900]" />,
    desc: [
      "Introduced Aarambh, Udaan, and Abhyas programs.",
      <span key="expansion-bold" className="font-bold text-[#f2a900]">Now reaching 1500+ children across schools and community centers.</span>,
    ],
  },
  {
    year: "2025–2030",
    title: "The Road Ahead",
    icon: <FaRegChartBar size={32} className="text-[#ff7300]" />,
    desc: [
      "Scaling across more states, goal to reach 1 lakh+ children through structured play, training, and mentorship."
    ],
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (idx) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 + idx * 0.18,
      duration: 0.85,
      type: "spring"
    }
  })
};

const Journey = () => (
  <section className="relative py-16 sm:px-2 px-1 bg-gradient-to-br from-orange-50 via-white to-orange-100">
    {/* Headline */}
    <div className="max-w-2xl mx-auto text-center mb-16 px-2">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#f06713] drop-shadow mb-4 tracking-tight uppercase">
        Our Journey At a Glance
      </h2>
      <p className="text-base sm:text-lg md:text-xl font-medium text-[#312f69]">
        From one small field in Mayurbhanj to a growing movement for access and excellence in sports.
      </p>
    </div>

    {/* Timeline/Road */}
    <div className="relative flex flex-col md:flex-row md:justify-between items-center max-w-6xl mx-auto">
      {/* Ribbon behind */}
      <div className="absolute left-0 right-0 top-1/2 w-full h-[36px] md:h-[48px] -translate-y-1/2 pointer-events-none z-0">
        <svg width="100%" height="53px" viewBox="0 0 1100 52" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "53px" }}>
          <path d="M0 26 C300 32 500 0 600 26 S900 52 1100 26" stroke="#f06713" strokeWidth="20" fill="none" />
          <path d="M0 26 C300 32 500 0 600 26 S900 52 1100 26" stroke="#fff" strokeWidth="5" fill="none" strokeDasharray="28 16" />
        </svg>
      </div>

      {/* Timeline Steps */}
      {timeline.map((item, idx) => (
        <motion.div
          key={idx}
          className="relative flex flex-col gap-8 items-center mb-16 md:mb-0 md:w-1/4 px-2 md:px-0 z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.45 }}
          custom={idx}
          variants={fadeUp}
        >
          <div className="bg-white rounded-full shadow-lg p-4 border-4 border-[#f2a900] mb-2">
            {item.icon}
          </div>
          <div className="text-center">
            <div className="text-lg sm:text-xl md:text-2xl font-bold text-[#f06713]">
              {item.year} <span className="text-[#312f69]">|</span> <span className="text-[#312f69]">{item.title}</span>
            </div>
            <ul className="text-[#312f69] text-xs sm:text-sm md:text-base font-medium mt-2 list-none flex flex-col gap-1 sm:gap-2">
              {item.desc.map((line, i) => <li key={i}>{line}</li>)}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
    {/* Road Ahead Quote */}
    <motion.div
      className="mt-16 text-center max-w-lg mx-auto text-base sm:text-lg text-[#f06713] italic"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.7 }}
      transition={{ delay: 0.2, duration: 1, type: "spring" }}
    >
      <span className="font-bold text-2xl mr-2">“</span>
      Our journey is about giving every child the chance to excel, on and off the field.
      <span className="font-bold text-2xl ml-2">”</span>
    </motion.div>
  </section>
);

export default Journey;

