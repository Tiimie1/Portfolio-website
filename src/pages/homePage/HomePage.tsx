import React from "react";
import "./HomePage.css";
import { NavigationItems } from "../../components/NavigationItems";
import NavigateButton from "../../components/navigateButton/NavigateButton";
import News from "../../components/newsComponent/News";
import me from "./me.png";

const listNavigationItems = NavigationItems.map((e) => {
  return <NavigateButton text={e.text} number={e.number}></NavigateButton>;
});

const HomePage = () => {
  return (
    <>
      <div className="main">
        <div className="container">
          <div className="firstContainer">
            <img src={me} alt="image" />
          </div>
          <div className="secondContainer">{listNavigationItems}</div>
        </div>
      </div>
      <div className="wrapperContainer">
        <div className="displayContainer">
          <News />
        </div>
      </div>
      <div className="dividerWrapper">
        <div className="divider"></div>
      </div>
    </>
  );
};

export default HomePage;
