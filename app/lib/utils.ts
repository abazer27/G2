// Utility functions for the portfolio
import { Project } from "../types";

export function formatDate(date: Date | string): string {
  const d = new Date(date);
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
  }).format(d);
}

export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + "...";
}

export function getProjectsByCategory(projects: Project[], category?: string) {
  if (!category) return projects;
  return projects.filter(
    (project) => project.category.toLowerCase() === category.toLowerCase(),
  );
}

export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}
