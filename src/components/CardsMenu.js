import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import 'bootstrap/dist/css/bootstrap.min.css';

const cards = [
  { id: 1, title: "Introducing Bloom", img: "/image1.jpg", link: "#" },
  { id: 2, title: "The Age of the Collective: From Hyper-individualism to Networked Intelligence", img: "/image2.jpg", link: "#" },
  { id: 3, title: "Social Media is the Original Alignment Problem", img: "/image3.jpg", link: "#" },
];

export default function CardsMenu({ onClose }) {
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    let timers = [];
    cards.forEach((card, index) => {
      const timer = setTimeout(() => {
        setVisibleCards((prev) => [...prev, card]);
      }, index * 500);
      timers.push(timer);
    });
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <motion.div
      className="position-fixed top-50 start-50 translate-middle bg-white shadow-lg p-4 d-flex flex-column align-items-center"
      style={{ width: "85vw", maxWidth: "950px", height: "98vh", zIndex: 1000, borderRadius: "30px", overflow: "hidden" }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <button className="btn-close position-absolute top-0 end-0" style={{margin: "clamp(55px, 90%, 20px)"}} onClick={onClose}></button>
      <h1 className="mb-4 text-center" style={{ fontFamily: "'Merienda', cursive", marginTop: "65px", fontSize: "clamp(1.5rem, 4vw, 2.5rem)" }}>The Magic of Bloom</h1>
      <div className="d-flex flex-wrap justify-content-center w-100" style={{ gap: "20px", maxHeight: "70vh", overflowY: "auto" }}>
        {visibleCards.map((card) => (
          <motion.div 
            key={card.id} 
            className="card text-center p-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.8, delay: 0.5 }}
            style={{ 
              width: "clamp(250px, 90%, 250px)", 
              borderRadius: "15px", 
              border: "4px solid black" 
            }}>
            <div className="d-flex align-items-center justify-content-center" style={{ height: "180px", overflow: "hidden" }}>
              <img src={card.img} alt={card.title} className="w-100 object-fit-cover rounded" style={{ maxHeight: "100%" }} />
            </div>
            <h5 className="mt-2" style={{ fontSize: "clamp(1rem, 3vw, 1.25rem)" }}>{card.title}</h5>
            <a href={card.link} className="text-decoration-none d-block mt-2" 
              style={{ color: "black", fontWeight: "bold", marginBottom: "10px" }}>SEE MORE ➝</a>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
