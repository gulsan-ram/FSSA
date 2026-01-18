import { ArrowUpRight, Calendar } from "lucide-react";

const latestNewsData = {
  featured: {
    title: "Rohit Kumar Marndi Shines at SGFI U-17 National Archery Championship",
    description: `A historic start to the year.

Rohit Kumar Marandi delivers a standout performance at the 69th SGFI U-17 National Archery Championship 2026, clinching 3 Gold and 1 Silver medals on the national stage in Hotwar, Ranchi (Jharkhand).

His consistency and composure on the shooting line bring pride to Odisha and mark a defining milestone for Future Star Sports Academy.
A strong beginning. A focused journey ahead.`,
    date: "5–10 January 2026",
    category: "National Achievement",
    image: "/Images/Rohit.jpeg",
  },

  list: [
    {
      title: "Two More Future Star Athletes Selected for SGFI U-17 Nationals",
      date: "December 2025",
      image: "/Images/kho kho sgfi.jpeg",
    },
    {
      title: "Maharaja 7s Rugby: Girls Champions | Boys Runners-Up",
      date: "13–14 December 2025",
      image: "/Images/Maharaja 7s.jpeg",
    },
    {
      title: "Georgia 7s Rugby: Girls Team Crowned Champions in Kolkata",
      date: "November 2025",
      image: "/Images/Georgida.JPG",
    },
    {
      title:
        "Sandhyarani Tudu Selected for India Senior Women’s Team – Asia Rugby Emirates 7s Series 2025",
      date: "2025",
      image: "/Images/sandhya.jpeg",
    },
  ],
};

export default function LatestNews() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-28">
      {/* Section Header */}
      <div className="flex items-end justify-between mb-16">
        <div>
          <p className="text-sm uppercase tracking-widest text-orange-600 mb-3">
            Updates & Achievements
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
            Latest <span className="text-orange-600">Updates</span>
          </h2>
        </div>

        <button className="hidden md:flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full border border-gray-300 hover:bg-gray-900 hover:text-white transition">
          View All News <ArrowUpRight size={16} />
        </button>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Featured News */}
        <article className="lg:col-span-2 group relative rounded-[30px] overflow-hidden shadow-2xl">
          <img
            src={latestNewsData.featured.image}
            alt={latestNewsData.featured.title}
            className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

          <div className="absolute bottom-0 p-10 text-white">
            <span className="inline-block mb-4 px-4 py-1 text-xs font-semibold rounded-full bg-orange-600">
              {latestNewsData.featured.category}
            </span>

            <h3 className="text-2xl md:text-3xl font-bold leading-snug mb-4">
              {latestNewsData.featured.title}
            </h3>

            <p className="text-sm text-gray-200 max-w-xl mb-6 whitespace-pre-line">
              {latestNewsData.featured.description}
            </p>

            <div className="flex items-center gap-4 text-xs text-gray-300">
              <Calendar size={14} />
              <span>{latestNewsData.featured.date}</span>
            </div>
          </div>
        </article>

        {/* News List */}
        <div className="flex flex-col gap-6">
          {latestNewsData.list.map((news, index) => (
            <article
              key={index}
              className="group flex gap-5 p-5 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-lg transition"
            >
              <img
                src={news.image}
                alt={news.title}
                className="w-28 h-20 rounded-xl object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div>
                <p className="text-xs text-gray-400 mb-1">{news.date}</p>
                <h4 className="text-sm font-semibold text-gray-900 leading-snug group-hover:text-orange-600 transition">
                  {news.title}
                </h4>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

