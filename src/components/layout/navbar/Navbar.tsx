import React from "react";
import { useLocation } from "react-router-dom";
import NavigateButton from "../../navigateButton/NavigateButton";
import { NavigationItems } from "../../NavigationItems";
import me from "./me.png";
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
          <img src={me} alt="image" />
        </div>
        <div className="secondContainer">{listNavigationItems}</div>
      </div>
    </div>
  );
};

export default Navbar;
