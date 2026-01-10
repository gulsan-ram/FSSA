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
          Aarambh: Early Play and Community Confidence
        </h2>

        {/* Intro */}
        <p className="text-gray-700 leading-relaxed mb-10">
          Aarambh brings safe and joyful play spaces to communities where children
          have limited access to sports. We run three Aarambh centers in Jharkhand,
          where trained youth mentors guide daily play sessions. Through regular
          play, children build confidence, trust in themselves, and a strong sense
          of belonging within their community.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Section */}
          <div className="space-y-6">
            <div className="p-6 rounded-xl shadow-md border bg-white hover:shadow-lg transition">
              <h3 className="font-bold text-lg text-orange-700 mb-3">
                Safe Community Play Spaces
              </h3>
              <p className="text-gray-700">
                Open village grounds are transformed into safe, inclusive, and
                welcoming play spaces for children.
              </p>
            </div>

            <div className="p-6 rounded-xl shadow-md border bg-white hover:shadow-lg transition">
              <h3 className="font-bold text-lg text-orange-700 mb-3">
                Guided Daily Play Sessions
              </h3>
              <p className="text-gray-700">
                Trained youth mentors conduct daily sessions that focus on fun,
                participation, and movement-based learning.
              </p>
            </div>

            <div className="p-6 rounded-xl shadow-md border bg-white hover:shadow-lg transition">
              <h3 className="font-bold text-lg text-orange-700 mb-3">
                Confidence Through Play
              </h3>
              <p className="text-gray-700">
                Children learn to move freely, trust themselves, and gain
                confidence through structured play.
              </p>
            </div>

            <div className="p-6 rounded-xl shadow-md border bg-white hover:shadow-lg transition">
              <h3 className="font-bold text-lg text-orange-700 mb-3">
                Community Belonging
              </h3>
              <p className="text-gray-700">
                Aarambh strengthens community bonds by bringing children,
                families, and mentors together through sport.
              </p>
            </div>
          </div>

          {/* Right Section - Impact */}
          <div className="p-6 rounded-xl shadow-md border bg-white space-y-4 hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-3 text-orange-700">
              Impact at a Glance
            </h3>

            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>3 Aarambh centers running across Jharkhand.</li>
              <li>200+ children participating in regular play.</li>
              <li>Daily sessions led by trained youth mentors.</li>
              <li>Improved confidence and participation among girls.</li>
              <li>Stronger community engagement around sport.</li>
            </ul>

            <div className="pt-4 space-y-4 border-t">
              <blockquote className="text-gray-700 italic">
                “Aarambh helped me believe in myself. Playing every day makes me
                feel confident and happy.”
              </blockquote>
              <p className="text-sm font-semibold text-orange-700">
                — sandhyarani
              </p>

              
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

