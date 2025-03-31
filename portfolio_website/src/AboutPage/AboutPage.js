import React from "react";
import { useNavigate } from "react-router-dom";
import './AboutPage.css';
import Header from "../Header";
import Footer from "../Footer";

export default function HomePage () {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    }

    const handleResumeDownload = () => {
        const link = document.createElement('a');
        link.href = '/resume.pdf';
        link.download = 'Kole_Kikuta_Resume.pdf';
        link.click();
    }

    const scrollToSection = () => {
      document.getElementById('portfolio-grid').scrollIntoView({ behavior: 'smooth' });
    }

  return (
    <div className="bg-primary text-black font-sans min-h-screen flex flex-col items-center">
        <div className="bg-primary text-black font-sans min-h-screen flex flex-col items-center px-6">
        {/* Nav Bar */}
        <Header></Header>

        {/* Hero Section */}
        <section className="text-center h-screen w-full pt-14 flex justify-center items-center align-middle">
          <img src="\portrait.jpg" alt="Kole Kikuta" className="w-96 h-auto rounded-xl mx-10 mb-4" />
          <div className="pt-10 text-left">
            <h1 className="text-4xl font-bold text-gray-900">About Me</h1>
            <p className="mt-4 text-xl text-gray-600">I am a Software Engineer specializing in full-stack development.</p>
            <p className="mt-2 text-md text-gray-600">I enjoy building applications that solve real-world problems and enhance user experiences.</p>
          </div>
        </section>
        </div>
        <Footer></Footer>
    </div>
  );
}
