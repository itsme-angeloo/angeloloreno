import React , { useRef, useEffect } from "react"
import ReactDOM from "react-dom"
import Html from "../img/icons8-html-5.png"
import Css from "../img/icons8-css.png"
import JavaScript from "../img/icons8-javascript.png"
import WeatherApp from "../img/weather-app.png"
import TodoApp from "../img/To-do.png"
import WebDesign from "../img/web-design.png"
import Travel from "../img/airplane.png"
import CertificatesIcon from "../img/icons8-certificate.png"
import ViewCert from "../img/icons8-view.png"
import Coding from "../img/coding.png"
import CloudComputing from "../img/cloud-computing.png"
import HtmlIcon from "../img/html-icon.png"
import CssIcon from "../img/css.png"
import JavaScriptIcon from "../img/js.png"
import ReactIcon from "../img/react.png"
import TailwindIcon from "../img/tailwind.png"
import GitIcon from "../img/git.png"
import VSIcon from "../img/vs-code.png"
import Figma from "../img/icons8-figma-96.png"
import Link from "../img/icons8-link-100.png"
import useIntersectionObserver from './useIntersectionObserver';

const Content = ({ children, className, ...props }) => {
    const [setRef, isVisible] = useIntersectionObserver({
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      });

    return(
        <div ref={setRef} className="xl:w-3/6 xl:h-auto xl:pt-200 xl:flex xl:flex-col xl:justify-end align-end xl:gap-3 xl:pb-10 xl:pr-5 xl:ml-10-p sm:pl-30 sm:pr-30 sm:pt-30 transition-opacity duration-1000 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'} ${className}" {...props}>
            <p className="text-s-color font-inter xl:text-right xl:pr-quarter xl:block sm:hidden" id="projects">PROJECTS</p>
            <div className="xl:w-full xl:h-full flex flex-col justify-end align-end xl:gap-20 sm:gap-20 sm:mb-30">
                <div className="xl:w-800 xl:h-card bg-gradient-to-br from-blue-1 via-blue-3 to-blue-1 xl:rounded-3xl flex xl:flex-row justify-between items-center sm:h-auto sm:flex-col sm:rounded-xl sm:pt-20 sm:pb-70 sm:pr-20 sm:pl-20">
                    <div className="w-1/2 h-full flex flex-row justify-center items-center sm:mb-20">
                        <img src={WeatherApp} className="xl:w-250 sm:w-200"></img>
                    </div>

                    <div className="xl:w-1/2 xl:h-full flex flex-col justify-between items-start xl:pt-80 xl:pr-10 xl:pb-50 xl:pr-30 sm:w-full">
                        <h1 className="xl:text-36 font-Istok font-bold text-white">Weather App</h1>
                        <p className="font-Inter text-white xl:text-15 xl:mt-n50 sm:mb-20">Weather App with city input capability. Get instant updates tailored to  your location, keeping you prepared for any forecast, anywhere.</p>
                        <div className="xl:w-full xl:h-9 flex flex-row gap-2 mt-3 flex flex-row xl:justify-end sm:justify-center sm:w-full sm:h-10">
                            <a href="https://project-cityweatherapp.netlify.app/">
                                <div className="xl:w-125 xl:h-40 bg-s-color flex flex-row justify-center items-center gap-2 rounded-full opacity-50 hover:opacity-100 hover:cursor-pointer sm:w-250 sm:h-11">
                                    <img src={Link} className="xl:w-4 sm:w-15"/>
                                    <p className="text-white font-Inter text-13">View Site</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                <div ref={setRef} className={`xl:w-800 xl:h-card bg-card xl:rounded-3xl flex xl:flex-row justify-between items-center sm:h-auto sm:flex-col sm:rounded-xl sm:pt-20 sm:pb-70 sm:pr-20 sm:pl-20`}>
                    <div className="w-1/2 h-full flex flex-row justify-center items-center sm:mb-20">
                        <img src={TodoApp} className="xl:w-230 sm:w-200"></img>
                    </div>
                    <div className="xl:w-1/2 xl:h-full flex flex-col justify-between items-start xl:pt-80 xl:pr-10 xl:pb-50 xl:pr-30 sm:w-full">
                        <h1 className="xl:text-36 font-Istok font-bold text-white xl:mb-70">To-do App</h1>
                        <p className="font-Inter text-s-color  xl:text-15 xl:mt-n60 sm:mb-20">A minimalist web To-Do List Application. It enables users to easily add and delete tasks, providing a straightforward interface for basic task management.</p>
                        <div className="xl:w-full xl:h-9 flex flex-row gap-2 mt-3 flex flex-row xl:justify-end sm:justify-center sm:w-full sm:h-10">
                            <a href="https://project-todolistapp.netlify.app">
                                <div className="xl:w-125 xl:h-40 bg-s-color flex flex-row justify-center items-center gap-2 rounded-full opacity-50 hover:opacity-100 hover:cursor-pointer sm:w-250 sm:h-11">
                                    <img src={Link} className="xl:w-4 sm:w-15"/>
                                    <p className="text-white font-Inter text-13">View Site</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className={`xl:w-800 xl:h-card bg-gradient-to-br from-purple-2 via-purple-3 to-purple-1 xl:rounded-3xl flex xl:flex-row justify-between items-center sm:h-auto sm:flex-col sm:rounded-xl sm:pt-20 sm:pb-70 sm:pr-20 sm:pl-20`}>
                    <div className="w-1/2 h-full flex flex-row justify-center items-center sm:mb-20">
                        <img src={Travel} className="xl:w-200 sm:w-200"></img>
                    </div>
                    <div className="w-1/2 h-full flex flex-col justify-center xl:items-start sm:items-center">
                        <h1 className="xl:text-36 font-Istok font-bold text-white">Launching soon</h1>
                    </div>
                </div>
            </div>
            
            <p className="text-s-color font-inter xl:text-right xl:pr-quarter xl:mt-10 ease-in-out xl:block sm:hidden" id="certs">ONLINE CERTIFICATES</p>
            <div className={`xl:w-full xl:h-full flex flex-col justify-end align-end xl:gap-20 sm:gap-20 sm:mb-30`}>
                <div className="xl:w-800 xl:h-card bg-card xl:rounded-3xl flex xl:flex-row justify-between items-center xl:pb-20 sm:h-auto sm:flex-col sm:rounded-xl sm:pt-20 sm:pb-70 sm:pr-20 sm:pl-20">
                    <div className="w-1/2 h-full flex flex-row xl:justify-center xl:items-center sm:mb-20">
                        <img src={WebDesign} className="xl:w-200 sm:w-250"></img>
                    </div>
                    <div className="xl:w-1/2 xl:h-full flex flex-col justify-between items-start xl:pt-50 xl:pr-10 xl:pb-50 xl:pr-30  sm:w-full">
                        <img src={CertificatesIcon} className="xl:w-30 xl:mb-50" />
                        <h1 className="xl:text-36 xl:leading-10 font-Istok font-bold text-white xl:mt-n40 xl:mb-20">Responsive Web Design</h1>
                        <p className="font-Inter text-s-color xl:text-15 xl:mt-n20 xl:mb-20 sm:mb-20">Completed an online course in Responsive Web Design, gaining skills to create versatile and user-friendly interfaces</p>
                        <div className="xl:w-full xl:h-9 flex flex-row gap-2 mt-3 flex flex-row xl:justify-end sm:justify-center sm:w-full sm:h-10">
                            <a href="https://www.freecodecamp.org/certification/Im_Angelo/responsive-web-design"><div className="xl:w-150 xl:h-40 bg-s-color flex flex-row justify-center items-center gap-2 rounded-full opacity-50 hover:opacity-100 hover:cursor-pointer sm:w-250 sm:h-11">
                                <img src={ViewCert} className="xl:w-4"/>
                                <p className="text-white font-Inter text-13">View Certificates</p>
                            </div></a>
                        </div>
                    </div>
                </div>

                <div className="xl:w-800 xl:h-card bg-card xl:rounded-3xl flex xl:flex-row justify-between items-center xl:pb-20 sm:h-auto sm:flex-col sm:rounded-xl sm:pt-20 sm:pb-70 sm:pr-20 sm:pl-20">
                    <div className="w-1/2 h-full flex flex-row xl:justify-center xl:items-center sm:mb-20">
                        <img src={Coding} className="xl:w-200 sm:w-250"></img>
                    </div>
                    <div className="xl:w-1/2 xl:h-full flex flex-col justify-between items-start xl:pt-50 xl:pr-10 xl:pb-50 xl:pr-30  sm:w-full">
                        <img src={CertificatesIcon} className="xl:w-30 xl:mb-10 xl:mb-30" />
                        <h1 className="xl:text-36 xl:leading-10 font-Istok font-bold text-white xl:mt-n40 xl:mb-20">JavaScript/Frameworks</h1>
                        <p className="font-Inter text-s-color xl:text-15 xl:mt-n20 sm:mb-20">Successfully completed an online React JS tutorial, advancing skills for web development.</p>
                        <div className="xl:w-full xl:h-9 flex flex-row gap-2 mt-3 flex flex-row xl:justify-end sm:justify-center sm:w-full sm:h-10">
                            <a href="https://drive.google.com/file/d/1G9gj0BSA3C-Ye9qHCLjqVTV01S-wmKu7/view?usp=sharing"><div className="xl:w-150 xl:h-40 bg-s-color flex flex-row justify-center items-center gap-2 rounded-full opacity-50 hover:opacity-100 hover:cursor-pointer sm:w-250 sm:h-11">
                                <img src={ViewCert} className="xl:w-4"/>
                                <p className="text-white font-Inter text-13">View Certificates</p>
                            </div></a>
                        </div>
                    </div>
                </div>
                
                <div className="xl:w-800 xl:h-card bg-card xl:rounded-3xl flex xl:flex-row justify-between items-center xl:pb-20 sm:h-auto sm:flex-col sm:rounded-xl sm:pt-20 sm:pb-70 sm:pr-20 sm:pl-20">
                    <div className="w-1/2 h-full flex flex-row xl:justify-center xl:items-center sm:mb-20">
                        <img src={CloudComputing} className="xl:w-200 sm:w-250"></img>
                    </div>
                    <div className="xl:w-1/2 xl:h-full flex flex-col justify-between items-start xl:pt-50 xl:pr-10 xl:pb-50 xl:pr-30  sm:w-full">
                        <img src={CertificatesIcon} className="xl:w-30 xl:mb-10 xl:mb-30" />
                        <h1 className="xl:text-36 xl:leading-10 font-Istok font-bold text-white xl:mt-n40 xl:mb-2">Cloud Computing</h1>
                        <p className="font-Inter text-s-color xl:text-15 xl:mt-n20 sm:mb-20">Completed Cloud Foundations course online, acquiring fundamental knowledge for cloud computing.</p>
                        <div className="xl:w-full xl:h-9 flex flex-row gap-2 mt-3 flex flex-row xl:justify-end sm:justify-center sm:w-full sm:h-10">
                            <a href="https://drive.google.com/drive/folders/1KvaJJDAqvDXuO9sMWRbI7lECwrmEvviy"><div className="xl:w-150 xl:h-40 bg-s-color flex flex-row justify-center items-center gap-2 rounded-full opacity-50 hover:opacity-100 hover:cursor-pointer sm:w-250 sm:h-11">
                                <img src={ViewCert} className="xl:w-4"/>
                                <p className="text-white font-Inter text-13">View Certificates</p>
                            </div></a>
                        </div>
                    </div>
                </div>
                
            </div>
            <p className="text-s-color font-inter xl:text-right xl:pr-quarter xl:mt-10 ease-in-out xl:block sm:hidden" id="skills">SKILLS</p>
            <div className="xl:w-full xl:h-full xl:flex xl:flex-col xl:justify-center items-center xl:gap-5 sm:mb-20">
                <div className="xl:w-full grid xl:grid-cols-4 xl:grid-rows-2 gap-7 place-items-center sm:grid-cols-2 sm:grid-rows-4">
                    <div className="xl:w-125 xl:h-125 bg-card rounded-xl flex flex-col justify-between items-center pt-7 pb-5 sm:w-150 sm:h-150">
                        <img src={HtmlIcon} className="xl:w-40"/>
                        <p className="text-center text-white text-13">HTML</p>
                    </div>
                    <div className="xl:w-125 xl:h-125 bg-card rounded-xl flex flex-col justify-between items-center pt-7 pb-5 sm:w-150 sm:h-150">
                        <img src={CssIcon} className="xl:w-40"/>
                        <p className="text-center text-white text-13">CSS</p>
                    </div>
                    <div className="xl:w-125 xl:h-125 bg-card rounded-xl flex flex-col justify-between items-center pt-7 pb-5 sm:w-150 sm:h-150">
                        <img src={JavaScriptIcon} className="xl:w-40"/>
                        <p className="text-center text-white text-13">JavaScript</p>
                    </div>
                    <div className="xl:w-125 xl:h-125 bg-card rounded-xl flex flex-col justify-between items-center pt-7 pb-5 sm:w-150 sm:h-150">
                        <img src={ReactIcon} className="xl:w-40"/>
                        <p className="text-center text-white text-13">React JS</p>
                    </div>
                    <div className="xl:w-125 xl:h-125 bg-card rounded-xl flex flex-col justify-between items-center pt-7 pb-5 sm:w-150 sm:h-150">
                        <img src={TailwindIcon} className="xl:w-40"/>
                        <p className="text-center text-white text-13">Tailwind</p>
                    </div>
                    <div className="xl:w-125 xl:h-125 bg-card rounded-xl flex flex-col justify-between items-center pt-7 pb-5 sm:w-150 sm:h-150">
                        <img src={GitIcon} className="xl:w-40"/>
                        <p className="text-center text-white text-13">Git Source <br></br>Control</p>
                    </div>
                    <div className="xl:w-125 xl:h-125 bg-card rounded-xl flex flex-col justify-between items-center pt-7 pb-5 sm:w-150 sm:h-150">
                        <img src={VSIcon} className="xl:w-40"/>
                        <p className="text-center text-white text-13">VS code</p>
                    </div>
                    <div className="xl:w-125 xl:h-125 bg-card rounded-xl flex flex-col justify-between items-center pt-7 pb-5 sm:w-150 sm:h-150">
                        <img src={Figma} className="xl:w-40 text-13 sm:w-50"/>
                        <p className="text-center text-white text-13">Figma</p>
                    </div>
                    
                </div>

            </div>

            <p className="text-s-color font-inter xl:text-right xl:pr-quarter xl:mt-10 ease-in-out xl:block sm:hidden" id="educ">EDUCATION</p>
            <div className="xl:w-full xl:h-full xl:flex xl:flex-col xl:justify-center align-center xl:gap-5 xl:pr-5 xl:text-15 sm:text-13 sm:ml-10 sm:mb-20 sm:gap-5">
                <div className="xl:w-full xl:h-full text-s-color text-Inter flex xl:flex-row justify-start items-start xl:gap-80 xl:pt-5 sm:gap-0 sm:flex-col">
                    <h1 className="xl:w-1/5 sm:w-full">2021 - Present</h1>
                    <h1>Bicol University of Polangui <br/> Bachelor of Science in Computer Engineering(BSCpE) <br/> Polangui City, Albay</h1>
                </div>
                <div className="xl:w-full xl:h-full text-s-color text-Inter flex xl:flex-row justify-start items-start xl:gap-80 xl:pt-5 sm:gap-0 sm:pt-2 sm:flex-col">
                    <h1 className="xl:w-1/5 sm:w-full" >2019 - 2021</h1>
                    <h1>Ligao City National Technical Vocational High School <br/> Senior High School, General Academic Strand(GAS) <br /> Nasisi Ligao City, Albay</h1>
                </div>
                <div className="xl:w-full xl:h-full text-s-color text-Inter flex xl:flex-row justify-start items-start xl:gap-80 xl:pt-5 sm:gap-0 sm:pt-2 sm:flex-col">
                    <h1 className="xl:w-1/5 sm:w-full">2017 - 2019</h1>
                    <h1>Ligao City National Technical Vocational High School <br/> Junior High School <br /> Nasisi Ligao City, Albay</h1>
                </div>
                <div className="xl:w-full xl:h-full text-s-color text-Inter flex xl:flex-row justify-start items-start xl:gap-80 xl:gap-80 xl:pt-5 sm:gap-0 sm:pt-2 sm:flex-col">
                    <h1 className="w-1/5">2011 - 2017</h1>
                    <h1>Don Teotimo Elementary School <br/> Elementary <br /> Nasisi Ligao City, Albay</h1>
                </div>
            </div>
            <p className="text-s-color font-inter xl:text-right xl:pr-quarter xl:mt-10 ease-in-out xl:block sm:hidden" id="revs">REVIEWS</p>
            <div className="xl:w-full xl:h-full xl:flex xl:flex-col xl:justify-center align-center xl:gap-5 xl:pr-5 p-5 sm:mb-20">
                <div className="xl:w-800 xl:h-100 bg-card xl:rounded-3xl flex flex-row justify-center items-center sm:w-full sm:h-50 sm:rounded">
                    <h1 className="text-s-color text-center">No reviews yet.</h1>
                </div>
                
            </div>

            <footer className="xl:w-full xl:h-1/2 sm:mb-20">
              <p className="text-s-color xl:text-15 sm:text-13">&copy; Angelo Loreno 2024. All right reserved.</p>
            </footer>
        </div>
    )
}

export default Content