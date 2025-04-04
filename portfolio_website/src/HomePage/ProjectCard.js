import React from "react";
import { FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ProjectCard = ({ title, description, imgPath, imgAlt, skills, ghLink, projectPage }) => {

    const navigate = useNavigate();
    const handleNavigation = (path) => {
        navigate(path);
    }

    return (
        <div className="flex justify-center items-center align-middle w-full my-5 rounded-lg cursor-pointer hover-translate-y" onClick={() => handleNavigation(projectPage)}>
            <div className="w-1/4 rounded-lg">
              <img src={imgPath} alt={imgAlt} className="w-full h-auto rounded-lg mb-4 cursor-pointer"/>
            </div>
            <div className="w-3/4 h-full p-6 ml-4 relative">
              <h3 className="text-2xl font-bold mb-2">{title}</h3>
              <p>{description}</p>
              <a href={ghLink} target="_blank" rel="noopener noreferrer" className="absolute top-6 right-6 hover:text-secondary transition-colors duration-300">
                    <FaGithub className="inline-block text-primary-text" size={40}/>
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
