import React, { useState, useEffect } from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

const ToggleTheme = () => {
  const savedTheme = localStorage.getItem("darkTheme") === "true"; // Ajout
  const [darkTheme, setDarkTheme] = useState(savedTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--primary-color", darkTheme ? "#22B96B" : "#E54D2E");
    root.style.setProperty("--secondary-color", darkTheme ? "#205937" : "#FDBDAE");
    root.style.setProperty("--tertiary-color", darkTheme ? "#172B1D" : "#FEEBE7");
    root.style.setProperty("--font-color", darkTheme ? "#ffffff" : "#1E1F24");
    root.style.setProperty("--link-color", darkTheme ? "#B2F3C6" : "#5C281C");
    root.style.setProperty("--gradient-a", darkTheme ? "rgba(18,27,21,1) 30%" : "rgba(247,235,233,1) 30%");
    root.style.setProperty("--gradient-b", darkTheme ? "rgba(23,43,29,1) 100%" : "rgba(255,252,252,1) 100%");
    root.style.setProperty("--blur-bg", darkTheme ? "rgba(255, 255, 255, 0.055)" : "rgba(165, 165, 165, 0.116)");
    root.style.setProperty("--blur-dark-bg", darkTheme ? "rgba(255, 255, 255, 0.055)" : "rgba(165, 165, 165, 0.116)");

    localStorage.setItem("darkTheme", darkTheme); // Ajout
  }, [darkTheme]);

  return (
    <div className="toogle-theme" onClick={() => setDarkTheme(prevTheme => !prevTheme)}>
      {darkTheme === true ? (
        <SunIcon className="logo-theme" />
      ) : (
        <MoonIcon className="logo-theme" />
      )}
    </div>
  );
};

export default ToggleTheme;