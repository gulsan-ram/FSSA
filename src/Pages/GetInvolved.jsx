import React from "react";

export default function GetInvolved() {
  return (
    <div className="bg-[#FFE5EC] py-20 border-t">

      
      {/* HERO SECTION */}
<section
  className="w-full py-28 px-6 text-center bg-cover bg-center bg-no-repeat relative"
  style={{ backgroundImage: "url('/Images/gallery6.jpg')" }}
>
  {/* overlay */}
  <div className="absolute inset-0 bg-white/40"></div>

  
  <div className="relative">
    <h1 className="text-4xl md:text-6xl font-extrabold text-[#0b3b67]">
      Be Part of the Change
    </h1>

    <p className="mt-4 max-w-3xl mx-auto text-gray-800 text-lg md:text-xl leading-relaxed">
      Join FSSA to make sports a right, not a privilege. Volunteer, collaborate,
      or contribute to empower children through play, learning, and performance.
    </p>

    <div className="flex flex-wrap justify-center gap-4 mt-8">
      <button className="bg-[#e09604] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#d18600] transition">
        Become a Volunteer
      </button>
      <button className="bg-white text-[#0b3b67] border border-[#0b3b67] px-6 py-3 rounded-xl font-semibold hover:bg-orange-200 transition">
        Partner with Us
      </button>
    </div>
  </div>
</section>

      
      {/* VOLUNTEER SECTION */}
      <section className="max-w-5xl mx-auto py-16 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0b3b67]">
          Volunteer with FSSA
        </h2>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Become an Aarambh Mitra — help children play, learn, and grow through sports.
          Volunteers assist in community sessions, school activities, and training camps
          across Odisha and Jharkhand.
        </p>

        <button className="mt-6 bg-[#e09604] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#d18600] transition">
          Join as Volunteer
        </button>

        {/* FORM */}
        <form className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-8 rounded-2xl shadow-md">
          
          <input className="input" type="text" placeholder="Full Name" required />
          <input className="input" type="number" placeholder="Age" required />
          
          <input className="input" type="email" placeholder="Email Address" required />
          <input className="input" type="number" placeholder="Mobile Number" required />
          
          <input className="input" type="text" placeholder="City / District" required />

          <select className="input" required>
            <option>Area of Interest</option>
            <option>Coaching</option>
            <option>Events</option>
            <option>Documentation</option>
            <option>Mentorship</option>
            <option>Other</option>
          </select>

          <select className="input" required>
            <option>Availability</option>
            <option>Weekdays</option>
            <option>Weekends</option>
            <option>Full-time</option>
          </select>

          <textarea
            className="input md:col-span-2"
            rows="4"
            placeholder="Short Motivation (Optional)"
          />

          <button
            type="submit"
            className="md:col-span-2 bg-[#0b3b67] text-white font-semibold py-3 rounded-lg hover:bg-[#093055] transition"
          >
            Submit Application
          </button>
        </form>

        <p className="text-gray-600 text-sm mt-3">
          Email submissions go to: <b>future.ssa19@gmail.com</b>
        </p>
      </section>

      {/* PARTNERSHIP SECTION */}
      <section className="max-w-5xl mx-auto py-16 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0b3b67]">
          Collaborate Through CSR or Institutional Partnerships
        </h2>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Join hands with FSSA to build inclusive sports ecosystems. Partner with us for CSR
          projects, equipment or nutrition support, school programs, or athlete sponsorships.
        </p>

        <div className="flex flex-wrap gap-4 mt-6">
          <button className="bg-[#e09604] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#d18600] transition">
            Download Partnership Deck
          </button>

          <a
            href="mailto:future.ssa19@gmail.com"
            className="bg-white text-[#0b3b67] border border-[#0b3b67] px-6 py-3 rounded-lg font-semibold hover:bg-orange-200 transition"
          >
            Write to Us
          </a>
        </div>
      </section>

      {/* CAREERS SECTION */}
      <section className="max-w-5xl mx-auto py-16 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0b3b67]">
          Work with Purpose
        </h2>
        <p className="mt-3 text-gray-700 leading-relaxed">
          FSSA welcomes professionals and interns passionate about sports, education,
          and youth development.
        </p>

        <a
          href="mailto:careers@futurestarsports.org"
          className="inline-block mt-6 bg-[#e09604] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#d18600] transition"
        >
          Apply Now
        </a>
      </section>

      {/* CTA BANNER */}
      <section className="w-full bg-[#0b3b67] text-white py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Every Step Counts</h2>
        <p className="mt-3 max-w-2xl mx-auto">
          Your time, ideas, or support can help shape India’s grassroots sports movement.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <button className="cta-btn">Volunteer</button>
          <button className="cta-btn">Partner</button>
          <button className="cta-btn">Join Team</button>
        </div>
      </section>
    </div>
  );
}

