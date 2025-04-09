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
      <section className="text-center w-full pt-14 flex justify-center items-center align-middle">
        <div className="relative">
          <Dots classNameStr="w-[22rem] h-[22rem] absolute top-2 right-2 rounded-full z-0"/>
          <motion.div
            initial={{ opacity: 0, y: 20, scale: .8, ease: "easeInOut" }}
            animate={{ opacity: 1, y: 0, scale: 1, ease: "easeInOut" }}
            transition={{ duration: 1 }}
            className="z-10 relative"
            >
              <img src="\nba_predictor_logo2.svg" alt="NBA Fantasy Logo" className="w-96 h-auto" />
          </motion.div>
        </div>

        <div className="overflow-hidden m-10 text-left w-3/4 relative">
          <Header title="NBA Fantasy Predictor"/>
          <a href="https://github.com/kolekikuta/fantasyStats" target="_blank" rel="noopener noreferrer" className="absolute top-2 right-6 hover:text-secondary transition-colors duration-300">
            <FaGithub className="inline-block text-primary-text hover:text-secondary transition transform duration-300" size={50}/>
          </a>
          <Reveal>
            <p className="text-lg font-light mb-4">As a longtime fantasy basketball player, I’ve always looked for ways to gain an edge — especially when
              it comes to deciding on trades, waiver pickups, or tricky start/sit choices. But even with so much basketball data available online, it’s
              tough to translate raw stats into clear, actionable insights for fantasy performance. That’s what inspired me to build the <strong>NBA Fantasy
              Value Predictor,</strong> a tool that combines real-time NBA data with predictive analytics to help fantasy managers like myself make smarter,
              faster decisions backed by data.</p>
          </Reveal>
          <Reveal>
            <p className="text-lg font-light mb-4">The app connects directly to the NBA API, pulling in real-time box score and player stats across recent
              games. It processes these metrics — such as minutes played, points, rebounds, and assists — to build a profile of each player’s
              current form and role. Then, using a linear regression model, it forecasts that player’s fantasy value for upcoming matchups based on recent
              performance and trends. Whether you’re trying to figure out if a hot waiver wire pickup is legit or evaluate the fairness of a trade, the
              predictor gives a data-backed projection to guide your decision-making.</p>
            </Reveal>
          <Reveal>
            <p className="text-lg font-light mb-4">On the technical side, the application was built using Python for data ingestion, processing, and modeling.
              I used Pandas for managing and analyzing time-series player data, and scikit-learn to build and train the regression models. Although it currently
              runs as a standalone script, I plan to build it out into a full-featured web app so that other fantasy basketball players can easily access and
              use its predictions in real time.</p>
          </Reveal>
          <Reveal>
            <p className="text-lg font-light mb-4">This project was a fun intersection of my interests in sports, statistics, and software. It taught me a lot
              about data modeling and how to turn raw information into something that’s actually useful for people. More importantly, it scratched the itch
              I’d always had during fantasy season — and now, I rarely make a roster move without consulting my own app first.</p>
          </Reveal>
        </div>
      </section>
      </div>
  </div>
    )
}