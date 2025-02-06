import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import 'bootstrap/dist/css/bootstrap.min.css';
import CardsMenu from "./CardsMenu";

export default function BloomingFlower({ setIsMenuOpen }) {
  const [playVideo, setPlayVideo] = useState(false);
  const [headerOpacity, setHeaderOpacity] = useState(1);
  const [hasPlayed, setHasPlayed] = useState(false);
  const [showModal, setShowModal] = useState(false); // Track modal visibility
  const videoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const videoPosition = videoRef.current.getBoundingClientRect();
      const videoVisible = videoPosition.top < window.innerHeight && videoPosition.bottom >= 0;
      
      if (videoVisible && !hasPlayed) {
        setPlayVideo(true);
        setHasPlayed(true);
      }
      
      // Adjust opacity of header as you scroll down
      const headerHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
      const fadeOutPoint = headerHeight / 2;
      setHeaderOpacity(Math.max(1 - scrollPosition / fadeOutPoint, 0));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasPlayed]);

  useEffect(() => {
    if (playVideo && videoRef.current) {
      videoRef.current.play();
    }
  }, [playVideo]);

  return (
    <div className="position-relative bg-black" style={{ minHeight: "200vh" }}>
      
      {/* Header Section */}
      <motion.header 
        className="d-flex flex-column align-items-center justify-content-center text-center min-vh-100"
        style={{ 
          opacity: headerOpacity, 
          transition: "opacity 0.5s ease-out", 
          position: "relative", 
          zIndex: 10,
          background: "rgba(0, 0, 0, 0.5)",
          width: "100%",
          padding: "10vh 0",
          marginTop: "-55px"
        }}
      >
        <h1 style={{ fontFamily: "'Merienda', cursive", fontSize: "2.5rem", fontWeight: "700", color: "#ebeced" }}>
          Welcome to Bloom<br/> A new way to connect, grow, and thrive
        </h1>
        <p className="lead" style={{ color: "#ebeced", fontSize: "1rem", fontWeight: "600", maxWidth: "700px", marginTop: "10px"}}>
          Break free from the noise of traditional social media. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, sit amet consectetur adipisicing.
        </p>

        {/* Buttons */}
        <div className="mt-4 d-flex gap-3">
          <button className="btn btn-light fw-bold px-4 py-2">Join the Movement</button>
          <button className="btn btn-outline-light fw-bold px-4 py-2">Learn More</button>
        </div>
      </motion.header>

      {/* Blooming Flower Video */}
      <div className="position-relative w-100 d-flex justify-content-center" style={{ marginTop: "-150px", zIndex: 5 }}>
        <video 
          ref={videoRef} 
          className="w-75 h-auto" 
          muted 
          playsInline
          onClick={() => { setShowModal(true); setIsMenuOpen(true); }}  // Open modal on video click
          style={{
            transform: "scale(1.2)",
            borderRadius: "10px",
            cursor: "pointer"
          }}
        >
          <source src="/flower.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Show Modal if Clicked */}
      {showModal && <CardsMenu onClose={() => { setShowModal(false); setIsMenuOpen(false); }} />}
    </div>
  );
}
