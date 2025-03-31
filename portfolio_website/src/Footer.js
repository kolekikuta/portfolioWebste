import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function Footer() {
    return (
        <footer className="w-full bg-secondary text-white p-8 text-center" id="contact-me">
            <h1 className="text-2xl font-bold my-2 text-white">Let's Connect!</h1>
            <p className="text-md mb-4">Feel free to reach out to me on social media or via email.</p>

            <div className="flex justify-center items-center mb-4 space-x-8">
                <a href="mailto:kolekikuta@gmail.com" className="block text-white text-xl hover:text-secondary transition">
                    <MdEmail className="inline-block" size={45}/>
                </a>
                <a href="https://www.linkedin.com/in/kolekikuta/" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-secondary transition-colors duration-300">
                  <FaLinkedin className="inline-block" size={40}/>
                </a>
                <a href="https://github.com/kolekikuta" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-secondary transition-colors duration-300">
                  <FaGithub className="inline-block" size={40}/>
                </a>
            </div>
        </footer>
    )
}