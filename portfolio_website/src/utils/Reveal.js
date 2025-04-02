import React, {useEffect, useRef} from  "react";
import { motion, useInView, useAnimation } from 'framer-motion';


const Reveal = ({ children }) => {
  const controls = useAnimation();
  const ref =  useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.25 } },
  };

  return (
    <div ref={ref}>
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={variants}
        >
            {children}
        </motion.div>
    </div>

  );
}
export default Reveal;