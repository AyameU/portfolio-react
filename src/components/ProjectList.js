import React from 'react';
import {Link} from 'react-router-dom';

const ProjectList = ({projects}) => (
    <>
        {projects.map((project) => (
            <div id={project.id} className="project">
                <span className="accent">{project.category}</span>
                <h4 id={project.id}>{project.name}</h4>
                <p>{project.text}</p>
                <Link to={project.link} target="_blank">
                    <figure className={`project-tile ${project.id}`}></figure>
                </Link>
            </div>
        ))}
    </>
);

export default ProjectList;