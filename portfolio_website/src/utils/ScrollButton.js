import { useState, useEffect } from "react";
import { motion, animate } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const ScrollButton = () => {
  const [rotation, setRotation] = useState(0);
  const [isUp, setIsUp] = useState(false); // Tracks if the arrow should point up or down

  useEffect(() => {
    const hero = document.getElementById("hero-section");
    if (!hero) return;

    const updateScroll = () => {
      const scrollY = window.scrollY;
      const heroTop = hero.offsetTop; // Hero section start
      const heroHeight = hero.offsetHeight; // Hero section end

      // Constrain scrolling to only within Hero section
      const scrollProgress = Math.min(
        scrollY  / heroHeight,
        1
      );

      setRotation(scrollProgress * 180); // Rotate up to 180° based on scroll

      // Update the `isUp` state based on the scroll position
      setIsUp(scrollY > 0);
    };

    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  const handleClick = () => {
    const target = document.getElementById("hero-section");
    if (!target) return;

    let targetPosition;
    if (isUp) {
        targetPosition = target.getBoundingClientRect().top;
    } else {
        targetPosition = target.getBoundingClientRect().bottom + 1;
    }
        const startPosition = window.scrollY;
        animate(startPosition, targetPosition, {
          duration: 1,
          ease: "easeInOut",
          onUpdate: (value) => window.scrollTo(0, value),
        });
  };

  return (
    <motion.button
      className="fixed bottom-4 right-4 p-3 text-white"
      onClick={handleClick}
    >
      <motion.div
        animate={{ rotate: rotation }}
      >
        <ChevronDownIcon
          className={`h-10 w-10 transform`}
        />
      </motion.div>
    </motion.button>
  );
};

export default ScrollButton;
