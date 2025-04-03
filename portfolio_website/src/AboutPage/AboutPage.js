import React, { useEffect }from "react";
import { motion } from "framer-motion";
import Title from "../utils/Title";

export default function AboutPage () {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-primary text-black font-sans min-h-screen flex flex-col items-center">
        <div className="bg-primary text-black font-sans min-h-screen flex flex-col items-center px-6 max-w-9xl">

        {/* Hero Section */}
        <section className="text-center h-screen w-full pt-14 flex justify-center items-center align-middle">
          <motion.div
            initial={{ opacity: 0, y: 20, scale: .8, ease: "easeInOut" }}
            animate={{ opacity: 1, y: 0, scale: 1, ease: "easeInOut" }}
            transition={{ duration: 1 }}
            >
              <img src="\portrait.jpg" alt="Kole Kikuta" className="w-96 h-auto rounded-xl mb-4" />
          </motion.div>
          <div className="overflow-hidden p-10 text-left">
            <Title h1="About Me" p=""/>
            <motion.div
              initial={{ x: "-50vw", ease: "easeInOut" }}
              animate={{ x: 0, ease: "easeInOut" }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="overflow-hidden"
            >
              <p className="text-xl text-gray-600">I am a Software Engineer specializing in full-stack development.</p>
            </motion.div>
            <motion.div
              initial={{ x: "-50vw", ease: "easeInOut" }}
              animate={{ x: 0, ease: "easeInOut" }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="overflow-hidden"
            >
              <p className="mt-2 text-md text-gray-600">I enjoy building applications that solve real-world problems and enhance user experiences.</p>
            </motion.div>
          </div>
        </section>
        </div>
    </div>
  );
}
