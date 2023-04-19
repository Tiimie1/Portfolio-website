import React from "react";
import { useLocation } from "react-router-dom";
import NavigateButton from "../../navigateButton/NavigateButton";
import { NavigationItems } from "../../NavigationItems";
import me from "./images/me.png";
import sloTech from "./images/slo-tech.png";
import socials from "./images/socials.png";
import projects from "./images/projects.png";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();

  const listNavigationItems = NavigationItems.map((e) => {
    const activeClass = location.pathname === e.path ? true : false;
    return (
      <NavigateButton
        text={e.text}
        number={e.number}
        key={e.number}
        active={activeClass}
      ></NavigateButton>
    );
  });

  return (
    <div className="main">
      <div className="container">
        <div className="firstContainer">
          {location.pathname === "/" && <img src={me} alt="Me image" />}
          {location.pathname === "/contact" && (
            <img src={socials} alt="Socials-image" />
          )}
          {location.pathname === "/news" && (
            <img src={sloTech} alt="slo-tech-logo" />
          )}
          {location.pathname === "/projects" && (
            <img src={projects} alt="projects-logo" />
          )}
        </div>
        <div className="secondContainer">{listNavigationItems}</div>
      </div>
    </div>
  );
};

export default Navbar;
