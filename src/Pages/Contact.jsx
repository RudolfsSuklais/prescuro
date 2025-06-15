import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
    const formRef = useRef();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [submitError, setSubmitError] = useState("");

    const subjects = [
        "General Inquiry",
        "Project Consultation",
        "Workforce Solutions",
        "Career Opportunities",
        "Partnerships",
        "Other",
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitError("");

        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setIsSubmitting(false);
                    setSubmitSuccess(true);
                    setFormData({
                        name: "",
                        email: "",
                        subject: "",
                        message: "",
                    });
                    setTimeout(() => setSubmitSuccess(false), 5000);
                },
                (error) => {
                    console.log(error.text);
                    setIsSubmitting(false);
                    setSubmitError("Failed to send message. Please try again.");
                }
            );
    };

    return (
        <div className="contact-page">
            <title>Prescuro | Contact Us</title>

            {/* Hero Section */}
            <section className="contact-hero">
                <div className="hero-gradient-overlay"></div>
                <div
                    className="construction-pattern"
                    style={{
                        backgroundImage: `url(https://res.cloudinary.com/dszkl0dtq/image/upload/v1749975935/projects_hero_bg_cd4spg.jpg)`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}></div>

                <div className="contact-hero-content">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="contact-hero-text">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="quality-badge">
                            Get In Touch
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}>
                            Let's <span className="accent">Build</span> Together
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="hero-description">
                            Whether you have questions about our services or
                            want to discuss a project, our team is ready to
                            assist you.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Form Section */}
            <motion.section
                className="contact-form-section"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}>
                <div className="contact-form-container">
                    <motion.div
                        className="contact-info"
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}>
                        <h2>
                            Contact <span className="accent">Information</span>
                        </h2>
                        <div className="info-item">
                            <div className="info-icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor">
                                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                </svg>
                            </div>
                            <div className="info-content">
                                <h3>Email</h3>
                                <p>info@prescuro.com</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <div className="info-icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor">
                                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                                </svg>
                            </div>
                            <div className="info-content">
                                <h3>Phone</h3>
                                <p>+46 8 123 4567</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <div className="info-icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor">
                                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                </svg>
                            </div>
                            <div className="info-content">
                                <h3>Headquarters</h3>
                                <p>Stockholm, Sweden</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="form-wrapper"
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}>
                        <h2>
                            Send Us a <span className="accent">Message</span>
                        </h2>
                        <form ref={formRef} onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <select
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required>
                                    <option value="">Select a subject</option>
                                    {subjects.map((subject, index) => (
                                        <option key={index} value={subject}>
                                            {subject}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Your Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required></textarea>
                            </div>
                            <motion.button
                                type="submit"
                                className="submit-button"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                disabled={isSubmitting}>
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </motion.button>
                            {submitSuccess && (
                                <motion.div
                                    className="success-message"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}>
                                    Thank you! Your message has been sent
                                    successfully.
                                </motion.div>
                            )}
                            {submitError && (
                                <motion.div
                                    className="error-message"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}>
                                    {submitError}
                                </motion.div>
                            )}
                        </form>
                    </motion.div>
                </div>
            </motion.section>

            {/* Map Section */}
            <section className="map-section">
                <iframe
                    title="Prescuro Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32571.14358387601!2d18.0638565!3d59.3293235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f763119640bcb%3A0xa80d27d3679d7766!2sStockholm%2C%20Sweden!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"></iframe>
            </section>
        </div>
    );
};

export default Contact;
