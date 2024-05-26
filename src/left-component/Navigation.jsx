import React , {useRef} from "react"
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import Projects from "../img/projects-btn.png"
import Certificates from "../img/xertificates-btn.png"
import Tech from "../img/tech-tool-btn.png"
import Education from "../img/education-btn.png"
import Reviews from "../img/reviews-btn.png"



const Navigation = () => {
    
    return(
        <div className="xl:w-10-p xl:h-screen fixed xl:flex xl:flex-col xl:justify-end xl:items-center gap-2 xl:pb-10 hidden xl:block">
            <ScrollLink to="projects" smooth={true} duration={500} spy={true} exact='true' offset={-70}><img src={Projects} width={50} className="hover:cursor-pointer transition-transform transition duration-300 ease-in-out hover:translate-x-3"/></ScrollLink>
            <ScrollLink to="certs" smooth={true} duration={500} spy={true} exact='true' offset={-70}><img src={Certificates} width={50} className="hover:cursor-pointer transition-transform transition duration-300 ease-in-out hover:translate-x-3" /></ScrollLink>
            <ScrollLink to="skills" smooth={true} duration={500} spy={true} exact='true' offset={-70}><img src={Tech} width={50} className="hover:cursor-pointer transition-transform transition duration-300 ease-in-out hover:translate-x-3"/></ScrollLink>
            <ScrollLink to="educ" smooth={true} duration={500} spy={true} exact='true' offset={-70}><img src={Education} width={50} className="hover:cursor-pointer transition-transform transition duration-300 ease-in-out hover:translate-x-3"/></ScrollLink>
            <ScrollLink to="revs" smooth={true} duration={500} spy={true} exact='true' offset={-70}><img src={Reviews} width={50} className="hover:cursor-pointer transition-transform transition duration-300 ease-in-out hover:translate-x-3"/></ScrollLink>
        </div>
    )
}

export default Navigation