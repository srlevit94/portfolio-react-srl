import React from 'react';
import Project from "../Project";
import { ProjectList } from "../../helpers/ProjectList";
import '../../assets/css/Project.css';



export default function Portfolio() {
  return (
    <div className = "portfolio">
      <h2>Recent Projects:</h2>
      <div className = "projectList">
      {ProjectList.map((project, index) => {
        return (
        <Project key={index} name={project.name} image={project.image} repo = {project.repo} appLink= {project.appLink} />
        );
      })}
      </div>
    </div>
  );
}

