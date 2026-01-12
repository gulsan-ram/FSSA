import React, { useState } from "react";
import SEO from "../components/SEO";

export default function Gallery() {
  const allImages = [
    "/Images/ARCHERY 2.JPG",
    "/Images/swimming.jpg",
    "/Images/Aarahambh.jpeg",
    "/Images/swimming3.jpeg",
    "/Images/archery.jpeg",
    "/Images/football.jpg",
    "/Images/fssa3.jpg",
    "/Images/gallery00.jpeg",
    "/Images/gallery4.jpg",
    "/Images/gallery5.jpg",
    "/Images/gallery6.jpg",
    "/Images/gallery9.jpg",
    "/Images/gallery10.jpg",
    "/Images/gallery12.JPG",
    "/Images/gallery13.jpeg",
    "/Images/gallery14.JPG",
    "/Images/gallery66.jpeg",
    "/Images/gallerychampion.jpeg",
    "/Images/gallery55.jpeg",
    "/Images/gallery09.jpeg",
    "/Images/gallery08.jpeg",
    "/Images/gallery010.jpeg",
    "/Images/gallery119.jpeg",
    "/Images/gallery112.jpeg",
    "/Images/gallery111.jpeg",
    "/Images/gallery99.jpeg",
    "/Images/gallery44.jpeg",
    "/Images/gallery100.jpeg",
    "/Images/gallery22.jpeg",
    "/Images/girls.jpg",
    "/Images/lakshi.jpg",
    "/Images/Lakshya.jpeg",
    "/Images/Archery.jpg",
    "/Images/Athletics.jpg",
    "/Images/football1.JPG",
    "/Images/media5.jpeg",
    "/Images/playing.jpeg",
    "/Images/independence.jpeg",
    "/Images/team.jpeg",
    "/Images/DSC_0400.JPG",
    "/Images/Maharaja.jpeg",
    "/Images/DSC_0424.JPG",
  ];

  const [visibleCount, setVisibleCount] = useState(8);

  const showMore = () => setVisibleCount(allImages.length);
  const showLess = () => setVisibleCount(8);

  return (
    <>
      {/* ================= SEO ================= */}
      <SEO
        title="Gallery | Future Star Sports Academy"
        description="Explore moments from training, competitions, and community sports initiatives at Future Star Sports Academy."
        canonical="https://futurestarsportsacademy.org/gallery"
        image="/Images/Lakshya.jpeg"
      />

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 pt-32 pb-10 px-5">

        {/* PAGE HEADING */}
        <h1 className="text-center text-4xl font-extrabold text-orange-600 mb-10 tracking-wide">
          Gallery
        </h1>

        {/* ================= IMAGE GRID ================= */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {allImages.slice(0, visibleCount).map((img, index) => (
            <div
              key={index}
              className="group rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-white
                         hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={img}
                alt="Future Star Sports Academy training and events"
                className="w-full h-64 object-cover rounded-2xl
                           group-hover:scale-110 transition-all duration-500"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>

        {/* ================= BUTTONS ================= */}
        <div className="flex justify-center mt-10">
          {visibleCount === 8 ? (
            <button
              onClick={showMore}
              className="px-8 py-3 text-lg font-semibold bg-blue-600 text-white rounded-xl shadow
                         hover:bg-blue-700 hover:scale-105 transition-all duration-300"
            >
              View More
            </button>
          ) : (
            <button
              onClick={showLess}
              className="px-8 py-3 text-lg font-semibold bg-red-600 text-white rounded-xl shadow
                         hover:bg-red-700 hover:scale-105 transition-all duration-300"
            >
              Show Less
            </button>
          )}
        </div>
      </div>
    </>
  );
}

