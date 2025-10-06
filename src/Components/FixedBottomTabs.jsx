import React, { useState } from 'react';

export default function FixedBottomTabs() {
  const [activeTab, setActiveTab] = useState('null');

  const tabs = [
    { id: 'contactus', label: 'Contact Us' },
    { id: 'casestudy', label: 'Case Study' },
    { id: 'knowmore', label: 'Know More' }
  ];

  const renderContent = () => {
    switch(activeTab) {
      case 'contactus':
        return (
          <div>
            <h1 className="text-3xl font-bold mb-5 text-gray-800">Contact Us</h1>
            <p className="mb-4 text-gray-600 leading-relaxed">Get in touch with our team for any inquiries or support.</p>
            <p className="mb-4 text-gray-600 leading-relaxed">Email: info@example.com</p>
            <p className="mb-4 text-gray-600 leading-relaxed">Phone: +1 (555) 123-4567</p>
            <p className="mb-4 text-gray-600 leading-relaxed">Address: 123 Business Street, City, State 12345</p>
          </div>
        );
      case 'casestudy':
        return (
          <div>
            <h1 className="text-3xl font-bold mb-5 text-gray-800">Case Study</h1>
            <p className="mb-4 text-gray-600 leading-relaxed">Explore our successful projects and client testimonials.</p>
            <p className="mb-4 text-gray-600 leading-relaxed">We've helped numerous businesses achieve their goals through innovative solutions and dedicated support.</p>
            <p className="mb-4 text-gray-600 leading-relaxed">Our case studies showcase real-world applications and measurable results.</p>
          </div>
        );
      case 'knowmore':
        return (
          <div>
            <h1 className="text-3xl font-bold mb-5 text-gray-800">Know More</h1>
            <p className="mb-4 text-gray-600 leading-relaxed">Learn more about our services, mission, and values.</p>
            <p className="mb-4 text-gray-600 leading-relaxed">We're committed to delivering excellence and building lasting relationships with our clients.</p>
            <p className="mb-4 text-gray-600 leading-relaxed">Discover what sets us apart in the industry.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <div className="max-w-4xl mx-auto p-5">
        {renderContent()}
      </div>

      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-white rounded-full shadow-xl p-2 flex gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-[#fe7f2d] text-white shadow-md'
                  : 'bg-[#233d4d] text-white hover:bg-[#fe7f2d]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}