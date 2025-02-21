import React from "react";

const Header = ({ isMenuOpen, toggleMenu }) => {
    return (
        <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
            <nav className="flex justify-between items-center px-6 py-4 md:px-12">
                {/* Logo */}
                <a href="index.html" className="text-2xl font-bold text-black">
                    Tomilade.com
                </a>

                {/* Nav Menu (Desktop) */}
                <div
                    className={`${
                        isMenuOpen ? "flex" : "hidden"
                    } md:flex flex-col md:flex-row items-center gap-6 absolute md:static top-0 right-0 w-full md:w-auto bg-white md:bg-transparent shadow-lg md:shadow-none p-6 md:p-0 transition-transform duration-300`}
                >
                    <ul className="flex flex-col md:flex-row gap-6 text-lg">
                        {[
                            { href: "#home", label: "Home", icon: "uil uil-estate" },
                            { href: "#about", label: "About", icon: "uil uil-user" },
                            { href: "#skills", label: "Skills", icon: "uil uil-file-alt" },
                            { href: "#services", label: "Services", icon: "uil uil-briefcase-alt" },
                            { href: "#portfolio", label: "Portfolio", icon: "uil uil-scenery" },
                            { href: "#contact", label: "Contact Me", icon: "uil uil-message" },
                        ].map((item, index) => (
                            <li key={index} className="list-none">
                                <a href={item.href} className="flex items-center text-black hover:text-gray-500 transition">
                                    <i className={`${item.icon} mr-2 text-xl`}></i> {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Close Icon (Mobile Only) */}
                    <i
                        className="uil uil-times text-2xl cursor-pointer block md:hidden text-black"
                        onClick={toggleMenu}
                    ></i>
                </div>

                {/* Menu Toggle Button (Mobile) */}
                {!isMenuOpen && (
                    <div className="md:hidden text-2xl text-black cursor-pointer" onClick={toggleMenu}>
                        <i className="uil uil-apps"></i>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;
