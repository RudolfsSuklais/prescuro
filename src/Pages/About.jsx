import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import "./About.css";

const About = () => {
    const controls = useAnimation();
    const aboutRef = useRef();
    const isInView = useInView(aboutRef, { once: true, margin: "-100px" });

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

    const timelineItemVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
            },
        },
    };

    const teamCardVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    const Counter = ({ target, duration, className }) => {
        const [count, setCount] = React.useState(0);
        const ref = useRef(null);
        const isInView = useInView(ref, { once: true });

        React.useEffect(() => {
            if (!isInView) return;

            let start = 0;
            const end = target;
            const incrementTime = duration / end;

            const timer = setInterval(() => {
                start += 1;
                setCount(start);
                if (start >= end) clearInterval(timer);
            }, incrementTime);

            return () => clearInterval(timer);
        }, [target, duration, isInView]);

        return (
            <span ref={ref} className={className}>
                {count}
            </span>
        );
    };

    return (
        <div className="about-page">
            <title>Prescuro | About Us</title>

            {/* Hero Section */}
            <section className="about-hero">
                <div className="hero-gradient-overlay"></div>
                <div
                    className="construction-pattern"
                    style={{
                        backgroundImage: `url(https://res.cloudinary.com/dszkl0dtq/image/upload/v1749975935/projects_hero_bg_cd4spg.jpg)`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}></div>

                <div className="about-hero-content">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="about-hero-text">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="quality-badge">
                            Building Excellence Since 2017
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}>
                            Precision Construction{" "}
                            <span className="accent">Across</span> Europe
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="hero-description">
                            Specializing in complete project management from
                            foundations to finishes, we bring Swedish quality
                            standards to every project.
                        </motion.p>
                    </motion.div>
                </div>

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

            {/* Mission Section - Updated Design */}
            <motion.section
                className="mission-section"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}>
                <div className="mission-container">
                    <motion.div
                        className="mission-content"
                        initial="hidden"
                        whileInView="visible"
                        variants={containerVariants}
                        viewport={{ once: true }}>
                        <motion.div
                            className="mission-header"
                            variants={itemVariants}>
                            <h2>
                                Our <span className="accent">Expertise</span>
                            </h2>
                            <p className="mission-subtitle">
                                Comprehensive construction solutions from start
                                to finish
                            </p>
                        </motion.div>

                        <motion.div
                            className="mission-statement"
                            variants={itemVariants}>
                            <p>
                                Founded in 2017, we specialize in managing every
                                stage of the construction process with precision
                                — from structural foundations and exterior
                                finishes to intricate interior details. Our
                                dedicated team ensures exceptional quality and
                                craftsmanship at every step.
                            </p>
                        </motion.div>

                        <motion.div
                            className="mission-features"
                            variants={containerVariants}>
                            <motion.div
                                className="feature-card"
                                variants={itemVariants}
                                {...cardHoverProps}>
                                <div className="feature-icon">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor">
                                        <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm-1.06 13.54L7.4 12l1.41-1.41 2.12 2.12 4.24-4.24 1.41 1.41-5.64 5.66z" />
                                    </svg>
                                </div>
                                <h3>Full-Service Contractor</h3>
                                <p>
                                    We operate as a general contractor,
                                    overseeing every stage from planning to
                                    final delivery with complete accountability.
                                </p>
                            </motion.div>

                            <motion.div
                                className="feature-card"
                                variants={itemVariants}
                                {...cardHoverProps}>
                                <div className="feature-icon">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor">
                                        <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zm1-11h-2v3H8v2h3v3h2v-3h3v-2h-3V8z" />
                                    </svg>
                                </div>
                                <h3>Workforce Solutions</h3>
                                <p>
                                    We provide skilled labor outsourcing across
                                    Europe, delivering flexible, high-quality
                                    personnel when needed most.
                                </p>
                            </motion.div>

                            <motion.div
                                className="feature-card"
                                variants={itemVariants}
                                {...cardHoverProps}>
                                <div className="feature-icon">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z" />
                                    </svg>
                                </div>
                                <h3>European Reach</h3>
                                <p>
                                    Delivering Swedish quality standards and
                                    precision across projects throughout Sweden
                                    and Europe.
                                </p>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.section>

            {/* Leadership Section - Updated Design */}
            <motion.section
                ref={aboutRef}
                className="leadership-section"
                initial="hidden"
                animate={controls}
                variants={containerVariants}>
                <div className="leadership-container">
                    <motion.div
                        className="leadership-header"
                        variants={itemVariants}>
                        <h2>
                            Our <span className="accent">Strength</span>
                        </h2>
                        <p>The foundation of our success</p>
                    </motion.div>

                    <motion.div className="team-stats" variants={itemVariants}>
                        <div className="stat-item">
                            <div className="stat-number">20+</div>
                            <div className="stat-label-strength">
                                Experienced Managers
                            </div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">120+</div>
                            <div className="stat-label-strength">
                                Skilled Professionals
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="team-description"
                        variants={itemVariants}>
                        <p>
                            Prescuro AB is powered by a core team of highly
                            experienced managers and a workforce of skilled
                            professionals. Our strength lies in combining
                            extensive hands-on experience with modern
                            construction practices to deliver quality at every
                            stage.
                        </p>
                    </motion.div>

                    <motion.div
                        className="expertise-grid"
                        variants={containerVariants}>
                        <motion.div
                            className="expertise-card"
                            variants={teamCardVariants}
                            {...cardHoverProps}>
                            <div className="expertise-icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor">
                                    <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                                </svg>
                            </div>
                            <h3>Project Management</h3>
                            <p>
                                Comprehensive oversight from initial planning
                                through final delivery
                            </p>
                        </motion.div>

                        <motion.div
                            className="expertise-card"
                            variants={teamCardVariants}
                            {...cardHoverProps}>
                            <div className="expertise-icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor">
                                    <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3zm0 12.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
                                </svg>
                            </div>
                            <h3>Groundworks</h3>
                            <p>
                                Precision in foundational work for structural
                                integrity
                            </p>
                        </motion.div>

                        <motion.div
                            className="expertise-card"
                            variants={teamCardVariants}
                            {...cardHoverProps}>
                            <div className="expertise-icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor">
                                    <path d="M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z" />
                                </svg>
                            </div>
                            <h3>Exterior Finishes</h3>
                            <p>
                                High-quality facade work that stands the test of
                                time
                            </p>
                        </motion.div>

                        <motion.div
                            className="expertise-card"
                            variants={teamCardVariants}
                            {...cardHoverProps}>
                            <div className="expertise-icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor">
                                    <path d="M12 3L1 9l11 6 9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
                                </svg>
                            </div>
                            <h3>Interior Detailing</h3>
                            <p>
                                Meticulous attention to interior craftsmanship
                            </p>
                        </motion.div>

                        {/* New Card 1 - Safety Standards */}
                        <motion.div
                            className="expertise-card"
                            variants={teamCardVariants}
                            {...cardHoverProps}>
                            <div className="expertise-icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor">
                                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11V11.99z" />
                                </svg>
                            </div>
                            <h3>Safety Standards</h3>
                            <p>
                                Rigorous safety protocols ensuring secure work
                                environments on all projects
                            </p>
                        </motion.div>

                        {/* New Card 2 - Sustainable Practices */}
                        <motion.div
                            className="expertise-card"
                            variants={teamCardVariants}
                            {...cardHoverProps}>
                            <div className="expertise-icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z" />
                                </svg>
                            </div>
                            <h3>Sustainable Practices</h3>
                            <p>
                                Environmentally conscious construction methods
                                reducing ecological impact
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.section>

            {/* Stats Section */}
            <motion.section
                className="about-stats-section"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}>
                <div className="stats-gradient-bg"></div>
                <div className="about-stats-container">
                    <motion.div
                        className="stats-header"
                        initial={{ y: -20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}>
                        <h2>
                            Our <span className="accent">Impact</span>
                        </h2>
                        <p>Numbers that demonstrate our capabilities</p>
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
                                <Counter
                                    target={7}
                                    duration={1500}
                                    className="stat-number"
                                />
                                <div className="stat-label">
                                    Years in Operation
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
                                <Counter
                                    target={12}
                                    duration={1500}
                                    className="stat-number"
                                />
                                <div className="stat-label">
                                    European Countries
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
                                    <path d="M3 5v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2zm12 4c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1z" />
                                </svg>
                            </div>
                            <div className="stat-content">
                                <Counter
                                    target={140}
                                    duration={1500}
                                    className="stat-number"
                                />
                                <div className="stat-unit">+</div>
                                <div className="stat-label">
                                    Dedicated Professionals
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
                                <Counter
                                    target={100}
                                    duration={1500}
                                    className="stat-number"
                                />
                                <div className="stat-unit">%</div>
                                <div className="stat-label">
                                    Projects Completed On Time
                                </div>
                            </div>
                            <div className="stat-decoration"></div>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.section>

            {/* CTA Section */}
            <motion.section
                className="about-cta-section"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}>
                <div className="about-cta-container">
                    <motion.div
                        className="cta-content"
                        initial={{ y: -20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}>
                        <h2>
                            Ready to <span className="accent">Build</span> With
                            Precision?
                        </h2>
                        <p>
                            Whether you need complete project management or
                            specialized workforce solutions, we're ready to
                            deliver Swedish-quality construction services.
                        </p>
                        <div className="cta-buttons">
                            <motion.button
                                {...hoverProps}
                                className="cta-button primary">
                                START A PROJECT
                            </motion.button>
                            <motion.button
                                {...hoverProps}
                                className="cta-button secondary">
                                REQUEST WORKFORCE
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </motion.section>
        </div>
    );
};

export default About;
