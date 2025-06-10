import React, { useRef } from "react";
import { motion } from "framer-motion";
import "./Home.css";
import constructionVideo from "../assets/hero-background.mp4";

const Home = () => {
    const videoRef = useRef();

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 0.2,
                duration: 0.6,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className="homepage">
            {/* Hero Section with Video Background */}
            <section className="hero">
                <div className="video-overlay"></div>
                <video
                    ref={videoRef}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="video-bg"
                >
                    <source src={constructionVideo} type="video/mp4" />
                    Your browser does not support HTML5 video.
                </video>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="hero-content"
                >
                    <motion.div
                        initial={{ y: -20 }}
                        animate={{ y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="hero-tagline"
                    >
                        <div className="quality-badge">Swedish Quality</div>
                        <h1>Expert Construction Across Europe</h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="hero-description"
                    >
                        Prescuro AB offers skilled construction, MEP, and
                        interior services across Europe — from groundworks to
                        project completion. We also deliver high-quality
                        materials worldwide, ensuring reliable support for
                        projects wherever you are.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="hero-cta-container"
                    >
                        <motion.button
                            whileHover={{
                                scale: 1.05,
                                backgroundColor: "#1fb3a8",
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="cta-button primary"
                        >
                            Our SERVICES
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="cta-button secondary"
                        >
                            CONTACT US
                        </motion.button>
                    </motion.div>
                </motion.div>

                <div className="scroll-indicator">
                    <motion.div
                        animate={{
                            y: [0, 10, 0],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            repeatType: "loop",
                        }}
                    >
                        ↓
                    </motion.div>
                </div>
            </section>

            {/* Services Section - Fixed */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
                className="services"
            >
                <motion.h2 variants={itemVariants}>OUR SERVICES</motion.h2>
                <motion.div variants={itemVariants} className="services-grid">
                    {[
                        {
                            title: "Residential Construction",
                            icon: "🏠",
                            description: "Custom homes tailored to your vision",
                        },
                        {
                            title: "Commercial Projects",
                            icon: "🏢",
                            description: "Modern spaces for business success",
                        },
                        {
                            title: "Renovations",
                            icon: "🛠️",
                            description: "Transforming existing spaces",
                        },
                        {
                            title: "Project Management",
                            icon: "📊",
                            description:
                                "End-to-end oversight for peace of mind",
                        },
                    ].map((service, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -5 }}
                            className="service-card"
                        >
                            <div className="service-icon">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.section>

            {/* Stats Section remains unchanged */}
            <section className="stats">
                <div className="stats-overlay"></div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="stats-content"
                >
                    {[
                        { number: "200+", label: "Projects Completed" },
                        { number: "15", label: "Years Experience" },
                        { number: "98%", label: "Client Satisfaction" },
                        { number: "50+", label: "Professional Team" },
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ scale: 0.8 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="stat-item"
                        >
                            <h3>{stat.number}</h3>
                            <p>{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </section>
        </div>
    );
};

export default Home;
