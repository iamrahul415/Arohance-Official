import React from 'react';
import { Instagram, Linkedin, Facebook, Youtube } from 'lucide-react';

const SocialMediaSidebar = () => {
  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/your-profile',
      icon: Instagram,
      hoverColor: 'hover:bg-gradient-to-tr hover:from-purple-600 hover:via-pink-600 hover:to-orange-500',
      color: 'text-pink-600'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/your-company',
      icon: Linkedin,
      hoverColor: 'hover:bg-blue-600',
      color: 'text-blue-600'
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/your-page',
      icon: Facebook,
      hoverColor: 'hover:bg-blue-500',
      color: 'text-blue-500'
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@your-channel',
      icon: Youtube,
      hoverColor: 'hover:bg-red-600',
      color: 'text-red-600'
    }
  ];

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
      {socialLinks.map((social) => {
        const Icon = social.icon;
        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              w-14 h-14 bg-white rounded-l-xl shadow-lg
              flex items-center justify-center
              transition-all duration-300 ease-in-out
              hover:-translate-x-2 hover:shadow-2xl
              ${social.hoverColor} hover:text-white
              ${social.color}
              group
            `}
            title={social.name}
            aria-label={social.name}
          >
            <Icon size={28} strokeWidth={2} />
          </a>
        );
      })}
    </div>
  );
};

// Demo wrapper component
const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-8">
      <div className="text-center text-white">
        <h1 className="text-5xl font-bold mb-6">Welcome to Our Website</h1>
        <p className="text-xl opacity-90 mb-4">Connect with us on social media →</p>
        <p className="text-sm opacity-75">Hover over the icons on the right side</p>
      </div>
      
      <SocialMediaSidebar />
    </div>
  );
};

export default App;