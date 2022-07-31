import SubTitle from "components/Typography/SubTitle";
import { ProjectsInterface } from "data/projects";
import projectData from "data/projects.json";
import ProjectCard from "layout/ProjectCard";

function Projects() {
  const projects = projectData as ProjectsInterface;
  return (
    <section
      id="projects"
      className="my-3 mx-2 max-w-screen-xl flex flex-col place-content-around h-full grow rounded-2xl drop-shadow bg-primary-100 relative z-10"
    >
      <SubTitle className="rounded-t-2xl border-b border-neutral-400 p-2 text-4xl">
        Projects
      </SubTitle>
      <div className="p-3 flex flex-wrap gap-4 justify-center z-10">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
