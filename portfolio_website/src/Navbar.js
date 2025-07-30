import React from "react";
import { useNavigate } from "react-router-dom";


export default function Navbar() {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    }

    const handleResumeOpen = () => {
        const link = document.createElement('a');
        link.href = '/resume.pdf';
        link.target = '_blank'; // Opens in a new tab
        link.rel = 'noopener noreferrer'; // Security best practice
        link.click();
    };

    const handleContact = () => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    };


    return (
        <header className="w-full text-center py-3 fixed top-0 left-0 z-50 bg-navbar-gradient flex justify-between items-center content-center px-6">
        <h2 className="text-xl font-medium cursor-pointer my-0" onClick={() => handleNavigation('/')}>Kole Kikuta</h2>
        <ul className="flex justify-center space-x-6 text-lg font-medium justify-center content-center align-middle">
            <li onClick={() => handleNavigation('/about')} className="cursor-pointer underline-middle-expand font-normal">About</li>
            <li onClick={() => handleNavigation('/projects')} className="cursor-pointer underline-middle-expand font-normal">Projects</li>
            <li onClick={() => handleNavigation('/contact')} className="cursor-pointer underline-middle-expand font-normal">Contact</li>
            <li onClick={() => handleResumeOpen()} className="cursor-pointer underline-middle-expand font-normal">Resume</li>
        </ul>
      </header>
    )
}