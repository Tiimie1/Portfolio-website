import React from "react";
import "./ProjectsPage.css";
import Project from "../../components/projectComponent/Project";
import { ProjectItems } from "../../components/ProjectItems";

const listProjectItems = ProjectItems.map((e) => {
  return (
    <Project
      key={e.text}
      text={e.text}
      desc={e.description}
      link={e.url}
      num={e.num}
    />
  );
});

const ProjectsPage = () => {
  return (
    <div className="wrapperContainer1">
      <div style={{ marginTop: "20px" }}>{listProjectItems}</div>
    </div>
  );
};

export default ProjectsPage;
