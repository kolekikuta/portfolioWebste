import React, { useEffect }from "react";
import { motion, animate} from "framer-motion";
import Title from "../utils/Title";
import Reveal from "../utils/Reveal";
import { ChevronDownIcon } from "@heroicons/react/24/outline";




const ProjectsPage = () => {
    const scrollToSection = () => {
        const target = document.getElementById("projects-section");
        if (!target) return;

        const targetPosition = target.getBoundingClientRect().top + window.scrollY + 1;
        const startPosition = window.scrollY;

        animate(startPosition, targetPosition, {
          duration: 1, // Adjust duration in seconds
          ease: "easeInOut",
          onUpdate: (value) => window.scrollTo(0, value),
        });
      };

    return (
        <div className="bg-primary text-black font-sans min-h-screen flex flex-col items-center">
            <div className="bg-primary text-black font-sans min-h-screen flex flex-col items-center px-6">

            {/* Hero Section */}
            <section id="hero-section" className="text-center flex flex-col h-screen w-full pt-14 justify-center items-center align-middle">
                <Title h1="My Work" p="I am a software engineer from Long Beach, California specializing in full-stack development."/>
                <Reveal>
                    <button
                      onClick={() => scrollToSection()}
                      className="mt-6 text-white transition"
                    >
                      <span>
                        <ChevronDownIcon className="h-10 w-10 inline-block color-white" />
                      </span>
                    </button>
                </Reveal>
            </section>

            {/* Projects Section */}
            <section id="projects-section" className="text-center flex flex-col h-screen w-full pt-14 justify-center items-center align-middle">


            </section>

        </div>
    </div>

    )

}
export default ProjectsPage;