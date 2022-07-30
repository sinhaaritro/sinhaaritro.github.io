export type ProjectsInterface = ProjectInterface[];

export interface ProjectInterface {
  title: string;
  img: string;
  tags: TagStackInterface[];
  techstack: TechStackInterface[];
  description: string;
  contributions: string[];
  externalLinks: ExternalLinksInterface[];
}

export interface TagStackInterface {
  icon: string;
  text: string;
}

export interface TechStackInterface {
  icon: string;
  text: string;
}

export interface ExternalLinksInterface {
  name: string;
  url: string;
}
