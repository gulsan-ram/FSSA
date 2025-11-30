import React from "react";

export default function Aarambh() {
  return (
    <div className="w-full min-h-screen bg-orange-50 font-sans">
      {/* Header Image */}
      <div className="relative w-full h-[420px] overflow-hidden">
        <img
          src="/Images/Aarahambh.jpeg"
          alt="Aarambh Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-orange-700/70 flex items-end justify-center pb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-wide drop-shadow-md">
            AARAMBH
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-orange-700">
          PROJECT AARAMBH: WHERE EVERY CHILD'S PLAY BEGINS
        </h2>

        <p className="text-gray-700 leading-relaxed mb-10">
          Aarambh is FSSA’s community sports program that helps rural and tribal villages
          build a culture of daily play and inclusion. It turns open spaces into structured
          sports centers run by local youth, ensuring that children — especially girls — can
          learn, play, and grow with confidence.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Box - How Aarambh Works */}
          <div className="space-y-6">
            <div className="p-6 rounded-xl shadow-md border bg-white hover:shadow-lg transition">
              <h3 className="font-bold text-lg text-orange-700 mb-3">
                Community Sports Centers
              </h3>
              <p className="text-gray-700">
                Local grounds revived and run by Aarambh Mitras (trained village youth).
              </p>
            </div>

            <div className="p-6 rounded-xl shadow-md border bg-white hover:shadow-lg transition">
              <h3 className="font-bold text-lg text-orange-700 mb-3">
                Structured Play Sessions
              </h3>
              <p className="text-gray-700">
                Children play 5–6 days a week in games like Kho-Kho, Kabaddi, and Football with structured curriculum.
              </p>
            </div>

            <div className="p-6 rounded-xl shadow-md border bg-white hover:shadow-lg transition">
              <h3 className="font-bold text-lg text-orange-700 mb-3">
                Life Skills and Inclusion
              </h3>
              <p className="text-gray-700">
                Sessions include teamwork, gender inclusion, reflection, and confidence-building.
              </p>
            </div>

            <div className="p-6 rounded-xl shadow-md border bg-white hover:shadow-lg transition">
              <h3 className="font-bold text-lg text-orange-700 mb-3">
                Local Leadership and Events
              </h3>
              <p className="text-gray-700">
                Monthly Khel Melas bring families and panchayats together to celebrate sport.
              </p>
            </div>
          </div>

          {/* Right Box - Impact */}
          <div className="p-6 rounded-xl shadow-md border bg-white space-y-4 hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-3 text-orange-700">Impact at a Glance</h3>

            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>200+ children playing regularly across Aarambh centers.</li>
              <li>50% girls participation ensuring inclusion.</li>
              <li>3 sports centers in Bhuli with safe play spaces.</li>
              <li>3 active village sports committees.</li>
              <li>Strong parent participation in events.</li>
              <li>20+ promising athletes selected for advanced training.</li>
            </ul>

            <div className="pt-4 space-y-4 border-t">
              <blockquote className="text-gray-700 italic">
                “Before Aarambh, I played only when no one was watching. Now I captain my school team.”
              </blockquote>
              <p className="text-sm font-semibold text-orange-700">— Girl Participant</p>

              <blockquote className="text-gray-700 italic">
                “At first, I was worried about my daughter playing outside. Today, I stand in the front row cheering for her.”
              </blockquote>
              <p className="text-sm font-semibold text-orange-700">— Parent</p>

              <blockquote className="text-gray-700 italic">
                “Sports has brought our village together. When children play, the community feels proud.”
              </blockquote>
              <p className="text-sm font-semibold text-orange-700">— PRI Member</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

