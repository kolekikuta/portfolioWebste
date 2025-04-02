import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function Footer() {
    return (
        <footer className="w-full bg-secondary text-white p-8" id="contact-me">
            <div className="flex justify-evenly items-center">
                <div>
                    <h1 className="text-2xl font-bold my-2 text-white">Let's Connect!</h1>
                    <hr className="w-16 border-white my-2"/>
                    <p className="text-md font-light my-2">Feel free to reach out to me on social media or via email.</p>
                </div>

            <div className="flex justify-center items-center space-x-8">
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
            </div>
        </footer>
    )
}