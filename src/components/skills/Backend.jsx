import Styles from "./Skils.module.css";
import {FaCheckCircle} from "react-icons/fa";
import React from "react";

const Backend = () => {
    return(
        <>
            <div className={Styles['skills_content']}>
                <h3 className={Styles['skills_title']}>Backend Skills</h3>

                <div className={Styles['skills_box']}>
                    <div className={Styles['skills_group']}>
                        <div className={Styles['skills_data']}>
                            <FaCheckCircle className={Styles['badge_icon']}/>
                            <div>
                                <h3 className={Styles['skill_name']}>Java</h3>
                                <span className={Styles['skill_level']}>Intermediate</span>
                            </div>
                        </div>

                        <div className={Styles['skills_data']}>
                            <FaCheckCircle className={Styles['badge_icon']}/>
                            <div>
                                <h3 className={Styles['skill_name']}>Springboot</h3>
                                <span className={Styles['skill_level']}>Intermediate</span>
                            </div>
                        </div>

                        <div className={Styles['skills_data']}>
                            <FaCheckCircle className={Styles['badge_icon']}/>
                            <div>
                                <h3 className={Styles['skill_name']}>Pyth  on </h3>
                                <span className={Styles['skill_level']}>Intermediate</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Backend