import React, { useEffect }from "react";
import { motion } from "framer-motion";
import Reveal from "../utils/Reveal";
import Header from "../utils/Header";
import Dots from "../utils/Dots";

export default function ContactPage () {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-background font-sans min-h-screen flex flex-col items-center">
        <div className="font-sans min-h-screen flex flex-col items-center px-6 max-w-7xl">

        {/* Hero Section */}
        <section className="text-center h-screen w-full pt-14 flex justify-center items-center align-middle">
          <div className="relative">
            <Dots classNameStr="w-[20rem] h-[20rem] absolute top-5 right-5 z-0"/>
            <motion.div
              initial={{ opacity: 0, y: 20, scale: .8, ease: "easeInOut" }}
              animate={{ opacity: 1, y: 0, scale: 1, ease: "easeInOut" }}
              transition={{ duration: 1 }}
              className="z-10 relative"
              >
                <img src="\contact.svg" alt="Contact Me Image" className="w-96 h-auto rounded-xl mb-4" />
            </motion.div>
          </div>

          <div className="overflow-hidden m-10 text-left w-3/4">
            <Header title="Contact Me"/>
            <Reveal>
                <div className="flex justify-left items-baseline space-x-4 mb-4">
                    <h3>Email: </h3>
                    <a href="mailto:kolekikuta@gmail.com" className="text-xl text-primary-text hover:text-secondary transition duration-300">kolekikuta@gmail.com</a>
                </div>
            </Reveal>
            <Reveal>
                <div className="flex justify-left items-baseline space-x-4 mb-4">
                    <h3>LinkedIn: </h3>
                    <a href="https://www.linkedin.com/in/kolekikuta/" className="text-xl text-primary-text hover:text-secondary transition duration-300" target="_blank" rel="noopener noreferrer">Kole Kikuta</a>
                </div>
            </Reveal>
            <Reveal>
                <div className="flex justify-left items-baseline space-x-4 mb-4">
                    <h3>GitHub: </h3>
                    <a href="https://github.com/kolekikuta" target="_blank" rel="noopener noreferrer" className="text-xl text-primary-text hover:text-secondary transition duration-300">kolekikuta</a>
                </div>
            </Reveal>
          </div>
        </section>
        </div>
    </div>
  );
}
