import { Link } from "react-router-dom";
import { lazy, Suspense } from "react";
import SEO from "../components/SEO"; // ✅ ADD THIS
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
      title1: "Enabling Access",
      title2: "Inspiring Excellence",
      desc:
        "Future Star Sports Academy develops inclusive sports pathways that nurture talent from grassroots to elite performance.",
    },
    {
      src: "/Images/swimming2.jpeg",
      title1: "Grassroots",
      title2: "To High Performance",
      desc:
        "Structured long-term athlete development programs for tribal and rural youth.",
    },
    {
      src: "/Images/fssa1.jpeg",
      title1: "Community",
      title2: "Driven Impact",
      desc:
        "Sport as a platform for education, leadership, and sustainable social development.",
    },
  ];

  return (
    <>
      {/* ================= SEO ================= */}
      <SEO
        title="Future Star Sports Academy | Grassroots to High Performance"
        description="Future Star Sports Academy empowers grassroots and rural athletes through structured sports development, education, and high-performance pathways."
        canonical="https://futurestarsportsacademy.org/"
        image="/Images/Lakshya.jpeg"
      />

      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full min-h-screen bg-black">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop
          className="w-full h-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full min-h-screen">

                {/* Hero Image */}
                <img
                  src={slide.src}
                  alt={slide.title1}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading={index === 0 ? "eager" : "lazy"}
                  fetchpriority={index === 0 ? "high" : "low"}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/35" />

                {/* Content */}
                <div className="relative z-10 min-h-screen flex items-center">
                  <div className="max-w-6xl px-6 sm:px-10 lg:px-20">

                    <p className="uppercase tracking-widest text-xs text-[#f2a900] mb-4">
                      Future Star Sports Academy
                    </p>

                    <h1 className="font-bold leading-tight text-white
                                   text-4xl sm:text-5xl md:text-6xl">
                      {slide.title1}
                      <br />
                      <span className="text-[#f2a900]">{slide.title2}</span>
                    </h1>

                    <p className="mt-6 max-w-2xl text-white/90
                                  text-base sm:text-lg leading-relaxed">
                      {slide.desc}
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                      <Link
                        to="/programs"
                        className="px-7 py-3 rounded-lg
                                   bg-[#f2a900] text-black font-semibold
                                   hover:bg-[#d89200] transition"
                      >
                        Join a Program
                      </Link>

                      <Link
                        to="/donate"
                        className="px-7 py-3 rounded-lg
                                   border border-white
                                   text-white font-semibold
                                   hover:bg-white hover:text-black transition"
                      >
                        Support Grassroots Sport
                      </Link>
                    </div>

                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* ================= BELOW THE FOLD ================= */}
      <Suspense fallback={null}>
        <LatestNews />
        <Whysport />
        <Glance />
      </Suspense>
    </>
  );
}

