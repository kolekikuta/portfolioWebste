import React from "react";
import { motion } from "framer-motion";

const Title = ({h1, p}) => {
    return (
        <div className="text-left mb-8">
            <div className="overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{}}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <h1 className="mb-4">{h1}</h1>
                </motion.div>
            </div>

        <motion.div
            initial={{x: "100vw" }}
            animate={{x: 0 }}
            exit={{}}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            >
                <hr className="w-24 border-2 border-secondary my-6"/>
        </motion.div>
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{}}
            transition={{ duration: 0.5, delay: 1 }}
        >
            <p className="mt-8 text-2xl text-gray-600">{p}</p>
        </motion.div>
        </div>
    )
}
export default Title;