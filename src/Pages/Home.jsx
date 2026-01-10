import { Link } from "react-router-dom";
import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const LatestNews = lazy(() => import("./LatestNews"));
const Whysport = lazy(() => import("./Whysport"));
const Glance = lazy(() => import("./Glance"));

export default function Home() {
  const slides = [
    {
      src: "/Images/Lakshya.jpeg",
      title1: "Enabling Access.",
      title2: "Inspiring Excellence.",
      desc:
        "Future Star Sports Academy builds inclusive community sports systems and long-term pathways from playgrounds to podiums.",
    },
    {
      src: "/Images/sandhya1.jpeg",
      title1: "Grassroots",
      title2: "To High Performance",
      desc:
        "Nurturing tribal and rural athletes through structured long-term athlete development models.",
    },
    {
      src: "/Images/fssa1.jpeg",
      title1: "Community",
      title2: "Driven Impact",
      desc:
        "Using sport as a catalyst for education, leadership, and social transformation.",
    },
  ];

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full min-h-screen bg-black overflow-hidden">

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop
          preloadImages={false}
          lazy
          className="w-full h-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full min-h-screen">

                {/* ✅ OPTIMIZED IMAGE (LCP FIX) */}
                <img
                  src={slide.src}
                  alt={slide.title1}
                  className="absolute inset-0 w-full h-full object-cover scale-105"
                  loading={index === 0 ? "eager" : "lazy"}
                  fetchpriority={index === 0 ? "high" : "low"}
                  decoding="async"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90" />

                {/* Content */}
                <div className="relative z-10 min-h-screen flex items-center">
                  <div className="max-w-6xl px-6 sm:px-10 lg:px-20">

                    {/* 🚀 NO INITIAL ANIMATION FOR LCP TEXT */}
                    <p className="uppercase tracking-[0.35em] text-xs text-[#f2a900] mb-6">
                      Future Star Sports Academy
                    </p>

                    <h1 className="font-extrabold leading-tight text-4xl sm:text-5xl md:text-6xl xl:text-7xl">
                      <span className="text-[#f2a900]">{slide.title1}</span>
                      <br />
                      <span className="text-[#ba5b03]">{slide.title2}</span>
                    </h1>

                    {/* Animate AFTER paint */}
                    <motion.p
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="mt-8 max-w-2xl text-white/90 text-base sm:text-lg md:text-xl"
                    >
                      {slide.desc}
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      className="mt-10 flex flex-wrap gap-4"
                    >
                      <Link
                        to="/programs"
                        className="px-7 py-3.5 rounded-xl bg-[#f2a900] text-black font-semibold
                                   shadow-xl hover:bg-[#d89200] transition"
                      >
                        Join a Program
                      </Link>

                      <Link
                        to="/donate"
                        className="px-7 py-3.5 rounded-xl border border-white/80
                                   text-white font-semibold backdrop-blur
                                   hover:bg-white hover:text-black transition"
                      >
                        Support Grassroots Sport
                      </Link>
                    </motion.div>

                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* ================= BELOW-THE-FOLD ================= */}
      <Suspense fallback={null}>
        <LatestNews />
        <Whysport />
        <Glance />
      </Suspense>
    </>
  );
}

