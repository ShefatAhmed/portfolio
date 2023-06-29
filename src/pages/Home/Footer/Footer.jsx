import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import './Footer.css';
const Footer = () => {
    const scrollToTop = () => {
        scroll.scrollToTop();
        setIsOpen(false);
    };
    const personName = "Md Shefat Ahmed";
    return (
        <footer className="py-16">
            <div className="container mx-auto flex flex-col items-center">
                <div className="mb-4">
                    <ScrollLink
                        to="banner"
                        className="font-semibold text-2xl tracking-tight link-style"
                        spy={true}
                        smooth={true}
                        offset={-90}
                        duration={500}
                    >
                        <i className="fa-solid fa-person-hiking text-indigo-600"></i> Shefat
                        <span className="text-indigo-600">A</span>hmed
                    </ScrollLink>
                </div>
                <p className="text-sm">© 2023 <span className='text-indigo-400'>{personName}</span>. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;