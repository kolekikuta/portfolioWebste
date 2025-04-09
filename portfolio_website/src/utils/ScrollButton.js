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
      const heroTop = hero.offsetTop; // Start of hero section
      const heroHeight = hero.offsetHeight; // End of hero section

      // Calculate scroll progress within the hero section
      const progress = Math.min(Math.max((scrollY - heroTop) / heroHeight, 0), 1);

      setRotation(progress * 180); // Rotate up to 180° based on scroll
      setIsUp(progress > 0.5); // Consider "up" if past halfway
    };

    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  const handleClick = () => {
    const hero = document.getElementById("hero-section");
    if (!hero) return;

    const targetPosition = isUp ? hero.offsetTop : hero.offsetTop + hero.offsetHeight;
    const startPosition = window.scrollY;

    animate(startPosition, targetPosition, {
      duration: 1,
      ease: "easeInOut",
      onUpdate: (value) => {
        window.scrollTo(0, value);
        // Animate rotation alongside scrolling for smoother transition
        const progress = Math.min(Math.max((value - hero.offsetTop) / hero.offsetHeight, 0), 1);
        setRotation(progress * 180);
      },
    });
  };

  return (
    <motion.button
      className="fixed bottom-4 right-4 p-3 text-white"
      onClick={handleClick}
    >
      <motion.div animate={{ rotate: rotation }}>
        <ChevronDownIcon className="h-10 w-10 transform hover:scale-125 transition transform duration-500" />
      </motion.div>
    </motion.button>
  );
};

export default ScrollButton;
