import { motion } from "framer-motion";
import SEO from "../../components/SEO";

// Images
import work1 from "/src/assets/sandhya.jpeg";
import work2 from "/src/assets/sunita.jpg";
import work3 from "/src/assets/parbati.jpg";

export default function OurWork() {
  return (
    <>
      {/* ================= SEO ================= */}
      <SEO
        title="Our Work | Future Star Sports Academy"
        description="Explore how Future Star Sports Academy transforms communities through grassroots sports programs across Odisha and Jharkhand."
        canonical="https://futurestarsportsacademy.org/our-work"
      />

      {/* ================= HERO – PREMIUM ================= */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{ backgroundImage: `url(${work1})` }}
        />

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />

        {/* Luxury Glow */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-yellow-400/20 blur-[160px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/20 blur-[160px]" />

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative z-10 text-center px-6"
        >
          <span className="inline-block mb-6 px-6 py-2 rounded-full text-sm tracking-widest uppercase font-semibold text-yellow-400 border border-yellow-400/40">
            Our Impact
          </span>

          <h1 className="text-white text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
            Our Work in Action
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-gray-300 text-lg md:text-xl leading-relaxed">
            Creating opportunity, confidence and community through the power of sport.
          </p>
        </motion.div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="py-24 px-4 sm:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Intro Text */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-20"
          >
            From village playgrounds to structured training programs, Future Star
            Sports Academy works at the grassroots to ensure every child has access
            to safe spaces, mentorship and opportunity through sport.
          </motion.p>

          {/* Gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[work1, work2, work3].map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                whileHover={{ scale: 1.05 }}
                className="overflow-hidden rounded-3xl shadow-2xl"
              >
                <img
                  src={img}
                  alt="Future Star Sports Academy community program"
                  className="w-full h-72 object-cover"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

