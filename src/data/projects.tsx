import { ChipProps } from "components/Chip";

export type ProjectsInterface = ProjectInterface[];

export interface ProjectInterface {
  title: string;
  img: string;
  tags: ChipProps[];
  techstack: ChipProps[];
  description: string;
  contributions: string[];
  externalLinks: ExternalLinksInterface[];
}

export interface ExternalLinksInterface {
  name: string;
  url: string;
}
