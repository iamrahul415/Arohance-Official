// eslint-disable-next-line no-unused-vars
import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";

// ✅ Public folder images
const logos = [
  "/assets/1.png",
  "/assets/2.png",
  "/assets/3.png",
  "/assets/4.png",
  "/assets/5.png",
  "/assets/6.png",
  "/assets/7.png",
  "/assets/8.png",
  "/assets/9.png",
  "/assets/10.png",
  "/assets/11.png",
  "/assets/12.png",
  "/assets/13.png",
  "/assets/14.png",
];

function Clients() {
  // Column component
  const Column = ({ items, direction = "down" }) => {
    const controls = useAnimation();
    const duplicated = [...items, ...items]; // duplicate for seamless loop

    useEffect(() => {
      controls.start({
        y: direction === "down" ? ["0%", "-50%"] : ["-50%", "0%"],
        transition: {
          duration: 5,
          ease: "linear",
          repeat: Infinity,
        },
      });
    }, [controls, direction]);

    const handleHoverStart = () => {
      controls.stop();
    };

    const handleHoverEnd = () => {
      controls.start({
        y: direction === "down" ? ["0%", "-50%"] : ["-50%", "0%"],
        transition: {
          duration: 5,
          ease: "linear",
          repeat: Infinity,
        },
      });
    };

    return (
      <div className="overflow-hidden h-[500px] w-1/3 flex justify-center">
        <motion.div
          className="flex flex-col gap-1"
          animate={controls}
          onHoverStart={handleHoverStart}
          onHoverEnd={handleHoverEnd}
        >
          {duplicated.map((src, index) => (
            <div
              key={index}
              className="flex-shrink-0 p-2 bg-[#fe7f23] rounded-lg shadow-md hover:shadow-xl hover:scale-100 transition-transform duration-300"
            >
              <img
                src={src}
                alt={`client logo ${index + 1}`}
                className="h-28 w-28 object-contain mx-auto"
              />
            </div>
          ))}
        </motion.div>
      </div>
    );
  };

  return (
    <section className="relative w-full bg-[#233d4d] py-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 px-6">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-snug text-white">
            <span className="text-blue-600">Integrate</span> MakeForms <br />
            with your favourite apps
          </h2>
          <p className="text-gray-400 max-w-md mx-auto lg:mx-0">
            Automate and personalize your forms. Integrate existing tools from
            your workflow to build a close knit data management system.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition flex items-center gap-5 mx-auto lg:mx-0">
            Explore Integration →
          </button>
        </div>

        {/* Right Scrolling Logos */}
        <div className="flex-1 flex gap-1">
          <Column items={logos.slice(0, 5)} direction="down" />
          <Column items={logos.slice(5, 10)} direction="up" />
          <Column items={logos.slice(10, 14)} direction="down" />
        </div>
      </div>
    </section>
  );
}

export default Clients;