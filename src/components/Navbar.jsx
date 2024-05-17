import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { EnvelopeClosedIcon, GitHubLogoIcon, LinkedInLogoIcon, MoonIcon, PlayIcon, SunIcon, ArrowUpIcon } from "@radix-ui/react-icons";





const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };




  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => {
    setIsOpen(!isOpen)
  }
 
  return (
    <>
     <div className="header-menu" onClick={openMenu}>
        <p>MENU</p>
        <div className={isOpen ? 'hamburger-menu open' : 'hamburger-menu'}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    <nav style={isOpen ? {transform: 'translateX(0%)'} : {transform: 'translateX(-100%)'}}>
      <ul className="navbar">
        <li
          className="nav"
        >
          <PlayIcon className="triangle-list" />
          <Link
            className={activeLink === "Home" ? "active" : ""}
            to="/"
            onClick={() => handleLinkClick("Home")}
          >
           Home
          </Link>
        </li>
        <li
         
          className="nav"
        >
        <PlayIcon className="triangle-list" />
          <Link
            className={activeLink === "Projets" ? "active" : ""}
            to="/projects"
            onClick={() => handleLinkClick("Projets")}
          >
            Projects
          </Link>
        </li>
        <li
        
          className="nav"
        >
        <PlayIcon className="triangle-list" />
          <Link
            className={activeLink === "about" ? "active" : ""}
            to="/about"
            onClick={() => handleLinkClick("about")}
          >
            About
          </Link>
        </li>
        <li
        
          className="nav"
        >
        <PlayIcon className="triangle-list" />
          <Link
            className={activeLink === "contact" ? "active" : ""}
            to="/contact"
            onClick={() => handleLinkClick("contact")}
          >
            Contact
          </Link>
        </li>
      </ul>
      <div>
      <div className="media-logo">
            <a href="https://github.com/Damien-Generet"><GitHubLogoIcon /></a>
            <a href="https://www.linkedin.com/in/damiengeneret/"><LinkedInLogoIcon /></a>
            <a href="mailto:damiengeneret@outlook.com"><EnvelopeClosedIcon /></a>
          </div>

          <div className="media-link">
          <p>
          <a href="#">Malt</a> | <a href="#">Fiverr</a>
          </p>
          </div>
      </div>
    </nav>
    <div className="arrow-link home-link">
            <Link to="/" className="link">
                <p>Home</p>
                <ArrowUpIcon className="arrow" />
            </Link>
            </div>
    </>
  );
};

export default Navbar;
