import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import "./Home.css";
import { Link } from "react-router-dom";
import ProjectsSection from "../components/Projects/ProjectsSection";

const Home = () => {
    const videoRef = useRef();
    const controls = useAnimation();
    const statsRef = useRef();
    const isInView = useInView(statsRef, { once: true, margin: "-100px" });
    const constructionVideo =
        "https://res.cloudinary.com/dszkl0dtq/video/upload/v1749750296/Untitled_video_-_Made_with_Clipchamp_1_jziedi.mp4";

    // Check if device supports hover (desktop) or not (mobile)
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

    const stats = [
        {
            id: 1,
            end: 120,
            label: "Skilled Construction Workers",
            plus: true,
            million: false,
        },
        {
            id: 2,
            end: 20,
            label: "Experienced Project Managers",
            plus: true,
            million: false,
        },
        {
            id: 3,
            end: 11,
            label: "Projected Turnover 2025 (€m)",
            plus: false,
            million: true,
        },
        {
            id: 4,
            end: 48,
            label: "Projects Successfully Completed",
            plus: false,
            million: false,
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

    const Counter = ({ end, plus, million }) => {
        const [count, setCount] = React.useState(0);
        const counterRef = useRef(null);

        React.useEffect(() => {
            let observer;
            let currentCount = 0;
            const increment = end / 100;

            const updateCount = () => {
                if (currentCount < end) {
                    currentCount += increment;
                    setCount(Math.min(Math.ceil(currentCount), end));
                    requestAnimationFrame(updateCount);
                } else {
                    setCount(end);
                }
            };

            observer = new IntersectionObserver(
                (entries) => {
                    if (entries[0].isIntersecting) {
                        updateCount();
                    }
                },
                { threshold: 0.1 }
            );

            if (counterRef.current) {
                observer.observe(counterRef.current);
            }

            return () => {
                if (observer && counterRef.current) {
                    observer.unobserve(counterRef.current);
                }
            };
        }, [end]);

        return (
            <span ref={counterRef} className="count">
                {count}
                {plus && "+"}
                {million && "M"}
            </span>
        );
    };

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

    const timelineCardHoverProps = isMobile
        ? {}
        : {
              whileHover: { scale: 1.03 },
          };

    return (
        <div className="homepage">
            <title>Prescuro | Home</title>
            <section className="hero">
                <div className="video-overlay"></div>
                <video
                    ref={videoRef}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="video-bg">
                    <source src={constructionVideo} type="video/mp4" />
                    Your browser does not support HTML5 video.
                </video>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="hero-content">
                    <motion.div
                        initial={{ y: -20 }}
                        animate={{ y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="hero-tagline">
                        <div className="quality-badge">Swedish Quality</div>
                        <h1>
                            Leading{" "}
                            <span className="accent"> Construction</span>{" "}
                            Services Across Europe
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="hero-description">
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
                        className="hero-cta-container">
                        <Link to="/services">
                            <motion.button
                                {...hoverProps}
                                className="cta-button primary">
                                OUR SERVICES
                            </motion.button>
                        </Link>
                        <Link to={"/contact"}>
                            <motion.button
                                {...hoverProps}
                                className="cta-button secondary">
                                CONTACT US
                            </motion.button>
                        </Link>
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
                        }}>
                        ↓
                    </motion.div>
                </div>
            </section>
            {/* Modern Stats Section */}
            <motion.section
                ref={statsRef}
                initial="hidden"
                animate={controls}
                variants={containerVariants}
                className="stats-section">
                <div className="stats-overlay"></div>
                <div className="stats-container">
                    <motion.div
                        variants={itemVariants}
                        className="stats-header">
                        <h2>Build With Confidence</h2>
                        <p>Trusted Across Europe for Over a Decade</p>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="stats-description">
                        <p>
                            Prescuro AB is a Stockholm-based construction
                            company delivering complete contracting services —
                            from groundwork to turnkey delivery — across Sweden
                            and Europe. With a strong team and proven
                            experience, we ensure quality, efficiency, and
                            reliability in every project.
                        </p>
                    </motion.div>

                    <motion.div className="stats-grid">
                        {stats.map((stat) => (
                            <motion.div
                                key={stat.id}
                                variants={itemVariants}
                                className="stat-card"
                                {...cardHoverProps}>
                                <h3>
                                    <Counter
                                        end={stat.end}
                                        plus={stat.plus}
                                        million={stat.million}
                                    />
                                </h3>
                                <p>{stat.label}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.section>

            <motion.section
                className="services-section dark"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}>
                <div className="services-container">
                    <motion.div
                        className="services-header"
                        initial={{ y: -20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}>
                        <h2>
                            Our <span className="accent">Core</span> Services
                        </h2>
                        <p>
                            Comprehensive solutions for every construction phase
                        </p>
                    </motion.div>

                    <div className="services-grid">
                        {/* Service Card 1 */}
                        <motion.div
                            className="service-card dark"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            {...cardHoverProps}>
                            <div className="service-image">
                                <img
                                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                                    alt="Structural Works"
                                    loading="lazy"
                                />
                                <div className="image-overlay dark"></div>
                            </div>
                            <div className="service-content">
                                <h3>Structural Works</h3>
                                <p>
                                    Robust frameworks and load-bearing
                                    structures built to last with precision
                                    engineering.
                                </p>
                            </div>
                        </motion.div>

                        {/* Service Card 2 */}
                        <motion.div
                            className="service-card dark"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true, margin: "-50px" }}
                            {...cardHoverProps}>
                            <div className="service-image">
                                <img
                                    src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                                    alt="Interior Works"
                                    loading="lazy"
                                />
                                <div className="image-overlay dark"></div>
                            </div>
                            <div className="service-content">
                                <h3>Interior Works</h3>
                                <p>
                                    Complete interior solutions from
                                    partitioning to final finishes, tailored to
                                    your vision.
                                </p>
                            </div>
                        </motion.div>

                        {/* Service Card 3 */}
                        <motion.div
                            className="service-card dark"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true, margin: "-50px" }}
                            {...cardHoverProps}>
                            <div className="service-image">
                                <img
                                    src="https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg"
                                    alt="Electrical & Plumbing"
                                    loading="lazy"
                                />
                                <div className="image-overlay dark"></div>
                            </div>
                            <div className="service-content">
                                <h3>Electrical & Plumbing</h3>
                                <p>
                                    Integrated MEP systems installed with safety
                                    and efficiency as top priorities.
                                </p>
                            </div>
                        </motion.div>

                        {/* Service Card 4 */}
                        <motion.div
                            className="service-card dark"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true, margin: "-50px" }}
                            {...cardHoverProps}>
                            <div className="service-image">
                                <img
                                    src="https://oknoplast.us/wp-content/uploads/2022/08/Aluminium-Front-Door-58742.jpg"
                                    alt="Doors & Windows"
                                    loading="lazy"
                                />
                                <div className="image-overlay dark"></div>
                            </div>
                            <div className="service-content">
                                <h3>Doors & Windows</h3>
                                <p>
                                    High-performance installations combining
                                    security, insulation and aesthetic appeal.
                                </p>
                            </div>
                        </motion.div>

                        {/* Service Card 5 */}
                        <motion.div
                            className="service-card dark"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            viewport={{ once: true, margin: "-50px" }}
                            {...cardHoverProps}>
                            <div className="service-image">
                                <img
                                    src="https://apavisa.com/storage/travertino-salon-moderno-con-ventanales.jpg"
                                    alt="Flooring & Installation"
                                    loading="lazy"
                                />
                                <div className="image-overlay dark"></div>
                            </div>
                            <div className="service-content">
                                <h3>Flooring & Installation</h3>
                                <p>
                                    Premium flooring solutions from hardwood to
                                    tiles, expertly installed for durability.
                                </p>
                            </div>
                        </motion.div>

                        {/* Service Card 6 */}
                        <motion.div
                            className="service-card dark"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            viewport={{ once: true, margin: "-50px" }}
                            {...cardHoverProps}>
                            <div className="service-image">
                                <img
                                    src="https://www.tatesurveyingservices.co.uk/wp-content/uploads/2023/04/interesting-roof-designs-2.webp"
                                    alt="Roofing & Plasterboard"
                                    loading="lazy"
                                />
                                <div className="image-overlay dark"></div>
                            </div>
                            <div className="service-content">
                                <h3>Roofing & Plasterboard</h3>
                                <p>
                                    Weatherproof roofing systems and smooth
                                    interior surfaces for complete protection.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                    <motion.div
                        className="view-more-container"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        viewport={{ once: true }}>
                        <Link to="/services">
                            <motion.button
                                className="view-more-button dark"
                                {...hoverProps}>
                                View All Services
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </motion.section>

            {/* About Section - Dark Theme */}
            <motion.section
                className="about-section dark"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}>
                <div className="about-container">
                    {/* Decorative elements */}
                    <div className="about-pattern"></div>

                    <div className="about-content">
                        {/* Left Column - Timeline */}
                        <motion.div
                            className="about-timeline"
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}>
                            {/* 2017 Marker */}
                            <div className="timeline-marker">
                                <div className="marker-line"></div>
                                <div className="marker-dot"></div>
                                <h3>2017</h3>
                            </div>
                            <motion.div
                                className="timeline-card"
                                {...timelineCardHoverProps}>
                                <h4>Our Foundation</h4>
                                <p>
                                    Prescuro AB was established in Stockholm
                                    with a vision to redefine construction
                                    excellence across Europe.
                                </p>
                                <div className="revenue-badge">ESTABLISHED</div>
                            </motion.div>

                            {/* 2024 Marker */}
                            <div className="timeline-marker">
                                <div className="marker-dot"></div>
                                <h3>2024</h3>
                            </div>
                            <motion.div
                                className="timeline-card"
                                {...timelineCardHoverProps}>
                                <h4>Growth Milestone</h4>
                                <p>
                                    Expanded operations across Scandinavia with
                                    major projects in commercial and residential
                                    sectors.
                                </p>
                                <div className="revenue-badge accent">
                                    €5,243,398
                                </div>
                            </motion.div>

                            {/* 2025 (Current) Marker */}
                            <div className="timeline-marker">
                                <div className="marker-dot"></div>
                                <h3>2025</h3>
                            </div>
                            <motion.div
                                className="timeline-card"
                                {...timelineCardHoverProps}>
                                <h4>Current Progress (as of June)</h4>
                                <p>
                                    As of June, we've achieved significant
                                    growth with ongoing European projects and
                                    new partnerships.
                                </p>
                                <div className="revenue-badge current">
                                    €5,478,000
                                </div>
                                <div className="projected-revenue">
                                    <span>Projected:</span>
                                    <span className="projected-amount">
                                        €11,500,482
                                    </span>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Right Column - Content */}
                        <div className="about-text">
                            <motion.div
                                initial={{ y: -20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                viewport={{ once: true }}>
                                <div className="section-badge dark">
                                    About Us
                                </div>
                                <h2>
                                    Building{" "}
                                    <span className="accent"> Excellence</span>{" "}
                                    Since 2017
                                </h2>
                                <p className="lead-text">
                                    Founded in 2017, we specialize in managing
                                    every stage of the construction process with
                                    precision — from structural foundations and
                                    exterior finishes to intricate interior
                                    details. Our dedicated team ensures
                                    exceptional quality and craftsmanship at
                                    every step.
                                </p>
                            </motion.div>

                            {/* Who We Are */}
                            <motion.div
                                className="about-feature"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                viewport={{ once: true }}>
                                <div className="feature-icon dark">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="var(--primary)">
                                        <path d="M12 3L1 9l11 6 9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
                                    </svg>
                                </div>
                                <div className="feature-text">
                                    <h3>Who We Are</h3>
                                    <p>
                                        Prescuro AB is powered by a core team of{" "}
                                        <strong>
                                            20 highly experienced managers
                                        </strong>{" "}
                                        and a workforce of
                                        <strong>
                                            {" "}
                                            120+ skilled professionals
                                        </strong>
                                        . Our strength lies in combining
                                        extensive hands-on experience with
                                        modern construction practices to deliver
                                        quality at every stage.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Diverse & Reliable */}
                            <motion.div
                                className="about-feature"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                                viewport={{ once: true }}>
                                <div className="feature-icon dark">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="var(--primary)">
                                        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11V11.99z" />
                                    </svg>
                                </div>
                                <div className="feature-text">
                                    <h3>Diverse & Reliable</h3>
                                    <p>
                                        We cover every stage — from groundworks
                                        to finishes — with the{" "}
                                        <strong>
                                            precision, versatility, and
                                            reliability
                                        </strong>{" "}
                                        trusted across Sweden and Europe. Our
                                        comprehensive approach ensures seamless
                                        project execution from concept to
                                        completion.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Sustainability Commitment */}
                            <motion.div
                                className="about-feature"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.8 }}
                                viewport={{ once: true }}>
                                <div className="feature-icon dark">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="var(--primary)">
                                        <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5c0 1.78 2 4.25 4 5.5h1v-2.25c1.61-1.1 3-2.5 3-3.25 0-.5-1-2.5-1-2.5l5.5-1.5 1.5 1.5H17z" />
                                    </svg>
                                </div>
                                <div className="feature-text">
                                    <h3>Sustainability Commitment</h3>
                                    <p>
                                        We integrate{" "}
                                        <strong>eco-friendly practices</strong>{" "}
                                        throughout our projects, using{" "}
                                        <strong>sustainable materials</strong>{" "}
                                        and{" "}
                                        <strong>
                                            energy-efficient designs
                                        </strong>
                                        . Our approach reduces environmental
                                        impact while maintaining structural
                                        integrity and cost-effectiveness for our
                                        clients.
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div
                                className="view-more-container"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                viewport={{ once: true }}>
                                <Link to={"/about"}>
                                    <motion.button
                                        className="view-more-button dark"
                                        {...hoverProps}>
                                        More About Us
                                    </motion.button>
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </motion.section>

            <ProjectsSection />
        </div>
    );
};

export default Home;
