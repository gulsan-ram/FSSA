"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Glance() {
  const stats = [
    { number: 1500, label: "Children Trained" },
    { number: 50, label: "Girls Participation", suffix: "%" },
    { number: 150, label: "State & National Athletes" },
    { number: 4, label: "International Representation" },
    { number: 200, label: "Medals Won" },
  ];

  const CountUp = ({ end, suffix }) => {
    const [value, setValue] = useState(0);

    useEffect(() => {
      let start = 0;
      const duration = 1600; // 1.6 sec
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setValue(end);
          clearInterval(timer);
        } else {
          setValue(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }, [end]);

    return (
      <span>
        {value}
        {suffix || "+"}
      </span>
    );
  };

  return (
    <section className="py-24 bg-[#FFF7ED] px-6">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-[#0b3b67]"
        >
          Our Impact at a Glance
        </motion.h2>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            className="bg-white text-center py-10 rounded-3xl shadow-lg hover:shadow-xl 
                       transition-all duration-300 border border-[#f1e7dd] hover:-translate-y-1"
          >
            <h3 className="text-3xl md:text-4xl font-extrabold text-[#d97706]">
              <CountUp end={stat.number} suffix={stat.suffix} />
            </h3>
            <p className="mt-3 text-gray-700 text-sm md:text-base font-medium">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
