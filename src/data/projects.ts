import { TagKey } from "./projectTag";
import { TechnologyKey } from "./technology";

export type ProjectListInterface = ProjectInterface[];

export interface ProjectInterface {
  title: string;
  img: string;
  tags: TagKey[];
  techstack: TechnologyKey[];
  description: string;
  contributions?: string[];
  externalLinks: ExternalLinksInterface[];
}

export interface ExternalLinksInterface {
  name: string;
  url: string;
}

export const projectList: ProjectListInterface = [
  {
    title: "Notefy",
    img: "string",
    tags: ["MERN", "Frontend", "Backend"],
    techstack: [
      "React",
      "TypeScript",
      "MongoDB",
      "NodeJS",
      "Express",
      "TailwindCSS",
    ],
    description:
      "A minimalist, markdown enabled note-taking app, where you can save notes, tag them and store them in an infinite hierarchal folder structure.",
    externalLinks: [{ name: "Github", url: "https://github.com/Notefy" }],
  },
  {
    title: "MatchFlix",
    img: "https://raw.githubusercontent.com/sinhaaritro/MatchFlix/master/screenshots/Main.png",
    tags: ["WebApp", "Frontend", "Netlify"],
    techstack: ["React", "MaterialUI", "Firebase", "Netlify"],
    description:
      "A movie selector app, where multiple people can log in, make groups and select a movie that all of them like to watch based on common interests.",
    externalLinks: [
      { name: "Github", url: "https://github.com/sinhaaritro/MatchFlix" },
    ],
  },
  {
    title: "Portfolio Website v2",
    img: "string",
    tags: ["Website", "Frontend"],
    techstack: ["React", "TypeScript", "TailwindCSS", "GitHub"],
    description:
      "My current personal website in hopes of sharing a little snippet into my life and passions!",
    externalLinks: [
      { name: "Website", url: "https://sinhaaritro.github.io/" },
      {
        name: "Github",
        url: "https://github.com/sinhaaritro/sinhaaritro.github.io",
      },
    ],
  },
];
