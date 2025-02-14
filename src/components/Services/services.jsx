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
        <div className={styles.servicesSection} id='services'>
            <h2 className={styles.heading}>Services</h2>
            <p className={styles.subheading}>What I Offer</p>

            <Swiper
                modules={[Pagination, Navigation]}
                spaceBetween={20}
                slidesPerView={1}
                pagination={{ clickable: true }}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                className={styles.servicesCarousel}
                ref={swiperRef} // Attach the swiperRef to the Swiper component
            >
                {services.map((service, index) => (
                    <SwiperSlide key={index}>
                        <div className={styles.serviceCard} onClick={() => openModal(service)}>
                            <span className={styles.icon}>{service.icon}</span>
                            <h3 className={styles.serviceTitle}>{service.title}</h3>
                            <span className={styles.viewMore}>View More →</span>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Back and Next Buttons */}
            <div className={styles.navigationButtons}>
                <button className={styles.backButton} onClick={goToPreviousSlide}>
                    ← Back
                </button>
                <button className={styles.nextButton} onClick={goToNextSlide}>
                    Next →
                </button>
            </div>

            {selectedService && (
                <Modal
                    isOpen={modalOpen}
                    onClose={closeModal}
                    title={selectedService.title}
                    description={selectedService.description}
                    points={selectedService.points}
                />
            )}
        </div>
    );
};

export default Services;
