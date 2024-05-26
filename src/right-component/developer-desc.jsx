import React, {useState, useEffect} from "react"
import ReactDOM from "react-dom"
import classnames from "classnames"
import DownloadIcon from '../img/download-icon.png'
import LinkedIn from "../img/Linked-in.png"
import Facebook from "../img/facebook.png"
import Instagram from "../img/Instagram-icon.png"
import Github from "../img/github.png"
import Down from "../img/dropdown.png"


const Profile = () => {
    const [isVisible, setIsVisible] = useState(false);

    const [isOpacity, setIsOpacity] = useState(false);

    const toggleVisibility = () => {
      setIsVisible(!isVisible);

      setIsOpacity(!isOpacity)
    };

    
        const [text, setText] = useState("");
        const [isTyping, setIsTyping] = useState(true);
      
        const textToType = "gelo.io";
      
        useEffect(() => {
          if (isTyping) {
            let charIndex = 0;
            const interval = setInterval(() => {
              if (charIndex <= textToType.length) {
                setText(textToType.slice(0, charIndex));
                charIndex++;
              } else {
                setIsTyping(false);
                clearInterval(interval);
              }
            }, 100); // Adjust typing speed here (milliseconds)
            return () => clearInterval(interval);
          }
        }, [isTyping, textToType]);

    return(
        <div className="xl:w-600 xl:h-screen xl:pl-30 xl:pr-0 font-inter xl:ml-850 xl:mb-20 xl:fixed flex xl:flex-col xl:justify-start xl:items-start md:w-full md:h-screen md:relative sm:w-full sm:h-auto sm:flex-col sm:items-center sm:justify-start sm:pl-30 sm:pr-30">
            <h1 className="xl:w-full text-white font-profile-logo xl:text-170 xl:text-end sm:text-170 ">{text}</h1>
            <div className="w-full xl:h-30 flex flex-row xl:justify-start xl:items-start xl:gap-2 sm:h-30 sm:justify-center sm:items:center sm:gap-2">
                <div className="xl:w-30 xl:h-full rounded-full border border-white border-dashed border-1 sm:w-30 sm:h-30"></div>
                <div className="xl:w-30 h-full rounded-full bg-s-color sm:w-30"></div>
                <div className="xl:w-30 h-full rounded-full bg-white sm:w-30"></div>
                <div className="xl:w-30 h-full rounded-full bg-mint sm:w-30"></div>
            </div>
            <h1 onClick={toggleVisibility} className="text-white font-Istok font-bold text-s-color xl:text-36 xl:bg-transparent xl:p-0 sm:text-30 sm:mt-10 sm:bg-card sm:pt-15 sm:pb-15 sm:pl-20 sm:pr-20 sm:rounded-xl sm:flex sm:flex-row sm:items-center sm:justify-center gap-1 hover:cursor-pointer">Web Developer<img src={Down} className={`sm:w-30 xl:hidden sm:opacity-75 ${isVisible ? 'hidden' : 'block'}`}/></h1>
            <p className={`text-s-color xl:text-17 xl:text-start xl:block xl:mt-n10 sm:text-17 sm:text-start sm:mt-10 ${isVisible ? 'block' : 'hidden'}`}>Hi, I'm Angelo, a Computer Engineering student passionate about web development. I enjoy transforming designs into interactive experiences using HTML, CSS, and JavaScript to captivate users.</p>
            <p className={`text-s-color xl:pt-3 xl:text-17 xl:text-start xl:block xl:mt-0  sm:text-17 sm:text-start sm:mt-20 ${isVisible ? 'block' : 'hidden'}`}>Apart from coding, I enjoy playing chess, basketball, listening to music, and savoring freshly brewed coffee.</p>
            <a href="https://drive.google.com/file/d/17rC1e93tNYK3E3bUnvujZwWi-NrCQW7W/view?usp=sharing"><div className={`xl:w-175 xl:h-47 xl:block xl:flex xl:flex-row xl:justify-center xl:items-center sm:flex sm:flex-row sm:justify-center sm:items-center bg-button-color gap-3 rounded xl:mt-5 hover:bg-download hover:cursor-pointer sm:w-200 sm:h-50 sm:mt-20 ${isVisible ? 'block' : 'hidden'}`}>
                <img src={DownloadIcon} className="w-4 h-4 pt-1/9"></img>
                <h1 className="text-white xl:text-13 sm:text-15 sm:text-center">Download CV</h1>
            </div></a>
            <p className={`text-s-color xl:mt-6 xl:text-17 text-start xl:block sm:text-27 sm:mt-20  ${isVisible ? 'block' : 'hidden'}`}>Want to connect? <span className="text-white"><a href="mailto: angelogarcialoreno@gmail.com">Email</a></span> me or follow me on:</p>
            <div className="xl:w-full xl:h-auto flex flex-row justify-start items-center gap-4 xl:mt-5 sm:mt-20">
                <a href="https://www.linkedin.com/in/angelo-l-411b81246/"><img src={LinkedIn} className="xl:w-40 transition-transform transition duration-300 ease-in-out hover:-translate-y-3 sm:w-40"/></a>
                <a href="https://www.facebook.com/profile.php?id=61558749013431&sk=about"><img src={Facebook} className="xl:w-40 transition-transform transition duration-300 ease-in-out hover:-translate-y-3 sm:w-40"/></a>
                <a href="https://www.instagram.com/heyy_gie?igsh=cnd0MG93djBsM3Bx"><img src={Instagram} className="xl:w-40 transition-transform transition duration-300 ease-in-out hover:-translate-y-3 sm:w-40"/></a>
                <a href="https://github.com/itsme-angeloo"><img src={Github} className="xl:w-40 transition-transform transition duration-300 ease-in-out hover:-translate-y-3 bg-opacity-7 sm:w-40"/></a>
            </div>
        </div>
    )
}

export default Profile