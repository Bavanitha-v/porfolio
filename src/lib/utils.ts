import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function handleScroll(e: React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLButtonElement>, targetId: string) {
  e.preventDefault();
  const cleanId = targetId.startsWith("#") ? targetId.slice(1) : targetId;
  const element = document.getElementById(cleanId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.pushState(null, "", `#${cleanId}`);
  }
}

