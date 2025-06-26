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


                <div
                  className={`fixed top-0 right-0 h-full w-4/5 max-w-xs bg-white shadow-2xl rounded-l-2xl z-50 transform transition-transform duration-300 p-6 md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
                >
                  {/* Sidebar Header/Logo */}
                  <div className="flex items-center justify-between mb-10">
                    <span className="text-2xl font-bold text-black">Tomilade.com</span>
                    <i
                      className="fa-solid fa-xmark text-2xl cursor-pointer"
                      onClick={toggleMenu}
                    ></i>
                  </div>
                  <ul className="flex flex-col gap-6 text-lg text-left mt-4">
                    {/*<li className="list-none">*/}
                    {/*  <a href="#about" className="flex items-center text-black hover:text-gray-500 transition">*/}
                    {/*    <div className="h-[23px] w-[23px] animate-none">*/}
                    {/*      <img src={home} alt="home" className="h-full w-full object-contain "/>*/}
                    {/*    </div>*/}
                    {/*    <p className="pl-4">Home</p>*/}
                    {/*  </a>*/}
                    {/*</li>*/}
                    <li className="list-none">
                      <a href="#about" className="flex items-center text-black hover:text-gray-500 transition">
                        <div className="h-[23px] w-[23px] animate-none">
                          <img src={about} alt="about" className="h-full w-full object-contain "/>
                        </div>
                        <p className="pl-4">About</p>
                      </a>
                    </li>
                    <li className="list-none">
                      <a href="#projects" className="flex items-center text-black hover:text-gray-500 transition">
                        <div className="h-[23px] w-[23px] animate-none">
                          <img src={portfolio} alt="portfolio" className="h-full w-full object-contain "/>
                        </div>
                        <p className="pl-4">Portfolio1</p>
                      </a>
                    </li>
                    <li className="list-none">
                      <a href="#experience" className="flex items-center text-black hover:text-gray-500 transition">
                        <div className="h-[23px] w-[23px] animate-none">
                          <i className="fa-solid fa-briefcase text-xl"></i>
                        </div>
                        <p className="pl-4">Work Experience</p>
                      </a>
                    </li>
                    <li className="list-none">
                      <a href="#services" className="flex items-center text-black hover:text-gray-500 transition">
                        <div className="h-[23px] w-[23px] animate-none">
                          <img src={services} alt="services" className="h-full w-full object-contain "/>
                        </div>
                        <p className="pl-4">Services</p>
                      </a>
                    </li>
                    <li className="list-none">
                      <a href="#contact" className="flex items-center text-black hover:text-gray-500 transition">
                        <div className="h-[23px] w-[23px] animate-none">
                          <img src={contact} alt="contact" className="h-full w-full object-contain animate-none "/>
                        </div>
                        <p className="pl-4">Contact me</p>
                      </a>
                    </li>
                  </ul>
                </div>
                {/* Desktop Navbar */}
                <ul className="hidden md:flex flex-row items-center gap-6 text-lg text-left mt-0">
                  {/*<li className="list-none">*/}
                  {/*  <a href="#about" className="flex items-center text-black hover:text-gray-500 transition">*/}
                  {/*    <div className="h-[23px] w-[23px] animate-none">*/}
                  {/*      <img src={home} alt="home" className="h-full w-full object-contain "/>*/}
                  {/*    </div>*/}
                  {/*    <p className="pl-4">Home</p>*/}
                  {/*  </a>*/}
                  {/*</li>*/}
                  <li className="list-none">
                    <a href="#about" className="flex items-center text-black hover:text-gray-500 transition">
                      <div className="h-[23px] w-[23px] animate-none">
                        <img src={about} alt="about" className="h-full w-full object-contain "/>
                      </div>
                      <p className="pl-4">About</p>
                    </a>
                  </li>
                  <li className="list-none">
                    <a href="#projects" className="flex items-center text-black hover:text-gray-500 transition">
                      <div className="h-[23px] w-[23px] animate-none">
                        <img src={portfolio} alt="portfolio" className="h-full w-full object-contain "/>
                      </div>
                      <p className="pl-4">Portfolio</p>
                    </a>
                  </li>
                  <li className="list-none">
                    <a href="#experience" className="flex items-center text-black hover:text-gray-500 transition">
                      <div className="h-[23px] w-[23px] animate-none">
                        <i className="fa-solid fa-briefcase text-xl"></i>
                      </div>
                      <p className="pl-4">Work Experience</p>
                    </a>
                  </li>
                  <li className="list-none">
                    <a href="#services" className="flex items-center text-black hover:text-gray-500 transition">
                      <div className="h-[23px] w-[23px] animate-none">
                        <img src={services} alt="services" className="h-full w-full object-contain "/>
                      </div>
                      <p className="pl-4">Services</p>
                    </a>
                  </li>
                  <li className="list-none">
                    <a href="#contact" className="flex items-center text-black hover:text-gray-500 transition">
                      <div className="h-[23px] w-[23px] animate-none">
                        <img src={contact} alt="contact" className="h-full w-full object-contain animate-none "/>
                      </div>
                      <p className="pl-4">Contact me</p>
                    </a>
                  </li>
                </ul>

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
