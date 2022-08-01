import SubTitle from "components/Typography/SubTitle";
import { projectList } from "data/projects";
import ProjectCard from "layout/ProjectCard";

function Projects() {
  return (
    <section
      id="projects"
      className="my-3 mx-2 max-w-screen-xl flex flex-col place-content-around h-full grow rounded-2xl drop-shadow bg-primary-100 relative z-10"
    >
      <SubTitle className="rounded-t-2xl border-b border-neutral-400 p-2 text-4xl">
        Projects
      </SubTitle>
      <div className="p-3 flex flex-wrap gap-4 justify-center z-10">
        {projectList.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
