const Footer = () => {
    return(
        <>
            {/* Footer */}
            <footer className="bg-gray-900 text-gray-400 py-12">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="text-center md:text-left mb-4 md:mb-0">
                            <h3 className="text-xl font-bold text-white">Yemi-Oyebola Tomilade</h3>
                            <p>Software Engineer</p>
                        </div>
                        <div className="flex gap-4">
                            <a href="https://github.com/TomiladetheHokage" className="hover:text-white transition-colors">
                                <i className="fa-brands fa-github text-2xl md:text-3xl"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/tomilade-yemi-oyebola/" className="hover:text-white transition-colors">
                                <i className="fa-brands fa-linkedin text-2xl md:text-3xl"></i>
                            </a>
                            <a href="mailto:oyebolatomilade@gmail.com" className="hover:text-white transition-colors">
                                <i className="fa-solid fa-envelope text-2xl md:text-3xl"></i>
                            </a>
                        </div>
                    </div>
                    <div className="mt-8 text-center text-sm">
                        <p>&copy; {new Date().getFullYear()} Yemi-Oyebola Tomilade. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer
