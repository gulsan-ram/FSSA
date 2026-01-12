import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SEO from "../../components/SEO";

export default function ProgramsOverview() {
  return (
    <>
      {/* ================= SEO ================= */}
      <SEO
        title="Programs | Future Star Sports Academy"
        description="Explore the four-tier sports development model of Future Star Sports Academy, from grassroots participation to high-performance residential training."
        canonical="https://futurestarsportsacademy.org/programs"
        image="/Images/Lakshya.jpeg"
      />

      <div className="w-full bg-[#FFF7ED] font-sans">

        {/* ================= HERO SECTION ================= */}
        <section className="relative h-[420px] w-full overflow-hidden">
          <img
            src="/Images/Lakshya.jpeg"
            alt="Future Star Sports Academy sports development programs"
            className="w-full h-full object-cover"
            loading="eager"
            fetchpriority="high"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#0b3b67]/90 to-transparent flex flex-col justify-center px-10 md:px-20">
            <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
              Play. Learn. Perform.
            </h1>

            <p className="text-lg md:text-xl text-white/90 max-w-2xl mt-4">
              Future Star Sports Academy creates a continuous development ecosystem —
              from community playgrounds to residential excellence — enabling young
              athletes to dream, grow, and succeed.
            </p>

            <Link
              to="/about-fssa"
              className="mt-6 px-6 py-3 bg-[#d97706] text-white font-semibold rounded-xl w-fit shadow-md hover:bg-[#b85f04] transition"
            >
              Explore Our Model
            </Link>
          </div>
        </section>

        {/* ================= MODEL OVERVIEW ================= */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Model — From Playgrounds to Podiums
          </h2>

          <p className="text-gray-700 max-w-4xl leading-relaxed mb-10">
            FSSA’s four-tier model connects community participation, school
            engagement, residential excellence, and sustainability through sport.
            Each stage builds on the other to nurture young athletes from early play
            to national-level performance.
          </p>

          {/* ================= PROGRAM CARDS ================= */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* ================= AARAMBH ================= */}
            <Link
              to="/programs/aarambh"
              className="group bg-white rounded-3xl p-8 shadow border
                         hover:shadow-lg hover:-translate-y-2 transition-all"
            >
              <img
                src="/Images/Aarahambh.jpeg"
                alt="Aarambh community sports program"
                className="h-10 mb-6 object-contain"
                loading="lazy"
                decoding="async"
              />

              <h3 className="font-semibold text-2xl text-gray-900">
                Aarambh
              </h3>

              <p className="text-gray-600 mt-3 leading-relaxed">
                Community sports centers for early play and participation.
              </p>

              <div className="mt-6 flex items-center text-[#0b3b67] font-medium">
                Explore
                <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={20} />
              </div>
            </Link>

            {/* ================= UDAAN ================= */}
            <Link
              to="/programs/udaan"
              className="group bg-white rounded-3xl p-8 shadow border
                         hover:shadow-lg hover:-translate-y-2 transition-all"
            >
              <img
                src="/Images/uddan.jpg"
                alt="Udaan school-based sports program"
                className="h-10 mb-6 object-contain"
                loading="lazy"
                decoding="async"
              />

              <h3 className="font-semibold text-2xl text-gray-900">
                Udaan
              </h3>

              <p className="text-gray-600 mt-3 leading-relaxed">
                School-based sports and life skills integrated into daily learning.
              </p>

              <div className="mt-6 flex items-center text-[#0b3b67] font-medium">
                Explore
                <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={20} />
              </div>
            </Link>

            {/* ================= LAKSHYA ================= */}
            <Link
              to="/programs/lakshya"
              className="group bg-white rounded-3xl p-8 shadow border
                         hover:shadow-lg hover:-translate-y-2 transition-all"
            >
              <img
                src="/Images/Lakshya.jpeg"
                alt="Lakshya residential high-performance program"
                className="h-10 mb-6 object-contain"
                loading="lazy"
                decoding="async"
              />

              <h3 className="font-semibold text-2xl text-gray-900">
                Lakshya
              </h3>

              <p className="text-gray-600 mt-3 leading-relaxed">
                Residential excellence with training, nutrition, and mentorship.
              </p>

              <div className="mt-6 flex items-center text-[#0b3b67] font-medium">
                Explore
                <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={20} />
              </div>
            </Link>

            {/* ================= ABHYAS ================= */}
            <Link
              to="/programs/abhyas"
              className="group bg-white rounded-3xl p-8 shadow border
                         hover:shadow-lg hover:-translate-y-2 transition-all"
            >
              <img
                src="/Images/udaan.jpeg"
                alt="Abhyas pay and play sports sustainability model"
                className="h-10 mb-6 object-contain"
                loading="lazy"
                decoding="async"
              />

              <h3 className="font-semibold text-2xl text-gray-900">
                Abhyas
              </h3>

              <p className="text-gray-600 mt-3 leading-relaxed">
                Pay & Play sustainability model supporting grassroots athletes.
              </p>

              <div className="mt-6 flex items-center text-[#0b3b67] font-medium">
                Explore
                <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={20} />
              </div>
            </Link>

          </div>
        </section>

        {/* ================= IMPACT SECTION ================= */}
        <section className="bg-[#FFF7ED] py-20 border-t">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              Our Collective Impact
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { value: "1500+", label: "Children Reached" },
                { value: "50%", label: "Girls Participation" },
                { value: "200+", label: "Medals Won" },
                { value: "4", label: "International Athletes" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="text-center bg-gray-50 py-10 rounded-2xl shadow"
                >
                  <h3 className="text-4xl font-bold text-[#0b3b67]">
                    {item.value}
                  </h3>
                  <p className="mt-3 text-gray-600">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= CTA SECTION ================= */}
        <section className="bg-[#0b3b67] text-white py-20 mt-20">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join the Movement. Support the Future of Sports.
            </h2>

            <p className="text-lg text-white/90 mb-10">
              Volunteers, coaches, and partners help create opportunities for
              children to play, learn, and perform. Together, we can build
              India’s next generation of champions.
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
    </>
  );
}

