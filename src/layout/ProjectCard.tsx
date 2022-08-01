import SecondaryButton from "components/Button/SecondaryButton";
import Chip from "components/Chip/Chip";
import SimpleIcon from "components/SimpleIcon";
import { ProjectInterface } from "data/projects";
import { tagList } from "data/projectTag";
import { technologyList } from "data/technology";
import openLinkInNewTab from "lib/hooks/openLinkInNewTab";

type ProjectCardProps = { project: ProjectInterface };

function ProjectCard({ project }: ProjectCardProps) {
  const {
    title,
    img,
    tags,
    techstack,
    description,
    contributions,
    externalLinks,
  } = { ...project };

  return (
    <div className="relative group m-1 text-center">
      <div className="h-80 w-80 bg-neutral-400 origin-bottom transition ease-in-out duration-500 group-hover:-translate-y-40 shadow-lg shadow-neutral-700 group-hover:z-20 rounded-2xl">
        <img className="h-80 w-80 rounded-2xl" alt="project-icon" src={img} />
        <p className="absolute inset-x-0 bottom-0 p-2 text-2xl bg-neutral-700 text-neutral-100 rounded-b-2xl group-hover:rounded-none">
          {title}
        </p>
      </div>
      <div className="absolute w-80 p-3 bg-neutral-50 origin-top transition ease-in-out duration-500 shadow-lg shadow-neutral-700 scale-y-0  group-hover:flex flex-col group-hover:-translate-y-40 group-hover:scale-y-100 group-hover:z-20 rounded-b-2xl gap-3">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Chip key={tagList[tag].text} chipStyle={tagList[tag].color}>
              {tagList[tag].text}
            </Chip>
          ))}
        </div>
        <div className="bg-neutral-500 h-px w-full" />
        <div className="flex flex-wrap gap-2">
          {techstack.map((tech) => (
            <Chip
              key={technologyList[tech].icon}
              chipStyle={technologyList[tech].color}
            >
              <SimpleIcon iconName={technologyList[tech].icon} />
            </Chip>
          ))}
        </div>
        <div className="bg-neutral-500 h-px w-full" />
        <p className="text-neutral-800">{description}</p>
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
        <div className="flex flex-wrap gap-2 justify-center">
          {externalLinks.map((externalLink) => (
            <SecondaryButton
              key={externalLink.name}
              onClick={() => openLinkInNewTab(externalLink.url)}
            >
              {externalLink.name}
            </SecondaryButton>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
