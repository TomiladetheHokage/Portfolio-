import React, { useState, useRef } from "react";
import styles from "./Service.module.css";
import Modal from "./Modal";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules"; // Import Navigation module

const services = [
    {
        title: "Backend development",
        description: "I specialize in backend development, focusing on creating robust, scalable server-side applications.",
        points: [
            "Implementing APIs.",
            "Managing databases.",
            "integration with frontend.",
            "Application Logic.",
            "Security Implementation.",
            "Performance Optimization",
        ],
        icon: <i className="fa-solid fa-code"></i>,
    },
    {
        title: "Frontend Development",
        description: "Creating modern, responsive, and user-friendly web applications.",
        points: [
            "Cross-browser compatibility.",
            "Building interactive UI components.",
            "Integrating APIs.",
            "Optimizing web performance.",
            "Performance Optimization.",
        ],
        icon: <i className="fa-solid fa-code"></i>,
    },
    {
        title: "Mobile Development",
        description: "Creating applications specifically designed for mobile devices.",
        points: [
            "Designing intuitive user interfaces.",
            "API Integration.",
            "Testing and Debugging.",
            "Updating and Maintaining Apps.",
        ],
        icon: <i className="fa-solid fa-mobile"></i>,
    },
    {
        title: "Database Management",
        description: "Storing, retrieving, and manipulating data in a structured way.",
        points: [
            "Designing database schemas.",
            "Implementing data models.",
            "Writing efficient SQL queries.",
            "Data integrity and security.",
        ],
        icon: <i className="fa-solid fa-database"></i>,
    },
    {
        title: "Consulting Services",
        description: "Providing expert advice and solutions to help improve software systems.",
        points: [
            "Assessment of existing systems and processes.",
            "Recommendations for improvements and optimizations.",
            "Implementation of best practices in software development.",
            "Training and support for staff.",
            "Strategic planning for future technology needs",
        ],
        icon: <i className="fa-solid fa-phone"></i>,
    },
    // {
    //     title: "Custom Software Solutions",
    //     description: "Creating modern, responsive, and user-friendly web applications.",
    //     points: [
    //         "Building interactive UI components.",
    //         "Integrating APIs and managing state.",
    //         "Optimizing web performance.",
    //         "Ensuring cross-browser compatibility.",
    //         "Using modern frameworks like React and Vue.",
    //     ],
    //     icon: <i className="fa-solid fa-code"></i>,
    // },
    // {
    //     title: "API Development",
    //     description: "Designing visually appealing and user-friendly interfaces.",
    //     points: [
    //         "Conducting user research and testing.",
    //         "Creating wireframes and prototypes.",
    //         "Improving usability and accessibility.",
    //         "Enhancing user experiences through animation.",
    //         "Designing intuitive navigation flows.",
    //     ],
    // },
];

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
        // <div className={styles.servicesSection} id='services'>
        //     <h2 className={styles.heading}>Services</h2>
        //     <p className={styles.subheading}>What I Offer</p>
        //
        //     <Swiper
        //         modules={[Pagination, Navigation]}
        //         spaceBetween={20}
        //         slidesPerView={1}
        //         pagination={{ clickable: true }}
        //         breakpoints={{
        //             640: { slidesPerView: 1 },
        //             768: { slidesPerView: 2 },
        //             1024: { slidesPerView: 3 },
        //         }}
        //         className={styles.servicesCarousel}
        //         ref={swiperRef}
        //     >
        //         {services.map((service, index) => (
        //             <SwiperSlide key={index}>
        //                 <div className={styles.serviceCard} onClick={() => openModal(service)}>
        //                     <span className={styles.icon}>{service.icon}</span>
        //                     <h3 className={styles.serviceTitle}>{service.title}</h3>
        //                     <span className={styles.viewMore}>View More →</span>
        //                 </div>
        //             </SwiperSlide>
        //         ))}
        //     </Swiper>
        //
        //     {/* Custom Back and Next Buttons */}
        //     <div className={styles.navigationButtons}>
        //         <button className={styles.backButton} onClick={goToPreviousSlide}>
        //             ← Back
        //         </button>
        //         <button className={styles.nextButton} onClick={goToNextSlide}>
        //             Next →
        //         </button>
        //     </div>
        //
        //     {selectedService && (
        //         <Modal
        //             isOpen={modalOpen}
        //             onClose={closeModal}
        //             title={selectedService.title}
        //             description={selectedService.description}
        //             points={selectedService.points}
        //         />
        //     )}
        // </div>

    <section id="services" className="py-20 bg-white mt-[-50px] md:mt-0">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-6 border-2 border-black rounded-lg">
                    <i className="fa-solid fa-globe text-5xl mb-4"></i>
                    <h3 className="text-xl font-semibold mb-4">Web Development</h3>
                    <p className="text-gray-700">
                        I build scalable full-stack web applications using React,
                        Spring Boot, and NestJS. My focus is on delivering clean UIs,
                        secure APIs, and robust backend systems that solve real-world problems.
                    </p>
                </div>
                <div className="p-6 border-2 border-black rounded-lg">
                    <i className="fa-solid fa-server text-5xl mb-4"></i>
                    <h3 className="text-xl font-semibold mb-4">API Development</h3>
                    <p className="text-gray-700">
                        Design and implementation of RESTful APIs with proper documentation and security measures.
                    </p>
                </div>
                <div className="p-6 border-2 border-black rounded-lg">
                    <i className="fa-solid fa-mobile-button text-5xl mb-4"></i>
                    <h3 className="text-xl font-semibold mb-4">App Development</h3>
                    <p className="text-gray-700">
                        Mobile application development using React Native for cross-platform solutions.
                    </p>
                </div>

                <div className="p-6 border-2 border-black rounded-lg">
                    <i className="fa-solid fa-gears text-5xl mb-4"></i>
                    <h3 className="text-xl font-semibold mb-4">DevOps & Deployment</h3>
                    <p className="text-gray-700">
                        I containerize applications using Docker and implement CI/CD pipelines
                        to streamline deployment workflows. I’m experienced in deploying apps
                        to platforms like Vercel and managing the full software release cycle.
                    </p>
                </div>
                <div className="p-6 border-2 border-black rounded-lg">
                    <i className="fa-solid fa-screwdriver-wrench text-5xl mb-4"></i>
                    <h3 className="text-xl font-semibold mb-4">Testing & Documentation</h3>
                    <p className="text-gray-700">
                        I write unit and integration tests (e.g., with JUnit and Jest) to ensure
                        system reliability, and I create clear documentation to help teams maintain and scale
                        applications effectively.
                    </p>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Services;
