import React from "react";

export default function Ratikanta() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6 md:px-20">
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800">Ratinkanta Behera</h1>
        <p className="text-lg text-gray-600 mt-3">Inspiring Journey of Hard Work & Dedication</p>
      </div>

      {/* Image Section */}
      <div className="max-w-4xl mx-auto mt-10">
        <img
          src="/Images/ratikanta.jpg"
          alt="Ratinkanta"
          className="w-full h-[420px] object-cover rounded-2xl shadow-lg"
        />
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto mt-12 text-gray-700 leading-relaxed text-lg">
        <p>Ratinakla has been selected to train at the High Performance Center, Bhubaneswar, for swimming.</p>

        <p className="mt-4">
          His journey reflects true determination — from humble beginnings to becoming
          a competitive athlete who never steps back from challenges. With strong
          support from the academy and his own dedication, Ratinkanta continues to
          push boundaries and set new standards.
        </p>

        <p className="mt-4">
          Future Star Sports Academy is proud to support talents like Ratinkanta,
          helping them shine on district, state, and national levels.
        </p>
      </div>

      {/* Highlight Box */}
      <div className="max-w-4xl mx-auto mt-12 p-8 bg-white rounded-2xl shadow-md border">
        <h2 className="text-2xl font-semibold text-gray-800">Key Highlights</h2>
        <ul className="list-disc pl-6 mt-4 text-gray-700 text-lg space-y-2">
          <li>Known for discipline and consistency</li>
          <li>Strong performance in multiple tournaments</li>
          <li>Represents the academy with pride and honor</li>
          <li>Respected for his positive attitude and team spirit</li>
        </ul>
      </div>

      {/* Footer */}
      <div className="text-center mt-16 text-gray-500 text-sm pb-10">
        © Future Star Sports Academy — "Your support is our success."
      </div>
    </div>
  );
}

