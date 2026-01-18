import { Link } from "react-router-dom";
import { lazy, Suspense } from "react";
import SEO from "../components/SEO";
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
      src: "/Images/Lakshya.webp",
      title1: "Enabling Access",
      title2: "Inspiring Excellence",
      desc:
        "Future Star Sports Academy develops inclusive sports pathways that nurture talent from grassroots to elite performance.",
    },
    {
      src: "/Images/swimming2.webp",
      title1: "Grassroots",
      title2: "To High Performance",
      desc:
        "Structured long-term athlete development programs for tribal and rural youth.",
    },
    {
      src: "/Images/fssa1.webp",
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
        image="/Images/Lakshya.webp"
      />

      {/* ================= HERO ================= */}
      <section className="relative w-full min-h-[100svh] bg-black overflow-hidden">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          loop
          className="w-full h-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full min-h-[100svh]">

                {/* Hero Image */}
                <img
                  src={slide.src}
                  alt={`${slide.title1} ${slide.title2}`}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  loading={index === 0 ? "eager" : "lazy"}
                  fetchpriority={index === 0 ? "high" : "low"}
                  decoding="async"
                />

                {/* Premium Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r 
                                from-black/80 via-black/50 to-black/20
                                md:from-black/70 md:via-black/40 md:to-black/20" />

                {/* Content */}
                <div className="relative z-10 min-h-[100svh] flex items-center">
                  <div className="w-full max-w-7xl mx-auto
                                  px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">

                    <p className="uppercase tracking-[0.3em] text-[10px] sm:text-xs
                                  text-[#f2a900] mb-4">
                      Future Star Sports Academy
                    </p>

                    <h1 className="font-extrabold leading-[1.05]
                                   text-white
                                   text-4xl sm:text-5xl md:text-6xl
                                   lg:text-7xl xl:text-[80px]">
                      {slide.title1}
                      <br />
                      <span className="text-[#f2a900]">{slide.title2}</span>
                    </h1>

                    <p className="mt-6 max-w-xl sm:max-w-2xl
                                  text-white/90
                                  text-base sm:text-lg md:text-xl
                                  leading-relaxed">
                      {slide.desc}
                    </p>

                    {/* CTA Buttons */}
                    <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6">
                      <Link
                        to="/programs"
                        className="inline-flex justify-center items-center
                                   px-8 py-4 rounded-xl
                                   bg-[#f2a900] text-black font-semibold
                                   text-base md:text-lg
                                   hover:bg-[#d89200]
                                   transition"
                      >
                        Join a Program
                      </Link>

                      <Link
                        to="/donate"
                        className="inline-flex justify-center items-center
                                   px-8 py-4 rounded-xl
                                   border border-white/80
                                   text-white font-semibold
                                   text-base md:text-lg
                                   hover:bg-white hover:text-black
                                   transition"
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

