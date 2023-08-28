import React, { useEffect } from 'react';
import './Projects.css';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import Aos from 'aos';
const Projects = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    })
    return (
        <div className="holder mx-5 mt-16">
            <div className="container">
                <h1 className="title text-center">My <span className='text-indigo-400'>Latest </span> Projects</h1>
                <p className='text-center'>I have completed these projects in the last three months</p>
                <div className="scroll-list">
                    <div className="scroll-item shadow-2xl rounded-lg" data-aos="flip-left">
                        <div className="bot-button">
                            <p className='font-bold'>InfinitePower</p>
                            <Link to="https://github.com/ShefatAhmed/summer-camp-client" className='glass hover:bg-indigo-800 px-5 py-1 rounded mx-2'>
                                <i class="fa-brands fa-github"></i>
                            </Link>
                            <Link to="https://infinite-power.netlify.app/" className='glass hover:bg-indigo-800 px-5 py-1 rounded'>
                                Live Site
                            </Link>
                        </div>
                    </div>
                    <div className="scroll-item shadow-2xl rounded-lg" data-aos="zoom-in">
                        <div className="bot-button">
                        <p className='font-bold'>ToyStars</p>
                            <Link to="https://github.com/ShefatAhmed/toy-marketplace-client" className='glass hover:bg-indigo-800 px-5 py-1 rounded mx-2'>
                                <i class="fa-brands fa-github"></i>
                            </Link>
                            <Link to="https://toystars.netlify.app/" className='glass hover:bg-indigo-800 px-5 py-1 rounded'>
                                Live Site
                            </Link>
                        </div>
                    </div>

                    <div className="scroll-item  shadow-2xl rounded-lg" data-aos="flip-right">
                        <div className="bot-button">
                        <p className='font-bold'>BaburchiGhor</p>
                            <Link to="https://github.com/ShefatAhmed/chef-recipe-client" className='glass hover:bg-indigo-800 px-5 py-1 rounded mx-2'>
                                <i class="fa-brands fa-github"></i>
                            </Link>
                            <Link to="https://celadon-dodol-ef1d87.netlify.app/" className='glass hover:bg-indigo-800 px-5 py-1 rounded'>
                                Live Site
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;