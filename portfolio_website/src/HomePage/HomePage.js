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
            <ChevronDownIcon className="h-10 w-10 inline-block color-white transform transition hover:scale-125 duration-500" />
          </span>
        </button>
        </Reveal>
      </section>

      {/* Experience Section */}
      <section id="experience-section" className="w-full pt-14">
        <Reveal>
          <h2 className="mt-4">Experience</h2>
        </Reveal>
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
            <ExperienceCard
              title="Web Development Intern at Terasaki Budokan"
              period="June 2024 - September 2024"
              description={[
                "Responsible for website rebuild for elevated user experience and increased engagement using front-end programming languages, including HTML and CSSk",
                "Collaborated with management and user test groups to identify UI/UX improvements that resulted in a 500% increase in web traffic"
              ]}
            />
            <ExperienceCard
              title="Information Technology Intern at UCSB Kavli Institute for Theoretical Physics"
              period="October 2022 - Present"
              description={[
                "Responsible for installing, maintaining, and repairing hardware and software components of network, server, and computer systems",
                "Responsible for troubleshooting and resolving computer, network, and printing issues for staff of 40+ members",
                "Operated Audio-Visual systems for internationally broadcasted conventions and discussions"
              ]}
              isLast={true}
            />
          </div>
      </section>

      {/* Portfolio Grid */}
      <section id="portfolio-grid" className="pt-14 w-full relative">
        <h2>Projects</h2>
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
            <ChevronUpIcon className="h-10 w-10 transform transition hover:scale-125 duration-500" />
        </motion.button>
      )}
      </AnimatePresence>

    </div>
  );
}
