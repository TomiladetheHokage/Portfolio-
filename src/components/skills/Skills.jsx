import Styles from "./Skils.module.css"
import Frontend from "./Frontend.jsx";
import Backend from "./Backend.jsx";
import React from "react";

const Skills = () => {

    return (
        // <section className="text-center mt-20  ">
        //     <h2 className={Styles['section_title']} style={{fontSize: '35px'}}>Skills</h2>
        //     <p className="font-light text-lg md:text-2xl sm:text-xl mt-2 text-gray-500">My technical level</p>
        //     <div className="bg-white py-12 bg-gray-100 flex flex-col items-center">
        //         <h2 className="text-4xl font-bold text-gray-900 mb-6">My Skills</h2>
        //         <p className="text-lg text-gray-600 mb-8 text-center">
        //             Technologies and tools I work with:
        //         </p>
        //
        //         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl">
        //             {[
        //                 {name: "JavaScript", icon: "🟨"},
        //                 {name: "React", icon: "⚛️"},
        //                 {name: "Next.js", icon: "🌐"},
        //                 {name: "TypeScript", icon: "🔷"},
        //                 {name: "Spring Boot", icon: "🌿"},
        //                 {name: "Java", icon: "☕"},
        //                 {name: "Node.js", icon: "🟩"},
        //                 {name: "MongoDB", icon: "🍃"},
        //                 {name: "PostgreSQL", icon: "🐘"},
        //                 {name: "Docker", icon: "🐳"},
        //                 {name: "Git", icon: "🔗"},
        //                 {name: "CI/CD", icon: "🚀"},
        //             ].map((skill, index) => (
        //                 <div
        //                     key={index}
        //                     className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1"
        //                 >
        //                     <span className="text-4xl">{skill.icon}</span>
        //                     <p className="mt-2 text-lg font-medium text-gray-800">{skill.name}</p>
        //                 </div>
        //             ))}
        //         </div>
        //     </div>
        //
        // </section>
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