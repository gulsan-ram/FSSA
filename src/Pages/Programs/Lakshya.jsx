import React from "react";

export default function Lakshya() {
  return (
    <div className="w-full min-h-screen bg-orange-50 font-sans">
      
      {/* Header Image */}
      <div className="relative w-full h-[420px] overflow-hidden">
        <img
          src="/Images/Lakshya.jpeg"
          alt="Laksha Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-orange-700/70 flex items-end justify-center pb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-wide drop-shadow-md">
            LAKSHA
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-orange-700">
          PROJECT LAKSHA: IDENTIFYING AND NURTURING RURAL SPORTS TALENT
        </h2>

        <p className="text-gray-700 leading-relaxed mb-10">
          Laksha is FSSA’s grassroots talent identification and advanced sports 
          training program focused on children from tribal and rural communities. 
          The project nurtures potential athletes through structured coaching, 
          nutrition support, mentorship, and pathways to district, state, and national competitions.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          
          {/* Left Section */}
          <div className="space-y-6">
            <div className="p-6 rounded-xl shadow-md border bg-white hover:shadow-lg transition">
              <h3 className="font-bold text-lg text-orange-700 mb-3">Talent Identification Camps</h3>
              <p className="text-gray-700">
                Conducts village and school-level scouting to identify children with strong physical potential and sporting interest.
              </p>
            </div>

            <div className="p-6 rounded-xl shadow-md border bg-white hover:shadow-lg transition">
              <h3 className="font-bold text-lg text-orange-700 mb-3">Advanced Sports Coaching</h3>
              <p className="text-gray-700">
                Provides specialized training in athletics, football, kabaddi, volleyball, and multi-sport conditioning.
              </p>
            </div>

            <div className="p-6 rounded-xl shadow-md border bg-white hover:shadow-lg transition">
              <h3 className="font-bold text-lg text-orange-700 mb-3">Nutrition & Fitness Support</h3>
              <p className="text-gray-700">
                Ensures athletes receive balanced nutrition, hydration, and regular fitness monitoring for long-term development.
              </p>
            </div>

            <div className="p-6 rounded-xl shadow-md border bg-white hover:shadow-lg transition">
              <h3 className="font-bold text-lg text-orange-700 mb-3">Competition Pathways</h3>
              <p className="text-gray-700">
                Helps athletes participate in block, district, and state-level competitions with coaching, travel, and mentoring support.
              </p>
            </div>
          </div>

          {/* Right - Impact Section */}
          <div className="p-6 rounded-xl shadow-md border bg-white space-y-4 hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-3 text-orange-700">Impact at a Glance</h3>

            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>500+ children engaged through village and school talent drives.</li>
              <li>150+ athletes receiving structured weekly sports coaching.</li>
              <li>Several children qualifying for district-level athletic and football events.</li>
              <li>Improved strength, discipline, and confidence among rural athletes.</li>
              <li>Greater participation of girls in competitive sports.</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}

