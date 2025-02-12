import React from "react";
import { FaCheckCircle } from "react-icons/fa"; // Import the badge icon
import Styles from "./Skils.module.css";

const Frontend = () => {
    return (
        <div className={Styles['skills_content']}>
            <h3 className={Styles['skills_title']}>Frontend Development</h3>

            <div className={Styles['skills_box']}>
                <div className={Styles['skills_group']}>

                    <div className={Styles['skills_data']}>
                        <FaCheckCircle className={Styles['badge_icon']} /> {/* Add the badge icon */}
                        <div>
                            <h3 className={Styles['skill_name']}>HTML</h3>
                            <span className={Styles['skill_level']}>Intermediate</span>
                        </div>
                    </div>

                    <div className={Styles['skills_data']}>
                        <FaCheckCircle className={Styles['badge_icon']} /> {/* Add the badge icon */}
                        <div>
                            <h3 className={Styles['skill_name']}>CSS</h3>
                            <span className={Styles['skill_level']}>Intermediate</span>
                        </div>
                    </div>

                    <div className={Styles['skills_data']}>
                        <FaCheckCircle className={Styles['badge_icon']} /> {/* Add the badge icon */}
                        <div>
                            <h3 className={Styles['skill_name']}>JavaScript</h3>
                            <span className={Styles['skill_level']}>Intermediate</span>
                        </div>
                    </div>

                    <div className={Styles['skills_data']}>
                        <FaCheckCircle className={Styles['badge_icon']} /> {/* Add the badge icon */}
                        <div>
                            <h3 className={Styles['skill_name']}>Git</h3>
                            <span className={Styles['skill_level']}>Advanced</span>
                        </div>
                    </div>

                    <div className={Styles['skills_data']}>
                        <FaCheckCircle className={Styles['badge_icon']} /> {/* Add the badge icon */}
                        <div>
                            <h3 className={Styles['skill_name']}>React</h3>
                            <span className={Styles['skill_level']}>Intermediate</span>
                        </div>
                    </div>

                    <div className={Styles['skills_data']}>
                        <FaCheckCircle className={Styles['badge_icon']} /> {/* Add the badge icon */}
                        <div>
                            <h3 className={Styles['skill_name']}>React Native</h3>
                            <span className={Styles['skill_level']}>Basic</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Frontend;
