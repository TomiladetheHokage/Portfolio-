import React, { useState } from "react";
import Styles from "./style/header.module.css";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={Styles.header}>
            <nav className={Styles.nav_container}>
                <a href="index.html" className={Styles.nav_logo}>Tomilade</a>

                <div className={`${Styles.nav__menu} ${isMenuOpen ? Styles.show : ""}`}>
                    <ul className={Styles.nav__list}>
                        <li className={Styles.nav__item}>
                            <a href="#home" className={Styles.nav__link}>
                                <i className="uil uil-estate nav__icon"></i> Home
                            </a>
                        </li>
                        <li className={Styles.nav__item}>
                            <a href="#about" className={Styles.nav__link}>
                                <i className="uil uil-user nav__icon"></i> About
                            </a>
                        </li>
                        <li className={Styles.nav__item}>
                            <a href="#skills" className={Styles.nav__link}>
                                <i className="uil uil-file-alt nav__icon"></i> Skills
                            </a>
                        </li>
                        <li className={Styles.nav__item}>
                            <a href="#services" className={Styles.nav__link}>
                                <i className="uil uil-briefcase-alt nav__icon"></i> Services
                            </a>
                        </li>
                        <li className={Styles.nav__item}>
                            <a href="#portfolio" className={Styles.nav__link}>
                                <i className="uil uil-scenery nav__icon"></i> Portfolio
                            </a>
                        </li>
                        <li className={Styles.nav__item}>
                            <a href="#contact" className={Styles.nav__link}>
                                <i className="uil uil-message nav__icon"></i> Contact Me
                            </a>
                        </li>
                    </ul>
                    <i className={`uil uil-times ${Styles.nav__close}`} onClick={toggleMenu}></i>
                </div>

                {!isMenuOpen && (
                    <div className={Styles.nav__toggle} onClick={toggleMenu}>
                        <i className="uil uil-apps"></i>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;
