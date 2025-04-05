import React, {useState} from "react";
import home from "../assets/home-2.png"
import about from "../assets/profile.png"
import portfolio from "../assets/gallery.png"
import services from "../assets/briefcase.png"
import contact from "../assets/message-text.png"


const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
            <nav className="flex justify-between items-center px-6 py-4 md:px-12">
                {/* Logo */}
                <a href="index.html" className="text-3xl font-bold text-black">
                    Tomilade.com
                </a>

                {/* Nav Menu (Desktop) */}
                <div
                    className={`${
                        isMenuOpen ? "flex" : "hidden"
                    } md:flex flex-col md:flex-row md:items-center gap-6 absolute md:static top-0 right-0 w-full md:w-auto bg-white md:bg-transparent shadow-lg md:shadow-none p-6 md:p-0 transition-transform duration-300`}
                >
                    <ul className="flex flex-col md:flex-row gap-6 text-lg text-left">
                        <li className="list-none">
                            <a href="#home" className="flex items-center text-black hover:text-gray-500 transition">
                                <div className="h-[23px] w-[23px] animate-none">
                                    <img src={home} alt="home" className="h-full w-full object-contain "/>
                                </div>
                                <p className="pl-4">Home</p>
                            </a>
                        </li>
                        <li className="list-none">
                            <a href="#about" className="flex items-center text-black hover:text-gray-500 transition">
                                <div className="h-[23px] w-[23px] animate-none">
                                    <img src={about} alt="home" className="h-full w-full object-contain "/>
                                </div>
                                <p className="pl-4">About</p>
                            </a>
                        </li>
                        <li className="list-none">
                            <a href="#portfolio"
                               className="flex items-center text-black hover:text-gray-500 transition">
                                <div className="h-[23px] w-[23px] animate-none">
                                    <img src={portfolio} alt="home" className="h-full w-full object-contain "/>
                                </div>
                                <p className="pl-4">Portfolio</p>
                            </a>
                        </li>

                        <li className="list-none">
                            <a href="#Services"
                               className="flex items-center text-black hover:text-gray-500 transition">
                                <div className="h-[23px] w-[23px] animate-none">
                                    <img src={services} alt="home" className="h-full w-full object-contain "/>
                                </div>
                                <p className="pl-4">Services</p>
                            </a>
                        </li>

                        <li className="list-none">
                            <a href="#contact-me"
                               className="flex items-center text-black hover:text-gray-500 transition">
                                <div className="h-[23px] w-[23px] animate-none">
                                    <img src={contact} alt="home"
                                         className="h-full w-full object-contain animate-none "/>
                                </div>
                                <p className="pl-4">Contact me</p>
                            </a>
                        </li>
                    </ul>


                    {isMenuOpen && (
                        <i
                            className="fa-solid fa-xmark absolute top-[24px] right-4 text-2xl block md:hidden"
                            onClick={toggleMenu}
                        ></i>
                    )}


                </div>

                {/* Menu Toggle Button (Mobile) */}
                {!isMenuOpen && (
                    <div className="md:hidden text-2xl text-black left-[20px]" onClick={toggleMenu}>
                        <i className="fa-solid fa-bars"> </i>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;
