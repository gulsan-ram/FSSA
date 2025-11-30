import React, { useEffect, useRef, useState } from 'react';
import { Rocket, TrendingUp, Users, Target } from 'lucide-react';
import Team from "./Team";
import Partners from './Partners';

export default function Aboutfssa() {
  const [visibleSections, setVisibleSections] = useState([]);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observers = sectionRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleSections((prev) => [...new Set([...prev, index])]);
            }
          });
        },
        { threshold: 0.2 }
      );

      if (ref) observer.observe(ref);
      return observer;
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  const journeyData = [
    {
      year: '2019-2021',
      title: 'Foundation',
      icon: Users,
      color: 'from-blue-600 to-blue-700',
      bgColor: 'from-blue-50 to-blue-100',
      accentColor: 'text-blue-700',
      description: 'Started in Mayurbhanj with five children and one rugby ball.',
      highlights: [
        'Built trust in the community',
        'Created a safe, inclusive space for girls to play'
      ]
    },
    {
      year: '2022-2023',
      title: 'Growth',
      icon: TrendingUp,
      color: 'from-emerald-600 to-emerald-700',
      bgColor: 'from-emerald-50 to-emerald-100',
      accentColor: 'text-emerald-700',
      description: 'Launched Project Lakshya for young athletes.',
      highlights: [
        '25 athletes reached national competitions',
        '2 represented India'
      ]
    },
    {
      year: '2024-2025',
      title: 'Expansion',
      icon: Rocket,
      color: 'from-violet-600 to-violet-700',
      bgColor: 'from-violet-50 to-violet-100',
      accentColor: 'text-violet-700',
      description: 'Introduced Aarambh, Udaan, and Abhyas programs.',
      highlights: [
        'Now reaching 1500+ children',
        'Across schools and community centers'
      ]
    },
    {
      year: '2025-2030',
      title: 'The Road Ahead',
      icon: Target,
      color: 'from-amber-600 to-amber-700',
      bgColor: 'from-amber-50 to-amber-100',
      accentColor: 'text-amber-700',
      description: 'Scaling across more states.',
      highlights: [
        'Goal to reach 1lakh+ children',
        'Through structured play, training, and mentorship'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 py-12 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-20 animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-800 mb-4 md:mb-6">
            Our Journey at a{' '}
            <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              Glance
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto px-4">
            From one small field in Mayurbhanj to a growing movement for access and excellence in sports.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Line - Hidden on mobile */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 via-emerald-400 via-violet-400 to-amber-400 opacity-40" />

          {/* Journey Items */}
          {journeyData.map((item, index) => {
            const Icon = item.icon;
            const isLeft = index % 2 === 0;
            const isVisible = visibleSections.includes(index);

            return (
              <div
                key={index}
                ref={(el) => (sectionRefs.current[index] = el)}
                className="relative mb-12 md:mb-16 lg:mb-24"
              >
                {/* Mobile & Tablet Layout */}
                <div className="lg:hidden">
                  <div
                    className={`transition-all duration-1000 ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                    }`}
                  >
                    {/* Icon */}
                    <div className="flex items-center mb-4">
                      <div
                        className={`w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center shadow-lg transition-all duration-500 ${
                          isVisible ? 'scale-100 rotate-0' : 'scale-0 rotate-180'
                        }`}
                      >
                        <Icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                      </div>
                      <div className="ml-4 flex-1">
                        <div className={`inline-block px-3 py-1 md:px-4 md:py-2 rounded-full bg-gradient-to-r ${item.color} text-white text-xs md:text-sm font-semibold`}>
                          {item.year}
                        </div>
                      </div>
                    </div>

                    {/* Content Card */}
                    <div className={`bg-gradient-to-br ${item.bgColor} backdrop-blur-sm rounded-2xl p-6 md:p-8 border-2 border-white shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105`}>
                      <h3 className={`text-2xl md:text-3xl font-bold ${item.accentColor} mb-3 md:mb-4`}>{item.title}</h3>
                      <p className="text-slate-700 mb-4 md:mb-6 text-base md:text-lg leading-relaxed">{item.description}</p>
                      
                      <div className="space-y-2 md:space-y-3">
                        {item.highlights.map((highlight, idx) => (
                          <div
                            key={idx}
                            className="flex items-start space-x-2 text-slate-700 text-sm md:text-base"
                            style={{
                              animation: isVisible ? `fadeIn 0.6s ease-out ${0.3 + idx * 0.1}s forwards` : 'none',
                              opacity: 0
                            }}
                          >
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${item.color} mt-2 flex-shrink-0`} />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden lg:block">
                  <div
                    className={`transition-all duration-1000 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                    }`}
                  >
                    <div className="flex items-center">
                      {/* Left Content */}
                      <div className="w-5/12">
                        {isLeft && (
                          <div className="pr-12">
                            <div className={`bg-gradient-to-br ${item.bgColor} backdrop-blur-sm rounded-2xl p-8 border-2 border-white shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105`}>
                              <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${item.color} text-white text-sm font-semibold mb-4`}>
                                {item.year}
                              </div>
                              <h3 className={`text-3xl font-bold ${item.accentColor} mb-4`}>{item.title}</h3>
                              <p className="text-slate-700 mb-6 text-lg leading-relaxed">{item.description}</p>
                              
                              <div className="space-y-3">
                                {item.highlights.map((highlight, idx) => (
                                  <div
                                    key={idx}
                                    className="flex items-start space-x-2 text-slate-700"
                                    style={{
                                      animation: isVisible ? `fadeIn 0.6s ease-out ${0.3 + idx * 0.1}s forwards` : 'none',
                                      opacity: 0
                                    }}
                                  >
                                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${item.color} mt-2 flex-shrink-0`} />
                                    <span>{highlight}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Center Icon */}
                      <div className="w-2/12 flex justify-center">
                        <div
                          className={`relative w-20 h-20 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center shadow-lg transition-all duration-500 ${
                            isVisible ? 'scale-100 rotate-0' : 'scale-0 rotate-180'
                          }`}
                        >
                          <Icon className="w-10 h-10 text-white" />
                          
                          {isVisible && (
                            <>
                              <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${item.color} animate-ping opacity-20`} />
                              <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${item.color} animate-pulse opacity-30`} />
                            </>
                          )}
                        </div>
                      </div>

                      {/* Right Content */}
                      <div className="w-5/12">
                        {!isLeft && (
                          <div className="pl-12">
                            <div className={`bg-gradient-to-br ${item.bgColor} backdrop-blur-sm rounded-2xl p-8 border-2 border-white shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105`}>
                              <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${item.color} text-white text-sm font-semibold mb-4`}>
                                {item.year}
                              </div>
                              <h3 className={`text-3xl font-bold ${item.accentColor} mb-4`}>{item.title}</h3>
                              <p className="text-slate-700 mb-6 text-lg leading-relaxed">{item.description}</p>
                              
                              <div className="space-y-3">
                                {item.highlights.map((highlight, idx) => (
                                  <div
                                    key={idx}
                                    className="flex items-start space-x-2 text-slate-700"
                                    style={{
                                      animation: isVisible ? `fadeIn 0.6s ease-out ${0.3 + idx * 0.1}s forwards` : 'none',
                                      opacity: 0
                                    }}
                                  >
                                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${item.color} mt-2 flex-shrink-0`} />
                                    <span>{highlight}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Quote */}
        <div className="text-center mt-16 md:mt-24 lg:mt-32 animate-fade-in">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-50 to-violet-50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border-2 border-white shadow-lg">
            <div className="text-5xl md:text-6xl text-blue-600 mb-4">"</div>
            <p className="text-xl md:text-2xl lg:text-3xl text-slate-800 font-light italic mb-4 px-4">
              Our journey is about giving every child the opportunity to discover their potential through sports
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-violet-600 mx-auto mt-8 rounded-full" />
          </div>
        </div>
        <Team/>
        <Partners/>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

