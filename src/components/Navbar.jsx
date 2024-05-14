import React from "react";
import { useState, useEffect } from "react";
import { changeScale } from "../effects/PointerEffect";
import { Link } from "react-router-dom";
import { MoonIcon, PlayIcon, SunIcon } from "@radix-ui/react-icons";





const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const [isHovered, setIsHovered] = useState(false);
  const changeStateHovering = () => {
    setIsHovered(!isHovered);
  };

  useEffect(() => {
    if (isHovered) {
      changeScale(2);
    } else {
      changeScale(1);
    }
  }, [changeStateHovering]);



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
          onPointerEnter={changeStateHovering}
          onPointerLeave={changeStateHovering}
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
          onPointerEnter={changeStateHovering}
          onPointerLeave={changeStateHovering}
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
          onPointerEnter={changeStateHovering}
          onPointerLeave={changeStateHovering}
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
          onPointerEnter={changeStateHovering}
          onPointerLeave={changeStateHovering}
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
    </nav>
    </>
  );
};

export default Navbar;
