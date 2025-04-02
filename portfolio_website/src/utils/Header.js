import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const Header = ({ title }) => {
    const controls = useAnimation();
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <div className="text-left mb-8" ref={ref}>
            <div className="overflow-hidden">
                <motion.div
                    initial="hidden"
                    animate={controls}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <h2 className="mb-4">{title}</h2>
                </motion.div>
            </div>

            <motion.div
                initial="hidden"
                animate={controls}
                variants={{
                    hidden: { x: "100vw" },
                    visible: { x: 0 },
                }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
            >
                <hr className="w-24 border-2 border-secondary"/>
            </motion.div>
        </div>
    );
};

export default Header;
