import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function VisionMission() {
  const ref = useRef(null);

  // Scroll-linked motion
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["40px", "-40px"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section
      ref={ref}
      className="relative py-32 px-6 sm:px-10"
      style={{ backgroundColor: "#FFF7ED" }}
    >
      <motion.div
        style={{ y, opacity }}
        className="max-w-6xl mx-auto"
      >
        {/* Editorial Header */}
        <div className="max-w-3xl mb-24">
          <p className="uppercase tracking-[0.35em] text-orange-600 text-xs mb-6">
      
          </p>

          <h2 className="text-5xl md:text-6xl font-extrabold text-[#0b3b67] leading-tight">
            Vision & Mission
          </h2>

          <p className="mt-8 text-xl text-gray-700 leading-relaxed">
            What guides our work, shapes our decisions, and defines the future we
            are building for young athletes and communities.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* Vision */}
          <motion.article
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative bg-white rounded-[28px] p-12 shadow-[0_30px_80px_rgba(0,0,0,0.08)]
                       hover:-translate-y-2 transition-transform duration-700"
          >
            <span className="absolute -top-6 left-10 bg-orange-600 text-white 
                             px-6 py-2 text-xs tracking-widest rounded-full">
              VISION
            </span>

            <p className="text-xl text-gray-700 leading-relaxed">
              To build a trusted and inclusive sports ecosystem that gives every
              child and young athlete a fair chance to play, learn, and reach
              their <strong>full potential through sport</strong>.
            </p>
          </motion.article>

          {/* Mission */}
          <motion.article
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
            className="relative bg-white rounded-[28px] p-12 shadow-[0_30px_80px_rgba(0,0,0,0.08)]
                       hover:-translate-y-2 transition-transform duration-700"
          >
            <span className="absolute -top-6 left-10 bg-orange-600 text-white 
                             px-6 py-2 text-xs tracking-widest rounded-full">
              MISSION
            </span>

            <p className="text-xl text-gray-700 leading-relaxed">
              To make <strong>quality sports training, education, and life skills
              accessible</strong> by building strong systems in communities,
              schools, and academies that nurture talent and inspire excellence.
            </p>
          </motion.article>

        </div>
      </motion.div>
    </section>
  );
}

