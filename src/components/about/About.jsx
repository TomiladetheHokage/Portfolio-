import React from 'react';

import cv from "../../assets/Tomilade-CV (1).pdf";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

import aboutPicture from "../../assets/Cartoon Tomi.png"
import instagram from "../../assets/instagram.png"
import linkedIn from "../../assets/Vector.png"
import gitHub from "../../assets/Vector (1).png"

const About = () => {
    return (
        <>
            <section id="about" className="py-20">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="bg-white overflow-hidden md:mt-20">
                        {/*<div className="font-semibold text-black justify-center text-center md:mb-12 md:text-4xl text-3xl">About*/}
                        {/*    Me*/}
                        {/*</div>*/}
                        <div className="md:flex gap-x-12">
                            <div className="md:w-1/3 w-40 h-40 md:w-80 md:h-80 mx-auto mb-28 mt-8 md:mt-0 md:mb-0  md:scale-100">
                                <img
                                    src={aboutPicture}
                                    alt="Profile"
                                    className="object-cover mx-auto"
                                />
                            </div>
                            <div className="md:w-2/3 p-8">
                                <h2 className="mt-2 text-3xl font-bold text-gray-900 md:mb-4">Passionate About Building Great Software</h2>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    I’m Yemi-Oyebola Tomilade.
                                    I’ve always had a strong desire to build and make things.
                                    That passion led me to learn software engineering.
                                </p>

                                <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                                    Today, I’m skilled in full-stack development and DevOps, building web, mobile, and
                                    embedded systems.
                                    But beyond just coding, I see myself as an entrepreneur—focused on solving problems
                                    and creating real value.
                                </p>

                                <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                                    My vision is to use technology and innovation to help save Nigeria — creating jobs,
                                    solving problems, and making a lasting impact on my community.
                                </p>


                                <div
                                    className="md:mt-12 mx-auto md:ml-0 mx-auto mt-6 flex space-x-6 justify-center lg:justify-start h-13 w-13 md:h-[56px] md:w-[56px] lg:h-[56px] lg:w-[56px]">
                                    <img src={instagram} alt="Instagram"
                                         className="transform transition-transform duration-300 hover:scale-110 bg-[#ffff0]"/>
                                    <img src={linkedIn} alt="LinkedIn"
                                         className="transform transition-transform duration-300 hover:scale-110"/>
                                    <img src={gitHub} alt="GitHub"
                                         className="transform transition-transform duration-300 hover:scale-110"/>
                                </div>
                                {/* Download CV Button */}
                                <a
                                    download
                                    href={cv}
                                    className="mt-10 md:mt-20 bg-blue-500 text-white px-4 py-3 rounded-lg shadow-lg text-lg sm:text-xl
    hover:bg-[#0090FF] transition-transform duration-300 transform hover:scale-105 inline-flex items-center gap-2"
                                >
                                    Download CV <FontAwesomeIcon icon={faDownload}/>
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/*<div className="flex flex-col items-center text-center px-6 py-12 md:mt-42">*/}
            {/*    /!* Heading *!/*/}
            {/*    <h6 className="text-3xl sm:text-4xl md:text-5xl font-semibold">About Me</h6>*/}
            {/*    <p className="font-light text-lg md:text-2xl sm:text-xl mt-2 text-gray-500">My intro</p>*/}

            {/*    /!* Introduction Text *!/*/}
            {/*    <h6 className="mt-8 text-lg sm:text-xl md:text-3xl leading-[1.8] max-w-8xl">*/}
            {/*        Software Engineer | B.Sc. in Computer Science, Caleb University. <br/>*/}
            {/*        Passionate about Engineering Scalable Solutions, Designing, Developing, <br/>*/}
            {/*        and Maintaining Robust Software Systems.*/}
            {/*    </h6>*/}

            {/*    <h6 className="mt-8 text-lg sm:text-xl md:text-3xl leading-[1.8] max-w-8xl">*/}
            {/*        I specialize in **React, Next.js, Java, Spring Boot**, and DevOps practices like*/}
            {/*        Docker and CI/CD. <br/> My goal is to build scalable and high-performance applications*/}
            {/*        that make a difference.*/}
            {/*    </h6>*/}


            {/*    /!* Experience & Projects Cards *!/*/}
            {/*    <div*/}
            {/*        className="mt-12 md:mt-20 flex flex-col sm:flex-row items-center justify-center gap-12 md:space-x-12">*/}
            {/*        /!* Experience Card *!/*/}
            {/*        <div*/}
            {/*            className="bg-white flex flex-col items-center border border-gray-200 rounded-lg shadow-[10px_10px_20px_rgba(0,0,0,0.2)] py-6 md:w-[550px] md:h-[265px] w-[350px] transition-transform duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[15px_15px_25px_rgba(0,0,0,0.25)]">*/}
            {/*            <div className="w-[75px] h-[75px] flex items-center justify-center">*/}
            {/*                <img src={crown} alt="Crown Icon" className="w-full h-full md:mt-4"/>*/}
            {/*            </div>*/}
            {/*            <p className="md:pt-8 pt-4 md:text-3xl text-xl font-semibold text-black text-center">Experience</p>*/}
            {/*            <p className="md:pt-8 pt-2 text-gray-500 text-lg md:text-2xl font-light text-center">2 years*/}
            {/*                +</p>*/}
            {/*        </div>*/}

            {/*        /!* Projects Card *!/*/}
            {/*        <div*/}
            {/*            className="bg-white flex flex-col items-center border border-gray-200 rounded-lg shadow-[10px_10px_20px_rgba(0,0,0,0.2)] py-6 md:w-[550px] md:h-[265px] w-[350px] transition-transform duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[15px_15px_25px_rgba(0,0,0,0.25)]">*/}
            {/*            <div className="w-[75px] h-[75px] flex items-center justify-center">*/}
            {/*                <img src={checkBoard} alt="Check Icon" className="w-full h-full md:mt-4"/>*/}
            {/*            </div>*/}
            {/*            <p className="md:pt-8 pt-4 md:text-3xl text-xl font-semibold text-black text-center">Projects</p>*/}
            {/*            <p className="md:pt-8 pt-2 text-gray-500 text-lg md:text-2xl text-center">5 Projects</p>*/}
            {/*        </div>*/}
            {/*    </div>*/}

            {/*    /!* Download CV Button *!/*/}
            {/*    <a*/}
            {/*        download*/}
            {/*        href={cv}*/}
            {/*        className="mt-10 md:mt-20 bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg text-lg sm:text-xl*/}
            {/*    hover:bg-[#0090FF] transition-transform duration-300 transform hover:scale-105 flex items-center gap-2"*/}
            {/*    >*/}
            {/*        Download CV <FontAwesomeIcon icon={faDownload}/>*/}
            {/*    </a>*/}
            {/*</div>*/}


            {/*<div className="bg-white py-16 bg-gray-100 flex flex-col items-center">*/}
            {/*    <h2 className="text-4xl font-bold text-gray-900 mb-6">About Me</h2>*/}

            {/*    <div className="flex flex-col md:flex-row items-center max-w-5xl mx-auto px-6">*/}
            {/*        /!* Profile Image (Replace src with your image) *!/*/}
            {/*        <img*/}
            {/*            src={picture}*/}
            {/*            alt="Profile"*/}
            {/*            className="w-48 h-48 rounded-full shadow-lg mb-6 md:mb-0 md:mr-8"*/}
            {/*        />*/}

            {/*        /!* About Text *!/*/}
            {/*        <div className="text-center md:text-left">*/}
            {/*            <p className="text-lg text-gray-700 leading-relaxed">*/}
            {/*                Hi! I'm <span className="font-semibold text-gray-900">Tomilade Yemi-Oyebola</span>,*/}
            {/*                a passionate Software Engineer with experience in building full-stack applications.*/}
            {/*                I love solving problems, writing clean code, and creating seamless user experiences.*/}
            {/*            </p>*/}

            {/*            <p className="mt-4 text-lg text-gray-700 leading-relaxed">*/}
            {/*                I specialize in **React, Next.js, Java, Spring Boot**, and DevOps practices like*/}
            {/*                Docker and CI/CD. My goal is to build scalable and high-performance applications*/}
            {/*                that make a difference.*/}
            {/*            </p>*/}

            {/*            <p className="mt-4 text-lg text-gray-700 leading-relaxed">*/}
            {/*                Currently, I'm working at **Smart Hive Tech Solutions** as a Frontend Developer,*/}
            {/*                where I focus on building and improving user-friendly web applications.*/}
            {/*            </p>*/}

            {/*            <p className="mt-6 text-gray-900 font-semibold text-lg">*/}
            {/*                Let's connect and build something amazing!*/}
            {/*            </p>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

        </>

    );
};

export default About;
