import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import "./ProjectsSection.css";
import p1 from "./p1.jpg";
import p2 from "./p2.jpg";
import p3 from "./p3.jpg";
import p4 from "./p4.jpeg";
import { Link } from "react-router-dom";

const ProjectsSection = () => {
    const controls = useAnimation();

    const projects = [
        {
            id: 1,
            title: "Swedish Village Development",
            category: "residential",
            description:
                "Complete construction of a modern housing village in Sweden",
            year: "2023",
            image: p1,
            stats: {
                area: "25,000 m²",
                duration: "24 months",
                team: "80 specialists",
            },
        },
        {
            id: 2,
            title: "Modular Housing Complex",
            category: "residential",
            description: "Multi-unit housing with efficient modular design",
            year: "2022",
            image: p2,
            stats: {
                area: "18,500 m²",
                duration: "20 months",
                team: "65 specialists",
            },
        },
        {
            id: 3,
            title: "High-Load Concrete Structures",
            category: "commercial",
            description:
                "Engineering complex concrete structures up to 8m height",
            year: "2023",
            image: p3,
            stats: {
                area: "12,000 m²",
                duration: "18 months",
                team: "45 specialists",
            },
        },
        {
            id: 4,
            title: "Nordic Residential Community",
            category: "residential",
            description: "Scandinavian-style village with durable finishes",
            year: "2024",
            image: p4,
            stats: {
                area: "30,000 m²",
                duration: "28 months",
                team: "95 specialists",
            },
        },
    ];

    useEffect(() => {
        controls.start("visible");
    }, [controls]);

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
        },
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    return (
        <section className="projects-section dark">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="section-header">
                    <div className="section-badge dark">Our Portfolio</div>
                    <h2>
                        Building <span className="accent">Swedish Quality</span>
                    </h2>
                    <p className="lead-text">
                        From complete village developments to complex concrete
                        structures, our projects showcase full-scope
                        construction expertise with Scandinavian precision and
                        durability.
                    </p>
                </motion.div>

                <motion.div
                    className="projects-grid"
                    variants={containerVariants}
                    initial="hidden"
                    animate={controls}>
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            className="project-card"
                            variants={itemVariants}
                            whileHover={{ y: -10 }}>
                            <div className="project-image">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    loading="lazy"
                                />
                                <div className="project-year">
                                    {project.year}
                                </div>
                            </div>
                            <div className="project-content">
                                <div className="project-category">
                                    {project.category}
                                </div>
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>

                                <div className="project-stats">
                                    <div className="stat-item">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="var(--primary)">
                                            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" />
                                            <path d="M7 12h2v5H7zm4-7h2v12h-2zm4 4h2v8h-2z" />
                                        </svg>
                                        <span>{project.stats.area}</span>
                                    </div>
                                    <div className="stat-item">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="var(--primary)">
                                            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
                                            <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                                        </svg>
                                        <span>{project.stats.duration}</span>
                                    </div>
                                    <div className="stat-item">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="var(--primary)">
                                            <path d="M16 11c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                                        </svg>
                                        <span>{project.stats.team}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    className="view-more-container"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}>
                    <Link to="/projects">
                        <motion.button
                            className="view-more-button dark"
                            whileHover={{
                                scale: 1.05,
                                backgroundColor: "#1fb3a8",
                                color: "#fff",
                            }}
                            whileTap={{ scale: 0.95 }}>
                            View Our Construction Expertise
                        </motion.button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default ProjectsSection;
