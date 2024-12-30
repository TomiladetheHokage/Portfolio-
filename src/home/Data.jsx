import Styles from "./Data.module.css"
import React from "react";


const Data = () => {
    return(
        <>
            <div className={Styles['home_data']}>
                <h1 className={Styles["title"]}>
                    Tomilade Oyebola
                </h1>
                <h3 className={Styles['sub_title']}>
                    Software Engineer
                </h3>
                <p className={Styles["description"]}>
                    Software Engineer in Lagos, Nigeria focused on engineering solutions.
                </p>

                <a href={"#contact"} className={Styles["button"]}>
                   Say Hello    <i className="fa-solid fa-paper-plane"></i>
                </a>
            </div>
        </>
    )
}
export default Data