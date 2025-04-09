import React from "react";
import { FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const ProjectCard = ({ title, description, imgPath, imgAlt, skills, ghLink, projectPage }) => {

    const navigate = useNavigate();
    const handleNavigation = (path) => {
        navigate(path);
    }

    return (
        <div className="flex justify-center items-center align-middle w-full max-w-6xl my-10 rounded-3xl cursor-pointer hover:shadow-lg transition transform duration-300" onClick={() => handleNavigation(projectPage)}>
            <div className="w-1/4 rounded-lg p-6">
              <img src={imgPath} alt={imgAlt} className="w-full h-auto rounded-lg cursor-pointer"/>
            </div>
            <div className="w-3/4 h-full p-6 relative">
              <h3 className="text-2xl font-bold mb-2">{title}</h3>
              <p className="font-light max-w-3xl">{description}</p>
              <a href={ghLink} target="_blank" rel="noopener noreferrer" className="absolute top-4 right-6 hover:text-secondary transition-colors duration-300">
                <FaGithub className="inline-block text-primary-text hover:text-secondary transition transform duration-300" size={40}/>
              </a>
              <ul className="flex space-x-4 mt-4">
                {skills.map((skill, index) => (
                    <li key={index} className="bg-primary-text rounded-full font-bold px-2 text-tertiary">{skill}</li>
                ))}
              </ul>
            </div>
        </div>
    )
}
export default ProjectCard;
