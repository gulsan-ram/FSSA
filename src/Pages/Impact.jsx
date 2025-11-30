import React from "react";
import { Link } from "react-router-dom";

export default function Impact() {
  const stories = [
    {
      name: "Sunita",
      prog: "Aarambh",
      text: "From Village to National Camp Sunita's Big Leap.",
      img: "/Images/sunita.jpg",
      link: "/sunita-story",
    },
    {
      name: "Parbati Hasdah",
      prog: "Udaan",
      text: "From Hostel Dreams to International caps.",
      img: "/Images/parbati.jpg",
      link: "/parbati-story",
    },
    {
      name: "Ratikanta Hembram",
      prog: "Lakshya",
      text: "Ratikanta Hembram has got the opportunity to train at High Performance Center Bhubaneswar for swimming.",
      img: "/Images/Ratikanta.jpg",
      link: "/Ratikanta",
    },
    {
      name: "Sana Paikaray",
      prog: "Lakshya",
      text: "Sana Paikaray has got the opportunity to train at High Performance Center Bhubaneswar for swimming.",
      img: "/Images/Ratikanta.jpg",
      link: "/Sanap",
    },
  ];

  return (
    <div className="w-full bg-orange-50 text-[#0b3b67]">

      {/* -------------------------------------- */}
      {/* HERO SECTION */}
      {/* -------------------------------------- */}
      <section className="relative w-full h-[60vh] flex items-center justify-center text-center">
        <img
          src="/Images/impact.jpg"
          className="absolute inset-0 w-full h-full object-cover"
          alt="Impact Banner"
        />
        <div className="absolute inset-0 bg-[#0b3b67]/70"></div>

        <div className="relative z-10 px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white">
            Turning Potential into Performance
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
            FSSA empowers children and youth through sports by building access,
            confidence, and opportunity.
          </p>

          <div className="flex gap-4 justify-center mt-6 flex-wrap">
            <Link
              to="/athlete-stories"
              className="bg-[#e09604] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#c98503] transition"
            >
              Read Athlete Stories
            </Link>

            <Link
              to="/impact-report"
              className="bg-white text-[#0b3b67] px-6 py-3 rounded-xl font-semibold hover:bg-orange-100 transition"
            >
              View Annual Impact Report
            </Link>
          </div>
        </div>
      </section>

      {/* -------------------------------------- */}
      {/* IMPACT AT A GLANCE */}
      {/* -------------------------------------- */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Our Impact at a Glance
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 mt-12">
          {[
            { number: "1,500+", title: "Children Trained" },
            { number: "50%", title: "Girls Participation" },
            { number: "150+", title: "State & National Athletes" },
            { number: "4", title: "International Representation" },
            { number: "200+", title: "Medals Won" },
          ].map((metric, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md text-center hover:shadow-xl transition"
            >
              <h3 className="text-3xl md:text-4xl font-extrabold text-[#e09604]">
                {metric.number}
              </h3>
              <p className="text-gray-700 mt-2">{metric.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* -------------------------------------- */}
      {/* MODEL OF CHANGE */}
      {/* -------------------------------------- */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Our Model of Change
        </h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              title: "Access",
              desc: "Creating inclusive community play spaces through the Aarambh program.",
            },
            {
              title: "Learning",
              desc: "Integrating sports and life skills into schools through Udaan.",
            },
            {
              title: "Performance",
              desc: "Providing elite training and mentorship through Lakshya residential programs.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-bold text-[#0b3b67]">{item.title}</h3>
              <p className="mt-3 text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* -------------------------------------- */}
      {/* ATHLETE SPOTLIGHT */}
      {/* -------------------------------------- */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <img
            src="/Images/sandhya.jpeg"
            alt="Sandhya"
            className="rounded-3xl shadow-lg"
          />

          <div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Sandhya’s Journey — A National Rugby Camp Athlete
            </h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Sandhyarani Tudu joined FSSA’s Lakshya program at 15. With
              coaching, academic support, and mentorship, she earned a place in
              the India National Rugby Camp (2025).
            </p>

            <blockquote className="bg-orange-100 p-4 rounded-xl mt-6 italic border-l-4 border-[#e09604]">
              “We have talent; we just need opportunity.”
            </blockquote>

            <Link
              to="/sandhyarani-story"
              className="inline-block mt-6 bg-[#e09604] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#c98503] transition"
            >
              Read Full Story
            </Link>
          </div>
        </div>
      </section>

      {/* -------------------------------------- */}
      {/* STORIES OF CHANGE */}
      {/* -------------------------------------- */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Stories of Change
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {stories.map((story, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition overflow-hidden"
            >
              <img src={story.img} className="h-56 w-full object-cover" />

              <div className="p-6">
                <h3 className="text-xl font-bold">{story.name}</h3>
                <p className="text-sm text-[#e09604] font-semibold">
                  {story.prog}
                </p>
                <p className="mt-2 text-gray-700">{story.text}</p>

                <Link
                  to={story.link}
                  className="mt-4 inline-block text-[#0b3b67] font-semibold hover:text-[#e09604] transition"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Link
            to="/stories"
            className="bg-[#e09604] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#c98503] transition"
          >
            See All Stories
          </Link>
        </div>
      </section>

      {/* -------------------------------------- */}
      {/* REPORTS */}
      {/* -------------------------------------- */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Reports & Publications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {[
            { year: "2022-23", title: "Annual Impact Report", file: "Fssa Annual report_2022-2023.pdf" },
            { year: "2023-24", title: "Annual Impact Report", file: "Annual report_2023-24.pdf" },
            { year: "2024-25", title: "Annual Impact Report", file: "Annual-Reports_2024-2025_FSSA.pdf" },
          ].map((r, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-xl font-bold">{r.title}</h3>
              <p className="mt-1 text-gray-700">{r.year}</p>

              <a
                href={`/Reports/${r.file}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block bg-[#0b3b67] text-white px-4 py-2 rounded-lg hover:bg-[#092e58] transition"
              >
                Download PDF
              </a>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Link
            to="/reports"
            className="bg-[#e09604] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#c98503] transition"
          >
            View All Reports
          </Link>
        </div>
      </section>

      {/* -------------------------------------- */}
      {/* CTA */}
      {/* -------------------------------------- */}
      <section className="bg-[#0b3b67] text-white text-center px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold">
          Join the Movement. Empower Through Sport.
        </h2>

        <div className="flex justify-center gap-4 mt-8 flex-wrap">
          <Link
            to="/volunteer"
            className="bg-[#e09604] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#c98503] transition"
          >
            Volunteer with FSSA
          </Link>

          <Link
            to="/donate"
            className="bg-white text-[#0b3b67] px-6 py-3 rounded-xl font-semibold hover:bg-orange-100 transition"
          >
            Donate Now
          </Link>
        </div>
      </section>
    </div>
  );
}

