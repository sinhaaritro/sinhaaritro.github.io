import { projectList } from "data/projects";
import ProjectCard from "layout/ProjectCard";
import Section from "layout/Section/Section";
import SectionTitle from "layout/Section/SectionTitle";

function Projects() {
  return (
    <Section id="projects" className="relative z-10">
      <SectionTitle>Projects</SectionTitle>
      <div className="px-8 py-8 flex flex-wrap gap-4 justify-center z-10 lg:px-16 lg:py-16 md:gap-8 xl:gap-16">
        {projectList.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </Section>
  );
}

export default Projects;
