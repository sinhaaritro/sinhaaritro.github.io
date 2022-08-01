import { ChipStyleColor } from "components/Chip/Chip";

export type Technology = {
  [key in TechnologyKey]: { icon: string; text: string; color: ChipStyleColor };
};

// export type TechnologyKey = keyof typeof technologyList;

export type TechnologyKey =
  | "C++"
  | "Dart"
  | "Docker"
  | "Express"
  | "Firebase"
  | "Git"
  | "GitHub"
  | "JavaScript"
  | "MaterialUI"
  | "MongoDB"
  | "Netlify"
  | "NodeJS"
  | "Postgresql"
  | "Python"
  | "React"
  | "TailwindCSS"
  | "TypeScript";

export const technologyList: Technology = {
  "C++": { icon: "Cplusplus", text: "C++", color: "blue" },
  Dart: { icon: "Dart", text: "Dart", color: "sky" },
  Docker: { icon: "Docker", text: "Docker", color: "blue" },
  Express: { icon: "Express", text: "Express", color: "slate" },
  Firebase: { icon: "Firebase", text: "Firebase", color: "yellow" },
  Git: { icon: "Git", text: "Git", color: "orange" },
  GitHub: { icon: "Github", text: "GitHub", color: "slate" },
  JavaScript: { icon: "Javascript", text: "JavaScript", color: "amber" },
  MaterialUI: { icon: "Mui", text: "MaterialUI", color: "blue" },
  MongoDB: { icon: "Mongodb", text: "MongoDB", color: "green" },
  Netlify: { icon: "Netlify", text: "Netlify", color: "red" },
  NodeJS: { icon: "Nodedotjs", text: "NodeJS", color: "emerald" },
  Postgresql: { icon: "Postgresql", text: "Postgresql", color: "indigo" },
  Python: { icon: "Python", text: "Python", color: "yellow" },
  React: { icon: "React", text: "React", color: "sky" },
  TailwindCSS: { icon: "Tailwindcss", text: "TailwindCSS", color: "blue" },
  TypeScript: { icon: "Typescript", text: "TypeScript", color: "blue" },
};
