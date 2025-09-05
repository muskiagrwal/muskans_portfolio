import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { FaArrowUp } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    Aos.init();
    document.body.classList.toggle("dark-mode", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className={`container ${darkMode ? "dark-mode" : ""}`}>
        <Home />
        <Experience />
        <Skills />
        <Projects />
        <div id="contact">
          <Contact />
        </div>
      </div>

      {showButton && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            backgroundColor: "white",
            color: "black",
            border: "1px solid #ccc",
            borderRadius: "50%",
            padding: "12px",
            boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
            cursor: "pointer",
            transition: "all 0.3s",
          }}
        >
          <FaArrowUp size={25} />
        </button>
      )}
    </>
  );
};

export default App;
