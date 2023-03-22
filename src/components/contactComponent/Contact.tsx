import React from "react";
import "./Contact.css";

const Contact = ({ text, color }: { text: string; color: string }) => {
  return (
    <div className="displayRow">
      <div className="sqaure" style={{ backgroundColor: color }}></div>
      <p className="contactText" style={{ color: color }}>
        {text}
      </p>
    </div>
  );
};

export default Contact;
