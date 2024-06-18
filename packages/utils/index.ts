import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const flyRegionsDict = {
  eze: {
    code: "eze",
    name: "",
    location: "Buenos Aires, Argentina",
    flag: "🇦🇷",
  },
  bog: {
    code: "bog",
    name: "",
    location: "Bogota, Colombia",
    flag: "🇨🇴",
  },
  sea: {
    code: "sea",
    name: "",
    location: "Seattle, Washington, USA",
    flag: "🇺🇸",
  },
  lax: {
    code: "lax",
    name: "",
    location: "Los Angeles, California, USA",
    flag: "🇺🇸",
  },
  mad: {
    code: "mad",
    name: "",
    location: "Madrid, Spain",
    flag: "🇪🇸",
  },
  sjc: {
    code: "sjc",
    name: "",
    location: "San Jose, California, USA",
    flag: "🇺🇸",
  },
} as const;

export const flyRegions = ["eze", "bog", "sea", "lax", "mad", "sjc"] as const;

export const availableRegions = [...flyRegions] as const;

export const regionsDict = { ...flyRegionsDict } as const;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}