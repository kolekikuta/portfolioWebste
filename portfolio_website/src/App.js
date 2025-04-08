import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import HomePage from "./HomePage/HomePage";
import AboutPage from "./AboutPage/AboutPage";
import ProjectsPage from "./ProjectsPage/ProjectsPage";
import LeaseMatePage from "./ProjectsPage/LeaseMatePage";
import NBAFantasyPage from "./ProjectsPage/NBAFantasyPage";
import PageTransition from "./utils/PageTransition";
import { useLenis } from "./utils/Lenis"
import './global.css'

function AnimatedRoutes() {
  const location = useLocation();
  useLenis();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <HomePage />
            </PageTransition>
          }
        />
        <Route
          path="/about"
          element={
            <PageTransition>
              <AboutPage />
            </PageTransition>
          }
        />
        <Route
          path="/projects"
          element={
            <PageTransition>
              <ProjectsPage />
            </PageTransition>
          }
        />
        <Route
          path="/leasemate"
          element={
            <PageTransition>
              <LeaseMatePage />
            </PageTransition>
          }
        />
        <Route
          path="/nbafantasy"
          element={
            <PageTransition>
              <NBAFantasyPage />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
