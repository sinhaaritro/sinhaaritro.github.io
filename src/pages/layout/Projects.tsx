import Text from "components/Text";
import { useThemeContext } from "config/theme";
import { ProjectsInterface } from "data/projects";
import projectData from "data/projects.json";
import ProjectCard from "layout/ProjectCard";

const Projects = () => {
    const { theme } = useThemeContext();
    const projects = projectData as ProjectsInterface;
    return (
        <section
            id="projects"
            className={`m-8 mx-auto max-w-screen-xl flex flex-col place-content-around h-full grow rounded-2xl drop-shadow ${theme?.primary?.[100]} relative z-10`}
        >
            <Text
                className={`text-4xl font-semibold rounded-t-2xl border-b border-neutral-400 p-2 text-center ${theme?.primary?.[200]}`}
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
