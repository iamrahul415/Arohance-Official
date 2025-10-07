import React from "react";
import { Instagram, Linkedin, MessageCircle, Mail } from "lucide-react";

const SocialMediaSidebar = () => {
  const socialLinks = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/your-profile",
      icon: Instagram,
      hoverColor: "hover:bg-gradient-to-br hover:from-purple-600 hover:via-pink-600 hover:to-orange-500",
      bgColor: "bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500",
      color: "text-white",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/your-company",
      icon: Linkedin,
      hoverColor: "hover:bg-blue-600",
      bgColor: "bg-blue-600",
      color: "text-white",
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/1234567890",
      icon: MessageCircle,
      hoverColor: "hover:bg-green-500",
      bgColor: "bg-green-500",
      color: "text-white",
    },
    {
      name: "Email",
      url: "mailto:your-email@example.com",
      icon: Mail,
      hoverColor: "hover:bg-red-500",
      bgColor: "bg-red-500",
      color: "text-white",
    },
  ];

  return (
    <div className="fixed right-6 bottom-6 z-50 flex flex-col gap-3">
      {socialLinks.map((social) => {
        const Icon = social.icon;
        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              w-14 h-14 rounded-full shadow-lg
              flex items-center justify-center
              transition-all duration-300 ease-out
              hover:scale-125 hover:shadow-2xl hover:rotate-6
              ${social.bgColor}
              ${social.color}
              group relative
              backdrop-blur-sm
            `}
            title={social.name}
            aria-label={social.name}
          >
            <Icon size={24} strokeWidth={2.5} className="relative z-10" />
            
            {/* Tooltip */}
            <span className="absolute right-full mr-3 px-3 py-1.5 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
              {social.name}
            </span>
            
            {/* Pulse animation on hover */}
            <span className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 group-hover:animate-ping"></span>
          </a>
        );
      })}
    </div>
  );
};

export default SocialMediaSidebar;