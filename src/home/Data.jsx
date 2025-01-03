import Styles from "./Data.module.css"
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const Data = () => {
    return(
        <>
            <div className={Styles['home_data']}>
                <h1 className={Styles["title"]}>
                    Tomilade Oyebola
                    {/*<i className="fa-solid fa-hand-spock"></i>*/}
                </h1>

                <h3 className={Styles['sub_title']}>
                    Software Engineer
                </h3>
                <p className={Styles["description"]}>
                    i am a software Engineer in Lagos, Nigeria<br/> focused on engineering solutions.
                </p>

                <a href={"#contact"} className={Styles["button"]}>
                    Say Hello <i className="fa-solid fa-paper-plane"></i>
                </a>
            </div>
        </>
    )
}
export default Data

