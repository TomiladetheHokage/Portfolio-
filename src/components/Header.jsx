import Styles from "./style/header.mudule.css"

const Header = () => {
    return (
        <>
            <header className={Styles["header"]}>
                <nav className={Styles["nav container"]}>
                    <a href="index.html" className={Styles["nav_logo"]}> Smith </a>

                    <div className={Styles["nav__menu"]}>
                        <ul className={Styles["nav__list grid"]}>
                            <li className={Styles["nav__item"]}>
                                <a href="" className={Styles["nav__link"]}>
                                    <i className="uis uis-house-user"></i> Home
                                </a>
                            </li>

                            <li className={Styles["nav__item"]}>
                                <a href="" className={Styles["nav__link"]}>
                                    <i className="uil uil- nav__icon"></i>
                                </a>
                            </li>

                            <li className={Styles["nav__item"]}>
                                <a href="" className={Styles["nav__link"]}>
                                    <i className="uil uil- nav__icon"></i>
                                </a>
                            </li>

                            <li className={Styles["nav__item"]}>
                                <a href="" className={Styles["nav__link"]}>
                                    <i className="uil uil- nav__icon"></i>
                                </a>
                            </li>

                            <li className={Styles["nav__item"]}>
                                <a href="" className={Styles["nav__link"]}>
                                    <i className="uil uil- nav__icon"></i>
                                </a>
                            </li>

                            <li className={Styles["nav__item"]}>
                                <a href="" className={Styles["nav__link"]}>
                                    <i className="uil uil- nav__icon"></i>
                                </a>
                            </li>
                        </ul>

                    </div>

                </nav>

            </header>
        </>
    )
}
export default Header;