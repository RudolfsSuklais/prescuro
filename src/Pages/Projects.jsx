import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import "./Projects.css";

import ProjectCard from "../components/ProjectsCard/ProjectCard.jsx";

const Projects = () => {
    const controls = useAnimation();
    const projectsRef = useRef();
    const isInView = useInView(projectsRef, { once: true, margin: "-100px" });

    // Check if device is mobile
    const [isMobile, setIsMobile] = React.useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.matchMedia("(max-width: 768px)").matches);
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);

        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [controls, isInView]);

    useEffect(() => {
        const animateCounter = (element, target, duration = 1500) => {
            const start = 0;
            const startTime = performance.now();

            const updateCounter = (timestamp) => {
                const elapsed = timestamp - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const current = Math.floor(progress * target);

                // Format numbers with commas if needed
                element.textContent = current.toLocaleString();

                if (progress < 1) {
                    requestAnimationFrame(updateCounter);
                } else {
                    element.textContent = target.toLocaleString();
                }
            };

            requestAnimationFrame(updateCounter);
        };

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const card = entry.target;
                        const counter = card.querySelector(".stat-number");
                        const target = parseInt(
                            counter.getAttribute("data-target"),
                            10
                        );

                        // Reset counter to 0 before animating
                        counter.textContent = "0";

                        // Start animation
                        animateCounter(counter, target);

                        // Stop observing this card
                        observer.unobserve(card);
                    }
                });
            },
            { threshold: 0.5 }
        );

        // Observe all stat cards
        const statCards = document.querySelectorAll(".stat-card");
        statCards.forEach((card) => observer.observe(card));

        return () => {
            statCards.forEach((card) => observer.unobserve(card));
        };
    }, []);

    // Only apply hover effects if not on mobile
    const hoverProps = isMobile
        ? {}
        : {
              whileHover: { scale: 1.05, backgroundColor: "#1fb3a8" },
              whileTap: { scale: 0.95 },
          };

    const cardHoverProps = isMobile
        ? {}
        : {
              whileHover: { y: -10 },
          };

    // Sample projects data
    const projects = [
        {
            id: 1,
            title: "Stockholm Office Complex",
            location: "Stockholm, Sweden",
            type: "Commercial",
            year: "2024",
            size: "12,500 m²",
            duration: "18 months",
            description:
                "A modern 8-story office building with sustainable features and smart technology integration in the heart of Stockholm's business district.",
            image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            tags: ["LEED Certified", "Smart Building", "Commercial"],
        },
        {
            id: 2,
            title: "Gothenburg Residential Tower",
            location: "Gothenburg, Sweden",
            type: "Residential",
            year: "2023",
            size: "8,200 m²",
            duration: "14 months",
            description:
                "A 15-story luxury residential tower with panoramic views of the Göta älv river, featuring premium finishes and amenities.",
            image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            tags: ["Luxury", "Waterfront", "Residential"],
        },
        {
            id: 3,
            title: "Malmö Mixed-Use Development",
            location: "Malmö, Sweden",
            type: "Mixed-Use",
            year: "2023",
            size: "22,000 m²",
            duration: "24 months",
            description:
                "Integrated development combining retail, office space, and residential units with public plazas and green spaces.",
            image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            tags: ["Mixed-Use", "Urban Development", "Green Spaces"],
        },
        {
            id: 4,
            title: "Uppsala University Expansion",
            location: "Uppsala, Sweden",
            type: "Educational",
            year: "2022",
            size: "15,800 m²",
            duration: "20 months",
            description:
                "New campus facilities including lecture halls, research labs, and student commons for Sweden's oldest university.",
            image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            tags: ["Educational", "Campus", "Public Sector"],
        },
        {
            id: 5,
            title: "Oslo Hospitality Complex",
            location: "Oslo, Norway",
            type: "Hospitality",
            year: "2022",
            size: "9,500 m²",
            duration: "16 months",
            description:
                "Boutique hotel and conference center with Scandinavian design elements and sustainable construction practices.",
            image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            tags: ["Hospitality", "Boutique", "Scandinavian Design"],
        },
        {
            id: 6,
            title: "Copenhagen Retail Center",
            location: "Copenhagen, Denmark",
            type: "Retail",
            year: "2021",
            size: "18,300 m²",
            duration: "22 months",
            description:
                "Modern shopping center with innovative architectural features and energy-efficient systems in the Ørestad district.",
            image: "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            tags: ["Retail", "Energy Efficient", "Modern Architecture"],
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                when: "beforeChildren",
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    return (
        <div className="projects-page">
            <title>Prescuro | Projects</title>

            <section className="projects-hero">
                <div className="hero-gradient-overlay"></div>
                <div
                    className="construction-pattern"
                    style={{
                        backgroundImage: `url(https://res.cloudinary.com/dszkl0dtq/image/upload/v1749975935/projects_hero_bg_cd4spg.jpg)`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}></div>

                <div className="projects-hero-content">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="projects-hero-text">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="quality-badge">
                            Portfolio Showcase
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}>
                            Our <span className="accent">Construction</span>{" "}
                            Masterpieces
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="hero-description">
                            Explore our portfolio of exceptional projects across
                            Scandinavia, where quality craftsmanship meets
                            innovative design.
                        </motion.p>
                    </motion.div>
                </div>

                {/* Scroll indicator moved outside hero-content */}
                <motion.div
                    className="scroll-indicator"
                    animate={{
                        y: [0, 10, 0],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "loop",
                    }}>
                    ↓
                </motion.div>
            </section>

            {/* Projects Grid Section */}
            <motion.section
                ref={projectsRef}
                className="projects-grid-section dark"
                initial="hidden"
                animate={controls}
                variants={containerVariants}>
                <div className="projects-grid-container">
                    <motion.div
                        variants={itemVariants}
                        className="projects-header">
                        <h2>
                            Featured <span className="accent">Projects</span>
                        </h2>
                        <p>
                            Our portfolio showcases the quality and diversity of
                            our construction expertise
                        </p>
                    </motion.div>

                    <motion.div
                        className="projects-grid"
                        variants={containerVariants}>
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                variants={itemVariants}
                                {...cardHoverProps}>
                                <ProjectCard project={project} index={index} />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.section>

            {/* Modern Stats Section */}
            <motion.section
                className="projects-stats-section"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}>
                <div className="stats-gradient-bg"></div>
                <div className="projects-stats-container">
                    <motion.div
                        className="stats-header"
                        initial={{ y: -20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}>
                        <h2>
                            By The <span className="accent">Numbers</span>
                        </h2>
                        <p>Our achievements in measurable success</p>
                    </motion.div>

                    <motion.div
                        className="stats-grid"
                        initial="hidden"
                        whileInView="visible"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.2,
                                    when: "beforeChildren",
                                },
                            },
                        }}
                        viewport={{ once: true }}>
                        <motion.div
                            className="stat-card"
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            whileHover={{ y: -10 }}>
                            <div className="stat-icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor">
                                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" />
                                    <path d="M7 12h2v5H7zm4-7h2v12h-2zm4 4h2v8h-2z" />
                                </svg>
                            </div>
                            <div className="stat-content">
                                <div className="stat-number" data-target="48">
                                    0
                                </div>
                                <div className="stat-label">
                                    Projects Completed
                                </div>
                            </div>
                            <div className="stat-decoration"></div>
                        </motion.div>

                        <motion.div
                            className="stat-card"
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            whileHover={{ y: -10 }}>
                            <div className="stat-icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor">
                                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                </svg>
                            </div>
                            <div className="stat-content">
                                <div className="stat-number" data-target="12">
                                    0
                                </div>
                                <div className="stat-label">Countries</div>
                            </div>
                            <div className="stat-decoration"></div>
                        </motion.div>

                        <motion.div
                            className="stat-card"
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            whileHover={{ y: -10 }}>
                            <div className="stat-icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor">
                                    <path d="M3 5v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2zm12 4c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1z" />
                                </svg>
                            </div>
                            <div className="stat-content">
                                <div className="stat-number" data-target="250">
                                    0
                                </div>
                                <div className="stat-unit">,000+</div>
                                <div className="stat-label">
                                    Square Meters Built
                                </div>
                            </div>
                            <div className="stat-decoration"></div>
                        </motion.div>

                        <motion.div
                            className="stat-card"
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            whileHover={{ y: -10 }}>
                            <div className="stat-icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                </svg>
                            </div>
                            <div className="stat-content">
                                <div className="stat-number" data-target="100">
                                    0
                                </div>
                                <div className="stat-unit">%</div>
                                <div className="stat-label">
                                    Client Satisfaction
                                </div>
                            </div>
                            <div className="stat-decoration"></div>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.section>

            {/* CTA Section */}
            <motion.section
                className="projects-cta-section"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}>
                <div className="projects-cta-container">
                    <motion.div
                        className="cta-content"
                        initial={{ y: -20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}>
                        <h2>Ready to Start Your Project?</h2>
                        <p>
                            Contact us today to discuss your construction needs
                            and how we can bring your vision to life.
                        </p>
                        <motion.button
                            {...hoverProps}
                            className="cta-button primary">
                            GET IN TOUCH
                        </motion.button>
                    </motion.div>
                </div>
            </motion.section>
        </div>
    );
};

export default Projects;
