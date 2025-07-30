import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Reveal from "../utils/Reveal";
import Header from "../utils/Header";
import Dots from "../utils/Dots";
import Title from "../utils/Title";
import ScrollButton from "../utils/ScrollButton";
import { FaGithub, FaLink } from "react-icons/fa";

export default function LeaseMatePage () {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
      <div className="bg-background font-sans min-h-screen flex flex-col items-center">
      <div className="font-sans min-h-screen flex flex-col items-center px-6 max-w-9xl">

      {/* Hero Section */}
      <section className="text-center w-full pt-24 flex justify-center items-center align-middle">

        <div className="overflow-hidden text-left w-3/4 relative">
          <Title h1="Building an NBA Fantasy Value Predictor" p="Kole Kikuta | June 2025"/>
          <div>
            <a href="https://github.com/kolekikuta/fantasyStats" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors duration-300">
              <FaGithub className="inline-block text-primary-text hover:text-secondary transition transform duration-300" size={40}/>
            </a>
            <a href="https://nba-fantasy-predictor.onrender.com/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors duration-300">
              <FaLink className="inline-block text-primary-text hover:text-secondary transition transform duration-300 mx-4" size={40}/>
            </a>
          </div>

        </div>
      </section>
      <section className="text-center w-full flex justify-center items-center align-middle">
        <div className="overflow-hidden m-10 text-left w-3/4">
          <Reveal>
            <p className="text-lg font-light mb-6">Fantasy basketball is a game of skill, timing, and statistics—and I’ve always been fascinated by the challenge of finding
              undervalued players before they break out. This year, I decided to take a more analytical approach and build a full-stack web application that predicts NBA player
              fantasy performance using machine learning.</p>
          </Reveal>
          <Reveal>
            <h3 className="mb-2">Project Overview</h3>
            <p className="text-lg font-light mb-4">The goal for this project was to help fantasy basketball players, like myself, make data-driven decisions about trades, pickups, and
              lineup choices. This project uses real-time data from the NBA API to analyze player performance and forecast future fantasy value.
              The application collects box score data for individual players, processes recent game stats, and applies a linear regression model to
              predict upcoming fantasy outputs. To do this, I built:</p>
            <ul className="list-disc pl-12 mb-6">
              <li className="text-lg font-light mb-2">A Flask backend that collects and processes NBA player data daily</li>
              <li className="text-lg font-light mb-2-2">A Random Forest regression model that predicts fantasy value</li>
              <li className="text-lg font-light mb-2-2">A React frontend that displays predictions, player stats, and visualizations</li>
            </ul>
          </Reveal>
          <Reveal>
            <h3 className="mb-2">Model Selection: Why Random Forest?</h3>
            <p className="text-lg font-light mb-2">One of the core engineering challenges was selecting a model that generalized well across a diverse pool of players and stat profiles.
              after experimenting with cross-validation and optimizing for Root Mean Squared Error (RMSE), Random Forest emerged as the best candidate - achieving a 4.2 RMSE, a 15% improvement over baseline linear models.
              It handled non-linear relationships (like minutes played vs. fantasy value) and didn't require heavy feature scaling.</p>.
          </Reveal>
          <Reveal>
            <h3 className="mb-2">Future Plans</h3>
            <p className="text-lg font-light mb-4">Here's what's next for the app:</p>
            <ul className="list-disc pl-12 mb-6">
              <li className="text-lg font-light mb-2">🔐 User accounts with Firebase Auth to allow customization and saved player watchlists</li>
              <li className="text-lg font-light mb-2-2">☁️ Firestore integration for a scalable, cloud-native backend</li>
              <li className="text-lg font-light mb-2-2">📱 A responsive mobile UI for on-the-go fantasy updates</li>
              <li className="text-lg font-light mb-2-2">📈 Advanced analytics like player comparison and trade value analysis</li>
            </ul>
          </Reveal>
          <Reveal>
            <h3 className="mb-2">Final Thoughts</h3>
            <p className="text-lg font-light mb-6">This project was a fun and challenging way to blend my interests in data science, software engineering, and basketball. I learned a lot about building production-grade Flask APIs, performing model evaluation
              with real-world data constraints, and deploying and maintaining live web apps with a repeatable update pipeline. Thanks for reading and good luck in your fantasy leagues!</p>
          </Reveal>
      </div>
      </section>
      </div>
  </div>
    )
}