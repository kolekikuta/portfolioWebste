import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function Dots({classNameStr}) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Get the mouse position relative to the window
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    // Listen for mouse movement
    window.addEventListener('mousemove', handleMouseMove);

    // Clean up the event listener
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      className={classNameStr}
      style={{
        backgroundImage: "radial-gradient(rgba(217, 217, 217, 0.5) 1px, transparent 0)",
        backgroundSize: "20px 20px",
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: 1,
        scale: 1,
        x: -(mousePos.x - window.innerWidth / 2) / 80, // Move opposite of the mouse on the x-axis
        y: -(mousePos.y - window.innerHeight / 2) / 80, // Move opposite of the mouse on the y-axis
      }}
      transition={{
        opacity: { duration: 1, delay: 0.5, ease: 'easeInOut' },
        type: 'spring',
        stiffness: 100, // Adjust stiffness for smoother movement
        damping: 40,    // Adjust damping to control how fast it follows the mouse
      }}
    />
  );
}

export default Dots;
