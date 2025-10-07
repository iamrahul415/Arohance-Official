import React from 'react';

export default function AboutOurStory1() {
  const timelineData = [
    { year: '2000', label: 'Establishment &\nFoundation', active: true },
    { year: '2005', label: '', active: false },
    { year: '2010', label: '', active: false },
    { year: '2018', label: '', active: false },
    { year: '2023', label: '', active: false }
  ];

  return (
    <div className="min-h-screen bg-[#233d4d] text-white px-6 py-16 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-block mb-6">
              <span className="text-gray-400 text-sm uppercase tracking-wider border-l-2 border-red-500 pl-3">
                Our Story
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Your Gateway To{' '}
              <span className="text-[#fe7f23]">Online Excellence</span>{' '}
              Dream Big In Pixels.
            </h1>

            <p className="text-gray-400 text-base md:text-lg mb-8 leading-relaxed">
              Lectus Vestibulum Mattis Ullamcorper Velit Sed Ullamcorper. Ac Ut
              Consequat Semper Viverra Nam. Morbi Tristique Senectus Et Netus Et
              Malesuada Fames. Diam Maecenas Ultricies Mi Eget.
            </p>

            <button className="bg-[#233d4d] hover:bg-[#fe7f23] text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/50">
              Know More
            </button>

            {/* Timeline */}
            <div className="mt-16">
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-700 transform -translate-y-1/2"></div>
                
                {/* Timeline Points */}
                <div className="relative flex justify-between items-center">
                  {timelineData.map((item, index) => (
                    <div key={index} className="flex flex-col items-center">
                      {/* Circle Icon */}
                      <div className="relative mb-4">
                        {index === 0 && (
                          <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-red-500 shadow-lg">
                            <img 
                              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&h=200&fit=crop" 
                              alt="Team meeting"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}
                        {index !== 0 && (
                          <div className={`w-4 h-4 rounded-full ${item.active ? 'bg-red-500' : 'bg-white'} border-4 ${item.active ? 'border-gray-800' : 'border-gray-700'} shadow-lg`}></div>
                        )}
                      </div>
                      
                      {/* Year */}
                      <span className={`text-lg font-bold ${index === 0 ? 'text-red-500' : 'text-white'} mb-2`}>
                        {item.year}
                      </span>
                      
                      {/* Label */}
                      {item.label && (
                        <p className="text-xs text-gray-400 text-center whitespace-pre-line max-w-[100px]">
                          {item.label}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop" 
                alt="Team collaboration"
                className="w-full h-auto object-cover"
              />
              
              {/* Circular Badge */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <div className="relative w-24 h-24 bg-red-500 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                  <svg 
                    className="w-8 h-8 text-white transform rotate-45" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M7 11l5-5m0 0l5 5m-5-5v12" 
                    />
                  </svg>
                  
                  {/* Circular Text */}
                  <svg className="absolute w-full h-full" viewBox="0 0 100 100">
                    <defs>
                      <path
                        id="circlePath"
                        d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                      />
                    </defs>
                    <text className="text-[8px] fill-white font-semibold tracking-wider">
                      <textPath href="#circlePath" startOffset="0%">
                        GET IN TOUCH • GET IN TOUCH • GET IN TOUCH •
                      </textPath>
                    </text>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}