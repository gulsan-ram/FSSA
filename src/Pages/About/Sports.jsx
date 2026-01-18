
import { motion } from "framer-motion";
import { GiRugbyConversion, GiArcheryTarget } from "react-icons/gi";
import { MdSportsKabaddi, MdSportsSoccer } from "react-icons/md";
import { FaSwimmer } from "react-icons/fa";

const sports = [
  {
    name: "Rugby",
    icon: <GiRugbyConversion />,
    description:
      "Building strength, teamwork, discipline and leadership through structured rugby training at grassroots level.",
  },
  {
    name: "Archery",
    icon: <GiArcheryTarget />,
    description:
      "Enhancing focus, patience and precision by introducing traditional and modern archery practices.",
  },
  {
    name: "Swimming",
    icon: <FaSwimmer />,
    description:
      "Developing endurance, confidence and life-saving skills through guided swimming programs.",
  },
  {
    name: "Kho-Kho",
    icon: <MdSportsKabaddi />,
    description:
      "Reviving indigenous sport that promotes agility, speed, tactical thinking and teamwork.",
  },
  {
    name: "Football",
    icon: <MdSportsSoccer />,
    description:
      "Creating inclusive football environments that nurture skill, discipline and global sporting values.",
  },
];

export default function Sports() {
  return (
    <section className="relative bg-gradient-to-b from-[#0b3b67] via-[#0e4a82] to-[#081f3d] py-24 px-4 sm:px-8 overflow-hidden">
      
      {/* Soft Luxury Glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-yellow-400/20 blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/20 blur-[140px]" />

      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Sports We Offer
          </h2>
          <p className="mt-4 text-gray-300 max-w-3xl mx-auto text-lg">
            Our programs combine structured coaching, inclusivity and values-based
            learning to shape confident young athletes.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {sports.map((sport, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              whileHover={{ y: -12 }}
              className="group relative rounded-3xl p-8 bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.4)] hover:border-yellow-400/40 transition-all duration-500"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br from-yellow-400 to-orange-500 text-white text-3xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-500">
                {sport.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-4">
                {sport.name}
              </h3>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed text-base">
                {sport.description}
              </p>

              {/* Luxury Accent Line */}
              <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-gradient-to-r from-yellow-400 to-orange-500 group-hover:w-full transition-all duration-700 rounded-b-3xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
