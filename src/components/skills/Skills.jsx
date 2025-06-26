import React from "react";

const Skills = () => {

    return (
    <section id="skills" className="py-20 bg-gray-50 bg-white md:mt-[-12px] mt-[-50px] md:mt-0">
        <div className="container mx-auto px-4 bg-white">
            <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:ml-8">
                <div className="p-6 bg-white shadow-lg rounded-lg">
                    <i className="fa-solid fa-code text-5xl mb-4"></i>
                    <h3 className="text-xl font-semibold mb-4">Programming Languages</h3>
                    <ul className="space-y-2">
                        <li>Java (Intermediate)</li>
                        <li>Python (Intermediate)</li>
                        <li>JavaScript (Intermediate)</li>
                        <li>HTML/CSS (Intermediate)</li>
                    </ul>
                </div>
                <div className="p-6 bg-white shadow-lg rounded-lg">
                    <i className="fa-brands fa-connectdevelop text-5xl mb-4"></i>
                    <h3 className="text-xl font-semibold mb-4">Frameworks & Libraries</h3>
                    <ul className="space-y-2">
                        <li>Spring Boot</li>
                        <li>React & Next.js</li>
                        <li>Node.js</li>
                        <li>React Native (Basic)</li>
                    </ul>
                </div>
                <div className="p-6 bg-white shadow-lg rounded-lg">
                    <i className="fa-solid fa-database text-5xl mb-4"></i>
                    <h3 className="text-xl font-semibold mb-4">Databases</h3>
                    <ul className="space-y-2">
                        <li>PostgreSQL</li>
                        <li>MongoDB</li>
                        <li>SQL</li>
                        <li>Database Design</li>
                    </ul>
                </div>
                <div className="p-6 bg-white shadow-lg rounded-lg">
                    <i className="fa-solid fa-server text-5xl mb-4"></i>
                    <h3 className="text-xl font-semibold mb-4">DevOps & Tools</h3>
                    <ul className="space-y-2">
                        <li>Docker</li>
                        <li>CI/CD Pipelines</li>
                        <li>Git & GitHub</li>
                        <li>Version Control</li>
                    </ul>
                </div>
                <div className="p-6 bg-white shadow-lg rounded-lg">
                    <i className="fa-solid fa-cloud text-5xl mb-4"></i>
                    <h3 className="text-xl font-semibold mb-4">Cloud & Infrastructure</h3>
                    <ul className="space-y-2">
                        <li>AWS</li>
                        <li>Cloud Architecture</li>
                        <li>Deployment</li>
                        <li>Scalability</li>
                    </ul>
                </div>
                <div className="p-6 bg-white shadow-lg rounded-lg">
                    <i className="fa-solid fa-brain text-5xl mb-4"></i>
                    <h3 className="text-xl font-semibold mb-4">Core Computer Science</h3>
                    <ul className="space-y-2">
                        <li>Data Structures</li>
                        <li>Algorithms</li>
                        <li>Problem Solving</li>
                        <li>System Design</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Skills