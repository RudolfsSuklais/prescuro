import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import "./ProjectDetail.css";
import SW1 from "../assets/SW1.jpg";
import SW2 from "../assets/SW2.jpg";
import SW3 from "../assets/SW3.jpeg";
import SW4 from "../assets/SW4.jpeg";
import MH1 from "../assets/MH1.jpg";
import MH2 from "../assets/MH2.jpg";
import MH3 from "../assets/MH3.jpg";
import MH4 from "../assets/MH4.jpg";
import MH5 from "../assets/MH5.jpg";
import HS1 from "../assets/HS1.jpg";
import HS2 from "../assets/HS2.jpg";
import HS3 from "../assets/HS3.jpg";
import HS4 from "../assets/HS4.jpg";
import HS5 from "../assets/HS5.jpg";

const ProjectDetail = () => {
    const { id } = useParams();
    const [selectedImage, setSelectedImage] = useState(null);
    const [isHoveringBack, setIsHoveringBack] = useState(false);

    // Sample project data
    const projects = {
        1: {
            title: "Swedish Village Development",
            description:
                "A sustainable residential complex featuring Scandinavian design principles with energy-efficient solutions and communal green spaces.",
            images: [SW1, SW2, SW3, SW4],
            stats: {
                area: "24,500 m²",
                completion: "Q3 2024",
                materials:
                    "Cross-laminated timber, Recycled steel, Low-carbon concrete",
            },
        },
        2: {
            title: "Modular Housing Complex",
            description:
                "Innovative prefabricated housing units that can be configured for different family sizes and needs, with rapid assembly technology.",
            images: [MH5, MH2, MH3, MH4, MH1],
            stats: {
                area: "18,200 m²",
                completion: "Q1 2025",
                materials:
                    "Prefabricated modules, Composite panels, Smart glass",
            },
        },
        3: {
            title: "High-Load Concrete Structures",
            description:
                "Specialized commercial structures designed to withstand extreme loads while maintaining architectural elegance and functionality.",
            images: [HS4, HS2, HS3, HS1, HS5],
            stats: {
                area: "32,000 m²",
                completion: "Q4 2023",
                materials:
                    "High-performance concrete, Steel reinforcement, Vibration damping systems",
            },
        },
    };

    const project = projects[id] || projects[1];

    return (
        <div className="project-detail-page">
            <div className="project-header">
                <motion.div
                    className="back-button-wrapper"
                    onHoverStart={() => setIsHoveringBack(true)}
                    onHoverEnd={() => setIsHoveringBack(false)}>
                    <Link to="/projects" className="back-button">
                        <motion.span
                            animate={{ x: isHoveringBack ? -5 : 0 }}
                            transition={{ type: "spring", stiffness: 500 }}>
                            ←
                        </motion.span>
                        <span>Back to Projects</span>
                    </Link>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}>
                    {project.title}
                </motion.h1>
                <motion.p
                    className="project-description"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}>
                    {project.description}
                </motion.p>
            </div>

            <div className="image-gallery">
                <motion.div
                    className="featured-image"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    onClick={() => setSelectedImage(project.images[0])}
                    whileHover={{ scale: 1.01 }}>
                    <img
                        src={project.images[0]}
                        alt={`Featured - ${project.title}`}
                    />
                    <div className="image-overlay">
                        <motion.span
                            className="zoom-hint"
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ repeat: Infinity, duration: 2 }}>
                            Click to enlarge
                        </motion.span>
                    </div>
                </motion.div>

                <div className="secondary-images">
                    {project.images.slice(1).map((image, index) => (
                        <motion.div
                            key={index}
                            className="image-tile"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                delay: 0.4 + index * 0.1,
                                type: "spring",
                                stiffness: 100,
                            }}
                            whileHover={{ scale: 1.03 }}
                            onClick={() => setSelectedImage(image)}>
                            <img
                                src={image}
                                alt={`${project.title} - ${index + 1}`}
                                loading="lazy"
                            />
                            <div className="image-overlay">
                                <motion.span
                                    className="zoom-hint"
                                    animate={{ scale: [1, 1.1, 1] }}
                                    transition={{
                                        repeat: Infinity,
                                        duration: 2,
                                        delay: index * 0.2,
                                    }}>
                                    +
                                </motion.span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        className="image-modal"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}>
                        <motion.div
                            className="modal-content"
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            onClick={(e) => e.stopPropagation()}>
                            <button
                                className="close-modal"
                                onClick={() => setSelectedImage(null)}
                                whileHover={{ rotate: 90, scale: 1.1 }}>
                                ×
                            </button>
                            <img src={selectedImage} alt="Enlarged view" />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ProjectDetail;
