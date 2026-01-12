import React, { useState } from "react";
import SEO from "../components/SEO";

export default function Donate() {
  const [amount, setAmount] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const presetAmounts = [500, 1000, 2500];

  const updateForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Redirect to Razorpay Payment Page
  const handlePayment = (e) => {
    e.preventDefault();

    if (!amount || amount < 1) {
      alert("Please enter a valid amount");
      return;
    }

    if (!form.name || !form.email || !form.phone) {
      alert("Please fill all required fields");
      return;
    }

    // Razorpay hosted payment page
    const paymentUrl = "https://pages.razorpay.com/pl_RW6jI0p2q5EN2C/view";

    window.open(paymentUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      {/* ================= SEO ================= */}
      <SEO
        title="Donate | Future Star Sports Academy"
        description="Support Future Star Sports Academy by donating to empower tribal and rural children through sports, education, and mentorship."
        canonical="https://futurestarsportsacademy.org/donate"
        image="/donate-hero.jpg"
      />

      <div className="w-full" style={{ backgroundColor: "#b9e2f5" }}>
        {/* ================= HERO SECTION ================= */}
        <section className="relative w-full h-[60vh] flex items-center justify-center text-center">
          <img
            src="/donate-hero.jpg"
            alt="Support grassroots sports at Future Star Sports Academy"
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
            fetchpriority="high"
          />
          <div className="absolute inset-0 bg-[#0b3b67]/80"></div>

          <div className="relative z-10 px-6">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white">
              Support the Future of Sports
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
              Your contribution helps tribal and rural children access quality
              sports training, education, and mentorship.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a
                href="#donateForm"
                className="bg-[#e09604] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#d18600] transition"
              >
                Donate Now
              </a>
            </div>
          </div>
        </section>

        {/* ================= DONATION FORM ================= */}
        <section
          id="donateForm"
          className="max-w-4xl mx-auto px-6 py-16 bg-white rounded-3xl shadow-lg"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#0b3b67] text-center">
            Make a Donation
          </h2>

          <form className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              name="name"
              value={form.name}
              onChange={updateForm}
              className="donate-input"
              type="text"
              placeholder="Full Name"
              required
            />

            <input
              name="email"
              value={form.email}
              onChange={updateForm}
              className="donate-input"
              type="email"
              placeholder="Email Address"
              required
            />

            <input
              name="phone"
              value={form.phone}
              onChange={updateForm}
              className="donate-input"
              type="tel"
              placeholder="Mobile Number"
              required
            />

            {/* ================= AMOUNT OPTIONS ================= */}
            <div className="md:col-span-2">
              <label className="font-semibold text-gray-800">
                Donation Amount
              </label>

              <div className="flex gap-3 mt-2 flex-wrap">
                {presetAmounts.map((amt) => (
                  <button
                    key={amt}
                    type="button"
                    onClick={() => setAmount(amt)}
                    className={`px-4 py-2 rounded-lg border font-semibold
                      ${
                        amount == amt
                          ? "bg-[#e09604] text-white"
                          : "bg-orange-50 text-gray-700 border-orange-200"
                      }
                      hover:bg-[#e09604] hover:text-white transition`}
                  >
                    ₹{amt}
                  </button>
                ))}
              </div>

              <input
                className="donate-input mt-4"
                type="number"
                placeholder="Enter Custom Amount"
                value={amount}
                min="1"
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>

            <textarea
              name="message"
              value={form.message}
              onChange={updateForm}
              className="donate-input md:col-span-2"
              rows="4"
              placeholder="Message (Optional)"
            />

            <button
              onClick={handlePayment}
              className="md:col-span-2 bg-[#0b3b67] text-white py-3 rounded-lg
                         font-semibold text-lg hover:bg-[#093055] transition"
            >
              Proceed to Payment
            </button>
          </form>

          <p className="text-gray-600 text-sm text-center mt-4">
            You will be redirected to a secure payment gateway.
          </p>
        </section>
      </div>
    </>
  );
}

