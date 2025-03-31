import React from "react";
import { useNavigate } from "react-router-dom";


export default function Header() {
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

    return (
        <header className="w-full text-center py-3 fixed top-0 left-0 shadow-md z-10 bg-primary flex justify-between items-center content-center px-6">
        <h2 className="text-xl font-bold text-gray-900 cursor-pointer " onClick={() => handleNavigation('/')}>Kole Kikuta</h2>
        <ul className="flex justify-center space-x-6 text-lg font-medium text-gray-700 justify-center content-center align-middle">
            <li onClick={() => handleNavigation('/about')} className="cursor-pointer underline-middle-expand">About</li>
            <li onClick={() => handleNavigation('/projects')} className="cursor-pointer underline-middle-expand">Projects</li>
            <li onClick={() => handleResumeDownload()} className="cursor-pointer underline-middle-expand">Resume</li>
        </ul>
      </header>
    )
}