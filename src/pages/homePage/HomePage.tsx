import React from "react";
import "./HomePage.css";
import News from "../../components/newsComponent/News";

const HomePage = () => {
  return (
    <>
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
