import React from "react";
import { useNavigate } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function Footer() {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    }

    return (
        <footer className="w-full bg-footer-gradient text-white px-8 py-6 flex justify-evenly" id="contact-me">
            <div>
            <h3 className="mb-2">Let's Connect!</h3>
            <p className="text-md font-light">Feel free to reach out to me on social media or via email.</p>
            </div>
            <div className="flex justify-center items-center space-x-8">
                <a href="mailto:kolekikuta@gmail.com">
                    <MdEmail className="inline-block text-primary-text hover:text-secondary transition-colors duration-300" size={45}/>
                </a>
                <a href="https://www.linkedin.com/in/kolekikuta/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="inline-block text-primary-text hover:text-secondary transition-colors duration-300" size={40}/>
                </a>
                <a href="https://github.com/kolekikuta" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="inline-block text-primary-text hover:text-secondary transition-colors duration-300" size={40}/>
                </a>
            </div>
        </footer>
    )
}