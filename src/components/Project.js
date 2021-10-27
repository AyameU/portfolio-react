import React from "react";

const Project = ({ project }) => (
    <div id={project.id} className="project">
        <span className="accent">{project.category}</span>
        <h4 id={project.id}>{project.name}</h4>
        <p>{project.text}</p>
        <a href={project.link} target="_blank" rel="noreferrer">
            <figure className={`project-tile ${project.id}`}></figure>
        </a>
    </div>
);

export default Project;