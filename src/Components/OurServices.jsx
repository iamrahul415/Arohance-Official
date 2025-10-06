import React, { useEffect, useRef } from 'react';

const ServicesSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const cardRefs = useRef([]);

  const services = [
    {
      title: "Website Development",
      description: "Modern, responsive websites for businesses and e-commerce platforms.",
      baseColor: "bg-[#fe7f23]",
      textColor: "text-gray-800"
    },
    {
      title: "Web Applications", 
      description: "Interactive web applications, dashboards, and management systems.",
      baseColor: "bg-[#fe7f23]",
      textColor: "text-gray-800"
    },
    {
      title: "Mobile Applications",
      description: "Native and cross-platform mobile apps for iOS and Android devices.",
      baseColor: "bg-[#fe7f23]",
      textColor: "text-gray-800"
    },
    {
      title: "Desktop Applications",
      description: "Desktop software for Windows, Mac, and Linux with full system access.",
      baseColor: "bg-[#fe7f23]", 
      textColor: "text-gray-800"
    }
  ];

  useEffect(() => {
    if (!sectionRef.current || !cardsContainerRef.current) return;

    // Title animation
    if (titleRef.current) {
      titleRef.current.style.transform = 'translateY(100px)';
      titleRef.current.style.opacity = '0';
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.transition = 'transform 1.2s cubic-bezier(0.25, 1, 0.5, 1), opacity 1.2s cubic-bezier(0.25, 1, 0.5, 1)';
            entry.target.style.transform = 'translateY(0)';
            entry.target.style.opacity = '1';
          }
        });
      }, { threshold: 0.1 });
      
      observer.observe(titleRef.current);
    }

    // Set initial states for cards - all positioned side by side but only first visible
    cardRefs.current.forEach((card, index) => {
      if (card) {
        // All cards are positioned but with different widths
        if (index === 0) {
          card.style.width = '100%'; // First card takes full visible width
        } else {
          card.style.width = '0%'; // Other cards are hidden by width
        }
        // Always apply the base color
        card.className = card.className.replace(/bg-\w+-\d+/g, '').replace(/  +/g, ' ').trim() + ` ${services[index].baseColor}`;
        
        card.style.opacity = '1';
        card.style.visibility = 'visible';
        card.style.transform = 'translateX(0)';
        card.style.transition = 'width 0.6s cubic-bezier(0.25, 1, 0.5, 1)';
        card.style.height = '60vh';
        card.style.minHeight = '60vh';
        card.style.maxHeight = '60vh';
        card.style.overflow = 'hidden';
        card.style.flexShrink = '0'; // Prevent flex shrinking
      }
    });

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const rect = sectionRef.current.getBoundingClientRect();
          const sectionHeight = sectionRef.current.offsetHeight;
          const windowHeight = window.innerHeight;
          
          // Calculate scroll progress within the section
          const scrollStart = -rect.top;
          const scrollEnd = sectionHeight - windowHeight;
          const progress = Math.max(0, Math.min(1, scrollStart / scrollEnd));
          
          // Divide scroll into phases for each card
          const totalCards = services.length;
          const phaseProgress = progress * (totalCards - 1); // 0 to 3 for 4 cards
          
          // Account for gaps in width calculations (4 gaps of 1rem each = ~4%)
          const gapCompensation = 3; // Compensate for 3 gaps between 4 cards
          const finalWidth = (100 - gapCompensation) / 4; // Adjust for gaps
          
          cardRefs.current.forEach((card, index) => {
            if (!card) return;
            
            let cardWidth;
            
            if (index === 0) {
              // First card: starts at 100%, shrinks progressively
              if (phaseProgress <= 1) {
                // Phase 1: First card shrinks from 100% to ~48%
                cardWidth = 100 - (52 * phaseProgress);
              } else if (phaseProgress <= 2) {
                // Phase 2: First card shrinks from 48% to ~31%
                const localProgress = phaseProgress - 1;
                cardWidth = 48 - (17 * localProgress);
              } else {
                // Phase 3: First card shrinks from 31% to final width
                const localProgress = phaseProgress - 2;
                cardWidth = 31 - (31 - finalWidth) * localProgress;
              }
            } else if (index === 1) {
              // Second card: appears when first card starts shrinking
              if (phaseProgress <= 1) {
                // Phase 1: Second card grows from 0% to ~48%
                cardWidth = 48 * phaseProgress;
              } else if (phaseProgress <= 2) {
                // Phase 2: Second card shrinks from 48% to ~31%
                const localProgress = phaseProgress - 1;
                cardWidth = 48 - (17 * localProgress);
              } else {
                // Phase 3: Second card shrinks from 31% to final width
                const localProgress = phaseProgress - 2;
                cardWidth = 31 - (31 - finalWidth) * localProgress;
              }
            } else if (index === 2) {
              // Third card: appears in phase 2
              if (phaseProgress <= 1) {
                cardWidth = 0;
              } else if (phaseProgress <= 2) {
                // Phase 2: Third card grows from 0% to ~31%
                const localProgress = phaseProgress - 1;
                cardWidth = 31 * localProgress;
              } else {
                // Phase 3: Third card shrinks from 31% to final width
                const localProgress = phaseProgress - 2;
                cardWidth = 31 - (31 - finalWidth) * localProgress;
              }
            } else if (index === 3) {
              // Fourth card: appears in phase 3
              if (phaseProgress <= 2) {
                cardWidth = 0;
              } else {
                // Phase 3: Fourth card grows from 0% to final width
                const localProgress = phaseProgress - 2;
                cardWidth = finalWidth * localProgress;
              }
            }
            
            // Apply the calculated width and always keep the base color
            card.style.width = `${Math.max(0, cardWidth)}%`;
            card.className = card.className.replace(/bg-\w+-\d+/g, '').replace(/  +/g, ' ').trim() + ` ${services[index].baseColor}`;
          });
          
          ticking = false;
        });
        ticking = true;
      }
    };

    // Pin the section during scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          window.addEventListener('scroll', handleScroll);
          handleScroll(); // Initial call
        } else {
          window.removeEventListener('scroll', handleScroll);
        }
      });
    }, { threshold: 0.1 });

    observer.observe(sectionRef.current);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  },);

  return (
    <section ref={sectionRef} className="bg-[#233d4d] text-white relative" style={{ height: '400vh' }}>
      <div className="sticky top-0 min-h-screen flex flex-col">
        <div className="container mx-auto px-4 py-20 flex-1 flex flex-col">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 
              ref={titleRef}
              className="text-4xl md:text-6xl lg:text-7xl font-light mb-8 text-white tracking-tight opacity-0"
            >
              What We Provide
            </h2>
          </div>

          {/* Cards Container */}
          <div 
            ref={cardsContainerRef}
            className="relative flex-1 w-full flex gap-4 overflow-hidden"
            style={{ minHeight: '60vh' }}
          >
            {services.map((service, index) => (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                className={`${service.textColor} flex flex-col justify-between p-6 md:p-8 lg:p-10 transition-all duration-600 ease-out bg-gray-200 rounded-2xl`}
                style={{ 
                  width: '0%',
                  height: '60vh',
                  minHeight: '60vh',
                  maxHeight: '60vh',
                  overflow: 'hidden',
                  flexShrink: 0
                }}
              >
                {/* Header */}
                <div className="flex justify-between items-start gap-4 mb-6">
                  <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light leading-tight flex-1 min-w-0">
                    {service.title}
                  </h3>
                  <button className="bg-[#233d4d] hover:bg-[#1a2d3a] text-white px-4 py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-3 rounded-full text-sm md:text-base font-medium whitespace-nowrap flex-shrink-0 transition-colors duration-300">
                    Know More
                  </button>
                </div>

                {/* Content */}
                <div className="flex-1 flex items-start pt-8">
                  <div className="space-y-2 md:space-y-3 w-full">
                    {service.description.split('\n').map((line, lineIndex) => (
                      <div key={lineIndex} className="text-sm md:text-base lg:text-lg xl:text-xl font-medium tracking-wide opacity-90">
                        {line}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom spacer */}
                <div className="h-6"></div>
              </div>
            ))}
          </div>

          {/* Optional subtitle */}
          <div className="text-center mt-12">
            <p className="text-lg text-gray-400 font-light max-w-2xl mx-auto">
              Delivering cutting-edge technology solutions with precision, scalability, and innovation at the core of everything we build.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;