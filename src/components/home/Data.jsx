import Styles from "./Data.module.css"
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const Data = () => {
    return(
        <>
            <div className={Styles['home_data']}>
                <h1 className={Styles["title"]}>
                    Tomilade Oyebola
                    {/*<i className="fa-sharp fa-thin fa-hand-wave"></i>*/}
                </h1>

                <h3 className={Styles['sub_title']}>
                    Software Engineer
                </h3>
                <p className={Styles["description"]}>
                    I'm passionate about engineering solutions<br/> and designing systems.
                </p>

                <a href={"#contact"} className={Styles["button"]}>
                    Say Hello <i className="fa-solid fa-paper-plane"></i>
                </a>
            </div>
        </>
    )
}
export default Data

