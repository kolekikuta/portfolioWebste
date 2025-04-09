import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Reveal from "../utils/Reveal";
import Header from "../utils/Header";
import Dots from "../utils/Dots";
import Title from "../utils/Title";
import ScrollButton from "../utils/ScrollButton";
import { FaGithub } from "react-icons/fa";

export default function LeaseMatePage () {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
      <div className="bg-background font-sans min-h-screen flex flex-col items-center">
      <div className="font-sans min-h-screen flex flex-col items-center px-6 max-w-7xl">

      {/* Hero Section */}
      <section className="text-center w-full pt-14 flex justify-center items-center align-middle">
        <div className="relative">

          <motion.div
            initial={{ opacity: 0, y: 20, scale: .8, ease: "easeInOut" }}
            animate={{ opacity: 1, y: 0, scale: 1, ease: "easeInOut" }}
            transition={{ duration: 1 }}
            className="z-10 relative"
            >
              <img src="\leasemate_logo.svg" alt="LeaseMate Logo" className="w-96 h-auto z-10" />
          </motion.div>
          <Dots classNameStr="w-[22rem] h-[22rem] absolute top-2 right-2 rounded-full z-0"/>
        </div>


        <div className="overflow-hidden m-10 text-left w-3/4 relative">
          <Header title="LeaseMate"/>
          <a href="https://github.com/CMSC189A-APPFOLIO2/CMSPC189A" target="_blank" rel="noopener noreferrer" className="absolute top-2 right-6 hover:text-secondary transition-colors duration-300">
            <FaGithub className="inline-block text-primary-text hover:text-secondary transition transform duration-300" size={50}/>
          </a>
          <Reveal>
            <p className="text-lg font-light mb-4">LeaseMate was born out of a shared frustration among students and young renters navigating the complexities
              of lease agreements. As college students renting apartments for the first time, my team and I experienced firsthand how challenging it can be
              to understand legal jargon, track responsibilities, and manage payments. We realized there was a significant gap in accessible, tech-driven
              tools to empower renters with clarity and confidence. Developed as a part of the UCSB Computer Science Capstone Program, with collaboration from
              our industry mentors at Appfolio, we create LeaseMate — a smart lease companion app designed to make renting fair, understandable, and organized.</p>
          </Reveal>
          <Reveal>
            <p className="text-lg font-light mb-4">LeaseMate serves as a central platform for renters to upload and interact with their lease agreements
              using AI-powered tools. We leveraged natural language processing (NLP) to intelligently extract and highlight critical terms such as rent
              amounts, due dates, penalties, and tenant responsibilities. LeaseMate features a chatbot-style interface that allows users to ask questions
              about their renting policies and receive instant, accurate answers from their lease document. On top of that, we built a smart maintenance
              request system that allows users to log issues using simple natural language, which the app then classifies and prioritizes for tracking.
              By combining AI with a user-friendly interface, we made lease management and maintenance communication clearer, faster, and more transparent for renters.</p>
          </Reveal>
          <Reveal>
            <p className="text-lg font-light mb-4">From a technical standpoint, LeaseMate was built as a full-stack application. The front end is designed using
              React.js for a clean and intuitive user experience, while the back end is powered by Node.js and Express, with Google Firebase as our primary database
              to store user data and lease documents. For document processing and data extraction, we implemented Optical Character Recognition (OCR) using Tesseract.js.
              Our AI-powered features were developed using the Google Gemini API, which allowed us to leverage advanced NLP capabilities for document understanding and user interaction.</p>
          </Reveal>
        </div>
      </section>
      </div>
  </div>
    )
}