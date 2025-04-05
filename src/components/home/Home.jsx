import React from 'react';
import Styles from "./Home.module.css";
import Social from "./Social.jsx";
import Data from "./Data.jsx";
import shot from '../../assets/hotPic.jpg'
import shot2 from '../../assets/fynshit.jpg'
import pfp from "../../assets/ChatGPT Image Mar 28, 2025, 10_59_32 AM.png"
import instagram from "../../assets/instagram.png"
import linkedIn from "../../assets/Vector.png"
import gitHub from "../../assets/Vector (1).png"
import aboutPicture from "../../assets/Cartoon Tomi.png"

import Information from "./Information.jsx";
import ScrollDown from "./ScrollDown.jsx";

const Home = () => {
    return(
        <>
            <div
                className="md:mb-30 flex flex-col lg:flex-row mt-20 lg:mt-42 justify-center items-center lg:items-start text-center lg:text-left px-4 lg:px-20">
                <div
                    className="mb-10 lg:mb-0 lg:mr-32 w-[250px] md:w-[300px] lg:w-[400px] h-[250px] md:h-[300px] lg:h-[400px] rounded-full border-4 border-gray-300 flex items-center justify-center overflow-hidden">
                    <img
                        src={aboutPicture}
                        alt="Profile"
                        className="w-auto h-auto max-w-none max-h-none scale-125 md:scale-100 rounded-full object-cover object-center pt-60 md:pt-100"
                    />
                </div>


                <div className="lg:max-w-[500px]">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl mb-5 md:mb-12"
                        style={{fontFamily: 'Poppins, sans-serif'}}>
                        OluwaTomilade Yemi-Oyebola
                    </h1>

                    <h3 className="text-xl md:text-2xl lg:text-3xl mb-4 md:mb-8">
                        Software Engineer
                    </h3>
                    <p className="text-[14px] md:text-lg lg:text-2xl font-light text-gray-500 mb-6 md:mb-12">
                        Focused on engineering solutions <br/> that make a difference.
                    </p>

                    <a href="#contact"
                       className="px-4 bg-white text-black border border-black py-2 rounded-xl text-sm md:text-lg lg:text-2xl font-light
                   hover:bg-black transition-colors duration-300 hover:text-white md:mb-12">
                        <button>
                            Say Hello <i className="pl-2 fa-solid fa-paper-plane"></i>
                        </button>
                    </a>

                    <div
                        className="md:mt-12 mx-auto md:ml-0 mx-auto mt-6 flex space-x-6 justify-center lg:justify-start h-13 w-13 md:h-[56px] md:w-[56px] lg:h-[56px] lg:w-[56px]">
                        <img src={instagram} alt="Instagram"
                             className="transform transition-transform duration-300 hover:scale-110 bg-[#ffff0]"/>
                        <img src={linkedIn} alt="LinkedIn"
                             className="transform transition-transform duration-300 hover:scale-110"/>
                        <img src={gitHub} alt="GitHub"
                             className="transform transition-transform duration-300 hover:scale-110"/>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Home;
