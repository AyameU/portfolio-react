import React from 'react';
import {Link} from 'react-router-dom';

const ProjectList = ({projects}) => (
    <>
        {projects.map((project) => (
            <>
                <span className="accent">{project.category}</span>
                <h3>{project.name}</h3>
                <Link to={project.link} target="_blank">
                    <figure className="project-tile"></figure>
                </Link>
                <p>{project.text}</p>
            </>
        ))}
    </>
);

export default ProjectList;