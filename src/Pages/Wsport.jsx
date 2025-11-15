import React from "react";

export default function Wsport() {
  const stats = [
    {
      text: "Only 1 in 10 rural children ever get access to organized sports activities.",
      source: "ASII, 2021",
    },
    {
      text: "Girls' participation in school sports drops by nearly 50% after age 11.",
      source: "UNESCO, 2021",
    },
    {
      text: "Over 70% of government schools do not have a qualified PE teacher.",
      source: "NCERT, 2021",
    },
    {
      text: "Students engaged in sports are 35% more likely to stay in school and show better health and confidence.",
      source: "NCERT, 2021",
    },
  ];

  const urgencyPoints = [
    "India is undergoing sporting achievements, at the top, yet at the bottom, millions of children are being left behind.",
    "Without early access and structured pathways, rural and tribal talent never makes it to professional training.",
    "Girls and Dalit/Adivasi children face the most exclusion from school and sports programs.",
    "Sport can also be a powerful medium for community development, bringing people together, building confidence, and promoting equality.",
    "Every year of inaction means another generation of children lost simply because they never got the opportunity.",
  ];

  const timeline = [
    {
      year: "2019-2021",
      title: "Foundation",
      description:
        "Started in Mayurbhanj with five children and one rugby ball. Built trust in the community and created a safe, nurturing space for girls to play.",
      color: "from-green-400 to-teal-400",
    },
    {
      year: "2022-2023",
      title: "Growth",
      description:
        "Expanded to 10 villages, launched 'Fit for School' initiative. 25 athletes reached national competitions and 3 represented India.",
      color: "from-teal-400 to-blue-400",
    },
    {
      year: "2024-2025",
      title: "Expansion",
      description:
        "Introduced Aerobath, Udaan, and Abhyas programs. Partnering 1500+ children across schools and community centers.",
      color: "from-blue-400 to-purple-400",
    },
    {
      year: "2025-2030",
      title: "The Road Ahead",
      description:
        "Grow to a pan-India initiative. 1 million children through structured learning and mentorship.",
      color: "from-purple-400 to-pink-400",
    },
  ];

  const images = [
    "https://images.unsplash.com/photo-1614332287897-cdc485fa562d?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1551958219-acbc608c6377?w=400&h=600&fit=crop",
  ];

  return (
    <div className="min-h-screen bg-white" id="why-sports">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="p-9">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Left Content */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                WHY SPORTS MATTER?
              </h1>
              <p className="text-gray-700 text-base mb-6 leading-relaxed">
                Sports are not just games. For millions of children who have the
                same drive, energy, and dreams as any athlete in the world, most
                never get the chance to play.
              </p>

              {/* Statistics Box */}
              <div className="bg-white rounded-xl shadow-md border border-blue-200 p-6 mb-6 hover:shadow-xl transition-all duration-300">
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-500 rounded"></div>
                  The National Picture
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="flex gap-3 group">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0 mt-1 shadow-md group-hover:scale-105 transition-transform duration-300">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div>
                        <p className="text-gray-700 text-sm mb-1 leading-snug">
                          {stat.text}
                        </p>
                        <p className="text-blue-600 text-xs font-semibold">
                          ({stat.source})
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-3 border-t border-gray-200">
                  <p className="text-blue-700 text-xs italic text-center font-medium">
                    "India aims to become a global sporting nation by 2048—but
                    without strengthening grassroots sport, this ambition cannot
                    be realized."
                  </p>
                </div>
              </div>

              {/* The Urgency */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 mb-5 shadow-sm border border-gray-200">
                <h2 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <div className="w-1 h-6 bg-gradient-to-b from-red-500 to-orange-500 rounded"></div>
                  The Urgency
                </h2>
                <ul className="space-y-2">
                  {urgencyPoints.map((point, index) => (
                    <li
                      key={index}
                      className="flex gap-2 text-gray-700 text-sm leading-snug"
                    >
                      <span className="text-blue-600 font-bold mt-0.5">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-600 p-4 rounded-lg shadow-sm">
                <p className="text-gray-700 text-sm">
                  <span className="font-bold text-blue-700">FSSA</span> was
                  established to transform this situation, converting every
                  child's energy into opportunity and every environment into a
                  nurturing space for growth.
                </p>
              </div>
            </div>

           {/* Right Images */}
            <div className="grid grid-cols-3  justify-items-center">
              {images.map((imgSrc, idx) => (
                <div
                  key={idx}
                  className="relative group rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 h-[600px]"
                >
                  <img
                    src={imgSrc}
                    alt={`Children playing sports ${idx + 1}`}
                    className="w-[250px] h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="h-1.5 bg-gradient-to-r from-red-500 via-orange-500 to-red-500"></div>
      </div>
      {/* Journey Section */}
      <div
        className="relative bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 overflow-hidden"
        id="journey"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Box */}
            <div className="bg-gradient-to-br from-orange-100/80 to-red-100/80 backdrop-blur rounded-2xl p-8 shadow-md border border-orange-200 hover:shadow-xl transition-all duration-300">
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-3">
                OUR JOURNEY AT A GLANCE
              </h2>
              <p className="text-gray-700 text-base leading-relaxed">
                From one small field in Mayurbhanj to a growing movement for
                access and excellence in sports.
              </p>
            </div>

            {/* Timeline */}
            <div className="space-y-4">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className="bg-white/90 backdrop-blur rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-purple-300"
                >
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <h3 className="text-lg font-bold text-gray-800">
                      {item.year}
                    </h3>
                    <span
                      className={`px-3 py-0.5 rounded-full text-white font-semibold text-xs bg-gradient-to-r ${item.color} shadow`}
                    >
                      {item.title}
                    </span>
                  </div>
                  <p className="text-gray-700 text-sm leading-snug">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Quote */}
          <div className="text-center mt-10 max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-gray-700 font-semibold italic leading-relaxed">
              Our journey is about giving every child{" "}
              <span className="text-orange-600 font-bold">a place to play</span>
              ,{" "}
              <span className="text-red-600 font-bold">a reason to believe</span>
              , and{" "}
              <span className="text-purple-600 font-bold">
                a chance to grow through sport
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
