import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            className="project-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-50px" }}>
            <div className="project-image-container">
                <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="project-image"
                />
                <div className="project-image-overlay"></div>
                <div className="project-year">{project.year}</div>
            </div>

            <div className="project-content">
                <div className="project-meta">
                    <span className="project-type">{project.type}</span>
                    <span className="project-location">{project.location}</span>
                </div>

                <h3 className="project-title">{project.title}</h3>

                <div className="project-details">
                    <div className="detail-item">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
                            <path d="M13 7h-2v5.414l3.293 3.293 1.414-1.414L13 11.586z" />
                        </svg>
                        <span>{project.duration}</span>
                    </div>
                    <div className="detail-item">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor">
                            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" />
                            <path d="M7 12h2v5H7zm4-7h2v12h-2zm4 4h2v8h-2z" />
                        </svg>
                        <span>{project.size}</span>
                    </div>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-tags">
                    {project.tags.map((tag, i) => (
                        <span key={i} className="project-tag">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
