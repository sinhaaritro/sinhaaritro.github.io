import Chip from "components/Chip";
import PrimaryButton from "components/Button";
import openLinkInNewTab from "lib/hooks/openLinkInNewTab";
import { ProjectInterface } from "data/projects";

interface ProjectCardProps extends ProjectInterface {}

const ProjectCard = ({
    title,
    img,
    tags,
    techstack,
    description,
    contributions,
    externalLinks,
}: ProjectCardProps) => {
    return (
        <div className="relative group m-8 w-80 text-center bg-slate-900">
            <div className="h-80 bg-slate-400 origin-right transition ease-in-out duration-500 group-hover:-translate-y-40 shadow-lg shadow-slate-900 group-hover:z-20">
                <img className="h-80 w-80" alt="project-icon" src={img}></img>
                <p className="flex justify-center absolute inset-x-0 bottom-0 h-12 p-2 text-2xl bg-slate-800 text-slate-200">
                    {title}
                </p>
            </div>
            <div className="absolute w-80 p-4 bg-slate-50 origin-top transition ease-in-out duration-500 shadow-lg shadow-slate-900 scale-y-0  group-hover:block group-hover:-translate-y-40 group-hover:scale-y-100 group-hover:z-20">
                <div className="flex flex-wrap ">
                    {tags.map((tag, i) => {
                        return <Chip key={i} {...tag} />;
                    })}
                </div>
                <div className="bg-slate-700 my-2 h-px w-full"></div>
                <div className="flex flex-wrap ">
                    {techstack && (
                        <>
                            {techstack.map((tech, i) => {
                                return <Chip key={i} {...tech} />;
                            })}
                            <div className="bg-slate-700 my-2 h-px w-full"></div>
                        </>
                    )}
                </div>
                <p className="py-2">{description}</p>
                {contributions && (
                    <>
                        <p className="font-medium">My Contributions:</p>
                        <ul>
                            {contributions.map((contribution, i) => {
                                return <li key={i}>{contribution}</li>;
                            })}
                        </ul>
                    </>
                )}
                {externalLinks.map((externalLink, i) => {
                    return (
                        <PrimaryButton
                            key={i}
                            variant="secrondary"
                            onClick={() => openLinkInNewTab(externalLink.url)}
                        >
                            {externalLink.name}
                        </PrimaryButton>
                    );
                })}
            </div>
        </div>
    );
};

export default ProjectCard;
