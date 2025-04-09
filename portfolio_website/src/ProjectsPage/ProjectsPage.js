import React, { useEffect }from "react";
import { motion, animate} from "framer-motion";
import Title from "../utils/Title";
import Reveal from "../utils/Reveal";
import ScrollButton from "../utils/ScrollButton";
import Dots from "../utils/Dots";
import Header from "../utils/Header";
import ProjectCard from "../HomePage/ProjectCard";



const ProjectsPage = () => {

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);


    return (
      <div className="bg-background font-sans min-h-screen flex flex-col items-center">
      <div className="font-sansflex flex-col items-center px-6 max-w-9xl mt-24">

      {/* Hero Section */}
      <section className="text-center w-full flex flex-col justify-center items-center align-middle">

        <div className="overflow-hidden text-left w-3/4 min-h-48">
          <Header title="My Work"/>
          <Reveal>
            <p className="text-lg font-light mb-20 pb-1">I'm super passionate about solving real-world problems through thoughtful design
              and creative code. I love bringing ideas to life and building projects that make an impact. Click on any project card
              to dive deeper and learn more about what I’ve been working on!</p>
          </Reveal>
        </div>
          <Reveal>
          <ProjectCard
            title="UCSB Capstone Project - LeaseMate"
            description="Developed as a part of UC Santa Barbara's Computer Science Capstone program, LeaseMate is an AI-powered, all-in-one
            communications platform for property managers and tenants. Leasemate leverages natural language processing to intelligently route
            tenant inquiries, summarize lease agreements, and track maintenance progress — all in a centralized dashboard."
            imgPath="leasemate_logo.svg"
            imgAlt="LeaseMate Logo"
            skills={["React", "Node.js", "Google Gemini API", "Google Firebase"]}
            ghLink="https://github.com/CMSC189A-APPFOLIO2/CMSPC189A"
            projectPage='/leasemate'
          />
        </Reveal>
        <Reveal>
          <ProjectCard
            title="NBA Fantasy Value Predictor"
            description="The goal for this project was to help fantasy basketball players, like myself, make data-driven decisions about trades, pickups, and
            lineup choices. This project uses real-time data from the NBA API to analyze player performance and forecast future fantasy value.
            The application collects box score data for individual players, processes recent game stats, and applies a linear regression model to
            predict upcoming fantasy outputs. "
            imgPath="nba_predictor_logo2.svg"
            imgAlt="NBA Predictor Logo"
            skills={["Python", "NBA API", "Pandas", "NumPy"]}
            ghLink="https://github.com/kolekikuta/fantasyStats"
            projectPage='/nbafantasy'
          />
        </Reveal>

      </section>
      </div>
  </div>

    )

}
export default ProjectsPage;