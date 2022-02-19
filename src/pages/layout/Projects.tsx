import Text from "components/Text";
import ProjectCard from "layout/ProjectCard";
import projectData from "data/projects.json";
import { ProjectsInterface } from "data/projects";

const Projects = () => {
    const projects = projectData as ProjectsInterface;
    return (
        <section id="projects" className="p-4">
            <Text
                className="text-4xl font-semibold"
                children="Projects"
                htmlElement={"h1"}
            />
            <div className="flex flex-wrap justify-center z-10">
                {projects.map((project, i) => {
                    return <ProjectCard key={i} {...project} />;
                })}
            </div>
        </section>
    );
};

export default Projects;
