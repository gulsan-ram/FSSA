import React from "react";

export default function PartnersandRecognistion() {
  const logos = [
    { name: "Simply Sport", src: "/Images/simplify sport.jpeg" },
    { name: "The Belgadia Palace", src: "/Images/belagidia.jpg" },
    { name: "Odisha Sports", src: "/Images/odisha sports.jpg" },
    { name: "Rotarty club", src: "/Images/ROTARY.png" },
    { name: "Odisha Rugby", src: "/Images/odisha-rugby.jpg" },
    { name: "Chennai Rugby", src: "/Images/chennai.png" },
    { name: "Rugby India", src: "/Images/Rugbyindia.jpg" },
    { name: "Mayurbhanj Foundation", src: "/Images/mayurbhanj Foundationjpeg.jpeg" },
  ];

  const recognitionsLeft = [
    {
      title: "Former Chief Minister of Odisha, Shri Naveen Patnaik",
      description:
        "Honored for empowering girls through community-based sports excellence.",
      image: "/Images/Naveen.jpg",
    },
    {
      title: "Sports and Youth Services Department",
      description:
        "Acknowledgement for strengthening state-level grassroots sports initiatives.",
      image: "/Images/odisha sports.jpg",
    },
  ];

  const recognitionsRight = [
    {
      title: "Rugby India",
      description:
        "Appreciation for developing emerging rural athletes and women’s rugby leadership.",
      image: "/Images/Rugbyindia.jpg",
    },
    {
      title: "District Administration, Mayurbhanj",
      description:
        "Support for community-led sports hubs and athlete empowerment.",
      image: "/Images/districtjpg.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#faf5ef] via-[#fdf8f1] to-[#f7efe4] py-20 px-4 sm:px-10">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#e6a23c] to-[#f7c873] bg-clip-text text-transparent drop-shadow-sm">
            Our Partners
          </h1>
          <div className="w-28 h-1 mx-auto mt-4 rounded-full bg-gradient-to-r from-[#e6a23c] to-[#f7c873]" />
        </div>

        {/* Scrolling Logos */}
        <div className="relative overflow-hidden mb-28 bg-white/60 backdrop-blur-xl rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/60 py-10">

          {/* Fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#faf5ef] to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#faf5ef] to-transparent"></div>

          <div className="flex animate-scroll items-center gap-14">
            {[...logos, ...logos].map((logo, index) => (
              <div key={index} className="flex-shrink-0">
                <div className="
                  w-32 h-32 sm:w-40 sm:h-40 
                  bg-white/70 backdrop-blur-xl 
                  rounded-2xl shadow-md 
                  border border-[#e6a23c]/30 
                  flex items-center justify-center 
                  transition-all duration-500 
                  hover:scale-110 hover:shadow-xl hover:border-[#e6a23c]
                ">
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="w-20 h-20 sm:w-28 sm:h-28 object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recognition Section */}
        <div className="mt-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center bg-gradient-to-r from-[#e6a23c] to-[#f9d27b] bg-clip-text text-transparent mb-10">
            Recognitions & Appreciations
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Left Column */}
            <div className="lg:border-r border-[#e6a23c]/30 lg:pr-10 space-y-10">
              {recognitionsLeft.map((item, index) => (
                <div
                  key={index}
                  className="
                    bg-white/60 backdrop-blur-xl 
                    rounded-3xl shadow-lg p-8 
                    border border-[#e6a23c]/40 
                    hover:shadow-2xl hover:scale-[1.03] 
                    transition-all duration-500
                    hover:border-[#e6a23c] group
                  "
                >
                  <div className="flex items-center gap-5 mb-5">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="
                        w-20 h-20 rounded-full object-cover 
                        border-4 border-[#e6a23c] shadow-md 
                        group-hover:scale-110 transition-all duration-500
                      "
                    />
                    <h3 className="text-xl font-extrabold text-[#b87d1a] group-hover:text-[#e6a23c] transition-all">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-gray-700 text-lg leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div className="lg:pl-10 space-y-10">
              {recognitionsRight.map((item, index) => (
                <div
                  key={index}
                  className="
                    bg-white/60 backdrop-blur-xl 
                    rounded-3xl shadow-lg p-8 
                    border border-[#e6a23c]/40 
                    hover:shadow-2xl hover:scale-[1.03] 
                    transition-all duration-500
                    hover:border-[#e6a23c] group
                  "
                >
                  <div className="flex items-center gap-5 mb-5">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="
                        w-20 h-20 rounded-full object-cover 
                        border-4 border-[#e6a23c] shadow-md
                        group-hover:scale-110 transition-all duration-500
                      "
                    />
                    <h3 className="text-xl font-extrabold text-[#b87d1a] group-hover:text-[#e6a23c] transition-all">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-gray-700 text-lg leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>

      {/* Scroll Animation */}
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 26s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}

