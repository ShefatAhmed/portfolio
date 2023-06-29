import React from 'react';
import './Skills.css';
const Skills = () => {
    return (
        <div className="skills_section mt-8">
            <div className="skills_head">
                <h2>My <span className="text-red-500">Skills</span></h2>
                <p>Here are my skills to represent my expertise</p>
            </div>

            <div className="skills_main grid grid-cols-2 gap-y-6 gap-x-10">
                <div className="skill_bar">
                    <div className="info flex justify-between items-center px-2">
                        <p>HTML</p>
                        <p>100%</p>
                    </div>
                    <div className="bar h-2 bg-gray-300 rounded-md mt-1">
                        <span className="html h-full bg-red-500 rounded-md animate-html"></span>
                    </div>
                </div>
                <div className="skill_bar">
                    <div className="info flex justify-between items-center px-2">
                        <p>CSS</p>
                        <p>90%</p>
                    </div>
                    <div className="bar h-2 bg-gray-300 rounded-md mt-1">
                        <span className="css h-full bg-red-500 rounded-md animate-css"></span>
                    </div>
                </div>
                <div className="skill_bar">
                    <div className="info flex justify-between items-center px-2">
                        <p>Tailwind</p>
                        <p>92%</p>
                    </div>
                    <div className="bar h-2 bg-gray-300 rounded-md mt-1">
                        <span className="tailwind h-full bg-red-500 rounded-md animate-tailwind"></span>
                    </div>
                </div>
                <div className="skill_bar">
                    <div className="info flex justify-between items-center px-2">
                        <p>Java Script</p>
                        <p>96%</p>
                    </div>
                    <div className="bar h-2 bg-gray-300 rounded-md mt-1">
                        <span className="js h-full bg-red-500 rounded-md animate-js"></span>
                    </div>
                </div>
                <div className="skill_bar">
                    <div className="info flex justify-between items-center px-2">
                        <p>React js</p>
                        <p>98%</p>
                    </div>
                    <div className="bar h-2 bg-gray-300 rounded-md mt-1">
                        <span className="react h-full bg-red-500 rounded-md animate-react"></span>
                    </div>
                </div>
                <div className="skill_bar">
                    <div className="info flex justify-between items-center px-2">
                        <p>Node js</p>
                        <p>89%</p>
                    </div>
                    <div className="bar h-2 bg-gray-300 rounded-md mt-1">
                        <span className="node h-full bg-red-500 rounded-md animate-node"></span>
                    </div>
                </div>
                <div className="skill_bar">
                    <div className="info flex justify-between items-center px-2">
                        <p>Express js</p>
                        <p>86%</p>
                    </div>
                    <div className="bar h-2 bg-gray-300 rounded-md mt-1">
                        <span className="express h-full bg-red-500 rounded-md animate-express"></span>
                    </div>
                </div>
                <div className="skill_bar">
                    <div className="info flex justify-between items-center px-2">
                        <p>MongoDB</p>
                        <p>95%</p>
                    </div>
                    <div className="bar h-2 bg-gray-300 rounded-md mt-1">
                        <span className="mongo h-full bg-red-500 rounded-md animate-mongo"></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;