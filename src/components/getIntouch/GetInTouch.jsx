const GetIntouch = () => {
    return(
        <>
            <section id="contact" className="py-20 mt-[-25px] md:mt-0">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="bg-white rounded-2xl shadow-xl p-8">
                        <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <p className="text-gray-600 mb-6">
                                    I'm always interested in hearing about new projects and opportunities.
                                    Whether you have a question or just want to say hi, feel free to reach out!
                                </p>
                                <div className="space-y-4">
                                    <a href="mailto:oyebolatomilade@gmail.com"
                                       className="flex items-center gap-3 text-gray-600 hover:text-indigo-600">
                                        <i className="fa-solid fa-envelope text-2xl md:text-3xl"></i>
                                        Oyebolatomilade@Gmail.com
                                    </a>
                                    <a href="https://www.linkedin.com/in/tomilade-yemi-oyebola/"
                                       className="flex items-center gap-3 text-gray-600 hover:text-indigo-600">
                                        <i className="fa-brands fa-linkedin text-2xl md:text-3xl"></i>
                                        linkedin.com/tomilade-yemi-oyebola
                                    </a>
                                    <a href="https://github.com/TomiladetheHokage"
                                       className="flex items-center gap-3 text-gray-600 hover:text-indigo-600">
                                        <i className="fa-brands fa-github text-2xl md:text-3xl"></i>
                                        github.com/TomiladetheHokage
                                    </a>
                                </div>
                            </div>
                            <form className="space-y-4">
                                <div>
                                    <label htmlFor="name"
                                           className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email"
                                           className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message"
                                           className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default GetIntouch