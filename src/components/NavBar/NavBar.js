import { useState } from "react";
import "./Navbar.css";


const NavBar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <nav className="nav-bar">
      <div className="container">

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-icon" 
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          {isMobileOpen ? "✖️" : "☰"}
        </button>

        {/* Navbar Links */}
        <div className={isMobileOpen ? "nav-elements mobile-open" : "nav-elements"}>
          <ul>
            <li><a href="/#" onClick={() => setIsMobileOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setIsMobileOpen(false)}>About</a></li>
            <li><a href="#projects" onClick={() => setIsMobileOpen(false)}>Projects</a></li>
            <li><a href="#contact" onClick={() => setIsMobileOpen(false)}>Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
