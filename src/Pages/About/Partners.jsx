import React, { useState } from 'react';
import { ArrowRight, X } from 'lucide-react';

const Partners = () => {
  const [selectedCompliance, setSelectedCompliance] = useState(null);

  const compliances = [
    { 
      id: 1, 
      title: '12A', 
      highlighted: false,
      file: '/Documents/12A.pdf'
    },
    { 
      id: 2, 
      title: '80G', 
      highlighted: false,
      file: '/Documents/80g.pdf'
    },
    { 
      id: 3, 
      title: 'CSR', 
      highlighted: false,
      file: '/Documents/CSR1.PDF'
    },
    { 
      id: 4, 
      title: 'NITI AYOG', 
      highlighted: false,
      file: '/Documents/NITI AYOG.pdf'
    },
  ];

  const openModal = (compliance) => {
    setSelectedCompliance(compliance);
  };

  const closeModal = () => {
    setSelectedCompliance(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Compliances
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {compliances.map((compliance) => (
            <div
              key={compliance.id}
              className="rounded-2xl p-8 transition-all duration-500 cursor-pointer bg-white border-2 border-gray-200 hover:border-orange-400 hover:shadow-2xl transform hover:scale-105 hover:-translate-y-2"
              onClick={() => openModal(compliance)}
            >
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-6 text-center text-gray-900 group-hover:text-orange-600">
                  {compliance.title}
                </h2>
                
                <button
                  className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-lg bg-orange-500 text-white hover:bg-orange-600 transition-all duration-300 transform group-hover:scale-105"
                >
                  <span>View</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedCompliance && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            onClick={closeModal}
          >
            <div 
              className="relative bg-white rounded-2xl max-w-5xl w-full h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-all z-10"
              >
                <X className="w-6 h-6 text-gray-700" />
              </button>

              {/* PDF / DOC Viewer */}
              <iframe
                src={selectedCompliance.file}
                title={selectedCompliance.title}
                className="w-full h-full rounded-2xl"
              ></iframe>

            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Partners;

