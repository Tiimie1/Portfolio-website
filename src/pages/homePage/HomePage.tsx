import React from "react";
import "./HomePage.css";
import { NavigationItems } from "../../components/NavigationItems";
import NavigateButton from "../../components/navigateButton/NavigateButton";

const listNavigationItems = NavigationItems.map((e) => {
  return <NavigateButton text={e.text} number={e.number}></NavigateButton>;
});

const HomePage = () => {
  return (
    <>
      <div className="main">
        <div className="container">
          <div className="firstContainer">ssss</div>
          <div className="secondContainer">{listNavigationItems}</div>
        </div>
      </div>
      <div className="wrapperContainer">
        <div className="displayContainer"></div>
      </div>
    </>
  );
};

export default HomePage;
