import React from "react";
import { motion } from "framer-motion";
import "./Services.css"; // We'll create this CSS file
import { Link } from "react-router-dom";

const Services = () => {
    // Check if device is mobile
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.matchMedia("(max-width: 768px)").matches);
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);

        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // Hover effects only for desktop
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

    // Service categories data
    const serviceCategories = [
        {
            id: 1,
            title: "Structural Works",
            description:
                "Comprehensive structural solutions from foundations to framing",
            services: [
                "Concrete foundations & slabs",
                "Steel & timber framing",
                "Load-bearing walls",
                "Structural repairs",
                "Pre-engineered buildings",
            ],
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        },
        {
            id: 2,
            title: "Interior Construction",
            description:
                "Complete interior build-outs tailored to your specifications",
            services: [
                "Drywall installation",
                "Acoustic ceilings",
                "Partition walls",
                "Interior finishes",
                "Custom millwork",
            ],
            image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        },
        {
            id: 3,
            title: "MEP Systems",
            description:
                "Integrated mechanical, electrical and plumbing installations",
            services: [
                "HVAC systems",
                "Electrical wiring & panels",
                "Plumbing & piping",
                "Fire protection systems",
                "Building automation",
            ],
            image: "https://www.truecadd.com/wp-content/themes/truecaddtheme/images/mep-3d-modeling/mep-model-of-multistorey-mix-used-building-large.jpg",
        },
        {
            id: 4,
            title: "Exterior Finishes",
            description: "High-performance building envelopes for any climate",
            services: [
                "Brick & stone masonry",
                "Curtain wall systems",
                "EIFS & stucco",
                "Metal panel cladding",
                "Waterproofing",
            ],
            image: "https://st.hzcdn.com/simgs/pictures/exteriors/gray-s-crossing-mountain-modern-golf-course-home-in-house-builders-img~caa191290a8fab76_14-8692-1-7195ae8.jpg",
        },
        {
            id: 5,
            title: "Specialty Construction",
            description: "Custom solutions for unique project requirements",
            services: [
                "Clean room construction",
                "Soundproof studios",
                "Data center builds",
                "Laboratory facilities",
                "Secure environments",
            ],
            image: "https://tubefittings.eu/blog/wp-content/uploads/2023/07/luksusowe-drewniane-lamele-do-w-sypialni-900x450.jpg",
        },
        {
            id: 6,
            title: "Project Management",
            description:
                "End-to-end coordination for seamless project execution",
            services: [
                "Cost estimation",
                "Scheduling",
                "Quality control",
                "Safety management",
                "Turnkey delivery",
            ],
            image: "https://teltonika-networks.com/cdn/extras/12448/social-usecase-197-en-1200xAuto.jpg",
        },
    ];

    const processSteps = [
        {
            step: 1,
            title: "Initial Consultation",
            description:
                "We meet to understand your vision, requirements, and project scope through detailed discussions.",
            icon: "fas fa-comments", // Font Awesome class names
            color: "#30d5c8",
            iconType: "font-awesome", // Add this to distinguish icon types
        },
        {
            step: 2,
            title: "Strategic Planning",
            description:
                "Our experts create comprehensive plans with 3D models, timelines, and budget projections.",
            icon: "fas fa-project-diagram",
            color: "#4a90e2",
            iconType: "font-awesome",
        },
        {
            step: 3,
            title: "Material Procurement",
            description:
                "We source premium materials from trusted suppliers around the world—including Europe, Southeast Asia and the Middle East backed by strict quality guarantees",
            icon: "fas fa-boxes",
            color: "#ff9f1c",
            iconType: "font-awesome",
        },
        {
            step: 4,
            title: "Precision Construction",
            description:
                "Skilled craftsmen execute the project with meticulous attention to detail and quality control.",
            icon: "fas fa-hammer",
            color: "#e71d36",
            iconType: "font-awesome",
        },
        {
            step: 5,
            title: "Final Delivery",
            description:
                "We conduct rigorous inspections and hand over the completed project with documentation.",
            icon: "fas fa-clipboard-check",
            color: "#2ecc71",
            iconType: "font-awesome",
        },
    ];

    return (
        <div className="services-page">
            <title>Prescuro | Services</title>

            {/* Hero Section */}
            <section className="services-hero">
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="hero-text">
                        <div className="section-badge">Our Services</div>
                        <h1>
                            Comprehensive{" "}
                            <span className="accent">Construction</span>{" "}
                            Solutions
                        </h1>
                        <p className="hero-description">
                            From initial groundwork to final finishes, Prescuro
                            AB delivers complete construction services
                            internationally. Our expertise spans all project
                            phases, ensuring quality, efficiency, and
                            reliability at every step.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid Section */}
            <section className="services-grid-section">
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}>
                        <h2>
                            Our <span className="accent">Service</span>{" "}
                            Categories
                        </h2>
                        <p>
                            Specialized solutions tailored to your project needs
                        </p>
                    </motion.div>

                    <div className="services-grid">
                        {serviceCategories.map((category, index) => (
                            <motion.div
                                key={category.id}
                                className="service-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                }}
                                viewport={{ once: true, margin: "-50px" }}
                                {...cardHoverProps}>
                                <div className="service-image">
                                    <img
                                        src={category.image}
                                        alt={category.title}
                                        loading="lazy"
                                    />
                                    <div className="image-overlay"></div>
                                </div>
                                <div className="service-content">
                                    <h3>{category.title}</h3>
                                    <p className="service-description">
                                        {category.description}
                                    </p>
                                    <ul className="service-list">
                                        {category.services.map((service, i) => (
                                            <li key={i}>{service}</li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section - Redesigned */}
            <section className="process-section">
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}>
                        <div className="section-badge">Our Process</div>
                        <h2>
                            The <span className="accent">Prescuro</span> Way
                        </h2>
                        <p className="section-description">
                            A meticulously crafted approach that ensures
                            precision, quality, and transparency at every stage
                            of your project.
                        </p>
                    </motion.div>

                    <div className="process-cards-container">
                        {processSteps.map((step, index) => (
                            <motion.div
                                key={step.step}
                                className="process-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                }}
                                viewport={{ once: true, margin: "-50px" }}
                                {...cardHoverProps}>
                                <div className="process-card-header">
                                    <div
                                        className="process-step-number"
                                        style={{
                                            backgroundColor: step.color,
                                            boxShadow: `0 0 0 8px ${step.color}20`,
                                        }}>
                                        {step.step}
                                    </div>
                                    <div className="process-icon-wrapper">
                                        <i
                                            className={`${step.icon} process-icon`}
                                        />
                                    </div>
                                </div>
                                <div className="process-card-body">
                                    <h3>{step.title}</h3>
                                    <p>{step.description}</p>
                                </div>
                                {index < processSteps.length - 1 && (
                                    <div className="process-connector">
                                        <div
                                            className="connector-line"
                                            style={{
                                                backgroundColor: step.color,
                                            }}
                                        />
                                        <div
                                            className="connector-arrow"
                                            style={{
                                                borderLeftColor: step.color,
                                                borderTopColor: step.color,
                                            }}
                                        />
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Materials Section */}
            <section className="materials-section">
                <div className="container">
                    <div className="materials-content">
                        <motion.div
                            className="materials-text"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}>
                            <div className="section-badge">Materials</div>
                            <h2>
                                Global Sourcing of{" "}
                                <span className="accent">
                                    Premium Materials
                                </span>
                            </h2>
                            <p>
                                Prescuro AB provides access to high-quality
                                construction materials from trusted suppliers
                                worldwide. We manage procurement, logistics, and
                                quality assurance to ensure your project
                                receives the best materials—on time and to
                                specification.
                            </p>
                            <div className="materials-list">
                                <div className="material-category">
                                    <h4>Structural Materials</h4>
                                    <ul>
                                        <li>
                                            Steel beams, rebar & structural
                                            profiles
                                        </li>
                                        <li>
                                            Timber & engineered wood (All kind
                                            of plywood)
                                        </li>
                                        <li>Masonry and construction blocks</li>
                                        <li>
                                            Insulated panels & structural
                                            cladding
                                        </li>
                                    </ul>
                                </div>
                                <div className="material-category">
                                    <h4>Interior & Finishing Products</h4>
                                    <ul>
                                        <li>
                                            Flooring systems (wood, laminate,
                                            vinyl, tiling, bamboo flooring)
                                        </li>

                                        <li>Wall panels & coverings</li>
                                        <li>
                                            Ceiling structures & acoustic
                                            systems
                                        </li>
                                        <li>
                                            Doors, windows & interior joinery
                                        </li>
                                    </ul>
                                </div>
                                <div className="material-category">
                                    <h4>Aluminum Systems & Solutions</h4>
                                    <ul>
                                        <li>
                                            Complete aluminum façade systems
                                        </li>
                                        <li>
                                            Curtain walls & unitized façades
                                        </li>
                                        <li>
                                            Windows, doors & sliding systems
                                        </li>
                                        <li>
                                            Pergolas, partitions & custom
                                            architectural elements
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <Link to="/contact">
                                <motion.button
                                    className="view-more-button dark"
                                    {...hoverProps}>
                                    Request Materials Catalog
                                </motion.button>
                            </Link>
                        </motion.div>
                        <motion.div
                            className="materials-image"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}>
                            <img
                                src="https://images.pexels.com/photos/396550/pexels-photo-396550.jpeg?auto=compress&cs=tinysrgb&w=600"
                                alt="Construction materials"
                                loading="lazy"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="services-cta dark">
                <div className="container">
                    <motion.div
                        className="cta-content"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}>
                        <h2>
                            Ready to Start Your{" "}
                            <span className="accent">Project</span>?
                        </h2>
                        <p>
                            Contact our team to discuss your construction needs
                            and discover how we can bring your vision to life
                            with our comprehensive services and European
                            expertise.
                        </p>
                        <div className="cta-buttons">
                            <Link to={"/contact"}>
                                <motion.button
                                    className="view-more-button dark"
                                    {...hoverProps}>
                                    Get a Free Consultation
                                </motion.button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Services;
