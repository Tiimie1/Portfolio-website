import React from "react";
import "./NavigateButton.css";

const NavigateButton = ({ text, number }: { text: string; number: string }) => {
  return (
    <div className="textContainer">
      <p className="navText" style={{ margin: 0, padding: 4 }}>
        {text}
      </p>
      <p style={{ margin: 0, padding: 4 }}>
        {".".repeat(25 - text.length) + " " + number}
      </p>
    </div>
  );
};

export default NavigateButton;
