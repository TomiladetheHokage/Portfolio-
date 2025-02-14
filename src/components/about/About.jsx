import React from 'react';
import Styles from './About.module.css';
import picture from '../../assets/fynshit.jpg'
import Info from "./Info.jsx"
import cv from "../../assets/Tomilade CV.pdf"
import { FaFileDownload } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';


const About = () => {
    return (
        <div className={Styles["about_container"]} id={'about'}>
            <section className={Styles['about_section']}>
                <h2 className={Styles['title']}>About Me</h2>
                <span className={Styles['sub-title']}>My intro</span>

                <div className={Styles['about']}>
                    <img src={picture} alt="Profile" className={Styles['fynshit']}/>

                    <div className={Styles['about_data']}>

                        <Info/>

                        <p className={Styles['about_description']}>
                            Software Engineer | B.Sc. in Computer Science Caleb University.
                            Passionate about Engineering Scalable Solutions, Designing, Developing,
                            and Maintaining Robust Software Systems.
                        </p>

                        <a download="" href={cv} className={Styles.btn}>
                            Download CV
                            <FontAwesomeIcon icon={faDownload} className={Styles['icon']}/>

                        </a>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default About;
