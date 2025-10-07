import React from 'react';
import { Play } from 'lucide-react';

const AboutOurStory = () => {
  return (
    <section className="bg-[#233d4d] text-white py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div className="flex flex-col justify-start">
            <div className="mb-6">
              <span className="text-gray-400 text-sm uppercase tracking-wider border-l-2 border-red-500 pl-3">
                Our Story
              </span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              Your Vision Our Expertise Your Success Get Noticed Generate{' '}
              <span className="text-[#fe7f23]">Leads Dominate.</span>
            </h1>

            <div className="relative rounded-md overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
                alt="Team collaboration"
                className="w-full h-auto object-fill"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col justify-start lg:pt-[4.5rem]">
            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="relative rounded-lg overflow-hidden h-48">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop"
                  alt="Professional working"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 flex gap-2">
                  <span className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-xs">
                    Tech Blog
                  </span>
                  <span className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-xs">
                    Trends
                  </span>
                </div>
              </div>

              <div className="relative rounded-lg overflow-hidden h-48">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop"
                  alt="Team meeting"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 flex gap-2">
                  <span className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-xs">
                    Tech Blog
                  </span>
                  <span className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-xs">
                    Trends
                  </span>
                </div>
              </div>
            </div>

            <p className="text-gray-400 mb-8 leading-relaxed">
              Tempor commodo ullamcorper a lacus. Amet commodo nulla facilisi nullam.
              Molestie nunc non blandit massa enim nec. Felis bibendum ut tristique et
              egestas quis ipsum suspendisse ultrices. Eros in cursus turpis massa
              tincidunt dui.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div>
                <div className="text-3xl lg:text-4xl font-bold mb-1">10k+</div>
                <div className="text-gray-400 text-sm">Completed Projects</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-bold mb-1">15k+</div>
                <div className="text-gray-400 text-sm">Satisfied Customers</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-bold mb-1">10k+</div>
                <div className="text-gray-400 text-sm">Years Of Mastery</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-bold mb-1">45+</div>
                <div className="text-gray-400 text-sm">Worldwide Honors</div>
              </div>
            </div>

            {/* Video Button */}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
                  alt="Team member"
                  className="w-12 h-12 rounded-full border-2 border-zinc-900 object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
                  alt="Team member"
                  className="w-12 h-12 rounded-full border-2 border-zinc-900 object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
                  alt="Team member"
                  className="w-12 h-12 rounded-full border-2 border-zinc-900 object-cover"
                />
              </div>

              <button className="flex items-center gap-3 group">
                <div className="w-14 h-14 rounded-full border-2 border-red-600 flex items-center justify-center group-hover:bg-red-600 transition-colors">
                  <Play className="w-5 h-5 fill-current" />
                </div>
                <span className="font-semibold">WATCH INTRO</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOurStory;
