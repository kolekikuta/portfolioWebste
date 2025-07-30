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
import Header from "../utils/Header"
import ScrollButton from "../utils/ScrollButton";

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
    <div className="bg-background font-sans min-h-screen flex flex-col items-center">
      {/* Hero Section */}
      <section id="hero-section" className="text-center flex flex-col h-screen w-full pt-14 justify-center items-center align-middle">
      <Title h1="Hi, my name is Kole" p="I am a software engineer from Long Beach, California specializing in full-stack development."/>
      </section>
      <div id="body" className="font-sans min-h-screen flex flex-col items-center px-20 max-w-9xl">
          <motion.div
            initial={{ opacity: 0, y: 20, scale: .8, ease: "easeInOut" }}
            animate={{ opacity: 1, y: 0, scale: 1, ease: "easeInOut" }}
            transition={{ delay: 0.5, duration: 1 }}
            className="w-1/3 h-60 absolute top-1/4 right-20 z-0"
            style={{
              backgroundImage: "radial-gradient(rgba(217, 217, 217, 0.5) 1px, transparent 0)",
              backgroundSize: "20px 20px",
            }}
          ></motion.div>

      {/* Experience Section */}
      <section id="experience-section" className="w-full pt-20 mb-10">
        <Header title="Experience"/>

        <div className="w-full mx-auto text-white ">
          <ExperienceCard
            title="Full Stack Developer - UCSB Capstone Project"
            period="August 2024 - March 2025"
            stack="React | Express.js | Google Firebase | Google Gemini | OCR"
            description={[
              "Built LeaseMate, a full-stack web app that assists first-time renters by extracting and summarizing lease documents using OCR and Gemini-powered natural language processing",
              "Implemented pagination in the OCR processing workflow, reducing peak memory usage by 40% and improving processing speed by 35% on multi-page lease documents",
              "Increased lease comprehension by 60% (based on user feedback) by generating plain-language summaries of complex clauses, reducing back-and-forth communication with property managers by 40% and enabling renters to find answers to common questions 2x faster",
              "Led feature development within a Scrum-based Agile workflow, using Trello for sprint planning and Git/GitHub for version control, including pull requests and code reviews to deliver functional code on schedule",
              "Presented at the UCSB Computer Science Capstone Competition, earning 3rd place out of 10+ teams based on technical execution, design, and social impact"
            ]}
          />
          <ExperienceCard
            title="Systems Support Engineer at Genius Sports"
            period="August 2024 - February 2025"
            stack="Grafana | PromQL | AWS EC2/S3 | AWX | Linux CLI"
            description={[
              "Collaborated with engineering and operations teams to triage and resolve high-priority incidents, contributing to a 25% reduction in average resolution time (MTTR) over 6 months",
              "Developed and maintained more than 30 custom Grafana dashboards and alerts, enabling real-time monitoring of critical services and increasing incident visibility",
              "Investigated and resolved failures in AWX job executions and AWS infrastructure by analyzing system logs and service metrics, reducing recurring deployment issues by 30% and ensuring production stability"
            ]}
          />
          <ExperienceCard
            title="Freelance Web Developer at Terasaki Budokan"
            period="June 2024 - September 2024"
            stack="HTML/CSS"
            description={[
              "Designed and implemented full-site UI/UX improvements, focusing on mobile responsiveness and SEO performance",
              "Contributed to a 200% increase in web traffic and longer average session durations through design and usability enhancements"
            ]}
          />
          <ExperienceCard
            title="Information Technology Intern at UCSB Kavli Institute for Theoretical Physics"
            period="October 2022 - Present"
            description={[
              "Installed, maintained, and repaired hardware/software across networks, servers, and workstations for 40+ staff members",
              "Operated Audio-Visual systems for globally streamed academic conventions and events"
            ]}
            isLast={true}
          />
        </div>
      </section>

      {/* Portfolio Grid */}
      <section id="portfolio-grid" className="pt-20 mb-10 w-full relative">
        <Header title="Projects"/>
        <div className="flex flex-col items-center justify-center w-full">
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
        </div>
      </section>
      </div>



      <ScrollButton/>
    </div>
  );
}
