import { WithChildren } from "./withChildren";

export type WithClassName<T = {}> = T & WithChildren & { className?: string };
