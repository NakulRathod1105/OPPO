import React, { useState, useEffect } from "react";
import "./BackToTopButton.css"

const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      style={{
        display: visible ? "block" : "none",
        position: "fixed",
        bottom: "50px",
        right: "30px",
        background: "transparent", // Remove background
        border: "none", // Remove border
        padding: "10px", // Adjust padding
        cursor: "pointer",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)", // Add shadow
        borderRadius: "50%", // Make button circular
        transition: "all 0.3s ease", // Smooth transition
        zIndex: 1000, // Ensure it's on top
      }}
      className="back-to-top-button" // Add a class for additional styling if needed
    >
      <i className="fas fa-arrow-alt-circle-up" style={{ fontSize: "30px", color: "#34b233" }}></i> {/* Icon color */}
    </button>
  );
};

export default BackToTopButton;
