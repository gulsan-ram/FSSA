import React from "react";
import { FaBalanceScale, FaFemale, FaChalkboardTeacher, FaHeartbeat } from "react-icons/fa";

const stats = [
  {
    icon: <FaBalanceScale size={32} className="text-[#3766ff]" />,
    text: <>Only <b>1 in 10</b> rural children ever get access to structured sports activities <span className="text-xs text-gray-600">(ASER 2022)</span></>
  },
  {
    icon: <FaFemale size={32} className="text-[#168ADE]" />,
    text: <>Girls’ participation in school sports <b>drops by 70%</b> after age 13 <span className="text-xs text-gray-600">(UNESCO 2023)</span></>
  },
  {
    icon: <FaChalkboardTeacher size={32} className="text-[#6244ef]" />,
    text: <>Over <b>70%</b> of government schools do not have a qualified PE teacher <span className="text-xs text-gray-600">(NSSO 2021)</span></>
  },
  {
    icon: <FaHeartbeat size={32} className="text-[#13cfe7]" />,
    text: <>Students engaged in sports are <b>25% more</b> likely to stay in school, with <b>better health and confidence</b> <span className="text-xs text-gray-600">(NCERT 2021)</span></>
  },
];

const placeholders = [
  "https://via.placeholder.com/400x250/3766ff/fff?text=Sport+1",
  "https://via.placeholder.com/400x250/168ADE/fff?text=Sport+2",
  "https://via.placeholder.com/400x250/6244ef/fff?text=Sport+3",
];

const Wsport = () => (
  <section className="flex flex-col md:flex-row bg-gradient-to-br from-[#f6fbff] via-white to-[#e6ebfa] rounded-3xl shadow-xl overflow-hidden my-8 ring-2 ring-[#3766ff]/10 border border-[#c3d2ff]/40">
    {/* Left Content */}
    <div className="w-full md:w-3/5 px-6 py-10 md:py-16 lg:px-14 flex flex-col justify-center">
      <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-[#3766ff] via-[#168ADE] to-[#6244ef] mb-6 uppercase tracking-wide drop-shadow">
        Why Sports Matter?
      </h2>
      <p className="mb-6 text-[1.15rem] text-[#313046] font-semibold leading-relaxed md:pr-4">
        In the villages and small towns where we work, children have the same spark, energy, and dreams as any athlete in the world but most never get the chance to play.
      </p>
      <h3 className="font-semibold text-xl mb-2 text-[#168ADE]">The National Picture: Sports in India Today</h3>
      {/* Stat info cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="relative flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-tr from-[#e6ebfa]/80 via-[#f6fbff]/60 to-[#dbeefe]/40 border-[1.5px] border-[#b1c6f7]/50 shadow-md hover:scale-[1.03] hover:shadow-lg transition-all duration-300 group"
          >
            <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full border-2 border-[#3766ff]/30 shadow group-hover:ring-2 group-hover:ring-[#168ADE]/20">
              {stat.icon}
            </div>
            <div className="font-semibold text-[#232e40] leading-snug text-base">{stat.text}</div>
          </div>
        ))}
      </div>
      <div className="bg-[#f5fafd] border-l-4 border-[#168ADE] rounded-lg px-4 py-3 text-[#3766ff] font-bold italic mb-7 text-center shadow-sm">
        “India aims to become a global sporting nation by 2036—but without strengthening grassroots sport, this ambition cannot be realised.”
      </div>
      <div className="bg-gradient-to-l from-[#f8faff] to-[#c3d2ff]/40 border-l-4 border-[#3766ff] rounded-md px-5 py-4 mb-1 text-[#232e40] shadow">
        <h4 className="font-semibold mb-2 text-[#168ADE]">The Urgency</h4>
        <ul className="space-y-2 text-base leading-relaxed">
          <li>
            India celebrates sporting achievements at the top, but <span className="font-bold text-[#3766ff]">millions at the bottom</span> are left behind.
          </li>
          <li>
            <span className="font-bold">Early access</span> and <span className="font-bold">structured pathways</span> matter for rural/tribal talent.
          </li>
          <li>
            <span className="font-bold">Girls & first-gen learners</span> are most <span className="font-bold text-[#168ADE]">excluded</span> from sports programs.
          </li>
          <li>
            <span className="font-bold">Sports</span> build confidence, community, and promote equality.
          </li>
          <li>
            Every year of inaction: more <span className="font-bold text-[#3766ff]">talent lost</span>.
          </li>
        </ul>
      </div>
    </div>
    {/* Right - Modern Image Stripes */}
    <div className="w-full md:w-2/5 grid grid-cols-3 md:grid-cols-1 gap-1 md:gap-4 h-auto md:h-auto bg-gradient-to-l from-[#f6fbff] to-[#e6ebfa]/40">
      {placeholders.map((img, i) => (
        <div key={i} className="relative h-40 md:h-64 flex items-end overflow-hidden group rounded-2xl shadow-lg border-2 border-[#c3d2ff]/30">
          <img
            src={img}
            alt=""
            className="object-cover w-full h-full group-hover:scale-105 transition-all duration-500"
            style={{ borderRadius: i === 1 ? "1.1rem" : "0.7rem" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#3766ff]/70 via-transparent to-transparent mix-blend-multiply pointer-events-none"></div>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white/70 text-[#168ADE] text-xs px-3 py-1 rounded-full shadow group-hover:bg-[#168ADE] group-hover:text-white font-bold uppercase tracking-wide transition-all border-2 border-[#c3d2ff]" style={{ letterSpacing: "0.08em" }}>
            Play. Grow. Shine.
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Wsport;

