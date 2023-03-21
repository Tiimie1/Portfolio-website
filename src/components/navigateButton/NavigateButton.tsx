import React from "react";
import "./NavigateButton.css";

const NavigateButton = ({
  text,
  number,
  active,
}: {
  text: string;
  number: string;
  active: boolean;
}) => {
  return (
    <div className="textContainer">
      <p
        className="navText"
        style={{ margin: 0, padding: 4 }}
        data-active={active}
      >
        {text}
      </p>
      <p style={{ margin: 0, padding: 4 }}>
        {".".repeat(25 - text.length) + " " + number}
      </p>
    </div>
  );
};

export default NavigateButton;
