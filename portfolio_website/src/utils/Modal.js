import React, { useEffect } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";

export const Modal = ({ id, isOpen, closeModal, children }) => {
  const controls = useAnimation();

  useEffect(() => {
    if (isOpen) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, isOpen]);

  // Overlay Fade Animation
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 0.5, transition: { duration: 0.3 } },
  };

  // Modal Animation
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3 } }, // Add exit animation
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Background Overlay */}
          <motion.div
            className="absolute inset-0 bg-black"
            initial="hidden"
            animate="visible"
            exit="hidden" // Apply fade-out effect on exit
            variants={overlayVariants}
            onClick={closeModal}
          />

          {/* Modal Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit" // Trigger exit animation when isOpen becomes false
            variants={modalVariants}
            className="relative bg-white rounded-lg p-6 shadow-lg w-[90%] h-[80%] mx-4"
            id={id}
          >
            {/* Close Button */}
            <button className="absolute top-3 right-3 text-gray-500 hover:text-gray-700" onClick={closeModal}>
              &times;
            </button>
            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
