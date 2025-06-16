import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import "./Projects.css";
import { Link } from "react-router-dom";
import p1 from "../components/Projects/p1.jpg";
import p2 from "../components/Projects/p2.jpg";
import p3 from "../components/Projects/p3.jpg";
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

    const projects = [
        {
            id: 1,
            title: "Swedish Village Development",
            location: "Stockholm, Sweden",
            type: "Residential",
            year: "2023",
            size: "25,000 m²",
            duration: "24 months",
            description:
                "Complete construction of a modern housing village in Sweden featuring sustainable materials and community spaces.",
            image: p3,
            tags: ["Residential", "Sustainable", "Community"],
        },
        {
            id: 2,
            title: "Modular Housing Complex",
            location: "Gothenburg, Sweden",
            type: "Residential",
            year: "2022",
            size: "18,500 m²",
            duration: "20 months",
            description:
                "Multi-unit housing with efficient modular design that reduced construction time by 30% compared to traditional methods.",
            image: p2,
            tags: ["Modular", "Efficient", "Residential"],
        },
        {
            id: 3,
            title: "High-Load Concrete Structures",
            location: "Malmö, Sweden",
            type: "Commercial",
            year: "2023",
            size: "12,000 m²",
            duration: "18 months",
            description:
                "Engineering complex concrete structures up to 8m height for a new commercial development with challenging architectural requirements.",
            image: p1,
            tags: ["Concrete", "Commercial", "Engineering"],
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
                        <h2>
                            Ready to <span className="accent">Start</span> Your
                            Project?
                        </h2>
                        <p>
                            Contact us today to discuss your construction needs
                            and how we can bring your vision to life.
                        </p>
                        <Link to="/contact">
                            <motion.button
                                {...hoverProps}
                                className="cta-button primary">
                                GET IN TOUCH
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </motion.section>
        </div>
    );
};

export default Projects;
