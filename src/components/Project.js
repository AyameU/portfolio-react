const Project = ({ project }) => (
    <div id={project.id} className="project">
        <div className="project-content">
            <span className="accent">{project.category}</span>
            <h4 id={project.id}>{project.name}</h4>
            <p>{project.text}</p>
        </div>
        <a href={project.link} target="_blank" rel="noreferrer">
            <figure className={`project-tile ${project.id}`}>
                {project.image !== "" && <img src={`../images/` + project.image} alt={project.name}/>}
            </figure>
        </a>
    </div>
);

export default Project;