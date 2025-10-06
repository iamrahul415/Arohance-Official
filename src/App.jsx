import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import SocialMedia from "./Components/SocialMedia";
import HeroSection from "./Components/HeroSection";
import OurServices from "./Components/OurServices";
import { WorksSection } from "./Components/WorkSection";
import Ourclients from "./Components/Ourclients";
import TeamMembersSection from "./Components/TeamMemberSection";
import FAQ from "./Components/FAQ";
import Footer from "./Components/Footer";
import FixedBottomTabs from "./Components/FixedBottomTabs";

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

function App() {
  const [showFixedTabs, setShowFixedTabs] = useState(true);
  const footerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (footerRef.current) {
        const footerRect = footerRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Hide tabs when footer enters the viewport
        if (footerRect.top < windowHeight) {
          setShowFixedTabs(false);
        } else {
          setShowFixedTabs(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#233d4d]">
      <Navbar />
      <HeroSection />
      <OurServices />
      <WorksSection />
      <Ourclients />
      <TeamMembersSection/>
      <FAQ/>
      
      <div ref={footerRef}>
        <Footer />
      </div>

      {/* Fixed tabs - visible only when footer is not in view */}
      {showFixedTabs && <FixedBottomTabs />}

      <SocialMediaSidebar/>
    </div>
  );
}

export default App;