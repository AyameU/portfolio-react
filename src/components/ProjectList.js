import Project from "./Project";

const ProjectList = ({ projects }) => (
    <div className="grid">
        {projects.map((project) => (
            <Project project={project} />
        ))}
    </div>
);

export default ProjectList;