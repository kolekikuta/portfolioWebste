import React from 'react';

const ExperienceCard = ( {title, period, description }) => {
    return (
        <div>
            <div className="w-full justify-start p-6 text-start block mb-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold mb-1">{title}</h2>
                  <p className="text-md font-light italic mb-2">{period}</p>
                </div>
                <ul className="list-disc list-inside text-md text-gray-200 font-light">
                  {description.map((desc, index) => (
                    <li key={index} className="mb-2">{desc}</li>
                  ))}
                </ul>
            </div>
            <hr className="my-4 border-t border-gray-700" />
        </div>
    )
}

export default ExperienceCard;