import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Home.css"; // Reusing your existing styles

const NotFoundPage = () => {
    const hoverProps = window.matchMedia("(max-width: 768px)").matches
        ? {}
        : {
              whileHover: { scale: 1.05, backgroundColor: "#1fb3a8" },
              whileTap: { scale: 0.95 },
          };

    return (
        <div className="homepage">
            <title>Prescuro | Page Not Found</title>
            <section className="hero" style={{ minHeight: "100vh" }}>
                <div className="video-overlay"></div>
                <video autoPlay muted loop playsInline className="video-bg">
                    <source
                        src="https://res.cloudinary.com/dszkl0dtq/video/upload/v1749750296/Untitled_video_-_Made_with_Clipchamp_1_jziedi.mp4"
                        type="video/mp4"
                    />
                    Your browser does not support HTML5 video.
                </video>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="hero-content"
                    style={{ textAlign: "center" }}>
                    <motion.div
                        initial={{ y: -20 }}
                        animate={{ y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="hero-tagline">
                        <div className="quality-badge">Error 404</div>
                        <h1>
                            Page <span className="accent">Not Found</span>
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="hero-description">
                        The page you're looking for doesn't exist or has been
                        moved.
                        <br />
                        Let's get you back to building something great.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="hero-cta-container"
                        style={{ justifyContent: "center" }}>
                        <Link to="/">
                            <motion.button
                                {...hoverProps}
                                className="cta-button primary">
                                RETURN HOME
                            </motion.button>
                        </Link>
                        <Link to="/contact">
                            <motion.button
                                {...hoverProps}
                                className="cta-button secondary">
                                CONTACT SUPPORT
                            </motion.button>
                        </Link>
                    </motion.div>
                </motion.div>
            </section>
        </div>
    );
};

export default NotFoundPage;
