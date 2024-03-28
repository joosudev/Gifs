import React from "react";
import '../styles.css'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>
        Joosudev - Este proyecto está bajo la Licencia MIT &copy; {currentYear}
      </p>
      <a href="https://github.com/joosudev/Gifs.git" target="_blank" rel="noopener noreferrer">
        <img src="https://img.icons8.com/material-rounded/48/ffffff/github.png" alt="GitHub" className="github-icon" />
      </a>
    </footer>
  );
};

export default Footer;
