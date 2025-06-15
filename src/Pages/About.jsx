import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./About.css";

const About = () => {
    const ref = useRef();
    const isInView = useInView(ref, { once: false, margin: "-100px" });

    // Executive team data
    const executives = [
        {
            id: 1,
            name: "Erik Johansson",
            title: "Chief Executive Officer",
            bio: "25+ years leading major construction projects across Europe",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
            signature: "/signature1.svg",
        },
        {
            id: 2,
            name: "Anna Bergman",
            title: "Chief Design Officer",
            bio: "Award-winning architect specializing in sustainable commercial spaces",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
            signature: "/signature2.svg",
        },
    ];

    // Milestones
    const milestones = [
        {
            year: "2017",
            title: "Company Founding",
            description:
                "Established in Stockholm with a vision for uncompromising quality",
            image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        },
        {
            year: "2020",
            title: "International Expansion",
            description:
                "First major project in Oslo set the standard for Nordic excellence",
            image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        },
        {
            year: "2023",
            title: "Premium Certification",
            description: "Awarded Nordic Construction Excellence certification",
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        },
    ];

    return (
        <div className="about-premium">
            {/* Luxury Hero */}
            <section className="premium-hero">
                <div className="hero-video-container">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="hero-video">
                        <source src="/construction-hero.mp4" type="video/mp4" />
                    </video>
                    <div className="hero-overlay"></div>
                </div>

                <div className="hero-content">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1,
                            ease: [0.6, 0.05, -0.01, 0.9],
                        }}
                        className="hero-text-container">
                        <div className="premium-badge">EST. 2017</div>
                        <h1 className="hero-title">
                            <span className="title-line">Redefining</span>
                            <span className="title-line accent">
                                Construction
                            </span>
                            <span className="title-line">Excellence</span>
                        </h1>
                        <p className="hero-subtitle">
                            Premium construction services across Scandinavia
                        </p>
                    </motion.div>

                    <motion.div
                        className="scroll-hint"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}>
                        <div className="scroll-line"></div>
                        <span>Explore</span>
                    </motion.div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="philosophy-section">
                <div className="section-container">
                    <motion.div
                        className="philosophy-content"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true, margin: "0px 0px -100px 0px" }}>
                        <h2 className="section-title">
                            <span className="title-number">01</span>
                            <span>Our Philosophy</span>
                        </h2>
                        <p className="philosophy-statement">
                            We believe buildings should embody both aesthetic
                            vision and structural perfection. Each project
                            receives the attention of a bespoke creation,
                            crafted by Europe's finest artisans.
                        </p>
                        <div className="signature-block">
                            <img
                                src="/ceo-signature.png"
                                alt="CEO Signature"
                                className="signature"
                            />
                            <span className="signature-name">
                                Erik Johansson, Founder
                            </span>
                        </div>
                    </motion.div>

                    <motion.div
                        className="philosophy-image"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.2,
                            ease: "easeOut",
                        }}
                        viewport={{ once: true, margin: "0px 0px -100px 0px" }}>
                        <img
                            src="https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
                            alt="Architectural detail"
                            className="parallax-image"
                        />
                    </motion.div>
                </div>
            </section>

            {/* Executive Team */}
            <section className="executive-team">
                <div className="section-header">
                    <h2 className="section-title">
                        <span className="title-number">02</span>
                        <span>Executive Leadership</span>
                    </h2>
                    <p className="section-subtitle">
                        Visionaries shaping the future of construction
                    </p>
                </div>

                <div className="executive-grid">
                    {executives.map((exec, index) => (
                        <motion.div
                            key={exec.id}
                            className="executive-card"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            viewport={{
                                once: true,
                                margin: "0px 0px -50px 0px",
                            }}>
                            <div className="executive-image-container">
                                <img
                                    src={exec.image}
                                    alt={exec.name}
                                    className="executive-portrait"
                                />
                                <div className="executive-overlay">
                                    <span className="view-profile">
                                        View Profile
                                    </span>
                                </div>
                            </div>
                            <div className="executive-info">
                                <h3 className="executive-name">{exec.name}</h3>
                                <p className="executive-title">{exec.title}</p>
                                <p className="executive-bio">{exec.bio}</p>
                                <div className="executive-contact">
                                    <span className="contact-link">
                                        Contact {exec.name.split(" ")[0]}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Milestones */}
            <section className="milestones-section">
                <div className="section-header">
                    <h2 className="section-title">
                        <span className="title-number">03</span>
                        <span>Our Journey</span>
                    </h2>
                </div>

                <div className="milestones-container">
                    {milestones.map((milestone, index) => (
                        <motion.div
                            key={index}
                            className="milestone-item"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{
                                once: true,
                                margin: "0px 0px -50px 0px",
                            }}>
                            <div className="milestone-year">
                                {milestone.year}
                            </div>
                            <div className="milestone-content">
                                <div className="milestone-image-container">
                                    <img
                                        src={milestone.image}
                                        alt={milestone.title}
                                        className="milestone-image"
                                    />
                                </div>
                                <div className="milestone-text">
                                    <h3 className="milestone-title">
                                        {milestone.title}
                                    </h3>
                                    <p className="milestone-description">
                                        {milestone.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Premium Stats */}
            <section className="premium-stats">
                <div className="stats-overlay"></div>
                <div className="section-container">
                    <motion.div
                        className="stats-grid"
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
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
                        ref={ref}>
                        <motion.div
                            className="stat-card"
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0 },
                            }}>
                            <div className="stat-number">48</div>
                            <div className="stat-divider"></div>
                            <div className="stat-label">
                                Premium Projects Completed
                            </div>
                        </motion.div>

                        <motion.div
                            className="stat-card"
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0 },
                            }}>
                            <div className="stat-number">120+</div>
                            <div className="stat-divider"></div>
                            <div className="stat-label">Master Craftsmen</div>
                        </motion.div>

                        <motion.div
                            className="stat-card"
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0 },
                            }}>
                            <div className="stat-number">12</div>
                            <div className="stat-divider"></div>
                            <div className="stat-label">European Countries</div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Bespoke CTA */}
            <section className="bespoke-cta">
                <div className="cta-container">
                    <motion.div
                        className="cta-content"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}>
                        <h2 className="cta-title">
                            Begin Your Architectural Journey
                        </h2>
                        <p className="cta-subtitle">
                            Contact our concierge team to discuss your vision
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="cta-button">
                            <span className="button-text">
                                Schedule Consultation
                            </span>
                            <span className="button-icon">→</span>
                        </motion.button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default About;
