import React from 'react';
import Reveal from "../utils/Reveal";

const ExperienceCard = ( {title, period, description, isLast }) => {
    return (
        <div>
            <Reveal>
                <div className="w-full justify-start p-6 text-start block">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-2xl font-bold">{title}</h3>
                      <p className="text-md font-light italic">{period}</p>
                    </div>
                    <ul className="list-disc list-inside text-md text-gray-200 font-light">
                      {description.map((desc, index) => (
                        <li key={index} className="mb-2">{desc}</li>
                      ))}
                    </ul>
                </div>
                {!isLast && <hr className="my-4 border-t border-secondary" />}

            </Reveal>
        </div>
    )
}

export default ExperienceCard;