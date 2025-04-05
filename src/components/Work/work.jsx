import React, { useState } from 'react';
import work1 from '../../assets/Screenshot 2024-10-22 075727.png';
import work2 from '../../assets/Screenshot 2025-02-08 000724.png';
import work3 from '../../assets/Screenshot 2025-02-08 002543.png';
import work34 from '../../assets/Screenshot 2025-04-05 001251.png';
import work5 from '../../assets/take22.png';
import work6 from '../../assets/Screenshot 2025-04-05 005142.png';

const Work = () => {
    const [showAll, setShowAll] = useState(false);

    const projects = [
        {
            id: 1,
            title: 'Sakura Sells',
            description: 'Sakura Sells is an online marketplace for art lovers and creators...',
            techStack: ['React', 'Spring Boot', 'SQL'],
            image: work1,
        },
        {
            id: 2,
            title: 'Seyi F.A.B',
            description: 'Seyi FAB is a Nigerian clothing store that brings style...',
            techStack: ['React'],
            image: work2,
        },
        {
            id: 3,
            title: 'Work Next',
            description: 'Work Next helps job seekers and employers connect seamlessly...',
            techStack: ['React', 'Spring Boot', 'Mongo DB'],
            image: work3,
        },
        {
            id: 4,
            title: 'SmarthiveSms',
            description: 'SmarthiveSms is a service that helps with SMS-based communication...',
            techStack: ['Next JS', 'Tailwind CSS'],
            image: work6,
        },
        {
            id: 5,
            title: 'Leak Sense',
            description: 'Leak Sense is a gas leakage detection app with real-time alerts...',
            techStack: ['React Native', 'Spring Boot', 'C#'],
            image: work5,
        },
    ];

    const displayedProjects = showAll ? projects : projects.slice(0, 2);

    return (
        <section id="projects" className="py-20">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-32 gap-12">
                    {displayedProjects.map((project) => (
                        <div key={project.id} className="bg-white rounded-xl overflow-hidden shadow-lg">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full object-cover"
                                style={{
                                    width: '100%',
                                    height: '250px',
                                    objectFit: 'cover',
                                    maxWidth: '100%',
                                }}
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                <p className="text-gray-600 mb-4">{project.description}</p>
                                <div className="flex gap-2">
                                    {project.techStack.map((tech, index) => (
                                        <span key={index} className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">{tech}</span>
                                    ))}
                                </div>
                                <a
                                    href="#"
                                    className="mt-4 inline-flex items-center text-indigo-600 hover:text-indigo-700"
                                >
                                    View Project <i className="pl-2 fa-solid fa-square-arrow-up-right"></i>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View More Button */}
                <div className="text-center mt-8">
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="px-4 py-2 bg-black text-white rounded-lg hover:bg-white hover:text-black"
                    >
                        {showAll ? 'View Less' : 'View More'}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Work;
