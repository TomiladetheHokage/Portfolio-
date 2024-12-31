import React from 'react';
import Styles from "./Home.module.css";


const Social = () => {
    return (
        <div className={Styles["social-container"]}>
            <a href="#" className={Styles["home__social_icon"]} target="_blank"
                rel="noopener noreferrer"
            >
                <i className="fa-brands fa-instagram"></i>
            </a>

            <a
                href="https://github.com/TomiladetheHokage"
                className={Styles["home__social_icon"]}
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className="fa-brands fa-github"></i>
            </a>

            <a
                href="https://www.linkedin.com/in/tomilade-yemi-oyebola/"
                className={Styles["home__social_icon"]}
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className="fa-brands fa-linkedin"></i>
            </a>
        </div>
    );
};

export default Social;
