import React from "react";
import { Instagram ,Facebook ,Linkedin ,Youtube } from 'lucide-react';


export default function Contact() {
  return (
    <div className="bg-[#D5EBDA] min-h-screen pt-24 pb-16 px-6 md:px-12 lg:px-24 font-[Poppins]">


      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Let’s Connect
        </h1>
        <p className="mt-3 text-gray-700 text-lg max-w-2xl mx-auto">
          Reach out to us for partnerships, volunteer opportunities, or general inquiries.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* Contact Form */}
        <div className="bg-white shadow-md rounded-xl p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Form</h2>

          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none"
                placeholder="Enter your name"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">Email Address</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">Subject</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none"
                placeholder="Subject"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">Message</label>
              <textarea
                rows="5"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none"
                placeholder="Your message..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 text-white font-semibold py-3 rounded-lg hover:bg-orange-600 transition"
            >
              Send Message
            </button>

            <p className="text-sm text-gray-500 mt-2">
              After submitting, you will see:  
              <span className="font-medium">“Thank you for contacting us. We’ll get back to you soon.”</span>
            </p>
          </form>
        </div>

        {/* Contact Info + Map */}
        <div className="space-y-6">

          {/* Contact Info */}
          <div className="bg-white shadow-md rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Direct Contact</h2>

            <p className="text-gray-800"><strong>📍 Address:</strong><br />
              Future Star Sports Academy, Baripada, Mayurbhanj, Odisha
            </p>

            <p className="text-gray-800 mt-3">
              <strong>📞 Phone:</strong> +91- 89176 44680
            </p>

            <p className="text-gray-800 mt-3">
              <strong>📧 Email:</strong> future.ssa19@gmail.com
            </p>

            <div className="mt-6">
              <h3 className="font-semibold text-gray-900 mb-2">Follow Us</h3>
              <div className="flex items-center gap-4 text-xl text-gray-700">
                <a href="https://www.facebook.com/future.ssa.in/" target="_blank" className="hover:text-orange-500"> <Facebook size={16} color="#1083da" /> </a>
                <a href="https://www.instagram.com/futurestarsportsacademy/?igsh=azk5YmFlNWpyczBx#" target="_blank" className="hover:text-orange-500"><Instagram size={16} color="#da1068" /> </a>
                <a href="#" target="_blank" className="hover:text-orange-500"><Linkedin size={16} color="#1083da" /> </a>
                <a href="https://www.youtube.com/@futurestarsportsacademy?si=NvWVLIcQsFR8hoSb" target="_blank" className="hover:text-orange-500"><Youtube size={16} color="#da1010" /></a>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="overflow-hidden rounded-xl shadow-md">
            <iframe
              title="FSSA Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.071746887315!2d86.721!3d21.937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDU2JzExLjAiTiA4NsKwNDMnMTUuNiJF!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="330"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>

        </div>
      </div>
    </div>
  );
}

