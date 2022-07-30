import Button from "components/Button";
import Chip from "components/Chip";
import { ProjectInterface } from "data/projects";
import openLinkInNewTab from "lib/hooks/openLinkInNewTab";

interface ProjectCardProps extends ProjectInterface {}

function ProjectCard({
  title,
  img,
  tags,
  techstack,
  description,
  contributions,
  externalLinks,
}: ProjectCardProps) {
  return (
    <div className="relative group m-8 w-80 text-center bg-slate-900 rounded-md bg-inherit">
      <div className="h-80 bg-slate-400 origin-right transition ease-in-out duration-500 group-hover:-translate-y-40 shadow-lg shadow-slate-900 group-hover:z-20 rounded-t-md">
        <img className="h-80 w-80 rounded-md" alt="project-icon" src={img} />
        <p className="flex justify-center absolute inset-x-0 bottom-0 h-12 p-2 text-2xl bg-slate-800 text-slate-200 rounded-b-md group-hover:rounded-none">
          {title}
        </p>
      </div>
      <div className="absolute w-80 p-4 bg-slate-50 origin-top transition ease-in-out duration-500 shadow-lg shadow-slate-900 scale-y-0  group-hover:block group-hover:-translate-y-40 group-hover:scale-y-100 group-hover:z-20 rounded-b-md">
        <div className="flex flex-wrap ">
          {tags.map((tag) => (
            <Chip key={tag.icon} icon={tag.icon} text={tag.text} />
          ))}
        </div>
        <div className="bg-slate-700 my-2 h-px w-full" />
        <div className="flex flex-wrap ">
          {techstack.map((tech) => (
            <Chip key={tech.text} text={tech.text} icon={tech.icon} />
          ))}
        </div>
        <div className="bg-slate-700 my-2 h-px w-full" />
        <p className="py-2">{description}</p>
        {contributions && (
          <>
            <p className="font-medium">My Contributions:</p>
            <ul>
              {contributions.map((contribution) => (
                <li key={contribution}>{contribution}</li>
              ))}
            </ul>
          </>
        )}
        {externalLinks.map((externalLink) => (
          <Button
            key={externalLink.name}
            variant="secondary"
            onClick={() => openLinkInNewTab(externalLink.url)}
          >
            {externalLink.name}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;
