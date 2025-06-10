import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./NavBar.css";
import logo from "./prescuro-logo.png";

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    const navItems = [
        { name: "Home", path: "/" },
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
            }`}
        >
            <div className="navbar-container">
                {/* Logo */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="logo"
                >
                    <Link to="/">
                        <img
                            src={logo}
                            alt="Prescuro Logo"
                            className="logo-image"
                        />
                    </Link>
                </motion.div>

                {/* Desktop Navigation */}
                <ul className="nav-links">
                    {navItems.map((item, index) => (
                        <motion.li
                            key={index}
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link to={item.path}>{item.name}</Link>
                            <div className="nav-underline"></div>
                        </motion.li>
                    ))}
                </ul>

                {/* Contact Button */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="nav-cta"
                >
                    <Link to="/contact" className="cta-button">
                        Get a Quote
                    </Link>
                </motion.div>

                {/* Mobile Menu Button */}
                <button
                    className="mobile-menu-button"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <motion.div
                        animate={
                            mobileMenuOpen
                                ? { rotate: 45, y: 7 }
                                : { rotate: 0, y: 0 }
                        }
                        className="menu-line"
                    ></motion.div>
                    <motion.div
                        animate={
                            mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }
                        }
                        className="menu-line"
                    ></motion.div>
                    <motion.div
                        animate={
                            mobileMenuOpen
                                ? { rotate: -45, y: -7 }
                                : { rotate: 0, y: 0 }
                        }
                        className="menu-line"
                    ></motion.div>
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
            >
                <ul>
                    {navItems.map((item, index) => (
                        <motion.li
                            key={index}
                            initial={{ x: -20, opacity: 0 }}
                            animate={
                                mobileMenuOpen
                                    ? { x: 0, opacity: 1 }
                                    : { x: -20, opacity: 0 }
                            }
                            transition={{ delay: index * 0.1 }}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <Link to={item.path}>{item.name}</Link>
                        </motion.li>
                    ))}
                    <motion.li
                        initial={{ x: -20, opacity: 0 }}
                        animate={
                            mobileMenuOpen
                                ? { x: 0, opacity: 1 }
                                : { x: -20, opacity: 0 }
                        }
                        transition={{ delay: navItems.length * 0.1 }}
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        <Link to="/contact" className="mobile-cta">
                            Get a Quote
                        </Link>
                    </motion.li>
                </ul>
            </motion.div>
        </motion.nav>
    );
};

export default NavBar;
