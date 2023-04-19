import React from "react";
import "./Appbar.css";

//TODO: add margin-top: 38px on titletext if it is opened on windows

const Appbar = () => {
  return (
    <div className="OuterBox">
      <div className="InnerBox">
        <div className="FirstBox">
          <p className="TitleText">Tim Pangersic</p>
        </div>
        <div className="SecondTitleBox"></div>
        <div className="Underline"></div>
      </div>
    </div>
  );
};

export default Appbar;
