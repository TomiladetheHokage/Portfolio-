import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, User, BookOpen, Briefcase, Code, Globe, Server, Database, Brain, Rocket, Calendar, Building, ArrowUpRight } from 'lucide-react';

function App() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
            {/* Hero Section */}
            <header className="bg-indigo-700 text-white">
                <div className="max-w-6xl mx-auto px-4 py-32">
                    <h1 className="text-5xl font-bold mb-6">John Doe</h1>
                    <p className="text-2xl text-indigo-200 mb-8">Full Stack Developer & Software Engineer</p>
                    <div className="flex gap-4">
                        <a href="#contact" className="bg-white text-indigo-700 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors">
                            Get in Touch
                        </a>
                        <a href="#projects" className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-600 transition-colors">
                            View Projects
                        </a>
                    </div>
                </div>
            </header>

            {/* About Section */}
            <section id="about" className="py-20">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                        <div className="md:flex">
                            <div className="md:w-1/3">
                                <img
                                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
                                    alt="Profile"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div className="md:w-2/3 p-8">
                                <div className="uppercase tracking-wide text-sm text-indigo-600 font-semibold">About Me</div>
                                <h2 className="mt-2 text-3xl font-bold text-gray-900">Passionate About Building Great Software</h2>
                                <p className="mt-4 text-gray-600 leading-relaxed">
                                    With 5 years of experience in full-stack development, I specialize in creating robust and scalable web applications.
                                    My expertise spans across modern frontend frameworks, backend technologies, and cloud platforms.
                                </p>
                                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div className="flex items-center gap-2">
                                        <User className="w-5 h-5 text-indigo-600" />
                                        <span className="text-gray-700">Based in New York</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <BookOpen className="w-5 h-5 text-indigo-600" />
                                        <span className="text-gray-700">CS Degree, MIT</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Briefcase className="w-5 h-5 text-indigo-600" />
                                        <span className="text-gray-700">5+ Years Experience</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="p-6 bg-gray-50 rounded-xl">
                            <Code className="w-8 h-8 text-indigo-600 mb-4" />
                            <h3 className="text-xl font-semibold mb-4">Frontend</h3>
                            <ul className="space-y-2 text-gray-600">
                                <li>React & Next.js</li>
                                <li>TypeScript</li>
                                <li>Tailwind CSS</li>
                                <li>Redux</li>
                            </ul>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-xl">
                            <Server className="w-8 h-8 text-indigo-600 mb-4" />
                            <h3 className="text-xl font-semibold mb-4">Backend</h3>
                            <ul className="space-y-2 text-gray-600">
                                <li>Node.js</li>
                                <li>Express</li>
                                <li>Python</li>
                                <li>GraphQL</li>
                            </ul>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-xl">
                            <Database className="w-8 h-8 text-indigo-600 mb-4" />
                            <h3 className="text-xl font-semibold mb-4">Database</h3>
                            <ul className="space-y-2 text-gray-600">
                                <li>PostgreSQL</li>
                                <li>MongoDB</li>
                                <li>Redis</li>
                                <li>Prisma</li>
                            </ul>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-xl">
                            <Globe className="w-8 h-8 text-indigo-600 mb-4" />
                            <h3 className="text-xl font-semibold mb-4">Other</h3>
                            <ul className="space-y-2 text-gray-600">
                                <li>AWS</li>
                                <li>Docker</li>
                                <li>CI/CD</li>
                                <li>Git</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-20">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                            <img
                                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
                                alt="Project 1"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">E-Commerce Platform</h3>
                                <p className="text-gray-600 mb-4">
                                    A full-featured e-commerce platform built with Next.js, Stripe, and PostgreSQL.
                                    Includes real-time inventory, analytics, and admin dashboard.
                                </p>
                                <div className="flex gap-2">
                                    <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">Next.js</span>
                                    <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">Stripe</span>
                                    <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">PostgreSQL</span>
                                </div>
                                <a href="#" className="mt-4 inline-flex items-center text-indigo-600 hover:text-indigo-700">
                                    View Project <ArrowUpRight className="w-4 h-4 ml-1" />
                                </a>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                            <img
                                src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&q=80&w=800"
                                alt="Project 2"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">AI Task Manager</h3>
                                <p className="text-gray-600 mb-4">
                                    Smart task management app using AI for task prioritization and scheduling.
                                    Features natural language processing and automated workflows.
                                </p>
                                <div className="flex gap-2">
                                    <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">React</span>
                                    <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">Python</span>
                                    <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">OpenAI</span>
                                </div>
                                <a href="#" className="mt-4 inline-flex items-center text-indigo-600 hover:text-indigo-700">
                                    View Project <ArrowUpRight className="w-4 h-4 ml-1" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Work Experience</h2>
                    <div className="space-y-8">
                        <div className="bg-gray-50 rounded-xl p-6">
                            <div className="flex items-start gap-4">
                                <Building className="w-8 h-8 text-indigo-600 flex-shrink-0" />
                                <div>
                                    <h3 className="text-xl font-bold">Senior Software Engineer</h3>
                                    <p className="text-gray-600">Tech Corp Inc. • 2020 - Present</p>
                                    <ul className="mt-4 space-y-2 text-gray-600">
                                        <li>• Led development of microservices architecture serving 1M+ users</li>
                                        <li>• Implemented CI/CD pipelines reducing deployment time by 60%</li>
                                        <li>• Mentored junior developers and conducted code reviews</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-6">
                            <div className="flex items-start gap-4">
                                <Rocket className="w-8 h-8 text-indigo-600 flex-shrink-0" />
                                <div>
                                    <h3 className="text-xl font-bold">Full Stack Developer</h3>
                                    <p className="text-gray-600">Startup Labs • 2018 - 2020</p>
                                    <ul className="mt-4 space-y-2 text-gray-600">
                                        <li>• Built and launched 3 successful SaaS products</li>
                                        <li>• Optimized database queries improving performance by 40%</li>
                                        <li>• Integrated payment systems and subscription management</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20">
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
                                    <a href="mailto:contact@example.com" className="flex items-center gap-3 text-gray-600 hover:text-indigo-600">
                                        <Mail className="w-5 h-5" />
                                        contact@example.com
                                    </a>
                                    <a href="https://linkedin.com" className="flex items-center gap-3 text-gray-600 hover:text-indigo-600">
                                        <Linkedin className="w-5 h-5" />
                                        LinkedIn Profile
                                    </a>
                                    <a href="https://github.com" className="flex items-center gap-3 text-gray-600 hover:text-indigo-600">
                                        <Github className="w-5 h-5" />
                                        GitHub Profile
                                    </a>
                                </div>
                            </div>
                            <form className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
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

            {/* Footer */}
            <footer className="bg-gray-900 text-gray-400 py-12">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="text-center md:text-left mb-4 md:mb-0">
                            <h3 className="text-xl font-bold text-white">John Doe</h3>
                            <p>Full Stack Developer</p>
                        </div>
                        <div className="flex gap-4">
                            <a href="https://github.com" className="hover:text-white transition-colors">
                                <Github className="w-6 h-6" />
                            </a>
                            <a href="https://linkedin.com" className="hover:text-white transition-colors">
                                <Linkedin className="w-6 h-6" />
                            </a>
                            <a href="mailto:contact@example.com" className="hover:text-white transition-colors">
                                <Mail className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                    <div className="mt-8 text-center text-sm">
                        <p>&copy; {new Date().getFullYear()} John Doe. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;