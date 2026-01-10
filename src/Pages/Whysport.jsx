import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Whysport() {
  const { scrollYProgress } = useScroll();

  // Parallax transforms
  const headingY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const subTextY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  const fadeUp = {
    hidden: { opacity: 0, y: 35 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, delay },
    }),
  };

  return (
    <section className="relative py-28 overflow-hidden" id="why-sports">
      {/* Background fade-in */}
      <motion.div
        style={{ opacity: bgOpacity }}
        className="absolute inset-0 bg-gradient-to-b from-[#FFF3E8] to-[#FFE7D4] -z-10"
      />

      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* Parallax Heading */}
        <motion.h1
          style={{ y: headingY }}
          className="text-4xl md:text-6xl font-extrabold text-[#1D3557] mb-8 leading-tight"
        >
          Why Sports Matter
        </motion.h1>

        {/* Paragraph 1 */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.2}
          style={{ y: subTextY }}
          className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6"
        >
          Across India, access to sport is unequal. Many rural children grow up 
          without safe play spaces, trained mentors, or structured physical education. 
          Girls face even deeper barriers to participation and self-expression.
        </motion.p>

        {/* Right Statement */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.4}
          className="mb-8"
        >
          <p className="text-3xl md:text-4xl font-bold text-[#1D3557] leading-snug">
            We believe sport is not a privilege.
          </p>
          <p className="text-4xl md:text-5xl font-extrabold 
            bg-gradient-to-r from-[#EB5A2E] to-[#E63946] bg-clip-text text-transparent mt-2">
            It is a right.
          </p>
        </motion.div>

        {/* Paragraph 2 */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.6}
          className="text-gray-700 text-lg md:text-xl leading-relaxed mb-12"
        >
          Sport strengthens the mind, body and spirit.  
          It teaches trust, collaboration and perseverance—shaping character and 
          creating pathways to a healthier, stronger future.
        </motion.p>

        {/* Scroll-reactive CTA */}
        <motion.a
          href="#how-we-work"
          style={{
            y: useTransform(scrollYProgress, [0, 1], [0, -20]), // small scroll lift
          }}
          whileHover={{ scale: 1.07, y: -5 }}
          className="inline-block bg-gradient-to-r 
            from-[#EB5A2E] via-[#F4A261] to-[#E63946] 
            text-white font-semibold px-10 py-4 rounded-xl shadow-lg 
            hover:shadow-2xl transition-all duration-300"
        >
          Learn How We Are Changing This →
        </motion.a>

        
        
      </div>
    </section>
  );
}



