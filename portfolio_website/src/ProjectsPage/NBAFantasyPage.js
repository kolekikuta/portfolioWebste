import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Reveal from "../utils/Reveal";
import Header from "../utils/Header";
import Dots from "../utils/Dots";
import { FaGithub } from "react-icons/fa";

export default function NBAFantasyPage () {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
      <div className="bg-background font-sans min-h-screen flex flex-col items-center">
      <div className="font-sans min-h-screen flex flex-col items-center px-6 max-w-7xl">

      {/* Hero Section */}
      <section className="text-center h-screen w-full pt-14 flex justify-center items-center align-middle">
        <Dots classNameStr="w-[22rem] h-[22rem] absolute top-[16rem] left-[7rem] rounded-full z-0"/>
        <motion.div
          initial={{ opacity: 0, y: 20, scale: .8, ease: "easeInOut" }}
          animate={{ opacity: 1, y: 0, scale: 1, ease: "easeInOut" }}
          transition={{ duration: 1 }}
          className="z-10"
          >
            <img src="\nba_predictor_logo2.svg" alt="NBA Fantasy Logo" className="w-96 h-auto" />
        </motion.div>

        <div className="overflow-hidden m-10 text-left w-3/4 relative">
          <Header title="NBA Fantasy Value Predictor"/>
          <a href="https://github.com/kolekikuta/fantasyStats" target="_blank" rel="noopener noreferrer" className="absolute top-2 right-6 hover:text-secondary transition-colors duration-300">
            <FaGithub className="inline-block text-primary-text hover:text-secondary transition transform duration-300" size={50}/>
          </a>
          <Reveal>
            <p className="text-lg font-light mb-4">Hi, I’m a fourth-year Computer Engineering student at UC Santa Barbara, with a strong passion for software
              development and innovation. I’m especially excited about the future of AI/ML, deep learning, and embedded systems —
              areas where I see endless potential to solve real-world problems and build smarter, more responsive technology.</p>
          </Reveal>
          <Reveal>
            <p className="text-lg font-light mb-4">My journey into tech has always been driven by curiosity and creativity. Whether it's developing
              AI-powered tools like Leasemate for my capstone project or building predictive models for NBA fantasy players, I love
              working on projects that blend data, design, and impact.</p>
          </Reveal>
          <Reveal>
            <p className="text-lg font-light mb-4">Outside the classroom, I’m actively involved in the Nikkei Student Union, where I stay connected to
              my Japanese-American heritage and help create community for other students. I’m also part of Yonsei Basketball, a program
              that brings together generations of Japanese-American players, and I’ve helped organize youth camps and cultural events
              that bridge identity and sport.</p>
          </Reveal>
          <Reveal>
            <p className="text-lg font-light mb-4">When I’m not coding or on campus, you’ll probably find me outdoors — snowboarding in the mountains, surfing along the coast,
              or just soaking up the California sun. I also love playing basketball, hitting the golf course, and spinning music as a DJ
               — all outlets that keep me energized, inspired, and grounded.</p>
          </Reveal>
          <Reveal>
            <p className="text-lg font-light">I'm always looking for opportunities to grow, collaborate, and contribute to projects with purpose.</p>
          </Reveal>
        </div>
      </section>
      </div>
  </div>
    )
}