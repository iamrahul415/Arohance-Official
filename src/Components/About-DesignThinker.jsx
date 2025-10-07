import React, { useState } from 'react';

export default function AboutDesignThinker() {
  const teamMembers = [
    { 
      id: '01', 
      name: 'Julia', 
      role: 'Brand Strategist', 
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&h=500&fit=crop&crop=faces' 
    },
    { 
      id: '02', 
      name: 'Lara', 
      role: 'Data Scientist', 
      image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=500&h=500&fit=crop&crop=faces' 
    },
    { 
      id: '03', 
      name: 'Robert', 
      role: 'UX/UI Designer', 
      image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500&h=500&fit=crop&crop=faces' 
    },
    { 
      id: '04', 
      name: 'Sara', 
      role: 'Web Developer', 
      image: 'https://images.unsplash.com/photo-1603415526960-f7e0328d2e8f?w=500&h=500&fit=crop&crop=faces' 
    },
    { 
      id: '05', 
      name: 'Steve', 
      role: 'Graphic Designer', 
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&h=500&fit=crop&crop=faces' 
    }
  ];

  const [selectedMember, setSelectedMember] = useState(teamMembers[0]);

  return (
    <div className="min-h-screen bg-[#233d4d] text-white flex items-center px-8 md:px-16 py-16">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-center">
          {/* Left Section */}
          <div className="space-y-8">
            <div className="inline-block">
              <div className="flex items-center gap-2 mb-6">
                <span className="text-xs tracking-widest text-gray-400">DESIGN THINKERS</span>
                <div className="w-8 h-px bg-gray-600"></div>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Crafts Visionary Ideas{' '}
              <span className="text-[#fe7f23]">That Inspire</span>
            </h1>

            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus elit.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-red-500 hover:bg-red-600 text-white px-7 py-3 rounded-full text-sm font-medium transition-colors">
                View All Teams
              </button>
              <button className="bg-white hover:bg-gray-100 text-black px-7 py-3 rounded-full text-sm font-medium transition-colors">
                Join Our Team
              </button>
            </div>
          </div>

          {/* Middle Section - Team Members List */}
          <div className="space-y-1">
            {teamMembers.map((member) => (
              <div 
                key={member.id} 
                className={`group cursor-pointer transition-all ${
                  selectedMember.id === member.id ? 'bg-[#2f4d63]/30 rounded-lg' : ''
                }`}
                onClick={() => setSelectedMember(member)}
              >
                <div className="flex items-center justify-between py-5 border-b border-gray-800 hover:border-gray-600 transition-all px-3">
                  <div className="flex items-center gap-6">
                    <span className="text-red-500 text-sm font-medium">{member.id}</span>
                    <span className={`text-xl md:text-2xl font-bold transition-colors ${
                      selectedMember.id === member.id ? 'text-[#fe7f23]' : 'group-hover:text-red-500'
                    }`}>
                      {member.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-gray-400 text-sm hidden sm:block">{member.role}</span>
                    <svg 
                      className={`w-5 h-5 text-[#fe7f23] transition-all ${
                        selectedMember.id === member.id ? 'opacity-100 translate-x-1' : 'opacity-0 group-hover:opacity-100 group-hover:translate-x-1'
                      }`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
                <div className="sm:hidden text-gray-400 text-xs py-1 pl-12">
                  {member.role}
                </div>
              </div>
            ))}
          </div>

          {/* Right Section - Dynamic Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 transition-all duration-500">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-400 via-yellow-300 to-orange-400 overflow-hidden shadow-2xl">
                <img 
                  src={selectedMember.image} 
                  alt={selectedMember.name} 
                  className="w-full h-full object-cover object-center transition-all duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
