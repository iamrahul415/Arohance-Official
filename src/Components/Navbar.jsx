import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Case Study', path: '/case-study' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'FAQ', path: '/faq' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6 ">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo - Left */}
        <div className="flex items-center">
          <svg className="w-32 h-8" viewBox="0 0 120 30" fill="none">
            <text
              x="0"
              y="22"
              fill="white"
              fontSize="24"
              fontWeight="bold"
              fontFamily="Arial, sans-serif"
            >
              Aroahnce
            </text>
          </svg>
        </div>

        {/* Navigation Items - Center */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <div className="flex items-center gap-2 bg-white/10 rounded-full px-2 py-2 backdrop-blur-sm border border-white/20">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? 'bg-[#fe7f2d] text-[#233d4d]'
                      : 'text-white/90 hover:text-[#fe7f2d] hover:bg-white/10'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>

        {/* Contact Button - Right */}
        <NavLink
          to="/contact"
          className="bg-[#fe7f2d] text-white px-8 py-3 rounded-full font-medium hover:bg-[#ff9051] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
        >
          Contact Us
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
