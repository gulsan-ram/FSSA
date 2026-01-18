import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function VisionMission() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["60px", "-60px"]);
  const opacity = useTransform(scrollYProgress, [0, 0.35], [0, 1]);

  return (
    <section
      ref={ref}
      className="relative py-36 px-6 sm:px-12 overflow-hidden"
      style={{ backgroundColor: "#FFF7ED" }}
    >
      {/* Soft background accents */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-orange-200/30 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-200/30 rounded-full blur-[120px]" />

      <motion.div
        style={{ y, opacity }}
        className="relative max-w-7xl mx-auto"
      >
        {/* Header */}
        <div className="max-w-4xl mb-28">
          <div className="flex items-center gap-4 mb-6">
            <span className="h-px w-16 bg-orange-600"></span>
            <p className="uppercase tracking-[0.4em] text-orange-600 text-xs font-medium">
              Our Purpose
            </p>
          </div>

          <h2 className="text-5xl md:text-7xl font-extrabold text-[#0b3b67] leading-tight">
            Vision & Mission
          </h2>

          <p className="mt-10 text-xl md:text-2xl text-gray-700 leading-relaxed max-w-3xl">
            The principles that guide every decision we make — shaping
            opportunity, dignity, and excellence through sport.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          
          {/* Vision */}
          <motion.article
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            className="relative bg-white/90 backdrop-blur-xl rounded-[32px] p-14
                       border border-white shadow-[0_40px_100px_rgba(0,0,0,0.10)]
                       hover:-translate-y-3 transition-all duration-700"
          >
            <span className="absolute -top-7 left-12 bg-gradient-to-r from-orange-600 to-orange-500
                             text-white px-8 py-2 text-xs tracking-[0.3em] rounded-full shadow-lg">
              VISION
            </span>

            <h3 className="text-3xl font-bold text-[#0b3b67] mb-6">
              A Future Where Every Child Belongs in Sport
            </h3>

            <p className="text-xl text-gray-700 leading-relaxed">
              To build a <strong>trusted, inclusive sports ecosystem</strong> where
              every child and young athlete — regardless of background —
              receives a fair chance to play, grow, and achieve their
              <strong> highest potential through sport</strong>.
            </p>
          </motion.article>

          {/* Mission */}
          <motion.article
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: "easeOut", delay: 0.15 }}
            className="relative bg-white/90 backdrop-blur-xl rounded-[32px] p-14
                       border border-white shadow-[0_40px_100px_rgba(0,0,0,0.10)]
                       hover:-translate-y-3 transition-all duration-700"
          >
            <span className="absolute -top-7 left-12 bg-gradient-to-r from-orange-600 to-orange-500
                             text-white px-8 py-2 text-xs tracking-[0.3em] rounded-full shadow-lg">
              MISSION
            </span>

            <h3 className="text-3xl font-bold text-[#0b3b67] mb-6">
              Turning Opportunity into Excellence
            </h3>

            <p className="text-xl text-gray-700 leading-relaxed">
              To make <strong>quality sports training, education, and life skills
              accessible</strong> by building strong systems across communities,
              schools, and academies — nurturing talent, character, and
              leadership for life.
            </p>
          </motion.article>

        </div>
      </motion.div>
    </section>
  );
}

