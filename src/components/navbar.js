import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";
/* import { Link } from "react-router-dom"; */
import { HashLink as Link } from "react-router-hash-link";

import "../styles/navbar.css";

const Navbar = () => {
  const navRef = useRef();

  const toggleNav = () => {
    navRef.current.classList.toggle("responsive");
  };

  return (
    <header>
      <h3>
        My <span>Portfolio</span>
      </h3>

      <nav ref={navRef}>
        <div className="links">
          <ul className="nav-links">
            <li>
              <Link to="#home" className="link1" onClick={toggleNav}>
                Home
              </Link>
            </li>
            <li>
              <Link to="#about" className="link2" onClick={toggleNav}>
                About
              </Link>
            </li>
            <li>
              <Link to="#contact" className="link3" onClick={toggleNav}>
                Contact
              </Link>
            </li>
          </ul>

          <button className="nav-btn nav-close-btn" onClick={toggleNav}>
            <FaTimes />
          </button>
        </div>
      </nav>
      <button className="nav-btn" onClick={toggleNav}>
        <FaBars />
      </button>
    </header>
  );
};

export default Navbar;
