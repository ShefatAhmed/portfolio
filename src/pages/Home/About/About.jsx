import Aos from 'aos';
import React, { useEffect } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
const About = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    })
    const scrollToTop = () => {
        scroll.scrollToTop();
        setIsOpen(false);
      };
    return (
        <section className="py-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap items-center -mx-4">
                    <div className="w-full md:w-1/2 px-4">
                        <img
                            src="https://i.ibb.co/fS5ZM7w/1666932517260.jpg"
                            alt="About Us"
                            className="mx-auto h-auto  rounded-lg drop-shadow-2xl"
                            data-aos="fade-up"
                            data-aos-anchor-placement="top-center"
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-4 mt-8 md:mt-0">
                        <h1 className="title">About <span className='text-indigo-400'>Us </span></h1>
                        <p className="text-gray-700 mb-4">
                            Hi, I'm Shefat Ahmed, currently pursuing a BBA degree from Sirajganj Government College. I have a passion for MERN stack development and I am proficient in JavaScript. I enjoy creating web applications and exploring new technologies to enhance my skills. Based in Sirajganj, Bangladesh, I am dedicated to delivering high-quality and innovative solutions to meet the needs of clients and users.
                        </p>
                        <p className="text-gray-700 mb-4">
                            Throughout my educational journey, I have gained a solid understanding of business administration principles and practices. This knowledge, combined with my technical skills in MERN stack development, allows me to approach projects with a well-rounded perspective. I am committed to continuous learning and staying updated with the latest trends and advancements in the field of web development.
                        </p>
                        <ScrollLink
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-90}
                            duration={500}
                            className="btn hover:bg-indigo-800 glass bg-indigo-600 text-white mt-4 w-1/2">
                            Hire Me
                        </ScrollLink>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;