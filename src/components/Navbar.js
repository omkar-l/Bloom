import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Navbar = ({ isMenuOpen }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 992);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="navbar-wrapper">
      {/* Animated Logo */}
      <motion.div
        className="logo-container"
        animate={
          isMobile
            ? isMenuOpen
              ? { top: "10px", left: "20px", x: "0", y: "0" } // Mobile (Menu Open)
              : { top: "10px", left: "20px", x: "0", y: "0" } // Mobile (Menu Closed)
            : isMenuOpen
            ? { top: "13%", left: "67%", x: "-50%", y: "50%" } // Desktop (Menu Open)
            : { top: "25px", left: "80px", x: "0", y: "0" } // Desktop (Menu Closed)
        }
        transition={{ duration: 1, ease: "easeInOut" }}
        style={{ position: "fixed", zIndex: 1050 }}
      >
        <img src="logo.jpg" alt="Logo" className="logo-img" />
        {/* <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Logo" className="logo-img" /> */}
        
      </motion.div>

      <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link text-light" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">Contact</a>
              </li>
              <li className="nav-item">
                <button className="custom-btn custom-login-btn">Login</button>
              </li>
              <li className="nav-item">
                <button className="custom-btn custom-signup-btn">Sign Up</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
