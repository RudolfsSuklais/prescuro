import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";
import "./NavBar.css";
import logo from "./prescuro-logo.png";

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location]);

    const navVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    const navItems = [
        { name: "Home", path: "/", end: true },
        { name: "Services", path: "/services" },
        { name: "Projects", path: "/projects" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <motion.nav
            initial="hidden"
            animate="visible"
            variants={navVariants}
            className={`navbar ${scrolled ? "scrolled" : ""} ${
                mobileMenuOpen ? "mobile-open" : ""
            }`}>
            <div className="navbar-container">
                {/* Logo */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="logo">
                    <NavLink to="/">
                        <img
                            src={logo}
                            alt="Prescuro Logo"
                            className="logo-image"
                        />
                    </NavLink>
                </motion.div>

                {/* Desktop Navigation */}
                <ul className="nav-links">
                    {navItems.map((item) => (
                        <motion.li
                            key={item.path}
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.95 }}>
                            <NavLink
                                to={item.path}
                                end={item.end}
                                className={({ isActive }) =>
                                    `nav-link ${isActive ? "active" : ""}`
                                }>
                                {item.name}
                                <div className="nav-underline" />
                            </NavLink>
                        </motion.li>
                    ))}
                </ul>

                {/* Contact Button */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="nav-cta">
                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            `cta-button ${isActive ? "active-cta" : ""}`
                        }>
                        Get a Quote
                    </NavLink>
                </motion.div>

                {/* Mobile Menu Button */}
                <button
                    className="mobile-menu-button"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                    aria-expanded={mobileMenuOpen}>
                    {[0, 1, 2].map((index) => (
                        <motion.div
                            key={index}
                            animate={
                                mobileMenuOpen
                                    ? index === 0
                                        ? { rotate: 45, y: 7 }
                                        : index === 1
                                        ? { opacity: 0 }
                                        : { rotate: -45, y: -7 }
                                    : { rotate: 0, y: 0, opacity: 1 }
                            }
                            className="menu-line"
                        />
                    ))}
                </button>
            </div>

            {/* Mobile Menu */}
            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={
                    mobileMenuOpen
                        ? { height: "auto", opacity: 1 }
                        : { height: 0, opacity: 0 }
                }
                className="mobile-menu"
                style={{ pointerEvents: mobileMenuOpen ? "auto" : "none" }}>
                <ul>
                    {navItems.map((item, index) => (
                        <motion.li
                            key={item.path}
                            initial={{ x: -20, opacity: 0 }}
                            animate={
                                mobileMenuOpen
                                    ? { x: 0, opacity: 1 }
                                    : { x: -20, opacity: 0 }
                            }
                            transition={{ delay: index * 0.1 }}>
                            <NavLink
                                to={item.path}
                                end={item.end}
                                className={({ isActive }) =>
                                    `mobile-link ${isActive ? "active" : ""}`
                                }>
                                {item.name}
                            </NavLink>
                        </motion.li>
                    ))}
                    <motion.li
                        initial={{ x: -20, opacity: 0 }}
                        animate={
                            mobileMenuOpen
                                ? { x: 0, opacity: 1 }
                                : { x: -20, opacity: 0 }
                        }
                        transition={{ delay: navItems.length * 0.1 }}>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                `mobile-cta ${isActive ? "active-cta" : ""}`
                            }>
                            Get a Quote
                        </NavLink>
                    </motion.li>
                </ul>
            </motion.div>
        </motion.nav>
    );
};

export default NavBar;
