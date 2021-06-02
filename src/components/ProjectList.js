import React from 'react';
import {Link} from 'react-router-dom';

const ProjectList = ({projects}) => (
    <>
        {projects.map((project) => (
            <div id={project.id} className="project">
                <span className="accent">{project.category}</span>
                <h3 id={project.id}>{project.name}</h3>
                <Link to={project.link} target="_blank">
                    <figure className={`project-tile ${project.id}`}></figure>
                </Link>
                <p>{project.text}</p>
            </div>
        ))}
    </>
);

export default ProjectList;