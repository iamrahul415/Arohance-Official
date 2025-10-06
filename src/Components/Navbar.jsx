import React, { useState } from "react";
import { Menu, X } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Nav links animation
  const linkVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: { delay: i * 0.1 },
    }),
  };

  return (
    <nav className="w-full fixed top-0 left-0 z-70 bg-transparent px-6 py-4 flex justify-between items-center">
     
      {/* Logo */}
      <img
        className="logo"
        src="./assets/Logo.svg"
        alt="companyLogo"
        width={95}
        height={95}
      />

      {/* Hamburger */}
      <button onClick={() => setIsOpen(true)} className="text-3xl z-[60] cursor-pointer">
        <Menu size={32} />
      </button>

      {/* Fullscreen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-[#233d4d] text-white flex flex-col"
            initial={{ x: "100%" }}     // start off-screen (right)
            animate={{ x: 0 }}          // slide in
            exit={{ x: "100%" }}        // slide out (return right)
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {/* Close Button */}
            <div className="flex justify-end p-6 cursor-pointer">
              <button onClick={() => setIsOpen(false)}>
                <X size={32} />
              </button>
            </div>

            {/* Links - Left Column */}
            <div className="flex flex-1">
              <div className="flex flex-col gap-8 text-3xl font-semibold px-12 py-10">
                {["HOME", "ABOUT", "WORKS", "REVIEWS", "CONTACT"].map(
                  (item, i) => (
                    <motion.a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className="hover:text-[#fe7f23] transition"
                      custom={i}
                      variants={linkVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                    >
                      {item}
                    </motion.a>
                  )
                )}
              </div>
            </div>

            {/* Footer Socials */}
            <motion.div
              className="w-full p-6 border-t border-[#fe7f23] flex justify-center gap-4"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ delay: 0.2 }}
            >
              {["INSTAGRAM", "TWITTER", "LINKEDIN", "YOUTUBE"].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  className="px-4 py-2 border border-gray-500 rounded-md hover:bg-[#fe7f23] hover:text-black transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
