import React, { useEffect }from "react";
import { motion } from "framer-motion";
import Reveal from "../utils/Reveal";
import Header from "../utils/Header";
import Dots from "../utils/Dots";

export default function AboutPage () {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-background font-sans min-h-screen flex flex-col items-center">
        <div className="font-sans min-h-screen flex flex-col items-center px-6 max-w-7xl">

        {/* Hero Section */}
        <section className="text-center h-screen w-full pt-14 flex justify-center items-center align-middle">
          <Dots classNameStr="w-1/4 h-[30rem] absolute top-1/4 left-20 z-0"/>
          <motion.div
            initial={{ opacity: 0, y: 20, scale: .8, ease: "easeInOut" }}
            animate={{ opacity: 1, y: 0, scale: 1, ease: "easeInOut" }}
            transition={{ duration: 1 }}
            className="z-10"
            >
              <img src="\portrait.jpg" alt="Kole Kikuta" className="w-96 h-auto rounded-xl mb-4" />
          </motion.div>

          <div className="overflow-hidden m-10 text-left w-3/4">
            <Header title="About Me"/>
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
  );
}
