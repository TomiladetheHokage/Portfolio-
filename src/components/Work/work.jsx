import React, { useState } from 'react';
import work1 from '../../assets/Screenshot 2024-10-22 075727.png';
import work2 from '../../assets/Screenshot 2025-02-08 000724.png';
import work3 from '../../assets/Screenshot 2025-02-08 002543.png';
import work34 from '../../assets/Screenshot 2025-04-05 001251.png';
import work5 from '../../assets/take22.png';
import work6 from '../../assets/Screenshot 2025-04-05 005142.png';
import work7 from '../../assets/bank-app.jpg';
import work8 from '../../assets/Screenshot 2025-06-26 124323.png';

const Work = () => {
    const [showAll, setShowAll] = useState(false);
    const [filter, setFilter] = useState('all');

    const projects = [
        {
            id: 1,
            title: 'Vas Care',
            description: 'Vas care is a hospital management system',
            techStack: ['PHP', 'Html', 'Tailwind CSS'],
            image: work8,
            type: 'web',
            link: 'https://vas-care.onrender.com/',
        },
        {
            id: 2,
            title: 'SmarthiveSms',
            description: 'SmarthiveSms is a service that helps with SMS-based communication...',
            techStack: ['Next JS', 'Tailwind CSS'],
            image: work6,
            type: 'web',
            link: 'https://smart-hive-landing-page-vercel.vercel.app/',
        },
        {
            id: 3,
            title: 'Sakura Sells',
            description: 'Sakura Sells is an online marketplace for art lovers and creators to buy and sell artworks',
            techStack: ['React', 'Spring Boot', 'SQL'],
            image: work1,
            type: 'web',
            link: '#',
        },

        {
            id: 4,
            title: 'Seyi F.A.B',
            description: 'Seyi FAB is a Nigerian clothing store',
            techStack: ['React'],
            image: work2,
            type: 'web',
            link: 'https://seyifab.vercel.app/',
        },
        {
            id: 5,
            title: 'Work Next',
            description: 'Work Next helps job seekers and employers connect seamlessly...',
            techStack: ['React', 'Spring Boot', 'Mongo DB'],
            image: work3,
            type: 'web',
            link: 'https://worknext-eight.vercel.app/',
        },
        {
            id: 6,
            title: 'Leak Sense',
            description: 'Leak Sense is a gas leakage detection app with real-time alerts...',
            techStack: ['React Native', 'Spring Boot', 'C#'],
            image: work5,
            type: 'app',
            link: '#',
        },
        {
            id: 7,
            title: 'Vas trust',
            description: 'A core banking system that enables users to open accounts, ' +
                'manage transactions, and access financial services through a mobile-friendly platform.',
            techStack: ['React Native', 'PHP'],
            image: work7,
            type: 'app',
            link: 'https://expo.dev/accounts/tomiladethegreatest/projects/vas-trust/builds/0d6a2030-fdfa-46a7-b3ca-4f7e612777d3',
        },

    ];

    const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.type === filter);
    const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3);

    return (
        <section id="projects" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-2">Featured Projects</h2>
                <p className="text-center text-gray-500 mb-12">A selection of my recent work in web and app development.</p>
                <div className="flex justify-center gap-0 mb-8">
                    <div className="inline-flex rounded-full shadow-sm border border-black overflow-hidden">
                        {/*<button*/}
                        {/*    className={`px-4 py-2 font-semibold transition-colors focus:outline-none ${filter === 'all' ? 'bg-black text-white' : 'bg-white text-black hover:bg-gray-100'}`}*/}
                        {/*    onClick={() => setFilter('all')}*/}
                        {/*>*/}
                        {/*    All*/}
                        {/*</button>*/}
                        <button
                            className={`px-4 py-2 font-semibold transition-colors focus:outline-none ${filter === 'web' ? 'bg-black text-white' : 'bg-white text-black hover:bg-gray-100'}`}
                            onClick={() => setFilter('web')}
                        >
                            Web
                        </button>
                        <button
                            className={`px-4 py-2 font-semibold transition-colors focus:outline-none ${filter === 'app' ? 'bg-black text-white' : 'bg-white text-black hover:bg-gray-100'}`}
                            onClick={() => setFilter('app')}
                        >
                            Apps
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
                    {displayedProjects.map((project) => {
                        const imageClass = project.type === 'app'
                            ? 'w-full max-h-72 object-contain transition-transform duration-300 hover:scale-105 shadow-2xl'
                            : 'w-full h-48 object-cover transition-transform duration-300 hover:scale-105 shadow-2xl';
                        return (
                            <div key={project.id} className="bg-white rounded-xl shadow-md border 
                            border-gray-100 flex flex-col  transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
                                {project.type === 'app' ? (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="mx-auto max-w-full"
                                    />
                                ) : (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-48 object-cover mx-auto block"
                                    />
                                )}
                                <div className="p-8 flex flex-col">
                                    <h3 className="text-xl font-bold mb-2 text-black">{project.title}</h3>
                                    <p className="text-gray-600 mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.techStack.map((tech, index) => (
                                            <span key={index} className="px-3 py-1 bg-gray-200 text-black rounded-full text-sm">{tech}</span>
                                        ))}
                                    </div>
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center px-4 py-2 border border-black text-black
                                        rounded-lg bg-white hover:bg-gray-100 transition-colors group mt-auto"
                                    >
                                        View Project
                                        <i className="pl-2 fa-solid fa-square-arrow-up-right group-hover:translate-x-1 transition-transform"></i>
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>
                {/* View More Button */}
                <div className="text-center mt-8">
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-900 hover:text-white shadow-md"
                    >
                        {showAll ? 'View Less' : 'View More'}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Work;
