// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState } from "react";
import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  PlayIcon,
  ArrowUpIcon,
} from "@radix-ui/react-icons";
import { handleLinkClick } from "./utils";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");

  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="header-menu" onClick={openMenu}>
        <p>MENU</p>
        <div className={isOpen ? "hamburger-menu open" : "hamburger-menu"}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <nav
        style={
          isOpen
            ? { transform: "translateX(0%)" }
            : { transform: "translateX(-100%)" }
        }
      >
        <ul className="navbar">
          <li className="nav">
            <PlayIcon className="triangle-list" />
            <a
              className={activeLink === "Home" ? "active" : ""}
              href="/#Home"
              onClick={() => handleLinkClick("Home", setActiveLink, openMenu)}
            >
              Home
            </a>
          </li>
          <li className="nav">
            <PlayIcon className="triangle-list" />
            <a
              className={activeLink === "Projects" ? "active" : ""}
              href="/#Projects"
              onClick={() =>
                handleLinkClick("Projects", setActiveLink, openMenu)
              }
            >
              Projects
            </a>
          </li>
          <li className="nav">
            <PlayIcon className="triangle-list" />
            <a
              className={activeLink === "About" ? "active" : ""}
              href="#About"
              onClick={() => handleLinkClick("About", setActiveLink, openMenu)}
            >
              About
            </a>
          </li>
          <li className="nav">
            <PlayIcon className="triangle-list" />
            <a
              className={activeLink === "Contact" ? "active" : ""}
              href="#Contact"
              onClick={() =>
                handleLinkClick("Contact", setActiveLink, openMenu)
              }
            >
              Contact
            </a>
          </li>
        </ul>
        <div>
          <div className="media-logo">
            <a href="https://github.com/Damien-Generet">
              <GitHubLogoIcon />
            </a>
            <a href="https://www.linkedin.com/in/damiengeneret/">
              <LinkedInLogoIcon />
            </a>
            <a href="mailto:damiengeneret@outlook.com">
              <EnvelopeClosedIcon />
            </a>
          </div>

          <div className="media-link">
            <p>
              <a href="#">Malt</a> | <a href="#">Fiverr</a>
            </p>
          </div>
        </div>
      </nav>
      <div className="arrow-link home-link">
        <a
          href="#Home"
          className="link"
          onClick={() => handleLinkClick("Home", setActiveLink, () => {})}
        >
          <p>Home</p>
          <ArrowUpIcon className="arrow" />
        </a>
      </div>
    </>
  );
};

export default Navbar;
