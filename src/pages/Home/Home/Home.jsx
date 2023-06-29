import { Element } from 'react-scroll';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
const Home = () => {
    return (
        <div>
            <Element name="banner">
                <Banner></Banner>
            </Element>
            <Element name="skills">
                <Skills></Skills>
            </Element>
            <Element name="projects">
                <Projects></Projects>
            </Element>
            <Element name="about">
                <About></About>
            </Element>
            <Element name="contact">
                <Contact></Contact>
            </Element>
        </div>
    );
};

export default Home;