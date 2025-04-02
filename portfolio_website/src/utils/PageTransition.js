import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../Navbar"
import Footer from "../Footer";

const PageTransition = ({ children }) => {
  const [isAnimating, setIsAnimating] = useState(true); // Controls visibility

  const slideVariants = {
    initial: { top: "-100vh" }, // Start from bottom
    enter: { top: "-100vh", transition: { duration: 1,  ease: "easeInOut" } }, // Slide up
    exit: { top: "0", transition: { duration: 1, ease: "easeInOut" } }, // Slide away
  };

  const headerVariants = {
    initial: { top: "0" },
    enter: { top: "0", transition: { duration: 0.5, ease: "easeInOut" } },
    exit: { top: "-100vh", transition: { duration: 0.5, ease: "easeInOut" } },
  }

  return (
    <div className="relative">
      {/* Sliding Overlay */}
        <motion.div
          initial="initial"
          animate="enter"
          exit="exit"
          variants={slideVariants}
          className="bg-primary fixed top-0 left-0 w-full h-screen z-10"
        />

      {/* Page Content */}
      <motion.div
        initial="initial"
        animate="enter"
        exit="exit"
        variants={headerVariants}
        >
            <Navbar />
        </motion.div>

      {children}
      <Footer />
    </div>
  );
};

export default PageTransition;
