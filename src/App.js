// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BloomingFlower from "./components/BloomingFlower";
import Navbar from "./components/Navbar";
import { useState } from "react"; 

function About() {
  return <div className="flex items-center justify-center h-screen text-4xl font-bold">About Page</div>;
}

function Services() {
  return <div className="flex items-center justify-center h-screen text-4xl font-bold">Services Page</div>;
}

function Contact() {
  return <div className="flex items-center justify-center h-screen text-4xl font-bold">Contact Page</div>;
}

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
    {/* // <Router> */}
      <Navbar isMenuOpen={isMenuOpen}/>
      {/* <Routes> */}
        {/* <Route path="/" element={<BloomingFlower setIsMenuOpen={setIsMenuOpen}/>} /> */}
        <BloomingFlower setIsMenuOpen={setIsMenuOpen}/>
      {/* </Routes> */}
    {/* </Router> */}
    </>
  );
}
