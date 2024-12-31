import React from "react";
import Styles from "./Information.module.css";

const Information = () => {
    return (
        <>
            <div className={Styles['home_info']}>
                <h1 className={Styles["title"]}>
                    Tomilade Oyebola
                </h1>

                <h3 className={Styles['sub_title']}>
                    Software Engineer
                </h3>
                <p className={Styles["description"]}>
                    I am a software engineer in Lagos, Nigeria<br/> focused on engineering solutions.
                </p>

                <a href={"#contact"} className={Styles["button"]}>
                    Say Hello <i className="fa-solid fa-paper-plane"></i>
                </a>
            </div>

        </>
    );
};

export default Information;
