import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import './HomePage.css';
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence, animate } from 'framer-motion';
import { Reveal } from "../utils/Reveal";
import { Modal } from "../utils/Modal";
import PageTransition from "../utils/PageTransition";
import Title from "../utils/Title";
import { FaGithub } from "react-icons/fa";

export default function HomePage () {
    const [openModalId, setOpenModalID] = useState(null);
    const [showScrollButton, setShowScrollButton] = useState(false);

    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    }

    const scrollToSection = () => {
      const target = document.getElementById("experience-section");
      if (!target) return;

      const targetPosition = target.getBoundingClientRect().top + window.scrollY + 1;
      const startPosition = window.scrollY;

      animate(startPosition, targetPosition, {
        duration: 1.5, // Adjust duration in seconds
        ease: "easeInOut",
        onUpdate: (value) => window.scrollTo(0, value),
      });
    };

    const openModalByID = (id) => {
        setOpenModalID(id);
        document.body.style.overflow = 'hidden';
    }

    const closeModal = () => {
        setOpenModalID(null);
        document.body.style.overflow = 'auto';
    }

    useEffect(() => {
        const handleScroll = () => {
            const heroSection = document.getElementById("hero-section");
            if (heroSection) {
                const heroBottom = heroSection.getBoundingClientRect().bottom;
                setShowScrollButton(heroBottom < 0); // Show button only if hero section is out of view
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <div className="bg-primary text-black font-sans min-h-screen flex flex-col items-center">
      <div id="body" className="bg-primary text-black font-sans min-h-screen flex flex-col items-center px-6">
      {/* Hero Section */}
      <section id="hero-section" className="text-center flex flex-col h-screen w-full pt-14 justify-center items-center align-middle">
      <Title h1="Hi, my name is Kole" p="I am a software engineer from Long Beach, California specializing in full-stack development."/>
        <Reveal>
        <button
          onClick={() => scrollToSection('expeience-section')}
          className="mt-6 text-white transition"
        >
          <span>
            <ChevronDownIcon className="h-10 w-10 inline-block color-white" />
          </span>
        </button>
        </Reveal>
      </section>

      {/* Experience Section */}
      <section id="experience-section" className="text-center w-full pt-14">
        <Reveal>
          <h1 className="mt-4">Experience</h1>
          <div className="max-w-4xl w-full mx-auto text-white bg-secondary">
            {/*Left Aligned*/}
            <div className="max-w-xl w-full justify-start bg-secondary text-white p-6 rounded-lg shadow-md text-start block">
              <h2 className="text-2xl font-bold mb-2">Software Engineer at XYZ Company</h2>
              <p className="text-md mb-4">June 2021 - Present</p>
              <ul className="list-disc list-inside text-md text-gray-200">
                <li>Developed and maintained web applications using React and Node.js.</li>
                <li>Collaborated with cross-functional teams to design and implement new features.</li>
                <li>Optimized application performance, resulting in a 20% reduction in load time.</li>
              </ul>
            </div>

            {/*Right Aligned*/}
            <div className="max-w-xl w-full flex justify-end block">
              <div className="bg-secondary text-white p-6 rounded-lg shadow-md text-left">
                <h2 className="text-2xl font-bold mb-2">Software Engineer at XYZ Company</h2>
                <p className="text-md mb-4">June 2021 - Present</p>
                <ul className="list-disc list-inside text-md text-gray-200 text-start">
                  <li>Developed and maintained web applications using React and Node.js.</li>
                  <li>Collaborated with cross-functional teams to design and implement new features.</li>
                  <li>Optimized application performance, resulting in a 20% reduction in load time.</li>
                </ul>
              </div>
            </div>

          </div>
        </Reveal>
      </section>

      {/* Portfolio Grid */}
      <section id="portfolio-grid" className="pt-14 w-full max-w-5xl relative">
        <Reveal>
        <div className="flex justify-center items-center align-middle w-full my-5 bg-secondary text-white p-6 rounded-lg shadow-md cursor-pointer hover-translate-y" onClick={() => openModalByID("Modal1")}>
          <div className="w-1/2 text-white p-6 rounded-lg">
            <img src="logo512.png" alt="Project Logo" className="w-full h-auto rounded-lg mb-4 cursor-pointer"/>
          </div>
          <div className="w-1/2 h-full bg-primary-text text-white p-6 rounded-lg shadow-md ml-4 relative">
            <h2 className="text-2xl font-bold mb-2">Project 1</h2>
            <p>Descripton of project</p>
            <a href="https://github.com/kolekikuta" target="_blank" rel="noopener noreferrer" className="absolute top-6 right-6 text-white hover:text-secondary transition-colors duration-300">
                  <FaGithub className="inline-block" size={40}/>
                </a>
            <ul className="flex space-x-4 mt-4">
              <li className="bg-white rounded-full font-bold px-2 text-primary-text">React</li>
              <li className="bg-white rounded-full font-bold px-2 text-primary-text">Node.js</li>
              <li className="bg-white rounded-full font-bold px-2 text-primary-text">Express</li>
            </ul>
          </div>
        </div>
        </Reveal>

        <Modal id="Modal1" isOpen={openModalId === "Modal1"} closeModal={closeModal}>
          <h2 className="text-2xl font-bold mb-4">Project Details</h2>
          <p>This is where you can add more details about the project, such as features, technologies used, challenges faced, etc.</p>
        </Modal>
        <Reveal>
        <div className="flex justify-center items-center align-middle w-full my-5 bg-secondary text-white p-6 rounded-lg shadow-md">
          <div className="w-1/2 text-white p-6 rounded-lg">
            <img src="logo512.png" alt="Project Logo" className="w-full h-auto rounded-lg mb-4 cursor-pointer" onClick={() => handleNavigation('/porjectName')}/>
          </div>
          <div className="w-1/2 h-full bg-primary-text text-white p-6 rounded-lg shadow-md ml-4">
            <h2 className="text-2xl font-bold">Project 1</h2>
            <p>Descripton of project</p>
          </div>
        </div>
        </Reveal>
      </section>
      </div>

      {/* Scroll to Top Button */}
      <AnimatePresence>
      {showScrollButton && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 , transition: { duration: 0.3 }}}
          exit={{ opacity: 0, transition: { duration: 0.3 }}}
          className="fixed bottom-4 right-4 text-white p-3"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <ChevronUpIcon className="h-10 w-10" />
        </motion.button>
      )}
      </AnimatePresence>

    </div>
  );
}
