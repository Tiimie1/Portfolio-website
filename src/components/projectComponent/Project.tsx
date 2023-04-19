import React from "react";
import "./Project.css";

const Project = ({
  text,
  desc,
  link,
  num,
}: {
  text: string;
  desc: string;
  link: string;
  num: number;
}) => {
  return (
    <div className="ProjContainer">
      <div className="titleRowProj">
        <p className="contactText" style={{ color: "lightgreen" }}>
          {text}
        </p>
        <p className="contactText">{num}</p>
      </div>
      <div className="descriptionRow">{desc}</div>
    </div>
  );
};

export default Project;
