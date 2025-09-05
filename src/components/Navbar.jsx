import React from "react";

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <>
      <div
        className={`container nav_bar ${darkMode ? "dark" : "light"}`}
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <div className="left nav_items">Portfolio</div>
        <div className="right">
          <a href="#home" className="nav_items">Home</a>
          <a href="#experience" className="nav_items">Experience</a>
          <a href="#skills" className="nav_items">Skills</a>
          <a href="#projects" className="nav_items">Projects</a>
          <a href="#contact" className="nav_items">Contact</a>

          {/* Dark Mode Toggle (Slider with Sun & Moon) */}
          <div
            className={`toggle-switch ${darkMode ? "dark" : "light"}`}
            onClick={() => setDarkMode(!darkMode)}
          >
            <div className={`slider ${darkMode ? "dark" : "light"}`}>
              {/* Sun Icon (Only in Light Mode) */}
              {!darkMode && (
                <svg className="icon sun" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"></path>
                </svg>
              )}

              {/* Moon Icon (Only in Dark Mode) */}
              {darkMode && (
                <svg className="icon moon" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                </svg>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* CSS for Dark Mode Toggle */}
      <style>
        {`
          .nav_bar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px 20px;
          }

          .right {
            display: flex;
            align-items: center;
            gap: 20px;
          }

          .nav_items {
            color: white;
            text-decoration: none;
            font-size: 18px;
            cursor: pointer;
            transition: all 0.3s;
          }

          .nav_items:hover {
            color: #facc15;
          }

          .toggle-switch {
            width: 50px;
            height: 25px;
            background-color: #ccc;
            border-radius: 50px;
            position: relative;
            cursor: pointer;
            display: flex;
            align-items: center;
            padding: 3px;
            transition: background 0.3s ease-in-out;
          }

          .toggle-switch.dark {
            background-color: #4ade80;
          }

          .slider {
            width: 20px;
            height: 20px;
            background-color: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            transition: transform 0.3s ease-in-out;
          }

          .slider.light {
            transform: translateX(2px);
          }

          .slider.dark {
            transform: translateX(24px);
          }

          .icon {
            width: 16px;
            height: 16px;
          }

          .sun {
            fill: #fbbf24;
          }

          .moon {
            fill: #1e293b;
          }
        `}
      </style>
    </>
  );
};

export default Navbar;
