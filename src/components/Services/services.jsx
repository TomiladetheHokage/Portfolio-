import React, { useState, useRef } from "react";

import "swiper/css";
import "swiper/css/pagination";


const Services = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedService, setSelectedService] = useState(null);
    const swiperRef = useRef(null); // Reference for the Swiper component

    const openModal = (service) => {
        setSelectedService(service);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const goToNextSlide = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slideNext(); // Move to the next slide
        }
    };

    const goToPreviousSlide = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slidePrev(); // Move to the previous slide
        }
    };

    return (
     

    <section id="services" className="py-20 bg-white mt-[-50px] md:mt-0">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div
                    className="p-6 border-2 border-black rounded-lg hover:shadow-xl hover:border-gray-900 transition-all duration-300">
                    <i className="fa-solid fa-globe text-5xl mb-4"></i>
                    <h3 className="text-xl font-semibold mb-4">Full-Stack Web Development</h3>
                    <p className="text-gray-700">
                        I build modern, scalable web applications using technologies like React, Spring Boot, and
                        NestJS.
                        From frontend UI design to backend logic and database integration, I deliver complete web
                        solutions tailored to your business needs.
                    </p>
                </div>

                <div
                    className="p-6 border-2 border-black rounded-lg hover:shadow-xl hover:border-gray-900 transition-all duration-300">
                    <i className="fa-solid fa-server text-5xl mb-4"></i>
                    <h3 className="text-xl font-semibold mb-4">API Design & Backend Development</h3>
                    <p className="text-gray-700">
                        I design and develop secure, well-documented RESTful APIs and backend systems that power web and
                        mobile apps.
                        I focus on performance, scalability, and clean architecture.
                    </p>
                </div>

                <div
                    className="p-6 border-2 border-black rounded-lg hover:shadow-xl hover:border-gray-900 transition-all duration-300">
                    <i className="fa-solid fa-mobile-button text-5xl mb-4"></i>
                    <h3 className="text-xl font-semibold mb-4">Mobile App Development</h3>
                    <p className="text-gray-700">
                        I create cross-platform mobile apps using React Native.
                        Whether it’s an MVP or a production-ready app, I help bring your mobile ideas to life with
                        smooth performance and clean UI.
                    </p>
                </div>

                <div
                    className="p-6 border-2 border-black rounded-lg hover:shadow-xl hover:border-gray-900 transition-all duration-300">
                    <i className="fa-solid fa-gears text-5xl mb-4"></i>
                    <h3 className="text-xl font-semibold mb-4">Deployment & DevOps</h3>
                    <p className="text-gray-700">
                        I containerize applications using Docker and set up CI/CD pipelines for automated testing and
                        deployment.
                        I deploy projects to platforms like Vercel, Render, or DigitalOcean, ensuring smooth release
                        cycles.
                    </p>
                </div>

                <div
                    className="p-6 border-2 border-black rounded-lg hover:shadow-xl hover:border-gray-900 transition-all duration-300">
                    <i className="fa-solid fa-screwdriver-wrench text-5xl mb-4"></i>
                    <h3 className="text-xl font-semibold mb-4">Software Testing & Documentation</h3>
                    <p className="text-gray-700">
                        I provide unit and integration testing (JUnit, Jest) to ensure code reliability.
                        I also deliver clear and useful technical documentation for development teams and stakeholders.
                    </p>
                </div>

            </div>
        </div>
    </section>
    );
};

export default Services;
