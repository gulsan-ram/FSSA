import React, { useEffect, useRef, useState } from "react";
import { Users, Award, Target, Heart, Lightbulb, Shield } from "lucide-react";

export default function Team() {
  const [visibleCards, setVisibleCards] = useState([]);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observers = cardRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleCards((prev) => [...new Set([...prev, index])]);
            }
          });
        },
        { threshold: 0.2 }
      );

      if (ref) observer.observe(ref);
      return observer;
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  const teamData = [

  /* =========================
     1. FOUNDER (Top Priority)
  ========================== */
  {
    category: "Founder",
    icon: Users,
    title: "Dibyaranjan Das",
    subtitle: "Founder & Director",
    color: "from-blue-600 to-blue-700",
    description:
      "Recognized by the President of India for pioneering grassroots sports development.",
    image: "/Images/founder.jpeg",
  },

  /* =========================
     2. CO-FOUNDERS (5 Members)
  ========================== */
  {
    category: "Co-Founders",
    icon: Award,
    title: "Dharmananda Bhoi",
    subtitle: "Co-Founders",
    color: "from-emerald-600 to-emerald-700",
    description:
      "Experts in rugby, archery, swimming, athletics, football & life skills training.",
    image: "/Images/Dharmananda Bhoi.jpg",
  },
  {
    category: "Co-Founders",
    icon: Award,
    title: "Bikram Sahu",
    subtitle: "Co-Founders",
    color: "from-emerald-600 to-emerald-700",
    description:
      "Working across child safety, community engagement & program expansion.",
    image: "/Images/BIKRAM SAHU.jpg",
  },
  {
    category: "Co-Founders",
    icon: Award,
    title: "Gobinda Murmu",
    subtitle: "Co-Founders",
    color: "from-emerald-600 to-emerald-700",
    description:
      "Focused on training innovation & grassroots athlete development.",
    image: "/Images/GOBINDA MURMU.jpg",
  },
  {
    category: "Co-Founders",
    icon: Award,
    title: "Rupali Soren",
    subtitle: "Co-Founders",
    color: "from-emerald-600 to-emerald-700",
    description:
      "Supporting operations, planning & coach development pathways.",
    image: "/Images/RUPALI SOREN.jpg",
  },
  {
    category: "Co-Founders",
    icon: Award,
    title: "Shanti Murmu",
    subtitle: "Co-Founders",
    color: "from-emerald-600 to-emerald-700",
    description:
      "Driving strategic partnerships & sports curriculum enhancement.",
    image: "/Images/SHANTI MURMU.jpg",
  },

  /* =========================
     3. ADVISORS (3 Members)
  ========================== */
  {
    category: "Advisors",
    icon: Target,
    title: "Amar Sethi",
    subtitle: "Advisors",
    color: "from-violet-600 to-violet-700",
    description:
      "Advises on long-term planning & high-performance athlete pathways.",
    image: "/Images/AMAR SETHI.jpg",
  },
  {
    category: "Advisors",
    icon: Target,
    title: "Mangal Hansdah",
    subtitle: "Advisors",
    color: "from-violet-600 to-violet-700",
    description:
      "Supports training frameworks & sport-specific systems.",
    image: "/Images/MANGAL HANSDAH.jpg",
  },
  {
    category: "Advisors",
    icon: Target,
    title: "Somanath Singh",
    subtitle: "Advisors",
    color: "from-violet-600 to-violet-700",
    description:
      "Guides organizational growth & collaboration planning.",
    image: "/Images/SOMANATH SINGH.jpg",
  },

  /* ==========================================
     4. BOARD ROLES (Secretary & Leadership)
  ========================================== */
  {
    category: "Board",
    icon: Heart,
    title: "President",
    subtitle: "Governance Lead",
    color: "from-rose-600 to-rose-700",
    description:
      "Oversees governance, ensures organizational mission & direction.",
    image: "/Images/president.jpeg",
  },
  {
    category: "Board",
    icon: Heart,
    title: "Himanshu Mohanato",
    subtitle: "Vice President",
    color: "from-rose-600 to-rose-700",
    description:
      "Supports president in organizational decision-making.",
    image: "/Images/Himanshu.png",
  },
  {
    category: "Board",
    icon: Lightbulb,
    title: "Secretary",
    subtitle: "Administrative Head",
    color: "from-amber-600 to-amber-700",
    description:
      "Manages documentation, compliance & administrative operations.",
    image: "/Images/secretary11.png",
  },
  {
    category: "Board",
    icon: Shield,
    title: "Chinmay Kumar Mohanta",
    subtitle: "Joint Secretary",
    color: "from-cyan-600 to-cyan-700",
    description:
      "Supports secretary in strategic administration & coordination.",
    image: "/Images/Chimnay.png",
  },
];

  

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 py-12 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-orange-500 mb-4">
            Our Team
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-violet-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            Behind every athlete's success is a team of visionaries, coaches, mentors, and leaders.
          </p>
        </div>

        {/* TEAM GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamData.map((member, index) => {
            const Icon = member.icon;
            const isVisible = visibleCards.includes(index);
            const flipped = visibleCards.includes(`flip-${index}`);

            return (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                className={`transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="w-full h-80 perspective">
                  <div
                    className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d cursor-pointer ${
                      flipped ? "rotate-y-180" : ""
                    }`}
                    onClick={() => {
                      setVisibleCards((prev) => {
                        const set = new Set(prev);
                        if (set.has(`flip-${index}`)) set.delete(`flip-${index}`);
                        else set.add(`flip-${index}`);
                        return [...set];
                      });
                    }}
                  >
                    {/* FRONT – PREMIUM */}
                    <div className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden shadow-xl border border-white group">
                      <img
                        src={member.image}
                        alt={member.title}
                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                      />

                      {/* LUXURY OVERLAY */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-80 transition-all duration-500"></div>

                      {/* PREMIUM HOVER BUTTON */}
                      <div className="absolute inset-0 flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100 transition-all duration-700 transform group-hover:translate-y-0 translate-y-4">
                        <button className="px-6 py-2 bg-white/20 backdrop-blur-md text-white font-medium border border-white/40 rounded-full shadow-lg hover:bg-white/30 transition-all duration-300">
                          View Profile
                        </button>
                      </div>

                      {/* TEXT */}
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="text-xl font-bold text-white drop-shadow-xl">
                          {member.title}
                        </h3>
                        <p
                          className={`text-sm font-semibold bg-gradient-to-r ${member.color} bg-clip-text text-transparent`}
                        >
                          {member.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* BACK */}
                    <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl shadow-xl border border-white bg-gradient-to-br from-white to-gray-100 flex flex-col p-6">
                      <div className="flex justify-center mb-4">
                        <Icon className="w-12 h-12 text-slate-800" />
                      </div>

                      <h3 className="text-xl font-bold text-slate-800 text-center">
                        {member.title}
                      </h3>

                      <p
                        className={`text-sm font-semibold bg-gradient-to-r ${member.color} bg-clip-text text-transparent text-center mb-4`}
                      >
                        {member.subtitle}
                      </p>

                      <p className="text-slate-600 text-sm leading-relaxed text-center">
                        {member.description}
                      </p>

                      <div className="mt-auto pt-4">
                        <div className={`w-full h-1 bg-gradient-to-r ${member.color} rounded-full`}></div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <div className="inline-block bg-white/40 backdrop-blur-xl rounded-2xl p-8 border border-white shadow-lg">
            <h3 className="text-3xl font-bold text-slate-800 mb-3">Join Our Team</h3>
            <p className="text-slate-600 mb-6 max-w-2xl">
              We're always looking for passionate individuals who want to make a difference.
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300">
              Get Involved
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

