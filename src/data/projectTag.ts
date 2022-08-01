import { ChipStyleColor } from "components/Chip/Chip";

export type Tag = {
  [key in TagKey]: { text: string; color: ChipStyleColor };
};

export type TagKey =
  | "Backend"
  | "Frontend"
  | "MERN"
  | "Netlify"
  | "WebApp"
  | "Website";

export const tagList: Tag = {
  Backend: { text: "Backend", color: "green" },
  Frontend: { text: "Frontend", color: "violet" },
  MERN: { text: "MERN", color: "purple" },
  Netlify: { text: "Netlify", color: "red" },
  WebApp: { text: "WebApp", color: "blue" },
  Website: { text: "Website", color: "blue" },
};
