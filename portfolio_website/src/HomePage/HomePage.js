import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence, animate } from 'framer-motion';
import Reveal from "../utils/Reveal";
import { Modal } from "../utils/Modal";
import PageTransition from "../utils/PageTransition";
import Title from "../utils/Title";
import { FaGithub } from "react-icons/fa";
import ProjectCard from "./ProjectCard";
import ExperienceCard from "./ExperienceCard";

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
        duration: 1, // Adjust duration in seconds
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
          <div className="w-full mx-auto text-white">

            <ExperienceCard
              title="Systems Support Engineer at Genius Sports"
              period="August 2024 - February 2025"
              description={[
                "Supported cross-functional teams in identifying system improvements and resolving technical issues across a broad tech stack",
                "Managed systems administration and real-time troubleshooting of hardware/software systems using Grafana custom alerts/dashboards with PromQL",
                "Troubleshooted issues in AWS EC2 and S3 cloud computing environments"
              ]}
              />


            {/*Left Aligned*/}
            <div className="w-full justify-start p-6 text-start block mb-4">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold mb-1">Systems Support Engineer at Genius Sports</h2>
                <p className="text-md font-light italic mb-2">August 2024 - February 2025</p>
              </div>
              <ul className="list-disc list-inside text-md text-gray-200 font-light">
                <li>Supported cross-functional teams in identifying system improvements and resolving technical issues across a broad tech stack</li>
                <li>Managed systems administration and real-time troubleshooting of hardware/software systems using Grafana custom alerts/dashboards with PromQL</li>
                <li>Troubleshooted issues in AWS EC2 and S3 cloud computing environments</li>
              </ul>
            </div>
            <hr className="my-4 border-t border-gray-700" />

            <div className="w-full justify-start p-6 text-start block mb-4">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold mb-1">Web Development Intern at Terasaki Budokan</h2>
                <p className="text-md font-light italic mb-2">August 2024 - February 2025</p>
              </div>
              <ul className="list-disc list-inside text-md text-gray-200 font-light">
                <li>Supported cross-functional teams in identifying system improvements and resolving technical issues across a broad tech stack</li>
                <li>Managed systems administration and real-time troubleshooting of hardware/software systems using Grafana custom alerts/dashboards with PromQL</li>
                <li>Troubleshooted issues in AWS EC2 and S3 cloud computing environments</li>
              </ul>
            </div>
            <hr className="my-4 border-t border-gray-700" />

            <div className="w-full justify-start p-6 text-start block mb-4">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold mb-1">Systems Support Engineer at Genius Sports</h2>
                <p className="text-md font-light italic mb-2">August 2024 - February 2025</p>
              </div>
              <ul className="list-disc list-inside text-md text-gray-200 font-light">
                <li>Supported cross-functional teams in identifying system improvements and resolving technical issues across a broad tech stack</li>
                <li>Managed systems administration and real-time troubleshooting of hardware/software systems using Grafana custom alerts/dashboards with PromQL</li>
                <li>Troubleshooted issues in AWS EC2 and S3 cloud computing environments</li>
              </ul>
            </div>
            <hr className="my-4 border-t border-gray-700" />

            {/*Right Aligned*/}
            <div className="w-full flex justify-end">
              <div className="max-w-xl text-white p-6 rounded-lg shadow-md text-left bg-secondary mb-4">
                <h2 className="text-2xl font-bold mb-2"></h2>
                <p className="text-md mb-4">June 2024 - September 2024</p>
                <ul className="list-disc list-inside text-md text-gray-200 text-start">
                  <li>Responsible for website rebuild for elevated user experience and increased engagement using front-end programming languages, including HTML and CSS</li>
                  <li>Collaborated with management and user test groups to identify UI/UX improvements that resulted in a 500% increase in web traffic</li>
                </ul>
              </div>
            </div>

            {/*Left Aligned*/}
            <div className="max-w-xl w-full justify-start bg-secondary text-white p-6 rounded-lg shadow-md text-start block mb-4">
              <h2 className="text-2xl font-bold mb-1">Information Technology Intern at UCSB Kavli Institute for Theoretical Physics</h2>
              <p className="text-md font-light italic mb-2">October 2022 - Present</p>
              <ul className="list-disc list-inside text-md text-gray-200">
                <li>Responsible for installing, maintaining, and repairing hardware and software components of network, server, and computer systems</li>
                <li>Responsible for troubleshooting and resolving computer, network, and printing issues for staff of 40+ members</li>
                <li>Operated Audio-Visual systems for internationally broadcasted conventions and discussions</li>
              </ul>
            </div>

          </div>
        </Reveal>
      </section>

      {/* Portfolio Grid */}
      <section id="portfolio-grid" className="pt-14 w-full max-w-5xl relative">
        <Reveal>
        <div className="flex justify-center items-center align-middle w-full my-5 text-white rounded-lg px-6 cursor-pointer hover-translate-y" onClick={() => openModalByID("Modal1")}>
          <div className="w-1/4 text-white rounded-lg">
            <img src="logo512.png" alt="Project Logo" className="w-full h-auto rounded-lg mb-4 cursor-pointer"/>
          </div>
          <div className="w-3/4 h-full bg-primary-text text-white p-6 rounded-lg shadow-md ml-4 relative">
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
          <ProjectCard
            title="Project Title"
            description="Description of the project goes here."
            imgPath="logo512.png"
            imgAlt="Project Logo"
            skills={["React", "Node.js", "Express"]}
            ghLink="https://github.com/kolekikuta"
            projectPage='/project'
          />
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
