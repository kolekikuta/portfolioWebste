import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

export const MouseReactiveCard = ({ children }) => {
  const cardRef = useRef(null);
  const [coords, setCoords] = useState({ x: 0.5, y: 0.5 });

  const handleMouseMove = (e) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    setCoords({ x, y });
  };

  return (
    <div className="relative group p-[2px] rounded-2xl bg-transparent" onMouseMove={handleMouseMove}>
      <motion.div
        ref={cardRef}
        className="relative rounded-2xl bg-white dark:bg-zinc-900 p-6 w-full h-full overflow-hidden"
      >
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-2xl"
          style={{
            background: `radial-gradient(
              200px circle at ${coords.x * 100}% ${coords.y * 100}%,
              rgba(99, 102, 241, 0.4),
              transparent 80%
            )`,
            zIndex: 0,
          }}
        />
        <div className="relative z-10">{children}</div>
      </motion.div>
    </div>
  );
};
