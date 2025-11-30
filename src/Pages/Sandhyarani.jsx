import React from "react";
import { Link } from "react-router-dom";

export default function Sandhyarani() {
  return (
    <div
      className="min-h-screen py-20 px-6 flex justify-center"
      style={{
        background: "linear-gradient(135deg, #fdf6f0, #f7efff, #fdfbf4)",
      }}
    >
      <div className="max-w-4xl w-full bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl p-10 border border-white/60">
        
        {/* IMAGE */}
        <img
          src="/Images/sandhya.jpeg"
          className="w-full h-[340px] object-cover rounded-2xl shadow-md"
          alt="Sandhyarani Tudu"
        />

        {/* TITLE */}
        <h1 className="text-4xl font-bold text-[#2d416a] mt-10 leading-snug">
          Sandhyarani Tudu – Rising From Grassroots to National Rugby Camp
        </h1>

        <p className="text-md text-[#d49b36] font-semibold mt-2 tracking-wide">
          Future Star Sports Academy • Impact Story
        </p>

        {/* CONTENT */}
        <div className="text-gray-700 leading-relaxed mt-8 space-y-5 text-lg">
          <p>
            Sandhyarani Tudu, from rural Mayurbhanj, began her journey with
            FSSA as a shy and soft-spoken student. Coming from a tribal
            community, she had limited access to structured sports training —
            but her natural athletic ability and discipline stood out early.
          </p>

          <p>
            Through <strong>Aarambh</strong> and <strong>Udaan</strong>, she
            flourished — not just as an athlete but as a leader. Her
            participation in district-level events strengthened her confidence
            and pushed her to pursue sports seriously.
          </p>

          <p>
            Today, Sandhya mentors children in her village, becoming a guiding
            light for young athletes and inspiring girls to break barriers and
            dream fearlessly.
          </p>

          <p className="italic">
            “Sports transformed my life — now I want to help others grow the
            same way,” she says.
          </p>

          <p>
            Her journey beautifully reflects FSSA’s mission: empowering youth
            through sports, discipline, and leadership.
          </p>
        </div>

        {/* BACK BUTTON */}
        <Link
          to="/impact"
          className="inline-block mt-12 bg-[#2d416a] text-white px-7 py-3 rounded-xl font-semibold shadow-md hover:bg-[#243658] transition"
        >
          ← Back to Impact
        </Link>
      </div>
    </div>
  );
}
