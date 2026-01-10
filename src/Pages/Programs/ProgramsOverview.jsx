import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function ProgramsOverview() {
  return (
    <div className="w-full bg-[#FFF7ED] font-sans">

      {/* HERO SECTION */}
      <section className="relative h-[420px] w-full overflow-hidden">
        <img
          src="/Images/Lakshya.jpeg"
          alt="FSSA Programs"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#0b3b67]/90 to-transparent flex flex-col justify-center px-10 md:px-20">
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
            Play. Learn. Perform.
          </h1>

          <p className="text-lg md:text-xl text-white/90 max-w-2xl mt-4">
            Future Star Sports Academy (FSSA) creates a continuous development
            ecosystem — from community playgrounds to residential excellence —
            enabling young athletes to dream, grow, and succeed.
          </p>

          <Link
            to="/about-fssa"
            className="mt-6 px-6 py-3 bg-[#d97706] text-white font-semibold rounded-xl w-fit shadow-md hover:bg-[#b85f04] transition"
          >
            Explore Our Model
          </Link>
        </div>
      </section>

      {/* MODEL OVERVIEW */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Our Model — From Playgrounds to Podiums
        </h2>

        <p className="text-gray-700 max-w-4xl leading-relaxed mb-10">
          FSSA’s four-tier model connects community participation, school
          engagement, residential excellence, and sustainability through sport.
          Each stage builds on the other to nurture young athletes from early
          play to national-level performance.
        </p>

        {/* PROGRAM CARDS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* AARAMBH */}
          <Link
            to="/programs/aarambh"
            className="group bg-white rounded-3xl p-8 shadow-[0_4px_25px_rgba(0,0,0,0.06)]
                     hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]
                     hover:-translate-y-2 transition-all duration-300 border border-gray-200"
          >
            {/* Professional Icon */}
            <div className="relative h-16 w-16 flex items-center justify-center mb-6">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#0b3b67]/20 to-[#0b3b67]/5 backdrop-blur-sm border border-white/40 shadow-md"></div>
              <div className="absolute inset-0 rounded-2xl border border-[#0b3b67]/20"></div>
              <img src="/Images/Aarahambh.jpeg" alt="" className="relative h-10 z-10 object-contain" />
            </div>

            <h3 className="font-semibold text-2xl text-gray-900 tracking-tight">Aarambh</h3>

            <p className="text-gray-600 mt-3 leading-relaxed">
              Community sports centers for early play and participation.
            </p>

            <div className="mt-6 flex items-center text-[#0b3b67] font-medium">
              Explore <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" size={20} />
            </div>
          </Link>

          {/* UDAAN */}
          <Link
            to="/programs/udaan"
            className="group bg-white rounded-3xl p-8 shadow-[0_4px_25px_rgba(0,0,0,0.06)]
                     hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]
                     hover:-translate-y-2 transition-all duration-300 border border-gray-200"
          >
            <div className="relative h-16 w-16 flex items-center justify-center mb-6">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#0b3b67]/20 to-[#0b3b67]/5 backdrop-blur-sm border border-white/40 shadow-md"></div>
              <div className="absolute inset-0 rounded-2xl border border-[#0b3b67]/20"></div>
              <img src="/Images/uddan.jpg" alt="" className="relative h-10 z-10 object-contain" />
            </div>

            <h3 className="font-semibold text-2xl text-gray-900 tracking-tight">Udaan</h3>

            <p className="text-gray-600 mt-3 leading-relaxed">
              School-based sports & life skills integrated into daily learning.
            </p>

            <div className="mt-6 flex items-center text-[#0b3b67] font-medium">
              Explore <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" size={20} />
            </div>
          </Link>

          {/* LAKSHYA */}
          <Link
            to="/programs/lakshya"
            className="group bg-white rounded-3xl p-8 shadow-[0_4px_25px_rgba(0,0,0,0.06)]
                     hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]
                     hover:-translate-y-2 transition-all duration-300 border border-gray-200"
          >
            <div className="relative h-16 w-16 flex items-center justify-center mb-6">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#0b3b67]/20 to-[#0b3b67]/5 backdrop-blur-sm border border-white/40 shadow-md"></div>
              <div className="absolute inset-0 rounded-2xl border border-[#0b3b67]/20"></div>
              <img src="/Images/Lakshya.jpeg" alt="" className="relative h-10 z-10 object-contain" />
            </div>

            <h3 className="font-semibold text-2xl text-gray-900 tracking-tight">Lakshya</h3>

            <p className="text-gray-600 mt-3 leading-relaxed">
              Residential excellence with training, nutrition & mentorship.
            </p>

            <div className="mt-6 flex items-center text-[#0b3b67] font-medium">
              Explore <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" size={20} />
            </div>
          </Link>

          {/* ABHYAS */}
          <Link
            to="/programs/abhyas"
            className="group bg-white rounded-3xl p-8 shadow-[0_4px_25px_rgba(0,0,0,0.06)]
                     hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]
                     hover:-translate-y-2 transition-all duration-300 border border-gray-200"
          >
            <div className="relative h-16 w-16 flex items-center justify-center mb-6">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#0b3b67]/20 to-[#0b3b67]/5 backdrop-blur-sm border border-white/40 shadow-md"></div>
              <div className="absolute inset-0 rounded-2xl border border-[#0b3b67]/20"></div>
              <img src="/Images/udaan.jpeg" alt="" className="relative h-10 z-10 object-contain" />
            </div>

            <h3 className="font-semibold text-2xl text-gray-900 tracking-tight">Abhyas</h3>

            <p className="text-gray-600 mt-3 leading-relaxed">
              Pay & Play sustainability model supporting grassroots athletes.
            </p>

            <div className="mt-6 flex items-center text-[#0b3b67] font-medium">
              Explore <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" size={20} />
            </div>
          </Link>

        </div>
      </section>

      {/* IMPACT SECTION */}
      <section className=" bg-[#FFF7ED]  py-20 border-t">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Our Collective Impact
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-gray-50 py-10 rounded-2xl shadow">
              <h3 className="text-4xl font-bold text-[#0b3b67]">1500+</h3>
              <p className="mt-3 text-gray-600">Children Reached</p>
            </div>

            <div className="text-center bg-gray-50 py-10 rounded-2xl shadow">
              <h3 className="text-4xl font-bold text-[#0b3b67]">50%</h3>
              <p className="mt-3 text-gray-600">Girls Participation</p>
            </div>

            <div className="text-center bg-gray-50 py-10 rounded-2xl shadow">
              <h3 className="text-4xl font-bold text-[#0b3b67]">200+</h3>
              <p className="mt-3 text-gray-600">Medals Won</p>
            </div>

            <div className="text-center bg-gray-50 py-10 rounded-2xl shadow">
              <h3 className="text-4xl font-bold text-[#0b3b67]">4</h3>
              <p className="mt-3 text-gray-600">International Athletes</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-[#0b3b67] text-white py-20 mt-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join the Movement. Support the Future of Sports.
          </h2>

          <p className="text-lg text-white/90 mb-10">
            Volunteers, coaches, and partners help create opportunities for children 
            to play, learn, and perform. Together, we can build India’s next generation 
            of champions.
          </p>

          <div className="flex justify-center gap-6 flex-wrap">
            <Link
              to="/get-involved"
              className="px-6 py-3 bg-[#d97706] rounded-xl font-semibold shadow hover:bg-[#b85f04] transition"
            >
              Volunteer with FSSA
            </Link>

            <Link
              to="/contact"
              className="px-6 py-3 border-2 border-white rounded-xl font-semibold hover:bg-white hover:text-[#0b3b67] transition"
            >
              Partner with Us
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
} 






